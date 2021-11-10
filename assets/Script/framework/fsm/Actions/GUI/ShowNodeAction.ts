import { Fsm } from "../../Fsm";
import { BaseWaitAction } from "../BaseWaitAction";
const {ccclass, property} = cc._decorator;

@ccclass("ShowNodeAction")
export class ShowNodeAction extends BaseWaitAction
{
    @property(cc.Node)
    target: cc.Node = null;

    @property(cc.Boolean)
    effect:boolean = !0
            
    onEnter() 
    {
        if(this.isWait)
        {
            // gdk.NodeTool.show(this.target, this.effect, () => {
            //     this.finish()
            // })
        }
        else
        {
            //gdk.NodeTool.show(this.target, this.effect);
            this.finish();
        }
    }
}
Fsm.addAction(ShowNodeAction, "GUI")