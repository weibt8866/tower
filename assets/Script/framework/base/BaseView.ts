import { UIUtil } from "../utils/UIUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BaseView extends cc.Component 
{
    public rect:cc.Node; //黑色遮罩背景
    /**
     * 是否需要黑色遮罩
     */
    protected isNeedRect:boolean = true;
    /**
     * 是否点击黑色背景关掉界面
     */
    protected isClickRect:boolean = true;

    public resId:string = null;
    protected onLoad () 
    {

    }

    protected start () 
    {
        this.initRect();
        this.addAllListeners();
    }

    protected update (dt) 
    {

    }

    protected onEnable()
    {
        
    }

    protected onDisable()
    {
        
    }

    protected onDestroy()
    {
        this.removeAllListeners();
    }

    public close()
    {
        
    }

    /**
     * 添加事件监听(包括按钮、事件等)
     */
    protected addAllListeners()
    {

    }

    /**
     * 移除所有事件监听
     */
    protected removeAllListeners()
    {
        if(this.rect && this.isClickRect)
        {
            UIUtil.offClicklistener(this.rect,this.close,this);
        }
    }

    protected initRect()
    {
        if(this.isNeedRect)
        {
            this.rect = cc.find("rect",this.node);
            if(!this.rect)
            {
                this.rect = new cc.Node("rect");
                this.node.addChild(this.rect,0);
            }
            if(this.isClickRect)
            {
                UIUtil.onClickListener(this.rect,this.close,this);
            }
        }
    }
}
