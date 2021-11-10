/**
 * 单例
 */
export class Singleton
{
    constructor()
    {

    }

    public static getInstance():any
    {
        let cls: any = this;
        if (!cls._instance) {
            cls._instance = new cls();
        }
        return cls._instance;
    }
}
