import { FsmStateAction } from "../FsmStateAction"

export class ModuleAction extends FsmStateAction
{
    _enter(e, t, i) 
    {
        //this._setActive(true);
        super._enter(e, t, i)
    }
    _exit() 
    {
        super._exit();
        //null != this._fsm && this._setActive(false)
    }
}
