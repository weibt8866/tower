import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
import { HideWaitingAction } from "./HideWaitingAction";
const {ccclass, property} = cc._decorator;

@ccclass("HideViewAction")
export class HideViewAction extends FsmStateAction
{
    @property(cc.Prefab)
    prefab: cc.Prefab = null;
    onEnter() {
        GameGlobal.Viewer.hideView(this.prefab), this.finish()
    }
}
Fsm.addAction(HideWaitingAction, "GUI")
    