if (self.CavalryLogger) { CavalryLogger.start_js(["P0JUL"]); }

__d("StickerConstants",[],(function(a,b,c,d,e,f){e.exports={MOBILE_LIKE_STICKER_PACK_ID:"227877430692340",GRAVEYARD_PACK_ID:"604597256247273",LIKE_STICKER_ID:"227878347358915",HOT_LIKE_SMALL_STICKER_ID:"369239263222822",HOT_LIKE_MEDIUM_STICKER_ID:"369239343222814",HOT_LIKE_LARGE_STICKER_ID:"369239383222810",MRU_STICKER_PACK:"599061016853145",SEARCH_PACK_ID:"680229632032514",FEED_PACK_ID:"2239834712900285",OZ_PACK_ID:"1456625217993235",AVATARS_PACK_ID:"2191329907595522",TRENDING_STICKER_PACK_ID:"924487421216423",SPRITE_PADDING:"24",PayloadSource:{VIEW_ACTION:"view-action"},DEFAULT_FRAME_RATE:83,TRAY_SIZE:64,THREAD_SIZE:120}}),null);
__d("DockTabsViewportFantaTabUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();f=9;var g=284,h=g+f;function a(){return h+1}function b(a){return Math.floor(a/h)}function c(a){if(!a)return null;a=a.fantaTabModelStateGetter;return a?a():null}function d(a){return a?a.size:0}e.exports={getTabCountToFitWidth:b,getMinRequiredWidthForFirstFantaTab:a,getFantaTabModelFromCallbacks:c,getNumFantaTabsFromModel:d}}),null);
__d("DockTabsViewportPinnedConversationTabUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=496+9+2,h=210+9+2,i=52;function j(){return g}function k(){return h}function a(){return i}function b(a){return a.getIsRaised()?j():k()}function c(){return j()+i}function d(a){a=a||{};a=a.pinnedConvoTabStateGetter;return a?a():null}function f(a){return a?a.getTotalTabCount():0}e.exports={getRaisedPinnedConvoTabWidth:j,getLoweredPinnedConvoTabWidth:k,getPinnedConvoSelectorWidth:a,getPinnedConvoTabWidth:b,getMinRequiredWidthForFirstConvoTab:c,getPinnedConvoTabsStateFromCallbacks:d,getNumPinnedConvoTabsFromModel:f}}),null);
__d("DockTabsViewportCalculator",["csx","Arbiter","DataStore","Dock","DockTabsViewportFantaTabUtils","DockTabsViewportPinnedConversationTabUtils","DOM","Event","FullScreen","SubscriptionsHandler","Vector","ViewportBounds","ge","getViewportDimensions","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=50;a=35;var i=a,j="dock-tab-viewport-inst",k=b("DockTabsViewportFantaTabUtils").getMinRequiredWidthForFirstFantaTab,l=b("DockTabsViewportFantaTabUtils").getFantaTabModelFromCallbacks,m=b("DockTabsViewportFantaTabUtils").getNumFantaTabsFromModel,n=b("DockTabsViewportPinnedConversationTabUtils").getMinRequiredWidthForFirstConvoTab,o=b("DockTabsViewportPinnedConversationTabUtils").getNumPinnedConvoTabsFromModel,p=b("DockTabsViewportPinnedConversationTabUtils").getPinnedConvoTabsStateFromCallbacks;function q(a){return a?b("Vector").getElementDimensions(a).x:0}var r=function(){__p&&__p();function a(a){this.$1=a,this.$3=0,this.$4=0,this.$5=null,this.$6=null,this.$7=!1,this.$8=!1,this.$9=!1,this.$2=new(b("SubscriptionsHandler"))(),this.$10(),this.$11()}var c=a.prototype;c.$10=function(){var a=this,c=this.$12.bind(this);this.$2.addSubscriptions(b("Event").listen(window,"resize",c),b("Dock").subscribe("resize",c),b("Arbiter").subscribeOnce("sidebar/initialized",c,"new"),b("FullScreen").subscribe("changed",function(){b("FullScreen").isFullScreen()?(a.$7=!0,a.$8=!1):(a.$7=!1,a.$8&&(b("setImmediate")(function(){c()}),a.$8=!1))}))};c.registerFantaTabCallbacks=function(a){this.$5=a};c.registerPinnedConvoTabCallbacks=function(a){this.$6=a};c.forceRecalculateFBDockWidth=function(){this.$11(),this.$13({forceRecalculateChatTabs:!1,pinnedConvoUpdateData:null})};c.forceRecalculateChatTabs=function(){this.$13({forceRecalculateChatTabs:!0,pinnedConvoUpdateData:null})};c.forceRecalculatePinnedConvoTabs=function(a){this.$13({forceRecalculateChatTabs:!0,pinnedConvoUpdateData:a})};c.$12=function(){if(b("FullScreen").isFullScreen()||this.$7){this.$8=!0;return}this.forceRecalculateFBDockWidth()};c.$13=function(a){var b=a.forceRecalculateChatTabs;a=a.pinnedConvoUpdateData;var c=this.$14(),d=c.chatTabAvailableWidth;c=c.pinnedConvoTabAvailableWidth;this.$15(d,!!b);this.$16(c,a)};c.$16=function(a,b){var c=this.$6||{};c=c.onAvailableWidthChanged;c&&c(a,b)};c.$15=function(a,b){b=this.$5||{};b=b.onAvailableWidthChanged;b&&b(a)};c.$17=function(){var a=l(this.$5);return m(a)};c.$18=function(){return k()};c.$14=function(){__p&&__p();var a=this.$3,b={chatTabAvailableWidth:a,pinnedConvoTabAvailableWidth:0},c={chatTabAvailableWidth:0,pinnedConvoTabAvailableWidth:a},d=this.$17(),e=p(this.$6),f=o(e);if(!e||f===0)return b;else if(d===0)return c;e=this.$18();if(a<=e)return b;f=n();d=a-e;if(d<f)return b;else c=f;d=c;b=Math.max(e,a-c);return{chatTabAvailableWidth:b,pinnedConvoTabAvailableWidth:d}};c.$11=function(){this.$3=this.$19(),this.$20("DockTabsViewportCalculator/recalcTotalDock_FOR_TEST_ONLY")};c.$21=function(){var a=this.$1;if(!a)return{buddyListNubWidth:0,employeeNubsWidth:0};var c=q(a),d=q(b("DOM").find(a,"._56ox")),e=q(b("DOM").scry(a,"._56oy")[0]);a=q(b("DOM").scry(a,"._ph1")[0]);c=Math.max(c-d-e-a,0);return{buddyListNubWidth:d,employeeNubsWidth:c}};c.$19=function(){__p&&__p();var a=b("getViewportDimensions").withoutScrollbars().width;a-=b("ViewportBounds").getLeft()+b("ViewportBounds").getRight();a-=h;var c=this.$21(),d=c.buddyListNubWidth;c=c.employeeNubsWidth;a-=d;this.$4=Math.max(this.$4,c);a-=this.$4;a-=i;return Math.max(a,0)};c.enableTestInforms_FOR_TEST_ONLY=function(){this.$9=!0};c.$20=function(a){this.$9&&b("Arbiter").inform(a)};c.getChatTabAvailableDockWidth_FOR_TEST_ONLY=function(){return this.$14().chatTabAvailableWidth};c.getPinnedConvoTabAvailableDockWidth_FOR_TEST_ONLY=function(){return this.$14().pinnedConvoTabAvailableWidth};c.getAvailableTotalWidth_FOR_TEST_ONLY=function(){return this.$3};return a}();e.exports={getInstance:function(a){__p&&__p();var c=b("ge")("pagelet_dock");if(!c||!b("DOM").contains(c,a))return null;a=b("DataStore").get(c,j);if(a instanceof r)return a;var d=b("DOM").scry(c,".fbDockWrapperRight .fbDock")[0];a=new r(d);b("DataStore").set(c,j,a);return a}}}),null);
__d("ChatAppActionTypes",["keyMirror"],(function(a,b,c,d,e,f){"use strict";e.exports=b("keyMirror")({INITIAL_DISPLAY_DONE:null,HIDE:null,LOAD:null,TTI:null,UNHIDE:null})}),null);
__d("ChatAppStore",["ChatAppActionTypes","ChatDispatcher","FluxStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this,b("ChatDispatcher"))||this;c.$ChatAppStore2={initialDisplayDone:!1,isHidden:!1,isInitialized:!1,isLoaded:!1};c.$ChatAppStore1=babelHelpers["extends"]({},c.$ChatAppStore2);return c}var d=c.prototype;d.__onDispatch=function(a){__p&&__p();a=a.type;this.$ChatAppStore1=babelHelpers["extends"]({},this.$ChatAppStore2);switch(a){case b("ChatAppActionTypes").INITIAL_DISPLAY_DONE:this.$ChatAppStore2.initialDisplayDone=!0;this.__emitChange();break;case b("ChatAppActionTypes").HIDE:this.$ChatAppStore2.isHidden=!0;this.__emitChange();break;case b("ChatAppActionTypes").UNHIDE:this.$ChatAppStore2.isHidden=!1;this.__emitChange();break;case b("ChatAppActionTypes").TTI:this.$ChatAppStore2.isInitialized=this.$ChatAppStore2.isLoaded=!0;this.__emitChange();break;case b("ChatAppActionTypes").LOAD:this.$ChatAppStore2.isLoaded=!0;this.__emitChange();break}};d.getPreviousState=function(){return this.$ChatAppStore1};d.getState=function(){return this.$ChatAppStore2};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a()}),null);
__d("FantaMessageActions",["Bootloader","CurrentUser","FantaDispatcher","MercuryIDs","MercuryLocalIDs","MercuryViewer","MessengerState.bs","emptyFunction","ifRequired","keyMirror","requireWeak","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("requireWeak")("FantaAppStore",function(a){return g=a});var h=b("keyMirror")({ADD_GROUP_PARTICIPANTS:null,ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB:null,ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB:null,CANCEL_FILE_UPLOAD:null,CANCEL_REPLY_TO_MESSAGE:null,COMPOSER_TEXT_UPDATE:null,LINK_PREVIEW:null,LOADED_SHARE_DATA:null,LOADING_SHARE_DATA:null,PREPARE_FILES_FOR_SEND:null,RECEIVED_NEW_MESSAGE:null,REMOVE_SHARE_PREVIEW:null,REPLY_TO_MESSAGE:null,SEND_GIF:null,SEND_HOT_LIKE:null,SEND_MESSAGE:null,SEND_PHOTO:null,SEND_STICKER:null,SET_NEW_GROUP_NAME_LOCALLY:null,UPDATE_GROUP_NAME:null,UPDATE_USER_INPUT_REQUESTED:null});function i(a){__p&&__p();var c=b("MercuryViewer").getID();if(!a.length)return null;a=a.filter(function(a){return a!==c});var d;if(a.length===0)return null;else a.length===1?d=b("MercuryIDs").getThreadIDFromParticipantID(a[0]):(d=b("MercuryLocalIDs").generateThreadID(),a.unshift(c),b("MessengerState.bs").createNewLocalThread(b("CurrentUser").getID(),d,a));return d}a={Types:h,prepareFilesForSend:function(a,c,d,e){var f={type:h.PREPARE_FILES_FOR_SEND,tabID:a,files:c,composer:d};this.dispatchOrBootloadUploader(function(){b("FantaDispatcher").dispatch(f),e&&e()})},replyToMessage:function(a,c){b("FantaDispatcher").dispatch({type:h.REPLY_TO_MESSAGE,threadID:c,message:a})},cancelReplyToMessage:function(a){b("FantaDispatcher").dispatch({type:h.CANCEL_REPLY_TO_MESSAGE,threadID:a})},cancelFileUpload:function(a,c){var d={type:h.CANCEL_FILE_UPLOAD,tabID:a,uploadID:c};this.dispatchOrBootloadUploader(function(){b("FantaDispatcher").dispatch(d)})},linkPreview:function(a,c){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.LINK_PREVIEW,tabID:a,uri:c})})},loadedShareData:function(a,c,d){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.LOADED_SHARE_DATA,tabID:a,attachmentData:c,composer:d})})},loadingShareData:function(a,c){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.LOADING_SHARE_DATA,composer:c,tabID:a})})},removeSharePreview:function(a,c){this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.REMOVE_SHARE_PREVIEW,tabID:a,composer:c})})},receivedNewMessage:function(a,c){b("FantaDispatcher").dispatch({type:h.RECEIVED_NEW_MESSAGE,tabID:a,message:c})},updateGroupName:function(a,c){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.UPDATE_GROUP_NAME,threadID:a,newName:c})})},setNewGroupNameLocally:function(a,c){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.SET_NEW_GROUP_NAME_LOCALLY,threadID:a,newName:c})})},addParticipants:function(a,c){__p&&__p();var d=this;b("ifRequired")("FantaAppStore",function(e){__p&&__p();e=e.getState().mercury.tabContents.get(a);if(!e)return;var f=e.thread;e=e.typeahead;if(!e||!f)return;var h=b("MessengerState.bs").isEmptyLocalThread(b("CurrentUser").getID(),a);if(f.is_canonical_user||h){h=e.getSelectedParticipantIDs();e=f.participants;e=i(e.concat(h));e?f.is_canonical_user?d.addGroupParticipantsAsOpenTab(e,a,c):d.addGroupParticipantsAsReplaceTab(e,a,c):d.addGroupParticipant(a,c)}else d.addGroupParticipant(a,c)})},addGroupParticipant:function(a,c){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.ADD_GROUP_PARTICIPANTS,threadID:a,onSendSuccess:c})})},addGroupParticipantsAsOpenTab:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.ADD_GROUP_PARTICIPANTS_AS_OPEN_TAB,fromTabID:c,onSendSuccess:d,tabID:a})})},addGroupParticipantsAsReplaceTab:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){b("FantaDispatcher").dispatch({type:h.ADD_GROUP_PARTICIPANTS_AS_REPLACE_TAB,newTabID:a,onSendSuccess:d,tabID:c})})},sendMessage:function(a,c,d,e){this.dispatchOrBootloadSendMessages(function(){var f={type:h.SEND_MESSAGE,threadID:a,message:c,composer:d,onSendSuccess:e};b("FantaDispatcher").dispatch(f)})},sendPhoto:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){var e={type:h.SEND_PHOTO,clearComposerOnSend:!0,onSendSuccess:d,photoData:c,threadID:a};b("FantaDispatcher").dispatch(e)})},sendGif:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){var e={type:h.SEND_GIF,clearComposerOnSend:!1,onSendSuccess:d,photoData:c,threadID:a};b("FantaDispatcher").dispatch(e)})},sendHotLike:function(a,c,d,e,f){this.dispatchOrBootloadSendMessages(function(){var g={type:h.SEND_HOT_LIKE,emoji:c,onSendSuccess:f,size:d,source:e,threadID:a};b("FantaDispatcher").dispatch(g)})},sendSticker:function(a,c,d){this.dispatchOrBootloadSendMessages(function(){var e={type:h.SEND_STICKER,threadID:a,stickerID:c,onSendSuccess:d};b("FantaDispatcher").dispatch(e)})},composerTextUpdate:function(a,c,d){var e=this;c.length>0&&b("ifRequired")("FantaReducersSendMessages",b("emptyFunction"),function(){return e.dispatchOrBootloadSendMessages(b("emptyFunction"))});this.dispatchOrBootloadSharePreview(function(){b("FantaDispatcher").dispatch({type:h.COMPOSER_TEXT_UPDATE,composer:d,message:c,threadID:a})})},dispatchOrBootloadMessages:function(a){b("ifRequired")("FantaReducersMessages",function(){b("setImmediate")(a)},function(){b("Bootloader").loadModules(["FantaReducersMessages"],function(c){g&&(g.addReducers(c),b("setImmediate")(a))},"FantaMessageActions")})},dispatchOrBootloadSendMessages:function(a){b("ifRequired")("FantaReducersSendMessages",function(){b("setImmediate")(a)},function(){b("Bootloader").loadModules(["FantaReducersSendMessages"],function(c){g&&(g.addReducers(c),b("setImmediate")(a))},"FantaMessageActions")})},dispatchOrBootloadUploader:function(a){b("ifRequired")("FantaReducersFileUploader",function(){a()},function(){b("Bootloader").loadModules(["FantaReducersFileUploader"],function(b){g&&(g.addReducers(b),a())},"FantaMessageActions")})},dispatchOrBootloadSharePreview:function(a){b("ifRequired")("FantaReducersSharePreview",function(){a()},function(){b("Bootloader").loadModules(["FantaReducersSharePreview"],function(b){g&&(g.addReducers(b),a())},"FantaMessageActions")})},updateUserInputRequested:function(a,c,d){this.dispatchOrBootloadMessages(function(){b("FantaDispatcher").dispatch({type:h.UPDATE_USER_INPUT_REQUESTED,isUserInputRequested:a,requestNumResults:c,requestType:d})})}};e.exports=a}),null);
__d("FantaTypeFileUploader",["immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=Object.freeze({ANIMATED_IMAGE:"animated_image",AUDIO:"audio",FILE:"file",GENERIC_ATTACHMENT:"generic_attachment",IMAGE:"image",VIDEO:"video"});c={uploadedFiles:b("immutable").Map(),uploadingFiles:b("immutable").Map()};d=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getTypeIDs=function(a){return this.uploadedFiles.reduce(function(b,c){c.type===a&&c.uploadedID&&(b=b.concat(c.uploadedID));return b},[])};return b}(b("immutable").Record(c));d.fileTypes=a;e.exports=d}),null);
__d("MessageThreadAssociatedObjectUtils",[],(function(a,b,c,d,e,f){"use strict";a={shouldRender:function(a){return a&&a.room_type==="GROUP"&&!a.is_workplace_community},isLinkedToGroupChat:function(a){return a&&a.room_type==="GROUP"&&!a.is_workplace_community}};e.exports=a}),null);
__d("MessengerAdminGroupUtils",["fbt","CurrentUser","MercuryConfig","MercuryIDs","MessageRequestUtils","MessageThreadAssociatedObjectUtils","MessagingSourceEnum","QE2Logger","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="messenger_use_new_group_participant_suggestion_ranking",i="show_nullstate_chat_tab_group_chat",j={isJoinableAndOpenThread:function(a){return this.isJoinableThread(a)&&this.isApprovalOpenThread(a)},isJoinableAndApprovalRequiredThread:function(a){return!!(this.isJoinableThread(a)&&a&&a.approval_mode===1)},isWorkSyncedGroupChat:function(a){return!!(a==null?void 0:a.work_associated_group)},isWorkFroup:function(a){return!!(b("gkx")("678597")&&a&&a.is_thread_queue_enabled===!0&&a.joinable_mode&&a.joinable_mode.mode===1&&b("MessageThreadAssociatedObjectUtils").isLinkedToGroupChat(a.associated_object))},isWorkSyncedChatThreadCreationMessage:function(a){return!!(a.log_message_data&&a.log_message_data.name!=null&&a.tags&&(a.tags.indexOf(b("MessagingSourceEnum").WORK_GROUP_SYNCED_CHAT_CREATION)!==-1||a.tags.indexOf(b("MessagingSourceEnum").WORK_DEFAULT_GROUP_SYNCED_CHAT_CREATION)!==-1))},isWorkSyncedChatThreadMemberSyncMessage:function(a){return!!(a.tags&&a.tags.indexOf(b("MessagingSourceEnum").WORK_GROUP_SYNCED_CHAT_MEMBER_SYNC)!==-1)},shouldAddToApprovalQueue:function(a,b){return!!(this.isJoinableAndApprovalRequiredThread(a)&&a&&!j.isAdmin(a.admins,b))},isJoinableThread:function(a){return!!(b("gkx")("678598")&&a&&a.is_thread_queue_enabled===!0&&a.joinable_mode&&a.joinable_mode.mode===1)},isGroupChat:function(a){return!!(a&&b("MessageThreadAssociatedObjectUtils").isLinkedToGroupChat(a.associated_object))},shouldInvite:function(a){return!!(b("gkx")("678598")&&a&&a.participant_add_mode==="INVITE")},isApprovalOpenThread:function(a){return!!((b("CurrentUser").isWorkUser()||b("gkx")("678598"))&&a&&a.approval_mode===0)},isAdminRequired:function(a){return!!(a&&a.admin_model_status==="required")},isOwner:function(a,b){return a&&(this.isJoinableThread(b)||this.isAdminRequired(b))},canSeeJoinableGroupOptions:function(a,c){var d=b("CurrentUser").isWorkUser(),e=j.showJoinableApprovalToggle(a,c);c=j.showApprovalQueue(a,c);return!d&&this.isJoinableThread(a)&&(c||e)},canSeeGroupOptionsSection:function(a,c){c=this.isAdmin(a.admins,c);var d=b("MessageRequestUtils").isMessageRequest(a);return c&&this.isAdminRequired(a)&&!d},canSeeBotsInGroupTypeahead:function(){return b("CurrentUser").isWorkUser()},canMakeOthersAdmins:function(a,b,c){return this.isOwner(a,c)&&!b},canMakeSelfAdmin:function(a,b){return(this.isJoinableThread(b)||this.isAdminRequired(b))&&Object.keys(b.admins).length===0&&a},canRemoveAdmin:function(a,b,c,d){if(this.isAdminRequired(d)&&Object.keys(d.admins).length===1)return!1;switch(c){case 2:return!1;default:return this.isOwner(a,d)&&b}},canRemoveFromGroup:function(a,b,c){switch(b){case 2:return!1;default:return this.isAdminRequired(c)||this.isWorkFroup(c)?a:this.isOwner(a,c)||!this.isJoinableThread(c)}},showGroupOptionsSection:function(a){return a.group_thread_subtype!==14},showJoinableApprovalToggle:function(a,b){if(a.associated_object&&!a.associated_object.approval_mode_toggleable)return!1;b=j.isAdmin(a.admins,b);return j.isOwner(b,a)},showApprovalQueue:function(a,b){b=j.isAdmin(a.admins,b);b=j.isOwner(b,a);var c=this.getPendingRequestNumber(a);if(a&&this.isAdminRequired(a))return this.isAdminRequired(a)&&b&&c>0;else{a=j.isJoinableAndApprovalRequiredThread(a);return a&&b&&c>0}},showParticipantsModal:function(a,b,c){return this.isJoinableThread(c)&&!a&&!b},useNewGroupMemberSuggestionRanking:function(){b("QE2Logger").logExposureForUser(h);return b("MercuryConfig").MNGPS},showDefaultListForNewPersonAddChatTab:function(){b("QE2Logger").logExposureForUser(i);return b("MercuryConfig").ChatGroupChat},showDefaultListForNewChatTab:function(){return b("MercuryConfig").ChatComposer},canUpdateThreadCustomization:function(a,c){var d=j.isJoinableThread(a);c=j.isAdmin(a.admins,c);var e=b("MessageRequestUtils").isMessageRequest(a);return a.is_subscribed&&!e&&(!d||c)},canUpdateThreadDescription:function(a,c){var d=j.isJoinableThread(a);c=j.isAdmin(a.admins,c);var e=j.isWorkSyncedGroupChat(a);if(e)return c;e=b("MessageRequestUtils").isMessageRequest(a);return a.is_subscribed&&!e&&(!d||c)},isAdmin:function(a,c){if(!a)return!1;if(b("MercuryIDs").isValid(c)){var d=b("MercuryIDs").getUserIDFromParticipantID(c);return d!=null&&a[d]!==void 0}return a[c]!==void 0},getLeaveGroupBodyText:function(a,b){a=this.isOwner(a,b);var c=j.isWorkSyncedGroupChat(b);return!c?a?g._("Leaving this group will remove you as an owner and allow other members to manage the group. You will no longer be able to send or receive new messages."):g._("You will stop receiving messages from this conversation and people will see that you left."):a?b.participants.length===1?g._("Are you sure you want to leave this group? As you're the last member, leaving now will also delete this group."):g._("Leaving this group will remove you as an owner and allow other members to manage the chat thread. You will no longer be able to send or receive new messages. You will also be removed from the group."):g._("You will stop receiving messages from this conversation and people will see that you left. You will also be removed from the group.")},getLeaveGroupTitleText:function(a,b){return j.isWorkSyncedGroupChat(b)?b.participants.length===1?g._("Delete Group and Chat?"):g._("Leave Group and Chat?"):this.isOwner(a,b)?g._("Leave this conversation?"):g._("Leave Conversation?")},getLeaveGroupButtonText:function(a,b){return this.isOwner(a,b)?b.participants.length===1?g._("Leave and delete"):g._("Leave conversation"):g._("Leave")},getMakeOwnerBodyText:function(a,b,c){if(a)return b?g._("As a group admin, you will be able to manage who can join and customize this conversation."):g._("As a group admin, \"{owner's name}\" will be able to manage who can join and customize this conversation.",[g._param("owner's name",c)]);else return b?g._("As a group owner, you will be able to manage group ownership and remove members from the conversation. Only owners will be able to add other owners."):g._("As a group owner, \"{owner's name}\" will be able to manage group ownership and remove members from the conversation. They will be able to remove ownership from other owners.",[g._param("owner's name",c)])},getMakeOwnerTitleText:function(a,b){if(a)return b?g._("Become group admin?"):g._("Add group admin?");else return b?g._("Become group owner?"):g._("Add group owner?")},getMakeOwnerButtonText:function(a,b){if(a)return b?g._("Become admin"):g._("Make admin");else return b?g._("Become owner"):g._("Make owner")},getRemoveOwnerBodyText:function(a,b,c,d){if(b&&c)return a?null:g._("You will no longer manage group ownership and remove members from this conversation. You will still be a participant in the group. Any other member will be able to own the group.");else if(b&&!c)return a?g._("You will no longer be able to manage who can join and customize this conversation."):g._("You will no longer manage group ownership and remove members from this conversation. You will still be a participant in the group.");else return a?g._("\"{owner's name}\" will no longer be able to manage who can join and customize this conversation.",[g._param("owner's name",d)]):g._("\"{owner's name}\" will no longer manage group ownership and remove members from the conversation. They will still be a participant in the group.",[g._param("owner's name",d)])},getRemoveOwnerTitleText:function(a){return a?g._("Remove as group admin?"):g._("Remove as group owner?")},getRemoveOwnerButtonText:function(a){return a?g._("Remove"):g._("Remove owner")},getPendingRequestNumber:function(a){if(a&&a.approval_queue_ids&&a.approval_queue_ids.length)return a.approval_queue_ids.length;else if(a&&this.isAdminRequired(a)&&a.group_approval_queue&&a.group_approval_queue.length)return a.group_approval_queue.length;return 0}};e.exports=j}),null);
__d("MercuryIgnoredBlockedParticipants.bs",["bs_belt_Set","bs_caml_obj","MercuryIDs","bs_caml_option","CurrentUser","ParticipantId.bs","WorkForeignEntityInfo.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){return b("bs_belt_Set").fromArray(a,b("ParticipantId.bs"))}function g(a,c,d){d=d.participants.filter(function(c){return c!==b("MercuryIDs").getParticipantIDFromUserID(a)});return d.filter(function(a){return b("bs_belt_Set").has(c,a)!==!1})}function c(a,b,c){if(c.is_canonical)return!1;else return g(a,b,c).length>0}function d(a,b,c){if(c.is_canonical)return[];else return g(a,b,c)}function e(a,c,d){var e=d.is_canonical;if(e){e=d.participants.filter(function(c){return b("bs_caml_obj").caml_notequal(c,b("MercuryIDs").getParticipantIDFromUserID(a))});return!e.every(function(a){return!b("bs_belt_Set").has(c,a)})}else return!1}var h=b("bs_belt_Set").has;function i(a,c,d){if(!a.is_canonical||b("bs_caml_option").nullable_to_opt(a.other_user_fbid)===b("bs_caml_option").some(c))return!1;else if(!b("CurrentUser").isWorkUser()||d==null)return!0;else if(d==null)return!1;else return!b("WorkForeignEntityInfo.bs").isCoworker(d)}f.fromIds=a;f.findIntersection=g;f.isPresentInGroupThread=c;f.participantsInGroupThread=d;f.qualifiesAs=e;f.isInSet=h;f.shouldShowBlock=i}),null);
__d("HotLikeSound",["MercurySoundsConfig","SoundPlayer","StickerConstants"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[(a=b("MercurySoundsConfig")).hot_like_grow_mp3_url,a.hot_like_grow_ogg_url],h=[a.hot_like_pop_mp3_url,a.hot_like_pop_ogg_url],i=[a.hot_like_outgoing_small_mp3_url,a.hot_like_outgoing_small_ogg_url],j=[a.hot_like_outgoing_medium_mp3_url,a.hot_like_outgoing_medium_ogg_url],k=[a.hot_like_outgoing_large_mp3_url,a.hot_like_outgoing_large_ogg_url],l=function(){return!1};c={setCheckSoundEnabledFunc:function(a){l=a},start:function(){this._play(g)},stop:function(){b("SoundPlayer").stop(g)},pop:function(){this.stop(),this._play(h)},snap:function(a){this.stop(),a===b("StickerConstants").HOT_LIKE_SMALL_STICKER_ID&&this._play(i),a===b("StickerConstants").HOT_LIKE_MEDIUM_STICKER_ID&&this._play(j),a===b("StickerConstants").HOT_LIKE_LARGE_STICKER_ID&&this._play(k)},_play:function(a){l()&&b("SoundPlayer").play(a)}};e.exports=c}),null);
__d("MercuryNotificationRenderer",["fbt","CurrentUser","MercuryAssert","MercuryIDs","MercuryViewer","MessengerParticipants.bs","MessengerState.bs"],(function(a,b,c,d,e,f,g){__p&&__p();var h="source:messenger_growth:event_upcoming_bump";function a(a,c){__p&&__p();b("MercuryAssert").isThreadID(a),b("MessengerState.bs").getThreadMeta(b("CurrentUser").getID(),a,function(d){__p&&__p();b("MessengerState.bs").getThreadMessagesRange(b("CurrentUser").getID(),a,0,1,function(e){__p&&__p();e=e.length&&e[e.length-1];var f=[];e.tags!==void 0&&(f=f.concat(e.tags));e.log_message_data&&(e.log_message_data.message_type=="confirm_friend_request"||e.log_message_data.message_type=="work_invite_claimed")?c(g._("New contact added")):f.indexOf(h)!==-1?c(g._("You have an upcoming event.")):e&&e.author!=b("MercuryViewer").getID()?b("MessengerParticipants.bs").get(e.author,function(e){var f=e.short_name,h=d.custom_nickname;if(h){e=b("MercuryIDs").getUserIDFromParticipantID(e.id);h[e]&&(f=h[e])}d.name?c(g._("{senderName} messaged {groupName}",[g._param("senderName",f),g._param("groupName",d.name)])):b("MercuryIDs").isGroupChat(a)?c(g._("{name} messaged your group",[g._param("name",f)])):c(g._("{name} messaged you",[g._param("name",f)]))}):c(g._("New message"))})})}e.exports={renderDocumentTitle:a}}),null);
__d("MessengerSecondarySearchFunnelConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({MESSENGER_DOT_COM:"messenger_dot_com",WWW:"www"});b=Object.freeze({ABANDON:"abandon",CREATE_GROUP:"create_group",ENTER_THREAD:"enter_thread",RESULT_SELECTED:"result_selected",SEND:"send",SINGLE_RESULT_SELECTED:"single_result_selected"});c=Object.freeze({ACTION:"action"});d=Object.freeze({EXISTING_TAB:"existing_tab",JEWEL:"jewel",SIDEBAR:"sidebar",COMPOSER:"composer"});f=Object.freeze({END:"end",IMPRESSIONS:"impressions",MICRO_SESSION_ENDED:"micro_session_ended",MICRO_SESSION_STARTED:"micro_session_started",QUERY_CHANGED:"query_changed",RESULT_SELECTED:"result_selected",REENTER_OMNIPICKER:"reentered_omnipicker",SOURCE_ENDED:"source_ended",SOURCE_STARTED:"source_started",START:"start",TOKEN_REMOVED:"token_removed",CLICK_OTHER_THREAD:"clicked_on_other_thread"});var g=Object.freeze({BROADCAST:"broadcast",GROUP_CREATION:"group_creation",OMNIPICKER:"omnipicker",SHARE:"share"}),h=Object.freeze({DIRECT_SEND:"direct_send",ADD:"add"}),i=Object.freeze({FINISHED:"finished",FAILED:"failed"}),j=Object.freeze({BROADCAST:9500,GROUP_CREATE:9501,M_APP_COMPOSER:9502}),k=Object.freeze({QUERY:"query",NO_QUERY:"no_query"}),l=Object.freeze({BOOTSTRAP:"bootstrap",LOCAL:"local",LOCAL_AND_SERVER:"local_and_server",LOCAL_CONTACTS:"local_contacts",ORDERED_GCF_FRIENDLIST:"local_ordered_gcf_friendlist",QUERY_CACHE:"query_cache",SERVER:"server",SHORT_PROFILES:"local_short_profiles",SUGGESTED_RECIPIENTS:"local_suggested_recipients"});e.exports={FUNNEL_NAME:"MESSENGER_SECONDARY_SEARCH_FUNNEL",CLIENTS:a,END_ACTIONS:b,END_REASONS:c,ENTRY_SURFACES:d,EVENTS:f,SEARCH_SURFACES:g,SELECTION_TYPES:h,SOURCE_STATUSES:i,LOGGING_IDS:j,MICRO_SESSION_TYPES:k,SOURCES:l}}),null);