(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"id":"rootPlayer","children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"backgroundColor":["#FFFFFF"],"data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false},"locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt","name":"Player452","history":{}},"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"class":"Player","scripts":{"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPixels":TDV.Tour.Script.getPixels,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"shareSocial":TDV.Tour.Script.shareSocial,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"playAudioList":TDV.Tour.Script.playAudioList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showWindow":TDV.Tour.Script.showWindow,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"createTween":TDV.Tour.Script.createTween,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaByName":TDV.Tour.Script.getMediaByName,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"init":TDV.Tour.Script.init,"startMeasurement":TDV.Tour.Script.startMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"initQuiz":TDV.Tour.Script.initQuiz,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"translate":TDV.Tour.Script.translate,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getKey":TDV.Tour.Script.getKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentByName":TDV.Tour.Script.getComponentByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"mixObject":TDV.Tour.Script.mixObject,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"clone":TDV.Tour.Script.clone,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setMapLocation":TDV.Tour.Script.setMapLocation,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"initAnalytics":TDV.Tour.Script.initAnalytics,"existsKey":TDV.Tour.Script.existsKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"registerKey":TDV.Tour.Script.registerKey,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"unregisterKey":TDV.Tour.Script.unregisterKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeJS":TDV.Tour.Script.executeJS,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setValue":TDV.Tour.Script.setValue,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openLink":TDV.Tour.Script.openLink,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizStart":TDV.Tour.Script.quizStart,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateVideoCues":TDV.Tour.Script.updateVideoCues},"hash": "ef56d6c180916a4c76de38251911d41a0762094544aa14603dcb46170e966867", "definitions": [{"id":"MainViewer","toolTipPaddingTop":4,"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"data":{"name":"Main Viewer"},"toolTipPaddingRight":6,"subtitlesTextShadowVerticalLength":1,"playbackBarBorderColor":"#FFFFFF","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarBottom":5,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"width":"100%","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarRight":0,"subtitlesTextShadowOpacity":1,"height":"100%","vrPointerSelectionTime":2000,"minHeight":50,"vrPointerSelectionColor":"#FF6600","subtitlesFontColor":"#FFFFFF","minWidth":100,"progressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarHeadBorderRadius":0,"progressRight":0,"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorRatios":[0],"toolTipFontColor":"#606060","progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"toolTipPaddingLeft":6,"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderColor":"#000000","progressBorderColor":"#000000","class":"ViewerArea","subtitlesBottom":50,"progressBarBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadBorderSize":0,"progressBackgroundColor":["#FFFFFF"],"subtitlesTop":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeight":10,"toolTipShadowColor":"#333138","progressBottom":0,"subtitlesTextShadowColor":"#000000","progressHeight":10,"subtitlesFontSize":"3vmin","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarHeadShadow":true,"progressBarBorderRadius":0,"playbackBarHeadWidth":6,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarLeft":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderSize":0,"progressBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColorDirection":"vertical","progressLeft":0,"firstTransitionDuration":0,"propagateClick":false,"playbackBarHeadHeight":15},{"id":"mainPlayList","items":[{"camera":"this.panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3_camera","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)"}],"class":"PlayList"},{"id":"panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2","hfovMax":130,"label":trans('panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2.label'),"vfov":180,"frames":[{"cube":{"levels":[{"height":2560,"colCount":30,"rowCount":5,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2_0/{face}/0/{row}_{column}.jpg","width":15360},{"height":1536,"colCount":18,"rowCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2_0/{face}/1/{row}_{column}.jpg","width":9216},{"height":1024,"colCount":12,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"colCount":6,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":2048,"colCount":6,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","url":"media/panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2_t.jpg","class":"CubicPanoramaFrame"}],"data":{"label":"R0010293"},"overlays":["this.overlay_C35F2FDB_CD77_67D3_41BE_D3D073B7893A","this.overlay_C2207A4D_CD75_E837_41E4_2BD2EDA526A3"],"hfov":360,"hfovMin":"135%","class":"Panorama","thumbnailUrl":"media/panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2_t.jpg","adjacentPanoramas":[{"select":"this.overlay_C2207A4D_CD75_E837_41E4_2BD2EDA526A3.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3","yaw":-172.47,"distance":3.4,"backwardYaw":-0.45,"data":{"overlayID":"overlay_C2207A4D_CD75_E837_41E4_2BD2EDA526A3"},"class":"AdjacentPanorama"},{"select":"this.overlay_C35F2FDB_CD77_67D3_41BE_D3D073B7893A.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33","yaw":0.37,"distance":6.84,"backwardYaw":160.07,"data":{"overlayID":"overlay_C35F2FDB_CD77_67D3_41BE_D3D073B7893A"},"class":"AdjacentPanorama"}]},{"id":"ImageResource_1B003FE5_0B3C_FABC_41A1_1A7BE2CB2927","levels":["this.imlevel_1B3E5A76_0B3C_E59C_41A0_4E46A56ED8F8","this.imlevel_1B3E0A76_0B3C_E59C_4199_F000A3D4FED0","this.imlevel_1B3E1A76_0B3C_E59C_419D_3A78060452BD","this.imlevel_1B3E2A77_0B3C_E59C_4193_AC941D7BFE6C"],"class":"ImageResource"},{"enterPointingToHorizon":true,"id":"panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3_camera","initialSequence":"this.sequence_C7567DCD_CD6F_2837_41DC_F4615B36F76D","class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3","hfovMax":130,"label":trans('panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3.label'),"vfov":180,"frames":[{"cube":{"levels":[{"height":2560,"colCount":30,"rowCount":5,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3_0/{face}/0/{row}_{column}.jpg","width":15360},{"height":1536,"colCount":18,"rowCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3_0/{face}/1/{row}_{column}.jpg","width":9216},{"height":1024,"colCount":12,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"colCount":6,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":2048,"colCount":6,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","url":"media/panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3_t.jpg","class":"CubicPanoramaFrame"}],"data":{"label":"R0010294"},"overlays":["this.overlay_C3884DB8_CD73_285D_41E5_AD1D65550337","this.overlay_C2DBFDA2_CD77_2872_41E6_86B265D2F091"],"hfov":360,"hfovMin":"135%","class":"Panorama","thumbnailUrl":"media/panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3_t.jpg","adjacentPanoramas":[{"select":"this.overlay_C3884DB8_CD73_285D_41E5_AD1D65550337.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2","yaw":-0.45,"distance":3.41,"backwardYaw":-172.47,"data":{"overlayID":"overlay_C3884DB8_CD73_285D_41E5_AD1D65550337"},"class":"AdjacentPanorama"},{"select":"this.overlay_C2DBFDA2_CD77_2872_41E6_86B265D2F091.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33","yaw":-5.7,"distance":11.52,"backwardYaw":158.49,"data":{"overlayID":"overlay_C2DBFDA2_CD77_2872_41E6_86B265D2F091"},"class":"AdjacentPanorama"}]},{"id":"panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33","hfovMax":130,"label":trans('panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33.label'),"vfov":180,"frames":[{"cube":{"levels":[{"height":2560,"colCount":30,"rowCount":5,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33_0/{face}/0/{row}_{column}.jpg","width":15360},{"height":1536,"colCount":18,"rowCount":3,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33_0/{face}/1/{row}_{column}.jpg","width":9216},{"height":1024,"colCount":12,"rowCount":2,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33_0/{face}/2/{row}_{column}.jpg","width":6144},{"height":512,"colCount":6,"rowCount":1,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33_0/{face}/3/{row}_{column}.jpg","width":3072},{"height":2048,"colCount":6,"rowCount":1,"tags":"mobilevr2gen","class":"TiledImageResourceLevel","url":"media/panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33_0/{face}/vr2gen/0.jpg","width":12288}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33_t.jpg","class":"CubicPanoramaFrame"}],"data":{"label":"R0010290"},"overlays":["this.overlay_C0D35117_CD75_1853_41C7_13D9FF30F068","this.overlay_C22450D7_CD75_19D3_41D5_52AD4826592B","this.overlay_06C0240E_0B35_AD8C_41A4_A72AC43FD33B","this.popup_1B965D27_0B33_9FBD_4151_AA5C009A5C16"],"hfov":360,"hfovMin":"135%","class":"Panorama","thumbnailUrl":"media/panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33_t.jpg","adjacentPanoramas":[{"select":"this.overlay_C22450D7_CD75_19D3_41D5_52AD4826592B.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C7750178_CD6F_38DD_41D2_87DD6219B2A3","yaw":158.49,"distance":13.82,"backwardYaw":-5.7,"data":{"overlayID":"overlay_C22450D7_CD75_19D3_41D5_52AD4826592B"},"class":"AdjacentPanorama"},{"select":"this.overlay_C0D35117_CD75_1853_41C7_13D9FF30F068.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2","yaw":160.07,"distance":8.71,"backwardYaw":0.37,"data":{"overlayID":"overlay_C0D35117_CD75_1853_41C7_13D9FF30F068"},"class":"AdjacentPanorama"}]},{"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","class":"PanoramaPlayer","touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"enterPointingToHorizon":true,"id":"panorama_C77504FC_CD6F_19D5_41DD_9E44DBE065A2_camera","initialSequence":"this.sequence_C7562DCD_CD6F_2837_41E6_F7E37C3DF4B2","class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"popupMaxHeight":"95%","id":"popup_1B965D27_0B33_9FBD_4151_AA5C009A5C16","showDuration":500,"class":"PopupPanoramaOverlay","showEasing":"cubic_in","hideDuration":500,"pitch":-29.28,"hideEasing":"cubic_out","yaw":-123.48,"image":"this.ImageResource_1B003FE5_0B3C_FABC_41A1_1A7BE2CB2927","popupMaxWidth":"95%","hfov":6.94,"popupDistance":100},{"enterPointingToHorizon":true,"id":"panorama_C77701E6_CD6D_1BF5_41AD_2D2DFA815C33_camera","initialSequence":"this.sequence_C759DDCD_CD6F_2837_41D9_CDD88FA669BA","class":"PanoramaCamera","initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"id":"veilPopupPanorama","backgroundColor":["#000000"],"left":0,"right":0,"showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"data":{"name":"UIComponent1582"},"backgroundColorRatios":[0],"class":"UIComponent","propagateClick":false,"top":0,"bottom":0,"minHeight":0,"visible":false,"backgroundOpacity":0.55,"minWidth":0},{"id":"zoomImagePopupPanorama","backgroundColor":[],"left":0,"right":0,"scaleMode":"custom","data":{"name":"ZoomImage1583"},"backgroundColorRatios":[],"class":"ZoomImage","propagateClick":false,"top":0,"bottom":0,"minHeight":0,"visible":false,"minWidth":0},{"id":"closeButtonPopupPanorama","iconHeight":"100%","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"right":10,"fontSize":"1.29vmin","showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"data":{"name":"CloseButton1584"},"rollOverIconColor":"#666666","backgroundColorRatios":[0,0.09803921568627451,1],"class":"CloseButton","iconLineWidth":2,"top":10,"layout":"horizontal","borderColor":"#000000","iconWidth":"100%","iconColor":"#000000","pressedIconColor":"#888888","minHeight":0,"visible":false,"fontFamily":"Arial","fontColor":"#FFFFFF","minWidth":0,"propagateClick":false},{"id":"overlay_C35F2FDB_CD77_67D3_41BE_D3D073B7893A","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"class":"HotspotPanoramaOverlayImage","vfov":4.28,"scaleMode":"fit_inside","yaw":0.37,"image":"this.AnimatedImageResource_07FD6AB9_0BD7_AC90_41A4_3C6E79F75256","hfov":10.5,"data":{"label":"Circle 03b"},"pitch":-13.95}],"maps":[],"data":{"label":"Circle 03b","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C318DFF0_CD77_67ED_41C4_587BFAC00203"],"enabledInCardboard":true},{"id":"overlay_C2207A4D_CD75_E837_41E4_2BD2EDA526A3","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"class":"HotspotPanoramaOverlayImage","vfov":4.28,"scaleMode":"fit_inside","yaw":-172.47,"image":"this.AnimatedImageResource_07FD4AB9_0BD7_AC90_4165_ED14BA543A90","hfov":10.5,"data":{"label":"Circle 03b"},"pitch":-26.55}],"maps":[],"data":{"label":"Circle 03b","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C224AA4D_CD75_E837_418B_AD58B85456A2"],"enabledInCardboard":true},{"id":"imlevel_1B3E5A76_0B3C_E59C_41A0_4E46A56ED8F8","height":4096,"class":"ImageResourceLevel","url":trans('imlevel_1B3E5A76_0B3C_E59C_41A0_4E46A56ED8F8.url'),"width":2707},{"id":"imlevel_1B3E0A76_0B3C_E59C_4199_F000A3D4FED0","height":2048,"class":"ImageResourceLevel","url":trans('imlevel_1B3E0A76_0B3C_E59C_4199_F000A3D4FED0.url'),"width":1353},{"id":"imlevel_1B3E1A76_0B3C_E59C_419D_3A78060452BD","height":1024,"class":"ImageResourceLevel","url":trans('imlevel_1B3E1A76_0B3C_E59C_419D_3A78060452BD.url'),"width":676},{"id":"imlevel_1B3E2A77_0B3C_E59C_4193_AC941D7BFE6C","height":512,"class":"ImageResourceLevel","url":trans('imlevel_1B3E2A77_0B3C_E59C_4193_AC941D7BFE6C.url'),"width":338},{"id":"sequence_C7567DCD_CD6F_2837_41DC_F4615B36F76D","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"overlay_C3884DB8_CD73_285D_41E5_AD1D65550337","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"class":"HotspotPanoramaOverlayImage","vfov":4.28,"scaleMode":"fit_inside","yaw":-0.45,"image":"this.AnimatedImageResource_07FD9AB9_0BD7_AC90_416D_783ABB588472","hfov":10.5,"data":{"label":"Circle 03b"},"pitch":-26.47}],"maps":[],"data":{"label":"Circle 03b","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C38F6DC8_CD73_283D_41DB_A720FE0367CE"],"enabledInCardboard":true},{"id":"overlay_C2DBFDA2_CD77_2872_41E6_86B265D2F091","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"class":"HotspotPanoramaOverlayImage","vfov":4.28,"scaleMode":"fit_inside","yaw":-5.7,"image":"this.AnimatedImageResource_07FDCAB9_0BD7_AC90_41A6_0F21B1A2188B","hfov":10.5,"data":{"label":"Circle 03b"},"pitch":-8.39}],"maps":[],"data":{"label":"Circle 03b","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C2C9BDC2_CD77_282D_41D1_89DE122EA47A"],"enabledInCardboard":true},{"id":"overlay_C0D35117_CD75_1853_41C7_13D9FF30F068","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"class":"HotspotPanoramaOverlayImage","vfov":4.28,"scaleMode":"fit_inside","yaw":160.07,"image":"this.AnimatedImageResource_07FC7AB9_0BD7_AC90_4190_67DC7339CEDA","hfov":10.5,"data":{"label":"Circle 03b"},"pitch":-11.03}],"maps":[],"data":{"label":"Circle 03b","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C3777167_CD75_18F3_41D2_1A76E802C651"],"enabledInCardboard":true},{"id":"overlay_C22450D7_CD75_19D3_41D5_52AD4826592B","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"class":"HotspotPanoramaOverlayImage","vfov":4.28,"scaleMode":"fit_inside","yaw":158.49,"image":"this.AnimatedImageResource_07FC5AB9_0BD7_AC90_4186_50C00B2A1302","hfov":10.5,"data":{"label":"Circle 03b"},"pitch":-7}],"maps":[],"data":{"label":"Circle 03b","hasPanoramaAction":true},"areas":["this.HotspotPanoramaOverlayArea_C21170D7_CD75_19D3_41B2_B7FF75585E36"],"enabledInCardboard":true},{"id":"overlay_06C0240E_0B35_AD8C_41A4_A72AC43FD33B","class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"distance":100,"class":"HotspotPanoramaOverlayImage","roll":11.88,"pitch":-29.28,"vfov":10.5,"yaw":-123.48,"image":"this.AnimatedImageResource_07FCCAB9_0BD7_AC90_4171_C33E0081072A","hfov":10.5,"data":{"label":"Info Red 02"},"scaleMode":"fit_inside"}],"maps":[],"data":{"label":"Info Red 02"},"areas":["this.HotspotPanoramaOverlayArea_056F8449_0B35_ADF5_419D_CB1D28A949B9"],"enabledInCardboard":true},{"id":"sequence_C7562DCD_CD6F_2837_41E6_F7E37C3DF4B2","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"sequence_C759DDCD_CD6F_2837_41D9_CDD88FA669BA","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96}]},{"id":"AnimatedImageResource_07FD6AB9_0BD7_AC90_41A4_3C6E79F75256","frameDuration":41,"class":"AnimatedImageResource","rowCount":6,"colCount":4,"frameCount":24,"finalFrame":"first","levels":[{"height":660,"class":"ImageResourceLevel","url":"media/res_C2116425_CD75_1877_41CA_2CDFEC14F5DC_0.png","width":1080}]},{"id":"HotspotPanoramaOverlayArea_C318DFF0_CD77_67ED_41C4_587BFAC00203","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_07FD4AB9_0BD7_AC90_4165_ED14BA543A90","frameDuration":41,"class":"AnimatedImageResource","rowCount":6,"colCount":4,"frameCount":24,"finalFrame":"first","levels":[{"height":660,"class":"ImageResourceLevel","url":"media/res_C2116425_CD75_1877_41CA_2CDFEC14F5DC_0.png","width":1080}]},{"id":"HotspotPanoramaOverlayArea_C224AA4D_CD75_E837_418B_AD58B85456A2","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_07FD9AB9_0BD7_AC90_416D_783ABB588472","frameDuration":41,"class":"AnimatedImageResource","rowCount":6,"colCount":4,"frameCount":24,"finalFrame":"first","levels":[{"height":660,"class":"ImageResourceLevel","url":"media/res_C2116425_CD75_1877_41CA_2CDFEC14F5DC_0.png","width":1080}]},{"id":"HotspotPanoramaOverlayArea_C38F6DC8_CD73_283D_41DB_A720FE0367CE","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_07FDCAB9_0BD7_AC90_41A6_0F21B1A2188B","frameDuration":41,"class":"AnimatedImageResource","rowCount":6,"colCount":4,"frameCount":24,"finalFrame":"first","levels":[{"height":660,"class":"ImageResourceLevel","url":"media/res_C2116425_CD75_1877_41CA_2CDFEC14F5DC_0.png","width":1080}]},{"id":"HotspotPanoramaOverlayArea_C2C9BDC2_CD77_282D_41D1_89DE122EA47A","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_07FC7AB9_0BD7_AC90_4190_67DC7339CEDA","frameDuration":41,"class":"AnimatedImageResource","rowCount":6,"colCount":4,"frameCount":24,"finalFrame":"first","levels":[{"height":660,"class":"ImageResourceLevel","url":"media/res_C2116425_CD75_1877_41CA_2CDFEC14F5DC_0.png","width":1080}]},{"id":"HotspotPanoramaOverlayArea_C3777167_CD75_18F3_41D2_1A76E802C651","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_07FC5AB9_0BD7_AC90_4186_50C00B2A1302","frameDuration":41,"class":"AnimatedImageResource","rowCount":6,"colCount":4,"frameCount":24,"finalFrame":"first","levels":[{"height":660,"class":"ImageResourceLevel","url":"media/res_C2116425_CD75_1877_41CA_2CDFEC14F5DC_0.png","width":1080}]},{"id":"HotspotPanoramaOverlayArea_C21170D7_CD75_19D3_41B2_B7FF75585E36","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_07FCCAB9_0BD7_AC90_4171_C33E0081072A","frameDuration":41,"class":"AnimatedImageResource","rowCount":6,"colCount":4,"frameCount":24,"finalFrame":"first","levels":[{"height":1020,"class":"ImageResourceLevel","url":"media/res_04CBC640_0B3C_EDF4_41A1_FC717F14C3D7_0.png","width":680}]},{"id":"HotspotPanoramaOverlayArea_056F8449_0B35_ADF5_419D_CB1D28A949B9","mapColor":"any","click":"this.showPopupPanoramaOverlay(this.popup_1B965D27_0B33_9FBD_4151_AA5C009A5C16,{'borderColor':'#000000','borderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconColor':'#000000','pressedBorderColor':'#000000','pressedIconLineWidth':2,'rollOverIconColor':'#666666','iconLineWidth':2,'rollOverBackgroundOpacity':1,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':1,'pressedIconWidth':20,'rollOverBorderSize':0,'pressedIconColor':'#888888','rollOverIconWidth':20,'paddingRight':5,'rollOverIconLineWidth':2,'paddingLeft':5,'paddingTop':5,'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':1,'borderRadius':0,'iconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','backgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'pressedBorderSize':0,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','pressedIconHeight':20,'pressedBackgroundColorDirection':'vertical'},this.ImageResource_1B003FE5_0B3C_FABC_41A1_1A7BE2CB2927,null,null,null,false)","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true}],"layout":"absolute","gap":10,"watermark":false,"scrollBarColor":"#000000","width":"100%","height":"100%","minHeight":0,"minWidth":0,"propagateClick":false,"start":"this.init()"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.9.js.map
})();
//Generated with v2023.0.9, Thu May 11 2023