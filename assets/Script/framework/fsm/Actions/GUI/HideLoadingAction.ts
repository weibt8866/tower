import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";


export class HideLoadingAction extends FsmStateAction
{  
    onEnter() {
        GameGlobal.Viewer.hideLoading(), this.finish()
    }
}
Fsm.addAction(HideLoadingAction, "GUI")
    