import { Fsm } from "../../Fsm";
import { FsmEventId } from "../../FsmEventId";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("SendEventAction")
export class SendEventAction extends FsmStateAction
{
    @property(cc.String)
    _eventName:string = "";

    @property()
    get event() {
        return FsmEventId.IdName[this._eventName] || 0
    }
    set event(e) {
        this._eventName = FsmEventId.IdName[e]
    }

    @property(cc.String)
    eventName: string = "";

    @property(cc.Boolean)
    isGlobalEvent:boolean = false; 

    onEnter() {
        var e = this.eventName || FsmEventId.IdName[this._eventName];
        this.isGlobalEvent ? this.broadcastEvent(e) : this.sendEvent(e), this.finish()
    }
}
Fsm.addAction(SendEventAction, "System", !1)
    