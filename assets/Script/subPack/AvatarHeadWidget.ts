const {ccclass, property} = cc._decorator;
@ccclass
export default class AvatarHeadWidget extends cc.Component
{
    @property
    _touchCallBack = null;
    @property
    _curData = null
    
    private _type;
    // init(e, t) 
    // {
    //     this._type = e, this._curData = t, this._initData()
    // }

    // setType(e) 
    // {
    //     this._type !== e && (this._type = e)
    // }
    // _initData() 
    // {
    //     var e = this.node.getChildren();
    //     for (var t in e) e[t].active = !1;
    //     for (var a = td.AvatarShowType[this._type], i = 0, n = a.length; i < n; ++i) this._addChildWidget(a[i])
    // }
    // setData(e) 
    // {
    //     this._curData = e, this._initData()
    // }

    // getData() 
    // {
    //     return this._curData
    // }

    // disableHeadTouch() 
    // {
    //     this.setTouchEnabled(!1)
    // }

    // setTouchEnabled(e) 
    // {
    //     var t = this.node.getChildByName("headImg");
    //     e ? t.on(cc.Node.EventType.TOUCH_END, this.touchIconHeader, this) : t.off(cc.Node.EventType.TOUCH_END, this.touchIconHeader, this)
    // }

    // setTouchCallBack(e) 
    // {
    //     this.setTouchEnabled(!0), this._touchCallBack = e
    // }

    // touchIconHeader(e) 
    // {
    //     e.stopPropagation(), this._touchCallBack ? this._touchCallBack(this.node, this._curData, e) : this._curData && td.GlobalFunction.showPlayerDetail(this._curData)
    // }

    // setImgTouchSwallow(e) 
    // {
    //     var t = this.node.getChildByName("headImg");
    //     t && t._touchListener.setSwallowTouches(e)
    // }

    // _addChildWidget(e) 
    // {
    //     switch (e) {
    //         case 1:
    //             this._setDefaultBg();
    //             break;
    //         case 2:
    //             this._setHeadImg();
    //             break;
    //         case 3:
    //             this._setLevelBgAndText();
    //             break;
    //         case 4:
    //             this._setVipLevelBgAndText()
    //     }
    // }
    // _setDefaultBg() 
    // {
    //     this.node.getChildByName("frameImg").active = !0
    // }
    // _setHeadImg() 
    // {
    //     var e, t = this.node.getChildByName("headImg");
    //     if (t.active = !0, null === this._curData) e = "Hero9015";
    //     else {
    //         var a = this._curData.avatarIcon;
    //         if (a) e = a;
    //         else if (this._curData.avatar) {
    //             var i = td.GetTableClass(td.TableEnum.AvatarConfig).getAvatarIconByAvatarId(this._curData.avatar);
    //             i && (e = i)
    //         } else if (this._curData.getHeadImg) {
    //             var n = this._curData.getHeadImg();
    //             n && (e = n)
    //         }
    //     }
    //     e ? td.GlobalFunction.createAltasSprite(td.resDef.pngPlist.icon_touxiang, e, t) : cc.log("get avatar headImg iconRes error!!!!")
    // }
    // _setLevelBgAndText() 
    // {
    //     var e = this.node.getChildByName("levelText");
    //     if (e) {
    //         e.active = !0;
    //         var t, a = this.node.getChildByName("levelTitle");
    //         if (!this._curData) return e.active = !1, void(a.active = !1);
    //         if (this._curData.level ? t = this._curData.level : this._curData.getLevel && (t = this._curData.getLevel()), !t || t <= 0) return e.active = !1, void(a.active = !1);
    //         e.active = !0, a.active = !0, e.getComponent(cc.Label).string = t
    //     }
    // }
    // _setBottomLevelPosition(e, t) 
    // {
    //     var a = this.node.getChildByName("headImg");
    //     cc.assert(a, "headImg must exist");
    //     var i = a.x + a.height / 2 - 10,
    //         n = a.y - a.height / 2 + 10;
    //     e.setPosition(i, n), t.setPosition(i - e.width - 2, n)
    // }

    // _setVipLevelBgAndText() 
    // {
    //     var e = this.node.getChildByName("vip"),
    //         t = this.node.getChildByName("vipLabel");
    //     if (!this._curData) return e.active = !1, void(t.active = !1);
    //     e.getComponent(cc.Sprite) || td.GlobalFunction.createAltasSprite(td.resDef.pngPlist.GY2_Common, "GY2_wz_vip", e);
    //     var a = !0,
    //         i = 0;
    //     this._curData && this._curData.vip ? i = this._curData.vip : this._curData && this._curData.getVip && (i = this._curData.getVip()), this._curData && this._curData.getIsShowVip && (a = this._curData.getIsShowVip()), e.active = a, t.active = a, t.getComponent(cc.Label).string = i
    // }
}
// td.AvatarShowType = {
//     1: [1, 2, 3],
//     2: [2, 3],
//     3: [1, 2, 4],
//     4: [1, 5],
//     5: [1, 2],
//     6: [1, 2, 3, 4],
//     7: [1, 2, 4],
//     8: [1, 2],
//     9: [2]
// }
    