if (self.CavalryLogger) { CavalryLogger.start_js(["7B7KV"]); }

__d("XVideoPlaybackExperienceReportController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/videos/playback_report/",{video_id:{type:"FBID",required:!0},issue_type:{type:"String",required:!0},is_live:{type:"Int"},playback_timestamp:{type:"Int"}})}),null);
__d("VideoSettingsMenu.react",["ix","cx","fbt","AsyncRequest","BUISwitch.react","ClickableAreaButton.react","Image.react","Layout.react","Link.react","MessengerEnvironment","React","Selector.react","URI","VideoPlayerShakaPerformanceLogger","XUIButton.react","XVideoPlaybackExperienceReportController","asset","isFacebookURI","prop-types","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j,k=b("Layout.react").Column,l=b("Layout.react").FillColumn,m=b("Selector.react").Option,n=/(instagram)/g;function o(a){return{currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1}}a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state=o(c.props),b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.createMenuItem=function(a,c,d,e,f,g){__p&&__p();g===void 0&&(g=!1);var h=function(){};c&&(h=function(a){e(),a.preventDefault()});var i="_2iw4"+(c?"":" _4t7o"),j;if(f==="checkBox"){var k=null;c&&d&&(k=b("React").jsx("div",{className:"_2iw1"}));j=b("React").jsx("div",{className:"_2iw3",children:k})}else if(f==="radioButton"){k=null;c&&d&&(k=b("React").jsx("div",{className:"_4t7r"}));j=b("React").jsx("div",{className:"_4t7u",children:k})}k=a;g&&(k=b("React").jsxs("div",{children:[a.slice(0,-1),b("React").jsx("div",{className:"_4t7w"})]}));return b("React").jsxs("a",{href:"#",className:i,onClick:h,tabIndex:this.props.tabIndex,"aria-checked":d?"true":"false",role:f==="radioButton"?"radio":"checkbox","aria-disabled":!c,children:[j,b("React").jsx("div",{className:"_2iw5"+(d?"":" _4t8e"),children:k})]},a)};d.$1=function(){var a=this.props,c=a.hasCaptions,d=a.areCaptionsActive;a=a.areCaptionsAutogenerated;if(!c)return null;c=i._("Captions");var e="_1x4f";a&&(c=i._("Captions [auto-generated]"),e="_1x4f _6m2q");return b("React").jsxs(b("Layout.react"),{"aria-checked":d,className:"_2iw4 _1x4e",children:[b("React").jsx(l,{children:c}),b("React").jsx(k,{children:b("React").jsx("div",{className:e,children:b("React").jsx(b("BUISwitch.react"),{animate:!0,showLabel:!0,value:d,onToggle:this.props.onToggleCaptions,tabIndex:this.props.tabIndex})})})]})};d.showQualitySelector=function(){return this.props.showQualitySelector===!0&&this.props.streamingFormat==="dash"&&this.props.availableQualities!=null&&this.props.availableQualities.length>=this.props.qualitySelectorMinStreams&&this.props.availableQualities.every(function(a){return!!a})};d.$2=function(){var a=this;return b("React").jsx(b("Link.react"),{"aria-label":"Back",role:"button",onClick:function(){return a.setState({currentMenuContext:"main",currentFeedbackSelected:null,feedbackSubmitted:!1})},children:b("React").jsx(b("Image.react"),{className:"_4t8f",src:g("480579")})})};d.$3=function(){var a=i._("More Video Settings"),c=new(j||(j=b("URI")))("/settings/?tab=videos"),d=c.getQualifiedURI().getSubdomain();(d==="business"||d==="partners"||d==="developers"||d==="ai"||d==="sparkar")&&c.setSubdomain("www");b("isFacebookURI")(c)||c.setDomain(c.getDomain().replace(n,"facebook"));b("MessengerEnvironment").messengerui&&c.setDomain("facebook.com").setSubdomain(d).setProtocol("https");return b("React").jsx("a",{href:c,target:"_blank",className:"_4t9q _2iw4",tabIndex:this.props.tabIndex,children:a})};d.$4=function(){var a=this,c;return(c=b("React")).jsxs(b("Selector.react"),{name:"feedback_selector",onChange:function(b){a.setState({currentFeedbackSelected:b.value?b.value:null})},defaultValue:0,children:[c.jsx(m,{value:0,children:i._("What's wrong with this video?")}),c.jsx(m,{value:"audio_video_sync",children:i._("Video and audio are out of sync")}),c.jsx(m,{value:"video_only_stutter",children:i._("Video is choppy")}),c.jsx(m,{value:"audio_video_stutter",children:i._("Video and audio are choppy")}),c.jsx(m,{value:"black_screen",children:i._("Screen is black")}),c.jsx(m,{value:"video_wont_play",children:i._("Video won't play")})]})};d.$5=function(){if(this.state.currentFeedbackSelected!=null&&this.state.currentFeedbackSelected!==""){var a=b("XVideoPlaybackExperienceReportController").getURIBuilder().setString("issue_type",this.state.currentFeedbackSelected).setFBID("video_id",this.props.videoID).setInt("is_live",this.props.isLive?1:0).getURI();new(b("AsyncRequest"))(a).send();this.setState({feedbackSubmitted:!0});b("VideoPlayerShakaPerformanceLogger").setVideoPlaybackExperienceIssue(this.state.currentFeedbackSelected)}};d.render=function(){__p&&__p();var a=this,c=null,d=null,e=null,f=null,h=this.props.availableQualities;if(this.showQualitySelector()&&h!=null){c=h.map(function(b){return a.createMenuItem(b,!0,b===a.props.preferredQuality,function(){var c=a.props.onSelectQuality;c&&c(b)},"radioButton",a.props.isSphericalVideo)});c.push(this.createMenuItem(i._("Auto"),this.props.canAutoSelectVideoQuality===!0,this.props.preferredQuality===null,function(){var b=a.props.onSelectQuality;b&&b(null)},"radioButton"));c.reverse();d=(h=b("React")).jsx(b("ClickableAreaButton.react"),{onClick:function(){return a.setState({currentMenuContext:"quality"})},label:"Change Quality",children:h.jsx("div",{className:"_2iw4 _4t9t",children:h.jsxs(b("Layout.react"),{children:[h.jsx(l,{children:i._("Quality")}),h.jsxs(k,{className:"_4t9u",children:[this.props.preferredQuality===null?b("React").jsxs(b("React").Fragment,{children:[i._("Auto"),this.props.selectedQuality!=null?b("React").jsxs(b("React").Fragment,{children:[" ",b("React").jsx("span",{children:this.props.selectedQuality})]}):null]}):b("React").jsx("span",{children:this.props.preferredQuality}),b("React").jsx(b("Image.react"),{className:"_4t9v",src:g("480587")})]})]})})})}else f=this.createMenuItem(i._("HD"),this.props.hasHD,this.props.isHD,this.props.onToggleHD,"checkBox");e=b("React").jsx(b("Link.react"),{onClick:function(){return a.setState({currentMenuContext:"feedback"})},className:"_2iw4 _4t9w",children:b("React").jsxs(b("Layout.react"),{children:[b("React").jsx(l,{children:i._("Report Video Issue")}),b("React").jsx(k,{className:"_4t9u",children:b("React").jsx(b("Image.react"),{className:"_4t9v",src:g("480587")})})]})});h=null;switch(this.state.currentMenuContext){case"main":h=b("React").jsxs("div",{className:"_2i_x",children:[f,this.$1(),d,this.$3(),e]});break;case"quality":h=b("React").jsxs("div",{className:"_2i_x",children:[b("React").jsxs("div",{className:"_4t9q",children:[this.$2(),i._("Quality")]}),b("React").jsx("div",{className:"_4t9z",role:"radiogroup",children:c})]});break;case"feedback":h=b("React").jsxs("div",{className:"_2i_x",children:[b("React").jsxs("div",{className:"_4t9q",children:[this.$2(),i._("Report Video Issue")]}),b("React").jsxs("div",{className:"_4t9z",children:[this.state.feedbackSubmitted?null:this.$4(),this.state.feedbackSubmitted?b("React").jsx("div",{className:"_4t9-",children:i._("Thanks for your feedback!")}):b("React").jsx("div",{className:"_4ta3",children:b("React").jsx(b("XUIButton.react"),{disabled:!(this.state.currentFeedbackSelected!=null&&this.state.currentFeedbackSelected!==""),label:i._("Submit"),use:"confirm",onClick:this.$5.bind(this)})})]})]});break}return b("React").jsxs("div",{className:"_2i_w",children:[h,b("React").jsx("div",{className:"_2j03"})]})};return c}(b("React").Component);a.defaultProps={tabIndex:"-1",availableQualities:null,selectedQuality:null,preferredQuality:null,canAutoSelectVideoQuality:!1,showQualitySelector:!1,qualitySelectorMinStreams:2,streamingFormat:null,onSelectQuality:function(){}};a.propTypes={areCaptionsActive:(c=b("prop-types")).bool,areCaptionsAutogenerated:c.bool,hasHD:c.bool,hasCaptions:c.bool,isHD:c.bool,isLive:c.bool,isSphericalVideo:c.bool,onToggleHD:c.func,onToggleCaptions:c.func,tabIndex:c.string,availableQualities:c.array,selectedQuality:c.string,preferredQuality:c.string,canAutoSelectVideoQuality:c.bool,onSelectQuality:c.func,showQualitySelector:c.bool,qualitySelectorMinStreams:c.number,streamingFormat:c.string};e.exports=a}),null);
__d("VideoSettingsControl.react",["ix","cx","fbt","AbstractButton.react","BanzaiODS","ClickableArea.react","Image.react","React","TooltipData","TrackingNodes","VideoPlayerExperiments","VideoPlayerQualitiesArray","VideoSettingsMenu.react","asset","prop-types","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=b("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD,k=b("VideoPlayerQualitiesArray").isVideoQualityTypicallyConsideredHD4K;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isFocus:!1},d.$1=b("React").createRef(),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.onClick=function(){!this.state.isFocus&&!this.props.disabled&&this.$1.current&&this.$1.current.showQualitySelector()&&b("BanzaiODS").bumpEntityKey(2966,"videos","quality_selector.impression"),this.setState(function(a){return{isFocus:!a.isFocus}}),this.props.onSettingsClick&&this.props.onSettingsClick()};d.getHDIndicator=function(){var a=b("VideoPlayerExperiments").showHDIndicator===!0&&!this.props.isInline&&this.props.preferredQuality===null?j(this.props.selectedQuality):j(this.props.preferredQuality);if(!a)return null;a=null;k(this.props.selectedQuality)?a="4K":a="HD";return b("React").jsx("span",{className:"_132c",children:a})};d.render=function(){var a=b("React").jsx(b("Image.react"),{className:"_rwt",src:g("391244")}),c=i._("Additional Visual Settings"),d=null;!this.props.disabled&&this.state.isFocus&&(d=b("React").jsx("div",{className:"_2iw7"+(this.state.isFocus?" _2iw8":""),children:b("React").jsx(b("VideoSettingsMenu.react"),{areCaptionsActive:this.props.areCaptionsActive,areCaptionsAutogenerated:this.props.areCaptionsAutogenerated,hasHD:this.props.hasHD,hasCaptions:this.props.hasCaptions,isHD:this.props.isHD,isLive:this.props.isLive,isSphericalVideo:this.props.isSphericalVideo,onToggleHD:this.props.onToggleHD,onToggleCaptions:this.props.onToggleCaptions,tabIndex:this.props.tabIndex,availableQualities:this.props.availableQualities,selectedQuality:this.props.selectedQuality,preferredQuality:this.props.preferredQuality,canAutoSelectVideoQuality:this.props.canAutoSelectVideoQuality,onSelectQuality:this.props.onSelectQuality,showQualitySelector:this.props.showQualitySelector,qualitySelectorMinStreams:this.props.qualitySelectorMinStreams,streamingFormat:this.props.streamingFormat,videoID:this.props.videoID,ref:this.$1})}));var e=this.getHDIndicator(),f="_zbd"+(this.props.disabled?" _132h":""),h=i._("Settings");f=b("React").jsx(b("AbstractButton.react"),{className:f,disabled:this.props.disabled,image:a,label:c,labelIsHidden:!0,ref:"button",tabIndex:this.props.tabIndex,type:"button"});a=b("TrackingNodes").getTrackingInfo(b("TrackingNodes").types.VIDEO_SETTINGS);return b("React").jsxs("div",{className:"_2j04","data-ft":a,children:[d,b("React").jsx(b("ClickableArea.react"),babelHelpers["extends"]({},b("TooltipData").propsFor(h,"above"),{onClick:this.onClick.bind(this),children:b("React").jsxs("div",{children:[f,e]})}))]})};return c}(b("React").Component);a.defaultProps={tabIndex:"-1"};a.propTypes={disabled:(c=b("prop-types")).bool,hasHD:c.bool,hasCaptions:c.bool,isHD:c.bool,isInline:c.bool,isLive:c.bool,isSphericalVideo:c.bool,areCaptionsActive:c.bool,areCaptionsAutogenerated:c.bool,onToggleHD:c.func,onToggleCaptions:c.func,tabIndex:c.string,availableQualities:c.array,selectedQuality:c.string,canAutoSelectVideoQuality:c.bool,onSelectQuality:c.func,showQualitySelector:c.bool,qualitySelectorMinStreams:c.number,streamingFormat:c.string};e.exports=a}),null);
__d("VideoWatchAndScrollControl.react",["ix","cx","fbt","AbstractButton.react","Arbiter","CurrentUser","Image.react","Locale","React","ReactDOM","TooltipData","VideoPlayerExperiments","XUIAmbientNUX.react","asset","prop-types","shallowCompare"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(){typeof c.props.onWNSNUXClose==="function"&&c.props.onWNSNUXClose()},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.shouldComponentUpdate=function(a,c){return b("shallowCompare")(this,a,c)};d.onMouseOut=function(a){b("ReactDOM").findDOMNode(this.refs.button).blur()};d.onButtonClick=function(){this.props.showWNSNUX&&this.$1(),b("Arbiter").inform("watch-and-scroll-on"),this.props.onEnterWatchAndScroll&&this.props.onEnterWatchAndScroll()};d.getIconSrc=function(){var a=b("VideoPlayerExperiments").rhcWNSEnabled,c=b("Locale").isRTL();if(a&&!c||!a&&c){a=b("VideoPlayerExperiments").pipEntryIcon;if(a)return a;return this.props.isSlidingWNSEligible?g("1127232"):g("1127233")}return this.props.isSlidingWNSEligible?g("1127225"):g("913222")};d.render=function(){var a=this,c=b("React").jsx(b("Image.react"),{className:"_rwt",src:this.getIconSrc()}),d=b("CurrentUser").isWorkUser()?i._("Continue watching while you use Workplace"):i._("Continue watching while you use Facebook");d=b("React").jsx(b("AbstractButton.react"),babelHelpers["extends"]({},b("TooltipData").propsFor(d,"above"),{className:"_zbd","data-testid":void 0,disabled:this.props.disabled,image:c,label:i._("Enter Watch And Scroll"),labelIsHidden:!0,onClick:this.onButtonClick.bind(this),onMouseOut:this.onMouseOut.bind(this),ref:"button",tabIndex:this.props.tabIndex,type:"button"}));c=i._("Video not playing?");var e=i._("Click to load the video while you continue using Facebook");c=b("React").jsxs(b("XUIAmbientNUX.react"),{alignment:"right",contextRef:function(){return a.refs.button},customwidth:250,onCloseButtonClick:this.$1,shown:this.props.showWNSNUX,position:"above",width:"custom",children:[b("React").jsx("div",{className:"_302j",children:c}),e]});return b("React").jsxs("span",{children:[d,c]})};return c}(b("React").Component);a.propTypes={onEnterWatchAndScroll:b("prop-types").func,tabIndex:b("prop-types").string};e.exports=a}),null);