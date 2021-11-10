import { Fsm } from "../Fsm"
const {ccclass, property} = cc._decorator;

@ccclass
export default class FsmComponent extends cc.Component
{
    private _isInit:boolean;
    @property(Fsm)
    public fsm:Fsm = null;
    @property
    public syncActive:boolean = true;
    @property
    public _persist:boolean = false;
    @property
    public get persist(){
        return this._persist;
    }
    
    public set persist(value)
    {
        this._persist = value, value ? cc.game.addPersistRootNode(this.node) : cc.game.removePersistRootNode(this.node)
    }

    constructor()
    {
        super();
        this._isInit = !1
    }

    onLoad() 
    {
        this._persist && cc.game.removePersistRootNode(this.node)
    }

    onEnable() 
    {
        if((this.syncActive || !this._isInit) && this.fsm)
        {
            this._isInit = !0;
            this.fsm.setActive(!0);
            this.fsm.start();
        }
    }

    onDisable() 
    {
        this.syncActive && this.fsm && this.fsm.setActive(!1)
    }

    onDestroy() 
    {
        this.fsm && this.fsm.destroy()
    }
}
    