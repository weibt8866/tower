import { ResConst } from "../../../const/ResConst";
import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction"
const {ccclass, property} = cc._decorator;

@ccclass("PreloadModuleAction")
export class PreloadModuleAction extends FsmStateAction
{
    @property(cc.String)
    _moduleName:string = "";

    @property()
    get panel(){
            return ResConst.ResoureId[this._moduleName] || 0
    }
    set panel(e) {
            this._moduleName = ResConst.ResoureId[e]
    }
                
    onEnter() {
        console.log("预加载模块:"+this._moduleName);
        this._moduleName && GameGlobal.Resource.addLoadResInBackground([this._moduleName]), this.finish()
    }
}
Fsm.addAction(PreloadModuleAction, "System", !1)
    