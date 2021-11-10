import { SprotoTypeSerialize } from "./SprotoTypeSerialize";
import { SprotoTypeDeserialize } from "./SprotoTypeDeserialize";
import { SprotoStream } from "./SprotoStream";
import { SprotoPack } from "./SprotoPack";
import { Spackage } from "./Spackage";
import { SprotoSender } from "./SprotoSender";
import { SprotoReceiver } from "./SprotoReceiver";
import { SprotoConst } from "./SprotoConst";

export class SprotoCore {

    private static _parserPack: SprotoPack;
    private static _pkg: Spackage;

    public static mSerialize: SprotoTypeSerialize[] = []
    public static mDeserialize: SprotoTypeDeserialize[] = []

    public static init(): void {
        SprotoCore._parserPack = new SprotoPack();
        SprotoCore._pkg = new Spackage();
    }

    public static getSerialize(st: SprotoStream, max: number): SprotoTypeSerialize {
        let ser = SprotoCore.mSerialize.pop()
        if (ser == null) {
            ser = new SprotoTypeSerialize
        }
        ser.open(st, max)
        return ser
    }

    public static closeSerialize(ser: SprotoTypeSerialize) {
        let n = ser.close()
        SprotoCore.mSerialize.push(ser)
        return n
    }

    public static getDeserialize(byteArray: Uint8Array, offset: number, size: number): SprotoTypeDeserialize {
        let ser = SprotoCore.mDeserialize.pop()
        if (ser == null) {
            ser = new SprotoTypeDeserialize
        }
        ser.init(byteArray, offset, size)
        return ser
    }

    public static closeDeserialize(ser: SprotoTypeDeserialize): void {
        ser.Clear()
        SprotoCore.mDeserialize.push(ser)
    }

    public static dispatch(byteArray: Uint8Array): ArrayBuffer {
        let pack = SprotoCore._parserPack;
        let data = pack.unpack(byteArray);

        let sp = SprotoCore.getDeserialize(data, 0, data.length)

        let packet = SprotoCore._pkg;
        packet.type = undefined
        packet.session = undefined
        
        Spackage.decodeSpackage(sp, packet);
        
        let offset = sp.Size()

        if (packet.type) {
            let rpcRsp = SprotoReceiver.handlerType(packet.type, packet.session, data, offset);
            
            if (rpcRsp != null) {
                return SprotoSender.sendData(rpcRsp, packet.session, packet.type);
            }
        } else {
            SprotoSender.handlerSession(packet.session, data, offset);
        }

        SprotoCore.closeDeserialize(sp)
        
        return null;
    }

    public static encodeObj(protocolName: string, data: any, stream: SprotoStream) {
		var enObj = SprotoConst.TRANSCODE_DICT[protocolName];
		
		if(enObj && enObj.e) {
			let ser = SprotoCore.getSerialize(stream, enObj.e.c);
			let encode = enObj.e.m;

			for (let key in encode) {
				if(typeof data[key] != "undefined") {
					var fun = encode[key];

					if(fun.length == 3) {
						ser[fun[0]].call(ser, fun[1], data[key], fun[2]);
					} else {
						ser[fun[0]].call(ser, data[key], fun[1]);
					}
				}
			}

			return SprotoCore.closeSerialize(ser)
		} else {
            return 0
        }
	}
	
	public static decodeObj(protocolName: string, buffer: Uint8Array, offset: number = 0, size: number = buffer.length): any {
		let obj = {};
		let deObj = SprotoConst.TRANSCODE_DICT[protocolName]

		if(deObj && deObj.d) {
            let deser = SprotoCore.getDeserialize(buffer, offset, size);
			let decode = deObj.d;
			let tag = -1;

			while ((tag = deser.rt()) != -1) {
				let fun = decode[tag];

				if(fun) {
					if(fun.length == 3) {
						obj[fun[0]] = deser[fun[1]].call(deser, fun[2]);
					} else {
						obj[fun[0]] = deser[fun[1]].call(deser);
					}
				} else {
					deser.nod
				}
			}
		}

		return obj
	}
}