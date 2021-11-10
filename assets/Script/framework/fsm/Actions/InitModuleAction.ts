import { LogUtil } from "../../utils/LogUtil";
import { Fsm } from "../Fsm";
import { FsmStateAction } from "../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("InitModuleAction")
export default class InitModuleAction extends FsmStateAction
{
    onEnter() 
    {
        LogUtil.debug("初始化initModule:"+this.actionName);
        this.finish()
    }
}
Fsm._actionDecorator("InitModuleAction", "初始化")
