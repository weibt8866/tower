import { GameGlobal } from "../../GameGlobal";
import { LogUtil } from "../../utils/LogUtil";
import { Fsm } from "../Fsm";
import { FsmStateAction } from "../FsmStateAction";
import ConnectServerAction from "./ConnectServerAction";
const {ccclass, property} = cc._decorator;

@ccclass("LoadSubPackAction")
export default class LoadSubPackAction extends FsmStateAction
{    
    onEnter() 
    {
        LogUtil.debug("加载子包LoadSubPack:"+this.actionName);
        let thiz = this;
        cc.log("开始加载分包：subPack");
        GameGlobal.System.isLoadSubPack = !0;
        let nowTime = (new Date).getTime();
        cc.assetManager.loadBundle("subPack", null, function (error, i) 
        {
            if(error)
            {
                //s.TDBoot.initData();
                GameGlobal.System.LoadSubPackSuccess();
                (new ConnectServerAction()).onEnter();
                thiz.finish()
            }
            else
            {
                thiz._onSubpackCompleteHandler(error);
            } 
            let lastTime = (new Date).getTime();
            console.log("加载分包subPack耗时" + (lastTime - nowTime));
        })
    }
    _onSubpackCompleteHandler(e) 
    {
        let thiz = this;
        let nowTime = (new Date).getTime();
        console.log("开始加载分包：fight")
        cc.assetManager.loadBundle("fight", null, function (error, i) 
        {
            if(error)
            {
                cc.error("load SubPackage2 subPack2 fail")
            }
            else
            {
                GameGlobal.System.LoadSubPackSuccess();
                //s.TDBoot.initData(); 
                (new ConnectServerAction()).onEnter();
                thiz.finish();
            }
            let lastTime = (new Date).getTime();
            console.log("加载分包fight耗时:" + (lastTime - nowTime));
        })
    } 
}
Fsm._actionDecorator("LoadSubPackAction", "加载子包");
    