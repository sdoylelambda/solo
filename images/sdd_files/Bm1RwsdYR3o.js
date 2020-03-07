if (self.CavalryLogger) { CavalryLogger.start_js(["Z1tGh"]); }

__d("SimpleFBAuthenticatedXHRRequest",["invariant","CurrentUser","DTSG","DTSGUtils","ServerJSDefine","SprinkleConfig","StaticSiteData","XHRRequest","isFacebookURI"],(function(a,b,c,d,e,f,g){__p&&__p();var h=1;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){var e;c=a.call(this,c)||this;e=(e={},e[b("StaticSiteData").jsmod_key]=b("ServerJSDefine").getLoadedModuleHash(),e.__req=(h++).toString(36),e.__ajax__=1,e.__a=1,e.__user=b("CurrentUser").getID(),e);a.prototype.setData.call(babelHelpers.assertThisInitialized(c),babelHelpers["extends"]({},d,e));return c}var d=c.prototype;d.send=function(){__p&&__p();var c=this;if(!b("isFacebookURI")(this.getURI()))return a.prototype.send.call(this);if(b("DTSG").getCachedToken){var d=b("DTSG").getCachedToken();if(d)return this.sendOnDTSGToken(d);else{b("DTSG").getToken().done(function(a){return c.sendOnDTSGToken(a)});return this}}else this.sendOnDTSGToken(b("DTSG").getToken())};d.sendOnDTSGToken=function(c){if(c){a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),{fb_dtsg:c}));if(b("SprinkleConfig").param_name){var d;a.prototype.setData.call(this,babelHelpers["extends"]({},this.getData(),(d={},d[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(c),d)))}}return a.prototype.send.call(this)};d.setData=function(a){g(0,5518)};c.parseResponse=function(a){return JSON.parse(a.substr(9))};c.getPayload=function(a){a=c.parseResponse(a).payload;return a.payload?a.payload:a};return c}(b("XHRRequest"));e.exports=a}),null);
__d("XFantailLogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/fantail/",{service:{type:"String",required:!0}})}),null);
__d("FantailLogQueue",["ChannelClientID","CircularBuffer","PHPQuerySerializer","SimpleFBAuthenticatedXHRRequest","XFantailLogController","destroyOnUnload","setIntervalAcrossTransitions","sprintf"],(function(a,b,c,d,e,f){__p&&__p();var g,h={DEBUG:"debug",INFO:"info",WARN:"warn",ERROR:"error"};a=function(){"use strict";__p&&__p();function a(a){this.$2=a,this.$3=new(b("CircularBuffer"))(200),b("setIntervalAcrossTransitions")(this.$4.bind(this),30*1e3),b("destroyOnUnload")(this.$4.bind(this))}a.get=function(b){a.$1=a.$1||{};a.$1[b]=a.$1[b]||new a(b);return a.$1[b]};var c=a.prototype;c.debug=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.DEBUG,a].concat(c))};c.info=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.INFO,a].concat(c))};c.warn=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.WARN,a].concat(c))};c.error=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$5.apply(this,[h.ERROR,a].concat(c))};c.$5=function(a,c){for(var d=arguments.length,e=new Array(d>2?d-2:0),f=2;f<d;f++)e[f-2]=arguments[f];var g=b("sprintf").apply(void 0,[c].concat(e));this.$3.write({log_time:Date.now(),log:g,severity:a,device_id:b("ChannelClientID").getID()})};c.$4=function(){var a=this.$3.read();if(a.length>0){var c={log_time:[],log:[],severity:[],device_id:[]};a.forEach(function(a){c.log_time.push(a.log_time),c.log.push(a.log),c.severity.push(a.severity),c.device_id.push(a.device_id)});this.$3.clear();a=b("XFantailLogController").getURIBuilder().setString("service",this.$2).getURI();new(b("SimpleFBAuthenticatedXHRRequest"))(a,c).setMethod("POST").setDataSerializer((g||(g=b("PHPQuerySerializer"))).serialize).setRequestHeader("Content-Type","application/x-www-form-urlencoded").send()}};return a}();e.exports=a}),null);
__d("NFXContextFactory",["FBLogger","uuid"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){var c=function(a,b){if(b!==null)return b};return JSON.stringify({reportable_ent_token:a.reportable_ent_token,story_location:a.story_location,entry_point:a.entry_point,type:a.type,session_id:b("uuid")(),initial_action_name:a.initial_action_name,reportable_id:a.reportable_id,page_id:a.page_id,responsible_id:a.responsible_id},c)}function a(a){var b=a.reportable_ent_token,c=a.story_location,d=a.entry_point;d=d===void 0?"unknown":d;a=a.responsible_id;return g({type:1,story_location:c,entry_point:d,reportable_ent_token:b,responsible_id:a})}function c(a){var b=a.reportable_id,c=a.page_id;a=a.storyLocation;return g({type:6,story_location:a,entry_point:"unknown",initial_action_name:"POLITICAL_ARCHIVE_REPORT_AD",reportable_id:b,page_id:c})}function d(a){var b=a.reportable_ent_token,c=a.story_location,d=a.entry_point;d=d===void 0?"unknown":d;var e=a.initial_action_name;a=a.page_id;return g({type:11,story_location:c,entry_point:d,reportable_ent_token:b,initial_action_name:e,page_id:a})}function f(a){var c=a.reportable_ent_token,d=a.story_location,e=a.entry_point;e=e===void 0?"unknown":e;a=a.initial_action_name;c===null&&b("FBLogger")("frx").warn("null or undefined reportable_ent_token in forEntReportable, location=%s entry_point=%s",d,e);return g({type:2,story_location:d,entry_point:e,reportable_ent_token:c,initial_action_name:a})}e.exports={withEntReportable:f,withEntReportableOnPage:d,withEntMessageThread:a,withPoliticalArchiveAds:c}}),null);
__d("NFXURI",["ActorURI","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function a(a,c){c===void 0&&(c=null);a=new(g||(g=b("URI")))("/ajax/nfx/start_dialog").setQueryData({context:a});c!=null&&(a=b("ActorURI").create(a,c));return a}function c(a){var c=a.reportable_ent_token,d=a.story_location,e=a.tracking;a=a.actor_id;d=new(g||(g=b("URI")))("/ajax/nfx/start_dialog").setQueryData({story_location:d,reportable_ent_token:c});e!==null&&d.addQueryData({tracking:e});a!=null&&(d=b("ActorURI").create(d,a));return d}d={withContextString:a,withEntReportable:c};e.exports=d}),null);
__d("FRXURI",["ActorURI","CurrentUser","NFXContextFactory","NFXURI","XRapidReportingDialogController","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.reportable_ent_token,d=a.story_location,e=a.entry_point;e=e===void 0?"unknown":e;var f=a.responsible_id;a=a.actor_id;c=b("NFXContextFactory").withEntMessageThread({reportable_ent_token:c,story_location:d,entry_point:e,responsible_id:f});if(b("CurrentUser").isWorkUser()&&!b("gkx")("967282"))return b("NFXURI").withContextString(c,a);d=b("XRapidReportingDialogController").getURIBuilder().setString("context",c).getURI();a!=null&&(d=b("ActorURI").create(d,a));return d}function c(a){__p&&__p();var c=a.reportable_ent_token,d=a.story_location,e=a.entry_point;e=e===void 0?"unknown":e;var f=a.initial_action_name,g=a.actor_id;a=a.page_id;if(b("CurrentUser").isWorkUser()&&!b("gkx")("967282"))return b("NFXURI").withEntReportable({reportable_ent_token:c,story_location:d,tracking:{},actor_id:g});c=b("NFXContextFactory").withEntReportableOnPage({reportable_ent_token:c,story_location:d,entry_point:e,initial_action_name:f,page_id:a});d=b("XRapidReportingDialogController").getURIBuilder().setString("context",c).getURI();g!=null&&(d=b("ActorURI").create(d,g));return d}function d(a){__p&&__p();var c=a.reportable_ent_token,d=a.story_location,e=a.entry_point;e=e===void 0?"unknown":e;var f=a.initial_action_name;a=a.actor_id;if(b("CurrentUser").isWorkUser()&&!b("gkx")("967282"))return b("NFXURI").withEntReportable({reportable_ent_token:c,story_location:d,tracking:{},actor_id:a});c=b("NFXContextFactory").withEntReportable({reportable_ent_token:c,story_location:d,entry_point:e,initial_action_name:f});d=b("XRapidReportingDialogController").getURIBuilder().setString("context",c).getURI();a!=null&&(d=b("ActorURI").create(d,a));return d}function f(a,b){return btoa(a+":"+b)}e.exports={withEntMessageThread:a,withEntReportable:d,withEntReportableOnPage:c,getReportableToken:f}}),null);