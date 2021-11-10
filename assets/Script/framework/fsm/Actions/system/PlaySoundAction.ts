import { SoundConst } from "../../../const/SoundConst"
import { GameGlobal } from "../../../GameGlobal"
import { Fsm } from "../../Fsm"
import { FsmStateAction } from "../../FsmStateAction"
const {ccclass, property} = cc._decorator;

@ccclass("PlaySoundAction")
export class PlaySoundAction extends FsmStateAction
{
    
    @property(cc.String)
    _soundName:string = "";

    @property()
    get sound(){
            return SoundConst.SoundID[this._soundName] || 0
    }
    set sound(e) {
            this._soundName = SoundConst.SoundID[e]
        }
    
    @property(cc.AudioClip)
    clip:cc.AudioClip = null; 

    onEnter() 
    {
        //this.clip ? GameGlobal.Sound.play(this.clip) : GameGlobal.Sound.play(s.getValue(this._soundName));
        this.finish()
    }
}
Fsm.addAction(PlaySoundAction, "System", !1)
    