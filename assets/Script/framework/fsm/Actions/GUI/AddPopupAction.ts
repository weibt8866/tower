import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("AddPopupAction")
export class AddPopupAction extends FsmStateAction
{
    info:string = "";

    @property(cc.Prefab)
    prefab: cc.Prefab = null;

    @property(cc.Boolean)
    mask:boolean = true;
    
    onEnter() 
    {
        //gdk.gui.addPopup(this.prefab, mask);
        this.finish()
    }
}
Fsm.addAction(AddPopupAction, "GUI", !1)
    