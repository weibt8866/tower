const {ccclass, property} = cc._decorator;
@ccclass
export default class HotUpdateConfirmView extends cc.Component
{
    @property(cc.RichText)
    richTips = null;

    @property(cc.Node)
    btnCancel = null;

    @property(cc.Node)
    btnOk = null;

    private _cancelCb:Function;
    private _okCb:Function;

    onLoad() 
    {
        this.richTips.node.active = !1
    }
    
    onBtnCancle() 
    {
        this._cancelCb && this._cancelCb(), this.node.active = !1
    }
    
    onBtnUpdate() 
    {
        this._okCb && this._okCb(), this.node.active = !1
    }
    
    setUpdateData(e, t, a) 
    {
        this._cancelCb = e, this._okCb = t;
        //var i = _.Tips.needHotUpdate;
        let tips = "";
        this.richTips.string = tips;
        this.richTips.node.active = true;
        this.btnOk.x = 130;
        this.btnCancel.active = true;
    }

    setUpdatSuccData(e) 
    {
        this._cancelCb = e;
        this._okCb = e;
        //var t = _.Tips.updateSuc;
        let tips = "";
        this.richTips.string = tips;
        this.richTips.node.active = !0;
        this.btnCancel.active = !1;
        this.btnOk.x = 0
    }
    
    setRetryData(e) 
    {
        this._cancelCb = e;
        this._okCb = e;
        //var t = _.Tips.updateRetry;
        let tips = "";
        this.richTips.string = tips;
        this.richTips.node.active = !0;
        this.btnCancel.active = !0;
        this.btnOk.x = 130
    }
    
    setNetNotAccess(e) 
    {
        console.log("setNetNotAccess 000");
        this._cancelCb = e;
        this._okCb = e;
        //var t = _.Tips.netNotAccess;
        let tips = "";
        this.richTips.string = tips;
        this.richTips.node.active = !0;
        this.btnCancel.active = !1;
        this.btnOk.active = !0;
        this.btnOk.x = 0;
        console.log("setNetNotAccess 222")
    }
    
    setErrorData(e, t, a) 
    {
        this._cancelCb = e;
        this._okCb = e;
        //var i = cc.js.formatStr(_.Tips.netError, t, a);
        let tips = "";
        this.richTips.string = tips;
        this.richTips.node.active = !0;
        this.btnCancel.active = !0;
        this.btnOk.x = 130
    }
    setClearCacheConfirm(e, t) 
    {
        this._cancelCb = t;
        this._okCb = t;
        //var a = _.Tips.cleanData;
        let tips = "";
        this.richTips.string = tips;
        this.richTips.node.active = !0;
        this.btnCancel.active = !0;
        this.btnOk.x = 130
    }
}