
import FsmComponent from "./components/FsmComponent";
import { FsmEventId } from "./FsmEventId";
import { FsmState } from "./FsmState";
import { FsmTransition } from "./FsmTransition";
const {ccclass, property} = cc._decorator;

@ccclass("Fsm")
export class Fsm
{
    //name:"Fsm";
    private _active;
    private _activeState;
    private _destroyed:boolean;

    @property(cc.String)
    public fsmName:string = "FSM";

    @property(cc.String)
    public fsmDescription:string = "";

    @property([FsmState])
    public states:FsmState[] = [];

    @property(cc.String)
    public events:string[] = [];

    @property([FsmTransition])
    public globalTransitions:FsmTransition[] = [];

    @property(cc.String)
    public startState: string = "";

    @property()
    public get active() {
        return this._active
    }
    
    @property()
    public get activeState() {
        return this._activeState
            
    }
    @property()
    public get activeStateName() {
        return this._activeState ? this._activeState.stateName : null
            
    }
    @property()
    public get isPause(){

        return !!this._activeState && this._activeState.isPause
            
    }

    public fsmComponent;
    public node;

    public static main;
    public static fsms:Fsm[] = [];
    public static isShowLog:boolean = false
    public static actionList: {};
    public static addAction(e, t, i?) {}
    public static _actionDecorator(e, t, i?)
    { 
        // function (s) {
        //     cc.Class._isCCClass(s) || (s = n(e)(s)), r.addAction(s, t, i)
        // }
    }
    
    public static log(e) 
    {
        Fsm.isShowLog && console.log(e)
    }
    
    public static broadcastEvent(e, t = !1) 
    {
        Fsm.isShowLog && Fsm.log(`Fsm  BroadcastEvent:${e}`);
        for (var i = 0; i < this.fsms.length; i++) 
        {
            this.fsms[i]._onGlobalEvent(e)
        }
    }
    public static sendEventToNode(t, i, n = !1) 
    {
        var o = null;
        Fsm.isShowLog && Fsm.log(`Fsm  SendEventToNode:${t.name}->${i}`);
        o = n ? t.getComponentsInChildren(FsmComponent) : t.getComponents(FsmComponent);
        for (var a = 0; a < o.length; a++) 
        {
            o[a].fsm._onGlobalEvent(i)
        }
    }
    public static getByName(e) 
    {
        for (let i = 0; i < this.fsms.length; i++) 
        {
            var t = this.fsms[i];
            if (t.fsmName == e) return t
        }
    }

    constructor() 
    {
        this._activeState = null;
        this._active = !1;
        this.fsmComponent = null;
        this.node = null;
        this._destroyed = !1;
        null == Fsm.main && (Fsm.main = this);
        Fsm.fsms.push(this)
    }

    start() 
    {
        this._destroyed || (Fsm.isShowLog && Fsm.log(`Fsm "${this.fsmName}" Start`), this.setState(this.startState))
    }

    setActive(e) 
    {
        this._destroyed || this._active != e && (this._active = e, Fsm.isShowLog && Fsm.log(`Fsm "${this.fsmName}" SetActive:${e}`), 0 == this._active && (this._activeState && this._activeState._exit(), this._activeState = null))
    }

    setState(e) 
    {
        if (0 != this._active) 
        {
            Fsm.isShowLog && Fsm.log(`Fsm "${this.fsmName}" SetState:"${e}"`);
            for (var t = 0; t < this.states.length; t++) {
                var i = this.states[t];
                if (i.stateName == e) {
                    this._enterState(i);
                    break
                }
            }
        }
    }

    isState(e) {
        return this.activeStateName == e
    }

    finish() 
    {
        this.sendEvent(FsmEventId.IdName.FINISH)
    }
    continue () {
        this._activeState && this._activeState.continue()
    }
    pause() {
        this._activeState && this._activeState.pause()
    }
    sendEvent(e) 
    {
        if (0 != this._active && (Fsm.isShowLog && Fsm.log(`Fsm "${this.fsmName}.${this._activeState.stateName}" SendEvent:${e}`), this._activeState))
            for (var t = this._activeState.transitions, i = 0; i < t.length; i++) 
            {
                var n = t[i];
                if (FsmEventId.IdName[n.eventName] == e) 
                {
                    this.setState(n.toState);
                    break
                }
            }
    }

    destroy() 
    {
        if (this._active = !1, !this._destroyed) 
        {
            Fsm.isShowLog && Fsm.log(`Fsm "${this.fsmName}" Destroy`);
            var e = Fsm.fsms.indexOf(this); - 1 != e && Fsm.fsms.splice(e, 1), Fsm.main == this && (Fsm.main = Fsm.fsms[0]);
            for (var t = 0; t < this.states.length; t++) 
            {
                this.states[t]._destroy()
            }
        }
    }
    _enterState(e) {
        0 != this._active && (this._activeState && this._activeState._exit(), this._activeState = e, e._enter(this.node, this))
    }
    _onGlobalEvent(e) 
    {
        if (0 != this._active)
        {
            for (var t = 0; t < this.globalTransitions.length; t++) 
            {
                var i = this.globalTransitions[t];
                if (FsmEventId.IdName[i.eventName] == e) 
                {
                    this.setState(i.toState);
                    break
                }
            }
        }
    }

}