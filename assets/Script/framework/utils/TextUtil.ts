export class TextUtil
{
    /**
     * 格式化字符串
     * @param text 文本
     * @param params 参数
     */
     public static formatString(text: string, ...params: any[]): string 
     {
        if (text && params.length > 0) 
        {
            for (let i = 0; i < params.length; i++) 
            {
                text = text.replace("["+(i+1)+"]", params[i]);
            }
        }
        return text;
    }
}
