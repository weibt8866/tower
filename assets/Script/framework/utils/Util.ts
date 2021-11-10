export class Util
{
    public static isArrayContains(list:[],vaule:any)
    {
        for(let i=0;i<list.length;i++)
        {
            if(list[i] == vaule)
            return true;
        }
        return false;
    }
}