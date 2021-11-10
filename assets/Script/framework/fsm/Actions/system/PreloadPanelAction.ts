import { ViewConst } from "../../../const/ViewConst";
import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction"
const {ccclass, property} = cc._decorator;

@ccclass("PreloadPanelAction")
export class PreloadPanelAction extends FsmStateAction
{
    @property(cc.String)
    _panelName = "";

    @property()
    get panel() {
        return ViewConst.ViewConf[this._panelName] || 0
    }
    set panel(e) {
        this._panelName = ViewConst.ViewConf[e]
    }

    @property(cc.Boolean)
    autoRelease = true;

    onEnter() {
        this._panelName && GameGlobal.Viewer.preload(this._panelName, this.autoRelease), this.finish()
    }
}
Fsm.addAction(PreloadPanelAction, "System", !1)
    