import { LogUtil } from "../../utils/LogUtil";
import { Fsm } from "../Fsm";
import { FsmStateAction } from "../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("InitGameAction")
export default class InitGameAction extends FsmStateAction
{
       
    onEnter() 
    {
        LogUtil.debug("初始化initGame:"+this.actionName);
        //gdk.buildInfo.logLevel == o.LogLevel.LOG ? gdk.Log.logLevel = gdk.LogLevel.LOG | gdk.LogLevel.WARN | gdk.LogLevel.ERROR : gdk.Log.logLevel = gdk.LogLevel.ERROR;
        this.explainParameter();
        cc.view.enableRetina(!0);
        cc.view.adjustViewportMeta(!0);
        cc.view.resizeWithBrowserSize(!0);
        //r.tdPlatform === r.tdOS.WINDOWS ? s.GameResolutionPolicy.setDesignResolutionSize(720, 1280, "Windows") : s.GameResolutionPolicy.setDesignResolutionSize(720, 1280, "Default");
        cc.sys.os === cc.sys.OS_ANDROID ? cc.macro.DOWNLOAD_MAX_CONCURRENT = 5 : (cc.macro.DOWNLOAD_MAX_CONCURRENT = 10, cc.macro.CLEANUP_IMAGE_CACHE = !0, cc.dynamicAtlasManager.enabled = !1);
      
        let frameRate = 30;
        let frameCount = 0;
        let frameStartTime = (new Date).getTime();
        cc.director.on(cc.Director.EVENT_AFTER_DRAW, function () {
            frameCount++;
            var e = (new Date).getTime();
            e - frameStartTime >= 1e3 && (frameRate = frameCount, frameStartTime = e, frameCount = 0)
        }), cc.sys.isMobile || (cc.macro.ENABLE_WEBGL_ANTIALIAS = !0), this.finish()
    }
    explainParameter() 
    {
        // var e = r.getLocationUrl();
        // if (e) 
        // {
        //     var t = new RegExp("(\\?|#|&)dx_channel=([^&#]*)(&|#|$)"),
        //         a = e.match(t);
        //     a && (r.DX_CHANNEL = a[2]);
        //     var i = new RegExp("(\\?|#|&)test=([^&#]*)(&|#|$)");
        //     r.TEST = !!e.match(i);
        //     var n = new RegExp("(\\?|#|&)dx_channelid=([^&#]*)(&|#|$)"),
        //         o = e.match(n);
        //     o && (r.DX_CHANNEL_ID = o[2]), s.isMoXieQQ() ? (r.DX_CHANNEL = r.SdkType.QQ_MoXie, r.DX_CHANNEL_ID = r.SdkType.QQ_MoXie, r.DX_ISCheck = r.SETTING_CFG && r.SETTING_CFG.isCheck, r.isPayOpen = r.SETTING_CFG && !r.SETTING_CFG.isCheck, cc.sys.os == cc.sys.OS_ANDROID ? (r.isPayOpen = !0, 2 == s.getSettingCfg("aosPay") && (r.isPayOpen = !1)) : cc.sys.os == cc.sys.OS_IOS && (r.isPayOpen = !1, 1 == s.getSettingCfg("iosPay") && (r.isPayOpen = !0))) : s.isCXGame() ? (r.DX_CHANNEL = r.SdkType.CX_GAME, r.DX_CHANNEL_ID = r.SdkType.CX_GAME, r.CXGameChannel && (r.DX_CHANNEL_ID = r.CXGameChannel), r.DX_ISCheck = r.SETTING_CFG && r.SETTING_CFG.isCheck) : s.isP8WX() ? (r.DX_CHANNEL = r.SdkType.P8_WX, r.DX_CHANNEL_ID = r.SdkType.P8_WX, r.P8GameChannel && (r.DX_CHANNEL_ID = r.P8GameChannel), r.DX_ISCheck = r.SETTING_CFG && r.SETTING_CFG.isCheck, r.isPayOpen = r.SETTING_CFG && !r.SETTING_CFG.isCheck) : s.isSYWX() ? (r.DX_CHANNEL = r.SdkType.SY_WX, r.DX_CHANNEL_ID = r.SdkType.SY_WX, r.SYGameChannel && (r.DX_CHANNEL_ID = r.SYGameChannel), r.DX_ISCheck = r.SETTING_CFG && r.SETTING_CFG.isCheck, r.isPayOpen = r.SETTING_CFG && !r.SETTING_CFG.isCheck) : (s.isHuaweiQuick() || s.isOPPO() || s.isXiaoMi() || s.isVIVO()) && (r.DX_ISCheck = r.SETTING_CFG && r.SETTING_CFG.isCheck);
        //     var _ = new RegExp("(\\?|#|&)dx_checkVersion=([^&#]*)(&|#|$)");
        //     if (e.match(_)) {
        //         var c = e.match(_);
        //         r.DX_CHECK_VERSION = c[2]
        //     }
        //     var d = new RegExp("(\\?|#|&)ischeck=([^&#]*)(&|#|$)");
        //     if (e.match(d)) "1" === e.match(d)[2] && (r.DX_ISCheck = !0);
        //     if (r.IS_REAL_CHECK = r.DX_ISCheck, r.GUIDE_TEST = !1, r.TEST) 
        //     {
        //         var l = new RegExp("(\\?|#|&)serverType=([^&#]*)(&|#|$)"),
        //             p = e.match(l);
        //         p && (r.TestServerType = parseInt(p[2]));
        //         var u = new RegExp("(\\?|#|&)guide=([^&#]*)(&|#|$)");
        //         e.match(u) && e.match(u).length > 2 && (r.GUIDE_TEST = "false" === e.match(u)[2]);
        //         var E = new RegExp("(\\?|#|&)userId=([^&#]*)(&|#|$)");
        //         e.match(E) && s.LocalStorageUtil.write("DEVICE_ID", e.match(E)[2]);
        //         var h = new RegExp("(\\?|#|&)white=([^&#]*)(&|#|$)");
        //         e.match(h) && e.match(h).length > 2 && (r.WHITE_NAME = "true" === e.match(h)[2])
        //     }
        // }
    }
    
}
Fsm._actionDecorator("InitGameAction", "初始化");
// window.reportTDError = function (t) {
//             window.lastReportTime;
//             var a = s.AccountURL + "/client/report",
//                 i = t,
//                 n = s.Account.getUserData(),
//                 o = s.LocalStorageUtil.read("token");
//             o && (i.token = o), n && (i.userId = n.userId, i.gamerId = n.sid, i.name = n.nickName, i.serverId = n.serverId), i.os = cc.sys.os, i.copy_version = window.copy_version || 0, i.totolTime = cc.director.getTotalTime() / 1e3, "undefined" != typeof RES_VERSION && (i.version = RES_VERSION);
//             var r = require("HttpClientManager");
//             r && r.getInstance().post(a, {
//                 message: i
//             }, function () {});
//             cc.error(i)
//         }, window.statisticsInfo = function (t) {
//             var a = s.AccountURL + "/client/statistics",
//                 i = t,
//                 n = s.Account.getUserData();
//             n && (i.userId = n.userId, i.gamerId = n.sid, i.serverId = n.serverId), i.os = cc.sys.os;
//             var o = require("HttpClientManager");
//             o && o.getInstance().post(a, {
//                 message: i
//             }, function () {});
//             cc.log("statics: " + JSON.stringify(i))
//         }, window.onerror = function (e, t, a, i, n) {
//             var o = window.lastLineno || 0,
//                 r = window.lastColno || 0;
//             if (o !== a || r !== i) {
//                 window.lastLineno = a, window.lastColno = i;
//                 var _ = {};
//                 _.source = t, _.lineno = a, _.colno = i, _.error = n.message, _.stack = n.stack, _.tdErrorType = s.ReportType.error, reportTDError(_)
//             }
//         }, window.reportError = function (e) {
//             var t = {};
//             t.message = e.message, t.stack = e.stack, t.tdErrorType = s.ReportType.error, reportTDError(t)
//         }
    