import { Fsm } from "../Fsm";
import { FsmStateAction } from "../FsmStateAction";
const {ccclass, property} = cc._decorator;

@ccclass("InitDebugerAction")
export class InitDebugerAction extends FsmStateAction
{
    onEnter()
    {
        this.finish();
    }
}
Fsm._actionDecorator("InitDebugerAction","初始化")