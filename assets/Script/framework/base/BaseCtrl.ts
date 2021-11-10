import { BaseModel } from "./BaseModel";

export class BaseCtrl
{
    public model: BaseModel; //数据模型

    /**
     * 初始化
     */
    public init(...args: any[]) {

    }

    /**
     * 初始化模块
     * @param modelClass 模块类
     * @param args 参数列表
     */
    public initModel(modelClass: any, ...args: any[]) {
        if (modelClass instanceof BaseModel) {
            this.model = modelClass;
        } else {
            this.model = new modelClass(this);
        }
        this.model.init(...args);
    }
}
