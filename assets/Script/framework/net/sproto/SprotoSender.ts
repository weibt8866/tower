import { Spackage } from "./Spackage";
import { SeekOrigin, SprotoConst } from "./SprotoConst";
import { SprotoCore } from "./SprotoCore";
import { SprotoPack } from "./SprotoPack";
import { SprotoStream } from "./SprotoStream";
import { SprotoTypeBase } from "./SprotoTypeBase";

export class SprotoSender {
	private static MAX_PACK_LEN = (1 << 16) - 1;

	private static _sendPack: SprotoPack;
	private static _sendStream: SprotoStream;

	private static _session: number;
	private static _rpcRspHandlerDict: {[key: number]: Function};
	private static _sessionDict: {[key: number]: string};

	public static init(): void {
		SprotoSender._session = 0;
		SprotoSender._rpcRspHandlerDict = {}
		SprotoSender._sessionDict = {}
		SprotoSender._sendPack = new SprotoPack();
		SprotoSender._sendStream = new SprotoStream();
	}

	public static pack(tag: number, rpcReq: SprotoTypeBase = null, rpcRspHandler: Function = null, thisObj: any = null): ArrayBuffer {
		if (rpcRspHandler != null) {
			let session = ++SprotoSender._session;
			SprotoSender._rpcRspHandlerDict[session] = thisObj && rpcRspHandler.bind(thisObj) || rpcRspHandler;
			SprotoSender._sessionDict[session] = SprotoConst.C2S_PROTOCOL.get(tag).responseType;
			return SprotoSender.sendData(rpcReq, session, tag)
		} else {
			return SprotoSender.sendData(rpcReq, null, tag)
		}
	}

	public static sendData(rpc: SprotoTypeBase, session, tag: number): ArrayBuffer {
		this.logSendData(rpc, session, tag);

		let pkg: Spackage = new Spackage();
		pkg.type = tag;
		
		if (session != null) {
			pkg.session = session;
		}
		
		let stream = SprotoSender._sendStream;
		stream.seek(0, SeekOrigin.Begin);
		let len = Spackage.encodeSpackage(pkg, stream);
		
		if (rpc != null) {
			var reqType:string = SprotoConst.C2S_PROTOCOL.get(tag).requestType;
			len += SprotoCore.encodeObj(reqType, rpc, stream);
		}

		let data: Uint8Array = SprotoSender._sendPack.pack(stream.Buffer, len);
		if (data.length > SprotoSender.MAX_PACK_LEN) {
			console.log("data.Length > " + SprotoSender.MAX_PACK_LEN + " => " + data.length);
			return null;
		}

		return data.buffer;
	}

	public static handlerSession(session: number, buffer: Uint8Array, offset: number): void {
		let respType =  SprotoSender._sessionDict[session];
		let responseFunc = SprotoSender._rpcRspHandlerDict[session];
		if (respType && responseFunc) {
			let obj = SprotoCore.decodeObj(respType, buffer, offset);

			this.logSessionData(session, obj, respType);

			responseFunc(obj);
		} else {
			console.warn("SprotoSender.Handler not found => " + session);
		}
		SprotoSender._sessionDict[session] = null;
		SprotoSender._rpcRspHandlerDict[session] = null;

		delete SprotoSender._sessionDict[session];
		delete SprotoSender._rpcRspHandlerDict[session];
	}

	public static logSendData(data: SprotoTypeBase, session, tag: number) {
		var reqType:string = SprotoConst.C2S_PROTOCOL.get(tag).requestType;
		if (reqType) {
			console.log("发送包:" + tag + ", " + reqType);
		} else {
			console.log("发送包:" + tag);
		}
		console.log(data);
	}

	public static logSessionData(session: number, data: any, type:string) {
		console.log("收到包:" + type);
		console.log(data);
	}
}