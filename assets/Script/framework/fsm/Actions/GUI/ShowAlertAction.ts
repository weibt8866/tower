import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("ShowAlertAction")
export class ShowAlertAction extends FsmStateAction
{
    @property()
    public title:string =  "";
    @property()
    public text:string = "";

    @property(cc.String)
    public buttons = [];

    @property(cc.String)
    public events = [];

    onEnter() 
    {
        // this.alert = gdk.gui.showAlert(this.text, this.title, null, function (e) {
        //     if (this.alert = null, -1 != e) 
        //     {
        //         var t = this.events[e];
        //         t && this.sendEvent(t)
        //     }
        //     this.finish()
        // }, this, this.buttons)
    }
}
Fsm.addAction(ShowAlertAction, "GUI", !1)
    