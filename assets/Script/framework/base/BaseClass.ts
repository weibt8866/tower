export class BaseClass
{
    [key: string]: any; //索引签名

    /**
     * 检测是否为同一个对象
     * @param cls 被检测类
     */
    public checkSame(cls: BaseClass) {
        return this.hashCode == cls.hashCode;
    }
}
