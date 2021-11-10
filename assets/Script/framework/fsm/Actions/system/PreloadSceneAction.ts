import { SceneConst } from "../../../const/SceneConst";
import { GameGlobal } from "../../../GameGlobal";
import { Fsm } from "../../Fsm";
import { FsmStateAction } from "../../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("PreloadSceneAction")
export class PreloadSceneAction extends FsmStateAction
{
    @property(cc.String)
    _sceneName:string = "";

    @property()
    get scene(){
        return SceneConst.SceneId[this._sceneName] || 0
    }
    set scene(e) {
        this._sceneName = SceneConst.SceneId[e]
    }

    @property(cc.Boolean)
    autoRelease:boolean = true;
    onEnter() 
    {
        var e = SceneConst.SceneId[this._sceneName];
        e && GameGlobal.Scene.preload(e, this.autoRelease), this.finish()
    }
}
Fsm.addAction(PreloadSceneAction, "System", !1)
    