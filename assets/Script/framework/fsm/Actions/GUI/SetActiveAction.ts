import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("SetActiveAction")
export class SetActiveAction extends FsmStateAction
{
    @property(cc.Node)
    target: cc.Node = null;

    @property(cc.Boolean)
    isActive:boolean= !0

    onEnter() 
    {
        this.node.active = this.isActive, this.finish()
    }
}
Fsm.addAction(SetActiveAction, "GUI")
    