export class UIUtil
{
    public static  ScreenSize = {
        width: 760,
        height: 1280
    };
    public static onClickListener(node:cc.Node,clickFunc:Function,target:any)
    {
        if(node)
        {
            node.on(cc.Node.EventType.MOUSE_DOWN,clickFunc,target)
        }
    }

    public static offClicklistener(node:cc.Node,clickFunc:Function,target:any)
    {
        if(node)
        {
            node.off(cc.Node.EventType.MOUSE_DOWN,clickFunc,target);
        }
    }
}
