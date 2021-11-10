import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("HideAllWaitingAction")
export class HideAllWaitingAction extends FsmStateAction
{
    onEnter() 
    {
        //gdk.gui.hideAllWaiting();
        this.finish()
    }
}
Fsm.addAction(HideAllWaitingAction, "GUI")
    