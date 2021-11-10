const {ccclass, property} = cc._decorator;
@ccclass
export default class RedPoint extends cc.Component
{

}
      
        // var i = cc.Class({
        //     extends: cc.Component,
        //     properties: {
        //         _labTipNum: null,
        //         _imgRedPoint: null,
        //         _tipEvents: null,
        //         _checkFunc: null,
        //         _offset: null,
        //         _showType: null,
        //         _willCheckFunc: !1,
        //         _isLoaded: !1
        //     },
        //     initData: function (e, t) {
        //         this._tipEvents = e.tipEvents, this._checkFunc = e.checkFunc, this._offset = e.offset || cc.v2(0, 0), this._showType = e.showType || td.RedPointShowType.Dot, "function" == typeof this._tipEvents && (this._tipEvents = this._tipEvents()), this.clear(), this._isLoaded && this._onCheckTip()
        //     },
        //     onLoad: function () {
        //         this._labTipNum = this.node.getChildByName("labNum"), this._imgRedPoint = this.node.getChildByName("imgRedPoint"), this._labTipNum.active = !1, this._imgRedPoint.active = !1, this._isLoaded = !0, this._onCheckTip()
        //     },
        //     onEnable: function () {
        //         this._willCheckFunc = !1, this._setRedPointPos(), this._addLocalListeners()
        //     },
        //     onDestroy: function () {
        //         this._removeAllListeners()
        //     },
        //     clear: function () {
        //         this._willCheckFunc = !1, this.unschedule(this._onRealCheckFunc)
        //     },
        //     _setRedPointPos: function () {
        //         var e = this.node.getParent(),
        //             t = e.width * (1 - e.anchorX) * e.scaleX + this._offset.x,
        //             a = e.height * (1 - e.anchorY) * e.scaleY + this._offset.y;
        //         this.node.setPosition(cc.v2(t, a))
        //     },
        //     _addLocalListeners: function () {
        //         if (this._tipEvents.length > 0) {
        //             for (var e = [], t = 0; t < this._tipEvents.length; t++) e[this._tipEvents[t]] = this._onCheckTip;
        //             td.EventUtil.registerEvents(e, this)
        //         }
        //     },
        //     _removeAllListeners: function () {
        //         td.EventUtil.unregisterAllEvents(this)
        //     },
        //     _onCheckTip: function () {
        //         this._willCheckFunc || (this._willCheckFunc = !0, this.scheduleOnce(this._onRealCheckFunc, .2))
        //     },
        //     _onRealCheckFunc: function () {
        //         this._willCheckFunc = !1;
        //         var e = null;
        //         (e = !this._checkFunc || this._checkFunc()) || (this.node.active = !1), this._labTipNum || (this._labTipNum = this.node.getChildByName("labNum"), this._labTipNum.active = !1), this._setRedPoint(e)
        //     },
        //     _setRedPoint: function (e) {
        //         "number" == typeof e ? (this.node.active = e > 0, this._labTipNum.active = e > 0, this._imgRedPoint.active = e > 0, this._labTipNum.getComponent(cc.Label).string = e, td.GlobalFunction.createAltasSprite(td.resDef.pngPlist.GY_Common, "GY_hongdian02", this._imgRedPoint)) : td.GlobalFunction.createAltasSprite(td.resDef.pngPlist.GY_Common, this._showType === td.RedPointShowType.Arrow ? "GY_jiantou06" : "GY_hongdian", this._imgRedPoint), "boolean" == typeof e && (this._labTipNum.active = !1, this._imgRedPoint.active = e, this.node.active = e), this._showType === td.RedPointShowType.Arrow && (this._imgRedPoint.stopAllActions(), this._imgRedPoint.runAction(cc.sequence(cc.scaleTo(1, 1.2), cc.scaleTo(1, 1)).repeatForever()))
        //     }
        // });
        // module.exports = i