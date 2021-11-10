import { ProtocolFunDict } from "./ProtocolFunDict";

export class SprotoConst {
	//客户端发送协议
	public static C2S_PROTOCOL = new ProtocolFunDict();

	//服务端发送协议
	public static S2C_PROTOCOL= new ProtocolFunDict();

	//网络协议转码
	public static TRANSCODE_DICT = {}
}

export enum SeekOrigin {
	Begin,
	Current,
	End,
}

export class SprotoTypeSize {
	public static readonly SIZEOF_HEADER = 2;
	public static readonly SIZEOF_LENGTH = 4;
	public static readonly SIZEOF_FIELD = 2;
	public static readonly ENCODE_MAX_SIZE = 0x1000000;

	public static error(info: string) {
		console.log(info)
	}
}