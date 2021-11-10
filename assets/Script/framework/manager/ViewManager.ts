
import BaseView from "../base/BaseView";
import { Singleton } from "../base/Singleton";
import { ViewConst } from "../const/ViewConst";
import { GameGlobal } from "../GameGlobal";
import { LogUtil } from "../utils/LogUtil";

/**
 * 界面管理类
 */
export class ViewManager extends Singleton
{
    private layers:{[key:string]:cc.Node};
    private guiLayer:cc.Node;
    private _isInit:boolean;
    private _navViews:cc.Node[];
    private _viewOpenDict: {[layerType:string]: cc.Node[]}; //界面开启字典
    private loadingString:string = "\u6b63\u5728\u52a0\u8f7d..";
    private loadTimeout:number = 10; //加载界面超时
    private _openingDic:{}; //正在打开的界面

    private loadingView:cc.Node;
    private waitingView:cc.Node;
    private waitingDict:any;
    constructor()
    {
        super();
        this._navViews = [];
        this.waitingDict = {};
        this._openingDic = {}; 
        this._isInit = false;
    }

    public initLayer(root)
    {
        if (!this._isInit) 
        {
            if (this.guiLayer = root, null == this.guiLayer) 
            {
                this.guiLayer = new cc.Node("guiLayer");
                var t = cc.director.getScene();
                this.guiLayer.parent = t;
                this.guiLayer.zIndex = 1e3
            }
            this.layers = {};
            for (let layerName in ViewConst.LayerType)
            {
                let layerType = ViewConst.LayerType[layerName];
                var layer = new cc.Node(layerName);
                layer.parent = this.guiLayer;
                this.layers[layerType] = layer;
            }
            this._isInit = true;
        }
    }

    

    public getCurrentView() 
    {
        let len = this._navViews.length;
        for (; len > 0;) 
        {
            var view = this._navViews[len - 1];
            if (view != null && cc.isValid(view)) 
            return view;
            --len;
        }
        return null
    }

    public hideView(view = null) 
    {
        if(view == null)
        {
            view = this.getCurrentView();
        }
        if (0 != this._navViews.length &&  view != null) 
        {
            var t = this.getView(view.name);
            if(t != null)
            {
                t.active = false;
                this._onHideView(t)
            }
        }
    }
     
    private _onHideView(e) 
    {
        if (0 != this._navViews.length && null != e) 
        {
            var t = this._navViews.indexOf(e);
            if (-1 != t) 
            {
                var i = this.getCurrentView();
                if(t < this._navViews.length - 1)
                {
                    this._navViews.splice(t, 1)
                }
                else
                {
                    this._navViews.length--;
                    i = this.getCurrentView();
                    i.active = true;
                }
            }
        }
    }

    public backView() 
    {
        this.hideView()
    }

    public hideAllViewByLayer(layerType)
    {

    }

    public hideAllView() 
    {
        if (this._navViews.length > 0) 
        {
            var e = [...this._navViews];
            this._navViews.length = 0;
            for (var t = e.length - 1; t >= 0; t--) 
            {
                var i = e[t];
                i.active = false;
            }
        }
    }
    
    public getView(viewName) 
    {
        for (var t = this._navViews.length - 1; t >= 0; t--) 
        {
            var view = this._navViews[t];
            if (view == null || false == cc.isValid(view))
            {
                this._navViews.splice(t, 1);
            }
            else if (view.name == viewName)
            {
                return view;
            } 
        }
        return null
    }

    /**
     * 打开界面
     * @param viewName 
     * @param callBack 
     */
    public openView(viewName:string,callBack?:Function,target?)
    {
        let curView =  this.getView(viewName);
        if(!curView)
        {
            let conf = ViewConst.ViewConf[viewName];
            if(conf)
            {
                let thiz = this;
                conf.isShowWaiting && this.showWaiting(this.loadingString,"openView", this.loadTimeout, () => {
                    if(thiz._openingDic[viewName])
                    {
                        delete thiz._openingDic[viewName];
                        GameGlobal.Resource.releaseResByPanel(viewName);
                    }
                    thiz.hideWaiting("openView");
                }, this);
                thiz._openingDic[viewName] = true;
                let prefabPath = conf.prefab;
                console.log("开始打开界面:"+viewName);
                GameGlobal.Resource.loadResByPanel(viewName, null, null, () => {
                    if (!thiz._openingDic[viewName]) 
                        return GameGlobal.Resource.releaseResByPanel(viewName), void callBack.call(null);
                    let prefab = GameGlobal.Resource.getResByUrl(prefabPath, cc.Prefab);
                    GameGlobal.Viewer.hideWaiting("openView");
                    delete thiz._openingDic[viewName];
                    if(prefab)
                    {
                        let node:any = cc.instantiate(prefab);
                        let bView:BaseView = node.getComponent(BaseView)
                        if(bView)
                        {
                            bView.resId = conf.module;
                        }
                        GameGlobal.Viewer.addView(viewName,node);
                        if(callBack)
                        {
                            callBack(node);
                        }
                        console.log("打开界面"+viewName+"成功");
                    }
                    else
                    {
                        LogUtil.debug("无法加载:"+prefabPath);
                    }
                })
            }
            else
            {
                LogUtil.debug("没有配置界面："+viewName);
            }
        }
        else
        {
            if(callBack)
            {
                callBack(curView);
            }
        }
    }

    public addView(viewName:string,view)
    {
        let conf = ViewConst.ViewConf[viewName];
        let layerType = conf.layer;
        let layer = GameGlobal.Viewer.getLayer(layerType);
        view.parent = layer;
        view.name = viewName;
        this._navViews.push(view);
    }

    /**
     * 获取层级容器
     * @param layerType 层级类型
     */
     public getLayer(layerType: number): cc.Node
     {
         return this.layers[layerType];
     }

     /**
      * 显示转圈提示
      * @param showStr 文字提示
      * @param waitKey 加载类型
      * @param timeOut 超时时长
      * @param timeOutCallBack 超时回调
      * @param target 
      */
     public showWaiting(showStr = null, waitKey = null,timeOut = 0, timeOutCallBack = null, target = null)
     {
         if(!this.waitingView)
         {
             let thiz = this;
             GameGlobal.Resource.loadRes(0,"",cc.Prefab,(err,prefab)=>{
                 if(err == null)
                 {
                     thiz.waitingView = cc.instantiate(prefab);
                     thiz.loadingView.parent = thiz.getLayer(ViewConst.LayerType.waitingLayer);
                 }
             });
         }

     }

     /**
      * 隐藏转圈提示
      * @param waitKey 
      */
     public hideWaiting(waitKey)
     {
         if(this.waitingDict[waitKey])
         {

         }
         if(this.waitingView)
         {
            this.waitingView.active = false;
         }
     }

     /**
      * 显示加载界面
      * @param loadStr 
      */
     public showLoading(loadStr)
     {
        if(!this.loadingView)
        {
            let thiz = this;
            GameGlobal.Resource.loadRes(0,"",cc.Prefab,(err,prefab)=>{
                if(err == null)
                {
                    thiz.loadingView = cc.instantiate(prefab);
                    thiz.loadingView.parent = thiz.getLayer(ViewConst.LayerType.loadingLayer);
                }
            });
        }
     }

     public hideLoading()
     {
         if(this.loadingView)
         {
             this.loadingView.active = false;
         }
     }

     //主要清理view层和pop
     public clearSceneView()
     {
         let popLayer = this.getLayer(ViewConst.LayerType.popupLayer);
         popLayer.destroyAllChildren();

         let viewLayer = this.getLayer(ViewConst.LayerType.viewLayer);
         viewLayer.destroyAllChildren();
     }

     public clearAllPopView()
     {
        let popLayer = this.getLayer(ViewConst.LayerType.popupLayer);
        popLayer.destroyAllChildren();
     }

     public windowSizeChange() 
     {
        if (cc.Canvas.instance && cc.Canvas.instance.node) 
        {
            let width = cc.Canvas.instance.node.width;
            let heigth = cc.Canvas.instance.node.height;
            this.guiLayer.width = width;
            this.guiLayer.height = heigth;
            this.guiLayer.setPosition(width / 2, heigth / 2);
            let size = this.guiLayer.getContentSize();
            for (var n in this.layers) 
            {
                this.layers[n].setContentSize(size)
            }
        }
    }

    public preload(e, t) {
        if (!ViewConst.ViewConf[e]) return LogUtil.error(`PanelManager.preLoad Error:panelId= ${e} is not config`);
        GameGlobal.Resource.addLoadResInBackgroundByPanel(e, t)
    }

    get(e) 
    {
        let t = ViewConst.ViewConf[e];
        if (t) 
        {
            if (null == t.isPopup || t.isPopup)
            {
                let layer = this.getLayer(ViewConst.LayerType.popupLayer);
                return layer && this._get(e, layer);
            }
            let layer = this.getLayer(ViewConst.LayerType.viewLayer);
            if (layer) return this._get(e, layer)
        }
    }

    _get(e, t) 
    {
        let i, n = t.children,
            s = n.length;
        if (s > 0)
            for (let t = 0; t < s; ++t) 
            {
                let s = n[t];
                if (s.name == e) {
                    i = s;
                    break
                }
            }
        return i
    }
}
