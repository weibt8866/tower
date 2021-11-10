import { Singleton } from "../base/Singleton";
/**
 * 渠道平台管理类
 */
export class PlatformManager extends Singleton
{
    /**
     * 是否是本地
     * @returns 
     */
    public isLocal():boolean
    {
        return true;
    }

    /**
     * 是否展示充值
     */
    public isShowRecharge():boolean
    {
        return true;
    }

    /**
     * 是否是小游戏
     */
    public isMiniGame():boolean
    {
        return false;
    }
}
