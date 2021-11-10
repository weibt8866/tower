import { Singleton } from "../base/Singleton";
import { XXTEA } from "../utils/crypt/XXTEA";
/**
 * 配置管理类
 */
export class ConfigManager extends Singleton
{
    
    private _allCfgData: any; //游戏配置数据



    public static getInstance(): ConfigManager
    {
        return super.getInstance();
    }

    /**
     * 初始化
     */
    public init() {
        this._allCfgData = null;
    }

    /**
     * 加载配置文件
     * @param callback 回调函数
     * @param target 回调目标
     */
    public loadConfig(callback: Function, target?: any) 
    {
        cc.loader.loadRes('config/config',(err,data) => {
            
            if(err == null)
            {
                data = XXTEA.decrypt(new Uint8Array(data._nativeAsset), "a1b2c3d4");
                JSZip.loadAsync(data).then((zipdata) => {
                    return zipdata.file('config.json').async('text')
                }).then(text => {
                    this.parseConfig(text);
                    callback && callback.call(target);
                });
            }
            else
            {
                console.log("加载配置错误");
            }
        });
    }

    /**
     * 解析游戏配置
     * @param data 数据
     */
    private parseConfig(data) {
        this._allCfgData = {};
        if (typeof data == "object") {
            for (let key in data) {
                this._allCfgData[key] = data[key];
            }
        } else if (typeof data == "string") {
            data = JSON.parse(data);
            for (let key in data) {
                this._allCfgData[key] = data[key];
            }
        }
    }

    /**
     * 获取配置数据
     * @param cfgName 配置名称
     */
    public getConfig(cfgName: string) : any {
        let cfgData = this._allCfgData && this._allCfgData[cfgName];
        return cfgData;
    }

    // /**
    //  * 加载版本配置
    //  * @param callback 回调函数
    //  * @param target 回调目标
    //  */
    // public loadStrConfig(callback: Function, target?: any) {
    //     let strCfgUrl = GameGlobal._GAME_DATA_.strCfgUrl;
    //     if (strCfgUrl) {
    //         var thiz = this;
    //         RES.getResByUrl(strCfgUrl,function(data){
    //             thiz.parseStrConfig(data);
    //             callback && callback.call(target);
    //         }, this, RES.ResourceItem.TYPE_JSON);
    //     } else {
    //         callback && callback.call(target);
    //     }
    // }

    // /**
    //  * 解析版本配置
    //  * @param data 数据
    //  */
    // private parseStrConfig(data) {
    //     window["xx_en_str"] = data;
    // }
  
}
