import { BitUtil } from "./BitUtil";
import { SprotoTypeSize } from "./SprotoConst";
import { SprotoCore } from "./SprotoCore";
import { SprotoTypeReader } from "./SprotoTypeReader";

export class SprotoTypeDeserialize {

	static readonly sizeof_uint64 = 8;
	static readonly sizeof_uint32 = 4;

	private reader: SprotoTypeReader;
	private begin_data_pos: number;
	private cur_field_pos: number;

	private fn: number;
	private tag: number = -1;
	private value: number;

	constructor() {
		this.reader = new SprotoTypeReader
	}

	public init(byteArray: Uint8Array, offset: number, size: number): void {
		this.Clear();
		this.reader.init(byteArray, offset, size)
		this._doInit()
	}

	private _doInit(): void {
		this.fn = this._readWord();

		var header_length = SprotoTypeSize.SIZEOF_HEADER + this.fn * SprotoTypeSize.SIZEOF_FIELD;
		this.begin_data_pos = header_length;
		this.cur_field_pos = this.reader.Position;

		if (this.reader.Length < header_length) {
			SprotoTypeSize.error("invalid decode header.");
		}

		this.reader.seek(this.begin_data_pos);
	}

	private _expand64(v: number): number {
		var value = v;
		if ((value & 0x80000000) != 0) {
			value |= (0xffffffff00000000);
		}
		return value;
	}

	private _readWord(): number {
		let v1 = this.reader.readByte()
		let v2 = this.reader.readByte()
		return Math.pow(2, 8) * v2 + v1
	}

	private _readDword(): number {
		let v1 = this.reader.readByte()
		let v2 = this.reader.readByte()
		let v3 = this.reader.readByte()
		let v4 = this.reader.readByte()

		return v4 * Math.pow(2, 24) + v3 * Math.pow(2, 16) + v2 * Math.pow(2, 8) + v1
	}

	private _readDouble(): number {
		let v1 = this.reader.readByte()
		let v2 = this.reader.readByte()
		let v3 = this.reader.readByte()
		let v4 = this.reader.readByte()
		let v5 = this.reader.readByte()
		let v6 = this.reader.readByte()
		let v7 = this.reader.readByte()
		let v8 = this.reader.readByte()
		return v8 * Math.pow(2, 56) + v7 * Math.pow(2, 48) + v6 * Math.pow(2, 40) + v5 * Math.pow(2, 32) + v4 * Math.pow(2, 24) + v3 * Math.pow(2, 16) + v2 * Math.pow(2, 8) + v1
	}

	private _readArraySize(): number {
		if (this.value >= 0)
			SprotoTypeSize.error("invalid array value.");

		var sz = this._readDword();
		if (sz < 0)
			SprotoTypeSize.error("error array size(" + sz + ")");

		return sz;
	}

	private _readElement(clsName: string, sz: number) {
		let read_size = 0;
		if (sz < SprotoTypeSize.SIZEOF_LENGTH) {
			SprotoTypeSize.error("error array size.");
		}

		let hsz = this._readDword();
		sz -= SprotoTypeSize.SIZEOF_LENGTH;
		read_size += SprotoTypeSize.SIZEOF_LENGTH;

		if (hsz > sz) {
			SprotoTypeSize.error("error array object.");
		}

		let obj = SprotoCore.decodeObj(clsName, this.reader.Buffer, this.reader.Offset, hsz);

		this.reader.seek(this.reader.Position + hsz);

		read_size += hsz;
		return [obj, read_size];
	}

	public rt(): number {
		var pos = this.reader.Position;
		this.reader.seek(this.cur_field_pos);

		while (this.reader.Position < this.begin_data_pos) {
			this.tag++;
			var value = this._readWord();

			if ((value & 1) == 0) {
				this.cur_field_pos = this.reader.Position;
				this.reader.seek(pos);
				this.value =  Math.floor(value * 0.5) - 1;
				return this.tag;
			}

			this.tag += Math.floor(value * 0.5);
		}

		this.reader.seek(pos);
		return -1;
	}


	public ri(): number {
		if (this.value >= 0) {
			return (this.value);
		} else {
			var sz = this._readDword();
			if (sz == SprotoTypeDeserialize.sizeof_uint32) {
				var v = this._expand64(this._readDword());
				return v;
			} else if (sz == SprotoTypeDeserialize.sizeof_uint64) {
				// var low = this._ReadDword();
				// var hi = this._ReadDword();
				// var v = low | hi << 32;
				// return v;
				return this._readDouble();
			} else {
				SprotoTypeSize.error("read invalid integer size (" + sz + ")");
			}
		}

		return 0;
	}

	public ria(): number[] {
		var integer_list: number[] = null;

		var sz = this._readArraySize();
		if (sz == 0) {
			return [];
			// return new List<Int64>();
		}

		var len = this.reader.readByte();
		sz--;

		if (len == SprotoTypeDeserialize.sizeof_uint32) {
			if (sz % SprotoTypeDeserialize.sizeof_uint32 != 0) {
				SprotoTypeSize.error("error array size(" + sz + ")@sizeof(Uint32)");
			}

			integer_list = [];
			for (var i = 0; i < sz / SprotoTypeDeserialize.sizeof_uint32; i++) {
				var v = this._expand64(this._readDword());
				integer_list.push(v);
			}

		} else if (len == SprotoTypeDeserialize.sizeof_uint64) {
			if (sz % SprotoTypeDeserialize.sizeof_uint64 != 0) {
				SprotoTypeSize.error("error array size(" + sz + ")@sizeof(Uint64)");
			}

			integer_list = [];
			for (var i = 0; i < sz / SprotoTypeDeserialize.sizeof_uint64; i++) {
				// var low = this._ReadDword();
				// var hi = this._ReadDword();
				// var v = low | hi << 32;
				let v = this._readDouble();
				integer_list.push(v);
			}

		} else {
			SprotoTypeSize.error("error intlen(" + len + ")");
		}

		return integer_list;
	}


	public rb(): boolean {
		if (this.value < 0) {
			SprotoTypeSize.error("read invalid boolean.");
			return false;
		} else {
			return (this.value == 0) ? (false) : (true);
		}
	}

	public rba(): boolean[] {
		var sz = this._readArraySize();

		var boolean_list = [];
		for (var i = 0; i < sz; i++) {
			var v = (this.reader.readByte() == 0) ? (false) : (true);
			boolean_list.push(v);
		}

		return boolean_list;
	}


	public rs(): string {
		var sz = this._readDword();
		var buffer = new Uint8Array(sz);
		this.reader.read(buffer, 0, buffer.length);
		return BitUtil.decodeUTF8(buffer);
	}

	public rsa(): string[] {
		var sz = this._readArraySize();

		var stringList = []
		for (var i = 0; sz > 0; i++) {
			if (sz < SprotoTypeSize.SIZEOF_LENGTH) {
				SprotoTypeSize.error("error array size.");
			}

			var hsz = this._readDword();
			sz -= SprotoTypeSize.SIZEOF_LENGTH;

			if (hsz > sz) {
				SprotoTypeSize.error("error array object.");
			}

			var buffer: Uint8Array = new Uint8Array(hsz);
			this.reader.read(buffer, 0, buffer.length);
			var v: string = BitUtil.decodeUTF8(buffer);

			stringList.push(v);
			sz -= hsz;
		}

		return stringList;
	}


	public ro(clsName: string): any {
		let sz = this._readDword();
		let obj = SprotoCore.decodeObj(clsName, this.reader.Buffer, this.reader.Offset, sz);

		this.reader.seek(this.reader.Position + sz);
		
		return obj;
	}

	

	public roa(clsName: string): any[] {
		let sz = this._readArraySize();

		let obj_list: any[] = [];
		for (let i = 0; sz > 0; i++) {
			let [obj, read_size] = this._readElement(clsName, sz);
			obj_list.push(obj);
			sz -= read_size;
		}

		return obj_list;
	}

	public ReadMap(clsName: string, func: Function): any {
		let sz = this._readArraySize();

		let map = {};
		for (let i = 0; sz > 0; i++) {
			let [v, read_size] = this._readElement(clsName, sz);
			let k = func(v);
			map[k] = v;
			sz -= read_size;
		}

		return map;
	}


	public nod(): void {
		if (this.value < 0) {
			let sz = this._readDword();
			this.reader.seek(sz + this.reader.Position);
		}
	}

	public Size(): number {
		return this.reader.Position;
	}

	public Clear(): void {
		this.fn = 0;
		this.tag = -1;
		this.value = 0;
		if (this.reader) {
			this.reader.clear()
		}
	}
}