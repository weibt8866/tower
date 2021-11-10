import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("ShowLoadingAction")
export class ShowLoadingAction extends FsmStateAction
{
    @property (cc.String)
    text = "";
    onEnter() {
        GameGlobal.Viewer.showLoading(this.text);
        this.finish()
    }
}
Fsm.addAction(ShowLoadingAction, "GUI")
    