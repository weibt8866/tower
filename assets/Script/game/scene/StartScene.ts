
const {ccclass, property} = cc._decorator;

@ccclass
export default class StartScene extends cc.Component {

    @property(cc.Node)
    imgBg: cc.Node = null;

    onEnable()
    {
        console.log("====> enable os " + cc.sys.os);
        console.log("====> enable native: " + cc.sys.isNative);
        console.log("====> enable CC_JSB " + !1);
        console.log("====> enable OS_ANDROID " + cc.sys.OS_ANDROID);
        cc.sys.os, cc.sys.OS_ANDROID, console.log("enable   load 555");
    }
}
