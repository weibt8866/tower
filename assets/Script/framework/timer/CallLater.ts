import { TimerManager } from "../manager/TimerManager";
import { LaterHandler } from "./LaterHandler";

export class CallLater
{
    _pool:any[];
    _map: any[];
    _laters: any[];
    constructor()
    {
        this._pool = [];
        this._map = [];
        this._laters = [];
    }
    _update() 
    {
        var e = this._laters,
            t = e.length;
        if (t > 0) 
        {
            for (var i = 0, n = t - 1; i <= n; i++) {
                var s = e[i];
                this._map[s.key] = null, null !== s.method && (s.run(), s.clear()), this._pool.push(s), i === n && (n = e.length - 1)
            }
            e.length = 0
        }
    }
    _getHandler(e, t) 
    {
        var i = e ? e.$_GID || (e.$_GID = TimerManager._gid++) : 0,
            n = t.$_TID || (t.$_TID = 1e5 * TimerManager._mid++);
        return this._map[i + n]
    }
    callLater(e, t, i) 
    {
        if (null == this._getHandler(e, t)) {
            if (this._pool.length) var n = this._pool.pop();
            else n = new LaterHandler();
            n.caller = e, n.method = t, n.args = i;
            var s = e ? e.$_GID : 0,
                a = t.$_TID;
            n.key = s + a, this._map[n.key] = n, this._laters.push(n)
        }
    }
    runCallLater(e, t) {
        var i = this._getHandler(e, t);
        i && null != i.method && (this._map[i.key] = null, i.run(), i.clear())
    }
}
