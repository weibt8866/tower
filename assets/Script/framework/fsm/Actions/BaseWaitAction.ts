import { FsmStateAction } from "../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("BaseWaitAction")
export class BaseWaitAction extends FsmStateAction
{
    @property(cc.Boolean)
    isWait:boolean = true;
}
    