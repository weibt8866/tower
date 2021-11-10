import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";

export class PauseAction extends FsmStateAction
{
    onEnter() {
        this.fsm.pause(), this.finish()
    }
}
Fsm.addAction(PauseAction, "System", !1)
    