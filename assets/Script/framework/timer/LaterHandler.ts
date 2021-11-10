export class LaterHandler
{
    public key: number;
    public caller: any;
    public method: Function;
    public args: any;
    constructor()
    {
        this.key = 0;
        this.caller = null;
        this.method = null;
        this.args = null;
    }
    
    public clear() 
    {
        this.caller = null;
        this.method = null;
        this.args = null;
    }

    public run() 
    {
        var e = this.caller;
        if (e && e.destroyed) 
        {
            return this.clear();
        }
        var t = this.method,
            i = this.args;
        null != t && (i ? t.apply(e, i) : t.call(e))
    }
}
