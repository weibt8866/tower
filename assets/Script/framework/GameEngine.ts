import { GameGlobal } from "./GameGlobal";


const {ccclass, property} = cc._decorator;

@ccclass
export default class GameEngine extends cc.Component {

    onLoad()
    {
        GameGlobal.Viewer.initLayer(this.node);
        cc.game.addPersistRootNode(this.node);
    }

    onEnable() 
    {
        GameGlobal.Viewer.windowSizeChange();
        let canvas = cc.Canvas.instance;
        canvas && canvas.node && canvas.node.on("size-changed", this.updateSize, this)
    }

    onDisable() 
    {
        let canvas = cc.Canvas.instance;
        canvas && canvas.node && canvas.node.off("size-changed", this.updateSize, this)
    }

    updateSize() 
    {
        GameGlobal.Viewer.windowSizeChange();
    }

    start () 
    {
        console.log("开始初始化模块");
        GameGlobal.System.init();
        GameGlobal.Event.init();
        GameGlobal.Timer.init();
        GameGlobal.Guide.init();
        GameGlobal.Socket.init();
    }
}
