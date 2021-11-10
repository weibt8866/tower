import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("ShowViewAction")
export class ShowViewAction extends FsmStateAction
{
    @property(cc.Prefab) 
    prefab: cc.Prefab = null
    onEnter() 
    {
        //GameGlobal.Viewer.showView(this.prefab);
        this.finish()
    }
}
Fsm.addAction(ShowViewAction, "GUI")