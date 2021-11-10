import { Singleton } from "../base/Singleton";
import { GameGlobal } from "../GameGlobal";
import { LogUtil } from "../utils/LogUtil";
/**
 * 场景管理类
 */
export class SceneManager extends Singleton
{
    private loadingText:string = "\u6b63\u5728\u52a0\u8f7d\u573a\u666f..";
    private loadingErrorText:string = "\u52a0\u8f7d\u573a\u666f\u5931\u8d25";
    private destroyPopup:boolean =  true;
    private destroyView: boolean = true;

    public load(sceneOb, callback, i = null, n = null, s = !0) 
    {
        if(sceneOb)
        {
            LogUtil.debug("开始加载场景:"+sceneOb.name);
            if(this.getScene().name != sceneOb.name)
            {
                s && GameGlobal.Resource.releaseAll();
                GameGlobal.Resource.loadResByModule("Scene#" + sceneOb.name, this._getSceneModules(sceneOb), null, i, (error) => {
                    if(error)
                    {
                        GameGlobal.Viewer.showLoading(this.loadingErrorText);
                        LogUtil.debug("SceneManager.preload Error! ", error);
                    }
                    else
                    {
                        GameGlobal.Viewer.clearSceneView();
                        cc.director.loadScene(sceneOb.name, (error, scene) => {
                            if(error)
                            {
                                GameGlobal.Viewer.showLoading(this.loadingErrorText);
                                LogUtil.debug("SceneManager.load Error! "+error);
                            }
                            else
                            {
                                GameGlobal.Viewer.hideLoading()
                            } 
                            callback && callback.call(n, error, scene);
                        })
                    }
                    
                })
            }
            else
            {
                callback && callback.call(n, null, this.getScene());
            }
        }
        else
        {
            LogUtil.debug("加载场景失败，场景对象为null");
        }
    }
    public preload(e, t) 
    {
        e && GameGlobal.Resource.addLoadResInBackground(this._getSceneModules(e), t ? null : "Scene#" + e.name)
    }
    
    private getScene()
    {
       return cc.director.getScene();
    }

    public getSceneName() {
        var e = this.getScene();
        return e ? e.name : null
    }

    public getCanvasNode() 
    {
        var e = this.getScene(),
            t = e ? e.getChildByName("Canvas") : null;
        return t || null
    }
    
    private _getSceneModules(e) 
    {
        let resList = e.resArr instanceof Array ? e.resArr : [e.resArr];
        //let sceneInfo = cc.director._getSceneUuid(e.name);
        let sceneInfo = cc.assetManager.main.getSceneInfo(e.name);
        if(sceneInfo)
        {
            resList.push({
                scenes: {
                    type: "uuid",
                    resArray: [sceneInfo.uuid]
                }
            })
        }

        return resList;
    }
}
