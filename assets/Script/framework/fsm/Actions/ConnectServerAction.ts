import { GameGlobal } from "../../GameGlobal";
import { LogUtil } from "../../utils/LogUtil";
import { Fsm } from "../Fsm";
import { FsmStateAction } from "../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("ConnectServerAction")
export default class ConnectServerAction extends FsmStateAction
{  
    _tryLoadCount;  
    onEnter() 
    {
        LogUtil.debug("加载配置ConnectServerAction:"+this.actionName);
        cc.log("ConnectServerAction begin loadDataAll ");
        this._tryLoadCount = 0;
        this.loadProto();
    }

    public loadProto()
    {
        let thiz = this;
        GameGlobal.Socket.loadProtoConfig("config/mainProto",function() {
            thiz.loadConfig();
            console.log("加载协议完成");
        });

    }

    public loadConfig()
    {
        let thiz = this;
        GameGlobal.Config.loadConfig(function(){
            console.log("加载配置完成");
            GameGlobal.System.loadDataSucc();
            thiz.finish();
        });
    }
}
Fsm._actionDecorator("ConnectServerAction", "登录")