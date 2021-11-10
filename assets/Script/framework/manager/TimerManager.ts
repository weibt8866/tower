import { Singleton } from "../base/Singleton";
import { GameGlobal } from "../GameGlobal";
import { CallLater } from "../timer/CallLater";
import { TimerHandler } from "../timer/TimerHandler";

/**
 * 计时器管理类
 */
export class TimerManager extends Singleton
{
    public scale: number;
    public currFrame: any;
    public _delta: any;
    public _map: TimerHandler[];
    public _handlers: any;
    public _temp: any;
    public _count: number;
    public currTimer: number;
    public _lastTimer: number;
    public _callLater:CallLater;
    public static _pool: any[] = [];
    public static _mid:number = 1;
    public static _gid: 1;

    public constructor()
    {
        super();
        this.scale = 1;
        this.currFrame = 0;
        this._delta = 0;
        this._map = [];
        this._handlers = [];
        this._temp = [];
        this._count = 0;
        this.currTimer = Date.now();
        this._lastTimer = Date.now();
        this._callLater = new CallLater();

        cc.game.once(cc.game.EVENT_ENGINE_INITED, () => {
            cc.director.getScheduler().enableForTarget(this);
            cc.director.getScheduler().scheduleUpdate(this, cc.Scheduler.PRIORITY_SYSTEM, !1)
        })
    }

    public init()
    {

    }

    update(e) 
    {
        if (this.scale <= 0)
        {
            this._lastTimer = Date.now();
        }
        else 
        {
            var t = this.currFrame = this.currFrame + this.scale,
                i = Date.now();
            this._delta = (i - this._lastTimer) * this.scale;
            var n = this.currTimer = this.currTimer + this._delta;
            this._lastTimer = i;
            var s = this._handlers;
            this._count = 0;
            for (var o = 0, r = s.length; o < r; o++) 
            {
                var l = s[o];
                if (null !== l.method) 
                {
                    var h = l.userFrame ? t : n;
                    if (h >= l.exeTime)
                        if (l.repeat)
                            if (l.jumpFrame)
                                for (; h >= l.exeTime;) l.exeTime += l.delay, l.run(!1);
                            else l.exeTime += l.delay, l.run(!1), h > l.exeTime && (l.exeTime += Math.ceil((h - l.exeTime) / l.delay) * l.delay);
                    else l.run(!0)
                } else this._count++
            }
            this._callLater._update();
            (this._count > 30 || t % 200 == 0) && this._clearHandlers()
        }
    }

    _clearHandlers() 
    {
        for (var e = this._handlers, t = 0, i = e.length; t < i; t++) {
            var n = e[t];
            null !== n.method ? this._temp.push(n) : this._recoverHandler(n)
        }
        this._handlers = this._temp, e.length = 0, this._temp = e
    }

    _recoverHandler(e) {
        this._map[e.key] == e && (this._map[e.key] = null), e.clear(), TimerManager._pool.push(e)
    }

    private _create(userFrame, repeat, delay, target, callFunc, params, l) 
    {
        if (!delay)
        {
            callFunc.apply(target, params);
            return null;
        }
        if (l) 
        {
            let handler = this._getHandler(target, callFunc);
            if (handler)
            {
                handler.repeat = repeat;
                handler.userFrame = userFrame;
                handler.delay = delay;
                handler.caller = target;
                handler.method = callFunc;
                handler.args = params;
                handler.exeTime = delay + (userFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
                return handler;
            }
        }
        let handler = TimerManager._pool.length > 0 ? TimerManager._pool.pop() : new TimerHandler();
        handler.repeat = repeat;
        handler.userFrame = userFrame;
        handler.delay = delay;
        handler.caller = target;
        handler.method = callFunc;
        handler.args = params;
        handler.exeTime = delay + (userFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
        this._indexHandler(handler);
        this._handlers.push(handler);
        return handler;
    }

    _indexHandler(e) {
        var t = e.caller,
            i = e.method,
            n = t ? t.$_GID || (t.$_GID = TimerManager._gid++) : 0,
            s = i.$_TID || (i.$_TID = 1e5 * TimerManager._mid++);
        e.key = n + s, this._map[e.key] = e
    }

    public once(time, target, callFunc, params?, s?) 
    {
        void 0 === s && (s = !0);
        this._create(!1, !1, time, target, callFunc, params, s)
    }

    public loop(time, target, callFunc, params?, s?, jumpFrame?) 
    {
        void 0 === s && (s = !0);
        void 0 === jumpFrame && (jumpFrame = !1);
        var handler = this._create(!1, !0, time, target, callFunc, params, s);
        handler && (handler.jumpFrame = jumpFrame)
    }

    public frameOnce(time, target, callFunc, params, s) 
    {
        void 0 === s && (s = !0);
        this._create(!0, !1, time, target, callFunc, params, s)
    }

    public frameLoop(time, target, callFunc, params, s) 
    {
        void 0 === s && (s = !0), this._create(!0, !0, time, target, callFunc, params, s)
    }

    toString() {
        return " handlers:" + this._handlers.length + " pool:" + TimerManager._pool.length
    }

    public clear(target, callFunc) 
    {
        var handler = this._getHandler(target, callFunc);
        if(handler)
        {
            this._map[handler.key] = null;
            handler.key = 0;
            handler.clear();
        }
    }

    /**
     * 清理对象绑定的计时器
     * @param target 
     */
    public clearAll(target) 
    {
        if (target)
        {
            for (var t = 0, i = this._handlers.length; t < i; t++) 
            {
                var n = this._handlers[t];
                if(n.caller === target)
                {
                    this._map[n.key] = null, n.key = 0, n.clear()
                }
            }
        }
    }

    private _getHandler(target, callFunc):TimerHandler
    {
        var i = target ? target.$_GID || (target.$_GID = TimerManager._gid++) : 0,
            n = callFunc.$_TID || (callFunc.$_TID = 1e5 * TimerManager._mid++);
        return this._map[i + n]
    }

    callLater(e, t, i?) 
    {
        this._callLater.callLater(e,t,i);
    }

    runCallLater(e, t) 
    {
        this._callLater.runCallLater(e,t);
    }

    public runTimer(target, callFunc) 
    {
        var handler = this._getHandler(target, callFunc);
        if(handler && null != handler.method)
        {
            this._map[handler.key] = null;
            handler.run(!0)
        }
    }
    
    public pause() 
    {
        this.scale = 0
    }
    
    public resume() 
    {
        this.scale = 1
    }
}
