import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("WaitAction")
export class WaitAction extends FsmStateAction
{
    @property(cc.Integer)
    public time:number = 0;

    public timeId;
    onEnter() 
    {
        this.time >= 0 ? this.timeId = setTimeout(() => {
            this.timeId = null, this.finish()
        }, 1e3 * this.time) : this.finish()
    }
    onExit() 
    {
        this.timeId && clearTimeout(this.timeId)
    }
}
Fsm.addAction(WaitAction, "System", !1)
    