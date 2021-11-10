import { SprotoConst } from "./SprotoConst";
import { SprotoCore } from "./SprotoCore";
import { SprotoReceiver } from "./SprotoReceiver";
import { SprotoSender } from "./SprotoSender";

export namespace Sproto {
    export function init() {
        SprotoCore.init();
        SprotoSender.init();
        SprotoReceiver.init();
    }

    /**
     * 设置客户端发送协议
     * @param cmd 控制字
     * @param reqName 
     * @param rspName
     */
    export function setC2sProtocol(cmd, reqName: string, rspName: string) {
        SprotoConst.C2S_PROTOCOL.set(cmd, reqName, rspName);
    }

    /**
     * 设置服务端发送协议
     * @param cmd 控制字
     * @param reqName 
     * @param rspName
     */
    export function setS2cProtocol(cmd, reqName: string, rspName: string) {
        SprotoConst.S2C_PROTOCOL.set(cmd, reqName, rspName);
    }

    /**
     * 设置协议解析方法
     * @param data
     */
    export function setTransCodeDict(data: any) {
        for(var key in data) {
            SprotoConst.TRANSCODE_DICT[key] = data[key];
        }
    }

    export function setTransCodeDict1(key: number|string, data: any) {
        SprotoConst.TRANSCODE_DICT[key] = data;
    }

    /**
     * 消息打包
     * @param cmd 控制字
     * @param data 消息数据
     * @param rpcHandler rpc回调方法
     * @param thisObj
     */
    export function pack(cmd: number, data: any, rpcHandler: Function, thisObj: any = null): ArrayBuffer {
        var bytes: ArrayBuffer = SprotoSender.pack(cmd, data, rpcHandler, thisObj);

        return bytes
    }

    /**
     * 消息解包
     * @param byte 消息数据
     */
    export function dispatch(byte: Uint8Array): ArrayBuffer {
        let bytes = SprotoCore.dispatch(byte);

        return bytes
    }

    /**
     * 增加监听
     * @param cmd 控制字
     * @param rpcHandler rpc回调方法
     * @param thisObj
     */
    export function addHandler(cmd: number, rpcHandler: Function, thisObj: any = null) {
        SprotoReceiver.addHandler(cmd, rpcHandler, thisObj)
    }

    /**
     * 增加多个监听
     * @param cmd 控制字
     * @param rpcHandler rpc回调方法
     * @param thisObj
     */
    export function addHandlers(cmd: number, rpcHandler: Function, thisObj: any = null) {
        SprotoReceiver.addHandlers(cmd, rpcHandler, thisObj)
    }

    /**
     * 移除监听
     * @param cmd 控制字
     */
    export function removeHandler(cmd: number) {
        SprotoReceiver.removeHandler(cmd)
    }
}