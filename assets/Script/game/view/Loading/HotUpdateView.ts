import { SceneConst } from './../../../framework/const/SceneConst';
import { EventConst } from "../../../framework/const/EventConst";
import { GameGlobal } from "../../../framework/GameGlobal";
import { Fsm } from '../../../framework/fsm/Fsm';
import { FsmEventId } from '../../../framework/fsm/FsmEventId';

const {ccclass, property} = cc._decorator;
@ccclass
export default class HotUpdateView extends cc.Component
{
    @property(cc.Asset)
    manifestUrl = null;

    @property
    topTips: cc.Label = null;

    @property
    labTips1: cc.Label = null;

    @property
    labTips2: cc.Label = null;

    @property
    progressBar: cc.ProgressBar = null;

    @property
    tipsWindow: cc.Node = null;

    @property
    labResVersion: cc.Label = null;

    @property
    testImgNode: cc.Node = null;

    @property
    btnClearCache: cc.Node = null;

    @property
    richTips: cc.Node = null;

    @property
    imgBg: cc.Node = null;
    _updating = false;
    _canRetry = false;
    _storagePath = null;
    _am = null;
    _checkListener = null;
    _debugClickCount = 0;
    _timeId = 0;
    _timeIdSdkCfg = 0;
    _checkFinished = false;
    _isCanManualLogin = false;
    

    private _failCount;

    public updateUI:cc.Node;
    private versionCompareHandle;

    onLoad() 
    {
        this.hanldeBg();
        this.labTips1.node.active = false;
        this.labTips2.node.active = false;
        this.topTips.node.active = false;
        this.progressBar.node.active = false;
        this.tipsWindow.active = false;
    }

    hanldeBg() 
    {
        var e = this;
        console.log(" enable os " + cc.sys.os);
        console.log(" enable CC_JSB " + !1);
        console.log(" enable OS_ANDROID " + cc.sys.OS_ANDROID);
        // GameGlobal.Resource.loadRes(null, td.getLoadingBgName(), cc.SpriteFrame, function (t) {
        //     cc.isValid(e.imgBg) && (e.imgBg.getComponent(cc.Sprite).spriteFrame = t)
        // })
    }

    onEnable() 
    {
        this._debugClickCount = 0;
        //s.destoryData();
        this._addEvent();
        GameGlobal.Platform.isMiniGame() ? this._miniGameSdkLogin() : this._onSdkLoginScucc();
        this.labResVersion.node.active = !1;
        this.btnClearCache.active = !1;
        this.richTips.active = !1
    }

    onDisable() 
    {
        GameGlobal.Event.removeAllTargetEvents(this);
        GameGlobal.Timer.clearAll(this);
    }

    _addEvent() 
    {
        GameGlobal.Event.addListener(EventConst.EventId.SDK_LOGIN_SUCC,this._onSdkLoginScucc,this);
    }

    checkCb(e) 
    {
        var t = this;
        switch (cc.log("Code: " + e.getEventCode()), e.getEventCode()) 
        {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.labTips1.string = "No local manifest file found, hot update skipped.";
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                var a = this.tipsWindow.getComponent("HotUpdateConfirmView");
                this.tipsWindow.active = !0, a.setRetryData(function () {
                    cc.game.restart()
                }), this.labTips1.string = "Fail to download manifest file, hot update skipped.";
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this._checkFinished = !0, this.labTips1.string = "Already up to date with the latest remote version.", this.labTips1.node.active = !1, this._sdkLogin();
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                this.labTips1.string = "New version found, please try to update.", this.progressBar.progress = 0;
                var i = e.getTotalBytes();
                i = Math.floor(i / 1024), this.labTips1.string = "New version found, please try to update. ${num}", this.tipsWindow.active = !0, this._checkFinished = !0, (a = this.tipsWindow.getComponent("HotUpdateConfirmView")).setUpdateData(function () {
                    cc.game.end()
                }, function () {
                    t.hotUpdate()
                }, i);
                break;
            default:
                return void(this.labTips1.string = "checkcb unkenow erro .")
        }
        this._am.setEventCallback(null), this._checkListener = null, this._updating = !1
    }

    updateCb(e) 
    {
        var t = this,
            a = !1,
            i = !1;
        switch (e.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.labTips1.string = "No local manifest file found, hot update skipped.", i = !0;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                var n = e.getPercent();
                n = n || 0, this.progressBar.progress = n;
                var o = Math.floor(e.getDownloadedBytes() / 1024 / 1024 * 100) / 100,
                    r = Math.floor(e.getTotalBytes() / 1024 / 1024 * 100) / 100;
                this.labTips2.string = o + " MB/ " + r + "MB(" + Math.floor(100 * n) + "%)";
                //100 === Math.floor(100 * n) ? this.topTips.string = td.Tips.unzipRes : 0 === Math.ceil(n) ? this.topTips.string = td.Tips.calcPackSize : this.topTips.string = td.Tips.hotUpdating;
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.labTips1.string = "Fail to download manifest file, hot update skipped.", i = !0;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.labTips1.string = "Already up to date with the latest remote version.", i = !0;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                this.labTips1.string = "Update finished. " + e.getMessage(), a = !0;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.labTips1.string = "Update failed. " + e.getMessage(), this._updating = !1, this._canRetry = !0;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                this.labTips1.string = e.getMessage(), i = !0;
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                this.labTips1.string = e.getMessage()
        }
        if(i)
        {
            this._am.setEventCallback(null);
            //this._updateListener = null;
            this._updating = !1
        }
        if (a) 
        {
            this._am.setEventCallback(null);
            //this._updateListener = null;
            var s = jsb.fileUtils.getSearchPaths(),
                _ = this._am.getLocalManifest().getSearchPaths();
            console.log(JSON.stringify(_)), Array.prototype.unshift.apply(s, _), cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(s)), jsb.fileUtils.setSearchPaths(s), this.tipsWindow.active = !0, this.tipsWindow.getComponent("HotUpdateConfirmView").setUpdatSuccData(function () {
                cc.audioEngine.stopAll(), cc.game.restart()
            })
        } 
        else if (i) 
        {
            if (this._canRetry) this.tipsWindow.active = !0, this.tipsWindow.getComponent("HotUpdateConfirmView").setRetryData(function () {
                t.retry()
            });
            else this.tipsWindow.active = !0, this.tipsWindow.getComponent("HotUpdateConfirmView").setErrorData(function () {
                cc.audioEngine.stopAll(), cc.game.restart()
            }, e.getEventCode(), e.getMessage())
        }
    }

    retry() 
    {
        !this._updating && this._canRetry && (this._canRetry = !1, this.labTips1.string = "Retry failed Assets...", this._am.downloadFailedAssets())
    }

    checkUpdate() 
    {
        if (this._updating) this.labTips1.string = "Checking or updating ...";
        else {
            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                var e = this.manifestUrl.nativeUrl;
                cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e)), this._am.loadLocalManifest(e)
            }
            if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) return this.labTips1.string = "Failed to load local manifest ...", void(this.labTips1.node.active = !0);
            this._am.setEventCallback(this.checkCb.bind(this));
            this._am.checkUpdate();
            this._updating = !1;
            this._checkFinished = !1;
            GameGlobal.Timer.once(1e4, this, this.showNetWorkError)
        }
    }
    hotUpdate() 
    {
        if (this._am && !this._updating) 
        {
            if (this._am.setEventCallback(this.updateCb.bind(this)), this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                var e = this.manifestUrl.nativeUrl;
                cc.loader.md5Pipe && (e = cc.loader.md5Pipe.transformURL(e)), this._am.loadLocalManifest(e)
            }
            this._failCount = 0;
            this._am.update();
            this._updating = !0;
            this.labTips2.node.active = !0;
            this.topTips.node.active = !0;
            this.progressBar.node.active = !0
        }
    }

    show() 
    {
        !1 === this.updateUI.active && (this.updateUI.active = !0)
    }

    
    
    onDestroy() 
    {
        //this._updateListener && (this._am.setEventCallback(null), this._updateListener = null)
    }
    
    setHotUpdateInfo() 
    {
        var e = this;
        this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset", cc.log("Storage path for remote asset : " + this._storagePath);
        var t = this;
        this.versionCompareHandle = function (e, a) {
            console.log("JS Custom Version Compare: version A is " + e + ", version B is " + a);
            //window.resVersion = e;
            //window.resRemoteVersion = a;
            t.labResVersion.string = "res v" + e;
            t.labTips1.string = "res v" + e;
            var i = e.split("."),
                n = a.split(".");
            //console.log("JS Custom Version Compare window.DX_TEST_VERSION= " + window.DX_TEST_VERSION);
            //console.log("JS Custom Version Compare window.DX_CHECK_VERSION= " + window.DX_CHECK_VERSION);
            // if (window.DX_CHECK_VERSION >= n[3])
            // {
            //     window.DX_ISCheck = !0;
            //     return false;
            // }
            for (var o = 0; o < 3; ++o) 
            {
                var r = parseInt(i[o]),
                    s = parseInt(n[o] || 0);
                if (r !== s) return r - s
            }
        }, 
        this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
        this._am.setVerifyCallback(function (t, a) {
            var i = a.compressed,
                n = a.md5,
                o = a.path;
            a.size;
            return i ? (e.labTips1.string = "Verification passed : " + o, !0) : (e.labTips1.string = "Verification passed : " + o + " (" + n + ")", !0)
        });
        this.labTips1.string = "Hot update is ready, please check or directly update.";
        cc.sys.os === cc.sys.OS_ANDROID && (this._am.setMaxConcurrentTask(2), this.labTips1.string = "Max concurrent tasks count have been limited to 2");
        this.progressBar.progress = 0;
        this.labTips2.string = "";
        this.labTips1.node.active = !1;
        this.checkUpdate()
    }
    
    onBtnDebug() 
    {
        this._debugClickCount++, this.labTips1.node.active = this._debugClickCount >= 10
    }

    _getSdkConfig() 
    {
        // var e = this;
        // this._timeIdSdkCfg && clearTimeout(this._timeIdSdkCfg);
        // var t = window.GameSdkBridge.getGameSdkConfig({});
        // if (t || (this._timeIdSdkCfg = setTimeout(this._getSdkConfig.bind(this), 500)), t) 
        // {
        //     console.log("js:sdkconfig" + JSON.stringify(t));
        //     window.DX_CHANNEL = t.CHANNEL.dx_channel;
        //     window.DX_CHANNEL_ID = t.CHANNEL.dx_channelid;
        //     window.DX_CHECK_VERSION = t.CHANNEL.dx_checkVersion || 0;
        //     window.DX_TEST_VERSION = t.CHANNEL.dx_testVersion || 0;
        //     window.DX_APP_VERSION = t.CHANNEL.appVersion;
        //     gdk.rm.loadRes(null, td.getLoadingBgName(), cc.SpriteFrame, function (t) {
        //         cc.isValid(e.imgBg) && (e.imgBg.getComponent(cc.Sprite).spriteFrame = t)
        //     });
        //     console.log("js:DX_CHANNEL " + DX_CHANNEL);
        //     console.log("js:DX_CHANNEL " + window.DX_CHANNEL);
        //     console.log("js:DX_CHANNEL_ID " + window.DX_CHANNEL_ID);
        //     console.log("js:DX_CHECK_VERSION " + window.DX_CHECK_VERSION);
        //     console.log("js:DX_APP_VERSION " + window.DX_APP_VERSION);
        //     var a = cc.sys.localStorage.getItem("dx_app_version");
        //     console.log("localAppVersion " + a);
        //     if(window.DX_APP_VERSION && window.DX_APP_VERSION != a)
        //     {
        //         console.log("clearLocalStreDir");
        //         this.clearLocalStoreDir();
        //         cc.sys.localStorage.setItem("dx_app_version", window.DX_APP_VERSION);
        //         console.log("game restart");
        //         cc.game.restart();
        //     }
        //     else
        //     {
        //         console.log("setHotUpdateInfo");
        //         this._setHotUpdateInfo()
        //     }
        // }
    }
    _sdkLogin() 
    {
        // this._timeId && clearTimeout(this._timeId);
        // window.GameSdkBridge.login({
        //     adad: "adad"
        // }, this._loginCallBack.bind(this))
    }

    _huaweiJsbsdkLogin() 
    {
        // this._timeId && clearTimeout(this._timeId);
        // window.GameSdkBridge.login({
        //     adad: "adad"
        // }, this._setCanManualLogin.bind(this))
    }

    _jsbSdkLogin(e) 
    {
        // if(td.isHuaWeiJSB())
        // {
        //     console.log("----------huawei Jsb login"), this._setCanManualLogin(e)
        // }
        // else
        // {
        //     this._timeId = setTimeout(this._sdkLogin.bind(this), 500)
        // }
    }
    
    _setCanManualLogin(e) 
    {
        console.log(e, "----------_setCanManualLogin");
        e && 0 === e.errCode ? this._onSdkLoginScucc() : (this._isCanManualLogin = !0, this.labTips1.string = "loginError code= " + (e.code ? e.code : "no code") + " msg= " + (e.msg ? e.msg : "no msg"))
    }

    manualLogin() 
    {
        console.log("----------bgclick------------", this._isCanManualLogin);
        this._isCanManualLogin && (this._isCanManualLogin = !1, this._miniGameSdkLogin())
    }
    
    _miniGameSdkLogin() 
    {
        // if(td.isHuaweiQuick())
        // {
        //     o.default.login(this._setCanManualLogin.bind(this))
        // }
        // else
        // {
        //     o.default.login(this._loginCallBack.bind(this))
        // }
    }

    _loginCallBack(e) 
    {
        if(e && 0 === e.errCode)
        {
            this._onSdkLoginScucc()
        }
        else
        {
            GameGlobal.Platform.isMiniGame() ? this._timeId = setTimeout(this._miniGameSdkLogin.bind(this), 500) : this._jsbSdkLogin(e);
            this.labTips1.string = "loginError code= " + (e.code ? e.code : "no code") + " msg= " + (e.msg ? e.msg : "no msg")
        }
    }

    _onSdkLoginScucc() 
    {
        // UFServerManager.getInstance().initSdk();
        // var e = gdk.SceneId.getValue(td.SceneName.LoginScene);
        // gdk.scene.load(e, null, null, null, !1);
        // gdk.fsm.Fsm.broadcastEvent(n.default.ENTER_LOGIN_VIEW)


        let sceneOb = SceneConst.SceneId[SceneConst.SceneName.LoginScene];
        GameGlobal.Scene.load(sceneOb,null,null,null,false);
        Fsm.broadcastEvent(FsmEventId.IdName.ENTER_LOGIN_VIEW);
    }
    
    onBtnClearCache() 
    {
        this.clearLocalStoreDir(), cc.game.restart()
    }

    clearLocalStoreDir() 
    {
        var e = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset";
        jsb.fileUtils.removeDirectory(e)
    }
    showNetWorkError() 
    {
        var e = this;
        this.tipsWindow.active || this._checkFinished || (this.tipsWindow.active = !0, this.tipsWindow.getComponent("HotUpdateConfirmView").setNetNotAccess(function () {
            e.checkUpdate()
        }))
    }
}