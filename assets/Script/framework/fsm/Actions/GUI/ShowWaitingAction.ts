import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("ShowWaitingAction")
export class ShowWaitingAction extends FsmStateAction{
    @property(cc.String)
    text:string = "";        
    onEnter() 
    {
        GameGlobal.Viewer.showWaiting(this.text, "ShowWaitingAction"), this.finish()
    }
}
Fsm.addAction(ShowWaitingAction, "GUI", !1)