import { Fsm } from "../../Fsm";
import { FsmEventId } from "../../FsmEventId";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("SendGdkEventAction")
export class SendGdkEventAction extends FsmStateAction
{
    @property(cc.String)
    _eventName = "";

    @property()
    public get event(){
        return FsmEventId.IdName[this._eventName] || 0
    }
    public set event(e) {
        this._eventName = FsmEventId.IdName[e]
    }

    @property(cc.String)
    public eventName:string = "";

    @property()
    public data:any = "";

    onEnter() {
        var e = this.eventName || FsmEventId.IdName[this._eventName];
        //n.e.emit(e, this.data), 
        this.finish()
    }
}
Fsm.addAction(SendGdkEventAction, "System", !1)
    