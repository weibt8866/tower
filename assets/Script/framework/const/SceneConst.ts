export class SceneConst
{
    public static SceneName = 
    {
        StartScene:"BootScene",
        HotUpdateScene: "HotUpdateScene",
        LoginScene: "LoginScene",
        LoadingScene:"LoadingScene",
        MainScene: "MainScene",
        PveFightScene: "PveFightScene",
        PvpFightScene: "PvpFightScene",
    }

    //各个场景需要加载的资源模块
    public static SceneId = 
    {
        LoginScene: {
            name: "LoginScene",
            resArr: ["LoginScene"]
        },
        MainScene: {
            name: "MainScene",
            resArr: ["Guide"]
        },
        PveFightScene: {
            name: "PveFightScene",
            resArr: ["Boot", "Common"]
        },
        PvPFightScene: {
            name: "PvpFightScene",
            resArr: ["Boot", "Common", "PvpFightScene", "Guide"]
        },
        LoadingScene: {
            name: "LoadingScene",
            resArr: []
        },
        HotUpdateScene: {
            name: "HotUpdateScene",
            resArr: ["LoginScene"]
        }
    }
}
