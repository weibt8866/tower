import { GameGlobal } from "../GameGlobal";

export class LogLevel {
    public static DEBUG =  0; //调试
    public static INFO =  1; //信息
    public static WARN =  2; //提醒
    public static ERROR =  3; //报错
    public static OFF =  9; //关闭
}

export class LogUtil {

    public static logLevel: number = LogLevel.DEBUG; //日志等级
    public static isLogBattle:boolean = false; //是否打印战斗
    public static battleInfo:string; //每场战斗日记

    /**
     * 记录日志
     * @param level 日志等级
     * @param tag 日志标签
     * @param data 日志数据
     */
    private static log(level: number, tag: string, ...data: any[]) 
    {
        if (this.logLevel <= level && GameGlobal.Platform.isLocal()) 
        {
            console.log(tag, ...data);
        }
    }

    /**
     * 记录日志
     * @param tag 日志标签
     * @param data 日志数据
     */
    public static debug(tag: string, ...data: any[]) {
        this.log(LogLevel.DEBUG, tag, ...data);
    }

    /**
     * 记录日志
     * @param tag 日志标签
     * @param data 日志数据
     */
    public static info(tag: string, ...data: any[]) {
        this.log(LogLevel.INFO, tag, ...data);
    }

    /**
     * 记录日志
     * @param tag 日志标签
     * @param data 日志数据
     */
    public static warn(tag: string, ...data: any[]) {
        this.log(LogLevel.WARN, tag, ...data);
    }

    /**
     * 记录日志
     * @param tag 日志标签
     * @param data 日志数据
     */
    public static error(tag: string, ...data: any[]) {
        this.log(LogLevel.ERROR, tag, ...data);
    }


    public static ChangeLevel()
    {
        if(this.logLevel == LogLevel.DEBUG)
        {
            this.logLevel = LogLevel.OFF;
            return false;
        }
        else if(this.logLevel == LogLevel.OFF)
        {
            this.logLevel = LogLevel.DEBUG;
            return true;
        }
        return true;
    }

    public static logError(tag: string, ...data: any[])
    {
        console.log(tag, ...data) 
    }
}
