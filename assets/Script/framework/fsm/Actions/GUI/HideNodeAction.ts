import { Fsm } from "../../Fsm";
import { BaseWaitAction } from "../BaseWaitAction";
import { HideWaitingAction } from "./HideWaitingAction";
const {ccclass, property} = cc._decorator;

@ccclass("HideNodeAction")
export class HideNodeAction extends BaseWaitAction
{
    @property(cc.Node)
    target: cc.Node = null;

    @property(cc.Boolean)
    effect:boolean = true;
    onEnter() {
        // this.isWait ? gdk.NodeTool.hide(this.target, this.effect, () => {
        //     this.finish()
        // }) : (gdk.NodeTool.hide(this.target, this.effect), this.finish())
    }
}
Fsm.addAction(HideWaitingAction, "GUI")
