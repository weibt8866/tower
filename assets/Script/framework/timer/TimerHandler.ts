export class TimerHandler
{
    public key: number;
    public repeat: boolean;
    public delay: number;
    public userFrame: boolean
    public exeTime: number;
    public caller: any;
    public method: Function
    public args: any;
    public jumpFrame: boolean;
                
    constructor()
    {
        this.key = 0;
        this.repeat = false;
        this.delay = 0;
        this.userFrame = false;
        this.exeTime = 0;
        this.caller = null;
        this.method = null;
        this.args = null;
        this.jumpFrame = false;
    }

    public clear() 
    {
        this.caller = null;
        this.method = null;
        this.args = null;
    }
    
    public run(e) 
    {
        var t = this.caller;
        if (t && t.destroyed) return this.clear();
        var i = this.method,
            n = this.args;
        e && this.clear(), null != i && (n ? i.apply(t, n) : i.call(t))
    }
}
