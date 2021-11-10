const {ccclass, property} = cc._decorator;
@ccclass
export default class RichTextEvent extends cc.Component
{
    onFixGame() 
    {
        var e = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset";
        jsb.fileUtils.removeDirectory(e);
        cc.game.restart()
    }
}