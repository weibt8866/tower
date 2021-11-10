import { Singleton } from "../base/Singleton";
import { EventConst } from "../const/EventConst";
import { GameGlobal } from "../GameGlobal";
import { SprotoParser } from "../net/SprotoParser";

/**
 * 网络模块管理
 */
export class SocketManager extends Singleton
{
    private _socket: WebSocket; //网络连接
    private _protoParser: SprotoParser; //协议解析器
    private _connectUrl: string; //连接地址
    private _cmdCallDict: {[cmd:string] : any}; //回调函数列表
    private isConnect:boolean;
    private isConnectFinish:boolean;

    public static getInstance(): SocketManager {
        return super.getInstance();
    }

    /**
     * 初始化
     */
    public init() 
    {
        // let cryptType = GameGlobal._GAME_DATA_.cryptType;
        // let cryptKey = GameGlobal._GAME_DATA_.cryptKey;
        this._protoParser = new SprotoParser();
        this._protoParser.init();
        this._cmdCallDict = {};
        this.isConnect = false;
        this.isConnectFinish = false;
    }

    /**
     * 关闭连接
     */
    public close() 
    {
        if (this._socket) 
        {
            this._socket.close();
            this._socket = null;
            this.isConnect = false;
            this.isConnectFinish = false;
        }
    }

    /**
     * 连接网络
     * @param url 地址
     */
    public connect(url) 
    {
        this.close();
        this._socket = new WebSocket(url);
        this._socket.binaryType = "arraybuffer";
        this._socket.onopen = this.onSocketOpen;
        this._socket.onmessage = this.onSocketData;
        this._socket.onclose = this.onSocketClose;
        this._socket.onerror = this.onSocketError;
        
        this._connectUrl = url;
    }

    /**
     * 重新连接
     */
    public reconnect() 
    {
        if (this._connectUrl) 
        {
            this.connect(this._connectUrl);
        }
    }

    /**
     * 发送数据包
     * @param cmd 命令字
     * @param data 数据
     */
    public sendMsg(cmd: number, data?: any, rpcRspHandler: Function = null, thisObj: any = null) {
        if (this._socket && this.isConnect) 
        {
            this._protoParser.write(this._socket, cmd, data, rpcRspHandler, thisObj);
        }
    }


    /**
     * 网络连接成功
     */
    private onSocketOpen(event) 
    {
        this.isConnect = true;
        this.isConnectFinish = true;
        GameGlobal.Event.dispatch(EventConst.EventId.SOCKET_OPEN);

    }
    
    /**
     * 网络连接关闭
     */
    private onSocketClose(event) {
        this.close();
        GameGlobal.Event.dispatch(EventConst.EventId.SOCKET_CLOSE);
    }
    
    /**
     * 网络连接错误
     */
    private onSocketError(event) {
        this.close();
        GameGlobal.Event.dispatch(EventConst.EventId.SOCKET_ERROR);
    }
    
    /**
     * 收到网络数据
     */
    private onSocketData(event) 
    {
        this._protoParser.read(event.data);
    }

    public diposeMessage(cmd:number|string,data:any)
    {
        let callbackList = this._cmdCallDict[cmd];
        if (callbackList) {
            for (let i = 0; i < callbackList.length; i++) {
                let callItem = callbackList[i];
                callItem[0].call(callItem[1], data)
            }
        }
    }

    /**
     * 添加监听
     * @param cmd 命令字
     * @param callback 回调函数
     * @param target 回调对象
     */
    public addListener(cmd: number, callback: Function, target: any) {
        this._protoParser.addListener(cmd, callback, target);
    }

    /**
     * 移除监听
     * @param cmd 命令字
     * @param callback 回调函数
     * @param target 回调对象
     */
    public removeListener(cmd: number|string, callback: Function, target: any) 
    {
        cmd = "" + cmd;
        let callbackList = this._cmdCallDict[cmd];
        if (callbackList) {
            for (let i = 0; i < callbackList.length; i++) {
                let callItem = callbackList[i];
                if (callItem[0] == callback && callItem[1] == target) {
                    callbackList.splice(i, 1);
                    break;
                }
            }
            if (callbackList.length == 0) {
                delete this._cmdCallDict[cmd];
            }
        }
    }

    /**
     * 加载网络协议
     * @param protoName 
     * @param callback 
     * @param target 
     */
    public loadProtoConfig(protoName:string,callback:Function,target?:any)
    {
        console.log("开始加载协议");
        GameGlobal.Resource.loadRes(null,protoName,cc.Asset,(data) =>
        {
            GameGlobal.Socket.curParse.loadProto(data.json);
            callback && callback.call(target);
        });
    }

    public isConnectComplete()
    {
        return this.isConnectFinish;
    }

    public get curParse()
    {
        return this._protoParser;
    }
}