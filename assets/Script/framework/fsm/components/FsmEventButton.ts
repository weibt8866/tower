import { Fsm } from "../Fsm";
import { FsmEventId } from "../FsmEventId";

export class FsmEventButton extends cc.Component
{
    public _soundName:string = "";
    // public get _sound() {
                 
    //                     return n[this._soundName] || 0
    // }

    // public set _sound(e)
    // {
    //     this._soundName = n[e]
    // }
    public _audioClip:cc.AudioClip = null;
    public fsm:string = "";
    public _eventName:string = "";
    public get event()
    {
        return FsmEventId.IdName[this._eventName];
    }

    public set event(e)
    {
        this._eventName = FsmEventId.IdName[e];
    }

    public eventName:string = "";

    onLoad() {
        this.node.getComponent(cc.Button) ? this.node.on("click", this.onClick, this) : this.node.on("touchstart", this.onClick, this)
    }

    onClick() 
    {
        //this._audioClip ? s.play(this._audioClip) : s.play(n.getValue(this._soundName))
        Fsm.getByName(this.fsm).sendEvent(this.event)
    }
}
    