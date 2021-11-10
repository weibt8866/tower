import { SeekOrigin } from "./SprotoConst";

export class SByteArray {
	private _data: DataView;
	private _position: number;
	private _writePosition: number;

	public constructor() {
		this._data = new DataView(new ArrayBuffer(0));
	}

	public get Position(): number {
		return this._position;
	}

	public set Position(value: number) {
		this._position = value;
		this._writePosition = value > this._writePosition ? value : this._writePosition;
	}

	public get Buffer(): ArrayBuffer {
		return this._data.buffer;
	}

	public set Buffer(value: ArrayBuffer) {
		this._data = new DataView(value);
	}

	public get Length(): number {
		return this._writePosition;
	}

	public set Length(value: number) {
		this._writePosition = value;
		let tmp: Uint8Array = new Uint8Array(new ArrayBuffer(value));
		let byteLength: number = this._data.buffer.byteLength;
		if (byteLength > value) {
			this._position = value;
		}
		let length: number = Math.min(byteLength, value);
		tmp.set(new Uint8Array(this._data.buffer, 0, length));
		this.Buffer = tmp.buffer;
	}

	public get mBytesAvailable(): number {
		return this._data.byteLength - this._position;
	}

	public seek(pos: number, seekOrigin: SeekOrigin) {
		switch (seekOrigin) {
			case SeekOrigin.Begin:
				this.Position = pos;
				break;

			case SeekOrigin.Current:
				this.Position += pos;
				break;

			case SeekOrigin.End:
				this.Position = this.Length + pos;
				break;
		}
	}

	public writeByte(value: number): void {
		this.validateBuffer(1);
		this._data.setInt8(this.Position++, value);
	}

	private validateBuffer(len: number, needReplace: boolean = false): void {
		this._writePosition = len > this._writePosition ? len : this._writePosition;
		len += this._position;
		if (this._data.byteLength < len || needReplace) {
			let tmp: Uint8Array = new Uint8Array(new ArrayBuffer(len));
			let length = Math.min(this._data.buffer.byteLength, len);
			tmp.set(new Uint8Array(this._data.buffer, 0, length));
			this.Buffer = tmp.buffer;
		}
	}

	public writeBytes(bytes: Uint8Array, offset: number = 0, length: number = 0): void {
		let writeLength: number;
		if (offset < 0) {
			return;
		}
		if (length < 0) {
			return;
		} else if (length == 0) {
			writeLength = bytes.length - offset;
		} else {
			writeLength = Math.min(bytes.length - offset, length);
		}
		if (writeLength > 0) {
			this.validateBuffer(writeLength);

			let tmp_data = new DataView(bytes.buffer);
			let length = writeLength;
			let BYTES_OF_UINT32 = 4;
			for (; length > BYTES_OF_UINT32; length -= BYTES_OF_UINT32) {
				this._data.setUint32(this._position, tmp_data.getUint32(offset));
				this.Position += BYTES_OF_UINT32;
				offset += BYTES_OF_UINT32;
			}
			for (; length > 0; length--) {
				this._data.setUint8(this.Position++, tmp_data.getUint8(offset++));
			}
		}
	}

	public readBytes(bytes: Uint8Array, offset: number = 0, length: number = 0): void {
		if (length == 0) {
			length = this.mBytesAvailable;
		} else if (!this.validate(length)) {
			return null;
		}
		for (let i = 0; i < length; i++) {
			bytes[i + offset] = this._data.getUint8(this.Position++);
		}
	}

	public validate(len: number): boolean {
		if (this._data.byteLength > 0 && this._position + len <= this._data.byteLength) {
			return true;
		} else {
			
		}
	}
}