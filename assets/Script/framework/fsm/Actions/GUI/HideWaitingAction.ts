import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("HideWaitingAction")
export class HideWaitingAction extends FsmStateAction
{
    @property(cc.String)
    tag:string = "ShowWaitingAction";

    onEnter() {
        GameGlobal.Viewer.hideWaiting(this.tag), this.finish()
    }
}
Fsm.addAction(HideWaitingAction, "GUI")
    