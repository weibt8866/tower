import { LoginContrl } from "../../game/contol/LoginContrl";
import { BaseCtrl } from "../base/BaseCtrl";
import { BaseModel } from "../base/BaseModel";
import { Singleton } from "../base/Singleton";
import { EventConst } from "../const/EventConst";
import { SystemConst } from "../const/SystemConst";
import { GameGlobal } from "../GameGlobal";

export class SystemManager extends Singleton
{
    private _ctrlObjDict: {[key:string] : BaseCtrl}; //游戏模块字典
    private _ctrlClassDict: {[key:string]: any}; //模块注册字典

    public isLoadSubPack:boolean;
    public isLoadData:boolean;

    public static getInstance(): SystemManager 
    {
        return super.getInstance();
    }

    /**
     * 初始化
     */
    public init() {
        this._ctrlObjDict = {};
        this._ctrlClassDict = {};
        this.isLoadSubPack = false;

        this.register(SystemConst.SystemType.Login,LoginContrl,true);
    }

    /**
     * 注册系统
     * @param sysType 系统类型
     * @param sysClass 系统类
     * @param newClass 是否创建实例
     * @param args 初始化参数
     */
    public register(sysType: number|string, sysClass: Function, newClass?: boolean, ...args: any[]) {
        sysType = "" + sysType;
        this._ctrlClassDict[sysType] = sysClass;
        if (newClass) {
            this.initCtrl(sysType, ...args);
        }
    }

    /**
     * 注销系统
     * @param sysType 系统类型
     */
    public unregister(sysType: number|string) {
        sysType = "" + sysType;
        if (this._ctrlClassDict[sysType]){
            delete this._ctrlClassDict[sysType];
        }
    }

    /**
     * 初始化控制器
     * @param sysType 系统类型
     * @param args 初始化参数
     */
    public initCtrl(sysType: number|string, ...args: any[]): any {
        sysType = "" + sysType;
        let ctrlClass = this._ctrlClassDict[sysType];
        if (ctrlClass) {
            let ctrl = new ctrlClass();
            ctrl.init(...args);
            this._ctrlObjDict[sysType] = ctrl;
            return ctrl;
        }
    }

    /**
     * 获取模块控制器
     * @param sysType 系统类型
     * @param args 初始化参数
     */
    public getCtrl<T extends BaseCtrl>(sysType: number|string, ...args: any[]): T {
        sysType = "" + sysType;
        let ctrl = this._ctrlObjDict[sysType];
        if (!ctrl) {
            ctrl = this.initCtrl(sysType, ...args);
        }
        return ctrl as T;
    }

    
    /**
     * 获取模块数据模型
     * @param sysType 系统类型
     */
    public getModel<T extends BaseModel>(sysType: number|string): T {
        let ctrl = this.getCtrl(sysType);
        if (ctrl) {
            let model = ctrl.model;
            return model as T;
        }
    }

    /**
     * 加载分包成功
     */
    public LoadSubPackSuccess()
    {
        this.isLoadSubPack || (this.isLoadSubPack = true, this.enterGame(!1), GameGlobal.Event.dispatch(EventConst.EventId.LOAD_SUB_PACK1_SUCC))
    }

    public loadDataSucc()
    {
        this.isLoadData = true;
        this.enterGame();
        //td.SoundManager.init();
        GameGlobal.Event.dispatch(EventConst.EventId.LOAD_DATA_SUCC)
    }

     public enterGame(e?)
    {
        //void 0 === e && (e = !0), this._prepareEnterGame || !e ? this._dataLoadSucc && this._loadSubPack1Succ || this._createRoleData : this._prepareEnterGame = !0
    }
}