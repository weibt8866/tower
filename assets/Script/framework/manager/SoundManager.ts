import { Singleton } from "../base/Singleton";
import { ConfigConst } from "../const/ConfigConst";
import { GameGlobal } from "../GameGlobal";
import { LogUtil } from "../utils/LogUtil";

/**
 * 音频管理类
 */
export class SoundManager extends Singleton
{

    /**
     * 背景音效是否暂停
     */
    private isPause:boolean;
    /**
     * 是否打开背景音乐
     */
    private isOnMusic:boolean;
    /**
     * 是否打开音效
     */
    private isOnSound:boolean;
    /**
     * 音量
     */
    private volume:number;

    private musicAudio:cc.AudioClip;
    /**
     * 正在播放的背景音乐
     */
    private curMusicId:string;
    /**
     * 正在播放的音效(避免重复播放和频繁播放)
     */
    private curSoundIds:{};

    public static getInstance():SoundManager
    {
        return super.getInstance();
    }

    public init()
    {
        this.volume = 1;
        this.curSoundIds = {};
        cc.game.on(cc.game.EVENT_HIDE,this.onGamePause,this);
        cc.game.on(cc.game.EVENT_SHOW,this.onGameResume,this);
    }

    /**
     * 切后台
     */
    public onGamePause()
    {
        this.isPause = true;
        cc.audioEngine.setEffectsVolume(0);
        cc.audioEngine.stopAllEffects();
        cc.audioEngine.setMusicVolume(0);
        cc.audioEngine.pauseMusic();
    }

    /**
     * 切游戏前台
     */
    public onGameResume()
    {
        this.isPause = false;
        cc.audioEngine.setEffectsVolume(this.volume);
        cc.audioEngine.setMusicVolume(this.volume);
        cc.audioEngine.resumeMusic();
    }

    /**
     * 打开背景音乐
     */
    public openMusic()
    {
        this.isOnMusic = true;
        this.playMusic();
    }

    /**
     * 关闭背景音乐
     */
    public stopMusic()
    {
        this.isOnMusic = false;
        cc.audioEngine.stopMusic();
    }

    /**
     * 打开音效
     */
    public openSound()
    {
        this.isOnSound = true;
    }

    /**
     * 关闭音效
     */
    public stopSound()
    {
        this.isOnSound = false;
        cc.audioEngine.stopAllEffects();
    }

    /**
     * 播放背景音乐
     * @param musicId 
     */
    public playMusic(musicId:string = null)
    {
        if(cc.game.isPaused())
            return;
        if(!this.isOnMusic)
            return;
        if(musicId == this.curMusicId)
        {
            if(this.musicAudio)
                cc.audioEngine.playMusic(this.musicAudio,true);
        }
        else
        {
            let thiz = this;
            let musicPath = GameGlobal.Config.getConfig(ConfigConst.ConfigName.Sound)[musicId]; //通过配置获取
            musicPath = "Sound"+musicPath;
            GameGlobal.Resource.loadRes("musicRes",musicPath,cc.AudioClip,(err,audio)=>{
                if(err == null)
                {
                    cc.audioEngine.stopMusic();
                    thiz.musicAudio = audio;
                    thiz.curMusicId = musicId;
                    cc.audioEngine.playMusic(audio,true);
                }
                else
                {
                    LogUtil.debug("加载背景音乐失败:"+err);
                }
            });
        }
    }

    /**
     * 播放音效
     * @param soundId 
     */
    public playSound(soundId:string)
    {
        if(cc.game.isPaused())
            return;
        if(!this.isOnSound)
            return;
        let thiz = this;
        let soundPath = GameGlobal.Config.getConfig(ConfigConst.ConfigName.Sound)[soundId]; //通过配置获取
        soundPath = "Sound"+soundPath;
        if(this.curSoundIds[soundPath])
            return;
        GameGlobal.Resource.loadRes("soundRes",soundPath,cc.AudioClip,(err,audio)=>{
            if(err == null)
            {
                let audioID = cc.audioEngine.playEffect(audio,false);
                thiz.curSoundIds[soundPath] = audioID;
                cc.audioEngine.setFinishCallback(audioID, function () {
                    thiz.curSoundIds[soundPath] = null
                });
            }
            else
            {
                LogUtil.debug("加载音效失败:"+err);
            }
        });    
    }

}
