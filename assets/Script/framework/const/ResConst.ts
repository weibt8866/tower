export class ResConst
{
    public static ResoureId = {
        UnReleaseRes: {
            prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/CommonIconWidget", "prefab/CommonView/AvatarHead", "prefab/CommonView/RedPointPrefab", "prefab/CommonView/marquee", "prefab/MainPanel/mainPanel"]
            },
            fightRes: {
                type: cc.Prefab,
                resArray: ["fightRes/common_anima/ZhanDouShenLi/ZhanDouShenLi", "fightRes/common_anima/KaiShiZhanDou_Effect/KaiShiZhanDou_Effect"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/GuoChang_Yun/GuoChang_Yun", "uiAnima/ZhuangBei_pinzhi/ZhuangBei_pinzhi", "uiAnima/Finger/Finger"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/SY_shouye", "plist/GY_Common", "plist/GY0_Common", "plist/CopySkillChoose", "plist/icon_item", "plist/icon_shenqi"]
            }
        },
        HeroUnReleaseResive: {},
        Boot: {
            prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/CommonIconWidget", "prefab/CommonView/AvatarHead", "prefab/CommonView/RedPointPrefab", "prefab/CommonView/marquee"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/GY_Common"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_zhanli_06", "Fonts/Fonts_zhanli_05"]
            }
        },
        Guide: {
            guideLayer: {
                type: cc.Prefab,
                resArray: ["prefab/Guide/GuideDialogView", "prefab/Guide/GuideMaskView"]
            },
            fightRes: {
                type: cc.Prefab,
                resArray: ["fightRes/pve/protege/MaliGongZhu"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/Finger/Finger"]
            }
        },
        FirstBattleGuide: {
            prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Guide/GuideTipsLayer", "prefab/Guide/GuidePlotLayer"]
            },
            fightRes: {
                type: cc.Prefab,
                resArray: ["fightRes/pve/protege/MaliGongZhu2", "fightRes/pve/otherAnimation/XinShouYingDao_lingqi/XinShouYingDao_lingqi"]
            }
        },
        Common: {
            GB_LoadingLayer: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/LoadingLayer", "prefab/CommonView/CombatUpView", "prefab/PopView/ConfirmBroadcastTipWindow"]
            }
        },
        LoginScene: {
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/DL_denglu"]
            }
        },
        HomePage: {
            HomePrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Home/HomePage"]
            }
        },
        MailWindow: {
            MailPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Mail/MailWindow", "prefab/Mail/MailItem"]
            }
        },
        GetRewardWindow: {
            GetRewardWindow: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/getRewardWindow"]
            }
        },
        MailDetailWindow: {
            MailDetailWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Mail/MailDetailWindow"]
            }
        },
        MainPanel: {
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/HuoDong_ui/HuoDong_ui"]
            },
            MainPanelPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/MainPanel/mainPanel", "uiAnima/HuoDong_ui/HuoDong_ui", "prefab/Nation/NationFlagIcon"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/SY_shouye"]
            }
        },
        BagPanel: {
            BagPanelPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Bag/BagPanel"]
            }
        },
        SelectRewardWindow: {
            BagItemOperateWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Bag/SelectRewardWindow"]
            }
        },
        ArenaPanel: {
            ArenaPanelPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Arena/ArenaPanel", "prefab/Arena/arenaItem", "uiAnima/ChengHao_UI/ChengHao_UI_1", "uiAnima/ChengHao_UI/ChengHao_UI_2", "uiAnima/ChengHao_UI/ChengHao_UI_3"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_jjc_grpm", "Fonts/Fonts_jjc_paiming03"]
            }
        },
        ArenaRuleWindow: {
            ArenaRuleWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Arena/ArenaRuleWindow"]
            }
        },
        ArenaReportWindow: {
            ArenaReportWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Arena/ArenaReportWindow"]
            }
        },
        ArenaRecordWindow: {
            prefab: {
                type: cc.Prefab,
                resArray: ["prefab/Arena/ArenaRecordWindow"]
            }
        },
        BattleCompareWindow: {
            prefab: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/BattleCompareWindow", "prefab/BattleArray/battleMercenaryItem"]
            }
        },
        NationDuelBattleCompareWindow: {
            prefab: {
                type: cc.Prefab,
                resArray: ["prefab/NationDuel/NationDuelBattleCompareWindow", "prefab/BattleArray/battleMercenaryItem"]
            }
        },
        NationCreateTipsWindow: {
            prefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationCreateTipsWindow"]
            }
        },
        PvpFightScene: {
            prefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pvp/PvpFightRoleLayer", "prefab/Pvp/PvpFightUI", "prefab/Pvp/FightMercenary", "prefab/Pvp/MercenaryModel", "prefab/Pvp/PvpBaseLayer", "prefab/Pvp/PvpFightResultLayer", "prefab/Pvp/HurtStaticsLayer"]
            },
            fightRes: {
                type: cc.Prefab,
                resArray: ["fightRes/pvp/ui_anima/ShiFang_Effect/skillPrefab", "fightRes/common_anima/KaiShiZhanDou_Effect/KaiShiZhanDou_Effect", "fightRes/common_anima/ZhanDouShenLi/ZhanDouShenLi"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/PVP_skillName"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_pvp_baoji", "Fonts/Fonts_pvp_fagong", "Fonts/Fonts_pvp_pugong", "Fonts/Fonts_pvp_zhiliao", "Fonts/Fonts_pvpsz", "Fonts/Fonts_zd_bao_fa", "Fonts/Fonts_zd_bao_wu", "Fonts/Fonts_zd_dun"]
            }
        },
        PvpFightPanel: {
            prefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pvp/PvpFightPanel", "prefab/Pvp/PvpFightRoleLayer", "prefab/Pvp/PvpFightUI", "prefab/Pvp/FightMercenary", "prefab/Pvp/MercenaryModel", "prefab/Pvp/PvpBaseLayer", "prefab/Pvp/PvpFightResultLayer", "prefab/Pvp/HurtStaticsLayer"]
            },
            fightRes: {
                type: cc.Prefab,
                resArray: ["fightRes/pvp/ui_anima/ShiFang_Effect/skillPrefab", "fightRes/common_anima/KaiShiZhanDou_Effect/KaiShiZhanDou_Effect", "fightRes/common_anima/ZhanDouShenLi/ZhanDouShenLi"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/PVP_skillName"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_pvp_baoji", "Fonts/Fonts_pvp_fagong", "Fonts/Fonts_pvp_pugong", "Fonts/Fonts_pvp_zhiliao", "Fonts/Fonts_pvpsz", "Fonts/Fonts_zd_bao_fa", "Fonts/Fonts_zd_bao_wu"]
            }
        },
        PvpFightMainView: {
            PvpFightMainViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pvp/PvpFightMainView"]
            }
        },
        PvpFightFailPanel: {
            FightFailPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pvp/PvpFightFailPanel"]
            }
        },
        PvpFightSuccessPanel: {
            FightSuccessPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pvp/PvpFightSuccessPanel"]
            }
        },
        PvpFightResultLayer: {
            FightSuccessPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pvp/PvpFightResultLayer"]
            }
        },
        PvpRandomBg: {
            SpriteFrame: {
                type: cc.SpriteFrame,
                resArray: []
            }
        },
        PvpHeroSkillPic: {
            SpriteFrame: {
                type: cc.SpriteFrame,
                resArray: []
            }
        },
        PvpGoldenHeroSkillNameAnima: {
            goldenHeroSkillNameAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/AnJin_UI/AnJin_UI"]
            }
        },
        HurtStaticsLayer: {
            FightSuccessPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pvp/HurtStaticsLayer"]
            }
        },
        PveHook: {
            PvePrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pve/PvePopLayer", "prefab/Pve/PveUiLayer", "prefab/Pve/BulletModel", "prefab/Pve/EnemyModel", "prefab/Pve/BossSkillModel", "prefab/Pve/HeroModel", "prefab/Pve/BuildTowerFlag", "prefab/Pve/PvePlatform", "prefab/Pve/ProtegeModel", "prefab/Pve/EnemyDetailPanel", "prefab/Pve/TowerSkillTip", "prefab/Pve/PveHeroDetailPrefab", "prefab/Pve/MonsterSpeaker"]
            },
            fightRes: {
                type: cc.Prefab,
                resArray: ["fightRes/pve/otherAnimation/ZhaoHuanYingXiong/Zhaohuanyingxiong", "fightRes/pve/otherAnimation/ChuanSongMen_effect/ChuanSongMen_effect", "fightRes/pve/otherAnimation/YouLing_effect/YouLing_effect", "fightRes/pve/buff/GuWu/buffPrefab", "fightRes/common_anima/Guajijinbi/Guajijinbi", "fightRes/common_anima/Guajijinbi/Guajijinbi_idle", "fightRes/pve/buff/buffPrefab", "fightRes/pvp/ui_anima/ShiFang_Effect/skillPrefab"]
            },
            PveCommonAtlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/PVE_zhandou", "plist/ZD_Common", "plist/PVP_skillName"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_pvp_baoji", "Fonts/Fonts_pvp_fagong", "Fonts/Fonts_pvp_pugong", "Fonts/Fonts_pvp_zhiliao", "Fonts/Fonts_pvpsz", "Fonts/Fonts_zd_bao_fa", "Fonts/Fonts_zd_bao_wu"]
            }
        },
        PveFirstBattle: {
            PvePrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pve/PveUiLayer", "prefab/Pve/BulletModel", "prefab/Pve/EnemyModel", "prefab/Pve/HeroModel", "prefab/Pve/BuildTowerFlag", "prefab/Pve/PvePlatform", "prefab/Pve/ProtegeModel", "prefab/Pve/TowerSkillTip", "prefab/Pve/MonsterSpeaker"]
            },
            fightRes: {
                type: cc.Prefab,
                resArray: ["fightRes/pve/buff/GuWu/buffPrefab", "fightRes/pve/buff/buffPrefab", "fightRes/pve/otherAnimation/ZhiLuBiao_effect/ZhiLuBiao_effect", "fightRes/pve/otherAnimation/ZhaoHuanYingXiong/Zhaohuanyingxiong", "fightRes/pve/protege/MaliGongZhu3", "fightRes/pve/protege/MaliGongZhu2", "fightRes/pve/protege/MaliGongZhu1", "fightRes/pve/protege/MaliGongZhu", "fightRes/pve/otherAnimation/PveDuTiao/PVE_dutiaoui", "fightRes/pvp/ui_anima/ShiFang_Effect/skillPrefab"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/xinshou_hehua/xinshou_hehua"]
            }
        },
        fontDelay: {
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_pvp_baoji", "Fonts/Fonts_pvp_fagong", "Fonts/Fonts_pvp_pugong", "Fonts/Fonts_pvp_zhiliao", "Fonts/Fonts_pvpsz", "Fonts/Fonts_zd_bao_fa", "Fonts/Fonts_zd_bao_wu"]
            }
        },
        atlasDelay: {
            PveCommonAtlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/GY_Common", "plist/PVP_skillName", "plist/icon_touxiang"]
            }
        },
        uiAnimaDelay: {
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/BOSS_laixi/BOSS_laixi"]
            }
        },
        Pve: {
            PvePrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Pve/PvePopLayer", "prefab/Pve/PveUiLayer", "prefab/Pve/BossSkillModel", "prefab/Pve/BulletModel", "prefab/Pve/EnemyModel", "prefab/Pve/HeroModel", "prefab/Pve/BuildTowerFlag", "prefab/Pve/PvePlatform", "prefab/Pve/PveHeroDetailPrefab", "prefab/Pve/ProtegeModel", "prefab/Pve/PveFightResultLayer", "prefab/Activity/MoneyPennyItem", "prefab/Pve/EnemyDetailPanel", "prefab/Pve/TowerSkillTip", "prefab/Pve/PveHurtStaticsLayer", "prefab/Pve/MonsterSpeaker"]
            },
            fightRes: {
                type: cc.Prefab,
                resArray: ["fightRes/pve/buff/GuWu/buffPrefab", "fightRes/pve/buff/buffPrefab", "fightRes/pve/buff/dun_buff/9013_buff", "fightRes/pve/buff/dun_buff/zidun", "fightRes/pve/buff/dun_buff/jindun", "fightRes/pve/buff/TowerBuffFreeze/TowerBuffFreeze", "fightRes/pve/buff/buffPrefab", "fightRes/pve/buff/9023/9023", "fightRes/pve/buff/9027/9027", "fightRes/pve/otherAnimation/ZhiLuBiao_effect/ZhiLuBiao_effect", "fightRes/pve/otherAnimation/ZhaoHuanYingXiong/Zhaohuanyingxiong", "fightRes/pve/protege/MaliGongZhu3", "fightRes/pve/protege/MaliGongZhu2", "fightRes/pve/protege/MaliGongZhu1", "fightRes/pve/protege/MaliGongZhu", "fightRes/common_anima/KaiShiZhanDou_Effect/KaiShiZhanDou_Effect", "fightRes/common_anima/ZhanDouShenLi/ZhanDouShenLi", "fightRes/pve/skill/LeiTingWanJi/skillPrefab_kuang", "fightRes/pve/skill/DaoJiShi/DaoJiShi", "fightRes/pve/otherAnimation/PveDuTiao/PVE_dutiaoui", "fightRes/pvp/ui_anima/ShiFang_Effect/skillPrefab"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/BOSS_laixi/BOSS_laixi"]
            },
            PveCommonAtlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/PVE_zhandou", "plist/ZD_Common", "plist/PVP_skillName"]
            },
            AnimationClips: {
                type: cc.AnimationClip,
                resArray: ["fightRes/pve/buff/burnAnimation", "fightRes/pve/buff/freezeAnimation", "fightRes/pve/buff/vertigoAnimation", "fightRes/pve/buff/GuWu/buffAnimation", "fightRes/pve/protege/MaliGongZhu3", "fightRes/pve/protege/MaliGongZhu2", "fightRes/pve/protege/MaliGongZhu1", "fightRes/pve/protege/MaliGongZhu"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_pvp_baoji", "Fonts/Fonts_pvp_fagong", "Fonts/Fonts_pvp_pugong", "Fonts/Fonts_pvp_zhiliao", "Fonts/Fonts_pvpsz", "Fonts/Fonts_zd_bao_fa", "Fonts/Fonts_zd_bao_wu"]
            }
        },
        TOTPve: {
            PvePrefab: {
                type: cc.Prefab,
                resArray: ["prefab/TeamOnlineTD/TOTPlatform", "prefab/TeamOnlineTD/TOTBulletModel", "prefab/TeamOnlineTD/TOTEnemyModel", "prefab/TeamOnlineTD/TOTHeroModel", "prefab/TeamOnlineTD/TOTMonsterSpeaker", "prefab/TeamOnlineTD/TOTBattleReward", "prefab/TeamOnlineTD/TOTKillRewardTip"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/SZ_UI/SZ_UI", "uiAnima/red_ui/red_ui"]
            },
            PveCommonAtlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/PVE_zhandou", "plist/ZD_Common", "plist/PVP_skillName"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_pvp_baoji", "Fonts/Fonts_pvp_fagong", "Fonts/Fonts_pvp_pugong"]
            }
        },
        TOTFightRes: {
            PvePrefab: {
                type: cc.Prefab,
                resArray: ["hero/black/black"]
            }
        },
        TOTGrayRes: {
            PvePrefab: {
                type: cc.Prefab,
                resArray: ["fightRes/pve/buff/buffPrefab", "fightRes/pve/otherAnimation/ZhaoHuanYingXiong/Zhaohuanyingxiong", "fightRes/pvp/ui_anima/ShiFang_Effect/skillPrefab", "fightRes/pve/otherAnimation/ChuanSongMen_effect/ChuanSongMen_effect", "fightRes/pve/otherAnimation/FaZhen/FaZhen"]
            }
        },
        TOTMap: {
            SpriteFrame: {
                type: cc.SpriteFrame,
                resArray: []
            },
            TiledMapAsset: {
                type: cc.TiledMapAsset,
                resArray: []
            }
        },
        TOTMonster: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        TOTSkill: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        TOTBullet: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        TOTHero: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PveMap: {
            SpriteFrame: {
                type: cc.SpriteFrame,
                resArray: []
            },
            TiledMapAsset: {
                type: cc.TiledMapAsset,
                resArray: []
            },
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PveHero: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PvePet: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PveHeroDelay: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PveEnemy: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PveEnemyDelay: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PveBoss: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PveBullet: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PveBulletDelay: {
            Prefabs: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PveSkill: {
            Atlas: {
                type: cc.SpriteAtlas,
                resArray: ["fightRes/pve/skill/BaoFengXue/Atlas"]
            },
            AnimationClips: {
                type: cc.AnimationClip,
                resArray: ["fightRes/pve/skill/BaoFengXue/skillAnimation"]
            },
            PvePrefab: {
                type: cc.Prefab,
                resArray: ["fightRes/pve/skill/BaoFengXue/skillPrefab"]
            }
        },
        PveSkillDelay: {
            PvePrefab: {
                type: cc.Prefab,
                resArray: []
            }
        },
        PrefabRes: {
            prefab: {
                type: cc.Prefab,
                resArray: []
            }
        },
        ShopMainPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Shop/ShopPanel"]
            },
            Atlas: {
                type: cc.SpriteAtlas,
                resArray: ["UI/SD_shangdian/SD_shangdian"]
            },
            SpriteFrames: {
                type: cc.SpriteFrame,
                resArray: ["UI/SD_shangdian/SD_beijing", "UI/SD_shangdian/SD_menkuang"]
            }
        },
        AddSubConfirmWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PopView/AddSubConfirmWindow"]
            }
        },
        ConfirmTipWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PopView/ConfirmTipWindow"]
            }
        },
        RewardPreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PopView/RewardPreviewWindow"]
            }
        },
        RewardPreviewWindowCopy: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PopView/RewardPreviewWindowCopy"]
            }
        },
        ConfirmBroadcastTipWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PopView/ConfirmBroadcastTipWindow"]
            }
        },
        ActivityMainPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ActivityMainPanel"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/ShangPing_ui/ShangPing_ui"]
            }
        },
        SingleRechargePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/SingleRechargePanel"]
            }
        },
        AddUpRechargePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/AddUpRechargePanel"]
            }
        },
        EatEnergyHome: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/EatEnergyHome"]
            }
        },
        BattleArrayView: {
            BattleArrayViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/BattleArrayView"]
            }
        },
        ComposeContextView: {
            ComposeContextViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Compose/ComposeContextView"]
            }
        },
        ComposeSelectView: {
            ComposeSelectViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Compose/ComposeSelectView"]
            }
        },
        BatchComposeWindow: {
            BatchComposeWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Compose/BatchComposeWindow"]
            }
        },
        MercenaryAttributeUpView: {
            MercenaryAttributeUpViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/MercenaryAttributeUpView"]
            }
        },
        MercenaryRelifeView: {
            MercenaryRelifeViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/MercenaryRelifeView"]
            }
        },
        MercenaryDegenerateView: {
            MercenaryDegenerateViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/MercenaryDegenerateView"]
            }
        },
        MercenaryDetailView: {
            MercenaryDetailViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/MercenaryDetailView"]
            }
        },
        PveGeneralChapterWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PveCopy/PveGeneralChapterWindow"]
            }
        },
        PveCopyGateWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PveCopy/PveCopyGateWindow", "prefab/Activity/MoneyPennyItem", "prefab/PveCopy/StoryDialogView"]
            }
        },
        PveCopyBible: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PveCopy/PveCopyBibleWindow", "prefab/PveCopy/PveCopyBibleGateWindow", "prefab/PveCopy/SweepRewardSingleWindow"]
            }
        },
        PveQuickGainWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PveCopy/PveQuickGainWindow"]
            }
        },
        PveCopyGateChallengeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PveCopy/PveCopyGateChallengeWindow", "prefab/Activity/MoneyPennyItem"]
            }
        },
        SweepRewardDisplayWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PveCopy/SweepRewardDisplayWindow"]
            }
        },
        PveResultWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PveCopy/PveResultWindow"]
            }
        },
        PveGateRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PveCopy/PveGateRewardWindow"]
            }
        },
        DebugAdminWindow: {
            DebugAdminWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/DebugAdminWindow"]
            }
        },
        EquipMasterWindow: {
            EquipMasterWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipMasterWindow"]
            }
        },
        EquipmentAttributeUpView: {
            EquipmentAttributeUpViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipmentAttributeUpView"]
            }
        },
        EquipmentDetailView: {
            EquipmentDetailViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipmentDetailView"]
            }
        },
        MercenaryChangePosView: {
            MercenaryChangePosViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/MercenaryChangePosView", "prefab/BattleArray/battleHeroItem"]
            }
        },
        PlayerUpLevelWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Player/PlayerUpLevelWindow"]
            }
        },
        FunctionPreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Player/FunctionPreviewWindow"]
            }
        },
        NewSystemOpenWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Player/NewSystemOpenWindow"]
            }
        },
        NewChatWindow: {
            Atlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/icon_touxiang", "plist/LT_liaotian", "plist/XM_xianmeng", "plist/icon_title"]
            },
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Chat/NewChatWindow", "prefab/Nation/NationFlagIcon", "uiAnima/ChengHao_UI/ChengHao_UI_1", "uiAnima/ChengHao_UI/ChengHao_UI_2", "uiAnima/ChengHao_UI/ChengHao_UI_3"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_vip_sz"]
            }
        },
        BuyTimesWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PopView/BuyTimesWindow"]
            }
        },
        PlayerInfoWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Setting/PlayerInfoWindow"]
            }
        },
        SoundSettingWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Setting/SoundSettingWindow"]
            }
        },
        ModifyUserNameWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Setting/ModifyNameWindow"]
            }
        },
        SummonPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Summon/SummonPanel"]
            },
            Atlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/ZH_zhaohuan"]
            }
        },
        SummonResultWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Summon/SummonResultWindow"]
            }
        },
        RushRankPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RushRankPanel"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/ShangPing_ui/ShangPing_ui"]
            }
        },
        RushRankRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RushRankRankWindow"]
            }
        },
        TaskView: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/task/TaskView"]
            }
        },
        AwardBoxPreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/AwardBoxPreviewWindow"]
            }
        },
        GemstonePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gemstone/GemstonePanel"]
            },
            Atlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/GY0_Common"]
            }
        },
        GemstoneOperatePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gemstone/GemstoneOperatePanel"]
            }
        },
        GemstoneAdvanceSuccess: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gemstone/GemAdvanceSuccess"]
            }
        },
        GemstoneDegradePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gemstone/GemstoneDegradePanel"]
            }
        },
        GemstoneAdvanceResetPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gemstone/GemstoneResetPanel"]
            }
        },
        GemstoneManualWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gemstone/GemstoneManualWindow"]
            }
        },
        HuntTreasurePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HuntTreasure/HuntTreasurePanel"]
            }
        },
        GemReplacePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gemstone/GemReplacePanel"]
            }
        },
        GemInfoTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gemstone/GemInfoTipsWindow"]
            }
        },
        SoulRefineScoreExchangeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HuntTreasure/SoulRefineScoreExchangeWindow"]
            }
        },
        MercenaryAwakeView: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/MercenaryAwakeView"]
            }
        },
        MercenaryAwakeStrengthenView: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/MercenaryAwakeStrengthenView"]
            }
        },
        MercenaryAwakeSuccView: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/MercenaryAwakeSuccView"]
            }
        },
        EquipmentDegenerateView: {
            EquipmentDegenerateViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipmentDegenerateView"]
            }
        },
        BattleFriendView: {
            BattleFriendViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/BattleFriendView"]
            }
        },
        SelectFriendWindow: {
            SelectFriendWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/SelectFriendWindow"]
            }
        },
        NationAddView: {
            NationAddViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationAddView"]
            }
        },
        NationMainPanel: {
            NationMainViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationMainView"]
            }
        },
        NationManagerWindow: {
            NationManagerWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationManagerWindow"]
            }
        },
        NationNoticeWindow: {
            NationNoticeWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationNoticeWindow"]
            }
        },
        NationModifyFlagWindow: {
            NationModifyFlagWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationModifyFlagWindow"]
            }
        },
        NationModifyNameWindow: {
            NationModifyNameWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationModifyNameWindow"]
            }
        },
        NationCheckDetailWindow: {
            NationCheckDetailWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationCheckDetailWindow"]
            }
        },
        NationSettingWindow: {
            NationSettingWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationSettingWindow"]
            }
        },
        NationApplyWindow: {
            NationApplyWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationApplyWindow"]
            }
        },
        ArenaRankWindow: {
            ArenaRankWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Arena/ArenaRankWindow"]
            }
        },
        NationRankWindow: {
            NationRankWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationRankWindow"]
            }
        },
        NationMemberList: {
            NationMemberListPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationMemberList"]
            }
        },
        NationDonationView: {
            NationDonationViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationDonationView"]
            }
        },
        GodFurnacePanel: {
            NationDonationViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/GodFurnacePanel"]
            }
        },
        GodFurnaceRankWindow: {
            NationDonationViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/GodFurnaceRankWindow"]
            }
        },
        GodFurnaceRewardWindow: {
            NationDonationViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/GodFurnaceRewardWindow"]
            }
        },
        EquipGrowSuccView: {
            EquipGrowSuccViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipGrowSuccView"]
            }
        },
        WorldBossView: {
            WorldBossViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/WorldBoss/WorldBossView"]
            },
            Atlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/SJBS_shijieboss"]
            }
        },
        WorldBossInspireWindow: {
            prefab: {
                type: cc.Prefab,
                resArray: ["prefab/WorldBoss/WorldBossInspireWindow"]
            }
        },
        WorldBossShowRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WorldBoss/WorldBossShowRewardWindow"]
            }
        },
        WorldBossOpenTip: {
            WorldBossOpenTipPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/WorldBoss/WorldBossOpenTip"]
            }
        },
        MagicTowerPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MoTa/MagicTowerPanel"]
            },
            SpriteFrames: {
                type: cc.SpriteFrame,
                resArray: ["UI/MT_mota/MT_weikaiqi", "UI/MT_mota/MT_yikaiqi", "UI/MT_mota/MT_yitongguang"]
            }
        },
        FloorDetailInfoWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MoTa/FloorDetailInfoWindow"]
            }
        },
        MagicTowerRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MoTa/MagicTowerRankWindow"]
            }
        },
        MTowerRewardPreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MoTa/MTowerRewardPreviewWindow"]
            }
        },
        MTDifficultyChooseWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MoTa/MTDifficultyChooseWindow"]
            }
        },
        NationTechnologyView: {
            NationTechnologyViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationTechnologyView"]
            },
            Atlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/XM_xianmeng", "plist/icon_xm_skill"]
            }
        },
        NationTecOperationWindow: {
            NationTecOperationWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationTecOperationWindow"]
            }
        },
        NationBossPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationBoss/NationBossPanel"]
            }
        },
        NationBossChallengeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationBoss/NationBossChallengeWindow"]
            }
        },
        NationBossRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationBoss/NationBossRankWindow"]
            }
        },
        NationBossSweepWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationBoss/NationBossSweepWindow"]
            }
        },
        NationBossReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationBoss/NationBossReportWindow"]
            }
        },
        NationBossSweepResultWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationBoss/NationBossSweepResultWindow"]
            }
        },
        NationBossRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationBoss/NationBossRewardWindow"]
            }
        },
        NationTechnologyRankWindow: {
            NationTechnologyRankWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/Nation/NationTechnologyRankWindow"]
            }
        },
        NationWarCityView: {
            NationWarCityViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/NationWar/NationWarCityView"]
            }
        },
        NationWarDetailWindow: {
            NationWarDetailWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/NationWar/NationWarDetailWindow"]
            }
        },
        NationWarRankWindow: {
            NationWarRankWindowPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/NationWar/NationWarRankWindow"]
            }
        },
        NationWarAttakDetailView: {
            NationWarAttakDetailViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/NationWar/NationWarAttakDetailView"]
            }
        },
        NationWarCityWallView: {
            NationWarCityWallViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/NationWar/NationWarCityWallView"]
            }
        },
        NationWarDefendView: {
            NationWarDefendViewPrefab: {
                type: cc.Prefab,
                resArray: ["prefab/NationWar/NationWarDefendView"]
            }
        },
        KnightPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Knight/KnightPanel"]
            },
            Atlas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/XW_xianwei"]
            }
        },
        KnightListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Knight/KnightListWindow"]
            }
        },
        KnightPromoteWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Knight/KnightPromoteWindow"]
            }
        },
        KnightPromoteSuccessWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Knight/KnightPromoteSuccess"]
            }
        },
        DeComposeSelectView: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Compose/DeComposeSelectView"]
            }
        },
        CivilKillDragonPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/KillDragon/KDCivilPanel"]
            }
        },
        KDRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/KillDragon/KDRewardWindow"]
            }
        },
        KDCivilKillRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/KillDragon/KDCivilKillRewardWindow"]
            }
        },
        AdventureEntryView: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/AdventureEntry/AdventureEntryView"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/SL_rukou"]
            }
        },
        AdventureEntryViewCopy: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/AdventureEntry/AdventureEntryViewCopy"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/SL_rukou"]
            }
        },
        HelpWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/PopView/HelpWindow"]
            }
        },
        HeroExtraAttributeView: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/HeroExtraAttributeView", "prefab/BattleArray/HeroExtraAttributeItem"]
            }
        },
        RestrainRuleWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/RestrainRuleWindow"]
            }
        },
        MercenaryAttrDetailWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/MercenaryAttrDetailWindow"]
            }
        },
        MaterailListPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MaterailCopy/MaterailListPanel"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/CLFB_cailiaofuben"]
            }
        },
        MaterialPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MaterailCopy/MaterialPanel"]
            }
        },
        MaterialInspireWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MaterailCopy/MaterialInspireWindow"]
            }
        },
        TechnologyPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Technology/TechnologyPanel"]
            }
        },
        PveFightPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pve/PveFightPanel", "prefab/PveCopy/StoryDialogView"]
            }
        },
        TOTFightPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/TeamOnlineTD/TOTFightPanel"]
            }
        },
        PveFightHookPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pve/PveFightHookPanel"]
            }
        },
        AvatarShowSettingPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Setting/AvatarShowSettingPanel"]
            }
        },
        ManualPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Manual/ManualPanel"]
            }
        },
        CollectRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Manual/CollectRewardWindow"]
            }
        },
        TreasureReplacePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureReplacePanel"]
            }
        },
        TreasureFightReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureFightReportWindow"]
            }
        },
        OneKeyUpWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/OneKeyUpWindow"]
            }
        },
        TreasureFragmentSlePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureFragmentSlePanel"]
            }
        },
        TreasureAvoidWarWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureAvoidWarWindow"]
            }
        },
        TreasureUpPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureUpPanel", "uiAnima/FeiSheng_effect/FeiSheng_baikai"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/BW_baowu"]
            }
        },
        TreasureInfoPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureInfoPanel"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/BW_baowu"]
            }
        },
        TreasureTipsPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureTipsPanel"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/BW_baowu"]
            }
        },
        TreasureRobListPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureRobListPanel"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/BW_baowu"]
            }
        },
        TreasureSkillListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureSkillListWindow"]
            }
        },
        TreasureEvolveSkillListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureEvolveSkillListWindow"]
            }
        },
        TreasureBagPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureBagPanel"]
            },
            SpriteFrames: {
                type: cc.SpriteFrame,
                resArray: ["backdrop/BG_bwhc_bg", "backdrop/BG_ui_quanpk_01"]
            }
        },
        TreasureReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureReportWindow"]
            }
        },
        TreasureHuntConfirmWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureHuntConfirmWindow"]
            }
        },
        TreasureInfoTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureInfoTipsWindow"]
            }
        },
        HeroReplacePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroReplacePanel"]
            }
        },
        HeroCultivateSkillListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroCultivateSkillListWindow"]
            }
        },
        HeroBagPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroBagPanel"]
            }
        },
        HeroRewardPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroRewardPanel"]
            }
        },
        HeroInfoPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroInfoPanel"]
            }
        },
        HeroUpPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroUpPanel"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/FeiSheng_effect/FeiSheng_effect", "uiAnima/FeiSheng_effect/FeiSheng_shengduan", "uiAnima/FeiSheng_effect/FeiSheng_baikai", "uiAnima/YingXiong_dujie/YingXiong_dujie"]
            }
        },
        HeroInfoTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroInfoTipsWindow"]
            }
        },
        ObtainWayWindow: {
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/icon_tujing"]
            },
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/ObtainWayWindow"]
            }
        },
        ItemUseBuyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/ItemUseBuyWindow"]
            }
        },
        EquiptReplacePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquiptReplacePanel"]
            }
        },
        EquipInfoPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipInfoPanel"],
                spriteAltas: {
                    type: cc.SpriteAtlas,
                    resArray: ["plist/ZB_zhuangbei"]
                }
            }
        },
        EquipUpPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipUpPanel", "prefab/Equip/EquipEvolveItem"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/ZhuLing_bolang/ZhuLing_bolang", "uiAnima/ZhuLing_bolang/ZhuLing_diceng"]
            }
        },
        EquipSkillListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipSkillListWindow"]
            }
        },
        EquipBreakoutSkillListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipBreakoutSkillListWindow"]
            }
        },
        EquipEvolveTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipEvolveTipsWindow"]
            }
        },
        EquipBagPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipBagPanel"]
            }
        },
        EquipInfoTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipInfoTipsWindow"]
            }
        },
        HeroCultivateSuccWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroCultivateSuccWindow"]
            }
        },
        HeroBreakoutSuccWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroBreakoutSuccWindow"]
            }
        },
        HeroStarUpSuccWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroStarUpSuccWindow"]
            }
        },
        HeroComposeTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroComposeTipsWindow"]
            }
        },
        HeroRuneTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroRuneTipsWindow"]
            }
        },
        ResonanceWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/ResonanceWindow"]
            }
        },
        ResonanceInfoWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/ResonanceInfoWindow"],
                spriteAltas: {
                    type: cc.SpriteAtlas,
                    resArray: ["plist/YX_yixiong"]
                }
            }
        },
        HeroEvolveSuccWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroEvolveSuccWindow"]
            }
        },
        HeroEvolvePreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroEvolvePreviewWindow"]
            }
        },
        BagInfoTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Bag/BagInfoTipsWindow"]
            }
        },
        EquiptSelectPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Smelt/EquiptSelectPanel"]
            }
        },
        SmeltPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Smelt/SmeltPanel"]
            }
        },
        FriendShowAllWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/FriendShowAllWindow"]
            }
        },
        OneKeySmeltWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Smelt/OneKeySmeltWindow"]
            }
        },
        ResetTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DestroyTemple/ResetTipsWindow"]
            }
        },
        DestroyTemplePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DestroyTemple/DestroyTemplePanel"]
            }
        },
        DestroyTempleReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DestroyTemple/DestroyTempleReportWindow"]
            }
        },
        DestroyTempleRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DestroyTemple/DestroyTempleRewardWindow"]
            }
        },
        DestroyTempleRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DestroyTemple/DestroyTempleRankWindow"]
            }
        },
        DestroyTempleInspireWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DestroyTemple/DestroyTempleInspireWindow"]
            }
        },
        ChallengeBossWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DestroyTemple/ChallengeBossWindow", "prefab/BattleArray/battleMercenaryItem"]
            }
        },
        MagicRecordPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MagicRecord/MagicRecordPanel"]
            }
        },
        MagicRecordRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MagicRecord/MagicRecordRewardWindow"]
            }
        },
        MagicRecordPreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MagicRecord/MagicRecordPreviewWindow"]
            }
        },
        ShopHomeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Shop/ShopHomeWindow"]
            }
        },
        ShopType1Panel: {
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/SC_shangcheng"]
            },
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Shop/ShopType1Panel"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/ShangPing_ui/ShangPing_ui"]
            }
        },
        ShopFreshTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Shop/ShopFreshTipsWindow"]
            }
        },
        ContinuousRechargePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ContinuousRechargePanel"]
            }
        },
        TreasureGiftPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TreasureGiftPanel"]
            }
        },
        TreasureGiftTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TreasureGiftTaskWindow"]
            }
        },
        TreasureGiftRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TreasureGiftRewardWindow"]
            }
        },
        TreasureBreakoutSkillListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureBreakoutSkillListWindow"]
            }
        },
        TreasureEvolveChooseWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureEvolveChooseWindow"]
            }
        },
        GachaPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gacha/GachaPanel"]
            }
        },
        ScoreGachaWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gacha/ScoreGachaWindow"]
            }
        },
        GachaRewardPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gacha/GachaRewardPanel"]
            }
        },
        GachaShowWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gacha/GachaShowWindow"]
            }
        },
        RoamPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Roam/RoamPanel"]
            }
        },
        RoamRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Roam/RoamRewardWindow"]
            }
        },
        RebirthSelectPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Smelt/RebirthSelectPanel"]
            }
        },
        SmeltHome: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Smelt/SmeltHome"]
            }
        },
        KingdomTreasurePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/KingdomTreasurePanel"]
            }
        },
        StarDiamondPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/StarDiamondPanel"]
            }
        },
        LevelGiftPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/LevelGiftPanel"]
            }
        },
        LuckyTurntablePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/LuckyTurntablePanel"]
            }
        },
        FortuneCatPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FortuneCatPanel"]
            }
        },
        FortuneCatShopWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FortuneCatShopWindow"]
            }
        },
        FortuneCatTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FortuneCatTaskWindow"]
            }
        },
        PartnershipWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/PartnershipWindow"]
            }
        },
        LuckyShopPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/LuckyShopPanel"]
            }
        },
        LuckyRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/LuckyRankWindow"]
            }
        },
        FundCardPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FundCardPanel"]
            }
        },
        CollectWordPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CollectWordPanel"]
            }
        },
        MultipleFirstRechargeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/MultipleFirstRechargeWindow"]
            }
        },
        VipPrivilegeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/VipPrivilegeWindow"]
            }
        },
        GoldTreasurePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GoldTreasurePanel"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/JuBaoPen_effect/JuBaoPen_effect"]
            }
        },
        AccumulatedRechargePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/AccumulatedRechargePanel"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/ShangPing_ui/ShangPing_ui"]
            }
        },
        VipShopPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/VipShopPanel"]
            }
        },
        VipShopBuyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/VipShopBuyWindow"]
            }
        },
        VipPrivilegePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/VipPrivilegePanel"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/VIP_pingzhi/VIP_pingzhi"]
            }
        },
        MoneyPennyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/MoneyPennyWindow"]
            }
        },
        DailyPreferentialWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/DailyPreferentialWindow"]
            }
        },
        SuperGiftWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/SuperGiftWindow"]
            }
        },
        GroupPurchasePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GroupPurchasePanel"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/VIP_pingzhi/VIP_pingzhi"]
            }
        },
        MonthCardHome: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/MonthCardHome"]
            }
        },
        RechargePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RechargePanel"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/Acitivty_13_cz"]
            }
        },
        SignInPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/SignInPanel"]
            }
        },
        GrowthPlanPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GrowthPlanPanel"]
            }
        },
        RedPacketPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/RedPacket/RedPacketPanel"]
            }
        },
        RedPacketDetailWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/RedPacket/RedPacketDetailWindow"]
            }
        },
        SendDefinedRedPacektWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/RedPacket/SendDefinedRedPacektWindow"]
            }
        },
        AboreWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/AboreWindow"]
            }
        },
        StarUpRoadItemWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/StarUpRoad/StarUpRoadItemWindow"]
            }
        },
        StarUpRoadPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/StarUpRoad/StarUpRoadPanel"]
            }
        },
        StarUpRoadResetTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/StarUpRoad/StarUpRoadResetTipsWindow"]
            }
        },
        StarUpRoadRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/StarUpRoad/StarUpRoadRewardWindow"]
            }
        },
        StarUpRoadVipTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/StarUpRoad/StarUpRoadVipTipsWindow"]
            }
        },
        RuneResolveWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Bag/RuneResolveWindow"]
            }
        },
        RuneResolveTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Bag/RuneResolveTipsWindow"]
            }
        },
        BlackListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Friend/BlackListWindow"]
            }
        },
        FriendPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Friend/FriendPanel"]
            }
        },
        FriendRecommendWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Friend/FriendRecommendWindow"]
            }
        },
        FriendFindWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Friend/FriendFindWindow"]
            }
        },
        FriendDetailWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Friend/FriendDetailWindow"]
            }
        },
        PagodaPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pagoda/PagodaPanel", "prefab/Pagoda/PagodaGrid"]
            }
        },
        PagodaRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pagoda/PagodaRankWindow"]
            }
        },
        PagodaSweepReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pagoda/PagodaSweepReportWindow"]
            }
        },
        RankPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Rank/RankPanel"]
            }
        },
        TopRankPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Rank/TopRankPanel"]
            }
        },
        OtherBattleArrayWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/OtherBattleArrayWindow"]
            }
        },
        OtherBattleFriendWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/OtherBattleFriendWindow"]
            }
        },
        OtherBattleGemWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/BattleArray/OtherBattleGemWindow"]
            }
        },
        EquipstarUpTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipstarUpTipsWindow"]
            }
        },
        EquipbreakoutUpTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipbreakoutUpTipsWindow"]
            }
        },
        TreasurebreakoutUpTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasurebreakoutUpTipsWindow"]
            }
        },
        ShopBuyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Shop/ShopBuyWindow"]
            }
        },
        OpreateTimesWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/OpreateTimesWindow"]
            }
        },
        OneKeyForgeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/OneKeyForgeWindow"]
            }
        },
        ImmortalPanel: {
            SpriteFrames: {
                type: cc.SpriteFrame,
                resArray: ["XW_xianwei_bg/XW_dtb_01", "XW_xianwei_bg/XW_dtb_02", "XW_xianwei_bg/XW_dtb_03", "XW_xianwei_bg/XW_dtb_04", "XW_xianwei_bg/XW_dtb_05"]
            },
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Immortal/ImmortalPanel"]
            },
            uiAnima: {
                type: cc.Prefab,
                resArray: ["uiAnima/XianZhi_qiu/XianZhi_qiu"]
            }
        },
        ImmortalRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Immortal/ImmortalRewardWindow"]
            }
        },
        ImmortalEventWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Immortal/ImmortalEventWindow"]
            }
        },
        ImmortalRecordWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Immortal/ImmortalRecordWindow"]
            }
        },
        ShowGetHeroPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/ShowGetHeroPanel"]
            }
        },
        EndlessPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Endless/EndlessPanel", "prefab/Guide/GuideDialogView"]
            }
        },
        EndlessChallengeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Endless/EndlessChallengeWindow", "prefab/BattleArray/battleMercenaryItem"]
            }
        },
        EndlessRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Endless/EndlessRankWindow"]
            }
        },
        EndlessRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Endless/EndlessRewardWindow"]
            }
        },
        EndlessResetTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Endless/EndlessResetTipsWindow"]
            }
        },
        EndlessVipTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Endless/EndlessVipTipsWindow"]
            }
        },
        EndlessSweepReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Endless/EndlessSweepReportWindow"]
            }
        },
        EndlessSweepTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Endless/EndlessSweepTipsWindow"]
            }
        },
        TechnologyAdvancePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Technology/TechnologyAdvancePanel"]
            }
        },
        LineupRecommendPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/LineupRecommend/LineupRecommendPanel"]
            }
        },
        VipDailyPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/VipDailyPanel"]
            }
        },
        LuckyErniePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/LuckyErniePanel"]
            }
        },
        EquipForgeupSkillWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Equip/EquipForgeupSkillWindow"]
            }
        },
        ImmortalUpgradePanel: {
            SpriteFrames: {
                type: cc.SpriteFrame,
                resArray: ["XW_xianwei_bg/XW_dtb_01", "XW_xianwei_bg/XW_dtb_02", "XW_xianwei_bg/XW_dtb_03", "XW_xianwei_bg/XW_dtb_04", "XW_xianwei_bg/XW_dtb_05"]
            },
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Immortal/ImmortalUpgradePanel"]
            }
        },
        ImmortalPreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Immortal/ImmortalPreviewWindow"]
            }
        },
        PulseHomePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseHomePanel"]
            }
        },
        PulseNationFindWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseNationFindWindow"]
            }
        },
        PulseInfoWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseInfoWindow"]
            }
        },
        MyPulseWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/MyPulseWindow"]
            }
        },
        PulseRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseRankWindow"]
            }
        },
        PulsePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulsePanel"]
            }
        },
        PulseExploitWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseExploitWindow"]
            }
        },
        PulseBuyTimeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseBuyTimeWindow"]
            }
        },
        PulseReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseReportWindow"]
            }
        },
        PulseRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseRewardWindow"]
            }
        },
        PulseBoxTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseBoxTipsWindow"]
            }
        },
        PulseBoxOpenWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pulse/PulseBoxOpenWindow"]
            }
        },
        WorldBossPreviewPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WorldBoss/WorldBossPreviewPanel"]
            }
        },
        WholeBossRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WorldBoss/WholeBossRewardWindow"]
            }
        },
        WholeBossRecordWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WorldBoss/WholeBossRecordWindow"]
            }
        },
        WholeBossTipWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WorldBoss/WholeBossTipWindow"]
            }
        },
        ChallengeHeroHome: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ChallengeHeroHome"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/Acitivty_21_qmbnz"]
            }
        },
        FlashGiftsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/FlashGifts/FlashGiftsWindow"]
            }
        },
        LoginDayGiftPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/LoginDayGiftPanel"]
            }
        },
        ExtensionLoginGiftWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ExtensionLoginGiftWindow"]
            }
        },
        GroupBuyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GroupBuyWindow"]
            }
        },
        GachaActivityShopPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GachaActivityShopPanel"]
            }
        },
        GachaActivityHome: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GachaActivityHome"]
            }
        },
        DayDayRechargePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/DayDayRechargePanel"]
            }
        },
        FestivalPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FestivalPanel"]
            }
        },
        FestivalExchangeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FestivalExchangeWindow"]
            }
        },
        FestivalWordsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FestivalWordsWindow"]
            }
        },
        OneKeyAboreWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Rank/OneKeyAboreWindow"]
            }
        },
        OnlineRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/OnlineRewardWindow"]
            }
        },
        StoryRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/StoryRewardWindow"]
            }
        },
        GuideFinishedView: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Guide/GuideFinishedView"]
            }
        },
        SelectRechargeRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/SelectRechargeRewardWindow"]
            }
        },
        LimitGiftPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/LimitGift/LimitGiftPanel"]
            }
        },
        LifeCardRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/LifeCardRewardWindow"]
            },
            SpriteFrames: {
                type: cc.SpriteFrame,
                resArray: ["Activity_bg/HD_zzlb_bg02", "Activity_bg/HD_zzlb_bg"]
            }
        },
        TurntableHome: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TurntableHome"]
            }
        },
        ConsumeActivityPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ConsumeActivityPanel"]
            }
        },
        TurntableRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TurntableRewardWindow"]
            }
        },
        TurntableTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TurntableTaskWindow"]
            }
        },
        TurntableExchangeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TurntableExchangeWindow"]
            }
        },
        FortuneCatBuyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FortuneCatBuyWindow"]
            }
        },
        HavingTurntablePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/HavingTurntablePanel"]
            }
        },
        HeavenTurntablePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/HeavenTurntablePanel"]
            }
        },
        HeavenTurntableTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/HeavenTurntableTaskWindow"]
            }
        },
        HavingTurntableTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/HavingTurntableTaskWindow"]
            }
        },
        TreasureRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureRewardWindow"]
            }
        },
        TreasureStarUpTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureStarUpTipsWindow"]
            }
        },
        LimitGiftTipWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/LimitGift/LimitGiftTipWindow"]
            }
        },
        MaterailInfoWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MaterailCopy/MaterailInfoWindow"]
            }
        },
        MaterialVipTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MaterailCopy/MaterialVipTipsWindow"]
            }
        },
        MaterialResetTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MaterailCopy/MaterialResetTipsWindow"]
            }
        },
        TreasureBatchCompoundWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Treasure/TreasureBatchCompoundWindow"]
            }
        },
        DemonTreasurePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DemonTreasure/DemonTreasurePanel"]
            }
        },
        DemonTreasureRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DemonTreasure/DemonTreasureRewardWindow"]
            }
        },
        AncientCorridorPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/AncientCorridor/AncientCorridorPanel"]
            }
        },
        AncientCorridorRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/AncientCorridor/AncientCorridorRankWindow"]
            }
        },
        RushCrossRankPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RushCrossRankPanel"]
            }
        },
        RechargeRankListPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RechargeRankListPanel"]
            }
        },
        DipperPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Dipper/DipperPanel"]
            }
        },
        DipperRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Dipper/DipperRewardWindow"]
            }
        },
        TechnologyTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Technology/TechnologyTipsWindow"]
            }
        },
        SimpleCostTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/SimpleCostTipsWindow"]
            }
        },
        ActivityTokenPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ActivityTokenPanel"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/icon_baowu"]
            }
        },
        WonderlandPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WonderlandAdventure/WonderlandPanel"]
            }
        },
        WonderlandOneKeyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WonderlandAdventure/WonderlandOneKeyWindow"]
            }
        },
        WonderlandChallengeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WonderlandAdventure/WonderlandChallengeWindow"]
            }
        },
        WonderlandExploreWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WonderlandAdventure/WonderlandExploreWindow"]
            }
        },
        WonderlandQuickExploreWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WonderlandAdventure/WonderlandQuickExploreWindow"]
            }
        },
        WonderlandChooseHeroWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WonderlandAdventure/WonderlandChooseHeroWindow"]
            }
        },
        WonderlandGradeUpWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/WonderlandAdventure/WonderlandGradeUpWindow"]
            }
        },
        ActivateActivityTokenWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ActivateActivityTokenWindow"]
            }
        },
        IntensifyPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Intensify/IntensifyPanel"]
            }
        },
        IntensifyTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Intensify/IntensifyTipsWindow"]
            }
        },
        ActivityTokenPointBuyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ActivityTokenPointBuyWindow"]
            }
        },
        ActivityForecastPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ActivityForecastPanel"]
            }
        },
        CrossArenaHomePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossArena/CrossArenaHomePanel"]
            }
        },
        CrossArenaRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossArena/CrossArenaRewardWindow"]
            }
        },
        CrossArenaRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossArena/CrossArenaRankWindow"]
            }
        },
        CrossArenaChallengePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossArena/CrossArenaChallengePanel"]
            }
        },
        GemSkillListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gemstone/GemSkillListWindow"]
            }
        },
        CrossArenaRankRaiseWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossArena/CrossArenaRankRaiseWindow"]
            }
        },
        CrossArenaReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossArena/CrossArenaReportWindow"]
            }
        },
        CrossArenaHallPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossArena/CrossArenaHallPanel"]
            }
        },
        CrossArenaTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossArena/CrossArenaTipsWindow"]
            }
        },
        NewServerCarnivalPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/NewServerCarnivalPanel"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/Acitivty_16_cfkh"]
            }
        },
        NationBeastPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationBeast/NationBeastPanel"]
            },
            spriteAltas: {
                type: cc.SpriteAtlas,
                resArray: ["plist/SJBS_shijieboss"]
            }
        },
        NationDuelPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationDuel/NationDuelPanel"]
            }
        },
        NationDuelPointRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationDuel/NationDuelPointRewardWindow"]
            }
        },
        NationDuelRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationDuel/NationDuelRankWindow"]
            }
        },
        NationDuelAppointPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationDuel/NationDuelAppointPanel"]
            }
        },
        NationDuelCampDetailWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationDuel/NationDuelCampDetailWindow"]
            }
        },
        NationDuelCampVsPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationDuel/NationDuelCampVsPanel"]
            }
        },
        NationDuelTopRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationDuel/NationDuelTopRankWindow"]
            }
        },
        HeroArtifactInfoPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HeroArtifact/HeroArtifactInfoPanel", "uiAnima/QI_UI/QI_UI", "uiAnima/YingXiong_dujie/YingXiong_dujie"]
            }
        },
        HeroArtifactInfoMaxPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HeroArtifact/HeroArtifactInfoMaxPanel", "uiAnima/QI_UI/QI_UI", "uiAnima/YingXiong_dujie/YingXiong_dujie"]
            }
        },
        HeroArtifactInfoTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HeroArtifact/HeroArtifactInfoTipsWindow"]
            }
        },
        RareTreasurePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RareTreasurePanel"]
            }
        },
        ZnqRareTreasurePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ZnqRareTreasurePanel"]
            }
        },
        RareTreasureShopWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RareTreasureShopWindow"]
            }
        },
        CrystalGetWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RareTreasureCrystalGetWindow"]
            }
        },
        CrystalInputWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RareTreasureInputWindow"]
            }
        },
        CrystalAutoInputWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RareTreasureAutoInputWindow"]
            }
        },
        PreviousRecordsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RareTreasurePresiousRecordsWindow"]
            }
        },
        MyRecordsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RareTreasureMyRecordsWindow"]
            }
        },
        ChallengeMonsterPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ChallengeMonsterPanel"]
            }
        },
        ChallengeMonsterPanel2: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ChallengeMonsterPanel2"]
            }
        },
        Double11LottoPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/Double11LottoPanel"]
            }
        },
        Double11ExchangePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/Double11ExchangePanel"]
            }
        },
        SpecialPackagePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/SpecialPackagePanel"]
            }
        },
        ChallengeMonsterRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ChallengeMonsterRankWindow"]
            }
        },
        ChallengeMonsterBuyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ChallengeMonsterBuyWindow"]
            }
        },
        FerroTurntablePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FerroTurntablePanel"]
            }
        },
        FerroTurntableTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/FerroTurntableTaskWindow"]
            }
        },
        SuperVIPWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/SuperVIPWindow"]
            }
        },
        TitleView: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Title/TitleView"]
            }
        },
        ResetRechargePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ResetRechargePanel"]
            }
        },
        HeroArtifactReplacePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HeroArtifact/HeroArtifactReplacePanel"]
            }
        },
        AwyGiftPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Gift/AwyGiftPanel"]
            }
        },
        CivilKDChallengeResultWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/KillDragon/KDCivilChallengeResultWindow"]
            }
        },
        CollectWordExchangeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CollectWordExchangeWindow"]
            }
        },
        ActivityBuyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Shop/ActivityBuyWindow"]
            }
        },
        HeroArtifactExtractPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HeroArtifact/HeroArtifactExtractPanel"]
            }
        },
        HeroArtifactManualWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HeroArtifact/HeroArtifactManualWindow"]
            }
        },
        ArtifactExtractSelectHeroWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HeroArtifact/ArtifactExtractSelectHeroWindow"]
            }
        },
        TowerMasterPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TowerMasterPanel"]
            }
        },
        TowerMasterRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TowerMasterRewardWindow"]
            }
        },
        NationWarInMatchWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationWar/NationWarInMatchWindow"]
            }
        },
        NationWarRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/NationWar/NationWarRewardWindow"]
            }
        },
        BabelPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Babel/BabelPanel"]
            }
        },
        BabelHeroReplacePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Babel/BabelHeroReplacePanel"]
            }
        },
        BabelSelectWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Babel/BabelSelectLvWindow"]
            }
        },
        BabelRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Babel/BabelRankWindow"]
            }
        },
        ActivityPopupWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ActivityPopupWindow"]
            }
        },
        ActivityBaoZhuPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ActivityBaoZhuPanel"]
            }
        },
        ActivityBaoZhuTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ActivityBaoZhuTaskWindow"]
            }
        },
        CollectHerosPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CollectHerosPanel"]
            }
        },
        ObtainWayWindow2: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/ObtainWayWindow2"]
            }
        },
        CrossCupHonorRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossCup/CrossCupHonorRankWindow"]
            }
        },
        CrossCupRankRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossCup/CrossCupRankRewardWindow"]
            }
        },
        CrossCupBattleDetailWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossCup/CrossCupBattleDetailWindow"]
            }
        },
        CrossCupBetWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossCup/CrossCupBetWindow"]
            }
        },
        CrossCupChangePosWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossCup/CrossCupChangePosWindow", "prefab/CrossCup/CrossCupBattleHeroItem"]
            }
        },
        CrossCupGuessWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CrossCup/CrossCupGuessWindow"]
            }
        },
        NewGachaActivityHome: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/NewGachaActivityHome"]
            }
        },
        GodEquipRewardsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GodEquipRewardsWindow"]
            }
        },
        GodEquipTicketsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GodEquipTicketsWindow"]
            }
        },
        TimeLimitGachaPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TimeLimitGachaPanel"]
            }
        },
        TimeLimitGachaRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TimeLimitGachaRankWindow"]
            }
        },
        TimeLimitGachaBoxWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TimeLimitGachaBoxWindow"]
            }
        },
        TicketsGetWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TicketsGetWindow"]
            }
        },
        MonopolyPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/MonopolyPanel"]
            }
        },
        MonopolyExchangeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/MonopolyExchangeWindow"]
            }
        },
        MonopolyProgressWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/MonopolyProgressWindow"]
            }
        },
        MonopolyTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/MonopolyTaskWindow"]
            }
        },
        CommonTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CommonTaskWindow"]
            }
        },
        DoubleDropPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/DoubleDropPanel"]
            }
        },
        SpiritBagPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritBagPanel"]
            }
        },
        SpiritReplacePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritReplacePanel"]
            }
        },
        SpiritInfoPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritInfoPanel"]
            }
        },
        SpiritUpPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritUpPanel"]
            }
        },
        OneKeyUpSpiritWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/OneKeyUpSpiritWindow"]
            }
        },
        SpiritSkillListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritSkillListWindow"]
            }
        },
        SpiritInfoTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritInfoTipsWindow"]
            }
        },
        SpiritTalentWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritTalentWindow"]
            }
        },
        SpiritTalentUpWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritTalentUpWindow"]
            }
        },
        SpiritTalentShowWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritTalentShowWindow"]
            }
        },
        SpiritstarUpTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritstarUpTipsWindow"]
            }
        },
        LegendMainPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendMainPanel"]
            }
        },
        LegendPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendPanel"]
            }
        },
        LegendGodRankPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendGodRankPanel"]
            }
        },
        LegendMatchPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendMatchPanel"]
            }
        },
        LegendShopPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendShopPanel"]
            }
        },
        LegendAdmireWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendAdmireWindow"]
            }
        },
        LegendSeasonSelectWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendSeasonSelectWindow"]
            }
        },
        LegendSeasonRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendSeasonRankWindow"]
            }
        },
        LegendSeasonRewardsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendSeasonRewardsWindow"]
            }
        },
        LegendRank100Window: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendRank100Window"]
            }
        },
        LegendRankPreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendRankPreviewWindow"]
            }
        },
        LegendSelfReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendSelfReportWindow"]
            }
        },
        LegendAutoReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendAutoReportWindow"]
            }
        },
        LegendTopReportWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendTopReportWindow"]
            }
        },
        LegendTimesSelectWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendTimesSelectWindow"]
            }
        },
        LegendSecionChangePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendSecionChangePanel"]
            }
        },
        LegendBoxWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendBoxWindow"]
            }
        },
        LegendSeasonDanChangeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Legend/LegendSeasonDanChangeWindow"]
            }
        },
        CustomGiftPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CustomGiftPanel"]
            }
        },
        CustomGiftSelectWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CustomGiftSelectWindow"]
            }
        },
        ChallengeHerolWordsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ChallengeHerolWordsWindow"]
            }
        },
        TurnTableQuickExactWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/TurnTableQuickExactWindow"]
            }
        },
        QuickHuntWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HuntTreasure/QuickHuntWindow"]
            }
        },
        EightDiagramsPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/EightDiagrams/EightDiagramsPanel"]
            }
        },
        EightDiagramsRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/EightDiagrams/EightDiagramsRankWindow"]
            }
        },
        EightDiagramsRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/EightDiagrams/EightDiagramsRewardWindow"]
            }
        },
        CommonCostTipsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/CommonView/CommonCostTipsWindow"]
            }
        },
        GoldHeroBackBuyPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GoldHeroBackBuyPanel"]
            }
        },
        GoldHeroBackBuyPanel2: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GoldHeroBackBuyPanel2"]
            }
        },
        GoldHeroActiveWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GoldHeroActiveWindow"]
            }
        },
        Test3DModelPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Debug/Test3DModelPanel"]
            }
        },
        HeroRepayPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/HeroRepayPanel"]
            }
        },
        CumulateGiftPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CumulateGiftPanel"]
            }
        },
        MonthCardRenewalWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/MonthCardRenewalWindow"]
            }
        },
        HeroSoulLinkPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HeroSoulLink/HeroSoulLinkPanel"]
            }
        },
        Pet: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Pet/PetBagPanel", "prefab/Pet/PetHatchAccTipWindow", "prefab/Pet/PetHatchPanel", "prefab/Pet/PetHatchSelectWindow", "prefab/Pet/PetHatchSuccessWindow", "prefab/Pet/PetInfoPanel", "prefab/Pet/PetInfoWindow", "prefab/Pet/PetMainPanel", "prefab/Pet/PetRefineSuccessWindow", "prefab/Pet/PetRefineWindow", "prefab/Pet/PetStarUpSuccessWindow", "prefab/Pet/PetStationPanel", "prefab/Pet/PetStationPreviewWindow", "prefab/Pet/PetUpPanel", "prefab/Pet/PetVipCardWindow"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_cw_shuzi01", "Fonts/Fonts_cw_shuzi02"]
            }
        },
        MazeMainPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeMainPanel"]
            }
        },
        MazePvePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazePvePanel"]
            }
        },
        MazePvpPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazePvpPanel"]
            }
        },
        MazeSkillBagWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeSkillBagWindow"]
            }
        },
        MazeSkillChooseWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeSkillChooseWindow"]
            }
        },
        MazeHeroInitWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeHeroInitWindow"]
            }
        },
        MazeSetupWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeSetupWindow"]
            }
        },
        MazeRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeRankWindow"]
            }
        },
        MazeRewardsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeRewardsWindow"]
            }
        },
        MazeReportsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeReportsWindow"]
            }
        },
        MazeItemUseWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeItemUseWindow"]
            }
        },
        MazeHeroBagWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeHeroBagWindow"]
            }
        },
        MazeCompareWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeCompareWindow", "prefab/BattleArray/battleMercenaryItem"]
            }
        },
        MazeChallengeDetailWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeChallengeDetailWindow"]
            }
        },
        MazeHeroChooseWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeHeroChooseWindow"]
            }
        },
        MazeSkillChooseWindow2: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Maze/MazeSkillChooseWindow2"]
            }
        },
        PetExchangePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/PetExchangePanel"]
            }
        },
        DiamondRebatePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/DiamondRebatePanel"]
            }
        },
        RichmanPlanPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RichmanPlanPanel"]
            }
        },
        RichmanPlanTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/RichmanPlanTaskWindow"]
            }
        },
        PreferentialGiftWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/PreferentialGiftWindow"]
            }
        },
        CustomGiftPanel2: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CustomGiftPanel2"]
            }
        },
        CustomGiftSelectWindow2: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CustomGiftSelectWindow2"]
            }
        },
        GodPetsFeedbackPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/HeroRepayPanel2"]
            }
        },
        BirdBridgeMeetPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/BirdBridgeMeetPanel"]
            }
        },
        BirdBridgeMeetHelpPanel: {
            prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/BirdBridgeMeetHelpPanel", "uiAnima/QCUI_effect/QCUI_effect"]
            },
            spriteAtlas: {
                type: cc.SpriteAtlas,
                resArray: ["uiAnima/QCUI_effect/QCUI_effect"]
            }
        },
        BBMatchmakerBlessPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/BBMatchmakerBlessPanel"]
            }
        },
        BirdBridgeFateRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/BirdBridgeFateRankWindow"]
            }
        },
        BirdBridgeFlowerRankWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/BirdBridgeFlowerRankWindow"]
            }
        },
        BBNewMeetPushWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/BirdBridgeMeetPush"]
            }
        },
        Double11FundPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/Double11FundPanel"]
            }
        },
        Double11RankPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/Double11RankPanel"]
            }
        },
        Double11IntegralWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/Double11IntegralWindow"]
            }
        },
        Chess: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Chess/ChessMainPanel", "prefab/Chess/ChessRankWindow", "prefab/Chess/ChessGradeRewardsWindow", "prefab/Chess/ChessPreparePanel", "prefab/Chess/ChessTipWindow"]
            },
            Font: {
                type: cc.LabelAtlas,
                resArray: ["Fonts/Fonts_lyzq_01"]
            }
        },
        DivinePositionMainPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DivinePosition/DivinePositionMainPanel"]
            }
        },
        DivinePositionUpgradePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DivinePosition/DivinePositionUpgradePanel"]
            }
        },
        DivinePositionDetailWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DivinePosition/DivinePositionDetailWindow"]
            }
        },
        DivinePositionChangeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DivinePosition/DivinePositionChangeWindow"]
            }
        },
        DivinePositionPreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/DivinePosition/DivinePositionPreviewWindow"]
            }
        },
        Auction: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Auction/AuctionMainPanel", "prefab/Auction/AuctionLogWindow", "prefab/Auction/AuctionTipWindow", "prefab/Auction/AuctionFailLayer", "uiAnima/JP_UI/JP_UI"]
            }
        },
        Camp: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Camp/CampConvertMainPanel"]
            }
        },
        ScuffleYamaMainPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/ScuffleYama/ScuffleYamaMainPanel", "uiAnima/YL_jida/YL_jida", "prefab/Nation/NationChatUI"]
            }
        },
        ScuffleYamaChallengePlayerWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/ScuffleYama/ScuffleYamaChallengePlayerWindow"]
            }
        },
        ScuffleYamaRewardPreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/ScuffleYama/ScuffleYamaRewardPreviewWindow"]
            }
        },
        ScuffleYamaPushAllRewardsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/ScuffleYama/ScuffleYamaPushAllRewardsWindow", "uiAnima/GongXiHuoDe_effect/GongXiHuoDe_lizi"]
            }
        },
        ScuffleYamaGetRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/ScuffleYama/ScuffleYamaGetRewardWindow", "uiAnima/GongXiHuoDe_effect/GongXiHuoDe_lizi"]
            }
        },
        HeroOneKeyStarUpWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroOneKeyStarUpWindow"]
            }
        },
        HalloweenTaskWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/HalloweenTaskWindow"]
            }
        },
        HalloweenPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/HalloweenPanel"]
            }
        },
        Double11KillPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/Double11KillPanel"]
            }
        },
        Double11ShopPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/Double11ShopPanel"]
            }
        },
        Double11PreviewWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/Double11PreviewWindow"]
            }
        },
        EvilGodMainPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/EvilGodCopy/EvilGodMainPanel"]
            },
            SpriteFrames: {
                type: cc.SpriteFrame,
                resArray: ["backdrop/XSSL_bg_01", "backdrop/XSSL_bg_02", "backdrop/XSSL_bg_03"]
            }
        },
        EvilGodBossPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/EvilGodCopy/EvilGodBossPanel"]
            }
        },
        EvilGodBattleResultWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/EvilGodCopy/EvilGodBattleResultWindow"]
            }
        },
        HeroArtifactSkillWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/HeroArtifact/HeroArtifactSkillWindow"]
            }
        },
        Panel_GodHeroManual: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/GodHeroManual/GodHeroManualPanel"]
            }
        },
        GodHeroManualAttrWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/GodHeroManual/GodHeroManualAttrWindow"]
            }
        },
        ImmortalSpiritAttrWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/GodHeroManual/ImmortalSpiritAttrWindow"]
            }
        },
        TeamCopy2PMainPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/TeamCopy2P/TeamCopy2PMainPanel"]
            },
            SpriteFrame: {
                type: cc.SpriteFrame,
                resArray: ["ZDFB_zuduifuben_bg/ZDFB_fuben_01", "ZDFB_zuduifuben_bg/ZDFB_fuben_02", "ZDFB_zuduifuben_bg/ZDFB_fuben_03"]
            }
        },
        TeamCopy2PCreateWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/TeamCopy2P/TeamCopy2PCreateWindow"]
            }
        },
        TeamCopy2PPassWordWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/TeamCopy2P/TeamCopy2PPassWordWindow"]
            }
        },
        TeamCopy2PFirstRewardsWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/TeamCopy2P/TeamCopy2PFirstRewardsWindow"]
            }
        },
        TeamCopy2PRewardWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/TeamCopy2P/TeamCopy2PRewardWindow"]
            }
        },
        Panel_CattleTurntableAll: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CattleTurntableAllPanel"]
            }
        },
        Window_CattleResult: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CattleTurntableResultWindow"]
            }
        },
        Window_CattleIntegralReward: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CattleIntegralRewardWindow"]
            }
        },
        Window_CattleRewards: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CattleTurntableRewardWindow"]
            }
        },
        Window_SingleCattleRewards: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/CattleTurnRewardLookWindow"]
            }
        },
        WelfareRedEnvelopePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/WelfareRedEnvelopePanel"]
            }
        },
        ZnqSpecialPackagePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ZnqSpecialPackagePanel"]
            }
        },
        EatCakePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/EatCakePanel"]
            }
        },
        ZnqHappyTogetherPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ZnqHappyTogetherPanel"]
            }
        },
        ZnqHappyTogetherWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/ZnqHappyTogetherWindow"]
            }
        },
        EatCakeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/EatCakeWindow"]
            }
        },
        ZnqUsreFireWorksWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Anniversary/ZnqUsreFireWorksWindow"]
            }
        },
        GodSalariesAdvanceWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GodSalariesAdvanceWindow"]
            }
        },
        GodSalariesPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Activity/GodSalariesPanel"]
            }
        },
        SpiritTalentUpLevelWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritTalentUpLevelWindow"]
            }
        },
        OneKeyBlessSpiritWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/OneKeyBlessSpiritWindow"]
            }
        },
        SpiritFragmentSlePanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritFragmentSlePanel"]
            }
        },
        SpiritTalentCopyWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Spirit/SpiritTalentCopyWindow"]
            }
        },
        MobilepointsExchangeWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MobilepointsExchange/MobilepointsExchangeWindow"]
            }
        },
        MovingIntegralPanel: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/MobilepointsExchange/MovingIntegralPanel"]
            }
        },
        HeroTalentSkillListWindow: {
            Prefabs: {
                type: cc.Prefab,
                resArray: ["prefab/Hero/HeroTalentSkillListWindow"]
            }
        }
    };

    public static BundleMap = 
    {
        fightRes: true,
        hero: true,
        pet: true
    } 
}
