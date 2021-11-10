import { EventConst } from "../../../framework/const/EventConst";
import { GameGlobal } from "../../../framework/GameGlobal";

const {ccclass, property} = cc._decorator;
@ccclass
export default class LoadingLayer extends cc.Component
{
    @property(cc.Node)
    img: cc.Node = null;
    @property(cc.Node)
    tip: cc.Label = null;
    @property(cc.Node)
    bg: cc.Node = null;
    @property
    _callCount = 0;
    @property(cc.Node)
    touchLayer: cc.Node = null;
    @property
    _startTime = 0;
    @property
    _showingTime = 0;
    @property
    _scheduleId = null
    
    start() {}
    onEnable() 
    {
        this.schedule(this._update, .1)
    }
    onDisable() 
    {
        this.unschedule(this._update)
    }
    refresh(e) 
    {
        if (e.count > 0) 
        {
            // td.Language && td.Language[e.tips] ? this.tip && (this.tip.string = td.Language[e.tips]) : this.tip && (this.tip.string = "");
            // var t = td.LoadingType;
            // switch (e.type) {
            //     case t.Panel:
            //         this.img.setScale(1.2);
            //         break;
            //     default:
            //         this.img.setScale(1)
            // }
            this._showShow(!0)
        } else this._showShow(!1);
        this._callCount = e.callCount, this._refreshTouch(), cc.log("Layer2 callCount=", this._callCount)
    }
    _showShow(e) 
    {
        if(cc.isValid(this.img))
        {
            this.img.active = e;
            this.tip.node.active = e;
            this.bg.active = e;
            this.img.getComponent(cc.Animation).stop();
            e && this.img.getComponent(cc.Animation).play()
        }
    }

    _refreshTouch() 
    {
        if(cc.isValid(this.touchLayer))
        {
            if(this._callCount > 0)
            {
                this.touchLayer.active = !0;
                this._startTime = Date.now();
                this._showingTime = this._startTime
            }
            else
            {
                this.touchLayer.active = !1, this._startTime = 0, this._showingTime = 0
            }
        }
    }

    _update(e) 
    {
        this._startTime <= 0 || (this._showingTime += 1e3 * e, this._showingTime > this._startTime + 4000 &&GameGlobal.Event.dispatch(EventConst.EventId.RESET_LOADING_LAYER))
    }
}