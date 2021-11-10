const {ccclass, property} = cc._decorator;

@ccclass("FsmTransition")
export class FsmTransition
{
    @property(cc.String)
    eventName:string = "";

    @property(cc.String)
    toState:string = "";
}
    