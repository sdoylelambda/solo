if (self.CavalryLogger) { CavalryLogger.start_js(["Y+LrP"]); }

__d("CometNewsFeedVPVDStore_newsFeedEdge.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"CometNewsFeedVPVDStore_newsFeedEdge"};e.exports=a}),null);
__d("CometNewsFeedVPVDStore",["CircularBuffer","CometRelay","React","emptyFunction","CometNewsFeedVPVDStore_newsFeedEdge.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("CometRelay").graphql;var h=b("CometRelay").readInlineData,i=(c=b("React")).useCallback,j=c.useContext;d=function(){__p&&__p();var a=new(b("CircularBuffer"))(50);return{readRecentVPVDs:function(){var b=a.read();a.clear();return b},writeRecentVPVD:function(c,d){var e=h(g!==void 0?g:g=b("CometNewsFeedVPVDStore_newsFeedEdge.graphql"),c);c=a.read().find(function(a){var b;a=a.vsid;return(e==null?void 0:(b=e.feed_backend_data)==null?void 0:b.vsid)===a});if(c)return;a.write({evt:"vpv",fetch_tracking:e==null?void 0:(c=e.feed_backend_data)==null?void 0:c.should_recent_vpv_fetch_tracking_data,original_qid:e==null?void 0:(c=e.feed_backend_data)==null?void 0:c.original_qid,qid:e==null?void 0:(c=e.feed_backend_data)==null?void 0:c.qid,timestamp:d,vsid:e==null?void 0:(c=e.feed_backend_data)==null?void 0:c.vsid,vspos:e==null?void 0:(d=e.feed_backend_data)==null?void 0:d.vspos})}}};var k=c.createContext(),l=c.createContext(b("emptyFunction"));function a(a){var c=a.children,d=a.newsFeedEdge,e=j(k);a=i(function(a){e&&e.writeRecentVPVD(d,a)},[d,e]);return b("React").jsx(l.Provider,{value:a,children:c})}e.exports={LoggerContext:l,LoggerProvider:a,StoreProvider:k.Provider,createStore:d}}),null);
__d("CometVPVDUserActivityMonitor",["CometUserActivityMonitor"],(function(a,b,c,d,e,f){"use strict";a={isUserActive:function(){return b("CometUserActivityMonitor").getActivityState()==="ACTIVE"},subscribe:function(a){var c=b("CometUserActivityMonitor").subscribe(function(b){b=b==="ACTIVE";a&&a(b)});return function(){c&&c.remove()}}};e.exports=a}),null);
__d("useVPVDImpression",["requireCond","CometVPVDUserActivityMonitor","React","isIntersectionObserverEntryVPVDVisible","useVisibilityObserver","cr:921407"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback,h=250,i=200;a=function(a){__p&&__p();var c=a.isLite,d=a.minVisiblePx;d=d===void 0?i:d;var e=a.minVisibleTimeMs,f=e===void 0?h:e,j=a.onVPVDEnd;e=a.onVPVDStart;a=b("cr:921407")();var k=a[0];a=a[1];var l=g(function(a){if(a.visibleDuration<f)return;j(a)},[f,j]),m=c===!0?1:d;d=g(function(a){return b("isIntersectionObserverEntryVPVDVisible")(a,m)},[m]);c=c===!0?null:{thresholdOverride:"EXPENSIVE"};d=babelHelpers["extends"]({activityMonitorOverride:b("CometVPVDUserActivityMonitor"),hiddenWhenCSSStyleHidden:!0,hiddenWhenZeroArea:!0,isEntryInViewport:d},c);c=b("useVisibilityObserver")({onHidden:l,onVisibilityDurationUpdated:a,onVisible:e,options:d});return[c,k]};e.exports=a}),null);
__d("InteractionSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TOP_NEWS:0,FRIEND_LIST:1,TICKER:2,TIMELINE:3,GROUPS:4,APPS_AND_GAMES:5,PHOTOS:6,LINKS:7,PERMALINK:8,LOCKFEED:9,UNKNOWN_INTERACTION_SOURCE:10,COMMENT_POPOVER:11,VPV_FORCED:12,BEST_FEED:13,UNSEEN_FEED:14,PIVOTS:15,SHARED_OBJECT:16,PAPER:17,NOTIFICATIONS:18,RECENT_VPVS_GRAPHQL_FILTER:19,EXPLORE_FEED:20,PAGE_STORIES_YOU_MISSED:21,REDSPACE:22,VH_LIVE:23,GROUP_TOP_STORIES:24,GROUPS_INBOX:25,COMMENT_VPVD:26,PAGES:27,VIDEO_FULLSCREEN_PLAYER:28,VIDEO_HOME:29,RECENT_COMMENT_VPV:30,PHOTOS_PREVIEW:31,SEEN_FEED:32,MEMORIES_HOME:33,CUSTOM_FEED:34,SNOWFLAKE:35,FB_STORIES:36,SNOWFLAKE_MEDIAS:37,PHOTOS_PREVIEW_UNDER_SHARED_OBJECT:38,QUICK_PROMOTION_OBJECT:39,LASSO:40,SEARCH_VOYAGER:41,BUSINESS_FEED:42,CRS:43,PAGE_VIDEO_THUMBNAIL:44,VIDEO_CATALOG_THUMBNAIL:45,MESSENGER_VIDEO:46,PERMALINK_OR_PHOTO_CHAINING:47,FB_STORIES_BUCKET:48,TAO_WATCHED_VIDEOS:49,TAO_WATCHED_SHOW_VIDEOS_WITH_POSITION:50,TAO_EVER_WATCHED_SHOW_VIDEOS:51,GAMES_FEED:52,GROUPS_TAB:53,VIDEO_CHAINING:54,END_OF_FEED:55,CRISIS_PAGE:56,SHOWCASE_OBJECT:57,SHOWCASE_UNIT:58,TAHOE_ENDSCREEN_SUGGESTED_VIDEOS:59,FRIEND_DEEP_DIVE:60,IFR_DEEP_DIVE:61,FRIENDS_HOME_DIVE:62,MOST_RECENT_FEED:63,FAN_SUBSCRIPTIONS_EXCLUSIVE_CONTENT_FEED:64,SFV_SHORTS:65,FAVORITES_FEED:66,MAX_INTERACTION_SOURCE:67})}),null);
__d("useStoryVPVDLogger",["requireDeferred","CometInteractionSourceContext","CometNewsFeedVPVDStore","InteractionSource","React","WebSession","gkx","useVPVDImpression"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("requireDeferred")("Banzai"),h=b("React").useCallback,i=b("React").useContext,j=b("React").useRef,k=Object.keys(b("InteractionSource")).reduce(function(a,c){a[b("InteractionSource")[c]]=c;return a},{}),l=function(a){var c;return{csp:a.position,is_agg:a.isAggregated,is_agg_sub:a.isAggregatedSubStory,is_self:a.isSelfPost,logged_before:a.loggedBefore,sid_raw:b("WebSession").getId(),source:a.source,source_override:a.source_override,story_height:a.story_height,story_width:a.story_width,storyId:a.id,vpvd_start_timestamp_ms:a.visibleTime,vpvd_time_delta_ms:a.hiddenTime-((c=a.visibleTime)!=null?c:0),xt:a.encrypted_tracking}};function a(a){__p&&__p();var c=a.interactionSourceOverride,d=a.isAggregated,e=d===void 0?null:d;d=a.isAggregatedSubStory;var f=d===void 0?null:d;d=a.isSelfPost;var m=d===void 0?null:d,n=a.position,o=a.trackable,p=i(b("CometInteractionSourceContext"));a=k[(d=c)!=null?d:p];var q="STORYID-"+n+"-"+a+"-"+(o||"").slice(0,15),r=i(b("CometNewsFeedVPVDStore").LoggerContext),s=j(null),t=j(null),u=j(!1);d=h(function(a){var b=a.entry;a=a.visibleTime;r(a);s.current=(a=b==null?void 0:(a=b.boundingClientRect)==null?void 0:a.height)!=null?a:null;t.current=(b=b==null?void 0:(a=b.boundingClientRect)==null?void 0:a.width)!=null?b:null},[r]);a=h(function(a){var b,d=a.hiddenTime;a=a.visibleTime;var h=s.current!=null?Math.round(s.current):null,i=t.current!=null?Math.round(t.current):null,j=l({encrypted_tracking:(b=o)!=null?b:"",hiddenTime:d,id:q,isAggregated:e,isAggregatedSubStory:f,isSelfPost:m,loggedBefore:u.current,position:n,source:p,source_override:c,story_height:h,story_width:i,visibleTime:a});u.current=!0;g.onReady(function(a){a.post("comet_metrics:vpvd",j)})},[o,q,e,f,m,n,p,c]);return b("useVPVDImpression")({onVPVDEnd:a,onVPVDStart:d})}e.exports=a}),null);
__d("LiveProducerInputSource",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({STREAM_KEYS:"STREAM_KEYS",PAIRED_ENCODERS:"PAIRED_ENCODERS",CAMERA:"CAMERA"})}),null);
__d("VideoTargetEntityType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({PERSON:"PERSON",PAGE:"PAGE",GROUP:"GROUP",EVENT:"EVENT"})}),null);
__d("LiveProducerConstants",["DateConsts","LiveProducerInputSource","VideoBroadcastStatus","VideoTargetEntityType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a=b("DateConsts").MS_PER_SEC;c=273465416184080;d="live_producer";f=Object.freeze({PAGE:"PAGE",PROFILE:"PROFILE"});var h=b("LiveProducerInputSource"),i=[13,15,16,17,18,19,20,21,25],j=13,k={FEED_LOCATION:"LIVE_PRODUCER",FEEDBACK_SOURCE:70,MAX_SHOWN_COMMENTS:50,STORY_RENDER_LOCATION:"live_producer"},l={CLOSED:"CLOSED",RESULTS_OPEN:"RESULTS_OPEN",VOTING_OPEN:"VOTING_OPEN"};l=babelHelpers["extends"]({},l,{LIVE_PRODUCER_CREATION_SOURCE:"WWW_LIVE_OPS_PRODUCER",MAX_POLL_OPTIONS:4,MIN_POLL_OPTIONS:2,UNATTACHED:"unattached"});var m={MAX_RATING:5,MIN_RATING:1},n={STAR_TYPE_LEADERBOARD:"leaderboard",STAR_TYPE_LIST:"starList"},o=8,p=10,q=320,r=100,s=20,t=15*1024*1024,u=20,v=15*1024*1024,w=20,x=[(g=b("VideoBroadcastStatus")).LIVE_STOPPED,g.SEAL_STARTED,g.SEAL_FAILED,g.VOD_READY,g.SCHEDULED_EXPIRED,g.SCHEDULED_CANCELED];a=3*a;var y=500,z="/help/publisher/1155396977985198";e.exports={AUDIENCE_RESTRICTION_AGES:i,AUDIENCE_RESTRICTION_MIN_AGE:j,CAMERA_BROADCAST_COUNTDOWN_MILLISECONDS:a,CHARITY_STREAM_HELP_URL:z,COMMENTS_CONSTANTS:k,DEBOUNCE_WAIT:y,ERROR_LOGS_PAGINATION_COUNT:p,LIVE_MAX_DURATION_IN_HOURS:o,LIVE_PRODUCER_ACTOR_TYPES:f,LIVE_PRODUCER_POST_LIVE_STATES:x,LIVE_PRODUCER_SOURCE_TYPES:h,LIVE_VIDEO_WWW_API_BROADCASTING_APP_ID:c,MAX_AUDIO_BITRATES:v,MAX_VIDEO_BITRATES:t,MIN_AUDIO_BITRATES:u,MIN_FRAMERATES:w,MIN_POPOUT_PLAYER_THRESHOLD_PX:r,MIN_VIDEO_BITRATES:s,POLL_CONSTANTS:l,POPOUT_PLAYER_THRESHOLD_PX:q,POST_LIVE_CONSTANTS:m,PROJECT_NAME:d,STAR_CONSTANTS:n,VideoBroadcastStatus:g,VideoTargetEntityType:b("VideoTargetEntityType")}}),null);
__d("useFeedClickEventHandler",["React","useStoryClickEventLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useCallback;function a(a,c){var d=b("useStoryClickEventLogger")();return g(function(b){a&&a(b);var e=b.type;if(e==="click"||e==="contextmenu"||e==="mousedown"&&typeof b.button==="number"&&(b.button===1||b.button===2)||e==="keydown"&&(b.key==="Enter"||b.key===" ")){e=typeof b.button==="number"?b.button:0;d(b.timeStamp,e,c)}},[a,d,c])}e.exports=a}),null);
__d("DOMRectIsEqual",["DOMRectReadOnly"],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(!a&&!b)return!0;else if(!a||!b)return!1;return a.x===b.x&&a.y===b.y&&a.width===b.width&&a.height===b.height}e.exports=a}),null);
__d("computeAspectRatio",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){a=a!=null&&b!=null&&a!==0&&b!==0?a/b:null;return a}e.exports=a}),null);
__d("VideoPlayerContexts",["React","computeAspectRatio"],(function(a,b,c,d,e,f){"use strict";__p&&__p();c=b("React").createContext;var g=b("React").useMemo;d=c(!1);f=c("");var h=c(""),i=c(null),j=c(0),k=c(!1),l=c(!1),m=c(!0),n=c(!1),o=c(!1),p=c(null),q=c(!1),r=c(!1),s=c(null),t=c(null),u=c(null),v=c(null),w=c([]),x=c("notselected"),y=c(""),z=c(null),A=c(!1),B=c(!1),C=c(1),D=c(!1),E=c(0),F=c(0),G=c(null),H=c({originalAspectRatio:null,originalHeight:null,originalWidth:null});function a(a){var c=a.children,d=a.originalHeight,e=a.originalWidth;a=g(function(){var a;return{originalAspectRatio:b("computeAspectRatio")(e,d),originalHeight:(a=d)!=null?a:null,originalWidth:(a=e)!=null?a:null}},[d,e]);return b("React").jsx(H.Provider,{value:a,children:c})}var I=c(null),J=c(null),K=c(null),L=c(!1),M=c(!1),N=c(null),O=c(!1),P=c("unknown"),Q=c(!1),R=c({release:function(a){},reserve:function(a){return a}}),S=c([]);c=c(!1);e.exports={ActiveCaptionsContext:z,AdClientTokenContext:i,AutoplayGatingResultContext:P,AvailableVideoQualitiesContext:w,BroadcastStatusContext:N,BufferEndContext:F,CanAutoplayContext:O,CaptionsLoadedContext:B,CaptionsVisibleContext:A,ControllerContext:s,CurrentLoopContext:j,CurrentVideoQualityContext:y,DimensionsContext:I,DurationContext:E,EndedContext:n,ErrorContext:p,InPlayStallingContext:o,InbandCaptionsAutogeneratedContext:Q,InstanceKeyContext:G,IsAbrEnabledContext:d,IsLiveContext:q,LastMuteReasonContext:t,LastPauseReasonContext:v,LastPlayReasonContext:u,MutedContext:D,PausedContext:m,PlayerImplementationNameContext:J,PlayingContext:k,SeekingContext:r,SelectedVideoQualityContext:x,StallingContext:l,StreamInterruptedContext:c,TargetAudioQualityContext:f,TargetVideoQualityContext:h,VideoOriginalDimensionsContext:H,VideoOriginalDimensionsContextMemoProvider:a,VideoPlayerCaptionsReservationActionsContext:R,VideoPlayerCaptionsReservationsContext:S,VideoPlayerMouseHoverContext:L,VideoPlayerMouseIdleContext:M,VideoStateDebugApiToolsContext:K,VolumeContext:C}}),null);
__d("VideoPlayerUtils",["unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,c){c===void 0&&(c="Value null");if(a===null)throw b("unrecoverableViolation")("Assertion failed: "+c+".","comet_video_player");return a}function c(a,c){c===void 0&&(c="Value undefined");if(a===void 0)throw b("unrecoverableViolation")("Assertion failed: "+c+".","comet_video_player");return a}e.exports={assertNotNull:a,assertNotUndefined:c}}),null);
__d("VideoPlayerViewabilityContexts",["DOMRectReadOnly","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext;c=a(null);d=a(!1);e.exports={VideoPlayerFullscreenContext:d,VideoPlayerPassiveViewabilityInfoContext:c}}),null);
__d("VideoPlayerHooks",["DOMRectIsEqual","LiveProducerConstants","React","VideoPlayerContexts","VideoPlayerUtils","VideoPlayerViewabilityContexts","clearTimeout","setTimeout","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=(g=b("React")).useContext,i=g.useEffect,j=g.useRef,k=g.useState,l=(g=b("VideoPlayerContexts")).ActiveCaptionsContext,m=g.AdClientTokenContext,n=g.AutoplayGatingResultContext,o=g.AvailableVideoQualitiesContext,p=g.BroadcastStatusContext,q=g.BufferEndContext,r=g.CanAutoplayContext,s=g.CaptionsLoadedContext,t=g.CaptionsVisibleContext,u=g.ControllerContext,v=g.CurrentLoopContext,w=g.CurrentVideoQualityContext,x=g.DimensionsContext,y=g.DurationContext,z=g.EndedContext,A=g.ErrorContext,B=g.InbandCaptionsAutogeneratedContext,C=g.InPlayStallingContext,D=g.InstanceKeyContext,E=g.IsAbrEnabledContext,F=g.LastMuteReasonContext,G=g.LastPauseReasonContext,H=g.LastPlayReasonContext,I=g.MutedContext,J=g.PausedContext,K=g.PlayerImplementationNameContext,L=g.PlayingContext,M=g.SeekingContext,N=g.SelectedVideoQualityContext,O=g.StallingContext,P=g.StreamInterruptedContext,Q=g.TargetAudioQualityContext,R=g.TargetVideoQualityContext,S=g.VideoOriginalDimensionsContext,T=g.VideoPlayerCaptionsReservationActionsContext,U=g.VideoPlayerCaptionsReservationsContext,V=g.VideoPlayerMouseHoverContext,W=g.VideoPlayerMouseIdleContext,aa=g.VideoStateDebugApiToolsContext,ba=g.VolumeContext,X=b("VideoPlayerUtils").assertNotNull,ca=b("VideoPlayerViewabilityContexts").VideoPlayerFullscreenContext,da=b("VideoPlayerViewabilityContexts").VideoPlayerPassiveViewabilityInfoContext;function a(a){var c=j(a);b("useLayoutEffect_SAFE_FOR_SSR")(function(){c.current=a},[a]);return c}function Y(){return X(h(u),"Controller not provided. You are probably trying to render Video Component outside of a VideoPlayer")}function c(){return X(h(D),"InstanceKey not provided. You are probably trying to render Video Component outside of a VideoPlayer")}function d(){var a=$();return a===b("LiveProducerConstants").VideoBroadcastStatus.LIVE}function f(){return h(q)}function ea(){return h(y)}function fa(){return h(M)}function ga(){return h(z)}function ha(){return h(A)}function ia(){return h(L)}function ja(){var a=k(0),b=a[0],c=a[1],d=Y();i(function(){var a=d.subscribe(function(){c(d.getPlayheadPosition())});c(d.getPlayheadPosition());return function(){return a.remove()}},[d]);return b}function ka(a){__p&&__p();var c=k(0),d=c[0],e=c[1],f=Y(),g=j(null),h=j(d);i(function(){var c=f.subscribe(function(){h.current=f.getPlayheadPosition();if(g.current!=null)return;g.current=b("setTimeout")(function(){e(h.current),g.current=null},a)});e(f.getPlayheadPosition());return c.remove},[f,a]);i(function(){return function(){g.current!==null&&b("clearTimeout")(g.current)}},[]);return d}function la(){return h(J)}function ma(){return h(O)}function na(){return h(C)}function oa(){return h(F)}function pa(){return h(G)}function qa(){return h(H)}function ra(){return h(o)}function sa(){return h(t)}function ta(){return h(l)}function ua(){return h(w)}function va(){return h(N)}function wa(){return h(I)}function xa(){return h(ba)}function ya(){return h(ca)}function za(){return h(x)}function Aa(){return h(S)}function Ba(){return h(K)}function Ca(){return X(h(aa),"Video State Debug Api Tools not provided. You are probably trying to render Video Component outside of a VideoPlayer")}function Da(){return h(s)}function Ea(){return h(E)}function Fa(){return h(R)}function Ga(){return h(Q)}function Ha(){return h(V)}function Ia(){return h(W)}function Z(){return h(da)}function Ja(){__p&&__p();var a=Z(),c=k({positionToViewport:null,visiblePercentage:0}),d=c[0],e=c[1],f=j(d);i(function(){f.current=d},[d]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){if(a){var c=a.subscribe(function(){var c=a.getCurrent(),d=c.positionToViewport;c=c.visiblePercentage;var g=f.current;(c!==g.visiblePercentage||!b("DOMRectIsEqual")(d,g.positionToViewport))&&e({positionToViewport:d,visiblePercentage:c})});return function(){return c.remove()}}},[e,a]);return d}function $(){return h(p)}function Ka(){return h(r)}function La(){return h(n)}function Ma(){return h(m)}function Na(){return h(v)}function Oa(){return h(B)}function Pa(){return h(U)}function Qa(){return h(T)}function Ra(){return h(P)}e.exports={useActiveCaptions:ta,useAdClientToken:Ma,useAutoplayGatingResult:La,useAvailableVideoQualities:ra,useBroadcastStatus:$,useBufferEnd:f,useCanAutoplay:Ka,useCaptionsLoaded:Da,useCaptionsVisible:sa,useController:Y,useCurrentLoop:Na,useCurrentTime:ja,useCurrentTimeThrottled:ka,useCurrentVideoQuality:ua,useDimensions:za,useDuration:ea,useEnded:ga,useError:ha,useInPlayStalling:na,useInbandCaptionsAutogenerated:Oa,useInstanceKey:c,useIsAbrEnabled:Ea,useIsFullscreen:ya,useIsHovering:Ha,useIsLive:d,useIsMouseIdle:Ia,useLastMuteReason:oa,useLastPauseReason:pa,useLastPlayReason:qa,useLatestValueRef:a,useMuted:wa,usePaused:la,usePlayerImplementationName:Ba,usePlaying:ia,useSeeking:fa,useSelectedVideoQuality:va,useStalling:ma,useStreamInterrupted:Ra,useTargetAudioQuality:Ga,useTargetVideoQuality:Fa,useVideoOriginalDimensions:Aa,useVideoPlayerCaptionsReservationActions:Qa,useVideoPlayerCaptionsReservations:Pa,useVideoPlayerPassiveViewabilityInfo:Z,useVideoPlayerViewabilityInfo:Ja,useVideoStateDebugApiTools:Ca,useVolume:xa}}),null);
__d("VideoPlayerCaptions.react",["React","VideoPlayerHooks","recoverableViolation","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("VideoPlayerHooks").useActiveCaptions,i=b("VideoPlayerHooks").useVideoPlayerCaptionsReservations,j={captionsCenterAlign:{justifyContent:"taijpn5t",textAlign:"oqcyycmt"},captionsContainer:{bottom:"lhzng9rx",display:"j83agx80",justifyContent:"taijpn5t",position:"pmk7jnqg",textAlign:"oqcyycmt",transitionDuration:"pc15xi3s",transitionProperty:"flx89l3n",transitionTimingFunction:"eloblzlw",width:"k4urcfbm"},captionsDefault:{backgroundColor:"d6rk862h",color:"ljqsnud1",fontSize:"a5q79mjw",fontWeight:"ekzkrbhg",lineHeight:"j8p27hm0",marginTop:"kvgmc6g5",marginEnd:"nw5zvenu",marginBottom:"oygrvhab",marginStart:"pbhxczp3",paddingTop:"debrwdc1",paddingEnd:"m4n6deaq",paddingBottom:"pwvavz3a",paddingStart:"n1w2zk5c"},captionsLeftAlign:{justifyContent:"jifvfom9",textAlign:"hzawbc8m"},captionsRightAlign:{justifyContent:"bkfpd7mw",textAlign:"ftzlm3b6"}};function k(a){switch(a){case"center":return j.captionsCenterAlign;case"left":return j.captionsLeftAlign;case"right":return j.captionsRightAlign;default:b("recoverableViolation")("Unsupported captions text alignment: "+a,"comet_video_player")}}var l=b("React").memo(function(a){__p&&__p();var c=a.activeCaptions;a=a.bottomAdjustment;a=a===void 0?0:a;var d=c==null?void 0:c.rows;if(d!=null&&d.length>0){d=d.map(function(a){return a.trim()}).filter(function(a){return!!a});return d.length>0?b("React").jsx("div",{className:(g||(g=b("stylex")))(j.captionsContainer,k((c=c==null?void 0:(c=c.styles)==null?void 0:c.textAlignment)!=null?c:"center")),style:{transform:"translateY("+-a+"px)"},children:b("React").jsx("div",{className:(g||(g=b("stylex")))(j.captionsDefault),children:d.map(function(a,c){return b("React").jsxs("span",{children:[a,b("React").jsx("br",{})]},c)})})}):null}return null});function a(){var a=h(),c=i(),d=0;c.length>0&&(d=c.filter(function(a){return a.location==="bottom"}).reduce(function(a,b){return a+b.height},0));return b("React").jsx(l,{activeCaptions:a,bottomAdjustment:d})}e.exports=a}),null);
__d("VideoPlayerCaptionsArea.react",["React","VideoPlayerCaptions.react","VideoPlayerContexts","VideoPlayerHooks"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useReducer,h=b("React").useState,i=b("VideoPlayerContexts").VideoPlayerCaptionsReservationActionsContext,j=b("VideoPlayerContexts").VideoPlayerCaptionsReservationsContext,k=b("VideoPlayerHooks").useCaptionsVisible;function l(a,b){switch(b.type){case"reserve":return a.concat(b.reservation);case"release":return a.filter(function(a){return a!==b.reservation});default:return a}}function a(a){a=a.children;var c=g(l,[]),d=c[0],e=c[1];c=h({release:function(a){e({reservation:a,type:"release"})},reserve:function(a){e({reservation:a,type:"reserve"});return a}});c=c[0];var f=k();return b("React").jsx(i.Provider,{value:c,children:b("React").jsxs(j.Provider,{value:d,children:[f?b("React").jsx(b("VideoPlayerCaptions.react"),{}):null,a]})})}e.exports=a}),null);
__d("VideoPlayerCaptionsAreaDeferred.react",["requireDeferredForDisplay","React","deferredLoadComponent"],(function(a,b,c,d,e,f){"use strict";a=b("deferredLoadComponent")(b("requireDeferredForDisplay")("VideoPlayerCaptionsArea.react"));e.exports=a}),null);
__d("SphericalMediaGyroOverlay.react",["cx","CSS","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=800,i=function(a,b,c){b===void 0&&(b=!0);c===void 0&&(c=!1);return{gyroRoot:"_1zvy"+(a?" _2dz7":"")+(b?" _4z8s":"")+(c?" _4z8p":""),gyroOuter:"_4z8q",gyroInner:"_4z8r",gyroMeridian:"_4z8t",gyroEquator:"_4z8u",gyroTextShell:"_4z8v",gyroText:"_4z8w"}};a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.rootRef=b("React").createRef(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidUpdate=function(a){var c=this;if(a.isActive&&!this.props.isActive)setTimeout(function(){var a=c.rootRef.current;a instanceof Element&&b("CSS").hide(a)},h);else if(!this.props.isActive){a=this.rootRef.current;a instanceof Element&&b("CSS").hide(a)}};d.componentDidMount=function(){if(!this.props.isActive){var a=this.rootRef.current;a instanceof Element&&b("CSS").hide(a)}};d.render=function(){var a=this.props,c=a.className,d=a.isActive,e=a.isInfinite;a=a.isPaused;d=i(d,e,a);return(e=b("React")).jsx("div",{className:b("joinClasses")(c,d.gyroRoot),ref:this.rootRef,children:e.jsxs("div",{className:d.gyroOuter,children:[e.jsxs("div",{className:d.gyroInner,children:[e.jsx("div",{className:d.gyroMeridian}),e.jsx("div",{className:d.gyroEquator})]}),e.jsx("div",{className:d.gyroTextShell,children:e.jsx("span",{className:d.gyroText,children:"360"})})]})})};return c}(b("React").PureComponent);e.exports=a}),null);
__d("VideoPlayerSphericalFallbackCover.react",["fbt","React","SphericalMediaGyroOverlay.react","TetraText.react","stylex","unrecoverableViolation","useCometRouterDispatcher","useFeedClickEventHandler"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useState;function a(a){__p&&__p();var c=a.videoTahoeUrl,d=b("useCometRouterDispatcher")();a=h(!1);var e=a[0],f=a[1];if(d==null)throw b("unrecoverableViolation")("Missing CometRouterDispatcher","comet_video_player");a=b("useFeedClickEventHandler")(function(){d.go(c,{})});return b("React").jsxs("div",{className:"bkfpd7mw cbu4d94t j83agx80 nhd2j8a9 bp9cbjyn kr520xx4 j9ispegn pmk7jnqg n7fi1qx3 rq0escxv i09qtzwb",onClick:a,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},role:"link",tabIndex:0,children:[b("React").jsx(b("SphericalMediaGyroOverlay.react"),{isActive:!0}),b("React").jsx("div",{className:"l9j0dhe7 i7orit0i",children:e?b("React").jsx(b("TetraText.react"),{color:"white",type:"bodyLink3",children:g._("Click to expand")}):null})]})}e.exports=a}),null);
__d("VideoPlayerSpinner.react",["CometLoadingAnimation.react","React","VideoPlayerHooks","stylex","useDebouncedValue"],(function(a,b,c,d,e,f){"use strict";var g,h=b("VideoPlayerHooks").useStalling,i=36;function a(){var a=h();a=a;var c=b("useDebouncedValue")(a,a?200:500);return b("React").jsx("div",{className:(g||(g=b("stylex"))).dedupe({"height-1":"tv7at329","opacity-1":"pedkr2u6","position-1":"pmk7jnqg","start-1":"kfkz5moi","top-1":"rk01pc8j","transform-0.1":"py2didcb","transition-delay-1":"chkx7lpg","transition-duration-1":"kmdw4o4n","transition-property-1":"art1omkt","transition-timing-function-1":"e4zzj2sf","width-1":"thwo4zme"},a?null:{"opacity-1":"b5wmifdl","transition-delay-1":"hwaazqwg","transition-duration-1":"kmdw4o4n","transition-property-1":"l23jz15m","transition-timing-function-1":"e4zzj2sf","visibility-1":"kr9hpln1"}),children:b("React").jsx(b("CometLoadingAnimation.react"),{animationPaused:!c,size:i})})}e.exports=a}),null);