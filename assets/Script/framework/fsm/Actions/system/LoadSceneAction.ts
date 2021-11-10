import { SceneConst } from "../../../const/SceneConst";
import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { BaseWaitAction } from "../BaseWaitAction";
const {ccclass, property} = cc._decorator;

@ccclass("LoadSceneAction")
export class LoadSceneAction extends BaseWaitAction
{
    @property(cc.String)
    _sceneName:string = "";

    @property()
    get scene() {
            return SceneConst.SceneId[this._sceneName] || 0
        }
    set scene(e){
        this._sceneName = SceneConst.SceneId[e]
    }

    onEnter() {
        var e = SceneConst.SceneId[this._sceneName];
        GameGlobal.Scene.load(e, e => {
            e || this.isWait && this.finish()
        }), this.isWait || this.finish()
    }
}
Fsm.addAction(LoadSceneAction, "System", !1)
    