
const {ccclass, property} = cc._decorator;
@ccclass
export default class ShowHideComponent extends cc.Component
{

}
        
        // var n = require("../const/gdk_HideMode"),
        //     s = require("../core/gdk_EventTrigger"),
        //     o = require("../managers/gdk_PoolManager"),
        //     a = require("../core/gdk_DelayCall"),
        //     r = cc.Class({
        //         extends: cc.Component,
        //         editor: {
        //             menu: "gdk(Component)/ShowHideComponent"
        //         },
        //         properties: {
        //             clearTime: {
        //                 default: 300
        //             },
        //             hideMode: {
        //                 default: n.DESTROY,
        //                 type: n,
        //                 visible: !0,
        //                 serializable: !0,
        //                 tooltip: !1
        //             },
        //             onStartShow: {
        //                 default: null,
        //                 type: s,
        //                 visible: !1,
        //                 serializable: !1
        //             },
        //             onShow: {
        //                 default: null,
        //                 type: s,
        //                 visible: !1,
        //                 serializable: !1
        //             },
        //             onStartHide: {
        //                 default: null,
        //                 type: s,
        //                 visible: !1,
        //                 serializable: !1
        //             },
        //             onHide: {
        //                 default: null,
        //                 type: s,
        //                 visible: !1,
        //                 serializable: !1
        //             },
        //             _isShow: null,
        //             isShow: {
        //                 visible: !1,
        //                 get() {
        //                     return null == this._isShow ? this.node.active : this._isShow
        //                 }
        //             },
        //             isShowWheEnable: !1,
        //             _hideMode: null,
        //             _action: null
        //         },
        //         ctor() {
        //             this.onStartShow = s.get(), this.onShow = s.get(), this.onStartHide = s.get(), this.onHide = s.get()
        //         },
        //         onEnable() {
        //             this.isShowWheEnable && this.show()
        //         },
        //         onDisable() {
        //             null != this._action && 0 == this._action.isDone() && cc.isValid(this.node, !0) && (this._action.getOriginalTarget() && this.node.stopAction(this._action), this.hideComplete()), this._isShow && (this._isShow = null), this._action = null
        //         },
        //         onDestroy() {
        //             this.onShow.release(), this.onHide.release(), this.onShow = null, this.onHide = null, this.onStartShow.release(), this.onStartHide.release(), this.onStartShow = null, this.onStartHide = null, this._isShow = null
        //         },
        //         unuse() {
        //             this._isShow = null, this.onShow.offAll(), this.onHide.offAll(), this.onStartShow.offAll(), this.onStartHide.offAll()
        //         },
        //         show(e = !0, t = null, i = null) {
        //             if (!this.isShow || null == this._isShow) {
        //                 var n = null != this._action && 0 == this._action.isDone();
        //                 n && this._action.getOriginalTarget() && this.node.stopAction(this._action), this._action = null, this._isShow = !0, this._hideMode = null, this.onHide.offOnce(), this.onStartHide.offOnce(), t && this.onShow.once(t, i), this.node.active = !0, this.onStartShow.emit(this), e && this.isShowEffect() ? (this._action = this.doShow(n), this._action && a.addCall(this._runAction, this)) : this.showComplete()
        //             }
        //         },
        //         _runAction() {
        //             this._action && this._isShow && this.node.active && this.node.runAction(this._action)
        //         },
        //         hide(e = !0, t = null, i = null) {
        //             if (0 != this.isShow) {
        //                 this._isShow = !1;
        //                 var n = null != this._action && 0 == this._action.isDone();
        //                 n && this._action.getOriginalTarget() && this.node.stopAction(this._action), this._action = null, this.onShow.offOnce(), this.onStartShow.offOnce(), this._hideMode = null, "function" == typeof t ? this.onHide.once(t, i) : null != t && (this._hideMode = t), this.node.active = !0, this.onStartHide.emit(this), e && this.isHideEffect() ? (this._action = this.doHide(n), this._action && this.node.runAction(this._action)) : this.hideComplete()
        //             }
        //         },
        //         isShowEffect: () => !0,
        //         isHideEffect: () => !0,
        //         doShow(e) {
        //             this.showComplete()
        //         },
        //         doHide(e) {
        //             this.hideComplete()
        //         },
        //         showComplete() {
        //             0 != this.isShow && (this._action = null, this.onShow.emit(this))
        //         },
        //         hideComplete() {
        //             if (!this.isShow) {
        //                 this._action = null, this.onHide.emit(this);
        //                 var e = null != this._hideMode ? this._hideMode : this.hideMode;
        //                 cc.sys.os !== cc.sys.OS_ANDROID && (e = n.DESTROY), (e = n.DESTROY) == n.DISABLE ? this.node.active = !1 : e == n.POOL ? o.put(this.node.name, this.node) : e == n.CACHE ? o.cache(this.node.name, this.node, this.clearTime) : e == n.DESTROY && this.node.destroy()
        //             }
        //         }
        //     });
        // module.exports = r