export class ViewConst
{
    public static LayerType = {
        floorLayer:0, //底层
        viewLayer:1,  //界面层
        menuLayer:2,  //菜单层
        popupLayer:3, //弹窗层
        popMenuLayer:4, 
        messageLayer:5, //提示层
        guideLayer:6,  //引导层
        toolTipLayer:7, 
        waitingLayer:8, //等待层
        loadingLayer:9, //加载层
        systemPopLayer:10, 
        debugLayer:11
    };
    public static ViewName = 
    {
        Panel_HomePage: 1,
        Panel_Mail: 2,
        Window_MailDetail: 3,
        Window_GetReward: 4,
        Panel_Main: 5,
        Panel_Bag: 6,
        Panel_Arena: 7,
        Window_BattleCompare: 8,
        Panel_BattleArray: 9,
        Panel_Activity: 14,
        Window_AddSubConfirm: 16,
        Window_ConfirmTip: 17,
        Panel_itemOperate: 20,
        Window_ConfirmBroadcastTip: 30,
        Window_ChangePos: 33,
        Window_ArenaRule: 43,
        Window_ArenaReport: 44,
        Window_ArenaRecord: 45,
        Panel_PveGeneralChapter: 50,
        Window_PveCopyGate: 51,
        Window_PveQuickGain: 52,
        Window_RewardPreview: 53,
        Window_SweepRewardDisplay: 54,
        Window_PveResult: 55,
        Window_GateReward: 56,
        Window_PlayerUpLevel: 60,
        Window_Chat: 61,
        Window_BuyTimes: 62,
        Window_PlayerInfo: 63,
        Window_ModifyName: 65,
        Window_SelectReward: 80,
        Panel_Task: 90,
        Window_RewardBoxPreview: 91,
        Panel_BattleFriend: 96,
        Window_SelectFriend: 97,
        Window_FriendShowAll: 98,
        Panel_Gemstone: 100,
        Window_GemLevelUp: 101,
        Window_GemAdvanceSuccess: 102,
        Panel_GemstoneDegenerate: 103,
        Panel_GemAdvanceReset: 104,
        Panel_HuntTreasure: 105,
        Panel_GemReplace: 106,
        Window_GemInfoTips: 107,
        Window_SoulRefineScoreExchange: 108,
        Window_LockGemTip: 109,
        Panel_NationMain: 110,
        Panel_NationAdd: 111,
        Window_NationManage: 112,
        Window_NationNotice: 113,
        Window_NationModifyFlag: 114,
        Window_NationModifyName: 115,
        Window_NationCheckDetail: 116,
        Window_NationSetting: 117,
        Window_NationApply: 118,
        Window_ArenaRank: 119,
        Window_NationRank: 120,
        Window_EquipGrowSucc: 121,
        Window_WorldBossSweepTip: 130,
        Panel_WorldBoss: 131,
        Window_WorldBossInspire: 132,
        Window_WorldBossRankReward: 133,
        Window_WorldBossTip: 134,
        Panel_NationTechMain: 135,
        Window_NationTechOperation: 136,
        Panel_MagicTower: 140,
        Window_MTowerFloorDetail: 141,
        Window_MagicTowerRank: 142,
        Window_MTowerRewardPreview: 143,
        Window_MTDifficultyChoose: 144,
        Panel_NationBoss: 146,
        Window_NationBossRank: 147,
        Window_NationBossReward: 148,
        Panel_NationCityWar: 160,
        Window_NationCityWarInfo: 161,
        Window_NationCityWarRank: 162,
        Window_NationCityWarDetail: 163,
        Panel_NationWarCityWallView: 164,
        Window_NationWarDefendListView: 165,
        Window_NationCreateTips: 1677,
        Panel_PvpFightMainView: 166,
        Node_DeComposeSelectView: 168,
        Panel_FightActivity: 185,
        Panel_NationMemberList: 187,
        Panel_NationDonationView: 188,
        Window_Manual: 194,
        Window_ManualCollectReward: 195,
        Window_Help: 214,
        Panel_PVE_FIGHT_HOOK: 1e3,
        Window_PVP_Result: 1001,
        Window_Hero_Extra_Attribute: 1002,
        Window_RestrainRule: 1003,
        Window_MercenaryAttrDetail: 1004,
        Panel_MaterailList: 1005,
        Panel_Material: 1006,
        Window_Material_Inspire: 300,
        Panel_Technology: 1007,
        Panel_PVE_FIGHT: 1008,
        Panel_TOT_FIGHT: 1009,
        Window_AvatarShowSetting: 1011,
        Panel_Treasure_Replace: 1020,
        Panel_Fragemnet_Select: 1021,
        Panel_Treasure_UP: 1022,
        Panel_TreasureInfo: 1023,
        Panel_TreasureRobList: 1025,
        Window_TreasureAvoidWar: 1026,
        Window_TreasureSkillList: 1027,
        Window_TreasureEvolveSkillList: 1028,
        Panel_Treasure_Bag: 1029,
        Panel_HeroReplace: 1030,
        Panel_HeroBag: 1031,
        Panel_HeroInfo: 1032,
        Panel_HeroUP: 1033,
        Window_Treasure_Report: 1034,
        Window_HeroCultivateSkillList: 1035,
        Window_ObtainWay: 1040,
        Window_ItemUseBuy: 1041,
        Window_TreasureHunt_Confirm: 1042,
        Panel_EquiptReplace: 1043,
        Panel_EquiptInfo: 1044,
        Panel_EquiptUp: 1045,
        Window_EquipEvolveTips: 1046,
        Panel_EquipBag: 1047,
        Window_EquipSkillList: 1048,
        Window_Resonance: 1049,
        Window_HeroComposeTips: 1050,
        Window_HeroCultivateSucc: 1051,
        Window_HeroRuneTips: 1052,
        Window_ResonanceInfo: 1053,
        Window_HeroEvolveSucc: 1054,
        Window_HeroEvolvePreview: 1055,
        Window_HeroInfoTips: 1056,
        Window_EquipInfoTips: 1057,
        Window_TreasureInfoTips: 1058,
        Window_BagInfoTips: 1059,
        Window_PveCopyGateChallenge: 1060,
        Panel_EquiptSelect: 1061,
        Panel_Smelt: 1062,
        Panel_DestroyTemple: 1063,
        Window_DestroyTempleReward: 1064,
        Window_DestroyTempleRank: 1065,
        Window_ChallengeBoss: 1066,
        Window_OneKeySmelt: 1067,
        Window_ResetTips: 1068,
        Window_DestroyTempleReport: 1069,
        Window_FunctionPreview: 1070,
        Panel_MagicRecord: 1071,
        Window_MagicRecordReward: 1072,
        Panel_ShopHome: 1073,
        Panel_ShopType1: 1074,
        Window_ShopFreshTips: 1075,
        Window_NewSystemOpen: 1076,
        Window_DestroyTempleInspire: 1077,
        Panel_Gacha: 1078,
        Window_ScoreGacha: 1079,
        Window_HomeSmelt: 1080,
        Panel_GachaReward: 1082,
        Window_GachaShow: 1083,
        Panel_Roam: 1084,
        Window_RoamReward: 1085,
        Window_Abore: 1086,
        Panel_Pagoda: 1087,
        Window_PagodaRank: 1088,
        Window_PagodaSweepReport: 1089,
        Panel_Rank: 1090,
        Panel_TopRank: 1091,
        Window_OtherBattleArray: 1092,
        Window_OtherBattleFriend: 1093,
        Window_OtherBattleGem: 1094,
        Window_OpreateTimes: 1095,
        Window_MagicRecordPreview: 1097,
        Panel_RebirthSelect: 1099,
        Window_TreasureGiftTask: 1100,
        Window_TreasureGiftReward: 1101,
        Panel_Lucky_Shop: 1102,
        Window_Lucky_Rank: 1103,
        Window_MultipleFirstRecharge: 1104,
        Window_VipPrivilege: 1105,
        Window_MoneyPenny: 1106,
        Window_SuperGift: 1107,
        Window_StarUpRoadItem: 1110,
        Panel_StarUpRoad: 1111,
        Window_StarUpRoadResetTips: 1112,
        Window_StarUpRoadReward: 1113,
        Window_StarUpRoadVipTips: 1114,
        Window_RuneResolve: 1115,
        Window_RuneResolveTips: 1116,
        Window_ShopBuy: 1117,
        Window_VipShopBuy: 1118,
        Window_FriendDetail: 1119,
        Panel_Friend: 1120,
        Window_FriendRecommend: 1121,
        Window_FriendFind: 1122,
        Panel_Immortal: 1123,
        Window_ImmortalReward: 1124,
        Window_ImmortalEvent: 1125,
        Window_ImmortalRecord: 1126,
        Panel_ShowGetHero: 1127,
        Window_TechnologyAdvance: 1128,
        Window_EquipstarUpTips: 1129,
        Panel_RedPacket: 1130,
        Window_RedPacketDetail: 1131,
        Window_SendRedPacket: 1132,
        Panel_ImmortalUpgrade: 1133,
        Window_ImmortalPreview: 1134,
        Window_NationBossChallenge: 1135,
        Window_NationBossSweep: 1136,
        Window_NationBossReport: 1137,
        Window_NationBossSweepResult: 1138,
        Window_Partnership: 1139,
        Panel_HeroReward: 1229,
        Window_HeroBreakoutSucc: 1230,
        Window_HeroStarUpSucc: 1231,
        Panel_RushRank: 1232,
        Window_RushRankRank: 1233,
        Window_OneKeyForge: 1240,
        Panel_Endless: 1241,
        Window_EndlessChallenge: 1242,
        Window_EndlessRank: 1243,
        Window_EndlessReward: 1244,
        Window_EndlessResetTips: 1245,
        Window_EndlessVipTips: 1246,
        Window_EndlessSweepReport: 1247,
        Window_EndlessSweepTips: 1248,
        Window_EquipForgeupSkill: 1249,
        Panel_Intensify: 1250,
        Panel_AccumulatedRecharge: 1251,
        Window_DailyPreferential: 1252,
        Window_OneKeyUp: 1253,
        Window_PulseBoxOpen: 1257,
        Window_PulseBoxTips: 1258,
        Window_PulseReward: 1259,
        Panel_PulseHome: 1260,
        Window_PulseNationFind: 1261,
        Window_PulseInfo: 1262,
        Window_MyPulse: 1263,
        Panel_Pulse: 1264,
        Window_PulseExploit: 1265,
        Window_PulseBuyTime: 1266,
        Window_PulseRank: 1267,
        Window_PulseReport: 1268,
        Window_GemstoneManual: 1269,
        Panel_WorldBossPreview: 1270,
        Window_WholeBossReward: 1271,
        Window_WholeBossRecord: 1272,
        Window_WholeBossTip: 1273,
        Window_TreasureFightReport: 1274,
        Window_FlashGifts: 1280,
        Window_LoginDayGift: 1282,
        Panel_GodFurnace: 1283,
        Window_GodFurnaceRank: 1284,
        Window_GodFurnaceReward: 1285,
        Window_ExtensionLoginGift: 1286,
        Window_GroupBuy: 1287,
        Panel_GachaActivityShop: 1288,
        Window_OneKeyAbore: 1289,
        Window_OnlineReward: 1290,
        Window_StoryReward: 1291,
        Window_GuideFinishedSucc: 1292,
        Window_SelectRechargeReward: 1293,
        Panel_LimitGift: 1294,
        Window_LifeCardReward: 1295,
        Window_TurntableReward: 1296,
        Window_TurntableTask: 1297,
        Window_TurntableExchange: 1298,
        Window_FortuneCatTask: 1299,
        Window_FortuneCatShop: 1300,
        Window_TreasureReward: 1301,
        Window_LimitGiftTip: 1302,
        Window_FortuneCatBuy: 1303,
        Window_TreasureBatchCompound: 1304,
        Panel_DemonTreasure: 1305,
        Window_DemonTreasureRewardPreview: 1306,
        Window_MaterailInfo: 1310,
        Window_MaterialVipTips: 1311,
        Window_MaterialResetTips: 1312,
        Window_GemSkillList: 1313,
        Window_TreasureStarUpTips: 1437,
        Panel_AncientCorridor: 1320,
        Window_AncientCorridorRank: 1321,
        Window_HeavenTurntableTask: 1331,
        Window_HavingTurntableTask: 1332,
        Panel_Dipper: 1323,
        Window_DipperReward: 1324,
        Window_SimpleCostTips: 1325,
        Window_ActivateActivityToken: 1333,
        Window_ActivityTokenPointBuy: 1334,
        Panel_WonderlandAdventure: 1322,
        Window_WonderlandChallenge: 1326,
        Window_WonderlandExplore: 1327,
        Window_WonderlandQuickExplore: 1328,
        Window_WonderlandChooseHero: 1329,
        Window_WonderlandOneKey: 1330,
        Panel_CrossArenaHome: 1340,
        Window_CrossArenaReward: 1341,
        Window_CrossArenaRank: 1342,
        Panel_CrossArenaChallenge: 1343,
        Window_CrossArenaRankRaise: 1344,
        Window_CrossArenaReport: 1345,
        Panel_CrossArenaHall: 1346,
        Window_CrossArenaTips: 1347,
        Window_IntensifyTips: 1348,
        Window_NationBeastInspire: 1349,
        Panel_NationBeast: 1350,
        Window_NationBeastFence: 1351,
        Panel_NationBeastReward: 1352,
        Panel_NewServerCarnivalActivity: 1353,
        Panel_HeroArtifactInfo: 1354,
        Panel_ArtifactReplace: 1355,
        Window_HeroArtifactInfoTips: 1356,
        Window_TechnologyTips: 1360,
        Panel_AwyGift: 1370,
        Window_CollectWordExchange: 1371,
        Window_ActivityBuy: 1372,
        Panel_ArtifactExtract: 1373,
        Window_ArtifactSelectHero: 1374,
        Window_ArtifactManual: 1377,
        Panel_TowerMaster: 1375,
        Window_TowerMasterReward: 1376,
        Panel_RareTreasure: 1380,
        Window_RareTreasureShop: 1381,
        Window_RareTreasureCrystalGet: 1382,
        Window_RareTreasureInput: 1383,
        Window_RareTreasureAutoInput: 1384,
        Window_RareTreasurePresiouRecords: 1385,
        Window_RareTreasureMyRecords: 1386,
        Window_NationWarInMatch: 1387,
        Window_NationWarReward: 1388,
        Window_ChallengeMonsterRank: 1389,
        Window_ChallengeMonsterBuy: 1390,
        Panel_ActivityBaoZhu: 1391,
        Window_BaoZhuGet: 1392,
        Window_SuperVIP: 1393,
        Panel_HeroRepay: 1394,
        Panel_CumulateGift: 1395,
        Window_MonthCardRenewal: 1396,
        Window_ActivityOpenUp: 1400,
        Panel_BabelHeroReplace: 1401,
        Window_BabelSelect: 1402,
        Panel_Babel: 1403,
        Window_BabelRank: 1404,
        Panel_CollectHeros: 1410,
        Window_ObtainWay2: 1411,
        Panel_TitleView: 1415,
        Panel_CrossCup: 1420,
        Window_CrossCupRankReward: 1421,
        Window_CrossCupRank: 1422,
        Window_CrossCupBattleDetail: 1423,
        Window_CrossCupBet: 1424,
        Window_CrossCupChangePos: 1425,
        Window_CrossCupGuess: 1426,
        Panel_GodEquipGacha: 1430,
        Window_GodEquipRewardsWindow: 1431,
        Window_TicketsWindow: 1432,
        Window_FerroTurntableTask: 1433,
        Panel_TimeLimitGacha: 1434,
        Window_RewardsRankWindow: 1435,
        Window_BoxWindow: 1436,
        Window_TicketsGetWindow: 1450,
        Panel_Monopoly: 1451,
        Window_MonopolyExchange: 1452,
        Window_MonopolyProgress: 1453,
        Window_MonopolyTask: 1454,
        Panel_Festival: 1455,
        Window_FestivalExchange: 1456,
        Window_FestivalWords: 1457,
        Window_CommonTask: 1460,
        Panel_DoubleDrop: 1461,
        Window_BlackList: 1462,
        Panel_NationDuel: 1500,
        Window_NationDuelPointReward: 1501,
        Window_NationDuelRank: 1502,
        Panel_NationDuelAppoint: 1503,
        Window_NationDuelCampDetail: 1504,
        Panel_NationDuelCampVs: 1505,
        Window_NationDuelBattleCompare: 1506,
        Window_NationDuelTopRank: 1507,
        Panel_LegendMain: 1550,
        Panel_Legend: 1551,
        Panel_LegendGodRank: 1552,
        Window_LegendMatch: 1553,
        Panel_LegendShop: 1554,
        Window_LegendAdmire: 1555,
        Window_LegendSeasonSelect: 1556,
        Window_LegendSeasonRank: 1557,
        Window_LegendSeasonReward: 1558,
        Window_LegendRank100: 1559,
        Window_LegendRankPreview: 1560,
        Window_LegendSelfReport: 1561,
        Window_LegendAutoReport: 1562,
        Window_LegendTopReport: 1563,
        Window_LegendSelectTimes: 1564,
        Window_LegendSecionChange: 1565,
        Window_LegendBoxWindow: 1566,
        Window_LegendSeasonDanChange: 1567,
        Panel_SpiritBag: 1600,
        Panel_SpiritReplace: 1601,
        Panel_SpiritInfo: 1602,
        Panel_SpiritUp: 1603,
        Window_OneKeyUpSpirit: 1604,
        Window_SpiritSkillList: 1605,
        Window_SpiritInfoTips: 1606,
        Window_SpiritTalent: 1607,
        Window_SpiritTalentUp: 1608,
        Window_SpiritTalentShow: 1609,
        Window_SpiritstarUpTips: 1610,
        Window_QuickHunt: 1618,
        Window_TurnTableQuickExact: 1619,
        Panel_CustonGift: 1620,
        Window_CustonGiftPool: 1621,
        Window_ChallengeHerolWords: 1622,
        Panel_EightDiagrams: 1630,
        Window_EightDiagramsRank: 1631,
        Window_EightDiagramsReward: 1632,
        Window_CommonCostTip: 1640,
        Panel_GoldHeroBuyBack: 1641,
        Window_GoldHeroActive: 1642,
        Window_GoldHeroActive2: 1643,
        Panel_SoulLink: 1645,
        Panel_PetMain: 1650,
        Panel_PetUp: 1651,
        Panel_PetHatch: 1652,
        Panel_PetBag: 1653,
        Panel_PetStation: 1655,
        Window_PetStationPreview: 1656,
        Window_PetHatchAccTip: 1657,
        Window_PetVipCard: 1658,
        Window_PetHatchSelect: 1659,
        Window_PetHatchSuccess: 1660,
        Panel_PetBagChangePet: 1661,
        Window_PetInfo: 1662,
        Window_PetStarUpSuccess: 1663,
        Window_PetRefine: 1664,
        Window_PetRefineSuccess: 1665,
        Panel_PetInfo: 1666,
        Panel_MazeMain: 1680,
        Panel_MazePVE: 1681,
        Panel_MazePVP: 1682,
        Window_MazeSkillBag: 1683,
        Window_MazeSkillChoose: 1684,
        Window_MazeHeroInit: 1685,
        Window_MazeSetUp: 1686,
        Window_MazeRank: 1688,
        Window_MazeRewards: 1689,
        Window_MazeReports: 1690,
        Window_MazeItemUse: 1691,
        Window_MazeHeroBag: 1692,
        Window_MazeCompare: 1693,
        Window_MazeChallengeDetail: 1694,
        Window_MazeHeroChoose: 1695,
        Window_MazeSkillChoose2: 1696,
        Panel_PetExchange: 1700,
        Panel_DiamondRebate: 1701,
        Panel_RichmanPlan: 1702,
        Window_RichmanPlanTask: 1703,
        Window_PreferentialGift: 1704,
        Panel_CustomGiftPanel2: 1705,
        Window_CustomGiftSelect2: 1706,
        Panel_GodPetsFeedback: 1707,
        Panel_ChessMain: 1710,
        Window_ChessRank: 1711,
        Window_ChessGradeReward: 1712,
        Panel_ChessPrepare: 1713,
        Window_ChessTip: 1714,
        Window_ChessTipCopy: 1715,
        Panel_BirdBridgeMeet: 1720,
        Panel_BirdBridgeHelp: 1721,
        Panel_MatchMakerBless: 1722,
        Window_BBFateRank: 1723,
        Window_BBCharmRank: 1724,
        Node_PushNewBBMeet: 1725,
        Panel_DivinePosMain: 1730,
        Window_DivinePosUpgrade: 1731,
        Window_DivinePosDetail: 1732,
        Window_DivinePosChange: 1733,
        Window_DivinePosPreview: 1734,
        Panel_AuctionMain: 1726,
        Window_AuctionLog: 1727,
        Window_AuctionTip: 1728,
        Panel_ScuffleYamaMain: 1740,
        Window_ScuffleYamaRob: 1741,
        Window_ScuffleYamaRewardPreview: 1742,
        Window_ScuffleYamaPushAllRewards: 1743,
        Window_ScuffleYamaGetRewards: 1744,
        Window_HeroOneKeyStartUp: 1745,
        Panel_CampConvert: 1746,
        Window_HalloweenTask: 1747,
        Panel_Double11Kill: 1748,
        Window_Double11Preview: 1749,
        Window_Double11Integral: 1752,
        Window_ScuffleYamaRankRecord: 1753,
        Window_PveCopyBible: 1760,
        Window_PveCopyBibleGate: 1761,
        Window_SweepRewardTotal: 1762,
        Window_OneKeySweep: 1763,
        Window_SweepRewardSingle: 1764,
        Panel_EvilGodMain: 1765,
        Panel_EvilGodGateBoss: 1766,
        Window_EvilGodRank: 1767,
        Window_EvilGodBattleResults: 1768,
        Window_MoxieGetRewards: 1770,
        Window_MoxieVedioAds: 1771,
        Window_MoxieRedPacket: 1772,
        Window_MoxieRedPacketTip: 1773,
        Window_MoxieRechargeGuide: 1774,
        Window_MoxieOnlineService: 1775,
        Window_HeroArtifactSkill: 1776,
        Panel_GodHeroManual: 1777,
        Window_GodHeroManual: 1778,
        Window_ImmortalSpirit: 1779,
        Panel_TeamCopy2PMain: 1780,
        Window_TeamCopy2PCreate: 1781,
        Window_TeamCopy2PPassWord: 1782,
        Window_TeamCopy2PFirstRewards: 1783,
        Window_HeroFieldSucc: 1790,
        Window_HeroFieldInfo: 1791,
        Panel_HeroArtifactInfoMax: 1792,
        Panel_CattleTurntableAll: 1793,
        Window_CattleResult: 1794,
        Window_CattleRewards: 1795,
        Panel_ExamMain: 1796,
        Window_ExamRankRecord: 1797,
        Window_ExamBeastInput: 1798,
        Window_ExamBeastRank: 1799,
        Window_ExamBeastBox: 1800,
        Window_SingleCattleRewards: 1801,
        Window_SySuperVIP: 1802,
        Window_SyFollow: 1803,
        Window_EquipBreakoutSkillList: 1804,
        Window_EquipBreakoutUp: 1805,
        Window_TreasureBreakoutSkillList: 1806,
        Window_TreasureEvolveChoose: 1807,
        Window_TreasureBreakoutUp: 1808,
        Window_GoodsVipTips: 1809,
        Window_WonderlandGradeUp: 1810,
        Window_RewardPreview_Copy: 1811,
        Window_HappyTogetherPreview: 1812,
        Window_EatCakePreview: 1813,
        Panel_FightActivity_Copy: 1814,
        Window_ZnqUsreFireWorks: 1815,
        Panel_OneStepComplete: 1816,
        Window_PrioritySelect: 1817,
        Window_OSCLog: 1818,
        Window_TeamCopy2PReward: 1819,
        Window_QQColorSign: 1820,
        Window_GodSalariesAdvance: 1821,
        Window_Inherit: 1822,
        Window_SPIRITTALENT_UPLEVEL: 1823,
        Window_HeroMaterialSelect: 1824,
        Window_OneKeyBlessSpirit: 1825,
        Panel_Spilit_Select: 1826,
        Window_SpiritTalent_copy: 1827,
        Window_MobilePointExchange: 1828,
        Panel_MovingIntegral: 1829,
        Window_HeroTalentSkillList: 1830,
        Window_CattleIntegralReward: 1831,
        Window_HeroGodLevelSucc: 1832,
        Panel_PVP_FIGHT: 2e3,
        Panel_Test3DModel: 9998,
        Window_addItemAdmin: 9999
    };

     /**
     * 界面配置
     */
      public static ViewConf = 
      {
            1: {
                prefab: "prefab/Home/HomePage",
                layer:ViewConst.LayerType.popupLayer,
                module: "HomePage",
                switchIndex: 1,
                isKeep: !0
            },
            2: {
                prefab: "prefab/Mail/MailWindow",
                module: "MailWindow"
            },
            3: {
                prefab: "prefab/Mail/MailDetailWindow",
                module: "MailDetailWindow"
            },
            4: {
                prefab: "prefab/CommonView/getRewardWindow",
                module: "GetRewardWindow"
            },
            5: {
                prefab: "prefab/MainPanel/mainPanel",
                module: "MainPanel",
                switchIndex: 1,
                isKeep: !0
            },
            6: {
                prefab: "prefab/Bag/BagPanel",
                module: "BagPanel"
            },
            7: {
                prefab: "prefab/Arena/ArenaPanel",
                module: "ArenaPanel",
                bg: "resources/UI/JJC_jingjichang/JJC_jjcbg.jpg",
                switchIndex: 6
            },
            8: {
                prefab: "prefab/BattleArray/BattleCompareWindow",
                module: "BattleCompareWindow"
            },
            9: {
                prefab: "prefab/BattleArray/BattleArrayView",
                module: "BattleArrayView",
                bg: "resources/UI/YXJM_yingxiongjiemian/YXJM_yingxiongbeijing.png",
                switchIndex: 2
            },
            14: {
                prefab: "prefab/Activity/ActivityMainPanel",
                module: "ActivityMainPanel",
                bg: "resources/UI/Activity/huodong_gy/hd_czjh_beijing.png",
                switchIndex: 1
            },
            16: {
                prefab: "prefab/PopView/AddSubConfirmWindow",
                module: "AddSubConfirmWindow"
            },
            17: {
                prefab: "prefab/PopView/ConfirmTipWindow",
                module: "ConfirmTipWindow"
            },
            20: {
                prefab: "prefab/CommonView/ItemOperateWindow",
                module: "ItemOperateWindow"
            },
            30: {
                prefab: "prefab/PopView/ConfirmBroadcastTipWindow",
                module: "ConfirmBroadcastTipWindow"
            },
            33: {
                prefab: "prefab/BattleArray/MercenaryChangePosView",
                module: "MercenaryChangePosView"
            },
            43: {
                prefab: "prefab/Arena/ArenaRuleWindow",
                module: "ArenaRuleWindow"
            },
            44: {
                prefab: "prefab/Arena/ArenaReportWindow",
                module: "ArenaReportWindow"
            },
            45: {
                prefab: "prefab/Arena/ArenaRecordWindow",
                module: "ArenaRecordWindow"
            },
            50: {
                prefab: "prefab/PveCopy/PveGeneralChapterPanel",
                module: "PveGeneralChapterPanel",
                switchIndex: 5,
                isKeep: !0
            },
            51: {
                prefab: "prefab/PveCopy/PveCopyGateWindow",
                module: "PveCopyGateWindow",
                switchIndex: 5
            },
            52: {
                prefab: "prefab/PveCopy/PveQuickGainWindow",
                module: "PveQuickGainWindow"
            },
            53: {
                prefab: "prefab/PopView/RewardPreviewWindow",
                module: "RewardPreviewWindow"
            },
            54: {
                prefab: "prefab/PveCopy/SweepRewardDisplayWindow",
                module: "SweepRewardDisplayWindow"
            },
            55: {
                prefab: "prefab/PveCopy/PveResultWindow",
                module: "PveResultWindow"
            },
            56: {
                prefab: "prefab/PveCopy/PveGateRewardWindow",
                module: "PveGateRewardWindow"
            },
            60: {
                prefab: "prefab/Player/PlayerUpLevelWindow",
                module: "PlayerUpLevelWindow"
            },
            61: {
                prefab: "prefab/Chat/NewChatWindow",
                module: "NewChatWindow"
            },
            62: {
                prefab: "prefab/PopView/BuyTimesWindow",
                module: "BuyTimesWindow"
            },
            63: {
                prefab: "prefab/Setting/PlayerInfoWindow",
                module: "PlayerInfoWindow"
            },
            64: {
                prefab: "prefab/Setting/SoundSettingWindow",
                module: "SoundSettingWindow"
            },
            65: {
                prefab: "prefab/Setting/ModifyNameWindow",
                module: "ModifyUserNameWindow"
            },
            80: {
                prefab: "prefab/Bag/SelectRewardWindow",
                module: "SelectRewardWindow"
            },
            90: {
                prefab: "prefab/task/TaskView",
                module: "TaskView",
                switchIndex: 1
            },
            91: {
                prefab: "prefab/CommonView/AwardBoxPreviewWindow",
                module: "AwardBoxPreviewWindow"
            },
            96: {
                prefab: "prefab/BattleArray/BattleFriendView",
                module: "BattleFriendView",
                switchIndex: 2
            },
            97: {
                prefab: "prefab/BattleArray/SelectFriendWindow",
                module: "SelectFriendWindow"
            },
            98: {
                prefab: "prefab/BattleArray/FriendShowAllWindow",
                module: "FriendShowAllWindow"
            },
            100: {
                prefab: "prefab/Gemstone/GemstonePanel",
                module: "GemstonePanel",
                switchIndex: 2
            },
            101: {
                prefab: "prefab/Gemstone/GemstoneOperatePanel",
                module: "GemstoneOperatePanel"
            },
            102: {
                prefab: "prefab/Gemstone/GemAdvanceSuccess",
                module: "GemstoneAdvanceSuccess"
            },
            103: {
                prefab: "prefab/Gemstone/GemstoneDegradePanel",
                module: "GemstoneDegradePanel"
            },
            104: {
                prefab: "prefab/Gemstone/GemstoneResetPanel",
                module: "GemstoneAdvanceResetPanel"
            },
            105: {
                prefab: "prefab/HuntTreasure/HuntTreasurePanel",
                module: "HuntTreasurePanel",
                switchIndex: 6
            },
            106: {
                prefab: "prefab/Gemstone/GemReplacePanel",
                module: "GemReplacePanel"
            },
            107: {
                prefab: "prefab/Gemstone/GemInfoTipsWindow",
                module: "GemInfoTipsWindow"
            },
            108: {
                prefab: "prefab/HuntTreasure/SoulRefineScoreExchangeWindow",
                module: "SoulRefineScoreExchangeWindow"
            },
            110: {
                prefab: "prefab/Nation/NationMainView",
                module: "NationMainPanel"
            },
            111: {
                prefab: "prefab/Nation/NationAddView",
                module: "NationAddView"
            },
            112: {
                prefab: "prefab/Nation/NationManagerWindow",
                module: "NationManagerWindow"
            },
            113: {
                prefab: "prefab/Nation/NationNoticeWindow",
                module: "NationNoticeWindow"
            },
            114: {
                prefab: "prefab/Nation/NationModifyFlagWindow",
                module: "NationModifyFlagWindow"
            },
            115: {
                prefab: "prefab/Nation/NationModifyNameWindow",
                module: "NationModifyNameWindow"
            },
            116: {
                prefab: "prefab/Nation/NationCheckDetailWindow",
                module: "NationCheckDetailWindow"
            },
            117: {
                prefab: "prefab/Nation/NationSettingWindow",
                module: "NationSettingWindow"
            },
            118: {
                prefab: "prefab/Nation/NationApplyWindow",
                module: "NationApplyWindow"
            },
            119: {
                prefab: "prefab/Arena/ArenaRankWindow",
                module: "ArenaRankWindow"
            },
            120: {
                prefab: "prefab/Nation/NationRankWindow",
                module: "NationRankWindow"
            },
            121: {
                prefab: "prefab/Equip/EquipGrowSuccView",
                module: "EquipGrowSuccView"
            },
            130: {
                prefab: "prefab/WorldBoss/WorldBossSweepTipWindow",
                module: "WorldBossSweepTipWindow"
            },
            131: {
                prefab: "prefab/WorldBoss/WorldBossView",
                module: "WorldBossView",
                switchIndex: 6
            },
            132: {
                prefab: "prefab/WorldBoss/WorldBossInspireWindow",
                module: "WorldBossInspireWindow"
            },
            133: {
                prefab: "prefab/WorldBoss/WorldBossShowRewardWindow",
                module: "WorldBossShowRewardWindow"
            },
            134: {
                prefab: "prefab/WorldBoss/WorldBossOpenTip",
                module: "WorldBossOpenTip"
            },
            135: {
                prefab: "prefab/Nation/NationTechnologyView",
                module: "NationTechnologyView"
            },
            136: {
                prefab: "prefab/Nation/NationTecOperationWindow",
                module: "NationTecOperationWindow"
            },
            137: {
                prefab: "prefab/Nation/NationTechnologyRankWindow",
                module: "NationTechnologyRankWindow"
            },
            140: {
                prefab: "prefab/MoTa/MagicTowerPanel",
                module: "MagicTowerPanel",
                switchIndex: 6
            },
            141: {
                prefab: "prefab/MoTa/FloorDetailInfoWindow",
                module: "FloorDetailInfoWindow"
            },
            142: {
                prefab: "prefab/MoTa/MagicTowerRankWindow",
                module: "MagicTowerRankWindow"
            },
            143: {
                prefab: "prefab/MoTa/MTowerRewardPreviewWindow",
                module: "MTowerRewardPreviewWindow"
            },
            144: {
                prefab: "prefab/MoTa/MTDifficultyChooseWindow",
                module: "MTDifficultyChooseWindow"
            },
            146: {
                prefab: "prefab/NationBoss/NationBossPanel",
                module: "NationBossPanel"
            },
            147: {
                prefab: "prefab/NationBoss/NationBossRankWindow",
                module: "NationBossRankWindow"
            },
            148: {
                prefab: "prefab/NationBoss/NationBossRewardWindow",
                module: "NationBossRewardWindow"
            },
            160: {
                prefab: "prefab/NationWar/NationWarCityView",
                module: "NationWarCityView"
            },
            161: {
                prefab: "prefab/NationWar/NationWarDetailWindow",
                module: "NationWarDetailWindow"
            },
            162: {
                prefab: "prefab/NationWar/NationWarRankWindow",
                module: "NationWarRankWindow"
            },
            163: {
                prefab: "prefab/NationWar/NationWarAttakDetailView",
                module: "NationWarAttakDetailView"
            },
            164: {
                prefab: "prefab/NationWar/NationWarCityWallView",
                module: "NationWarCityWallView"
            },
            165: {
                prefab: "prefab/NationWar/NationWarDefendView",
                module: "NationWarDefendView"
            },
            166: {
                prefab: "prefab/Pvp/PvpFightMainView",
                module: "PvpFightMainView"
            },
            1677: {
                prefab: "prefab/Nation/NationCreateTipsWindow",
                module: "NationCreateTipsWindow"
            },
            168: {
                prefab: "prefab/Compose/DeComposeSelectView",
                module: "DeComposeSelectView"
            },
            171: {
                prefab: "prefab/KillDragon/KDCivilPanel",
                module: "CivilKillDragonPanel",
                switchIndex: 6
            },
            174: {
                prefab: "prefab/KillDragon/KDRewardWindow",
                module: "KDRewardWindow"
            },
            175: {
                prefab: "prefab/KillDragon/KDCivilKillRewardWindow",
                module: "KDCivilKillRewardWindow"
            },
            176: {
                prefab: "prefab/KillDragon/KDCivilChallengeResultWindow",
                module: "CivilKDChallengeResultWindow"
            },
            185: {
                prefab: "prefab/AdventureEntry/AdventureEntryView",
                module: "AdventureEntryView",
                switchIndex: 6
            },
            187: {
                prefab: "prefab/Nation/NationMemberList",
                module: "NationMemberList"
            },
            188: {
                prefab: "prefab/Nation/NationDonationView",
                module: "NationDonationView"
            },
            194: {
                prefab: "prefab/Manual/ManualPanel",
                module: "ManualPanel"
            },
            195: {
                prefab: "prefab/Manual/CollectRewardWindow",
                module: "CollectRewardWindow"
            },
            214: {
                prefab: "prefab/PopView/HelpWindow",
                module: "HelpWindow"
            },
            300: {
                prefab: "prefab/MaterailCopy/MaterialInspireWindow",
                module: "MaterialInspireWindow"
            },
            1000: {
                prefab: "prefab/Pve/PveFightHookPanel",
                module: "PveFightHookPanel",
                switchIndex: 3,
                isKeep: !0
            },
            1001: {
                prefab: "prefab/Battle/PvpBattleResultWindow",
                module: "PvpBattleResultWindow"
            },
            1002: {
                prefab: "prefab/BattleArray/HeroExtraAttributeView",
                module: "HeroExtraAttributeView"
            },
            1003: {
                prefab: "prefab/BattleArray/RestrainRuleWindow",
                module: "RestrainRuleWindow"
            },
            1004: {
                prefab: "prefab/BattleArray/MercenaryAttrDetailWindow",
                module: "MercenaryAttrDetailWindow"
            },
            1005: {
                prefab: "prefab/MaterailCopy/MaterailListPanel",
                module: "MaterailListPanel",
                switchIndex: 4,
                isKeep: !0
            },
            1006: {
                prefab: "prefab/MaterailCopy/MaterialPanel",
                module: "MaterialPanel"
            },
            1007: {
                prefab: "prefab/Technology/TechnologyPanel",
                module: "TechnologyPanel",
                switchIndex: 1
            },
            1008: {
                prefab: "prefab/Pve/PveFightPanel",
                module: "PveFightPanel"
            },
            1009: {
                prefab: "prefab/TeamOnlineTD/TOTFightPanel",
                module: "TOTFightPanel"
            },
            1011: {
                prefab: "prefab/Setting/AvatarShowSettingPanel",
                module: "AvatarShowSettingPanel"
            },
            1020: {
                prefab: "prefab/Treasure/TreasureReplacePanel",
                module: "TreasureReplacePanel"
            },
            1021: {
                prefab: "prefab/Treasure/TreasureFragmentSlePanel",
                module: "TreasureFragmentSlePanel"
            },
            1022: {
                prefab: "prefab/Treasure/TreasureUpPanel",
                module: "TreasureUpPanel"
            },
            1023: {
                prefab: "prefab/Treasure/TreasureInfoPanel",
                module: "TreasureInfoPanel"
            },
            1024: {
                prefab: "prefab/Treasure/TreasureTipsPanel",
                module: "TreasureTipsPanel"
            },
            1025: {
                prefab: "prefab/Treasure/TreasureRobListPanel",
                module: "TreasureRobListPanel",
                switchIndex: 6
            },
            1026: {
                prefab: "prefab/Treasure/TreasureAvoidWarWindow",
                module: "TreasureAvoidWarWindow"
            },
            1027: {
                prefab: "prefab/Treasure/TreasureSkillListWindow",
                module: "TreasureSkillListWindow"
            },
            1028: {
                prefab: "prefab/Treasure/TreasureEvolveSkillListWindow",
                module: "TreasureEvolveSkillListWindow"
            },
            1029: {
                prefab: "prefab/Treasure/TreasureBagPanel",
                module: "TreasureBagPanel"
            },
            1030: {
                prefab: "prefab/Hero/HeroReplacePanel",
                module: "HeroReplacePanel"
            },
            1031: {
                prefab: "prefab/Hero/HeroBagPanel",
                module: "HeroBagPanel",
                switchIndex: 1
            },
            1032: {
                prefab: "prefab/Hero/HeroInfoPanel",
                module: "HeroInfoPanel"
            },
            1033: {
                prefab: "prefab/Hero/HeroUpPanel",
                module: "HeroUpPanel",
                switchIndex: 2
            },
            1034: {
                prefab: "prefab/Treasure/TreasureReportWindow",
                module: "TreasureReportWindow"
            },
            1035: {
                prefab: "prefab/Hero/HeroCultivateSkillListWindow",
                module: "HeroCultivateSkillListWindow"
            },
            1040: {
                prefab: "prefab/CommonView/ObtainWayWindow",
                module: "ObtainWayWindow"
            },
            1041: {
                prefab: "prefab/CommonView/ItemUseBuyWindow",
                module: "ItemUseBuyWindow"
            },
            1042: {
                prefab: "prefab/Treasure/TreasureHuntConfirmWindow",
                module: "TreasureHuntConfirmWindow"
            },
            1043: {
                prefab: "prefab/Equip/EquiptReplacePanel",
                module: "EquiptReplacePanel"
            },
            1044: {
                prefab: "prefab/Equip/EquipInfoPanel",
                module: "EquipInfoPanel"
            },
            1045: {
                prefab: "prefab/Equip/EquipUpPanel",
                module: "EquipUpPanel",
                switchIndex: 2
            },
            1046: {
                prefab: "prefab/Equip/EquipEvolveTipsWindow",
                module: "EquipEvolveTipsWindow"
            },
            1047: {
                prefab: "prefab/Equip/EquipBagPanel",
                module: "EquipBagPanel",
                switchIndex: 1
            },
            1048: {
                prefab: "prefab/Equip/EquipSkillListWindow",
                module: "EquipSkillListWindow"
            },
            1049: {
                prefab: "prefab/CommonView/ResonanceWindow",
                module: "ResonanceWindow"
            },
            1050: {
                prefab: "prefab/Hero/HeroComposeTipsWindow",
                module: "HeroComposeTipsWindow"
            },
            1051: {
                prefab: "prefab/Hero/HeroCultivateSuccWindow",
                module: "HeroCultivateSuccWindow"
            },
            1052: {
                prefab: "prefab/Hero/HeroRuneTipsWindow",
                module: "HeroRuneTipsWindow"
            },
            1053: {
                prefab: "prefab/Equip/ResonanceInfoWindow",
                module: "ResonanceInfoWindow"
            },
            1054: {
                prefab: "prefab/Hero/HeroEvolveSuccWindow",
                module: "HeroEvolveSuccWindow"
            },
            1055: {
                prefab: "prefab/Hero/HeroEvolvePreviewWindow",
                module: "HeroEvolvePreviewWindow"
            },
            1056: {
                prefab: "prefab/Hero/HeroInfoTipsWindow",
                module: "HeroInfoTipsWindow"
            },
            1057: {
                prefab: "prefab/Equip/EquipInfoTipsWindow",
                module: "EquipInfoTipsWindow"
            },
            1058: {
                prefab: "prefab/Treasure/TreasureInfoTipsWindow",
                module: "TreasureInfoTipsWindow"
            },
            1274: {
                prefab: "prefab/Treasure/TreasureFightReportWindow",
                module: "TreasureFightReportWindow"
            },
            1059: {
                prefab: "prefab/Bag/BagInfoTipsWindow",
                module: "BagInfoTipsWindow"
            },
            1060: {
                prefab: "prefab/PveCopy/PveCopyGateChallengeWindow",
                module: "PveCopyGateChallengeWindow"
            },
            1061: {
                prefab: "prefab/Smelt/EquiptSelectPanel",
                module: "EquiptSelectPanel"
            },
            1062: {
                prefab: "prefab/Smelt/SmeltPanel",
                module: "SmeltPanel"
            },
            1080: {
                prefab: "prefab/Smelt/SmeltHome",
                module: "SmeltHome"
            },
            1063: {
                prefab: "prefab/DestroyTemple/DestroyTemplePanel",
                module: "DestroyTemplePanel",
                switchIndex: 6
            },
            1064: {
                prefab: "prefab/DestroyTemple/DestroyTempleRewardWindow",
                module: "DestroyTempleRewardWindow"
            },
            1065: {
                prefab: "prefab/DestroyTemple/DestroyTempleRankWindow",
                module: "DestroyTempleRankWindow"
            },
            1066: {
                prefab: "prefab/DestroyTemple/ChallengeBossWindow",
                module: "ChallengeBossWindow"
            },
            1067: {
                prefab: "prefab/Smelt/OneKeySmeltWindow",
                module: "OneKeySmeltWindow"
            },
            1068: {
                prefab: "prefab/DestroyTemple/ResetTipsWindow",
                module: "ResetTipsWindow"
            },
            1069: {
                prefab: "prefab/DestroyTemple/DestroyTempleReportWindow",
                module: "DestroyTempleReportWindow"
            },
            1070: {
                prefab: "prefab/Player/FunctionPreviewWindow",
                module: "FunctionPreviewWindow"
            },
            1071: {
                prefab: "prefab/MagicRecord/MagicRecordPanel",
                module: "MagicRecordPanel",
                switchIndex: 4
            },
            1072: {
                prefab: "prefab/MagicRecord/MagicRecordRewardWindow",
                module: "MagicRecordRewardWindow"
            },
            1073: {
                prefab: "prefab/Shop/ShopHomeWindow",
                module: "ShopHomeWindow"
            },
            1074: {
                prefab: "prefab/Shop/ShopType1Panel",
                module: "ShopType1Panel"
            },
            1075: {
                prefab: "prefab/Shop/ShopFreshTipsWindow",
                module: "ShopFreshTipsWindow"
            },
            1076: {
                prefab: "prefab/Player/NewSystemOpenWindow",
                module: "NewSystemOpenWindow"
            },
            1077: {
                prefab: "prefab/DestroyTemple/DestroyTempleInspireWindow",
                module: "DestroyTempleInspireWindow"
            },
            1078: {
                prefab: "prefab/Gacha/GachaPanel",
                module: "GachaPanel",
                switchIndex: 1
            },
            1079: {
                prefab: "prefab/Gacha/ScoreGachaWindow",
                module: "ScoreGachaWindow"
            },
            1082: {
                prefab: "prefab/Gacha/GachaRewardPanel",
                module: "GachaRewardPanel"
            },
            1083: {
                prefab: "prefab/Gacha/GachaShowWindow",
                module: "GachaShowWindow"
            },
            1084: {
                prefab: "prefab/Roam/RoamPanel",
                module: "RoamPanel",
                switchIndex: 6
            },
            1085: {
                prefab: "prefab/Roam/RoamRewardWindow",
                module: "RoamRewardWindow"
            },
            1086: {
                prefab: "prefab/CommonView/AboreWindow",
                module: "AboreWindow"
            },
            1087: {
                prefab: "prefab/Pagoda/PagodaPanel",
                module: "PagodaPanel",
                switchIndex: 6
            },
            1088: {
                prefab: "prefab/Pagoda/PagodaRankWindow",
                module: "PagodaRankWindow"
            },
            1089: {
                prefab: "prefab/Pagoda/PagodaSweepReportWindow",
                module: "PagodaSweepReportWindow"
            },
            1090: {
                prefab: "prefab/Rank/RankPanel",
                module: "RankPanel",
                switchIndex: 1
            },
            1091: {
                prefab: "prefab/Rank/TopRankPanel",
                module: "TopRankPanel",
                switchIndex: 1
            },
            1092: {
                prefab: "prefab/BattleArray/OtherBattleArrayWindow",
                module: "OtherBattleArrayWindow"
            },
            1093: {
                prefab: "prefab/BattleArray/OtherBattleFriendWindow",
                module: "OtherBattleFriendWindow"
            },
            1094: {
                prefab: "prefab/BattleArray/OtherBattleGemWindow",
                module: "OtherBattleGemWindow"
            },
            1095: {
                prefab: "prefab/CommonView/OpreateTimesWindow",
                module: "OpreateTimesWindow"
            },
            1097: {
                prefab: "prefab/MagicRecord/MagicRecordPreviewWindow",
                module: "MagicRecordPreviewWindow"
            },
            1099: {
                prefab: "prefab/Smelt/RebirthSelectPanel",
                module: "RebirthSelectPanel"
            },
            1100: {
                prefab: "prefab/Activity/TreasureGiftTaskWindow",
                module: "TreasureGiftTaskWindow"
            },
            1101: {
                prefab: "prefab/Activity/TreasureGiftRewardWindow",
                module: "TreasureGiftRewardWindow"
            },
            1102: {
                prefab: "prefab/Activity/LuckyShopPanel",
                module: "LuckyShopPanel"
            },
            1103: {
                prefab: "prefab/Activity/LuckyRankWindow",
                module: "LuckyRankWindow"
            },
            1104: {
                prefab: "prefab/Activity/MultipleFirstRechargeWindow",
                module: "MultipleFirstRechargeWindow"
            },
            1105: {
                prefab: "prefab/Activity/VipPrivilegeWindow",
                module: "VipPrivilegeWindow"
            },
            1106: {
                prefab: "prefab/Activity/MoneyPennyWindow",
                module: "MoneyPennyWindow"
            },
            1107: {
                prefab: "prefab/Activity/SuperGiftWindow",
                module: "SuperGiftWindow"
            },
            1110: {
                prefab: "prefab/StarUpRoad/StarUpRoadItemWindow",
                module: "StarUpRoadItemWindow"
            },
            1111: {
                prefab: "prefab/StarUpRoad/StarUpRoadPanel",
                module: "StarUpRoadPanel",
                switchIndex: 6
            },
            1112: {
                prefab: "prefab/StarUpRoad/StarUpRoadResetTipsWindow",
                module: "StarUpRoadResetTipsWindow"
            },
            1113: {
                prefab: "prefab/StarUpRoad/StarUpRoadRewardWindow",
                module: "StarUpRoadRewardWindow"
            },
            1114: {
                prefab: "prefab/StarUpRoad/StarUpRoadVipTipsWindow",
                module: "StarUpRoadVipTipsWindow"
            },
            1115: {
                prefab: "prefab/Bag/RuneResolveWindow",
                module: "RuneResolveWindow"
            },
            1116: {
                prefab: "prefab/Bag/RuneResolveTipsWindow",
                module: "RuneResolveTipsWindow"
            },
            1117: {
                prefab: "prefab/Shop/ShopBuyWindow",
                module: "ShopBuyWindow"
            },
            1118: {
                prefab: "prefab/Activity/VipShopBuyWindow",
                module: "VipShopBuyWindow"
            },
            1119: {
                prefab: "prefab/Friend/FriendDetailWindow",
                module: "FriendDetailWindow"
            },
            1120: {
                prefab: "prefab/Friend/FriendPanel",
                module: "FriendPanel"
            },
            1121: {
                prefab: "prefab/Friend/FriendRecommendWindow",
                module: "FriendRecommendWindow"
            },
            1122: {
                prefab: "prefab/Friend/FriendFindWindow",
                module: "FriendFindWindow"
            },
            1123: {
                prefab: "prefab/Immortal/ImmortalPanel",
                module: "ImmortalPanel",
                switchIndex: 1
            },
            1124: {
                prefab: "prefab/Immortal/ImmortalRewardWindow",
                module: "ImmortalRewardWindow"
            },
            1125: {
                prefab: "prefab/Immortal/ImmortalEventWindow",
                module: "ImmortalEventWindow"
            },
            1126: {
                prefab: "prefab/Immortal/ImmortalRecordWindow",
                module: "ImmortalRecordWindow"
            },
            1127: {
                prefab: "prefab/CommonView/ShowGetHeroPanel",
                module: "ShowGetHeroPanel"
            },
            1128: {
                prefab: "prefab/Technology/TechnologyAdvancePanel",
                module: "TechnologyAdvancePanel"
            },
            1129: {
                prefab: "prefab/Equip/EquipstarUpTipsWindow",
                module: "EquipstarUpTipsWindow"
            },
            1130: {
                prefab: "prefab/RedPacket/RedPacketPanel",
                module: "RedPacketPanel"
            },
            1131: {
                prefab: "prefab/RedPacket/RedPacketDetailWindow",
                module: "RedPacketDetailWindow"
            },
            1132: {
                prefab: "prefab/RedPacket/SendDefinedRedPacektWindow",
                module: "SendDefinedRedPacektWindow"
            },
            1133: {
                prefab: "prefab/Immortal/ImmortalUpgradePanel",
                module: "ImmortalUpgradePanel"
            },
            1134: {
                prefab: "prefab/Immortal/ImmortalPreviewWindow",
                module: "ImmortalPreviewWindow"
            },
            1135: {
                prefab: "prefab/NationBoss/NationBossChallengeWindow",
                module: "NationBossChallengeWindow"
            },
            1136: {
                prefab: "prefab/NationBoss/NationBossSweepWindow",
                module: "NationBossSweepWindow"
            },
            1137: {
                prefab: "prefab/NationBoss/NationBossReportWindow",
                module: "NationBossReportWindow"
            },
            1138: {
                prefab: "prefab/NationBoss/NationBossSweepResultWindow",
                module: "NationBossSweepResultWindow"
            },
            1139: {
                prefab: "prefab/BattleArray/PartnershipWindow",
                module: "PartnershipWindow"
            },
            1229: {
                prefab: "prefab/Hero/HeroRewardPanel",
                module: "HeroRewardPanel"
            },
            1230: {
                prefab: "prefab/Hero/HeroBreakoutSuccWindow",
                module: "HeroBreakoutSuccWindow"
            },
            1231: {
                prefab: "prefab/Hero/HeroStarUpSuccWindow",
                module: "HeroStarUpSuccWindow"
            },
            1232: {
                prefab: "prefab/Activity/RushRankPanel",
                module: "RushRankPanel"
            },
            1233: {
                prefab: "prefab/Activity/RushRankRankWindow",
                module: "RushRankRankWindow"
            },
            1240: {
                prefab: "prefab/Equip/OneKeyForgeWindow",
                module: "OneKeyForgeWindow"
            },
            1241: {
                prefab: "prefab/Endless/EndlessPanel",
                module: "EndlessPanel",
                switchIndex: 6
            },
            1242: {
                prefab: "prefab/Endless/EndlessChallengeWindow",
                module: "EndlessChallengeWindow"
            },
            1243: {
                prefab: "prefab/Endless/EndlessRankWindow",
                module: "EndlessRankWindow"
            },
            1244: {
                prefab: "prefab/Endless/EndlessRewardWindow",
                module: "EndlessRewardWindow"
            },
            1245: {
                prefab: "prefab/Endless/EndlessResetTipsWindow",
                module: "EndlessResetTipsWindow"
            },
            1246: {
                prefab: "prefab/Endless/EndlessVipTipsWindow",
                module: "EndlessVipTipsWindow"
            },
            1247: {
                prefab: "prefab/Endless/EndlessSweepReportWindow",
                module: "EndlessSweepReportWindow"
            },
            1248: {
                prefab: "prefab/Endless/EndlessSweepTipsWindow",
                module: "EndlessSweepTipsWindow"
            },
            1249: {
                prefab: "prefab/Equip/EquipForgeupSkillWindow",
                module: "EquipForgeupSkillWindow"
            },
            1250: {
                prefab: "prefab/Intensify/IntensifyPanel",
                module: "IntensifyPanel"
            },
            1348: {
                prefab: "prefab/Intensify/IntensifyTipsWindow",
                module: "IntensifyTipsWindow"
            },
            1251: {
                prefab: "prefab/Activity/AccumulatedRechargePanel",
                module: "AccumulatedRechargePanel"
            },
            1252: {
                prefab: "prefab/Activity/DailyPreferentialWindow",
                module: "DailyPreferentialWindow"
            },
            1253: {
                prefab: "prefab/Treasure/OneKeyUpWindow",
                module: "OneKeyUpWindow"
            },
            1257: {
                prefab: "prefab/Pulse/PulseBoxOpenWindow",
                module: "PulseBoxOpenWindow"
            },
            1258: {
                prefab: "prefab/Pulse/PulseBoxTipsWindow",
                module: "PulseBoxTipsWindow"
            },
            1259: {
                prefab: "prefab/Pulse/PulseRewardWindow",
                module: "PulseRewardWindow"
            },
            1260: {
                prefab: "prefab/Pulse/PulseHomePanel",
                module: "PulseHomePanel"
            },
            1261: {
                prefab: "prefab/Pulse/PulseNationFindWindow",
                module: "PulseNationFindWindow"
            },
            1262: {
                prefab: "prefab/Pulse/PulseInfoWindow",
                module: "PulseInfoWindow"
            },
            1263: {
                prefab: "prefab/Pulse/MyPulseWindow",
                module: "MyPulseWindow"
            },
            1264: {
                prefab: "prefab/Pulse/PulsePanel",
                module: "PulsePanel"
            },
            1265: {
                prefab: "prefab/Pulse/PulseExploitWindow",
                module: "PulseExploitWindow"
            },
            1266: {
                prefab: "prefab/Pulse/PulseBuyTimeWindow",
                module: "PulseBuyTimeWindow"
            },
            1267: {
                prefab: "prefab/Pulse/PulseRankWindow",
                module: "PulseRankWindow"
            },
            1268: {
                prefab: "prefab/Pulse/PulseReportWindow",
                module: "PulseReportWindow"
            },
            1269: {
                prefab: "prefab/Gemstone/GemstoneManualWindow",
                module: "GemstoneManualWindow"
            },
            1270: {
                prefab: "prefab/WorldBoss/WorldBossPreviewPanel",
                module: "WorldBossPreviewPanel"
            },
            1271: {
                prefab: "prefab/WorldBoss/WholeBossRewardWindow",
                module: "WholeBossRewardWindow"
            },
            1272: {
                prefab: "prefab/WorldBoss/WholeBossRecordWindow",
                module: "WholeBossRecordWindow"
            },
            1273: {
                prefab: "prefab/WorldBoss/WholeBossTipWindow",
                module: "WholeBossTipWindow"
            },
            1280: {
                prefab: "prefab/FlashGifts/FlashGiftsWindow",
                module: "FlashGiftsWindow"
            },
            1282: {
                prefab: "prefab/Activity/LoginDayGiftWindow",
                module: "LoginDayGiftWindow"
            },
            1283: {
                prefab: "prefab/Nation/GodFurnacePanel",
                module: "GodFurnacePanel"
            },
            1284: {
                prefab: "prefab/Nation/GodFurnaceRankWindow",
                module: "GodFurnaceRankWindow"
            },
            1285: {
                prefab: "prefab/Nation/GodFurnaceRewardWindow",
                module: "GodFurnaceRewardWindow"
            },
            1286: {
                prefab: "prefab/Activity/ExtensionLoginGiftWindow",
                module: "ExtensionLoginGiftWindow"
            },
            1287: {
                prefab: "prefab/Activity/GroupBuyWindow",
                module: "GroupBuyWindow"
            },
            1288: {
                prefab: "prefab/Activity/GachaActivityShopPanel",
                module: "GachaActivityShopPanel"
            },
            1289: {
                prefab: "prefab/Rank/OneKeyAboreWindow",
                module: "OneKeyAboreWindow"
            },
            1290: {
                prefab: "prefab/Activity/OnlineRewardWindow",
                module: "OnlineRewardWindow"
            },
            1291: {
                prefab: "prefab/Activity/StoryRewardWindow",
                module: "StoryRewardWindow"
            },
            1292: {
                prefab: "prefab/Guide/GuideFinishedView",
                module: "GuideFinishedView"
            },
            1293: {
                prefab: "prefab/Activity/SelectRechargeRewardWindow",
                module: "SelectRechargeRewardWindow"
            },
            1294: {
                prefab: "prefab/LimitGift/LimitGiftPanel",
                module: "LimitGiftPanel"
            },
            1295: {
                prefab: "prefab/Activity/LifeCardRewardWindow",
                module: "LifeCardRewardWindow"
            },
            1296: {
                prefab: "prefab/Activity/TurntableRewardWindow",
                module: "TurntableRewardWindow"
            },
            1297: {
                prefab: "prefab/Activity/TurntableTaskWindow",
                module: "TurntableTaskWindow"
            },
            1298: {
                prefab: "prefab/Activity/TurntableExchangeWindow",
                module: "TurntableExchangeWindow"
            },
            1299: {
                prefab: "prefab/Activity/FortuneCatTaskWindow",
                module: "FortuneCatTaskWindow"
            },
            1300: {
                prefab: "prefab/Activity/FortuneCatShopWindow",
                module: "FortuneCatShopWindow"
            },
            1301: {
                prefab: "prefab/Treasure/TreasureRewardWindow",
                module: "TreasureRewardWindow"
            },
            1302: {
                prefab: "prefab/LimitGift/LimitGiftTipWindow",
                module: "LimitGiftTipWindow"
            },
            1303: {
                prefab: "prefab/Activity/FortuneCatBuyWindow",
                module: "FortuneCatBuyWindow"
            },
            1304: {
                prefab: "prefab/Treasure/TreasureBatchCompoundWindow",
                module: "TreasureBatchCompoundWindow"
            },
            1305: {
                prefab: "prefab/DemonTreasure/DemonTreasurePanel",
                module: "DemonTreasurePanel"
            },
            1306: {
                prefab: "prefab/DemonTreasure/DemonTreasureRewardWindow",
                module: "DemonTreasureRewardWindow"
            },
            1310: {
                prefab: "prefab/MaterailCopy/MaterailInfoWindow",
                module: "MaterailInfoWindow"
            },
            1311: {
                prefab: "prefab/MaterailCopy/MaterialVipTipsWindow",
                module: "MaterialVipTipsWindow"
            },
            1312: {
                prefab: "prefab/MaterailCopy/MaterialResetTipsWindow",
                module: "MaterialResetTipsWindow"
            },
            1313: {
                prefab: "prefab/Gemstone/GemSkillListWindow",
                module: "GemSkillListWindow"
            },
            1320: {
                prefab: "prefab/AncientCorridor/AncientCorridorPanel",
                module: "AncientCorridorPanel"
            },
            1321: {
                prefab: "prefab/AncientCorridor/AncientCorridorRankWindow",
                module: "AncientCorridorRankWindow"
            },
            1322: {
                prefab: "prefab/WonderlandAdventure/WonderlandPanel",
                module: "WonderlandPanel"
            },
            1331: {
                prefab: "prefab/Activity/HeavenTurntableTaskWindow",
                module: "HeavenTurntableTaskWindow"
            },
            1332: {
                prefab: "prefab/Activity/HavingTurntableTaskWindow",
                module: "HavingTurntableTaskWindow"
            },
            1323: {
                prefab: "prefab/Dipper/DipperPanel",
                module: "DipperPanel"
            },
            1324: {
                prefab: "prefab/Dipper/DipperRewardWindow",
                module: "DipperRewardWindow"
            },
            1325: {
                prefab: "prefab/CommonView/SimpleCostTipsWindow",
                module: "SimpleCostTipsWindow"
            },
            1326: {
                prefab: "prefab/WonderlandAdventure/WonderlandChallengeWindow",
                module: "WonderlandChallengeWindow"
            },
            1327: {
                prefab: "prefab/WonderlandAdventure/WonderlandExploreWindow",
                module: "WonderlandExploreWindow"
            },
            1328: {
                prefab: "prefab/WonderlandAdventure/WonderlandQuickExploreWindow",
                module: "WonderlandQuickExploreWindow"
            },
            1329: {
                prefab: "prefab/WonderlandAdventure/WonderlandChooseHeroWindow",
                module: "WonderlandChooseHeroWindow"
            },
            1330: {
                prefab: "prefab/WonderlandAdventure/WonderlandOneKeyWindow",
                module: "WonderlandOneKeyWindow"
            },
            1333: {
                prefab: "prefab/Activity/ActivateActivityTokenWindow",
                module: "ActivateActivityTokenWindow"
            },
            1334: {
                prefab: "prefab/Activity/ActivityTokenPointBuyWindow",
                module: "ActivityTokenPointBuyWindow"
            },
            1340: {
                prefab: "prefab/CrossArena/CrossArenaHomePanel",
                module: "CrossArenaHomePanel"
            },
            1341: {
                prefab: "prefab/CrossArena/CrossArenaRewardWindow",
                module: "CrossArenaRewardWindow"
            },
            1342: {
                prefab: "prefab/CrossArena/CrossArenaRankWindow",
                module: "CrossArenaRankWindow"
            },
            1343: {
                prefab: "prefab/CrossArena/CrossArenaChallengePanel",
                module: "CrossArenaChallengePanel"
            },
            1344: {
                prefab: "prefab/CrossArena/CrossArenaRankRaiseWindow",
                module: "CrossArenaRankRaiseWindow"
            },
            1345: {
                prefab: "prefab/CrossArena/CrossArenaReportWindow",
                module: "CrossArenaReportWindow"
            },
            1346: {
                prefab: "prefab/CrossArena/CrossArenaHallPanel",
                module: "CrossArenaHallPanel"
            },
            1347: {
                prefab: "prefab/CrossArena/CrossArenaTipsWindow",
                module: "CrossArenaTipsWindow"
            },
            1349: {
                prefab: "prefab/NationBeast/NationBeastInspireWindow",
                module: "NationBeastInspireWindow"
            },
            1350: {
                prefab: "prefab/NationBeast/NationBeastPanel",
                module: "NationBeastPanel"
            },
            1351: {
                prefab: "prefab/NationBeast/NationBeastFenceWindow",
                module: "NationBeastFenceWindow"
            },
            1352: {
                prefab: "prefab/NationBeast/NationBeastRewardPanel",
                module: "NationBeastRewardPanel"
            },
            1353: {
                prefab: "prefab/Activity/NewServerCarnivalPanel",
                module: "NewServerCarnivalPanel"
            },
            1354: {
                prefab: "prefab/HeroArtifact/HeroArtifactInfoPanel",
                module: "HeroArtifactInfoPanel"
            },
            1355: {
                prefab: "prefab/HeroArtifact/HeroArtifactReplacePanel",
                module: "HeroArtifactReplacePanel"
            },
            1356: {
                prefab: "prefab/HeroArtifact/HeroArtifactInfoTipsWindow",
                module: "HeroArtifactInfoTipsWindow"
            },
            1360: {
                prefab: "prefab/Technology/TechnologyTipsWindow",
                module: "TechnologyTipsWindow"
            },
            1370: {
                prefab: "prefab/Gift/AwyGiftPanel",
                module: "AwyGiftPanel"
            },
            1371: {
                prefab: "prefab/Activity/CollectWordExchangeWindow",
                module: "CollectWordExchangeWindow"
            },
            1372: {
                prefab: "prefab/Shop/ActivityBuyWindow",
                module: "ActivityBuyWindow"
            },
            1373: {
                prefab: "prefab/HeroArtifact/HeroArtifactExtractPanel",
                module: "HeroArtifactExtractPanel"
            },
            1374: {
                prefab: "prefab/HeroArtifact/ArtifactExtractSelectHeroWindow",
                module: "ArtifactExtractSelectHeroWindow"
            },
            1375: {
                prefab: "prefab/Activity/TowerMasterPanel",
                module: "TowerMasterPanel"
            },
            1376: {
                prefab: "prefab/Activity/TowerMasterRewardWindow",
                module: "TowerMasterRewardWindow"
            },
            1377: {
                prefab: "prefab/HeroArtifact/HeroArtifactManualWindow",
                module: "HeroArtifactManualWindow"
            },
            1380: {
                prefab: "prefab/Activity/RareTreasurePanel",
                module: "RareTreasurePanel"
            },
            1381: {
                prefab: "prefab/Activity/RareTreasureShopWindow",
                module: "RareTreasureShopWindow"
            },
            1382: {
                prefab: "prefab/Activity/RareTreasureCrystalGetWindow",
                module: "CrystalGetWindow"
            },
            1383: {
                prefab: "prefab/Activity/RareTreasureInputWindow",
                module: "CrystalInputWindow"
            },
            1384: {
                prefab: "prefab/Activity/RareTreasureAutoInputWindow",
                module: "CrystalAutoInputWindow"
            },
            1385: {
                prefab: "prefab/Activity/RareTreasurePresiousRecordsWindow",
                module: "PreviousRecordsWindow"
            },
            1386: {
                prefab: "prefab/Activity/RareTreasureMyRecordsWindow",
                module: "MyRecordsWindow"
            },
            1387: {
                prefab: "prefab/NationWar/NationWarInMatchWindow",
                module: "NationWarInMatchWindow"
            },
            1388: {
                prefab: "prefab/NationWar/NationWarRewardWindow",
                module: "NationWarRewardWindow"
            },
            1389: {
                prefab: "prefab/Activity/ChallengeMonsterRankWindow",
                module: "ChallengeMonsterRankWindow"
            },
            1390: {
                prefab: "prefab/Activity/ChallengeMonsterBuyWindow",
                module: "ChallengeMonsterBuyWindow"
            },
            1391: {
                prefab: "prefab/Activity/ActivityBaoZhuPanel",
                module: "ActivityBaoZhuPanel"
            },
            1392: {
                prefab: "prefab/Activity/ActivityBaoZhuTaskWindow",
                module: "ActivityBaoZhuTaskWindow"
            },
            1393: {
                prefab: "prefab/Activity/SuperVIPWindow",
                module: "SuperVIPWindow"
            },
            1394: {
                prefab: "prefab/Activity/HeroRepayPanel",
                module: "HeroRepayPanel"
            },
            1395: {
                prefab: "prefab/Activity/CumulateGiftPanel",
                module: "CumulateGiftPanel"
            },
            1396: {
                prefab: "prefab/Activity/MonthCardRenewalWindow",
                module: "MonthCardRenewalWindow"
            },
            1400: {
                prefab: "prefab/Activity/ActivityPopupWindow",
                module: "ActivityPopupWindow"
            },
            1401: {
                prefab: "prefab/Babel/BabelHeroReplacePanel",
                module: "BabelHeroReplacePanel"
            },
            1402: {
                prefab: "prefab/Babel/BabelSelectLvWindow",
                module: "BabelSelectWindow"
            },
            1403: {
                prefab: "prefab/Babel/BabelPanel",
                module: "BabelPanel"
            },
            1404: {
                prefab: "prefab/Babel/BabelRankWindow",
                module: "BabelRankWindow"
            },
            1410: {
                prefab: "prefab/Activity/CollectHerosPanel",
                module: "CollectHerosPanel"
            },
            1411: {
                prefab: "prefab/CommonView/ObtainWayWindow2",
                module: "ObtainWayWindow2"
            },
            1415: {
                prefab: "prefab/Title/TitleView",
                module: "TitleView"
            },
            1420: {
                prefab: "prefab/CrossCup/CrossCupPanel",
                module: "CrossCupPanel"
            },
            1421: {
                prefab: "prefab/CrossCup/CrossCupRankRewardWindow",
                module: "CrossCupRankRewardWindow"
            },
            1422: {
                prefab: "prefab/CrossCup/CrossCupHonorRankWindow",
                module: "CrossCupHonorRankWindow"
            },
            1423: {
                prefab: "prefab/CrossCup/CrossCupBattleDetailWindow",
                module: "CrossCupBattleDetailWindow"
            },
            1424: {
                prefab: "prefab/CrossCup/CrossCupBetWindow",
                module: "CrossCupBetWindow"
            },
            1425: {
                prefab: "prefab/CrossCup/CrossCupChangePosWindow",
                module: "CrossCupChangePosWindow"
            },
            1426: {
                prefab: "prefab/CrossCup/CrossCupGuessWindow",
                module: "CrossCupGuessWindow"
            },
            1430: {
                prefab: "prefab/Activity/NewGachaActivityHome",
                module: "NewGachaActivityHome"
            },
            1431: {
                prefab: "prefab/Activity/GodEquipRewardsWindow",
                module: "GodEquipRewardsWindow"
            },
            1432: {
                prefab: "prefab/Activity/GodEquipTicketsWindow",
                module: "GodEquipTicketsWindow"
            },
            1433: {
                prefab: "prefab/Activity/FerroTurntableTaskWindow",
                module: "FerroTurntableTaskWindow"
            },
            1434: {
                prefab: "prefab/Activity/TimeLimitGachaPanel",
                module: "TimeLimitGachaPanel"
            },
            1435: {
                prefab: "prefab/Activity/TimeLimitGachaRankWindow",
                module: "TimeLimitGachaRankWindow"
            },
            1436: {
                prefab: "prefab/Activity/TimeLimitGachaBoxWindow",
                module: "TimeLimitGachaBoxWindow"
            },
            1437: {
                prefab: "prefab/Treasure/TreasureStarUpTipsWindow",
                module: "TreasureStarUpTipsWindow"
            },
            1462: {
                prefab: "prefab/Friend/BlackListWindow",
                module: "BlackListWindow"
            },
            1450: {
                prefab: "prefab/Activity/TicketsGetWindow",
                module: "TicketsGetWindow"
            },
            1451: {
                prefab: "prefab/Activity/MonopolyPanel",
                module: "MonopolyPanel"
            },
            1452: {
                prefab: "prefab/Activity/MonopolyExchangeWindow",
                module: "MonopolyExchangeWindow"
            },
            1453: {
                prefab: "prefab/Activity/MonopolyProgressWindow",
                module: "MonopolyProgressWindow"
            },
            1454: {
                prefab: "prefab/Activity/MonopolyTaskWindow",
                module: "MonopolyTaskWindow"
            },
            1455: {
                prefab: "prefab/Activity/FestivalPanel",
                module: "FestivalPanel"
            },
            1456: {
                prefab: "prefab/Activity/FestivalExchangeWindow",
                module: "FestivalExchangeWindow"
            },
            1457: {
                prefab: "prefab/Activity/FestivalWordsWindow",
                module: "FestivalWordsWindow"
            },
            1460: {
                prefab: "prefab/Activity/CommonTaskWindow",
                module: "CommonTaskWindow"
            },
            1461: {
                prefab: "prefab/Activity/DoubleDropPanel",
                module: "DoubleDropPanel"
            },
            1500: {
                prefab: "prefab/NationDuel/NationDuelPanel",
                module: "NationDuelPanel"
            },
            1501: {
                prefab: "prefab/NationDuel/NationDuelPointRewardWindow",
                module: "NationDuelPointRewardWindow"
            },
            1502: {
                prefab: "prefab/NationDuel/NationDuelRankWindow",
                module: "NationDuelRankWindow"
            },
            1503: {
                prefab: "prefab/NationDuel/NationDuelAppointPanel",
                module: "NationDuelAppointPanel"
            },
            1504: {
                prefab: "prefab/NationDuel/NationDuelCampDetailWindow",
                module: "NationDuelCampDetailWindow"
            },
            1505: {
                prefab: "prefab/NationDuel/NationDuelCampVsPanel",
                module: "NationDuelCampVsPanel"
            },
            1506: {
                prefab: "prefab/NationDuel/NationDuelBattleCompareWindow",
                module: "NationDuelBattleCompareWindow"
            },
            1507: {
                prefab: "prefab/NationDuel/NationDuelTopRankWindow",
                module: "NationDuelTopRankWindow"
            },
            1550: {
                prefab: "prefab/Legend/LegendMainPanel",
                module: "LegendMainPanel"
            },
            1551: {
                prefab: "prefab/Legend/LegendPanel",
                module: "LegendPanel"
            },
            1552: {
                prefab: "prefab/Legend/LegendGodRankPanel",
                module: "LegendGodRankPanel"
            },
            1553: {
                prefab: "prefab/Legend/LegendMatchPanel",
                module: "LegendMatchPanel"
            },
            1554: {
                prefab: "prefab/Legend/LegendShopPanel",
                module: "LegendShopPanel"
            },
            1555: {
                prefab: "prefab/Legend/LegendAdmireWindow",
                module: "LegendAdmireWindow"
            },
            1556: {
                prefab: "prefab/Legend/LegendSeasonSelectWindow",
                module: "LegendSeasonSelectWindow"
            },
            1557: {
                prefab: "prefab/Legend/LegendSeasonRankWindow",
                module: "LegendSeasonRankWindow"
            },
            1558: {
                prefab: "prefab/Legend/LegendSeasonRewardsWindow",
                module: "LegendSeasonRewardsWindow"
            },
            1559: {
                prefab: "prefab/Legend/LegendRank100Window",
                module: "LegendRank100Window"
            },
            1560: {
                prefab: "prefab/Legend/LegendRankPreviewWindow",
                module: "LegendRankPreviewWindow"
            },
            1561: {
                prefab: "prefab/Legend/LegendSelfReportWindow",
                module: "LegendSelfReportWindow"
            },
            1562: {
                prefab: "prefab/Legend/LegendAutoReportWindow",
                module: "LegendAutoReportWindow"
            },
            1563: {
                prefab: "prefab/Legend/LegendTopReportWindow",
                module: "LegendTopReportWindow"
            },
            1564: {
                prefab: "prefab/Legend/LegendTimesSelectWindow",
                module: "LegendTimesSelectWindow"
            },
            1565: {
                prefab: "prefab/Legend/LegendSecionChangePanel",
                module: "LegendSecionChangePanel"
            },
            1566: {
                prefab: "prefab/Legend/LegendBoxWindow",
                module: "LegendBoxWindow"
            },
            1567: {
                prefab: "prefab/Legend/LegendSeasonDanChangeWindow",
                module: "LegendSeasonDanChangeWindow"
            },
            1600: {
                prefab: "prefab/Spirit/SpiritBagPanel",
                module: "SpiritBagPanel"
            },
            1601: {
                prefab: "prefab/Spirit/SpiritReplacePanel",
                module: "SpiritReplacePanel"
            },
            1602: {
                prefab: "prefab/Spirit/SpiritInfoPanel",
                module: "SpiritInfoPanel"
            },
            1603: {
                prefab: "prefab/Spirit/SpiritUpPanel",
                module: "SpiritUpPanel"
            },
            1604: {
                prefab: "prefab/Spirit/OneKeyUpSpiritWindow",
                module: "OneKeyUpSpiritWindow"
            },
            1605: {
                prefab: "prefab/Spirit/SpiritSkillListWindow",
                module: "SpiritSkillListWindow"
            },
            1606: {
                prefab: "prefab/Spirit/SpiritInfoTipsWindow",
                module: "SpiritInfoTipsWindow"
            },
            1607: {
                prefab: "prefab/Spirit/SpiritTalentWindow",
                module: "SpiritTalentWindow"
            },
            1608: {
                prefab: "prefab/Spirit/SpiritTalentUpWindow",
                module: "SpiritTalentUpWindow"
            },
            1609: {
                prefab: "prefab/Spirit/SpiritTalentShowWindow",
                module: "SpiritTalentShowWindow"
            },
            1610: {
                prefab: "prefab/Spirit/SpiritstarUpTipsWindow",
                module: "SpiritstarUpTipsWindow"
            },
            1618: {
                prefab: "prefab/HuntTreasure/QuickHuntWindow",
                module: "QuickHuntWindow"
            },
            1619: {
                prefab: "prefab/Activity/TurnTableQuickExactWindow",
                module: "TurnTableQuickExactWindow"
            },
            1620: {
                prefab: "prefab/Activity/CustomGiftPanel",
                module: "CustomGiftPanel"
            },
            1621: {
                prefab: "prefab/Activity/CustomGiftSelectWindow",
                module: "CustomGiftSelectWindow"
            },
            1622: {
                prefab: "prefab/Activity/ChallengeHerolWordsWindow",
                module: "ChallengeHerolWordsWindow"
            },
            1630: {
                prefab: "prefab/EightDiagrams/EightDiagramsPanel",
                module: "EightDiagramsPanel"
            },
            1631: {
                prefab: "prefab/EightDiagrams/EightDiagramsRankWindow",
                module: "EightDiagramsRankWindow"
            },
            1632: {
                prefab: "prefab/EightDiagrams/EightDiagramsRewardWindow",
                module: "EightDiagramsRewardWindow"
            },
            1640: {
                prefab: "prefab/CommonView/CommonCostTipsWindow",
                module: "CommonCostTipsWindow"
            },
            1641: {
                prefab: "prefab/Activity/GoldHeroBackBuyPanel",
                module: "GoldHeroBackBuyPanel"
            },
            1642: {
                prefab: "prefab/Activity/GoldHeroActiveWindow",
                module: "GoldHeroActiveWindow"
            },
            1643: {
                prefab: "prefab/Activity/GoldHeroActiveWindow2",
                module: "GoldHeroActiveWindow2"
            },
            1645: {
                prefab: "prefab/HeroSoulLink/HeroSoulLinkPanel",
                module: "HeroSoulLinkPanel"
            },
            1650: {
                prefab: "prefab/Pet/PetMainPanel",
                module: "PetMainPanel"
            },
            1651: {
                prefab: "prefab/Pet/PetUpPanel",
                module: "PetUpPanel"
            },
            1652: {
                prefab: "prefab/Pet/PetHatchPanel",
                module: "PetHatchPanel"
            },
            1653: {
                prefab: "prefab/Pet/PetBagPanel",
                module: "PetBagPanel"
            },
            1654: {
                prefab: "prefab/Pet/PetManualPanel",
                module: "PetManualPanel"
            },
            1655: {
                prefab: "prefab/Pet/PetStationPanel",
                module: "PetStationPanel"
            },
            1656: {
                prefab: "prefab/Pet/PetStationPreviewWindow",
                module: "PetStationPreviewWindow"
            },
            1657: {
                prefab: "prefab/Pet/PetHatchAccTipWindow",
                module: "PetHatchAccTipWindow"
            },
            1658: {
                prefab: "prefab/Pet/PetVipCardWindow",
                module: "PetVipCardWindow"
            },
            1659: {
                prefab: "prefab/Pet/PetHatchSelectWindow",
                module: "PetHatchSelectWindow"
            },
            1660: {
                prefab: "prefab/Pet/PetHatchSuccessWindow",
                module: "PetHatchSuccessWindow"
            },
            1661: {
                prefab: "prefab/Pet/PetBagChangePetPanel",
                module: "PetBagChangePetPanel"
            },
            1662: {
                prefab: "prefab/Pet/PetInfoWindow",
                module: "PetInfoWindow"
            },
            1663: {
                prefab: "prefab/Pet/PetStarUpSuccessWindow",
                module: "PetStarUpSuccessWindow"
            },
            1664: {
                prefab: "prefab/Pet/PetRefineWindow",
                module: "PetRefineWindow"
            },
            1665: {
                prefab: "prefab/Pet/PetRefineSuccessWindow",
                module: "PetRefineSuccessWindow"
            },
            1666: {
                prefab: "prefab/Pet/PetInfoPanel",
                module: "PetInfoPanel"
            },
            1680: {
                prefab: "prefab/Maze/MazeMainPanel",
                module: "MazeMainPanel"
            },
            1681: {
                prefab: "prefab/Maze/MazePvePanel",
                module: "MazePvePanel"
            },
            1682: {
                prefab: "prefab/Maze/MazePvpPanel",
                module: "MazePvpPanel"
            },
            1683: {
                prefab: "prefab/Maze/MazeSkillBagWindow",
                module: "MazeSkillBagWindow"
            },
            1684: {
                prefab: "prefab/Maze/MazeSkillChooseWindow",
                module: "MazeSkillChooseWindow"
            },
            1685: {
                prefab: "prefab/Maze/MazeHeroInitWindow",
                module: "MazeHeroInitWindow"
            },
            1686: {
                prefab: "prefab/Maze/MazeSetupWindow",
                module: "MazeSetupWindow"
            },
            1688: {
                prefab: "prefab/Maze/MazeRankWindow",
                module: "MazeRankWindow"
            },
            1689: {
                prefab: "prefab/Maze/MazeRewardsWindow",
                module: "MazeRewardsWindow"
            },
            1690: {
                prefab: "prefab/Maze/MazeReportsWindow",
                module: "MazeReportsWindow"
            },
            1691: {
                prefab: "prefab/Maze/MazeItemUseWindow",
                module: "MazeItemUseWindow"
            },
            1692: {
                prefab: "prefab/Maze/MazeHeroBagWindow",
                module: "MazeHeroBagWindow"
            },
            1693: {
                prefab: "prefab/Maze/MazeCompareWindow",
                module: "MazeCompareWindow"
            },
            1694: {
                prefab: "prefab/Maze/MazeChallengeDetailWindow",
                module: "MazeChallengeDetailWindow"
            },
            1695: {
                prefab: "prefab/Maze/MazeHeroChooseWindow",
                module: "MazeHeroChooseWindow"
            },
            1696: {
                prefab: "prefab/Maze/MazeSkillChooseWindow2",
                module: "MazeSkillChooseWindow2"
            },
            1700: {
                prefab: "prefab/Activity/PetExchangePanel",
                module: "PetExchangePanel"
            },
            1701: {
                prefab: "prefab/Activity/DiamondRebatePanel",
                module: "DiamondRebatePanel"
            },
            1702: {
                prefab: "prefab/Activity/RichmanPlanPanel",
                module: "RichmanPlanPanel"
            },
            1703: {
                prefab: "prefab/Activity/RichmanPlanTaskWindow",
                module: "RichmanPlanTaskWindow"
            },
            1704: {
                prefab: "prefab/Activity/PreferentialGiftWindow",
                module: "PreferentialGiftWindow"
            },
            1705: {
                prefab: "prefab/Activity/CustomGiftPanel2",
                module: "CustomGiftPanel2"
            },
            1706: {
                prefab: "prefab/Activity/CustomGiftSelectWindow2",
                module: "CustomGiftSelectWindow2"
            },
            1707: {
                prefab: "prefab/Activity/HeroRepayPanel2",
                module: "GodPetsFeedbackPanel"
            },
            1710: {
                prefab: "prefab/Chess/ChessMainPanel",
                module: "ChessMainPanel"
            },
            1711: {
                prefab: "prefab/Chess/ChessRankWindow",
                module: "ChessRankWindow"
            },
            1712: {
                prefab: "prefab/Chess/ChessGradeRewardsWindow",
                module: "ChessGradeRewardsWindow"
            },
            1713: {
                prefab: "prefab/Chess/ChessPreparePanel",
                module: "ChessPreparePanel"
            },
            1714: {
                prefab: "prefab/Chess/ChessTipWindow",
                module: "ChessTipWindow"
            },
            1715: {
                prefab: "prefab/Chess/ChessTipWindowCopy",
                module: "ChessTipWindowCopy"
            },
            1720: {
                prefab: "prefab/Activity/BirdBridgeMeetPanel",
                module: "BirdBridgeMeetPanel"
            },
            1721: {
                prefab: "prefab/Activity/BirdBridgeMeetHelpPanel",
                module: "BirdBridgeMeetHelpPanel"
            },
            1722: {
                prefab: "prefab/Activity/BBMatchmakerBlessPanel",
                module: "BBMatchmakerBlessPanel"
            },
            1723: {
                prefab: "prefab/Activity/BirdBridgeFateRankWindow",
                module: "BirdBridgeFateRankWindow"
            },
            1724: {
                prefab: "prefab/Activity/BirdBridgeFlowerRankWindow",
                module: "BirdBridgeFlowerRankWindow"
            },
            1725: {
                prefab: "prefab/Activity/BirdBridgeMeetPush",
                module: "BBNewMeetPushWindow"
            },
            1726: {
                prefab: "prefab/Auction/AuctionMainPanel",
                module: "AuctionMainPanel"
            },
            1727: {
                prefab: "prefab/Auction/AuctionLogWindow",
                module: "AuctionLogWindow"
            },
            1728: {
                prefab: "prefab/Auction/AuctionTipWindow",
                module: "AuctionTipWindow"
            },
            1730: {
                prefab: "prefab/DivinePosition/DivinePositionPanel",
                module: "DivinePositionPanel"
            },
            1731: {
                prefab: "prefab/DivinePosition/DivinePositionUpgradePanel",
                module: "DivinePositionUpgradePanel"
            },
            1732: {
                prefab: "prefab/DivinePosition/DivinePositionDetailWindow",
                module: "DivinePositionDetailWindow"
            },
            1733: {
                prefab: "prefab/DivinePosition/DivinePositionChangeWindow",
                module: "DivinePositionChangeWindow"
            },
            1734: {
                prefab: "prefab/DivinePosition/DivinePositionPreviewWindow",
                module: "DivinePositionPreviewWindow"
            },
            1740: {
                prefab: "prefab/ScuffleYama/ScuffleYamaMainPanel",
                module: "ScuffleYamaMainPanel"
            },
            1741: {
                prefab: "prefab/ScuffleYama/ScuffleYamaChallengePlayerWindow",
                module: "ScuffleYamaChallengePlayerWindow"
            },
            1742: {
                prefab: "prefab/ScuffleYama/ScuffleYamaRewardPreviewWindow",
                module: "ScuffleYamaRewardPreviewWindow"
            },
            1743: {
                prefab: "prefab/ScuffleYama/ScuffleYamaPushAllRewardsWindow",
                module: "ScuffleYamaPushAllRewardsWindow"
            },
            1744: {
                prefab: "prefab/ScuffleYama/ScuffleYamaGetRewardWindow",
                module: "ScuffleYamaGetRewardWindow"
            },
            1745: {
                prefab: "prefab/Hero/HeroOneKeyStarUpWindow",
                module: "HeroOneKeyStarUpWindow"
            },
            1746: {
                prefab: "prefab/Camp/CampConvertMainPanel",
                module: "CampConvertMainPanel"
            },
            1747: {
                prefab: "prefab/Activity/HalloweenTaskWindow",
                module: "HalloweenTaskWindow"
            },
            1748: {
                prefab: "prefab/Activity/Double11KillPanel",
                module: "Double11KillPanel"
            },
            1749: {
                prefab: "prefab/Activity/Double11PreviewWindow",
                module: "Double11PreviewWindow"
            },
            1750: {
                prefab: "prefab/Activity/Double11FundPanel",
                module: "Double11FundPanel"
            },
            1751: {
                prefab: "prefab/Activity/Double11RankPanel",
                module: "Double11RankPanel"
            },
            1752: {
                prefab: "prefab/Activity/Double11IntegralWindow",
                module: "Double11IntegralWindow"
            },
            1753: {
                prefab: "prefab/ScuffleYama/ScuffleYamaRankRecordWindow",
                module: "ScuffleYamaRankRecordWindow"
            },
            1760: {
                prefab: "prefab/PveCopy/PveCopyBibleWindow",
                module: "PveCopyBibleWindow"
            },
            1761: {
                prefab: "prefab/PveCopy/PveCopyBibleGateWindow",
                module: "PveCopyBibleGateWindow"
            },
            1762: {
                prefab: "prefab/PveCopy/SweepRewardTotalWindow",
                module: "SweepRewardTotalWindow"
            },
            1763: {
                prefab: "prefab/PveCopy/OneKeySweepWindow",
                module: "OneKeySweepWindow"
            },
            1764: {
                prefab: "prefab/PveCopy/SweepRewardSingleWindow",
                module: "SweepRewardSingleWindow"
            },
            1765: {
                prefab: "prefab/EvilGodCopy/EvilGodMainPanel",
                module: "EvilGodMainPanel"
            },
            1766: {
                prefab: "prefab/EvilGodCopy/EvilGodBossPanel",
                module: "EvilGodBossPanel"
            },
            1767: {
                prefab: "prefab/EvilGodCopy/EvilGodRankWindow",
                module: "EvilGodRankWindow"
            },
            1768: {
                prefab: "prefab/EvilGodCopy/EvilGodBattleResultWindow",
                module: "EvilGodBattleResultWindow"
            },
            1770: {
                prefab: "prefab/QQMoxie/QQGetRewardsWindow",
                module: "QQGetRewardsWindow"
            },
            1771: {
                prefab: "prefab/QQMoxie/QQVedioAdsWindow",
                module: "QQVedioAdsWindow"
            },
            1772: {
                prefab: "prefab/QQMoxie/QQRedPacketMainWindow",
                module: "QQRedPacketMainWindow"
            },
            1773: {
                prefab: "prefab/QQMoxie/QQRedPacketTipWindow",
                module: "QQRedPacketTipWindow"
            },
            1774: {
                prefab: "prefab/QQMoxie/QQRechargeGuideWindow",
                module: "QQRechargeGuideWindow"
            },
            1775: {
                prefab: "prefab/QQMoxie/QQOnlineServiceWindow",
                module: "QQOnlineServiceWindow"
            },
            1776: {
                prefab: "prefab/HeroArtifact/HeroArtifactSkillWindow",
                module: "HeroArtifactSkillWindow"
            },
            1777: {
                prefab: "prefab/GodHeroManual/GodHeroManualPanel",
                module: "GodHeroManualPanel"
            },
            1778: {
                prefab: "prefab/GodHeroManual/GodHeroManualAttrWindow",
                module: "GodHeroManualAttrWindow"
            },
            1779: {
                prefab: "prefab/GodHeroManual/ImmortalSpiritAttrWindow",
                module: "ImmortalSpiritAttrWindow"
            },
            1780: {
                prefab: "prefab/TeamCopy2P/TeamCopy2PMainPanel",
                module: "TeamCopy2PMainPanel"
            },
            1781: {
                prefab: "prefab/TeamCopy2P/TeamCopy2PCreateWindow",
                module: "TeamCopy2PCreateWindow"
            },
            1782: {
                prefab: "prefab/TeamCopy2P/TeamCopy2PPassWordWindow",
                module: "TeamCopy2PPassWordWindow"
            },
            1783: {
                prefab: "prefab/TeamCopy2P/TeamCopy2PFirstRewardsWindow",
                module: "TeamCopy2PFirstRewardsWindow"
            },
            1790: {
                prefab: "prefab/Hero/HeroFieldSuccWindow",
                module: "HeroFieldSuccWindow"
            },
            1791: {
                prefab: "prefab/Hero/HeroFieldInfoWindow",
                module: "HeroFieldInfoWindow"
            },
            1792: {
                prefab: "prefab/HeroArtifact/HeroArtifactInfoMaxPanel",
                module: "HeroArtifactInfoMaxPanel"
            },
            1793: {
                prefab: "prefab/Activity/CattleTurntableAllPanel",
                module: "CattleTurntableAllPanel"
            },
            1794: {
                prefab: "prefab/Activity/CattleTurntableResultWindow",
                module: "CattleTurntableResultWindow"
            },
            1795: {
                prefab: "prefab/Activity/CattleTurntableRewardWindow",
                module: "CattleTurntableRewardWindow"
            },
            1796: {
                prefab: "prefab/Activity/ExamMainPanel",
                module: "ExamMainPanel"
            },
            1797: {
                prefab: "prefab/Activity/ExamRankRecordWindow",
                module: "ExamRankRecordWindow"
            },
            1798: {
                prefab: "prefab/Activity/ExamBeastInputWindow",
                module: "ExamBeastInputWindow"
            },
            1799: {
                prefab: "prefab/Activity/ExamBeastRankWindow",
                module: "ExamBeastRankWindow"
            },
            1800: {
                prefab: "prefab/Activity/ExamBeastBoxWindow",
                module: "ExamBeastBoxWindow"
            },
            1801: {
                prefab: "prefab/Activity/CattleTurnRewardLookWindow",
                module: "CattleTurnRewardLookWindow"
            },
            1802: {
                prefab: "prefab/SyRelevant/SySuperVIPWindow",
                module: "SySuperVIPWindow"
            },
            1803: {
                prefab: "prefab/SyRelevant/SyFollowWindow",
                module: "SyFollowWindow"
            },
            1804: {
                prefab: "prefab/Equip/EquipBreakoutSkillListWindow",
                module: "EquipBreakoutSkillListWindow"
            },
            1805: {
                prefab: "prefab/Equip/EquipbreakoutUpTipsWindow",
                module: "EquipbreakoutUpTipsWindow"
            },
            1806: {
                prefab: "prefab/Treasure/TreasureBreakoutSkillListWindow",
                module: "TreasureBreakoutSkillListWindow"
            },
            1807: {
                prefab: "prefab/Treasure/TreasureEvolveChooseWindow",
                module: "TreasureEvolveChooseWindow"
            },
            1808: {
                prefab: "prefab/Treasure/TreasurebreakoutUpTipsWindow",
                module: "TreasurebreakoutUpTipsWindow"
            },
            1809: {
                prefab: "prefab/PopView/GoodsVipTimesWindow",
                module: "GoodsVipTimesWindow"
            },
            1810: {
                prefab: "prefab/WonderlandAdventure/WonderlandGradeUpWindow",
                module: "WonderlandGradeUpWindow"
            },
            1811: {
                prefab: "prefab/PopView/RewardPreviewWindowCopy",
                module: "RewardPreviewWindowCopy"
            },
            1812: {
                prefab: "prefab/Activity/ZnqHappyTogetherWindow",
                module: "ZnqHappyTogetherWindow"
            },
            1813: {
                prefab: "prefab/Activity/EatCakeWindow",
                module: "EatCakeWindow"
            },
            1814: {
                prefab: "prefab/AdventureEntry/AdventureEntryViewCopy",
                module: "AdventureEntryViewCopy",
                switchIndex: 4
            },
            1815: {
                prefab: "prefab/Anniversary/ZnqUsreFireWorksWindow",
                module: "ZnqUsreFireWorksWindow"
            },
            1816: {
                prefab: "prefab/OneStepComplete/OneStepCompletePanel",
                module: "OneStepCompletePanel"
            },
            1817: {
                prefab: "prefab/OneStepComplete/PrioritySelectWindow",
                module: "PrioritySelectWindow"
            },
            1818: {
                prefab: "prefab/OneStepComplete/OSCLogWindow",
                module: "OSCLogWindow"
            },
            1819: {
                prefab: "prefab/TeamCopy2P/TeamCopy2PRewardWindow",
                module: "TeamCopy2PRewardWindow"
            },
            1820: {
                prefab: "prefab/QQMoxie/QQColorSignWindow",
                module: "QQColorSignWindow"
            },
            1821: {
                prefab: "prefab/Activity/GodSalariesAdvanceWindow",
                module: "GodSalariesAdvanceWindow"
            },
            1822: {
                prefab: "prefab/Inherit/InheritWindow",
                module: "InheritWindow"
            },
            1823: {
                prefab: "prefab/Spirit/SpiritTalentUpLevelWindow",
                module: "SpiritTalentUpLevelWindow"
            },
            1824: {
                prefab: "prefab/Hero/HeroMaterialSelectWindow",
                module: "HeroMaterialSelectWindow"
            },
            1825: {
                prefab: "prefab/Spirit/OneKeyBlessSpiritWindow",
                module: "OneKeyBlessSpiritWindow"
            },
            1826: {
                prefab: "prefab/Spirit/SpiritFragmentSlePanel",
                module: "SpiritFragmentSlePanel"
            },
            1827: {
                prefab: "prefab/Spirit/SpiritTalentCopyWindow",
                module: "SpiritTalentCopyWindow"
            },
            1828: {
                prefab: "prefab/MobilepointsExchange/MobilepointsExchangeWindow",
                module: "MobilepointsExchangeWindow"
            },
            1829: {
                prefab: "prefab/MobilepointsExchange/MovingIntegralPanel",
                module: "MovingIntegralPanel"
            },
            1830: {
                prefab: "prefab/Hero/HeroTalentSkillListWindow",
                module: "HeroTalentSkillListWindow"
            },
            1831: {
                prefab: "prefab/Activity/CattleIntegralRewardWindow",
                module: "CattleIntegralRewardWindow"
            },
            1832: {
                prefab: "prefab/Hero/HeroGodLevelSuccWindow",
                module: "HeroGodLevelSuccWindow"
            },
            2000: {
                prefab: "prefab/Pvp/PvpFightPanel",
                module: "PvpFightPanel"
            },
            9999: {
                prefab: "prefab/CommonView/DebugAdminWindow",
                module: "DebugAdminWindow"
            },
            9998: {
                prefab: "prefab/Debug/Test3DModelPanel",
                module: "Test3DModelPanel"
            },
            Notice_Window: {
                prefab: "prefab/login/noticeWindow",
                module: null,
                isPopup: !0,
                isMask: !1,
                isTouchMaskClose: !1
            },
            Age_Tip_Window: {
                prefab: "prefab/login/AgeTipWindow",
                module: null,
                isPopup: !0,
                isMask: !1,
                isTouchMaskClose: !1
            },
            Create_Role_Window: {
                prefab: "prefab/login/creatRoleLayout",
                module: null,
                isPopup: !0,
                isMask: !1,
                isTouchMaskClose: !1
            },
            Select_Server_Window: {
                prefab: "prefab/login/selectServerLayout",
                module: null,
                isPopup: !0,
                isMask: !1,
                isTouchMaskClose: !1
            },
            Loading_View: {
                prefab: "prefab/login/loadingView",
                module: null,
                layer:ViewConst.LayerType.popupLayer,
                isPopup: !0,
                isMask: !1,
                isTouchMaskClose: !1
            },
            Clouding_View: {
                prefab: "prefab/login/CloudingView",
                module: null,
                isPopup: !0,
                isMask: !1,
                isTouchMaskClose: !1
            },
            ServerOpenTip_View: {
                prefab: "prefab/login/ServerOpenTipView",
                module: null,
                isPopup: !0,
                isMask: !1,
                isTouchMaskClose: !1
            }
      }
}
