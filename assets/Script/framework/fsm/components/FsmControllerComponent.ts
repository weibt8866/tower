import { Fsm } from "../Fsm";

       
        var 
            s = cc.Enum({
                sendEvent: 0,
                broadcastEvent: 1,
                pause: 2,
                continue: 3,
                start: 4,
                setState: 5,
                setActive: 6
            });

        function o(e) {
            if (e[0] instanceof cc.Event) {
                var t = e[1].split(":");
                return {
                    arg1: t[0],
                    arg2: t[1]
                }
            }
            return {
                arg1: e[0],
                arg2: e[1]
            }
        }
export class FsmControllerComponent extends cc.Component
{
    public enableToTrigger:boolean = false;
    public control:any = s.sendEvent;
    public fsmName:string = "";
    public args:string = "";
    public active:boolean = true;

    trigger() 
    {
        this.control == s.sendEvent ? this.sendEvent(this.fsmName, this.args) : this.control == s.broadcastEvent ? this.broadcastEvent(this.args) : this.control == s.pause ? this.pause(this.fsmName) : this.control == s.continue ? this.continue(this.fsmName) : this.control == s.start ? this.start(this.fsmName) : this.control == s.setState ? this.setState(this.fsmName, this.args) : this.control == s.setActive && this.setActive(this.fsmName, this.args)
    }

    sendEvent(e, t) 
    {
        let {
            arg1: i,
            arg2: s
        } = o(arguments);
        i && Fsm.getByName(i).sendEvent(s)
    }

    broadcastEvent(e) 
    {
        let {
            arg1: t,
            arg2: i
        } = o(arguments);
        Fsm.broadcastEvent(t)
    }
    pause(e) 
    {
        let {
            arg1: t,
            arg2: i
        } = o(arguments);
        t && Fsm.getByName(t).pause()
    }
    continue (e) 
    {
        let {
            arg1: t,
            arg2: i
        } = o(arguments);
        t && Fsm.getByName(t).continue()
    }
    start(e?) 
    {
        let {
            arg1: t,
            arg2: i
        } = o(arguments);
        t && Fsm.getByName(t).start()
    }
    setState(e, t) {
        let {
            arg1: i,
            arg2: s
        } = o(arguments);
        //i && Fsm.setState(i).start(s)
    }
    setActive(e, t) {
        let {
            arg1: i,
            arg2: s
        } = o(arguments);
        if (i) 
        {
            var a = t;
            "true" == s || 1 == s ? a = !0 : "false" != s && 0 != s || (a = !1);
            //Fsm.setState(i).setActive(a)
        }
    }
    onEnable() 
    {
        this.enableToTrigger && this.trigger()
    }
}