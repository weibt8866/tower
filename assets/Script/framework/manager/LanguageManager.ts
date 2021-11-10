import { Singleton } from "../base/Singleton";
import { GameGlobal } from "../GameGlobal";
import { TextUtil } from "../utils/TextUtil";

export class LanguageManager extends Singleton
{
    private _strCfgData: any; //字符串配置
    public static getInstance()
    {
        return super.getInstance();
    }

    /**
     * 初始化
     */
     public init() 
     {
        this._strCfgData = null;
    }

    /**
     * 加载语言包文件
     * @param cfgName 配置名称
     * @param callback 回调函数
     * @param target 回调目标
     */
    public loadConfig(cfgName: string, callback: Function, target?: any) 
    {
        GameGlobal.Resource.loadRes(0,cfgName,cc.Asset,(err,data)=>{
            if(err == null)
            {
                this.parseConfig(data);
                callback && callback.call(target);
            }
        });
    }

    /**
     * 解析语言包配置
     * @param data 数据
     */
    private parseConfig(data) 
    {
        this._strCfgData = this._strCfgData || {};
        if (typeof data == "object") 
        {
            for (let key in data) 
            {
                this._strCfgData[key] = data[key];
            }
        } 
        else if (typeof data == "string") 
        {
            data = JSON.parse(data);
            for (let key in data) 
            {
                this._strCfgData[key] = data[key];
            }
        }
    }

    /**
     * 获取字符串
     * @param strKey 字符串键值
     * @param params 字符串替换参数
     */
    public getStr(strKey: number|string, ...params: any[]): string 
    {
        strKey = "" + strKey;
        let text: string = this._strCfgData && this._strCfgData[strKey];
        text = TextUtil.formatString(text, ...params);
        return text;
    }
}
