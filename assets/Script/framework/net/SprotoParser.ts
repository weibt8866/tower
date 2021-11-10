/**
 * Sproto网络协议数据解析
 */
import { Sproto } from "./sproto/Sproto";

export class SprotoParser{    
    protected _cryptType: string; //加密类型
    protected _cryptKey: string; //加密秘钥


    public init(cryptType?: string, cryptKey?: string) {
        this._cryptType = cryptType;
        this._cryptKey = cryptKey;
        
        Sproto.init();

    }

    public loadProto(data:any) {

        this.setStruct(data.protocol.struct);
        this.setProtocol(data.protocol.c2s);
        this.setProtocol(data.protocol.s2c, false);
    }
    

    /**
     * 读取协议内容
     * @param socket 网络套接字
     */
    public read(data): any {

        Sproto.dispatch(data);
    }

    /**
     * 写入协议内容
     * @param socket 网络套接字
     * @param cmd 命令字
     * @param data 数据
     */
    public write(socket:WebSocket, cmd: number, data: any, rpcRspHandler: Function = null, thisObj: any = null) {
        var sendBytes:ArrayBuffer = Sproto.pack(cmd, data, rpcRspHandler, thisObj);
        
        socket.send(sendBytes);
    }
    
    public addListener(cmd: number, rpcHandler: Function, thisObj: any = null) {
        Sproto.addHandler(cmd, rpcHandler, thisObj);
    }

    private setStruct(obj: any) {
        for(let key in obj) {
            let struct = obj[key];
            let fun = {
                e: this.genEncodeFun(struct),
                d: this.genDecodeFun(struct)
            }

            Sproto.setTransCodeDict1(key, fun);
        }
    }

    private setProtocol(obj: any, isC2s: boolean = true) {
        for(let key in obj) {
            let protoObj: any = obj[key];
            let cmd: number = protoObj["cmd"];

            let reqStr: string = "";
            let rspStr: string = "";

            if(protoObj["request"]) {
                if(isC2s) {
                    reqStr = "c2s_" + key + "_req";
                } else {
                    reqStr = "s2c_" + key + "_req";
                }

                let reqObj = protoObj["request"];
                let encode = this.genEncodeFun(reqObj);
                let decode = this.genDecodeFun(reqObj);
                let reqFun = {
                    e: encode,
                    d: decode
                }

                Sproto.setTransCodeDict1(reqStr, reqFun);
            }

            if(protoObj["response"]) {
                if(isC2s) {
                    rspStr = "c2s_" + key + "_rsp";
                } else {
                    rspStr = "s2c_" + key + "_rsp";
                }

                let rspObj = protoObj["response"];
                let encode = this.genEncodeFun(rspObj);
                let decode = this.genDecodeFun(rspObj);
                let rspFun = {
                    e: encode,
                    d: decode
                }

                Sproto.setTransCodeDict1(rspStr, rspFun);
            }

            if(isC2s) {
                Sproto.setC2sProtocol(cmd, reqStr, rspStr);
            } else {
                Sproto.setS2cProtocol(cmd, reqStr, rspStr);
            }
        }
    }

    private genEncodeFun(obj: any): any {
        let result = {c: 0, m: {}};
        let count: number = 0;

        for(let fieldName in obj) {
            let field: any = obj[fieldName];
            let types: string[] = this.genTypeFun(field[0]);
            let fieldArr: string[] = [];

            for(let i = 0; i < types.length; i++) {
                fieldArr.push(types[i]);
            }

            fieldArr.push(field[1]);

            result["m"][fieldName] = fieldArr;

            count++;
        }

        result["c"] = count;

        return result;
    }

    private genDecodeFun(obj: any): any {
        let result = {};

        for(let fieldName in obj) {
            let field: any = obj[fieldName];
            let types: string[] = this.genTypeFun(field[0], false);
            let fieldArr: string[] = [];

            fieldArr.push(fieldName);

            for(let i = 0; i < types.length; i++) {
                fieldArr.push(types[i]);
            }

            result[field[1]] = fieldArr;
        }

        return result;
    }

    private genTypeFun(type: string, isWrite: boolean = true): string[] {
        let result: string[];

        if(type.indexOf("*") > -1) {
            let tmpType: string = type.substr(1);

            result = this.genTypeFun(tmpType, isWrite);
            result[0] = result[0] + "a";

            return result;
        }

        switch(type) {
            case "int":
                if(isWrite) {
                    result = ["wi"];
                } else {
                    result = ["ri"];
                }
                break;
            case "boolean":
                if(isWrite) {
                    result = ["wb"];
                } else {
                    result = ["rb"];
                }
                break;
            case "string":
                if(isWrite) {
                    result = ["ws"];
                } else {
                    result = ["rs"];
                }
                break;
            default:
                if(isWrite) {
                    result = ["ro", type];
                } else {
                    result = ["ro", type];
                }
        }
        
        return result;
    }
}