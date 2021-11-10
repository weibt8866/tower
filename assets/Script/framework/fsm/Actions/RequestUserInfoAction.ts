import { LoginContrl } from './../../../game/contol/LoginContrl';
import { GameGlobal } from "../../GameGlobal";
import { Fsm } from "../Fsm";
import { FsmStateAction } from "../FsmStateAction";
import { SystemConst } from '../../const/SystemConst';
const {ccclass, property} = cc._decorator;

@ccclass("RequestUserInfoAction")
export default class RequestUserInfoAction extends FsmStateAction
{
    onEnter() 
    {
        //o.UFServerManager.getInstance().requestServerUserInfo(2);
        GameGlobal.System.getCtrl<LoginContrl>(SystemConst.SystemType.Login).requestServerUserInfo(2);
        this.finish()
    }
}

Fsm._actionDecorator("RequestUserInfoAction", "\u767b\u5f55")
