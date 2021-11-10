import { ResConst } from "../const/ResConst";
import { GameGlobal } from "../GameGlobal";

/**
 * 加载器
 */
export class Loader
{
    private _trigger: Function;
    private _loadCallback: Function;
    private _toLoadRes: any[];
    private _loadedRes: any[];
    private _loadedCount: number;
    private _needLoadCount: number;
    private _preLoad: boolean;
    private num:number;
    constructor()
    {
        this._preLoad = false;
        this._needLoadCount = 0;
        this._loadedCount = 0;
    }
    public get loadedRes()
    {
        return this._loadedRes
    }

    public load(resPath, onProgress, onComplete?) 
    {
        if(onComplete)
        {
            this._trigger = onProgress;
            this._loadCallback = onComplete;
        }
        else
        {
            this._loadCallback = onProgress;
        } 
        resPath instanceof Array || (resPath = [resPath]);
        for (var o = [], a = 0, r = 0; r < resPath.length; r++) 
        {
            var l = resPath[r],
                h = l && l.resArray ? l.resArray.length : 0;
            if (h > 0) 
            {
                o.push(l), a += h;
                let e = Loader.getBundleNameByPath(l.resArray[0]);
                l.bundleName = e
            }
        }
        this._toLoadRes = o;
        this._needLoadCount = a;
        this._loadedRes = [];
        GameGlobal.Timer.callLater(this, this._loadRes);
        return this;
    }
    public preLoad(e, t, i) 
    {
        this._preLoad = !0,
        this.load(e, t, i)
    }
    private _loadRes() 
    {
        if (this._toLoadRes.length > 0) 
        {
            var e = this._toLoadRes.shift();
            if (e.resArray && e.resArray.length > 0) 
            {
                for (var t = [], i = e.resArray.length - 1; i >= 0; i--) 
                {
                    var o = e.resArray[i];
                    e.bundleName != Loader.BUNDLE_RESOURCES && (o = o.substr(e.bundleName.length + 1)), o && "" != o && t.push(o)
                }
                if (t.length > 0)
                    if ("uuid" === e.type)
                    {

                    }
                    else 
                    {
                        let bundle = cc.assetManager.getBundle(e.bundleName);
                        bundle ? this._preLoad ? bundle.preload(t, e.type, this._onProgress.bind(this), this._onLoadFinished.bind(this)) : bundle.load(t, e.type, this._onProgress.bind(this), this._onLoadFinished.bind(this)) : cc.assetManager.loadBundle(e.bundleName, (i, n) => {
                            i ? cc.error("budle error " + e.bundleName) : this._preLoad ? n.preload(t, e.type, this._onProgress.bind(this), this._onLoadFinished.bind(this)) : n.load(t, e.type, this._onProgress.bind(this), this._onLoadFinished.bind(this))
                        })
                    } return
            }
        }
        GameGlobal.Timer.callLater(this, this._onLoadFinished);
    }
    private _onProgress(e, t, i) 
    {
        if (i && i.content && (this.num = this.num || 0, this.num++, e === t)) 
        {
            this._loadedCount++;
            var n = this._loadedCount / this._needLoadCount * 100 | 0;
            this._trigger && this._trigger(Math.min(n, 100))
        }
    }
    private _onLoadFinished(e, t) 
    {
        e && cc.error("download file error: ", e);
        t && (t && (this._loadedRes = this._loadedRes.concat(t)), this._toLoadRes.length > 0 ? GameGlobal.Timer.callLater(this, this._loadRes) : (this._loadCallback && this._loadCallback(e, this._loadedRes), this._recover()))
    }

    private _recover() 
    {
        this._trigger = null;
        this._loadCallback = null;
        this._toLoadRes = null;
        this._loadedRes = null;
        this._loadedCount = 0;
        this._needLoadCount = 0;
        this._preLoad = false;
         Loader._pool.push(this)
    }

    public static preLoad(resPath,onProgress, onComplete)
    {
        let curLoad:Loader  = Loader._pool.length > 0 ? Loader._pool.pop() : new Loader();

        curLoad.preLoad(resPath,onProgress, onComplete);
    }

    public static load(resPath, onProgress, onComplete)
    {
        let curLoad:Loader = Loader._pool.length > 0 ? Loader._pool.pop() : new Loader();
        curLoad.load(resPath, onProgress, onComplete)
    }
        
    public static getRes(resPath, type) 
    {
        let bundleName = Loader.getBundleNameByPath(resPath);
        let bundle = cc.assetManager.getBundle(bundleName);
        if(bundleName != Loader.BUNDLE_RESOURCES)
        {
            resPath = resPath.substr(bundleName.length + 1);
        }
        return bundle ? bundle.get(resPath, type) : null
    }

    public static loadRes(resPath, type, onProgress?, onComplete?) 
    {
        let bundleName = Loader.getBundleNameByPath(resPath);
        let bundle = cc.assetManager.getBundle(bundleName);
        if(bundleName != Loader.BUNDLE_RESOURCES)
        {
            resPath = resPath.substr(bundleName.length + 1);
        }
        if (bundle)
        {
            return bundle.load(resPath, type, onProgress, onComplete);
        }

        cc.assetManager.loadBundle(bundleName, (err: Error, bundle: cc.AssetManager.Bundle) => {
            if (!err) return bundle.load(resPath, type, onProgress, onComplete);
            cc.error("budle error " + bundleName)
        })
    }

    public static getBundleNameByPath(resPath) 
    {
        let bundleName = Loader.BUNDLE_RESOURCES;
        if (!resPath) 
            return bundleName;
        let str = resPath.split("/");
        if (str.length > 0) 
        {
            let e = str[0];
            if(ResConst.BundleMap && ResConst.BundleMap[e])
            {
                bundleName = e
            }
        }
        return bundleName;
    }

    public static BUNDLE_RESOURCES = "resources";
    
    public static _pool = [];
}
