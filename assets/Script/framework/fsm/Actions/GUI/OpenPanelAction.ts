import BaseView from "../../../base/BaseView";
import { ViewConst } from "../../../const/ViewConst";
import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { BaseWaitAction } from "../BaseWaitAction";
const {ccclass, property} = cc._decorator;

@ccclass("OpenPanelAction")
export class OpenPanelAction extends BaseWaitAction
{
    info:string = "";

    @property()
    _panelName:string = "";

    @property()
    get panel() {
        return ViewConst.ViewName[this._panelName] || 0
    }
    set panel(e) 
    {
        this._panelName = ViewConst.ViewName[e]
    }

    @property(cc.Boolean)
    isBlock:boolean = false;
    onEnter() {
        console.log("打开界面38:"+this._panelName);
        GameGlobal.Viewer.openView(this._panelName, e => 
            {
                var t = GameGlobal.Viewer.get(this._panelName),
                    i = t && t.getComponent(BaseView);
                this.isBlock && i ? i.onClose.once(() => {
                    this.finish()
                }, this) : this.isWait && this.finish()
            }, this), this.isBlock || this.isWait || this.finish()
    }
}
Fsm.addAction(OpenPanelAction, "GUI", !1)
