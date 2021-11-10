import { BitUtil } from "./BitUtil";
import { Spackage } from "./Spackage";
import { SeekOrigin, SprotoTypeSize } from "./SprotoConst";
import { SprotoCore } from "./SprotoCore";
import { SprotoStream } from "./SprotoStream";
import { SprotoTypeBase } from "./SprotoTypeBase";

export class SprotoTypeSerialize {
	static readonly sizeof_uint64 = 8;
	static readonly sizeof_uint32 = 4;

	private m_HeaderIdx: number;
	private m_HeaderSz: number;
	private m_HeaderCap = SprotoTypeSize.SIZEOF_HEADER;

	private m_DataView: DataView

	private m_Data: SprotoStream;
	private m_DataIdx: number;

	private m_Lasttag: number = -1;
	private m_Index: number = 0;

	public constructor() {
		this.m_DataView = new DataView(new ArrayBuffer(8))
	}

	private _setHeaderFn(fn: number): void {
		this.m_Data.set(this.m_HeaderIdx - 2, fn & 0xff)
		this.m_Data.set(this.m_HeaderIdx - 1, (fn >> 8) & 0xff)
	}

	private _writeHeaderRecord(record: number): void {
		this.m_Data.set(this.m_HeaderIdx + this.m_HeaderCap - 2, record & 0xff)
		this.m_Data.set(this.m_HeaderIdx + this.m_HeaderCap - 1, (record >> 8) & 0xff)

		this.m_HeaderCap += 2
		this.m_Index++;
	}

	private _writeUint32ToUint64Sign(is_negative: boolean): void {
		let v = is_negative ? 0xff : 0

		this.m_Data.writeByte(v)
		this.m_Data.writeByte(v)
		this.m_Data.writeByte(v)
		this.m_Data.writeByte(v)
	}

	private _writeTag(tag: number, value: number): void {
		let stag = tag - this.m_Lasttag - 1;
		if (stag > 0) {
			stag = (stag - 1) * 2 + 1;
			if (stag > 0xffff)
				SprotoTypeSize.error("tag is too big.");

			this._writeHeaderRecord(stag);
		}

		this._writeHeaderRecord(value);
		this.m_Lasttag = tag;
	}

	private _writeInt32(v: number): void {
		this.m_DataView.setInt32(0, v)
		this.m_Data.writeByte(this.m_DataView.getUint8(3))
		this.m_Data.writeByte(this.m_DataView.getUint8(2))
		this.m_Data.writeByte(this.m_DataView.getUint8(1))
		this.m_Data.writeByte(this.m_DataView.getUint8(0))
	}

	private _writeUint64(v: number): void {
		this.m_Data.writeByte(v & 0xff);
		this.m_Data.writeByte((v / Math.pow(2, 8)) & 0xff);
		this.m_Data.writeByte((v / Math.pow(2, 16)) & 0xff);
		this.m_Data.writeByte((v / Math.pow(2, 24)) & 0xff);
		this.m_Data.writeByte((v / Math.pow(2, 32)) & 0xff);
		this.m_Data.writeByte((v / Math.pow(2, 40)) & 0xff);
		this.m_Data.writeByte((v / Math.pow(2, 48)) & 0xff);
		this.m_Data.writeByte((v / Math.pow(2, 56)) & 0xff);

	}

	private _fillSize(sz: number): void {
		if (sz < 0)
			SprotoTypeSize.error("fill invaild size.");

		this._writeInt32(sz);
	}

	private _encodeInteger(v: number): number {
		this._fillSize(4);

		this._writeInt32(v);
		return SprotoTypeSize.SIZEOF_LENGTH + 4
	}

	private _encodeUint64(v: number): number {
		this._fillSize(SprotoTypeSerialize.sizeof_uint64);

		this._writeUint64(v);
		return SprotoTypeSize.SIZEOF_LENGTH + SprotoTypeSerialize.sizeof_uint64;
	}

	private _encodeString(str: string): number {
		let sArray: Uint8Array = BitUtil.encodeUTF8(str);
		this._fillSize(sArray.length);
		this.m_Data.write(sArray, 0, sArray.length);

		return SprotoTypeSize.SIZEOF_LENGTH + sArray.length;
	}

	private _encodeStruct(clsName: string, obj: SprotoTypeBase): number {
		let szPos = this.m_Data.Position;
		let len = SprotoCore.encodeObj(clsName, obj, this.m_Data);

		this.m_Data.seek(SprotoTypeSize.SIZEOF_LENGTH, SeekOrigin.Current);
		
		let curPos = this.m_Data.Position;

		this.m_Data.seek(szPos, SeekOrigin.Begin);
		this._fillSize(len);
		this.m_Data.seek(curPos, SeekOrigin.Begin);

		return SprotoTypeSize.SIZEOF_LENGTH + len;
	}

	private _clear(): void {
		this.m_Index = 0;
		this.m_HeaderIdx = 2;
		this.m_Lasttag = -1;
		this.m_Data = null;
		this.m_HeaderCap = SprotoTypeSize.SIZEOF_HEADER;
	}

	public wi(integer: number, tag: number): void {
		this.m_DataView.setInt32(0, integer)
		let sz = this.m_DataView.getInt32(0) == integer ? SprotoTypeSerialize.sizeof_uint32 : SprotoTypeSerialize.sizeof_uint64
		// let vh = integer >> 31;
		// let vh = this.m_DataView.getInt32(0);
		// let sz = (vh == 0 || vh == -1) ? (SprotoTypeSerialize.sizeof_uint32) : (SprotoTypeSerialize.sizeof_uint64);
		let value = 0;

		if (sz == SprotoTypeSerialize.sizeof_uint32) {
			let v = integer;
			if (v == 0 || v == 1) {
				value = ((v + 1) * 2);
				sz = 2;
			} else {
				sz = this._encodeInteger(v);
			}
			// if (v < 0x7fff) {
			// 	value = ((v + 1) * 2);
			// 	sz = 2;
			// } else {
				// sz = this._encodeInteger(v);
			// }

		} else if (sz == SprotoTypeSerialize.sizeof_uint64) {
			let v = integer;
			sz = this._encodeUint64(v);

		} else {
			SprotoTypeSize.error("invaild integer size.");
		}

		this._writeTag(tag, value);
	}

	public wia(integer_list: number[], tag: number): void {
		if (integer_list == null || integer_list.length <= 0)
			return;

		let sz_pos = this.m_Data.Position;
		this.m_Data.seek(sz_pos + SprotoTypeSize.SIZEOF_LENGTH, SeekOrigin.Begin);

		let begin_pos = this.m_Data.Position;
		let intlen = SprotoTypeSerialize.sizeof_uint32;
		this.m_Data.seek(begin_pos + 1, SeekOrigin.Begin);

		for (let index = 0; index < integer_list.length; index++) {
			let v = integer_list[index];
			// let vh = v >> 31;
			let integer = v
			this.m_DataView.setInt32(0, integer)
			let sz = this.m_DataView.getInt32(0) == integer? (SprotoTypeSerialize.sizeof_uint32) : (SprotoTypeSerialize.sizeof_uint64);
			// let sz = (vh == 0 || vh == -1) ? (SprotoTypeSerialize.sizeof_uint32) : (SprotoTypeSerialize.sizeof_uint64);

			if (sz == SprotoTypeSerialize.sizeof_uint32) {
				this._writeInt32(v);
				if (intlen == SprotoTypeSerialize.sizeof_uint64) {
					let is_negative = ((v & 0x80000000) == 0) ? (false) : (true);
					this._writeUint32ToUint64Sign(is_negative);
				}

			} else if (sz == SprotoTypeSerialize.sizeof_uint64) {
				if (intlen == SprotoTypeSerialize.sizeof_uint32) {
					this.m_Data.seek(begin_pos + 1, SeekOrigin.Begin);
					for (let i = 0; i < index; i++) {
						let value = (integer_list[i]);
						this._writeUint64(value);
					}
					intlen = SprotoTypeSerialize.sizeof_uint64;
				}
				this._writeUint64(v);

			} else {
				SprotoTypeSize.error("invalid integer size(" + sz + ")");
			}
		}

		let cur_pos = this.m_Data.Position;
		this.m_Data.seek(begin_pos, SeekOrigin.Begin);
		this.m_Data.writeByte(intlen);

		let size = (cur_pos - begin_pos);
		this.m_Data.seek(sz_pos, SeekOrigin.Begin);
		this._fillSize(size);

		this.m_Data.seek(cur_pos, SeekOrigin.Begin);
		this._writeTag(tag, 0);
	}


	public wb(b: boolean, tag: number): void {
		let v = (b) ? (1) : (0);
		this.wi(v, tag);
	}

	public wba(b_list: boolean[], tag: number): void {
		if (b_list == null || b_list.length <= 0)
			return;

		this._fillSize(b_list.length);
		for (let i = 0; i < b_list.length; i++) {
			let v = ((b_list[i]) ? (1) : (0));
			this.m_Data.writeByte(v);
		}

		this._writeTag(tag, 0);
	}


	public ws(str: string, tag: number): void {
		this._encodeString(str);
		this._writeTag(tag, 0);
	}

	public wsa(str_list: string[], tag: number): void {
		if (str_list == null || str_list.length <= 0)
			return;
		let sz = 0;
		for (let v in str_list) {
			sz += SprotoTypeSize.SIZEOF_LENGTH + BitUtil.UTF8ByteCount(v);
		}
		this._fillSize(sz);

		for (let v in str_list) {
			this._encodeString(v);
		}

		this._writeTag(tag, 0);
	}


	public wo(clsName: string, obj: SprotoTypeBase, tag: number): void {
		this._encodeStruct(clsName, obj);
		this._writeTag(tag, 0);
	}

	private writeSet(func: Function, tag: number): void {
		let sz_pos = this.m_Data.Position;
		this.m_Data.seek(SprotoTypeSize.SIZEOF_LENGTH, SeekOrigin.Current);

		func();

		let cur_pos = this.m_Data.Position;
		let sz = (cur_pos - sz_pos - SprotoTypeSize.SIZEOF_LENGTH);
		this.m_Data.seek(sz_pos, SeekOrigin.Begin);
		this._fillSize(sz);

		this.m_Data.seek(cur_pos, SeekOrigin.Begin);

		this._writeTag(tag, 0);
	}


	public woa(clsName: string, obj_list: SprotoTypeBase[], tag: number): void {
		if (obj_list == null || obj_list.length <= 0)
			return;

		let func = () => {
			for (let v of obj_list) {
				this._encodeStruct(clsName, v);
			}
		};

		this.writeSet(func, tag);
	}

	public wod(clsName: string, map: any, tag: number): void {
		if (map == null || map.length <= 0)
			return;

		let func = () => {
			for (var pair of map) {
				this._encodeStruct(clsName, map[pair]);
			}
		};

		this.writeSet(func, tag);
	}

	public open(stream: SprotoStream, max_field_count: number): void {
		this._clear();

		this.m_HeaderSz = SprotoTypeSize.SIZEOF_HEADER + max_field_count * SprotoTypeSize.SIZEOF_FIELD;
		this.m_Data = stream;
		this.m_HeaderIdx = stream.Position + this.m_HeaderCap;
		this.m_DataIdx = this.m_Data.seek(this.m_HeaderSz, SeekOrigin.Current);
	}


	public close(): number {
		this._setHeaderFn(this.m_Index);

		let up_count = this.m_HeaderSz - this.m_HeaderCap;
		this.m_Data.moveUp(this.m_DataIdx, up_count);

		let count = this.m_Data.Position - this.m_HeaderIdx + SprotoTypeSize.SIZEOF_HEADER;

		this._clear();

		return count;
	}
}