import BaseView from "../../framework/base/BaseView";

const {ccclass, property} = cc._decorator;
@ccclass
export default class ConfirmBroadcastTipWindow extends BaseView
{   
    @property
    _strTipsArray = null;
    @property
    _eventData = null;
    @property
    _okCallFunc = null;
    @property
    _cancelCallFunc = null;
    @property
    _doNotCallFunc = null;
    @property(cc.Node)
    suerBtn: cc.Node = null;
    @property(cc.Label)
    suerBtnLabel: cc.Label = null;
    @property(cc.Node)
    cancelBtn: cc.Node = null;
    @property(cc.Label)
    cancelBtnLabel: cc.Label = null;
    @property(cc.Node)
    okBtn: cc.Node = null;
    @property(cc.Label)
    okBtnLabel: cc.Label = null;
    @property(cc.Label)
    titleLabel: cc.Label = null;
    @property(cc.Node)
    textBg: cc.Node = null;
    @property(cc.Node)
    btnClose: cc.Node = null;
    @property
    _bg = null
    
    // init() 
    // {
    //     this._panelEnum = td.PanelEnum.Window_ConfirmBroadcastTip
    // }

    // onLoad() 
    // {
    //     this._initPanel()
    // }

    // _initPanel() 
    // {
    //     var t = gdk.PanelId.getValue(this._panelEnum),
    //         e = td.UIAdaptiveUtil.getWinSize(),
    //         i = new cc.Node;
    //     i.setAnchorPoint(cc.v2(.5, .5)), i.setPosition(cc.v2(0, 0)), i.setContentSize(e), i.addComponent(cc.Mask), this.node.addChild(i, -99), this._bg = new cc.Node, this._bg.setAnchorPoint(cc.v2(.5, .5)), this._bg.setPosition(cc.v2(0, 0)), this._bg.setName("panelBg"), this._bg.on(cc.Node.EventType.TOUCH_END, this.clickBgListener, this), this._bg.setContentSize(e), i.addChild(this._bg);
    //     var n = this._bg.addComponent(cc.Sprite);
    //     if (t.bg) {
    //         var a = t.bgType;
    //         td.GlobalFunction.createSpriteNode(this._bg, t.bg), "scale9" === a && (n.sizeMode = cc.Sprite.SizeMode.CUSTOM, n.type = cc.Sprite.Type.SLICED), "scale9" !== a && td.GameResolutionPolicy.isDefaultRS() && td.UIAdaptiveUtil.adaptivePanelMaxScale(this._bg)
    //     } else {
    //         var r = gdk.rm.getResByUrl(td.resDef.pngPlist.GY_Common, cc.SpriteAtlas).getSpriteFrame(td.resDef.GY_Common.GY_tongming_bg);
    //         n.sizeMode = cc.Sprite.SizeMode.CUSTOM, n.type = cc.Sprite.Type.SLICED, n.spriteFrame = r, this._bg.opacity = 220
    //     }
    // }

    // setData(t) 
    // {
    //     this._doNotCallFunc = t.getDoNotCallFunc(), this._okCallFunc = t.getOkCallFunc(), this._cancelCallFunc = t.getCancelCallFunc(), this._setTitle(t), this._addMainText(t), this._addSubText(t), this.btnClose.active = !0, t.getType() == td.BroadcastType.type3 ? this._setOkCancelBtn(t) : t.getType() == td.BroadcastType.type4 ? (this._setOkBtn(t), this.btnClose.active = !1) : t.getType() == td.BroadcastType.type5 && this._setOkCancelBtn(t)
    // }
    // _addMainText(t) 
    // {
    //     var e = t.getMainText();
    //     if ("" != e) {
    //         var i;
    //         e = (e = td.GlobalFunction.replaceAll(e, "%d", "%s")).split("%s");
    //         for (var n = t.getMainParam(), a = e[0].match("<font"), r = a ? "" : [], o = 0, s = e.length; o < s; ++o)
    //             if (a) r += e[o], o != s - 1 && (r += n[o].getText());
    //             else {
    //                 var l = {
    //                     type: "text"
    //                 };
    //                 l.content = e[o], l.style = {}, l.style.size = 28, r.push(l), o != s - 1 && ((l = {}).type = "text", l.content = n[o].getText(), l.style = {}, l.style.color = n[o].getTextColor(), l.style.size = n[o].getTextSize() || 28, r.push(l))
    //             } var c = {};
    //         !a && (c.color = td.UI_Colors[0]), c.contentSize = cc.size(580, 60), i = td.GlobalFunction.createRichText(r, c), t.getSubText(), i.y = 25, i.x = 0, i.setName("mainText"), this.textBg.addChild(i)
    //     }
    // }

    // _addSubText(t) 
    // {
    //     var e = t.getSubText();
    //     if ("" != e) {
    //         var i;
    //         e = (e = td.GlobalFunction.replaceAll(e, "%d", "%s")).split("%s");
    //         var n = [],
    //             a = t.getSubParam();
    //         if (a) {
    //             for (var r = 0, o = e.length; r < o; ++r) {
    //                 var s = {
    //                     type: "text"
    //                 };
    //                 s.content = e[r], s.style = {}, s.style.size = 24, n.push(s), r != o - 1 && r <= a.length - 1 && (cc.log(a[r].getText()), (s = {}).type = "text", s.content = a[r].getText(), s.style = {}, s.style.color = a[r].getTextColor(), s.style.size = a[r].getTextSize(), n.push(s))
    //             }
    //             var l = {};
    //             l.color = td.UI_Colors[0], l.contentSize = cc.size(450, 60), i = td.GlobalFunction.createRichText(n, l);
    //             this.textBg.getChildByName("mainText");
    //             i.y = -25, i.x = 0, this.textBg.addChild(i)
    //         }
    //     }
    // }

    // clickBgListener() {}

    // _setTitle(t) {
    //     t && t.getTitleText && t.getTitleText() && (this.titleLabel.string = t.getTitleText())
    // }
    // _setOkCancelBtn(t) 
    // {
    //     this.cancelBtnLabel.string = t.getCancelText(), this.suerBtnLabel.string = t.getOkText(), this.cancelBtn.active = !0, this.suerBtn.active = !0, this.okBtn.active = !1
    // }

    // _setOkBtn(t) 
    // {
    //     this.okBtnLabel.string = t.getOkText(), this.cancelBtn.active = !1, this.suerBtn.active = !1, this.okBtn.active = !0
    // }

    // onDisable() 
    // {
    //     var t = td.EventNameEnum.HIDE_BROADCAST;
    //     td.EventUtil.dispatchEvent(t)
    // }
    // okBtnFunc(t) 
    // {
    //     this.node.removeFromParent(), this._okCallFunc && this._okCallFunc(t), this.node.destroy()
    // }

    // cancelBtnFunc(t) 
    // {
    //     this.node.removeFromParent(), this._cancelCallFunc && this._cancelCallFunc(t), this.node.destroy()
    // }

    // _doNotTipsCBFunc(t, e) 
    // {
    //     this._doNotCallFunc && this._doNotCallFunc(e), this.node.destroy()
    // }
}
   