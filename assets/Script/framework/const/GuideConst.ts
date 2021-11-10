export class GuideConst
{
    public static HandleType = {
        None: 0,
        Focus: 1
    }
    
    public static GuideViewEnum = {
        Finger: "Finger",
        MoveFinger: "guideMoveFinger",
        Dialog: "Dialog",
        MaskLayer: "GuideMaskLayer"
    };

    public static DialogHeroName = {
        XS_nvshenxiang: "MSZ_xinshou_masha",
        XS_yase: "MSZ_xinshou_yase",
        XS_anheizhilong: "MSZ_xinshou_anheizhiwang"
    }
    
    public static GuideLayer = {
        Dialog: "prefab/Guide/GuideDialogView"
    }
    
    public static GuideId = {
        PveGuideId: 1e3,
        FirstMainPanel: 1001,
        GachaGuideId: 1004,
        EndlessGuideId: 1011,
        LoginGiftGuideId: 1012,
        PveLightSkillId: 1500,
        TreasureRob: 9e4,
        TreasureCompose: 90001,
        BattleFriend: 1e5,
        HuntGem: 11e4,
        PickGem: 110001
    }
    
    public static GuideGateId = 1;
    public static GuideWaveId = 10008;
    
    public static GuideEvent = {
        Pve_Battle_Pause: 1,
        Pve_Battle_Resume: 2,
        Pve_Show_Inspire: 3,
        Pve_Show_Storm: 4,
        Pve_Fight_Result: 5,
        Pve_Open_Build_Switch: 6,
        Pve_Close_Build_Switch: 7,
        Pve_Create_tmp_platform_flag: 8,
        Pve_show_tmp_platform_flag: 9,
        Pve_show_play_special_skill: 10,
        Pve_Line_Up_Hero: 11,
        Pve_Start_Battle: 12,
        Pve_Show_Create_Role: 13,
        Pve_GRIL_MOVING: 14,
        Pve_Full_Anger_Power: 20,
        Pve_Light_Skill_Guide: 21,
        Pvp_Battle_Pause: 30,
        Pvp_Battle_Resume: 31,
        Pvp_Show_Hero: 32,
        Fly_Hero: 33,
        Disable_Scroll: 34,
        Enable_Scroll: 35,
        Chapter_Fly_Hero: 36
    };
    
    public static GuideCustomCond = {
        ImmortalTask: 1,
        ImmortalUpgrade: 2,
        WithEquip: 3,
        FightReady: 4,
        FightEnd: 5,
        GachaAniEnd: 6,
        WithoutHero: 7,
        PveSpeedUnlock: 8,
        TreasureCanRob: 9,
        TreasureCanCompose: 10,
        WillShowLevelUp: 11,
        MainSceneLoaded: 12,
        PveChapterId: 13,
        PveLightSkillUnlock: 14,
        PveLightSkillGuideBegin: 15,
        CanEmbattle: 16,
        AfterHeroFly: 17,
        TaskReward: 18,
        SmeltTask: 19,
        SmeltTask1: 20,
        SmeltTaskEvent: 21,
        NewChapterEvent: 22
    };
    
    public static MaskTag = 12121;
    public static NewSystemKey = "NewSystemKey";
}