import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("DestoryNodeAction")
export class DestoryNodeAction extends FsmStateAction
{
    @property(cc.Node)
    target: cc.Node = null;
        
    onEnter() {
        this.target.destroy(), this.finish()
    }
}
Fsm.addAction(DestoryNodeAction, "System", !1)
    