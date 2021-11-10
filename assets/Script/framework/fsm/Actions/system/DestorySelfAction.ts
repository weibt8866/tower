import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";

export class DestorySelfAction extends FsmStateAction
{
    onEnter() {
        this.node.destory(), this.finish()
    }
}
Fsm.addAction(DestorySelfAction, "System", !1)
    