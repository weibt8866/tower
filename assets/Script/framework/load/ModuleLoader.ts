import { ResConst } from "../const/ResConst";
import { GameGlobal } from "../GameGlobal";
import { Loader } from "./Loader";

export class ModuleLoader
{
    //public _resLoader: Loader;
    public _version: any;
    public _loading:number = 0;
    public _loadMap: any;
    public _preloading: boolean;
    public _preloadList: any[];
    public _preloadedRes: any[];
    public _preloadedMap: any;
    public _openPanelTime: any;

    constructor()
    {
        this._loading = 0;
        this._loadMap = {};
        this._preloading = !1;
        this._preloadList = [];
        this._preloadedMap = {};
        this._preloadedRes = [];
        this._openPanelTime = {};
    }

    public get _loadedRes() 
    {  
        var e = [];
        for (var t in this._loadMap) {
            var i = this._loadMap[t];
            e = e.concat(i)
        }
        return e
            
    }
    public get isLoading()
    {
        return this._loading > 0;
    }
    
   
    loadModules(e, resList, i, n) 
    {
        if (resList instanceof Array || (resList = [resList]), this.removeLowPriorityModules(resList, !0), resList.length > 0) 
        {
            var s = this._getResources(resList);
            if (s.length > 0) return void this._load(e, s, i, n)
        }
        i && i(100), n && n()
    }

    loadResArray(e, t, i, n) 
    {
        t instanceof Array || (t = [t]), t.length > 0 ? this._load(e, t, i, n) : (i && i(100), n && n())
    }

    addAssetRef(e, t) 
    {
        for (let i = 0, n = t.length; i < n; i++) {
            let n = t[i],
                s = n._uuid;
            this._loadMap[e][s] || (this._loadMap[e][s] = n, n.addRef())
        }
    }

    _load(e, t, i, n) 
    {
        this._loading++;
        this._loadMap[e] = this._loadMap[e] || {};
        this._openPanelTime[e] = (new Date).getTime();
        Loader.load(t, i, (t, i) => {
            try {
                n && n(t, i)
            } catch (e) {}
            i && i.length > 0 && this._loadMap[e] && this.addAssetRef(e, i), this._loading--, this._loading < 1 && GameGlobal.Timer.callLater(this, this._loadNextLowerModule)
        })
    }

    loadRes(module, resPath, type, callback) 
    {
        let thiz = this;
        this._loading++;
        this._loadMap[module] = this._loadMap[module] || {};
        this._openPanelTime[module] = (new Date).getTime();
        Loader.loadRes(resPath, type, (t, i) => {
            try 
            {
                callback && callback(t, i)
            } 
            catch (e) {
                console.log("错误："+e)
            }
            !t && i && thiz._loadMap[module] && this.addAssetRef(module, [i]);
            thiz._loading--;
            thiz._loading < 1 && GameGlobal.Timer.callLater(thiz, thiz._loadNextLowerModule)
        })
    }

    addLowPriorityModules(e) 
    {
        if (e && !(e.length < 1)) 
        {
            for (var t = 0, i = e.length; t < i; t++) 
            {
                var n = e[t];
                this._preloadedMap[n] || n && -1 == this._preloadList.indexOf(n) && this._preloadList.push(n)
            }
            GameGlobal.Timer.callLater(this, this._loadNextLowerModule)
        }
    }

    removeLowPriorityModules(e, t) 
    {
        if (e && !(e.length < 1)) {
            void 0 === t && (t = !1);
            for (var i = 0, n = e.length; i < n; i++) {
                var s = e[i],
                    o = this._preloadList.indexOf(s); - 1 != o && (this._preloadList.splice(o, 1), t && (this._preloadedMap[s] = !0))
            }
        }
    }

    releaseRes(e, t = 0) {
        if (console.log("releasePanelId " + e), t > 0 && t <= this._openPanelTime[e]) console.log("*********** reopen not release res ********* " + e);
        else {
            var i = this._loadMap[e];
            if (i) {
                delete this._loadMap[e], this._openPanelTime[e] = 0;
                for (let e in i) {
                    i[e].decRef()
                }
            }
        }
    }

    releaseResExceptPanelIds(e) {}
    releaseAll(e) 
    {
        for (let e in this._loadMap) this.releaseRes(e)
    }

    getRes(e, t) 
    {
        return Loader.getRes(e, t)
    }

    getResources(e) 
    {
        return this._getResources(e)
    }
    _getResources(e) 
    {
        for (var t = [], i = 0, n = e.length; i < n; i++) 
        {
            var s = e[i];
            if(s)
            {
                if(typeof s == "string")
                {
                    s = ResConst.ResoureId[s];
                    t = t.concat(this.getHasResList(s))
                }
                else
                {
                    t = t.concat(this.getHasResList(s))
                }
            }
        }
        return t
    }

    _loadNextLowerModule() 
    {
        if (!(this._loading > 0 || this._preloading || this._preloadList.length < 1)) 
        {
            var e = this,
                t = this._preloadList.shift(),
                i = this._getResources([t]);
            "string" == typeof t && (this._preloadedMap[t] = !0), this._preloading = !0, Loader.preLoad(i, null, (t, i) => {
                e._preloading = !1, GameGlobal.Timer.callLater(e, e._loadNextLowerModule)
            })
        }
    }

    getHasResList(moduleRes) 
    {
        var t = [];
        for (var i in moduleRes) 
        {
            var n = moduleRes[i];
            n && n.resArray && n.resArray.length > 0 && t.push(n)
        }
        return t
    }
}
