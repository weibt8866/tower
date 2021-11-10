import { Singleton } from "../base/Singleton";
/**
 * 对象池管理类
 */
export class PoolMananger extends Singleton
{
    public static getInstance():PoolMananger
    {
        return super.getInstance();
    }
}
