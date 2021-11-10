
const {ccclass, property} = cc._decorator;

@ccclass
export default class ScreenAdapter extends cc.Component 
{
    private canvas:cc.Canvas;
    onLoad()
    {
        this.canvas = this.getComponent(cc.Canvas);
        let size = cc.view.getFrameSize();
        let resolution = this.canvas.designResolution;
        let sizeScale = size.height / size.width;
        let disignScale = resolution.height / resolution.width;
        if(sizeScale > disignScale)
        {
            this.canvas.fitHeight = false;
            this.canvas.fitWidth = true;
        }
        else if(sizeScale < disignScale)
        {
            this.canvas.fitHeight = true;
            this.canvas.fitWidth = false;
        }
    }
}
