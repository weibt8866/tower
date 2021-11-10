import { SByteArray } from "./SByteArray";
import { SeekOrigin, SprotoTypeSize } from "./SprotoConst";

export class SprotoPack {
	private _buffer: SByteArray;
	private _tmp: Uint8Array;

	public constructor() {
		this._buffer = new SByteArray();
		this._tmp = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])
	}

	private _writeff(src: any, offset: number, pos: number, n: number): void {
		var align8_n = (n + 7) & (~7);
		var curPos = this._buffer.Position;

		this._buffer.seek(pos, SeekOrigin.Begin);

		this._buffer.writeByte(0xff);
		this._buffer.writeByte((align8_n / 8 - 1));

		this._buffer.writeBytes(src, offset, n);
		for (var i = 0; i < align8_n - n; i++) {
			this._buffer.writeByte(0);
		}

		this._buffer.seek(curPos, SeekOrigin.Begin);
	}

	public packSeg(src: Uint8Array, offset: number, ff_n: number) {
		var header = 0;
		var notzero = 0;

		var header_pos = this._buffer.Position;
		this._buffer.seek(1, SeekOrigin.Current);

		for (var i = 0; i < 8; i++) {
			if (src[offset + i] != 0) {
				notzero++;
				header |= (1 << i);
				this._buffer.writeByte(src[offset + i]);
			}
		}

		if ((notzero == 7 || notzero == 6) && ff_n > 0) {
			notzero = 8;
		}
		if (notzero == 8) {
			if (ff_n > 0) {
				this._buffer.seek(header_pos, SeekOrigin.Begin);
				return 8;
			} else {
				this._buffer.seek(header_pos, SeekOrigin.Begin);
				return 10;
			}
		}

		this._buffer.seek(header_pos, SeekOrigin.Begin);
		this._buffer.writeByte(header);
		this._buffer.seek(header_pos, SeekOrigin.Begin);
		return notzero + 1;
	}

	public pack(data: Uint8Array, len = 0): Uint8Array {
		this.clear();

		var srcsz = (len == 0) ? (data.length) : (len);
		var ff_src: Uint8Array = null;
		var ff_srcstart = 0;
		var ff_desstart = 0;

		var ff_n = 0;

		var src: Uint8Array = data;
		var offset = 0;

		for (var i = 0; i < srcsz; i += 8) {
			offset = i;

			var padding = i + 8 - srcsz;
			if (padding > 0) {
				for (var j = 0; j < 8 - padding; j++) {
					this._tmp[j] = src[i + j];
				}
				for (var j = 0; j < padding; j++) {
					this._tmp[7 - j] = 0;
				}

				src = this._tmp;
				offset = 0;
			}

			var n = this.packSeg(src, offset, ff_n);
			if (n == 10) {
				// first FF
				ff_src = src;
				ff_srcstart = offset;
				ff_desstart = this._buffer.Position;
				ff_n = 1;
			} else if (n == 8 && ff_n > 0) {
				++ff_n;
				if (ff_n == 256) {
					this._writeff(ff_src, ff_srcstart, ff_desstart, 256 * 8);
					ff_n = 0;
				}
			} else {
				if (ff_n > 0) {
					this._writeff(ff_src, ff_srcstart, ff_desstart, ff_n * 8);
					ff_n = 0;
				}
			}

			this._buffer.seek(n, SeekOrigin.Current);
		}

		if (ff_n == 1) {
			this._writeff(ff_src, ff_srcstart, ff_desstart, 8);
		} else if (ff_n > 1) {
			var length = (ff_src == data) ? (srcsz) : (ff_src.length);
			this._writeff(ff_src, ff_srcstart, ff_desstart, length - ff_srcstart);
		}

		var maxsz = (srcsz + 2047) / 2048 * 2 + srcsz + 2;
		if (maxsz < this._buffer.Position) {
			SprotoTypeSize.error("packing error, return size=" + this._buffer.Position);
		}

		var pack_buffer: Uint8Array = new Uint8Array(this._buffer.Position);
		this._buffer.seek(0, SeekOrigin.Begin);
		this._buffer.readBytes(pack_buffer, 0, pack_buffer.length);

		return pack_buffer;
	}

	public unpack(data: Uint8Array, len = 0): Uint8Array {
		this.clear();

		len = (len == 0) ? (data.length) : (len);
		var srcsz = len;

		while (srcsz > 0) {
			var header = data[len - srcsz];
			--srcsz;

			if (header == 0xff) {
				if (srcsz < 0) {
					SprotoTypeSize.error("invalid unpack stream.");
				}

				var n = (data[len - srcsz] + 1) * 8;

				if (srcsz < n + 1) {
					SprotoTypeSize.error("invalid unpack stream.");
				}

				this._buffer.writeBytes(data, len - srcsz + 1, n);
				srcsz -= n + 1;
			} else {
				for (var i = 0; i < 8; i++) {
					var nz = (header >> i) & 1;
					if (nz == 1) {
						if (srcsz < 0) {
							SprotoTypeSize.error("invalid unpack stream.");
						}

						this._buffer.writeByte(data[len - srcsz]);
						--srcsz;
					} else {
						this._buffer.writeByte(0);
					}
				}
			}
		}

		var unpack_data: Uint8Array = new Uint8Array(this._buffer.Position);
		this._buffer.seek(0, SeekOrigin.Begin);

		this._buffer.readBytes(unpack_data, 0, unpack_data.length);
		return unpack_data;
	}

	public clear() {
		this._buffer.seek(0, SeekOrigin.Begin);

		for (var i = 0; i < this._tmp.length; i++) {
			this._tmp[i] = 0;
		}
	}
}