import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("RemoveAllPopupAction")
export class RemoveAllPopupAction extends FsmStateAction
{
    @property()
    popup:boolean = true;
    @property()
    alert:boolean = true;
    @property()
    waiting:boolean = true;
            
    onEnter() 
    {
        console.log("移除所有界面37");
        this.popup && GameGlobal.Viewer.clearAllPopView();
        //this.alert && gdk.gui.hideAllAlert();
        //this.waiting && gdk.gui.hideAllWaiting();
        this.finish()
    }
}
Fsm.addAction(FsmStateAction, "GUI")
    