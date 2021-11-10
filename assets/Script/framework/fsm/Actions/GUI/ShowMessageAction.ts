import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("ShowMessageAction")
export class ShowMessageAction extends FsmStateAction
{    
    @property(cc.String)
    text:string = "";
    onEnter() 
    {
        //gdk.gui.showMessage(this.text);
        this.finish()
    }
}
Fsm.addAction(ShowMessageAction, "GUI")