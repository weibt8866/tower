import { Singleton } from "../base/Singleton";
import { LogUtil } from "../utils/LogUtil";

/**
 * 事件调度中心
 */
export class EventManager extends Singleton
{
    private _callbackDict: {[key: string]: any[]}; //监听函数字典

    public static getInstance(): EventManager {
        return super.getInstance();
    }

    /**
     * 初始化
     */
    public init() {
        this._callbackDict = {};
    }

    /**
     * 添加监听函数
     * @param msgKey 消息键
     * @param callFunc 回调函数
     * @param callObj 回调对象
     */
    public addListener(msgKey: string|number, callFunc: Function, callObj: any) {
        msgKey = "" + msgKey;
        let callbackList = this._callbackDict[msgKey];
        if (callbackList == null) {
            callbackList = new Array();
            this._callbackDict[msgKey] = callbackList;
        }
        for (let i = 0; i < callbackList.length; i++) {
            let callItem = callbackList[i];
            if (callItem[0] == callFunc && callItem[1] == callObj) {
                LogUtil.warn("GameMessager", "ignore same listener: " + msgKey);
                return;
            }
        }
        callbackList.push([
            callFunc,
            callObj
        ]);
    }

    /**
     * 移除绑定对象的所有事件
     * @param callObj 
     */
    public removeAllTargetEvents(callObj:any)
    {
        for(let msgKey in this._callbackDict)
        {
            let callbackList = this._callbackDict[msgKey];
            for (let i = callbackList.length - 1; i >=0; i--) 
            {
                let callItem = callbackList[i];
                if (callItem[1] == callObj) 
                {
                    callbackList.splice(i, 1);
                }
            }
        }
    }

    /**
     * 移除监听函数
     * @param msgKey 消息键值
     * @param callFunc 回调函数
     * @param callObj 回调对象
     */
    public removeListener(msgKey: string|number, callFunc: Function, callObj: any) {
        msgKey = "" + msgKey;
        let callbackList = this._callbackDict[msgKey];
        if (callbackList) {
            for (let i = 0; i < callbackList.length; i++) {
                let callItem = callbackList[i];
                if (callItem[0] == callFunc && callItem[1] == callObj) {
                    callbackList.splice(i, 1);
                    break;
                }
            }
            if (callbackList.length == 0) {
                delete this._callbackDict[msgKey];
            }
        }
    }

    /**
     * 移除所有监听函数
     * @param exceptList 排除列表
     */
    public removeAllListener(exceptList?: string|number[]) {
        exceptList = exceptList || [];
        for (let msgKey in this._callbackDict) {
            let exceptFlag = false;
            for (let excKey of exceptList) {
                if (excKey.toString() == msgKey) {
                    exceptFlag = true;
                    break;
                }
            }
            if (!exceptFlag) {
                delete this._callbackDict[msgKey];
            }
        }
    }

    /**
     * 派发消息
     * @param msgKey 消息键值
     * @param msgDatas 消息数据
     */
    public dispatch(msgKey: string|number, ...msgDatas: any[]) {
        msgKey = "" + msgKey;
        let callbackList = this._callbackDict[msgKey];
        if (callbackList) {
            for (let i = 0; i < callbackList.length; i++) {
                let callItem = callbackList[i];
                callItem[0].apply(callItem[1], msgDatas)
            }
        }
    }
}
