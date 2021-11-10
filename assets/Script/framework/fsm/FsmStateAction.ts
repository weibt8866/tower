import { Fsm } from "./Fsm";
const {ccclass, property} = cc._decorator;
       
var s = 0;
@ccclass("FsmStateAction")
export class FsmStateAction
{
    public _finished:boolean;
    public _node:any;
    public _fsm;
    public _state;
    public _destroyed:boolean;
    public _isAwake:boolean;

    @property(cc.Boolean)
    enabled:boolean = true;

    @property(cc.String)
    actionName:string = "";

    @property()
    get finished() {
        return this._finished;
    }

    @property()
    get node(){
        return this._node
    }

    @property()
    get fsm() {
        return this._fsm
    }

    @property()
    get state() {
        return this._state
    }

    @property()
    get active(){

        return this.enabled && !this._finished && this._state && this._state.active && this._fsm && this._fsm.active && !this._destroyed

    }

    @property(cc.String)
    _id:string = "";

    @property()
    get _classname(){
        return this.constructor.name
    }

    @property()
    get uuid(){

        var e = this._id;
        return e || (e = this._id = "FsmAct." + s++), e
    }

    public awake(){};
    public onEnter(){};
    public update(){};
    public onDestroy(){};
    public onExit(){};

    constructor()
    {
        this._id = this.uuid;
        this._finished = false;
        this._node = null;
        this._fsm = null;
        this._state = null;
        this._destroyed = false;
        this._isAwake = false;
    }

    sendEvent(e) 
    {
        this.active && (Fsm.isShowLog && Fsm.log(`FsmStateAction "${this.fsm.fsmName}:${this.state.stateName}:${this.actionName}" sendEvent:${e}`), this.fsm.sendEvent(e))
    }

    broadcastEvent(e) {
        this.active && (Fsm.isShowLog && Fsm.log(`FsmStateAction "${this.fsm.fsmName}:${this.state.stateName}:${this.actionName}" broadcastEvent:${e}`), this.fsm.broadcastEvent(e))
    }

    finish() {
        this.active ? (Fsm.isShowLog && Fsm.log(`FsmStateAction "${this.fsm.fsmName}:${this.state.stateName}:${this.actionName}" Finish`), this._state._actionFinish(this)) : this._finished = !0
    }

    _awake() {
        !this._isAwake && this.awake && (this._isAwake = !0, Fsm.isShowLog && Fsm.log(`FsmStateAction "${this.fsm.fsmName}:${this.state.stateName}:${this.actionName}" Awake`), this.awake())
    }

    _enter(e, t, i) {
        this._node = e, this._fsm = t, this._state = i, this._finished = !1, Fsm.isShowLog && Fsm.log(`FsmStateAction "${this.fsm.fsmName}:${this.state.stateName}:${this.actionName}" Enter`), this.onEnter && this.onEnter(), this._node && this._fsm && this._state && this.update && cc.director.getScheduler().scheduleUpdate(this, cc.Scheduler.PRIORITY_SYSTEM, !1)
    }

    _exit() {
        null != this._fsm && (Fsm.isShowLog && Fsm.log(`FsmStateAction "${this.fsm.fsmName}:${this.state.stateName}:${this.actionName}" Exit`), this.update && cc.director.getScheduler().unscheduleUpdate(this), this.onExit && this.onExit(), this._node = null, this._fsm = null, this._state = null)
    }

    _destroy() {
        this._destroyed || (this._exit(), this.onDestroy && this.onDestroy())
    }
}