export class BaseModel
{
    protected _ctrl: any; //关联控制器

    public constructor(ctrl: any) {
        this._ctrl = ctrl;
    }

    /**
     * 初始化
     */
    public init(...args: any[]) {

    }
}