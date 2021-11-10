import { Singleton } from "../base/Singleton";
import { ViewConst } from "../const/ViewConst";
import { ModuleLoader } from "../load/ModuleLoader";
/**
 * 资源管理类
 */
export class ResourceManager extends Singleton
{
    private _lastLoadConfig: any;
    private _loadingInBgEnabled: boolean;
    private _loader: ModuleLoader;
    constructor() 
    {
        super();
        this._loadingInBgEnabled = true;
        this._loader = new ModuleLoader();
    }

    public get isLoading()
    {
        return this._loader && this._loader.isLoading
    }

    public loadResByModule(viewName, resList, target?, progress?, complete?) 
    {
        null === viewName && (viewName = 0);
        void 0 === complete && (complete = progress, progress = void 0);
        this._loader.loadModules(viewName, resList, progress, (e, t) => {
            e || complete && complete(e, target)
        })
    }

    public loadResByPanel(viewName, callback, i, n) 
    {
        var moduleResList = this.getModuleByPanelName(viewName);
        void 0 === n && (n = i, i = void 0);
        this.loadResByModule(viewName, moduleResList, callback, i, (t, i) => {
            t || ((i = i || {}).panelName = viewName, n && n(t, i))
        })
    }

    public loadResArray(e, t, i, n) 
    {
        null === e && (e = 0), void 0 === n && (n = i, i = void 0), this._loader.loadResArray(e, t, i, (e, t) => {
            e || n && n(e, t)
        })
    }

    public releaseResByPanel(e, t = 0) 
    {
        null === e && (e = 0), this._loader.releaseRes(e, t)
    }

    public releaseAll(e?) 
    {
        this._loader.releaseAll(e)
    }

    public addLoadResInBackground(resList, viewName?) 
    {
        if (resList && !(resList.length < 1))
            if (viewName)
            {
                 this.loadResByModule(viewName, resList);
            }
            else 
            {
                if (!this._loadingInBgEnabled) return;
                this._loader.addLowPriorityModules(resList)
            }
    }

    public addLoadResInBackgroundByPanelArray(e) {
        var t = [];
        if (e && e.length > 0)
            for (var i = 0, n = e.length; i < n; i++) {
                var s = e[i],
                    o = this.getModuleByPanelName(s);
                t = t.concat(o)
            }
        t.length > 0 && this.addLoadResInBackground(t)
    }

    public addLoadResInBackgroundByPanel(e, t) {
        var i = this.getModuleByPanelName(e);
        this.addLoadResInBackground(i, t ? null : e)
    }

    public getModuleByPanelName(viewName) 
    {
        var temp, i = ViewConst.ViewConf[viewName];
        temp = i && i.module ? i.module instanceof Array ? i.module : [i.module] : [];
        if (i.prefab) 
        {
            let e = !0;
            for (let n = temp.length - 1; n >= 0; n--) 
            {
                let s = temp[n];
                if (s && s.prefabs && s.prefabs.resArray && s.prefabs.resArr.indexOf(i.prefab) >= 0) 
                {
                    e = !1;
                    break
                }
            }
            e && temp.push({
                prefabs: {
                    type: cc.Prefab,
                    resArray: [i.prefab]
                }
            })
        }
        return temp
    }

    public getResByUrl(resPath, type) 
    {
        return this._loader.getRes(resPath, type)
    }

    /**
     * 加载资源
     * @param module 所属模块
     * @param resPath 资源路径
     * @param type 类型
     * @param callback 加载完成回调
     */
    public loadRes(module, resPath, type, callback) 
    {
        null == module && (module = 0);
        this._loader.loadRes(module, resPath, type, (err, asset) => {
            err || callback && callback(asset)
        })
    }

    public getResources(e) {
        return this._loader.getResources(e)
    }

    /**
     * 单图切换
     * @param node 
     * @param spritePath 
     */
    public setTexture(node:cc.Node,spritePath:string)
    {
        let sprite = node.getComponent(cc.Sprite);
        if(!sprite) sprite = node.addComponent(cc.Sprite);
        this.loadRes("",spritePath,cc.SpriteFrame,function(sp) {
            if(sp)
            {
                sprite.spriteFrame = sp;
            }
        })
    }

    /**
     * 切换图集图片
     * @param node 切换对象
     * @param altaPath 图集路径
     * @param sprameName 图片名
     */
    public setSprame(node:cc.Node,altaPath:string,sprameName:string)
    {
        let thiz = this;
        let sprite = node.getComponent(cc.Sprite);
        if(!sprite) sprite = node.addComponent(cc.Sprite);
        //注意要处理可能是存在多个图集的情况(单个图集超出最大值)
        this.loadRes("",altaPath,cc.SpriteAtlas,function() {
            let spriteFrame = thiz.getAltasFrame(altaPath,sprameName);
            if(spriteFrame)
            {
                sprite.spriteFrame = spriteFrame;
            }
        })
    }

    public getAltasFrame(altaPath:string,sprameName:string):cc.SpriteFrame
    {
        return (this.getResByUrl(altaPath,cc.SpriteAtlas) as cc.SpriteAtlas).getSpriteFrame(sprameName);
    }
}
