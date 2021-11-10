import { Singleton } from "../base/Singleton";
import { EventConst } from "../const/EventConst";
import { GameGlobal } from "../GameGlobal";

export class GuideManager extends Singleton
{
    _bInitGuide: boolean;
    _panelGuideList: any;
    _isFirstBattle: boolean;
    _curGuideId: number;
    _curStepId: number;
    _curGuideData: any;
    _curGuidePanelId: any;
    _guideTrigger: any;
    _isFightReady: boolean;
    _isFightEnd: boolean;
    _isPveLightSkillBegin: boolean;
    _isGachaAniEnd: boolean;
    _canTreasureRob: boolean;
    _canTreasureCompose: boolean;
    _isMainSceneLoaded: boolean;
    _isAfterHeroFly: boolean;
    _minLevel: number;
    _maxNorGuideId: number;
    _stopGuide: boolean;
    _checkTimes: number;
    _copyData: any;
    _finishList: any;
    _battleData: any;
    _isFirstGuideReady: boolean;
    public init() 
    {
        this.destroyData();
        this._addEventListener();
    }

    setStopGuide(t) 
    {
        this._stopGuide = t
    }
    destroyData() 
    {
        this._isFirstBattle = true;
        this._bInitGuide = !1;
        this._panelGuideList = {};
        this._isFirstBattle = !1;
        this._curGuideId = 0;
        this._curStepId = 0;
        this._curGuidePanelId = 0;
        this._curGuideData = null;
        this._guideTrigger = null;
        this._minLevel = 150;
        this._maxNorGuideId = 0;
        this._stopGuide = !1;
        this._checkTimes = 0;
        this._isFightReady = !1;
        this._isFightEnd = !1;
        this._isPveLightSkillBegin = !1;
        this._isMainSceneLoaded = !1;
        this._isAfterHeroFly = !1;
        this._finishList = {};
        this._battleData = null;
        this._isFirstGuideReady = !1;
    }

    _addEventListener() 
    {
        GameGlobal.Event.addListener(EventConst.EventId.GUIDE_STEP_FINISH,this._nextStepGuide,this);
        GameGlobal.Event.addListener(EventConst.EventId.GUIDE_STAGE_EVENT,this._triggerStageGuide, this);
        GameGlobal.Event.addListener(EventConst.EventId.GUIDE_FORCE_NEXT_STAGE_EVENT,this._foreDoNextStepGuide,this);
        GameGlobal.Event.addListener(EventConst.EventId.GUIDE_CHECK_STEP,this._checkStepGuide,this);
        GameGlobal.Event.addListener(EventConst.EventId.GUIDE_CHECK_NEXT_STEP,this._nextStepGuide,this);
        GameGlobal.Event.addListener(EventConst.EventId.GUIDE_SKIP,this._skipGuide,this);
        GameGlobal.Event.addListener(EventConst.EventId.FIRST_BATTLE_FINISH,this._firstBattleFinish,this);
        GameGlobal.Event.addListener(EventConst.EventId.GUIDE_PVE_FIGHTING_TRIGGER,this.triggerPveFirstBattleFightGuide,this);
        GameGlobal.Event.addListener(EventConst.EventId.GENERAL_COPY_READY_RETURN,this.triggerGuidePveCopyFirstGate,this);
        GameGlobal.Event.addListener(EventConst.EventId.SDK_INIT_FINISH,this.setGuideTest,this);
        GameGlobal.Event.addListener(EventConst.EventId.GUIDE_CUSTOM_COND_CHANGE,this._onCustomCondEvent,this);
        GameGlobal.Event.addListener(EventConst.EventId.REQ_GUIDE_SAVE_BRIDE_DOT,this.reqSaveBrideDot,this);
        GameGlobal.Event.addListener(EventConst.EventId.GUIDE_BATTLE_UNIT_FINISH,this._onBattleUnitFinish,this);
    }

    setGuideTest() 
    {
        //s.getInstance().showRecharge() || (GUIDE_TEST = !0)
    }

    isInitGuide() 
    {
        return this._bInitGuide
    }

    _firstBattleFinish() 
    {
        this._isFirstBattle = false;
        //this.reportGuide(td.GuideId.PveGuideId)
    }

    isFirstBattle() 
    {
        return false;
        // var t = !GUIDE_TEST && this._isFirstBattle;
        // if(td.jumpFirstBattleGuide())
        // {
        //     t = false;
        // }
        // return t;
    }

    isFirstGuideReady() 
    {
        return this._isFirstGuideReady
    }

    isPveLightSkillGuide() 
    {
        //return !GUIDE_TEST && this._curGuideId && this._curGuideId === td.GuideId.PveLightSkillId
    }

    isDoingGachaGuide() 
    {
        //return !GUIDE_TEST && this._curGuideId && this._curGuideId <= td.GuideId.GachaGuideId
    }
    
    isDoingEndlessGuide() 
    {
        //return !GUIDE_TEST && this._curGuideId && this._curGuideId === td.GuideId.EndlessGuideId
    }

    isDoingLoginGiftGuide() 
    {
        //return !GUIDE_TEST && this._curGuideId && this._curGuideId === td.GuideId.LoginGiftGuideId
    }

    isPvpBattleGuide() 
    {
        return this.isDoingEndlessGuide()
    }

    getBattleData() 
    {
        return this._battleData
    }

    _clearBattleData() 
    {
        this._battleData = null
    }

    _onBattleUnitFinish(t) 
    {
        // this._battleData = null;
        // !GUIDE_TEST && this.isPvpBattleGuide() && (this._battleData = t, this._checkCurPanelGuide())
    }

    _onRoundComplete(t) 
    {
        //!GUIDE_TEST && this.isPvpBattleGuide()
    }

    _skipGuide() {}
    getGuideId() 
    {
        return this._curGuideId
    }
    getCurGuideStepId() 
    {
        return this._curStepId
    }

    getGuideData() 
    {
        return this._curGuideData
    }

    getFightActivityPanelEnum() 
    {
        if (!this._curGuideData || !this._curGuideData[this._curStepId]) return null;
        var t = this._curGuideData[this._curStepId].targetName.split("_");
        return "item" === t[0] ? parseInt(t[1]) : null
    }

    isHasGuide() 
    {
        // return !(GUIDE_TEST || !this.chelLevelLimit())
    }

    isForceGuideFinshed() 
    {
        // if (GUIDE_TEST || !this.chelLevelLimit()) return !0;
        // var t = td.GetTableClass(td.TableEnum.GuideTable).getMaxNorGuideId();
        // return this._maxNorGuideId > t

        return true
    }

    _setGuideData(t) 
    {
        this._curGuideData = t,this._curGuideId = t ? t.guideId : 0, this._curStepId = t ? t.stepId : 0
    }
    _checkStepGuide(t) 
    {
        // if (td.jumpFirstBattleGuide()) {
        //     var e = td.LocalStorageUtil.read("HAD_SET_NAME"),
        //         i = td.Account.getUserData().getLevel();
        //     if (!e && i <= 1) return
        // }
        // if (!this._stopGuide) {
        //     var n = this._panelGuideList[t];
        //     if (!n || 0 === n.length) return this._guideTrigger && (clearTimeout(this._guideTrigger), this._guideTrigger = null), void td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_FINISH);
        //     this._curGuidePanelId = t;
        //     for (var a, r = td.GetTableClass(td.TableEnum.GuideTable), o = 0, s = n.length; o < s; o++) {
        //         var l = n[o],
        //             c = r.getStepData(l.guideId, l.stepId);
        //         if (td.GuideUtil.triggerConfigCondition(c)) {
        //             a = c;
        //             break
        //         }
        //     }
        //     if (a) {
        //         if (this._curGuideData === a.guideId && this._curStepId === a.stepId) return;
        //         this._guideTrigger && (clearTimeout(this._guideTrigger), this._guideTrigger = null), 4e3 === a.guideId && td.LocalStorageUtil.write(td.LocalDataKey.Begin_Smelt_task, !0), 4001 === a.guideId && td.LocalStorageUtil.write(td.LocalDataKey.Begin_Smelt_task1, !0);
        //         var u = this;
        //         this._guideTrigger = setTimeout(function () {
        //             u._guideTigger(a)
        //         }, a.beforeDelayTime || 0)
        //     } else td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_FINISH)
        // }
    }

    _checkCurPanelGuide() 
    {
        var t = this._curGuideData;
        if (t && "" == t.targetPanel) {
            this._guideTrigger && (clearTimeout(this._guideTrigger), this._guideTrigger = null);
            var e = this;
            this._guideTrigger = setTimeout(function () {
                e._guideTigger(t)
            }, t.beforeDelayTime || 0)
        } else {
            var i = this._curGuidePanelId;
            i && this._checkStepGuide(i)
        }
    }

    deleteCompletedGuide(t) 
    {
        // var e = t && 1 === t.complete,
        //     i = t && t.handleType === td.Guide.HandleType.Focus;
        // if (e && !i) {
        //     this.reportGuide(this._curGuideId);
        //     var n = td.GetTableClass(td.TableEnum.GuideTable).getMaxNorGuideId();
        //     this._curGuideId === n && (this._maxNorGuideId = n + 1), t.guideType === td.GuideType.SystemOpen && this._deleteSysOpenGuide(t.guideId)
        // }
    }

    _nextStepGuide() 
    {
        // if (td.Account.getUserData().getGuideId().length > 0 && (this._isFirstGuideReady = !1), !this._stopGuide && this._curGuideData) {
        //     this._clearBattleData();
        //     var t = this._curGuideData;
        //     if (t && t.finishEvent) {
        //         var e = t.finishEvent;
        //         e && this.handleEvents(e)
        //     }
        //     this._checkTimes = 0;
        //     var i = td.GetTableClass(td.TableEnum.GuideTable),
        //         n = t && 1 === t.complete;
        //     if (n) {
        //         this.reportGuide(this._curGuideId);
        //         var a = i.getMaxNorGuideId();
        //         this._curGuideId === a && (this._maxNorGuideId = a + 1), t.guideType === td.GuideType.SystemOpen && this._deleteSysOpenGuide(t.guideId)
        //     }
        //     t && t.id > 0 && (td.EventUtil.dispatchEvent(td.EventNameEnum.REQ_GUIDE_SAVE_BRIDE_DOT, t.id), td.DataReporter.onEvent("GuideId_" + t.id));
        //     var r = this._curGuideId,
        //         o = this._curStepId,
        //         s = t.handleType === td.Guide.HandleType.Focus || "Dialog" === t.guideViewType || n,
        //         l = !1,
        //         c = i.getStepData(r, o + 1);
        //     if (!c) {
        //         l = !0;
        //         var u = t.nextGuideId;
        //         if (0 !== u && (c = i.getStepData(u, 1))) {
        //             if (c.taskId && c.guideType !== td.GuideType.TaskReceive) {
        //                 var d = !1,
        //                     h = td.TaskManager.getTaskById(c.taskId);
        //                 h && (d = h.getStatus() === td.TaskStatus.Finish || h.getStatus() === td.TaskStatus.Received), d && (this._deleteGuide(u), c = 0 !== (u = c.nextGuideId) ? i.getStepData(u, 1) : null)
        //             }
        //             this._resetCustomCondParam(), this._setGuideData(c)
        //         }
        //     }
        //     l ? this._deleteGuide(r) : s && this._deleteGuide(r, o, n), c ? this._doStepGuide(c) : (td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_FINISH), this._resetCustomCondParam(), this._setGuideData(null))
        // }
    }

    _deleteGuide(t, e, i) 
    {
        var n = this._panelGuideList,
            a = !1;
        for (var r in n) {
            for (var o = n[r], s = o.length; s--;)
                if (o[s].guideId === t && (!e || !i && o[s].stepId === e || i && o[s].stepId <= e) && (o.splice(s, 1), !i && e)) {
                    a = !0;
                    break
                } if (a) break
        }
    }

    handleEvents(t) 
    {
        // if (t)
        //     for (var e = td.GuideEvent, i = 0, r = t.length; i < r; i++) {
        //         var o = t[i];
        //         switch (o[0]) {
        //             case e.Pve_Battle_Pause:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_PAUSE_PVE_FIGHT);
        //                 break;
        //             case e.Pve_Battle_Resume:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_RESUME_PVE_FIGHT);
        //                 break;
        //             case e.Pve_Show_Inspire:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_SHOW_INPIRE_UI_SKILL), this._preLoadMainScenRes();
        //                 break;
        //             case e.Pve_Show_Storm:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_SHOW_STORM_UI_SKILL), td.BattleArrayManager.preLoadBattleHeroRes();
        //                 break;
        //             case e.Pve_Fight_Result:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_SHOW_PVE_FIGHT_RESULT);
        //                 break;
        //             case e.Pve_Open_Build_Switch:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_SET_BUILD_TOWER_SWITCH, !0);
        //                 break;
        //             case e.Pve_Close_Build_Switch:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_SET_BUILD_TOWER_SWITCH, !1);
        //                 break;
        //             case e.Pve_Create_tmp_platform_flag:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_PVE_CREATE_TMP_PLATFORM_FLAG, o[1]);
        //                 break;
        //             case e.Pve_show_tmp_platform_flag:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_PVE_SHOW_TMP_PLATFORM_FLAG, o[1]);
        //                 break;
        //             case e.Pve_show_play_special_skill:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_PVE_PLAY_SPECIAL_SKILL, o[1]);
        //             case e.Pve_Line_Up_Hero:
        //                 var s = o[1],
        //                     c = n.default.getInstance().getGuideHeroDataBySid(s),
        //                     u = td.TableManager.getTableClass(td.TableEnum.PveHeroFihgtShowTable).getPveHeroCfgById(s),
        //                     d = new l;
        //                 d.init(u, s, c), td.EventUtil.dispatchEvent(td.EventNameEnum.ON_BUILD_TOWER, {
        //                     heroDataModel: d,
        //                     tag: o[2],
        //                     bAction: !0
        //                 });
        //                 break;
        //             case e.Pve_Start_Battle:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.BEGIN_CREATE_ENEMY);
        //                 break;
        //             case e.Pve_Show_Create_Role:
        //                 gdk.fsm.Fsm.broadcastEvent(a.default.SHOW_CREATE_ROLE_WINDOW);
        //                 break;
        //             case e.Pve_GRIL_MOVING:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_PVE_GIRL_MOVING, o[1]);
        //                 break;
        //             case e.Pve_Full_Anger_Power:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.PVE_FULL_ANGER_POWER);
        //                 break;
        //             case e.Pve_Light_Skill_Guide:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_PVE_LIGHT_SKILL);
        //                 break;
        //             case e.Pvp_Battle_Pause:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.PAUSE_FIGHT);
        //                 break;
        //             case e.Pvp_Battle_Resume:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.RESUME_FIGHT);
        //                 break;
        //             case e.Pvp_Show_Hero:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.PVP_SPECIAL_HERO_SHOW, o[1]);
        //                 break;
        //             case e.Fly_Hero:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.SHOW_HERO_MODEL_FLY, {
        //                     id: o[1],
        //                     nodePath: o[2]
        //                 });
        //                 break;
        //             case e.Disable_Scroll:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.DISABLE_SCROLL);
        //                 break;
        //             case e.Enable_Scroll:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.ENABLE_SCROLL);
        //                 break;
        //             case e.Chapter_Fly_Hero:
        //                 td.EventUtil.dispatchEvent(td.EventNameEnum.SHOW_CHAPTER_HERO_MODEL_FLY, {
        //                     id: o[1],
        //                     nodePath: o[2]
        //                 })
        //         }
        //     }
    }
    _preLoadMainScenRes() 
    {
        // var e = require("PveLoader").getModules(!1, !0);
        // gdk.rm.addLoadResInBackground(e.concat(["UnReleaseRes", "Common", "TaskView", "MainPanel", "GachaPanel", "GachaRewardPanel"]), td.PanelEnum.Panel_PVE_FIGHT_HOOK)
    }

    reqSaveBrideDot(t) 
    {
        // var e = {};
        // e.module = td.MsgModuleName.USER, e.cmd = td.MsgCmd.User.SAVE_BRIDE_DOT, e.guideId = t, td.ServerDelegate.sendMessage(e)
    }

    _foreDoNextStepGuide() 
    {
        // var t = this._curGuideData,
        //     e = 0;
        // t ? (td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_FINISH), t && 0 !== t.nextGuideId && (e = t.nextGuideId)) : (td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_FINISH), (t = td.GetTableClass(td.TableEnum.GuideTable).getStepData(this._curGuideId, this._curStepId - 1)) && 0 !== t.nextGuideId && (e = t.nextGuideId)), 0 !== e && (t = td.GetTableClass(td.TableEnum.GuideTable).getStepData(e, 1)) && this._doStepGuide(t)
    }

    _triggerStageGuide(t) 
    {
        // if (t) {
        //     var e = td.GetTableClass(td.TableEnum.GuideTable).getStepData(t, 1);
        //     e && this._doStepGuide(e)
        // }
    }

    _doStepGuide(t) 
    {
        if (this._guideTrigger && (clearTimeout(this._guideTrigger), this._guideTrigger = null), t.trigger) this._setGuideData(t);
        else {
            var e = this;
            this._guideTrigger = setTimeout(function () {
                e._guideTigger(t)
            }, t.beforeDelayTime || 0)
        }
    }

    _guideTigger(t) 
    {
        // if (this._guideTrigger && (clearTimeout(this._guideTrigger), this._guideTrigger = null), this._setGuideData(t), td.GuideUtil.triggerCondition(t)) {
        //     if (t && t.beginEvent) {
        //         var e = t.beginEvent;
        //         e && this.handleEvents(e)
        //     }
        //     this.deleteCompletedGuide(t), td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_STEP_BEGIN, t)
        // }
    }

    chelLevelLimit() 
    {
        // var t = td.Account.getUserData();
        // return !!t && !(t.getLevel() > td.GetConfig("GUIDE_LEVEL_LIMIT"))
    }

    insertSysOpenGuide(t) 
    {
        // if (!this._finishList[t]) {
        //     var e = {},
        //         i = td.GetTableClass(td.TableEnum.GuideTable).getGuideDataById(t);
        //     for (var n in i) {
        //         e[a = i[n = parseInt(n)].targetPanel] = e[a] || [], e[a][e[a].length] = {
        //             guideId: t,
        //             stepId: n
        //         }
        //     }
        //     for (var a in e) this._panelGuideList[a] = this._panelGuideList[a] || [], this._panelGuideList[a] = e[a].concat(this._panelGuideList[a])
        // }
    }

    deleteSysOpenGuide(t) 
    {
        // if (!this._finishList[t]) 
        // {
        //     var e = td.GetTableClass(td.TableEnum.GuideTable).getGuideDataById(t);
        //     for (var i in e) {
        //         var n = e[i = parseInt(i)].targetPanel;
        //         this._panelGuideList[n] = this._panelGuideList[n] || [];
        //         var a = -1;
        //         this._panelGuideList[n].some(function (e, n) {
        //             if (e.guideId == t && e.stepId == i) return a = n, !0
        //         }) && ArrayUtils.removeIndex(this._panelGuideList[n], a)
        //     }
        // }
    }

    saveSysGuideIds(t) 
    {
        // for (var e = td.Guide.NewSystemKey, i = td.LocalStorageUtil.read(e) || {}, n = t.length - 1; n >= 0; n--) {
        //     var a = t[n];
        //     i[a] || (a === td.GuideId.TreasureRob ? (i[td.GuideId.TreasureCompose] = 1, this.insertSysOpenGuide(td.GuideId.TreasureCompose)) : a === td.GuideId.HuntGem && (i[td.GuideId.PickGem] = 1, this.insertSysOpenGuide(td.GuideId.PickGem)), i[a] = 1, this.insertSysOpenGuide(a))
        // }
        // td.LocalStorageUtil.write(e, i)
    }

    _deleteSysOpenGuide(t) 
    {
        // var e = td.Guide.NewSystemKey,
        //     i = td.LocalStorageUtil.read(e);
        // i && (Array.isArray(t) ? t.forEach(function (t) {
        //     i[t] && delete i[t]
        // }) : i[t] && delete i[t], td.LocalStorageUtil.write(e, i))
    }

    initGuide() 
    {
        // if (GUIDE_TEST) return !1;
        // var t = td.Account.getUserData().getGuideId();
        // this._bInitGuide = !0;
        // var e = td.GetTableClass(td.TableEnum.GuideTable),
        //     i = td.LocalStorageUtil.read(td.Guide.NewSystemKey) || {},
        //     n = e.getMaxNorGuideId();
        // this._finishList = {};
        // for (var a = 0, r = 0, o = t.length; r < o; r++) this._finishList[t[r]] = !0, a = Math.max(a, t[r]);
        // this._maxNorGuideId = a, a === n && (this._maxNorGuideId = a + 1), this._panelGuideList = {};
        // var s = e.getGuideList();
        // for (var l in s) {
        //     var u = s[l = parseInt(l)];
        //     for (var d in u) {
        //         var h = u[d = parseInt(d)];
        //         if (!(this._finishList[l] || h.guideType === td.GuideType.SystemOpen && !i[l] || h.handleType === td.Guide.HandleType.Focus && !this.chelLevelLimit())) {
        //             var p = h.targetPanel;
        //             this._panelGuideList[p] = this._panelGuideList[p] || [], this._panelGuideList[p][this._panelGuideList[p].length] = {
        //                 guideId: l,
        //                 stepId: d
        //             }
        //         }
        //     }
        // }
        // if (this.chelLevelLimit() && 0 === t.length) {
        //     td.LocalStorageUtil.write("pveFightSpeed0", 1), this._isFirstBattle = !0, td.PveCopyManager.prepareFirstBattle();
        //     var _ = td.GetConfig("PVE_GUIDE_HERO_IDS");
        //     if (!_) return;
        //     for (var g = [], f = 0, v = _.length; f < v; f++) {
        //         var y = {
        //             heroId: _[f],
        //             configId: _[f]
        //         };
        //         g[g.length] = y
        //     }
        //     td.EventUtil.dispatchEvent(td.EventNameEnum.GUIDE_PARSE_HEROES_CFGS, g), td.EventUtil.dispatchEvent(td.EventNameEnum.REQ_GUIDE_SAVE_BRIDE_DOT, c.SAVE_BRIDE_DOT.PVE_GUIDE)
        // }
        // this.chelLevelLimit() && 0 === t.length ? this._isFirstGuideReady = !0 : this._isFirstGuideReady = !1
    }

    reportGuide(t) 
    {
        // if (t >= 13e4 && t < 14e4) {
        //     var e = td.PveGeneralCopyManager.getCurChapterId();
        //     td.PveGeneralCopyManager.setGuideState(!1);
        //     var i = td.LocalStorageUtil.read(td.LocalDataKey.Chapter_Open);
        //     (!i || i < e) && td.LocalStorageUtil.write(td.LocalDataKey.Chapter_Open, !0)
        // }
        // td.EventUtil.dispatchEvent(td.EventNameEnum.Req_SAVE_GUIDE_STEP, t)
    }

    getCopyData() 
    {
        return this._copyData
    }

    triggerPveFirstBattleFightGuide(t) 
    {
        // if (cc.log("triggerPveFirstBattleFightGuide " + t.id + " " + t.index), this._curGuideData) {
        //     var e = this._curGuideData;
        //     if (e.trigger) {
        //         var i = {
        //             type: td.GuideType.Normal,
        //             data: t
        //         };
        //         if (td.GuideUtil.triggerPveCopyCondition(e, i)) {
        //             var n = this;
        //             this._copyData = i, this._guideTrigger = setTimeout(function () {
        //                 n._guideTigger(e)
        //             }, e.beforeDelayTime || 0)
        //         }
        //     }
        // }
    }

    triggerGuidePveCopyFirstGate() 
    {
        // var t = td.GuideManager.isHasGuide(),
        //     e = td.GuideManager.getGuideId();
        // if (t && 10002 === e) {
        //     td.GuideManager.setStopGuide(!0);
        //     var i = td.PveGeneralCopyManager.getGateModelByGateId(1);
        //     td.PveGeneralCopyManager.setCurGatePassedStatus(!1);
        //     var n = {
        //         copyType: o.PVEFightType.GeneralCopy,
        //         chapterId: i.getChapterId(),
        //         gateId: i.getGateId()
        //     };
        //     td.PveCopyManager.initCopyData(n), td.EventUtil.dispatchEvent(td.EventNameEnum.RUN_SCENE, td.SceneName.PveFightScene)
        // }
    }

    isFightReady() 
    {
        return this._isFightReady
    }

    isFightEnd() 
    {
        return this._isFightEnd
    }

    isPveLightSkillGuideBegin() 
    {
        return this._isPveLightSkillBegin
    }

    isGachaAniEnd() 
    {
        return this._isGachaAniEnd
    }

    canTreasureRob() 
    {
        return this._canTreasureRob
    }

    canTreasureCompose() 
    {
        return this._canTreasureCompose
    }

    isMainSceneLoaded() 
    {
        return this._isMainSceneLoaded
    }
    isAfterHeroFly() 
    {
        return this._isAfterHeroFly
    }
    _onCustomCondEvent(t) 
    {
        // if (t) 
        // {
        //     var e = td.GuideCustomCond,
        //         i = !1;
        //     switch (t) {
        //         case e.FightReady:
        //             this._isFightReady = !0, this._isFightEnd = !1, i = !0;
        //             break;
        //         case e.FightEnd:
        //             this._isFightEnd = !0, i = !0;
        //             break;
        //         case e.GachaAniEnd:
        //             this._isGachaAniEnd = !0, i = !0;
        //             break;
        //         case e.TreasureCanRob:
        //             this._canTreasureRob = !0, this._canTreasureCompose = !1, i = !0;
        //             break;
        //         case e.TreasureCanCompose:
        //             this._canTreasureCompose = !0, this._canTreasureRob = !1, i = !0;
        //             break;
        //         case e.MainSceneLoaded:
        //             this._isMainSceneLoaded = !0, i = !0;
        //             break;
        //         case e.PveLightSkillGuideBegin:
        //             this._isPveLightSkillBegin = !0, i = !0;
        //             break;
        //         case e.AfterHeroFly:
        //             this._isAfterHeroFly = !0, i = !0;
        //             break;
        //         case e.SmeltTaskEvent:
        //             i = !0
        //     }
        //     i && this._checkCurPanelGuide()
        // }
    }

    getPanelGuides(t) 
    {
        return this._panelGuideList[t]
    }

    _resetCustomCondParam() 
    {
        this._isFightReady = !1, this._isFightEnd = !1, this._isGachaAniEnd = !1, this._canTreasureRob = !1, this._canTreasureCompose = !1, this._isMainSceneLoaded = !1, this._isPveLightSkillBegin = !1, this._isAfterHeroFly = !1
    }
        
}
