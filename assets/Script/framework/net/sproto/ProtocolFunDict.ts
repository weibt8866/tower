export class ProtocolFunDict {
	private _metaDictionary: {[key: number]: MetaInfo};

	public constructor() {
		this._metaDictionary = {}
	}

	private _getMeta(tag: number): MetaInfo {
		let data = this._metaDictionary[tag];
		if (data == null) {
			data = new MetaInfo();
			data.protocolType = tag;
			this._metaDictionary[tag] = data;
		}
		return data;
	}

	public set(tag: number, request: string, response: string): void {
		let data = this._getMeta(tag);
		data.requestType = request;
		data.responseType = response;
	}

	public get(tag: number): MetaInfo {
		return this._metaDictionary[tag];
	}
}

class MetaInfo {
	public protocolType: number;
	public requestType: string;
	public responseType: string;
}