import BaseScene from "../../framework/base/BaseScene";
import { EventConst } from "../../framework/const/EventConst";
import { SoundConst } from "../../framework/const/SoundConst";
import { ViewConst } from "../../framework/const/ViewConst";
import { GameGlobal } from "../../framework/GameGlobal";
const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScene extends BaseScene
{
    @property(cc.Node)
    imgMapBg: cc.Node = null;
    
    onLoad() 
    {
        super.onLoad();
        var e = this;
        // var t = td.PanelManager.getInstance().node;
        // t.setAnchorPoint(cc.v2(.5, .5));
        // this.node.addChild(t);
        if(GameGlobal.Guide.isFirstBattle())
        {
            this.imgMapBg.active = false;
            GameGlobal.Timer.once(1e4, this, function () {
                e.imgMapBg.active = true
            })
        }
        else
        {
            this._initMainPanel()
        }
    }

    onDisable() 
    {
        //td.PanelManager.removeInstance();
        GameGlobal.Event.removeAllTargetEvents(this);
        GameGlobal.Timer.clearAll(this)
    }

    _initMainPanel() 
    {
        GameGlobal.Event.dispatch(EventConst.EventId.SHOW_PANEL, ViewConst.ViewName.Panel_Main);
    }

    start() 
    {
        super.start();
        this._setScene()
    }

    _addEventListener() 
    {
        GameGlobal.Event.addListener(EventConst.EventId.ALL_DATA_LOADED,this.showPveHookPanel,this);
        GameGlobal.Event.addListener(EventConst.EventId.INIT_MAIN_PANEL,this._initMainPanel,this);
    }

    _setScene() 
    {
        // if(td.Account.isLoadAllData())
        // {
        //     if(td.PanelJumpManager.haveDestination())
        //     {
        //         td.PanelJumpManager.jumpToLastDestination()
        //     }
        //     else
        //     {
        //         td.PanelJumpManager.isJumpToBackPanel() ? td.PanelJumpManager.jumpToBackPanel() : this.showPveHookPanel()
        //     }
        // }
        // else
        // {
        //     this._addEventListener()
        // }
    }

    showPveHookPanel() 
    {
        if (GameGlobal.Guide.isFirstBattle()) 
        {
            this._addEventListener();
            // var e = td.PanelManager.getInstance().getMainLayer();
            // e && (e.active = !1);
            GameGlobal.Event.dispatch(EventConst.EventId.SHOW_PANEL,ViewConst.ViewName.Panel_PVE_FIGHT);
        } 
        else 
        {
            GameGlobal.Event.dispatch(EventConst.EventId.PLAY_MUSIC,SoundConst.SoundID.Hook);
            if (GameGlobal.Guide.isForceGuideFinshed()) 
            {
                GameGlobal.Event.dispatch(EventConst.EventId.SHOW_PANEL,ViewConst.ViewName.Panel_HomePage);
            }
            else 
            {
                // var t = cc.js.formatStr("fightRes/pve/map/map%s", td.GlobalFunction.pad(td.GetConfig("PVE_GUIDE_MAP"), 3));

                // td.GlobalFunction.createSpriteNode(this.imgMapBg, t);

                GameGlobal.Event.dispatch(EventConst.EventId.SHOW_PANEL, ViewConst.ViewName.Panel_PVE_FIGHT_HOOK);
            }

            //GameGlobal.Event.dispatch(EventConst.EventName.GUIDE_CUSTOM_COND_CHANGE, td.GuideCustomCond.MainSceneLoaded);
        }
    }
}
   