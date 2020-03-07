if (self.CavalryLogger) { CavalryLogger.start_js(["dtJrq"]); }

__d("ZenonDeviceInfoUtils",["UserAgentData"],(function(a,b,c,d,e,f){"use strict";e.exports={getDeviceSoftwareInfo:function(){var a=b("UserAgentData").platformName,c=b("UserAgentData").browserName;window.navigator.userAgent.toLowerCase().includes("mobile")&&(a+=" Mobile",c==="Chrome"&&(c="Mobile "+c));window.external&&window.external.pinPage&&(c==="Chrome"&&(c+=" Edge"));return{device:b("UserAgentData").deviceName,os:a,os_version:b("UserAgentData").platformFullVersion,browser:c,browser_version:b("UserAgentData").browserFullVersion,screen_height:window.screen.availHeight,screen_width:window.screen.availWidth,user_agent:window.navigator.userAgent}}}}),null);
__d("ZenonVCSTypes",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({DIRECT_VIDEO:"direct_video",ESCALATED:"escalated",ESCALATION_DECLINED:"escalation_declined",VOIP:"voip",MWS:"mws"});b=Object.freeze({LL_NONE:0,LL_BASIC:1,LL_DEBUG:2,LL_WARNING:3,LL_INFO:4,LL_VERBOSE:5});e.exports={ZenonCallType:a,ZenonUploadLogLevel:b}}),null);
__d("ZenonCallSummary",["FBRTCExperiment","FBRTCLocalUploadLogLevel","SiteData","ZenonCallSummaryStore","ZenonDeviceInfoUtils","ZenonDismissReason","ZenonVCSTypes","gkx","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("ZenonCallSummaryStore").ZenonCallSummaryStoreInstance;var h=b("ZenonVCSTypes").ZenonCallType,i=b("ZenonVCSTypes").ZenonUploadLogLevel,j={PRESSED_ANSWER:"p_a"};function k(a){if(a==="mw"){a=b("FBRTCExperiment").gen("rtc_www_zenon_platform_support");a=a.getBool("use_zenon_platform",!1,!1);if(a)return"ZenonPlatform"}a=b("gkx")("1154135");return a?"ZenonScotch":"Old Codebase"}var l=19,m=24,n={CALL_STARTED:"started",SENT_OFFER:"s_o",RECV_OFFER:"r_o",SENT_OFFER_ACK:"s_oack",RECV_OFFER_ACK:"r_oack",SENT_RETRIED_OFFER:"s_o2",RECV_RETRIED_OFFER:"r_o2",SENT_RETRIED_OFFER_ACK:"s_oack2",RECV_RETRIED_OFFER_ACK:"r_oack2",SENT_PRANSWER:"s_pr",RECV_PRANSWER:"r_pr",NETWORK_READY:"network_ready",SENT_ANSWER:"s_a",RECV_ANSWER:"r_a",SENT_ANSWER_ACK:"s_aack",RECV_ANSWER_ACK:"r_aack",SENT_RETRIED_ANSWER:"s_a2",RECV_RETRIED_ANSWER:"r_a2",SENT_RETRIED_ANSWER_ACK:"s_aack2",RECV_RETRIED_ANSWER_ACK:"r_aack2",SENT_OK:"s_ok",RECV_OK:"r_ok",CALL_CONNECTED:"connected",CALL_ENDED:"ended",SENT_JOIN_REQUEST:"s_jreq",RECV_JOIN_RESPONSE:"r_jresp",PROC_JOIN_RESPONSE:"p_jresp",RECV_RING_REQUEST:"r_rreq",SENT_RING_RESPONSE:"s_rresp"},o={DEVICE_INFO:"device_info",INITIATED_BY_PAGE_ID:"initiated_by_page_id",INITIATED_BY_APP_ID:"initiated_by_app_id",SURVEY_CHOICE:"survey_choice",SURVEY_DETAILS:"survey_details",SURVEY_SHOWN:"survey_shown",PEER_IS_MOBILE:"peer_is_mobile",RATING_SHOWN:"rating_shown",RATING:"rating5"};a=function(){__p&&__p();function a(a){__p&&__p();var c=a.peerID,d=a.callID,e=a.callTrigger,f=a.isCaller,i=a.uploadLogLevel,j=a.protocol;a=a.isVideo;this.$20=0;this.$21=0;this.$26={};this.$27={};this.$28={};this.$29={};this.$30={};this.$31={};this.$32={};this.$33={};this.$39={sender:{},receiver:{},video:{}};this.$41={};this.$1=c;this.$2=d;this.$4=f;this.$3=m;this.$7=k(j);this.$5=(c=i)!=null?c:b("FBRTCLocalUploadLogLevel").getLocalUploadLogLevel();this.$6=e;this.$23=new Date().valueOf();this.$8=j!=="p2p"?"mws":"p2p";this.$8==="p2p"?this.setCallType(a?h.DIRECT_VIDEO:h.VOIP):this.setCallType(h.MWS);this.$25=(g||(g=b("performanceNow")))();this.$24=0;this.$22=this.$25;this.$40=0;this.$41[o.DEVICE_INFO]=b("ZenonDeviceInfoUtils").getDeviceSoftwareInfo();this.$42()}a.fromJsonString=function(b){__p&&__p();try{b=JSON.parse(b)}catch(a){return null}if(b.version<l)return null;if(!Object.prototype.hasOwnProperty.call(b,"peerID")||!Object.prototype.hasOwnProperty.call(b,"callID")||!Object.prototype.hasOwnProperty.call(b,"isCaller")||!Object.prototype.hasOwnProperty.call(b,"startTime")||!Object.prototype.hasOwnProperty.call(b,"trigger")||!Object.prototype.hasOwnProperty.call(b,"signalingTime")||!Object.prototype.hasOwnProperty.call(b,"lastUpdatedTime")||!Object.prototype.hasOwnProperty.call(b,"lastSerializedTime"))return null;var c=new a({peerID:b.peerID,callID:b.callID,isCaller:b.isCaller,protocol:b.activeConn,isVideo:b.callType===h.DIRECT_VIDEO});c.$3=b.version;c.$5=b.uploadLogLevel;c.$23=b.startTime;c.$6=b.trigger;c.$7=b.clientVersion;c.$26=b.signalingTime;c.$14=b.endCallReason;c.$15=b.endCallSubreason;c.$16=b.isRemoteEnded;c.$20=b.lastUpdatedTime;c.$21=b.lastSerializedTime;c.$10=b.joinWithSID;b.conferenceName&&(c.$9=b.conferenceName);b.escP2PCallID&&(c.$11=b.escP2PCallID);b.activeConn&&(c.$8=b.activeConn);b.serverInfoData&&(c.$13=b.serverInfoData);b.localVideoDuration&&(c.$34=b.localVideoDuration);b.remoteVideoDuration&&(c.$35=b.remoteVideoDuration);b.unsetOnRetrieve&&(c.$19=b.unsetOnRetrieve);b.openCount&&(c.$40=b.openCount);b.extraInfo&&(c.$41=b.extraInfo);b.gen0IceSentCount&&(c.$30=b.gen0IceSentCount);b.gen0IceReceivedCount&&(c.$31=b.gen0IceReceivedCount);b.iceSentCount&&(c.$32=b.iceSentCount);b.iceReceivedCount&&(c.$33=b.iceReceivedCount);b.accumulatedCallTime&&(c.$24=b.accumulatedCallTime);b.escStateTimes&&(c.$27=b.escStateTimes);b.applicationEventTime&&(c.$28=b.applicationEventTime);b.videoEscTimes&&(c.$29=b.videoEscTimes);b.mediaStats&&(c.$39=b.mediaStats);b.connectionType&&(c.$17=b.connectionType);b.videoReceivedCodec!==null&&(c.$36=b.videoReceivedCodec);b.videoSentCodec!==null&&(c.$37=b.videoSentCodec);b.audioSentCodec!==null&&(c.$38=b.audioSentCodec);b.relayIP!==null&&b.relayIP!==void 0&&(c.$18=b.relayIP);return c};var c=a.prototype;c.toJsonString=function(){this.$21=new Date().valueOf();return JSON.stringify({version:this.$3,peerID:this.$1,callID:this.$2,isCaller:this.$4,uploadLogLevel:this.$5,callType:this.$12,conferenceName:this.$9,joinWithSID:this.$10,activeConn:this.$8,escP2PCallID:this.$11,serverInfoData:this.$13,localVideoDuration:this.$34,remoteVideoDuration:this.$35,startTime:this.$23,trigger:this.$6,signalingTime:this.$26,escStateTimes:this.$27,applicationEventTime:this.$28,videoEscTimes:this.$29,endCallReason:this.$14,endCallSubreason:this.$15,isRemoteEnded:this.$16,lastUpdatedTime:this.$20,lastSerializedTime:this.$21,unsetOnRetrieve:this.$19,extraInfo:this.$41,gen0IceSentCount:this.$30,gen0IceReceivedCount:this.$31,iceSentCount:this.$32,iceReceivedCount:this.$33,connectionType:this.$17,mediaStats:this.$39,accumulatedCallTime:this.$43(),videoReceivedCodec:this.$36,videoSentCodec:this.$37,audioSentCodec:this.$38,relayIP:this.$18,clientVersion:this.$7})};c.unsetEndCallFields=function(){this.$14=null,this.$15=null,this.$16=null,delete this.$26[n.CALL_ENDED],this.$25=0,this.$19=null};c.isNull=function(){return this.$1==="0"&&this.$2==="0"&&!this.$4&&this.$6==="NULL_SUMMARY"};c.getExtraInfo=function(){return this.$41};c.getLastUpdatedTime=function(){return this.$20};c.save=function(a){a.storeCallSummary(this.$1,this.$2,this),this.$22=(g||(g=b("performanceNow")))()};c.onCallAccepted=function(a){this.$28[j.PRESSED_ANSWER]=this.$43(),this.$6=a,this.$42()};c.onCallConnected=function(){this.$44(n.CALL_CONNECTED),this.$42()};c.onCallEnded=function(a,b,c,d){this.$19=c,this.$14=a,this.$15=d,this.$16=b,this.$44(n.CALL_ENDED),this.$42()};c.onInviteResponded=function(){var a=this.$8==="p2p"?n.SENT_OFFER_ACK:n.SENT_RING_RESPONSE;this.$44(a);this.$42()};c.onInviteReceived=function(){var a=this.$8==="p2p"?n.RECV_OFFER:n.RECV_RING_REQUEST;this.$44(a);this.$42()};c.onInviteSent=function(){this.$44(n.SENT_JOIN_REQUEST),this.$42()};c.onInviteResponseReceived=function(){this.$44(n.RECV_JOIN_RESPONSE),this.$42()};c.onInviteResponseProcessed=function(){this.$44(n.PROC_JOIN_RESPONSE),this.$42()};c.onMediaConnected=function(){this.$44(n.NETWORK_READY),this.$42()};c.setIsPeerMobile=function(a){this.$41[o.PEER_IS_MOBILE]=a?"1":"0",this.$42()};c.setCallType=function(a){this.$12=a,this.$42()};c.setConferenceName=function(a){this.$9=a,this.$42()};c.setConnectionType=function(a){this.$17=a,this.$42()};c.setInitByPageID=function(a){this.$41[o.INITIATED_BY_PAGE_ID]=a,this.$42()};c.setInitByAppID=function(a){a!=null&&(this.$41[o.INITIATED_BY_APP_ID]=a,this.$42())};c.setJoinWithSID=function(a){this.$10=a,this.$42()};c.setMediaStats=function(a){this.$39=a,this.$30&&(this.$39.sender.ice_g0=this.$30),this.$32&&(this.$39.sender.ice=this.$32),this.$31&&(this.$39.receiver.ice_g0=this.$31),this.$33&&(this.$39.receiver.ice=this.$33),this.$42()};c.setServerInfoData=function(a){this.$13=a,this.$42()};c.setRating=function(a){this.$41[o.RATING]=a,this.$42()};c.setFeedback=function(a){this.$41[o.SURVEY_DETAILS]=a,this.$42()};c.setSurveyChoice=function(a){this.$41[o.SURVEY_CHOICE]=a,this.$42()};c.$44=function(a){if(this.$26[a]!=null)return;this.$26[a]=this.$43()};c.$43=function(){var a=(g||(g=b("performanceNow")))()-this.$25;return Math.floor(this.$24+a)};c.$42=function(){this.$20=new Date().valueOf()};c.toString=function(){var a={core_metrics:this.$45(),time_series:null};return JSON.stringify(a)};c.$45=function(){return{ver:this.$3,log_level:this.$46(this.$5),caller:this.$4,call_type:this.$12,active_conn:this.$8,app_event_times:this.$28,conf_name:this.$9,join_with_sid:this.$10,esc_p2p_call_id:this.$11,esc_state_times:this.$27,vid_esc_times:this.$29,serv_info:this.$13,conn:this.$47(),peer_id:this.$1,open_count:this.$40,signaling:this.$48(),sender:this.$39.sender,receiver:this.$39.receiver,end:this.$49(),video:this.$39.video,push_phase:b("SiteData").push_phase,client_version:this.$7}};c.$46=function(a){switch(a){case i.LL_BASIC:return"basic";case i.LL_DEBUG:return"debug";case i.LL_WARNING:return"warning";case i.LL_INFO:return"info";case i.LL_VERBOSE:return"verbose";default:return""}};c.$47=function(){var a={},b=this.$39.sender,c=b.avgrtt,d=b.maxrtt;b=b.minrtt;c!=null&&(a.avgrtt=c,a.maxrtt=d,a.minrtt=b);this.$18!=null&&(a.relay_ip=this.$18);return a};c.$48=function(){var a={start_time:this.$23,time_from_start:this.$26};this.$6!=null&&(a.trigger=this.$6);var b=this.$50();b>0&&(a.duration=b);return a};c.$50=function(a){var b=this.$26[n.CALL_CONNECTED]||this.$26[n.NETWORK_READY];if(!b)return 0;a=this.$26[n.CALL_ENDED]||!(a==null?void 0:a.assumeOngoing)&&this.$24||this.$43();return Math.max(0,a-b)};c.$49=function(){var a={};this.$14!=null&&(a.end_call_reason_string=b("ZenonDismissReason").dismissToEndCallReason(this.$14),this.$15!==null&&(a.end_call_subreason_string=this.$15),a.remote_ended=this.$16);this.$17!=null&&(a.conn_type=this.$17);return a};return a}();e.exports=a}),null);
__d("ZenonCallSummaryStore",["CacheStorage","FBLogger","ZenonCallSummary","areEqual","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h="localstorage",i="RTC_CALL_SUMMARY_",j="summary",k=2e3,l=3;a=function(){__p&&__p();function a(){this.$1=new(b("CacheStorage"))(h,i)}var c=a.prototype;c.getCallSummaries=function(){return this.$1.get(j)||{}};c.retrieveCallSummary=function(a,c){var d=this.getCallSummaries();d=d[a]?d[a][c]:null;if(d)return b("ZenonCallSummary").fromJsonString(d.__d);else return null};c.removeCallSummaries=function(a){this.$2(function(b){a.forEach(function(a){var c=a.peerID;a=a.callID;b[c]&&(b[c][a]&&(delete b[c][a],Object.entries(b[c]).length===0&&delete b[c]))});return b})};c.storeCallSummary=function(a,c,d){if(d.isNull()){b("FBLogger")("rtweb").mustfix("Storing invalid ZenonCallSummary!");return}this.$2(function(b){b[a]||(b[a]={});b[a][c]={__d:d.toJsonString(),__t:Date.now(),__z:!0};return b})};c.$2=function(a,c,d){var e=this;c===void 0&&(c=l);d===void 0&&(d=!1);var f=this.getCallSummaries(),h=this.getCallSummaries();f=a(f);var i=this.getCallSummaries();(g||(g=b("areEqual")))(h,i)?this.$1.set(j,f):c>0&&(d?b("setTimeout")(function(){e.$2(a,c-1,!0)},k):this.$2(a,c-1,!0))};return a}();c=new a();e.exports={ZenonCallSummaryStoreInstance:c}}),null);
__d("ZenonCallSummaryUploader",["ChannelClientID","MarauderLogger","ZenonCallSummary","ZenonCallSummaryStore"],(function(a,b,c,d,e,f){__p&&__p();var g=b("ZenonCallSummaryStore").ZenonCallSummaryStoreInstance,h=3*60*1e3,i="rtc_client_call_summary",j="webrtc";function k(a){var c=a.peerID,d=a.callID;a=a.callSummary;d=babelHelpers["extends"]({call_id:d,channel_session_id:b("ChannelClientID").getID(),content:a.toString(),peer_id:c,tag:"endcallstats"},a.getExtraInfo());b("MarauderLogger").log(i,j,d)}var l={logCallSummaries:function(){var a=l.getLoggableSummaries(),b=[];a.forEach(function(a){var c=a.peerID,d=a.callID;a=a.callSummary;k({peerID:c,callID:d,callSummary:a});b.push({peerID:c,callID:d})});g.removeCallSummaries(b)},getLoggableSummaries:function(){__p&&__p();var a=g.getCallSummaries(),c=[];for(var d in a)for(var e in a[d]){var f=a[d][e];if(f.__z){var i=f.__t;if(Date.now()-i>h){i=b("ZenonCallSummary").fromJsonString(f.__d);i&&c.push({peerID:d,callID:e,callSummary:i})}}}return c}};e.exports=l}),null);
__d("FBRTCCallSummaryUploader",["Banzai","FBRTCCallSummary","FBRTCCallSummaryStore","ZenonCallSummaryUploader"],(function(a,b,c,d,e,f){a={init:function(){var a=b("FBRTCCallSummaryStore").getInstance();b("Banzai").subscribe(b("Banzai").SEND,function(){b("ZenonCallSummaryUploader").logCallSummaries(),b("FBRTCCallSummary").logSavedSummaries(a)})}};e.exports=a}),null);
__d("MercuryBrowserAlerts",["ArbiterMixin","Bootloader","ChatActivity","ChatConfig","ChatOptions","ChatTitleBarBlinker","CurrentUser","Event","MercuryIDs","MercuryIgnoredBlockedParticipants.bs","MercuryThreadInfo","MercuryViewer","MessagingTag","MessengerState.bs","Sound","UserActivity"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=3,h=6e5,i=new Map(),j=null;function k(){return!b("UserActivity").isOnTab()&&!b("UserActivity").hasBeenInactive()}function l(){i=new Map()}function m(a){b("ChatOptions").getSetting("sound")&&!k()&&b("Sound").play([b("ChatConfig").get("sound.notif_ogg_url"),b("ChatConfig").get("sound.notif_mp3_url")],a,!1)}var n=Object.assign({init:function(){var a=this;b("Event").listen(window,"focus",function(){l(),window.clearInterval(j)});b("Event").listen(window,"blur",function(){j=window.setInterval(l,h)});b("CurrentUser").isWorkUser()&&(this._availabilityStatusStore=null,b("Bootloader").loadModules(["WorkChatAvailabilityStatusStore"],function(b){a._availabilityStatusStore=b},"MercuryBrowserAlerts"))},messageReceived:function(a){__p&&__p();var c=this._availabilityStatusStore&&this._availabilityStatusStore.getIsDoNotDisturb(b("MercuryIDs").getUserIDFromParticipantID(b("MercuryViewer").getID()));if(c||a.author&&b("MercuryViewer").isViewer(a.author)||!a.is_unread||a.folder!=b("MessagingTag").INBOX&&a.folder!=b("MessagingTag").ARCHIVED)return;var d=a.thread_id,e=b("ChatActivity").isActive();if(e){var f=!1;n.inform("before-alert",{threadID:d,cancelAlert:function(){f=!0}})}b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(),d,function(c){__p&&__p();var h=b("MercuryThreadInfo").isMuted(c),j=b("MercuryIDs").getUserIDFromParticipantID(b("MercuryViewer").getID());if(h)if(!b("MercuryThreadInfo").areMentionsMuted(c)){if(!a.profile_ranges||!a.profile_ranges.some||!a.profile_ranges.some(function(a){return a.id===j}))return}else return;var k=b("CurrentUser").getID();b("MessengerState.bs").compute(k,function(h){__p&&__p();h=h.blocked_ids;if(b("MercuryIgnoredBlockedParticipants.bs").isPresentInGroupThread(k,h,c))return;h=a.timestamp;if(e)f||m(h);else{b("ChatTitleBarBlinker").blink(d,h);var j=i.get(d)||0;j<g&&(i.set(d,j+1),m(h))}b("ChatTitleBarBlinker").blinkingElsewhere()})})}},b("ArbiterMixin"));e.exports=n}),null);
__d("MercuryAudienceRestrictedTypeaheadDataSource",["CurrentUser","DataSource","OrderedFriendsList","ShortProfiles"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){__p&&__p();b=b||{};b.kanaNormalization=!0;b.maxResults=5;b.minQueryLength=2;b=a.call(this,b)||this;b.$MercuryAudienceRestrictedTypeaheadDataSource1=!1;b.$MercuryAudienceRestrictedTypeaheadDataSource2=!1;b.$MercuryAudienceRestrictedTypeaheadDataSource3={};b.$MercuryAudienceRestrictedTypeaheadDataSource4=!0;b.queryCache={};b.localCache={};b.queryIDs={};return b}var d=c.prototype;d.dirty=function(){return this};d.buildData=function(b){return a.prototype.buildData.call(this,b)};d.query=function(b,c,d,e){c=c||b.length===1;return a.prototype.query.call(this,b,c,d,e)};d.getQueryData=function(b,c){return babelHelpers["extends"]({},a.prototype.getQueryData.call(this,b,c))};d.setEntry=function(a,b){this.$MercuryAudienceRestrictedTypeaheadDataSource3[a]=b};d.getEntry=function(a){return this.$MercuryAudienceRestrictedTypeaheadDataSource3[a]||null};d.getCachedShortProfileIDs=function(){var a=b("ShortProfiles").getCachedProfileIDs();a=a.filter(function(a){var c=b("ShortProfiles").getNow(a);return a==b("CurrentUser").getID()||c&&(c.type==="friend"||c.type==="fb4c")});return a};d.isBootstrapped=function(){return this.$MercuryAudienceRestrictedTypeaheadDataSource1};d.isBootstrapping=function(){return this.$MercuryAudienceRestrictedTypeaheadDataSource2};d.processEntries=function(c,d){c=c&&c.map(function(a){a.index==null&&(a.render_type==="friend"||a.render_type==="fb4c")&&(a.index=b("OrderedFriendsList").getActiveRank(a.uid));return a});return a.prototype.processEntries.call(this,c)};d.mergeUids=function(b,c,d,e){var f=this;c=c.sort(function(a,b){a=f.getEntry(a);b=f.getEntry(b);return a&&a.index&&b&&b.index?a.index-b.index:0});return a.prototype.mergeUids.call(this,b,c,d,e)};d.setQueryData=function(b,c){return a.prototype.setQueryData.call(this,b)};d.respond=function(b,c,d){return a.prototype.respond.call(this,b,c,d)};d.setShowThreads=function(a){this.$MercuryAudienceRestrictedTypeaheadDataSource4=a};return c}(b("DataSource"));e.exports=a}),null);
__d("MercuryCanonicalGroupThreadManager",["Bootloader","KeyedCallbackManager","MercuryIDs","MercuryServerDispatcher","MercuryServerPayloadPreprocessor","MercurySingletonProvider","MessengerServerPayloadTransformer.bs","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a,this.$2=new(b("KeyedCallbackManager"))(),this.$3=b("MercuryServerPayloadPreprocessor").getForFBID(this.$1),this.$4={},this.$7(),this.$8(),this.$6={}}a.getForFBID=function(a){return g.getForFBID(a)};a.get=function(){return g.get()};var c=a.prototype;c.getCanonicalGroupThreadIDForParticipants=function(a,b){a=this.$9(a);var c=this.$10(a);c=this.$2.executeOrEnqueue(c,b);this.$11(a);return c};c.unsubscribe=function(a){a&&this.$2.unsubscribe(a)};c.$10=function(a){return a.sort().join(",")};c.$12=function(a,c){c=b("MercuryIDs").getThreadIDFromThreadFBID(c);this.$2.setResource(a,c);this.$4[c]=a};c.$11=function(a){var c=this.$10(a);c={canonical_group_key:c,participants:a};b("MercuryServerDispatcher").trySend("/ajax/mercury/search_canonical_groups.php",c,null,this.$1)};c.$7=function(){var a=this;b("MercuryServerDispatcher").registerEndpoints({"/ajax/mercury/search_canonical_groups.php":{request_user_id:this.$1,mode:b("MercuryServerDispatcher").IMMEDIATE,handler:function(b){a.handleUpdate(b)}}})};c.$9=function(a){a.indexOf(this.$1)===-1&&a.push(this.$1);return a};c.handleUpdate=function(a){if(a.graphql_payload){var c=b("MessengerServerPayloadTransformer.bs").transformThread(a.viewer,a.graphql_payload,a.for_page);this.$3.handleUpdate({threads:[c],payload_source:"server_search"})}c=a.canonical_group;if(c)for(var d in c)this.$12(d,c[d])};c.getNow=function(a){a=this.$10(this.$9(a));return this.$2.getResource(a)};c.$8=function(){var a=this;b("Bootloader").loadModules(["MercuryThreadInformer"],function(c){c=c.getForFBID(a.$1);var d=new(b("SubscriptionsHandler"))();d.addSubscriptions(c.subscribe("threads-deleted",function(b,c){for(var d in c)a.$4[d]&&(a.$2.setResource(a.$4[d],void 0),delete a.$4[d])}));a.$5=d},"MercuryCanonicalGroupThreadManager")};return a}();var g=new(b("MercurySingletonProvider"))(a);e.exports=a}),null);
__d("MercuryDeliveryState",["MercuryIDs","MercuryServerRequests","MercurySingletonProvider","MercuryThreadIDMap","MercuryThreadInformer","UserActivity","debounceAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();a.getForFBID=function(a){return g.getForFBID(a)};a.get=function(){return g.get()};function a(a){__p&&__p();var c=this;this.$8=function(){if(c.$5.length===0&&Object.keys(c.$6).length===0)return;var a=c.$5.map(function(a){return a.message_id});a&&c.$2.sendDeliveryReceipts(a,c.$6);c.$6={};c.$5=[]};this.$1=a;this.$2=b("MercuryServerRequests").getForFBID(this.$1);this.$3=b("MercuryThreadInformer").getForFBID(this.$1);this.$4=b("MercuryThreadIDMap").getForFBID(this.$1);this.$5=[];this.$6={};this.$3.subscribe("messages-received",this.$7.bind(this));b("UserActivity").subscribe(b("debounceAcrossTransitions")(this.$8,300,this))}var c=a.prototype;c.$7=function(a,b){var c=this;for(var d in b){a=b[d];a.forEach(function(a){c.$9(a)&&(c.$5.push(a),c.$4.getServerIDFromClientID(d,function(b){c.$6[b]||(c.$6[b]=[]),c.$6[b].push(a.message_id)}))})}this.$8()};c.$9=function(a){var c=a.author?b("MercuryIDs").getUserIDFromParticipantID(a.author):null;if(c===this.$1)return!1;return!a.is_unread?!1:!0};return a}();var g=new(b("MercurySingletonProvider"))(a);e.exports=a}),null);
__d("MercurySyncEnvironment",["Arbiter","ChannelInitialData","CurrentUser","MercurySyncDeltaHandler","MessengerMQTTGating"],(function(a,b,c,d,e,f){"use strict";function a(){if(!b("ChannelInitialData").channelConfig&&!b("MessengerMQTTGating").isEnabled())return;b("MercurySyncDeltaHandler").get();b("Arbiter").inform("MercurySyncDeltaHandler/initSeqID",{fbid:b("CurrentUser").getAccountID(),seqID:b("ChannelInitialData").channelConfig?b("ChannelInitialData").channelConfig.sequenceId:0})}e.exports={setUp:a}}),null);
__d("isWebMessengerURI",[],(function(a,b,c,d,e,f){function a(a){return/^(\/messages)/.test(a.getPath())}e.exports=a}),null);
__d("ChatGroupCannotAddBackDialog.react",["fbt","FDSButton.react","FDSModal.react","FDSModalFooter.react","FDSModalHeader.react","FDSSection.react","FDSText.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a;return(a=b("React")).jsx(b("FDSModal.react"),{isShown:!0,onHide:this.props.onHide,footer:a.jsx(b("FDSModalFooter.react"),{primaryButton:a.jsx(b("FDSButton.react"),{use:"primary",label:g._("Close"),onClick:this.props.onHide})}),header:a.jsx(b("FDSModalHeader.react"),{title:g._("{name} left the group",[g._param("name",this.props.name)])}),width:410,children:a.jsx(b("FDSSection.react"),{children:a.jsx(b("FDSText.react"),{size:"body1",children:g._("{name} can't be added to this group again.",[g._param("name",this.props.name)])})})})};return c}(b("React").Component);e.exports=a}),null);
__d("ChatTabAddBackPreventedQuery",["RelayFBEnvironment","RelayModern","promiseDone","ChatTabAddBackPreventedQuery.graphql"],(function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").fetchQuery;b("RelayModern").graphql;var i=g!==void 0?g:g=b("ChatTabAddBackPreventedQuery.graphql");a={fetch:function(a,c){b("promiseDone")(h(b("RelayFBEnvironment"),i,{thread_id:a}),function(a){c(a.message_thread.non_addable_recipients.nodes.map(function(a){return a.id}))})}};e.exports=a}),null);
__d("MercuryTypeaheadDataSource",["CurrentUser","DataSource","OrderedFriendsList","ShortProfiles"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h={},i={},j={},k=[],l=[],m=[],n=!1,o=!1;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;b=b||{};b.kanaNormalization=!0;c=a.call(this,b)||this;c.showDefaultList=b.showDefaultList||!1;return c}var d=c.prototype;d.dirty=function(){this.$MercuryTypeaheadDataSource1=g;this.localCache=i;this.queryCache=h;this.queryIDs=j;this.defaultList=k;this.topEntryIDs=l;this.nullStateExclusions=m;return this};d.bootstrap=function(){if(n||o)return!1;o=!0;b("ShortProfiles").fetchAll().then(function(){this.updateBootstrapData(),o=!1,n=!0,this.showDefaultList&&this.inform("show-default",{impressions:this.defaultList})}.bind(this),function(){}.bind(this));return!0};d.updateBootstrapData=function(){__p&&__p();var a=this.getCachedShortProfileIDs(),c=b("CurrentUser").isWorkUser()?"fb4c":"friend";a=a.map(function(a){var d=b("ShortProfiles").getNow(a),e=a==b("CurrentUser").getID()?c:d.type,f=[d.additionalName,d.alternateName].concat(d.searchTokens||[]).join(" "),g=d.name,h=null;return{uid:a,index:b("OrderedFriendsList").getActiveRank(a),text:g,subtext:h,tokens:f,localized_text:d.name,additional_text:d.additionalName,photo:d.thumbSrc,render_type:e,type:"user"}});a.length&&this.addEntries(a);if(!this.showDefaultList)return;l=a.sort(function(a,b){return a.index-b.index}).map(function(a){return a.uid});this.defaultList=this.buildData(l.slice(0,5));this.topEntryIDs=l};d.updateDefaultList=function(a){var b=this;if(!a)return;this.nullStateExclusions.includes(a)?this.nullStateExclusions=this.nullStateExclusions.filter(function(b){return b!==a}):this.nullStateExclusions.push(a);k=this.topEntryIDs.filter(function(a){return!b.nullStateExclusions.includes(a)});this.defaultList=this.buildData(k.slice(0,5))};d.query=function(b,c,d,e){c=c||b.length===1;return a.prototype.query.call(this,b,c,d,e)};d.getQueryData=function(b,c){return babelHelpers["extends"]({},a.prototype.getQueryData.call(this,b,c))};d.setEntry=function(a,b){this.$MercuryTypeaheadDataSource1[a]=b};d.getEntry=function(a){return this.$MercuryTypeaheadDataSource1[a]||null};d.getCachedShortProfileIDs=function(){var a=b("ShortProfiles").getCachedProfileIDs();a=a.filter(function(a){var c=b("ShortProfiles").getNow(a);return a==b("CurrentUser").getID()||c.type==="friend"||c.type==="fb4c"});return a};d.isBootstrapped=function(){return n};d.isBootstrapping=function(){return o};d.processEntries=function(c,d){c=c.map(function(a){a.index==null&&(a.render_type==="friend"||a.render_type==="fb4c")&&(a.index=b("OrderedFriendsList").getActiveRank(a.uid));return a});return a.prototype.processEntries.call(this,c)};d.mergeUids=function(b,c,d,e){var f=this;c=c.sort(function(a,b){return f.getEntry(a).index-f.getEntry(b).index});return a.prototype.mergeUids.call(this,b,c,d,e)};d.setShowDefaultList=function(a){this.showDefaultList=a};return c}(b("DataSource"));e.exports=a}),null);
__d("ChatTabTypeaheadDataSource",["MercuryConfig","MercuryTypeaheadDataSource"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){c=c||{};c.maxResults=5;c.showDefaultList=b("MercuryConfig").ChatComposer;c=a.call(this,c)||this;c.$ChatTabTypeaheadDataSource1=!0;return c}var d=c.prototype;d.buildData=function(b){__p&&__p();var c=this,d=[],e=[],f=[],g=[],h=[],i=[],j=[],k=!this.$ChatTabTypeaheadDataSource1;b.forEach(function(b){__p&&__p();var i=a.prototype.getEntry.call(c,b);switch(i.render_type){case"friend":d.push(b);break;case"thread":c.$ChatTabTypeaheadDataSource1&&e.push(b);break;case"commerce_page":k||h.push(b);break;case"non_friend":f.push(b);break;case"fb4c":g.push(b);break;case"page":k||h.push(b);break;case"internal_bot_page":i=!k||i.can_add_to_group_chat;i&&j.push(b);break;default:break}},this);b=i.concat(d,g,e,h,f,j);return a.prototype.buildData.call(this,b)};d.query=function(b,c,d,e){return a.prototype.query.call(this,b,c,d,e)};d.respond=function(b,c,d){return a.prototype.respond.call(this,b,c,d)};d.setShowThreads=function(a){this.$ChatTabTypeaheadDataSource1=a};return c}(b("MercuryTypeaheadDataSource"));e.exports=a}),null);
__d("ChatTabTypeaheadAddMemberDataSource",["fbt","ChatGroupCannotAddBackDialog.react","ChatTabAddBackPreventedQuery","ChatTabTypeaheadDataSource","DOM","React","ReactDOM"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("DOM").create("div",{id:"ChatTabTypeaheadAddMemberDataSource_dialog"}),i=!1,j=new Map();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){return a.call(this,b)||this}var d=c.prototype;d.setQueryData=function(c,d){c.thread_id&&b("ChatTabAddBackPreventedQuery").fetch(c.thread_id,function(a){j.set(c.thread_id,new Set(a))});return a.prototype.setQueryData.call(this,c,d)};d.processResults=function(b,c,d){var e=j.get(this.queryData.thread_id);e&&c.forEach(function(a,b,c){e.has(a.uid)&&(c[b]=babelHelpers["extends"]({},a,{disabled:!0,subtext:g._("Left the group"),onSelectDisabled:function(){return k(a.text)}}))});a.prototype.processResults.call(this,b,c,d)};return c}(b("ChatTabTypeaheadDataSource"));function k(a){if(i)return;i=!0;b("ReactDOM").render(b("React").jsx(b("ChatGroupCannotAddBackDialog.react"),{name:a,onHide:function(){b("ReactDOM").unmountComponentAtNode(h),i=!1}}),h)}e.exports=a}),null);
__d("P2PAPIUtils",["fbt","CreditCardFormParam","guid"],(function(a,b,c,d,e,f,g){__p&&__p();var h=[1001,1004,1006,1002],i={getRandomDigits:function(a){return Math.random().toString().slice(2,2+a)},genRequestID:function(){return"id:"+b("guid")()+":"+Date.now()},genOfflineThreadingID:function(){return Date.now()+""+i.getRandomDigits(6)},getUncaughtErrorMessage:function(a){return a&&h.indexOf(a)!==-1?g._("Sorry, we were unable to complete your request. Please check that you are connected to the internet or refresh this page and try again."):g._("Sorry, something went wrong. Please try again later.")},prepareCardMutationData:function(a){__p&&__p();var c={},d=a[b("CreditCardFormParam").CARD_NUMBER].replace(/ /g,"");c[b("CreditCardFormParam").CARD_NUMBER]=d;if(typeof a[b("CreditCardFormParam").CARD_EXPIRATION]==="string"){var e=a[(d=b("CreditCardFormParam")).CARD_EXPIRATION].split("/");c[d.MONTH]=e[0];c[d.YEAR]=e[1];c[d.CARD_EXPIRATION]={};c[d.CARD_EXPIRATION][d.MONTH]=c[d.MONTH];c[d.CARD_EXPIRATION][d.YEAR]=c[d.YEAR]}else{c[(d=b("CreditCardFormParam")).MONTH]=a[d.CARD_EXPIRATION][d.MONTH];c[d.YEAR]=a[d.CARD_EXPIRATION][d.YEAR]}return babelHelpers["extends"]({},a,c)}};e.exports=i}),null);
__d("P2PSendMoneyDialogStore",["EventEmitter","P2PActionConstants","P2PAPIUtils","P2PDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=36,h;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;h=new Map();b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").CHAT_SEND_VIEW_OPENED:this.handleChatSendViewOpened(c);this.emit("change");break;case b("P2PActionConstants").CHAT_SEND_VIEW_CLOSED:this.handleChatSendViewClosed(c);this.emit("change");break}};d.getStateByThreadID=function(a){return h.get(a)};d.handleChatSendViewOpened=function(a){h.set(a.threadID,{amount:a.amount,groupSendRecipientUserIDs:a.groupSendRecipientUserIDs,groupSendReceiptDetails:a.groupSendReceiptDetails,groupThreadFBID:a.groupThreadFBID,onCompletion:a.onCompletion,openRequestTab:a.openRequestTab,memoText:a.memoText&&a.memoText.substr(0,g),platformData:a.platformData,referrer:a.referrer,paymentRequestID:a.paymentRequestID,sendMoneyDialogShown:!0,sendMoneyNUXDismissed:a.sendMoneyNUXDismissed,useModal:a.useModal,offlineThreadingID:b("P2PAPIUtils").genOfflineThreadingID()})};d.handleChatSendViewClosed=function(a){h.set(a.threadID,{amount:"",groupSendRecipientUserIDs:[],groupSendReceiptDetails:null,groupThreadFBID:"",onCompletion:null,openRequestTab:!1,memoText:null,platformData:null,referrer:null,paymentRequestID:null,sendMoneyDialogShown:!1,sendMoneyNUXDismissed:!1,useModal:!1,offlineThreadingID:null})};d.isAnyChatSendViewOpen=function(){__p&&__p();for(var a=h.values(),b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;if(d.sendMoneyDialogShown)return!0}return!1};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("getInvisibleIframe",["DOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(c,d){__p&&__p();var e=b("DOM").create("iframe",{width:0,height:0,frameborder:0,scrolling:"no","aria-hidden":"true",style:{opacity:0,pointerEvents:"none",position:"absolute"}});c!==void 0&&e.setAttribute("src",c);d&&(e.onload=d);b("DOM").appendContent(document.body,e);function f(b){b.__annotator=function(a){return a},b.__d_stub=[],b.__d=function(){b.__d_stub.push(arguments)}}function g(b){b.onerror=function(a,b,c,d,e){return!0}}f(e.contentWindow);g(e.contentWindow);return e}}),null);
__d("ResourcesRefetcher",["Arbiter","DOM","PageEvents","getEarlyResources","getInvisibleIframe"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=0,h=0;a={_iframe:null,refetchScripts:function(a){var c=this,d=this._getIframe();g=a.length;for(var e=0;e<a.length;e++){var f=b("DOM").create("script",{src:a[e].getAttribute("src"),crossorigin:"anonymous"});f.onload=function(){c.checkForFinished()};b("DOM").appendContent(d.contentDocument.head,f)}},_getIframe:function(){this._iframe===null&&(this._iframe=b("getInvisibleIframe")());return this._iframe},refetchOnLoad:function(a){var c=this;b("Arbiter").subscribeOnce(b("PageEvents").BIGPIPE_ONLOAD,function(){var d=b("getEarlyResources")();a.allEF||(d=d.slice(0,1));c.refetchScripts(d)})},checkForFinished:function(){if(++h<g)return;this._iframe&&(b("DOM").remove(this._iframe),this._iframe=null,h=0)}};e.exports=a}),null);