import { ConfigManager } from "./manager/ConfigManager";
import { EventManager } from "./manager/EventManager";
import { GuideManager } from "./manager/GuideManager";
import { PlatformManager } from "./manager/PlatformManager";
import { ResourceManager } from "./manager/ResourceManager";
import { SceneManager } from "./manager/SceneManager";
import { SocketManager } from "./manager/SocketManager";
import { SoundManager } from "./manager/SoundManager";
import { SystemManager } from "./manager/SystemManager";
import { TimerManager } from "./manager/TimerManager";
import { ViewManager } from "./manager/ViewManager";

export class GameGlobal
{
    public static get Config(): ConfigManager
    {
        return ConfigManager.getInstance();
    }

    public static get Event(): EventManager
    {
        return EventManager.getInstance();
    }

    public static get Socket(): SocketManager
    {
        return SocketManager.getInstance();
    }

    public static get Sound(): SoundManager 
    {
        return SoundManager.getInstance();
    }

    public static get Viewer(): ViewManager 
    {
        return ViewManager.getInstance();
    }

    public static get Scene(): SceneManager 
    {
        return SceneManager.getInstance();
    }

    public static get Resource(): ResourceManager
    {
        return ResourceManager.getInstance();
    }

    public static get Guide():GuideManager
    {
        return GuideManager.getInstance();
    }

    public static get Timer():TimerManager
    {
        return TimerManager.getInstance();
    }

    public static get Platform():PlatformManager
    {
        return PlatformManager.getInstance();
    }

    public static get System():SystemManager
    {
        return SystemManager.getInstance();
    }
}
