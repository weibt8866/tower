import { SprotoConst } from "./SprotoConst";
import { SprotoCore } from "./SprotoCore";
import { SprotoStream } from "./SprotoStream";
import { SprotoTypeBase } from "./SprotoTypeBase";
import { SprotoTypeDeserialize } from "./SprotoTypeDeserialize";

export class Spackage implements SprotoTypeBase {
	public type: number;
	public session: number;

	/**
     * 读取消息类型和Session
     * @param d 反序列化
     * @param pkg rpc类型包
     */
	public static decodeSpackage(dser: SprotoTypeDeserialize, pkg: Spackage): SprotoTypeBase {
		let tag = -1;
		while ((tag = dser.rt()) != -1) {
			switch (tag) {
				case 0: pkg.type = dser.ri(); break;
				case 1: pkg.session = dser.ri(); break;
				default: dser.nod(); break;
			}
		}
		return pkg
	}

	/**
     * 写入消息类型和Session
     * @param pkg rpc类型包
     * @param st SprotoStream
     * @param n 数据个数
     */
	public static encodeSpackage(pkg: Spackage, st: SprotoStream, n: number = 2) {
		let ser = SprotoCore.getSerialize(st, n)

		if (pkg.type != undefined) {
			ser.wi(pkg.type, 0);
		}

		if (pkg.session != undefined) {
			ser.wi(pkg.session, 1);
		}

		return SprotoCore.closeSerialize(ser)
	}
}