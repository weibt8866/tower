import { Fsm } from "./Fsm";
import { FsmEventId } from "./FsmEventId";
import { FsmStateAction } from "./FsmStateAction";
import { FsmTransition } from "./FsmTransition";
const {ccclass, property} = cc._decorator;

@ccclass("FsmState")
export class FsmState
{
    private _node:cc.Node;
    private _fsm;
    private _active:boolean;
    private _sequence:boolean;
    private _finish:boolean;
    private _activeActions = [];
    private _activeActionIndex:number;
    private _isPause:boolean;
    private _waitNext:boolean;

    @property(cc.String)
    stateName:string = "FsmState";

    @property(cc.String)
    stateDescription:string = "";

    @property()
    x:number = 0;

    @property()
    y:number = 0;

    @property()
    sequence:boolean = true;

    @property([FsmStateAction])
    actions: FsmStateAction[] = [];

    @property([FsmTransition])
    transitions:FsmTransition[] = [];
    
    @property()
    get active(){
        return this._active
    }

    @property()
    get activeActions() {
        return this._activeActions
    }

    @property()
    get isPause() {
        return this._isPause
    }

    constructor()
    {
        this._node = null;
        this._fsm = null;
        this._active = false;
        this._sequence = true;
        this._finish = false;
        this._activeActions = [];
        this._activeActionIndex = -1;
        this._isPause = false;
        this._waitNext = false;
    }

    continue () {
        this._isPause = !1, this._waitNext && (this._waitNext = !1, this._sequence && this._enterNextAction(), this._checkFinish())
    }

    pause() {
        this._isPause = !0
    }

    _enter(e, t) 
    {
        this._exit();
        this._activeActionIndex = -1;
        this._activeActions.length = 0;
        this._fsm = t;
        this._node = e;
        this._active = !0;
        this._finish = !1;
        this._sequence = this.sequence;
        this._isPause = !1;
        this._waitNext = !1;
        Fsm.isShowLog && Fsm.log(`FsmState "${this._fsm.fsmName}:${this.stateName}" Enter`);
        if (this._sequence) this._enterNextAction();
        else
            for (; this._enterNextAction(););
        this._checkFinish()
    }

    _exit() {
        if (null != this._fsm) 
        {
            Fsm.isShowLog && Fsm.log(`FsmState "${this._fsm.fsmName}:${this.stateName}" Exit`);
            this._fsm = null, this._node = null, this._active = !1, this._isPause = !1, this._waitNext = !1;
            for (var e = 0, t = this._activeActions.length; e < t; e++) this._activeActions[e]._exit();
            this._activeActions.length = 0
        }
    }

    _destroy() 
    {
        this._exit();
        for (var e = 0; e < this.actions.length; e++) 
        {
            this.actions[e]._destroy()
        }
    }

    _actionFinish(e) 
    {
        if (this._active) 
        {
            var t = this._activeActions.indexOf(e); - 1 != t && this._activeActions.splice(t, 1), e._exit(), !this._isPause ? (this._sequence && this._enterNextAction(), this._checkFinish()) : this._waitNext = !0
        }
    }

    _checkFinish() 
    {
        !this._isPause && !this._finish && this._active && 0 == this._activeActions.length && this._fsm && (Fsm.isShowLog && Fsm.log(`FsmState "${this._fsm.fsmName}:${this.stateName}" Finish`), this._finish = !0, this._fsm.sendEvent(FsmEventId.IdName.FINISH))
    }

    _enterNextAction() 
    {
        for (this._activeActionIndex++; this._active && this._activeActionIndex < this.actions.length;) 
        {
            var e = this.actions[this._activeActionIndex];
            if (e.enabled) return this._activeActions.push(e), e._awake(), e._enter(this._node, this._fsm, this), !0;
            this._activeActionIndex++
        }
        return !1
    }
}