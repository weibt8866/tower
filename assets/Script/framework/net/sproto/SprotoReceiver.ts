import { SprotoConst } from "./SprotoConst";
import { SprotoCore } from "./SprotoCore";
import { SprotoTypeBase } from "./SprotoTypeBase";

export class SprotoReceiver {
	private static _rpcReqHandlerDict: { [key: number]: any};

	public static init(): void {
		SprotoReceiver._rpcReqHandlerDict = {};
	}

	public static addHandler(cmd: number, rpc: Function, thisObj: any): void {
		if (!rpc) {
			return;
		}

		if (SprotoReceiver._rpcReqHandlerDict[cmd]) {
			console.info("协议监听重复！cmd:" + cmd)
		}

		SprotoReceiver._rpcReqHandlerDict[cmd] = {HandlerFunc: rpc, thisObject: thisObj}
	}

	public static addHandlers(cmd: number, rpc: Function, thisObj: any): void {
		if (!rpc) {
			return;
		}

		let data = SprotoReceiver._rpcReqHandlerDict[cmd];
		
		if (data == null) {
			data = {};
			data.HandlerFunc = function(rsp) {
				for (let listData of this.list) {
					listData.func.call(listData.obj, rsp)
				}
			}
			data.thisObject = data;
			data.list = [];
			SprotoReceiver._rpcReqHandlerDict[cmd] = data;
		}

		data.list.push({func: rpc, obj: thisObj});
	}

	public static removeHandler(cmd: number): void {
		if(SprotoReceiver._rpcReqHandlerDict[cmd]) {
			delete SprotoReceiver._rpcReqHandlerDict[cmd];
		} else {
			console.error("Sproto Receiver Handler is not! cmd:" + cmd);
		}
	}

	public static handlerType(tag: number, session: number, buffer: Uint8Array, offset: number): SprotoTypeBase {
		let funcObj = SprotoReceiver._rpcReqHandlerDict[tag];
		if (funcObj == null) {
			console.log("此消息没有添加监听方法，tag:", tag);
			return null;
		}

		if(SprotoConst.S2C_PROTOCOL.get(tag) == null) {
			console.log("**** tag:" + tag);
		}

		let reqType:string = SprotoConst.S2C_PROTOCOL.get(tag).requestType;

		if(reqType == null) {
			console.log("此消息解码失败，tag:", tag);
			return null;
		}

		let obj = SprotoCore.decodeObj(reqType, buffer, offset);

		this.logRecData(tag, obj);

		let rpcRsp = funcObj.HandlerFunc.call(funcObj.thisObject, obj);

		if (session != null) {
			return rpcRsp;
		}

		return null;
	}

	public static logRecData(tag: number, data: SprotoTypeBase) {
		
			let reqType:string = SprotoConst.S2C_PROTOCOL.get(tag).requestType;
		
			console.log("收到包:" + tag + ", " + reqType);
			console.log(data);
		
	}
}