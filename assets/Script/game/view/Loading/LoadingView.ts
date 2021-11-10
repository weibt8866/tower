import BaseView from "../../../framework/base/BaseView";
import { EventConst } from "../../../framework/const/EventConst";
import { SceneConst } from "../../../framework/const/SceneConst";
import { SystemConst } from "../../../framework/const/SystemConst";
import { GameGlobal } from "../../../framework/GameGlobal";
import { Util } from "../../../framework/utils/Util";
import { LoginModel } from "../../model/LoginModel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingView extends BaseView 
{
    @property(cc.Node)
    public bg:cc.Node = null;
    @property(cc.Label)
    public loadingText:cc.Label = null;
    @property(cc.ProgressBar)
    public loadingBar1:cc.ProgressBar = null;
    @property(cc.ProgressBar)
    public loadingBar2:cc.ProgressBar = null;
    @property(cc.Label)
    public tipTest:cc.Label = null;
    @property(cc.Node)
    public img:cc.Node = null;
    @property(cc.Node)
    public nodeClearCache:cc.Node = null;

    private _updateDt = 0;
    private _startLoadPveRes = !1;
    private _serverDataReady = !1;
    private _isPveLoaded = !1;
    private _isCommonLoaded = !1;
    private _pvePercent = 0;
    private _commonPercent = 0;
    private _tipsTimeCount = 0;
    private _progressCheckCount = 0;
    private _showProgress = 0;
    private _isLoadingCommon = false;
   
    protected onLoad() 
    {
        super.onLoad();
        var thiz = this;
        this._updateDt = 0;
    }

    protected addAllListeners()
    {
        super.addAllListeners();
        GameGlobal.Event.addListener(EventConst.EventId.INIT_DATA_LOADED,this._onGetBattleInfo,this);
        GameGlobal.Event.addListener(EventConst.EventId.FIRST_WEB_SOCKET_TIME_OUT,this._onWebsocketTimeout,this);
        GameGlobal.Event.addListener(EventConst.EventId.LOAD_SUB_PACK1_SUCC,this._userLogin,this);
        GameGlobal.Event.addListener(EventConst.EventId.LOAD_DATA_SUCC,this._userLogin,this);
        GameGlobal.Event.addListener(EventConst.EventId.LOGIN_SUCCESS_RETURN,this._loginSuccess,this);
        console.log("添加事件");
    }

    protected removeAllListeners()
    {
        super.removeAllListeners();
        GameGlobal.Event.removeAllTargetEvents(this);
    }

    protected onDestroy() 
    {
        super.onDestroy();
        cc.director.getScheduler().unscheduleUpdate(this);
        GameGlobal.Event.removeAllTargetEvents(this);
        GameGlobal.Resource.releaseResByPanel("Loading_View");
        //l.getInstance().loadFinishReport()
    }
    protected onEnable() 
    {
        this._updateDt = 0;
        this._showProgress = 0;
        this._progressCheckCount = 0;
        //this.nodeClearCache && (this.nodeClearCache.active = _.isCXGame);
        if(GameGlobal.System.isLoadSubPack)
        {
            GameGlobal.Timer.once(100, this, this._loadCommonRes);
        }
        this._commonPercent = 10;
        var e = (this._pvePercent + this._commonPercent) / 2;
        this._setLoadingBarInfo(e);
        this._userLogin();
        GameGlobal.Event.dispatch(EventConst.EventId.CHECK_POINT_REPORT, EventConst.EventId.LOADING_VIEW_SHOW);
    }
    protected onDisable() 
    {
        GameGlobal.Timer.clearAll(this)
    }

    
    private _userLogin() 
    {
        let loginModel = GameGlobal.System.getModel<LoginModel>(SystemConst.SystemType.Login);
        if(GameGlobal.System.isLoadSubPack && GameGlobal.System.isLoadData)
        {
            //开始连接服务器
            //GameGlobal.Socket.connect(loginModel.curNetUrl);
            this._loadCommonRes()
        }
    }
    private _loginSuccess() 
    {
        //_.DX_ISCheck && cc.sys.os === cc.sys.OS_ANDROID && (_.DX_ISCheck = !1, this._checkServerSpecialOption())
    }

    private _onWebsocketTimeout() 
    {
        this.node.removeFromParent();
        GameGlobal.Viewer.clearAllPopView();
    }

    private _onGetBattleInfo(loadId) 
    {
        //if(loadId === c.LoadKey.BattleArray)
        if(loadId === 4)
        {
            this._serverDataReady = true;
            this._loadBattleRes();
        }
    }

    private _loadBattleRes() 
    {
        //等待数据加载完
        this._serverDataReady = true; //测试

        console.log("判断是否先加载战斗资源");
        var thiz = this;
        if (this._isCommonLoaded && this._serverDataReady && !this._startLoadPveRes) 
        {
            this._startLoadPveRes = !0; 
            cc.log("get battle info, start load pve");
            if (!GameGlobal.Guide.isFirstBattle())
            {
                //c.PveCopyManager.prepareHookData();
                this._startLoadPveRes = true;
                cc.log("get battle info, start load pve");
                this._loadMainSceneRes();
                return ;
            }
            // var a = require("PveLoader").getModules(!1, !GameGlobal.Guide.isFirstBattle()),
            //     i = (new Date).getTime();
            // cc.log("loadingView _onGetBattleInfo  begin LoadRes " + i);
            // GameGlobal.Resource.loadResByModule(GameGlobal.Guide.isFirstBattle() ? "Panel_PVE_FIGHT" : "Panel_PVE_FIGHT_HOOK", a, null, function (e) {
            //     if(cc.isValid(thiz.loadingBar1))
            //     {
            //         thiz._pvePercent = e;
            //         e = (thiz._commonPercent + e) / 2;
            //         thiz._setLoadingBarInfo(e)
            //     }
            // }, function (e) {
            //     if (e)
            //     {

            //     }
            //     else 
            //     {
            //         var a = (new Date).getTime();
            //         cc.log("loadingView _onGetBattleInfo  end LoadRes " + a + " costTime= " + (a - i));
            //         if (!cc.isValid(thiz.loadingBar1)) return;
            //         thiz._pvePercent = 100;
            //         thiz._setLoadingBarInfo(100);
            //         thiz._isPveLoaded = !0;
            //         thiz._isCommonLoaded && thiz._loadMainSceneRes()
            //     }
            // })
        }
    }
    private _loadCommonRes() 
    {
        let thiz = this;
        if (!this._isLoadingCommon) 
        {
            if (this._isLoadingCommon = !0, GameGlobal.Guide.isFirstBattle()) 
            {
                this._commonPercent = 100;
                var t = (this._pvePercent + this._commonPercent) / 2;
                return this._setLoadingBarInfo(t), this._isCommonLoaded = !0, this._loadBattleRes(), void(this._isPveLoaded && this._loadMainSceneRes())
            }
            var a = (new Date).getTime();
            cc.log("loadingView _loadCommonRes  begin LoadRes " + a);
            GameGlobal.Resource.loadResByModule("Scene#MainScene", ["Guide", "Boot", "Common"], null, function (t) {
                thiz._commonPercent = Math.max(t, thiz._commonPercent);
                t = (thiz._pvePercent + thiz._commonPercent) / 2, cc.isValid(thiz.loadingBar1) && thiz._setLoadingBarInfo(t)
            }, function (t) {
                if (t)
                {

                }
                else 
                {
                    var i = (new Date).getTime();
                    cc.log("loadingView _loadCommonRes  end LoadRes " + i + " costTime= " + (i - a));
                    if (!cc.isValid(thiz.loadingBar1)) 
                        return;
                    thiz._commonPercent = 100;
                    var n = (thiz._pvePercent + thiz._commonPercent) / 2;
                    thiz._setLoadingBarInfo(n);
                    thiz._isCommonLoaded = !0;
                    thiz._loadBattleRes();
                    thiz._isPveLoaded && thiz._loadMainSceneRes()
                }
            })
        }
    }
    _loadMainSceneRes() 
    {
        console.log("开始加载主场景");
        var e = SceneConst.SceneId[SceneConst.SceneName.MainScene];
        GameGlobal.Guide.isFirstBattle() || Util.isArrayContains(e.resArr, "MainPanel") || e.resArr.push("MainPanel"),
        GameGlobal.Scene.load(e, function (e) {}, function (e) {}, null, !1)
    }

    update(e) 
    {
        this._updateDt += e;
        this.loadingBar2.progress = Math.floor(644 * this._updateDt) % 100 / 100;
        this._tipsTimeCount += e;
        this._tipsTimeCount >= 6 && (this._setTipsLabel(), this._tipsTimeCount = 0);
        this._progressCheckCount += e;
        this._progressCheckCount >= 2 && (this._progressCheckCount = 0, this._setLoadingBarInfo(0))
    }
    _setLoadingBarInfo(e) 
    {
        void 0 === e && (e = 0);
        if((e = Math.max(e, this._showProgress)) <= this._showProgress && this._showProgress < 100)
        {
            this._showProgress += 1, this._showProgress = Math.min(this._showProgress, 98)
        }
        else
        {
            this._showProgress = e;
        } 
        this.loadingBar1.progress = this._showProgress / 100;
        this.loadingText.string = Math.floor(this._showProgress) + "%正在加载…";
    }
    _setTipsLabel() 
    {
        // var e = "";
        // if (c.Account && c.Account.getUserData()) 
        // {
        //     var t = c.Account.getUserData().level;
        //     e = c.GetTableClass(c.TableEnum.GameTips).getTipsByLevel(t), this.tipTest.string = e
        // }
        // c.IsCheckServer() && (this.tipTest.string = c.Tips.gameEntering)
    }
    onBtnClearCacheClick() 
    {
        // if (_.isCXGame) 
        // {
        //     console.log("======> \u6e05\u9664\u7f13\u5b58\u3002\u3002\u3002");
        //     cc.assetManager.cacheManager.clearCache();
        //     c.MessageBox.showMessage("\u6e05\u7406\u5b8c\u6210");
        //     GameGlobal.Event.dispatch(EventConst.EventId.GUIDE_FINISH);
        //     var e = SceneConst.SceneId[SceneConst.SceneName.HotUpdateScene];
        //     GameGlobal.Scene.load(e, null, null, null, !1)
        // }
    }
}
