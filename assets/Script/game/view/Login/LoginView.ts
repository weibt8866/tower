import BaseView from "../../../framework/base/BaseView";
import { EventConst } from "../../../framework/const/EventConst";
import { SceneConst } from "../../../framework/const/SceneConst";
import { SystemConst } from "../../../framework/const/SystemConst";
import { ViewConst } from "../../../framework/const/ViewConst";
import { Fsm } from "../../../framework/fsm/Fsm";
import { FsmEventId } from "../../../framework/fsm/FsmEventId";
import { GameGlobal } from "../../../framework/GameGlobal";
import { LogUtil } from "../../../framework/utils/LogUtil";
import { LoginContrl } from "../../contol/LoginContrl";
const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginView extends BaseView
{
    @property(cc.Button)
    startGameBtn = null;
    @property(cc.Node)
    btnSwitchAccount = null;
    @property(cc.Node)
    selectedServer = null;
    @property(cc.Node)
    showNotice = null;
    @property(cc.Node)
    bg = null;
    @property(cc.Node)
    logo = null;
    @property(cc.Layout)
    layoutInfo = null;
    @property(cc.Layout)
    layoutNodeInfo = null;
    @property(cc.Label)
    info_1 = null;
    @property(cc.Label)
    info_2 = null;
    @property(cc.Label)
    info_3 = null;
    @property(cc.Label)
    info_4 = null;
    @property(cc.Label)
    info_5 = null;
    @property(cc.Label)
    info_6 = null;
    @property(cc.Label)
    labResVer = null;
    @property(cc.Label)
    labResRemoteVer = null;
    @property(cc.Node)
    btnClearCache = null;
    @property(cc.Node)
    richTips = null;
    @property(cc.Toggle)
    toggleAgree = null;
    @property(cc.Node)
    nodeAgree = null;
    @property(cc.Node)
    tips1 = null;
    @property(cc.Node)
    tips2 = null;
    @property(cc.Node)
    nodeMoxieQQ = null;

    private _baseNode;
    _sysTipsNode = null;
    _bgClickCount = 0;
    _logoClickCount = 0;
    _lastClickTime = 0;
    _startGame = !1;
    _isInitServerList = !1;
    _isToggleCheck = !0;
    _newAccount = !1
    _lastTouchSelectServerTime;

    private loginCtr:LoginContrl;

     protected onLoad() 
     {
        super.onLoad();
        var e = this;
        //p.SETTING_CFG && p.SETTING_CFG.isCheck && (p.DX_ISCheck = p.SETTING_CFG && p.SETTING_CFG.isCheck);
        this.loginCtr = GameGlobal.System.getCtrl<LoginContrl>(SystemConst.SystemType.Login);
        this._baseNode = GameGlobal.Viewer.getLayer(ViewConst.LayerType.messageLayer);
        this._sysTipsNode = new cc.Node;
        this._baseNode.addChild(this._sysTipsNode, 999);
        this.bg.on("touchend", this.onLogoClicked, this);
        this.logo.on("touchend", this.onLogoClicked, this);
        //this.showNotice.active = !u.IsCheckServer();
        this.labResVer.node.active = !0;
        this.labResVer.string = "";
        this.labResRemoteVer.node.active = !1;
        this.btnClearCache.active = !1;
        this.richTips.active = !1;
        //window.SETTING_CFG && window.SETTING_CFG.version && (this.labResVer.string = window.SETTING_CFG.version);
        //this.nodeAgree.active = u.isCXGame();
        this.toggleAgree.check();
        this._isToggleCheck = this.toggleAgree.isChecked;
        this.nodeAgree.active || (this._isToggleCheck = !0);
        // u.isMiniGame() || gdk.rm.loadRes(null, u.getLoadingBgName(), cc.SpriteFrame, function (t) {
        //     cc.isValid(e.bg) && (e.bg.getComponent(cc.Sprite).spriteFrame = t)
        // });
        this.logo.scale = .8;
        this.logo.y += 25;
        this.logo.active = !1;
        // u.isCXGame() && p.qingjs && p.qingjs.instance.showMenu && !p.showCXMenu && (p.showCXMenu = !0, p.qingjs.instance.showMenu({
        //     entryIconX: 10,
        //     entryIconY: 640
        // }));
        // this.nodeMoxieQQ.active = u.isMoXieQQ();
        // if (u.isMoXieQQ()) 
        // {
        //     var i = this.nodeMoxieQQ.getChildByName("labQQ").getComponent(cc.Label);
        //     p.SETTING_CFG && p.SETTING_CFG.connectQQ && (i.string = p.SETTING_CFG.connectQQ)
        // }
        this.node.getChildByName("switchAccount").active = !GameGlobal.Platform.isMiniGame();
        this._hideLoginView() && this._setUIState(!1)
    }

    onEnable() 
    {
        //u.GlobalFunction && u.GlobalFunction.clearData();
        //cc.log("loginView " + u.TimeUtil.getTime());
        this._startGame = !1;
        this._setSelectServerInfo();
        this.initChannelInfo();
        GameGlobal.Timer.loop(6e4, this, this._checkServerInfo);
        //p.UFServerManager.getInstance().getNotice() && this._onGetServerList();
        this._onGetServerList();
        
        this._checkMiniGameUpdate();
        var e = GameGlobal.Viewer.getLayer(ViewConst.LayerType.messageLayer);
        e && (e.removeAllChildren(), this._sysTipsNode = new cc.Node, e.addChild(this._sysTipsNode, 999))
    }

    protected addAllListeners()
    {
        super.addAllListeners();
        GameGlobal.Event.addListener(EventConst.EventId.REQUEST_SERVER_RETURN,this._requestServerReturn,this);
        GameGlobal.Event.addListener(EventConst.EventId.CREATE_ROLE_LAYOUT,this._createRoleLayout,this);
        GameGlobal.Event.addListener(EventConst.EventId.LOGIN_SUCCESS,this._loginSuccess,this);
        GameGlobal.Event.addListener(EventConst.EventId.SERVER_RETURN_CODE,this._handleServerCode,this);
        GameGlobal.Event.addListener(EventConst.EventId.ADDMESSAGEBOX_TOSCENE,this._addMessageBox,this);
        GameGlobal.Event.addListener(EventConst.EventId.SERVER_INFO_RETURN,this._setSelectServerInfo,this);

        GameGlobal.Event.addListener(EventConst.EventId.SERVER_LIST_RETURN,this._onGetServerList,this);
        GameGlobal.Event.addListener(EventConst.EventId.SELECT_SERVER_COMPLETE,this._setSelectServerInfo,this);
        GameGlobal.Event.addListener(EventConst.EventId.SDK_INIT_CALL_BACK,this.initChannelInfo,this);
        GameGlobal.Event.addListener(EventConst.EventId.FIRST_WEB_SOCKET_TIME_OUT,this._onWebsocketTimeout,this);
        GameGlobal.Event.addListener(EventConst.EventId.SELECT_SERVER_OPEN,this.serverOpen,this);

    }

    protected removeAllListeners()
    {
        GameGlobal.Event.removeAllTargetEvents(this);
    }

    _checkMiniGameUpdate() 
    {
        if (cc.sys.platform == cc.sys.WECHAT_GAME) 
        {
            // var e = p.wx;
            // p.isMoXieQQ && (e = p.qq);
            // var t = e.getUpdateManager();
            // t.onUpdateReady(function (a) {
            //     console.log("======> mini game update: ", a), e.showModal({
            //         title: u.Tips.Update_Title,
            //         content: u.Tips.Update_Tips,
            //         success: function (e) {
            //             e.confirm && t.applyUpdate()
            //         }
            //     })
            // }), t.onUpdateFailed(function () {
            //     console.error("======> mini game 新版本下载失败")
            // })
        }
    }
    onDisable() 
    {
        this.donotCheckServerInfo();
        GameGlobal.Timer.clearAll(this)
    }
    donotCheckServerInfo() 
    {
        GameGlobal.Timer.clearAll(this)
    }
    
    serverOpen() 
    {
        //var e = p.UFServerManager.getInstance().getSelectServerData();
        //!p.UFServerManager.getInstance().getShutDownState() || e.state !== u.ServerState.New && e.state !== u.ServerState.Full || Fsm.broadcastEvent(FsmEventId.IdName.SERVER_OPEN_VIEW)

        Fsm.broadcastEvent(FsmEventId.IdName.SERVER_OPEN_VIEW)
    }
    onDestroy() 
    {
        GameGlobal.Resource.releaseResByPanel("Scene#LoginScene")
    }
    _checkServerInfo() 
    {
        LogUtil.debug("开始请求服务器列表");
        this.loginCtr.requestServerList();
    }
    
    initChannelInfo() 
    {
        // var e = this;
        // if (this._hideLoginView()) 
        // {
        //     var t = 0 == this._ufsm.getHistoryList().length;
        //     this.startGameBtn.node.active = !t;
        //     this.selectedServer.active = !t;
        //     this._newAccount = t;
        //     t ? this._hideLoginView() && this.onTouchEnterGame() : this._setUIState(!0)
        // }
        // if (this._ufsm && this._ufsm.skdInitSucc) 
        // {
        //     var a = E.getInstance().getSdkConfig();
        //     if(a)
        //     {
        //         a.GAME.loginBG.logo && gdk.rm.loadRes(null, a.GAME.loginBG.logo, cc.SpriteFrame, function (t) {
        //             cc.isValid(e.logo) && (e.logo.getComponent(cc.Sprite).spriteFrame = t)
        //         });
        //         console.log("js:sdkconfig" + JSON.stringify(a));
        //         if(a.GAME.qualificationInfo.copyright_owner)
        //         {
        //             this.info_1.string = a.GAME.qualificationInfo.copyright_owner;
        //             this.info_2.string = a.GAME.qualificationInfo.publishing_unit;
        //             this.info_3.string = a.GAME.qualificationInfo.approval_number;
        //             this.info_4.string = a.GAME.qualificationInfo.game_number;
        //             this.info_5.string = a.GAME.qualificationInfo.age_tip;
        //             this.info_6.string = a.GAME.qualificationInfo.soft_registration_number;
        //             this.info_1.node.active = !0;
        //             this.info_2.node.active = !0;
        //             this.info_3.node.active = !0;
        //             this.info_4.node.active = !0;
        //             this.info_5.node.active = !0;
        //             this.info_6.node.active = !0;
        //             a.GAME.qualificationInfo.age_tip ? this.info_4.node.x = -50 : this.info_4.node.x = 2;
        //         }
        //     }
        //     if(cc.sys.os === cc.sys.OS_IOS)
        //     {
        //         this.info_1.string = "\u8457\u4f5c\u6743\u4eba\uff1a\u6df1\u5733\u5e02\u5927\u8c61\u4e92\u5a31\u79d1\u6280\u6709\u9650\u516c\u53f8", "1903" === p.Sdk_Channel_Id[p.DX_CHANNEL_ID] ? (this.info_2.string = "\u51fa\u7248\u670d\u52a1\u5355\u4f4d:\u82cf\u5dde\u7f8e\u751f\u5143\u4fe1\u606f\u79d1\u6280\u6709\u9650\u516c\u53f8", this.info_4.string = "ISBN:978-7-7979-7898-9") : "6003" === p.Sdk_Channel_Id[p.DX_CHANNEL_ID] ? (this.info_1.string = "\u8457\u4f5c\u6743\u4eba\uff1a\u53a6\u95e8\u559c\u9c7c\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8", this.info_2.string = "\u51fa\u7248\u670d\u52a1\u5355\u4f4d\uff1a\u53a6\u95e8\u6e38\u529b\u4fe1\u606f\u79d1\u6280\u6709\u9650\u516c\u53f8") : "6001" === p.Sdk_Channel_Id[p.DX_CHANNEL_ID] ? (this.info_1.string = "\u8457\u4f5c\u6743\u4eba\uff1a\u6df1\u5733\u5e02\u5927\u8c61\u4e92\u5a31\u79d1\u6280\u6709\u9650\u516c\u53f8", this.info_2.string = "\u51fa\u7248\u5355\u4f4d\uff1a\u5317\u4eac\u5e7b\u65b9\u6717\u777f\u8f6f\u4ef6\u79d1\u6280\u6709\u9650\u516c\u53f8", this.info_3.string = "\u6279\u51c6\u6587\u53f7\uff1a\u65b0\u5e7f\u51fa\u5ba1[2018]174\u53f7", this.info_4.string = "ISBN\uff1a978-7-498-03719-0") : "6005" === p.Sdk_Channel_Id[p.DX_CHANNEL_ID] ? (this.info_1.string = "\u8457\u4f5c\u6743\u4eba\uff1a\u53a6\u95e8\u6e38\u529b\u4fe1\u606f\u79d1\u6280\u6709\u9650\u516c\u53f8", this.info_2.string = "\u51fa\u7248\u5355\u4f4d\uff1a\u53a6\u95e8\u6e38\u529b\u4fe1\u606f\u79d1\u6280\u6709\u9650\u516c\u53f8", this.info_3.string = "\u6279\u51c6\u6587\u53f7\uff1a\u95f5\u65b0\u5e7f[2017]460\u53f7", this.info_4.string = "ISBN\uff1a978-7-498-01560-0") : p.DX_CHANNEL == p.SdkType.P8_WX || (this.info_2.string = "\u51fa\u7248\u670d\u52a1\u5355\u4f4d\uff1a\u4e0a\u6d77\u6caa\u9996\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8")
        //     }
        //     this.info_1.node.active = this._isShowCopyRight();
        //     this.info_2.node.active = this._isShowCopyRight();
        //     this.info_3.node.active = this._isShowCopyRight();
        //     this.info_4.node.active = this._isShowCopyRight();
        //     this.info_5.node.active = this._isShowCopyRight();
        //     this.info_6.node.active = this._isShowCopyRight();
        //     this.info_2._forceUpdateRenderData();
        //     this.info_4._forceUpdateRenderData();
        //     this.info_5._forceUpdateRenderData();
        //     this.layoutInfo.updateLayout();
        //     console.log(this._isShowCopyRight(), ">>>>>>", this.info_1.node.active);
        //     var i = !0;
        //     (u.isFanti() || this._hideLoginView() && this._newAccount) && (i = !1);
        //     this.tips1 && (this.tips1.active = i);
        //     this.tips2 && (this.tips2.active = i);
        //     E.getInstance().activeReport()
        // }
    }
    _isShowCopyRight() 
    {
        return false;
        //return console.log(p.DX_CHANNEL, "-------------", p.DX_CHANNEL_ID), p.DX_CHANNEL !== p.SdkType.ZONE_WAN_IOS && p.DX_CHANNEL !== p.SdkType.ZONE_WAN_ANDROID && p.DX_CHANNEL !== p.SdkType.ZoneWanH5 && !u.isCXGame() && !u.isFanti() && p.DX_CHANNEL_ID != p.Sdk_Channel_Id.P8_WX && p.DX_CHANNEL_ID != p.Sdk_Channel_Id.P8_WX_KXDMX && p.DX_CHANNEL !== p.SdkType.HOU_LANG_AND && p.DX_CHANNEL !== p.SdkType.HOU_LANG_HUAWEI && p.DX_CHANNEL !== p.SdkType.HOU_LANG_OPPO_AND_VIVO && p.DX_CHANNEL !== p.SdkType.HOU_LANG_QIFU && p.DX_CHANNEL !== p.SdkType.HOU_LANG_AND_2021 && p.DX_CHANNEL !== p.SdkType.PLAY800_ANDROID && p.DX_CHANNEL !== p.SdkType.P8_MIX_AND && p.DX_CHANNEL !== p.SdkType.SY_WX || ("houlang_and_bilibili" == p.DX_CHANNEL_ID || "houlang_and_huawei" == p.DX_CHANNEL_ID || "ZONE_WAN_ANDROID_KXBBTF" == p.DX_CHANNEL_ID || "houlang_oppo_and_vivo" == p.DX_CHANNEL_ID || "houlang_qifu" == p.DX_CHANNEL_ID)
    }
    
    _onGetServerList() 
    {
        // if (!this._startGame && this._isInitServerList, this._isInitServerList = !0, this._setSelectServerInfo(), this._hideLoginView()) 
        // {
        //     var e = 0 == this._ufsm.getHistoryList().length;
        //     this.startGameBtn.node.active = !e;
        //     this.selectedServer.active = !e;
        //     this._newAccount = e;
        //     e ? (this.onTouchEnterGame(), console.log("_onGetServerList 2222")) : (this._setUIState(!0), this.initChannelInfo(), console.log("_onGetServerList 111"))
        // } 
        // else this.startGameBtn.node.active = !0, this.selectedServer.active = !0
    }
    _setSelectServerInfo() 
    {
        // if (this._ufsm) 
        // {
        //     if (!this._ufsm.getIsHistroyCompleted() || !this._ufsm.getIsListCompleted())
        //     {
        //         this.selectedServer.getChildByName("serverName").getComponent(cc.Label).string = "";
        //         this.selectedServer.getChildByName("serverState").active = !1;
        //         return;
        //     }
        //     var e = this._ufsm.getSelectServerData();
        //     //e && cc.log("_setSelectServerInfo serverData = " + e.serverId + u.Tips.arean + " " + e.serverName);
        //     var t = this.selectedServer.getChildByName("serverName");
        //     if(e)
        //     {
        //         //p.DX_CHANNEL == p.SdkType.AWY ? t.getComponent(cc.Label).string = e.serverName : t.getComponent(cc.Label).string = e.serverId + u.Tips.arean + " " + e.serverName 
        //     }
        //     else
        //     {
        //         t.getComponent(cc.Label).string = "";
        //     }
        //     //t.x = p.DX_CHANNEL != p.SdkType.AWY ? -162 : -102;
        //     t = this.selectedServer.getChildByName("serverState");
        //     if(e)
        //     {
        //         t.active = !0;
        //         // if(e.state !== u.ServerState.ShutDown && this._ufsm.totalServerSwitch())
        //         // {
        //         //     e.state === u.ServerState.Full ? this.createAltasSprite(u.resDef.pngPlist.DL_denglu, "DL_xuanqu_zt_2", t) : e.state === u.ServerState.New || e.state === u.ServerState.CHECK ? this.createAltasSprite(u.resDef.pngPlist.DL_denglu, "DL_xuanqu_zt_1", t) : this.createAltasSprite(u.resDef.pngPlist.DL_denglu, "DL_xuanqu_zt_3", t)
        //         // }
        //         // else 
        //         // {
        //         //     this.createAltasSprite(u.resDef.pngPlist.DL_denglu, "DL_xuanqu_zt_0", t)
        //         // }
        //     }
        //     else
        //     {
        //         t.active = !1;
        //     }
        //     var a = 0 == this._ufsm.getHistoryList().length;
        //     console.log("_setSelectServerInfo " + a);
        //     this._hideLoginView() && a && this.onTouchEnterGame()
        // }
    }
    _requestServerReturn() 
    {
        // if (this._hideLoginView()) 
        // {
        //     var e = 0 == this._ufsm.getHistoryList().length;
        //     this.startGameBtn.node.active = !e;
        //     this.selectedServer.active = !e;
        //     e ? this.onTouchEnterGame() : (this._setUIState(!0), this.initChannelInfo())
        // } 
        // else this.startGameBtn.node.active = !0, this.selectedServer.active = !0
    }
    
    _randomName() 
    {
        // var e = u.FirstName.split(","),
        //     t = u.SecondName1.split(",");
        // return e[Math.floor(Math.random() * e.length)] + t[Math.floor(Math.random() * t.length)]
    }
    _createRoleLayout() 
    {
        var e = {
            sex: 1,
            avatarId: Math.floor(10 * Math.random()),
            //nickName: u.GetConfig("ACTOR_DEFAULT_NAME")
        };
        if(GameGlobal.Socket.isConnectComplete())
        {
            GameGlobal.Event.dispatch(EventConst.EventId.REQUEST_CREATE_ACTOR,e);
        }
        else
        {
            this.loginCtr.setCreateRoleData(e);
            GameGlobal.System.enterGame();
        } 
        Fsm.broadcastEvent(FsmEventId.IdName.CREATE_ROLE);
    }
    _loginSuccess() 
    {
        Fsm.broadcastEvent(FsmEventId.IdName.PLAY_GAME);
    }
    
    onTouchNotice() 
    {
        Fsm.broadcastEvent(FsmEventId.IdName.SHOW_NOTICE_WINDOW);
        this.onBgClicked()
    }
    
    onTryToLogoutAccount() 
    {
        // _.getInstance().logout(function () {
        //     u.ServerDelegate.setOffLineState(u.OffLineState.OnLine.DisConnect)
        // })
    }
    
    onTouchSelectServer() 
    {
        this.onBgClicked();
        // if(this._ufsm.totalServerSwitch())
        // {
        //     if(Date.now() - this._lastTouchSelectServerTime < 1000)
        //     {
        //         cc.log("click select server to busy!!!!!!")
        //     }
        //     else
        //     {
        //         this._lastTouchSelectServerTime = Date.now();
        //         Fsm.broadcastEvent(FsmEventId.IdName.SHOW_SELECT_SERVER)
        //     }
        // }
        // else
        // {
        //     //u.MessageBox.showMessage(this._ufsm.getStopServerMessage(), 60)
        // }

        Fsm.broadcastEvent(FsmEventId.IdName.SHOW_SELECT_SERVER)
    }
    
    _showIOSH5TipWindow() 
    {
        // r.default.showWindow(this.node, {
        //     tipStr: "为了给您带来更好的游戏体验，请前往苹果应用商店更新游戏。\n\n温馨提示：原有账号信息不受影响。",
        //     sureCb: function () {}
        // })
    }
    
    onTouchEnterGame() 
    {
        // if (this._isToggleCheck) 
        // {
        //     var e = this._ufsm.getSelectServerData(),
        //         t = Date.now();
        //     if (t - this._lastClickTime <= 1000 || !e)
        //     {
        //          cc.log("onTouchEnterGame not init11 " + (t - this._lastClickTime) + " , " + e);
        //     }
        //     else if (this._ufsm._isHistroyCompleted && this._ufsm._isListCompleted) 
        //     {
        //         if (!this._ufsm.skdInitSucc)
        //         {
        //             //this._needTips() && u.TipsUtil.showMessage(u.Tips.WaitForStart);
        //             cc.log("onTouchEnterGame not init22 " + this._ufsm.skdInitSucc + " , " + this._ufsm.authTokenSucc);
        //             return;
        //         }
        //         if (!this._ufsm.authTokenSucc)
        //         { 
        //             //this._needTips() && u.TipsUtil.showMessage(u.Tips.TokenFailed);
        //             cc.log("onTouchEnterGame not init22 " + this._ufsm.skdInitSucc + " , " + this._ufsm.authTokenSucc);
        //             return;
        //         }
        //         var a = this._ufsm.getHistoryList();
        //         if(a && !(a.length <= 0))
        //         {
        //             // cc.ENGINE_VERSION;
        //             // if(e.state !== u.ServerState.ShutDown)
        //             // {
        //                 if(this._startGame)
        //                 {
        //                     cc.log("onTouchEnterGame init44 ");
        //                 }
        //                 else
        //                 {
        //                     this._startGame = !0;
        //                     this._lastClickTime = t;
        //                     Fsm.broadcastEvent(FsmEventId.IdName.PLAY_GAME);
        //                     cc.log("onTouchEnterGame init33 ");
        //                     //u.LoginManager.recordClickEnterTime()
        //                 }
        //             // }
        //             // else
        //             // {
        //             //     u.TipsUtil.showMessage(u.Tips.ServerIsRepair)
        //             // }
        //         }
        //         else
        //         {
        //             //u.TipsUtil.showMessage(u.Tips.ServerIsClosing)
        //         }
        //     } 
        //     else
        //     {
        //          //this._needTips() && u.TipsUtil.showMessage(u.Tips.ServerLoading)
        //     }
        // } 
        // else
        // {
        //     //this._needTips() && u.TipsUtil.showMessage(u.Tips.ReadAndAgree)
        // }

        LogUtil.debug("点击进入游戏");
        this._startGame = true;
        Fsm.broadcastEvent(FsmEventId.IdName.PLAY_GAME);
    }
    
    _onWebsocketTimeout() 
    {
        this._startGame = !1, this._lastClickTime = 0
    }
    
    _handleServerCode(e) 
    {
        // var t = u.GetNetErrorTips(e);
        // t || (t = u.Tips.ErrorCode + e);
        // u.MessageBox.showMessage(t);
        // e === u.NetCode.TOKEN_ERROR && this._runLoginScene()
    }
    
    _runLoginScene() 
    {
        GameGlobal.Event.dispatch(EventConst.EventId.GUIDE_FINISH);
        let sceneOb = SceneConst.SceneId[SceneConst.SceneName.HotUpdateScene];
        GameGlobal.Scene.load(sceneOb,null,null);
    }
    
    _addMessageBox(e) 
    {
        this._sysTipsNode.addChild(e)
    }
    
    createAltasSprite(e, t, a) 
    {
        var i = a.getComponent(cc.Sprite);
        i || (i = a.addComponent(cc.Sprite)), GameGlobal.Resource.loadRes(null, e, cc.SpriteAtlas, function () {
            if (cc.isValid(i)) 
            {
                var a = (GameGlobal.Resource.getResByUrl(e, cc.SpriteAtlas) as cc.SpriteAtlas).getSpriteFrame(t);
                i.spriteFrame = a
            }
        })
    }
    
    onLogoClicked() 
    {
        this._logoClickCount++, this.checkWhiteDebug()
    }
    
    onBgClicked() 
    {
        this._bgClickCount++, this.checkWhiteDebug()
    }
    
    checkWhiteDebug() 
    {
        //this._logoClickCount >= 3 && this._bgClickCount >= 3 && (p.WHITE_NAME = !0), p.WHITE_NAME && this._logoClickCount >= 6 && (p.GUIDE_TEST = !0, cc.debug.setDisplayStats(!0)), this._logoClickCount >= 3 && (this.labResRemoteVer.node.active = !0)
    }
    
    onBtnClearCache() 
    {
        var e = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset";
        jsb.fileUtils.removeDirectory(e), cc.game.restart()
    }
    
    onToggleClick(e) 
    {
        this._isToggleCheck = e.isChecked
    }
    
    onAgreementClick() 
    {
        //s.default.showWindow(this.node, null)
        //打开协议界面
    }

    _setUIState(e) 
    {
        this.btnSwitchAccount.active = !GameGlobal.Platform.isMiniGame() && e;
        this.showNotice.active = e;
        this.selectedServer.active = e;
        this.richTips.active = !1;
        this.startGameBtn.node.active = e;
        this.layoutInfo.node.active = e;
        this.layoutNodeInfo.node.active = e;
        this.info_1.node.active = e;
        this.info_2.node.active = e;
        this.info_3.node.active = e;
        this.info_4.node.active = e;
        this.info_5.node.active = e;
        this.info_6.node.active = e;
        this.tips1.active = e;
        this.tips2.active = e;
    }
    
    _hideLoginView() 
    {
        //return !(u.IsCheckServer() || p.DX_CHANNEL !== p.SdkType.QQ_MoXie && "hideLogin" != p.DX_CHECK_VERSION)
        return false;
    }
    
    _needTips() 
    {
        return !this._hideLoginView() || this._hideLoginView() && !this._newAccount
    }
    
    onClickAgeTip() 
    {
        Fsm.broadcastEvent(FsmEventId.IdName.SHOW_AGE_TIP_WINDOW);
    }
}