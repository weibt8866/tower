import BaseView from "../framework/base/BaseView";

const {ccclass, property} = cc._decorator;
@ccclass
export default class ConfirmTipWindow extends BaseView
{   
    @property
    _strTipsArray = null;
    @property
    _sureCallFunc = null;
    @property
    _labTitle = null;
    @property
    _labTip_1 = null;
    @property
    _labTip_2 = null;
    @property
    _btnCancel = null;
    @property
    _btnSure = null;
    @property
    _btnClose = null;
    
    // init() 
    // {
    //     this._panelType = td.PanelType.None;
    //     this._panelEnum = td.PanelEnum.Window_ConfirmTip
    // }
    // onLoad() 
    // {
    //     super.onLoad();
    //     var t = this._root.getChildByName("imgTipBg");
    //     this._labTip_1 = t.getChildByName("labTip_1");
    //     this._labTip_2 = t.getChildByName("labTip_2");
    //     this._labTitle = this._root.getChildByName("imgTitleBg").getChildByName("labTitle");
    //     this._btnCancel = this._root.getChildByName("btnCancel");
    //     this._btnSure = this._root.getChildByName("btnSure");
    //     this._btnClose = this._root.getChildByName("btnClose")
    // }

    // setData(t) {
    //     this._strTipsArray = t.strArray, this._sureCallFunc = t.okCallFunc, this._cancelCallFunc = t.cancelCallFunc, this._eventData = t.data, this._showBtn = t.showBtn, this._showBtn && (this._btnCancel.active = this._showBtn[0], this._btnSure.active = this._showBtn[1], this._btnClose.active = this._showBtn[2], this._btnCancel.active || (this._btnSure.x = 0)), this._labTip_1.active = this._strTipsArray && this._strTipsArray.length >= 1, this._labTip_2.active = this._strTipsArray && this._strTipsArray.length >= 2, this.setTip(), this.setButtonTitle(t), this.setWidgetTitle(t)
    // }

    // setTip() 
    // {
    //     this._labTip_1.active && (this._labTip_1.getComponent(cc.RichText).string = this._strTipsArray[0]), this._labTip_2.active && (this._labTip_2.getComponent(cc.RichText).string = this._strTipsArray[1])
    // }
    // setWidgetTitle(t) 
    // {
    //     var e = t.strTitle || td.Language.tip;
    //     this._labTitle.getComponent(cc.Label).string = e
    // }

    // setButtonTitle(t) 
    // {
    //     var e = t.strBtnNo || td.Language.cancel;
    //     this._btnCancel.getChildByName("Label").getComponent(cc.Label).string = e;
    //     var i = t.strBtnYes || td.Language.confirm;
    //     this._btnSure.getChildByName("Label").getComponent(cc.Label).string = i
    // }

    // onDisable() 
    // {
    //     this._strTipsArray = null, this._sureCallFunc = null, this._cancelCallFunc = null, this._eventData = null, this._showBtn = null
    // }
    // onCancel() 
    // {
    //     var t = this._cancelCallFunc;
    //     t && "function" == typeof t && t(this._eventData), this.closeCallFunc()
    // }
    // onSure() 
    // {
    //     var t = this._sureCallFunc;
    //     t && "function" == typeof t && t(this._eventData), this.closeCallFunc()
    // }
}
   