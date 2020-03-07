if (self.CavalryLogger) { CavalryLogger.start_js(["9LjRl"]); }

__d("CometFocusTableContext",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext({FocusCell:null,FocusRow:null,FocusTable:null});e.exports=a}),null);
__d("TetraButtonGroup.react",["CometFocusTableContext","CometRow.react","CometRowItem.react","React","TetraButton.react","stylex"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useContext,i={hiddenButton:{height:"do00u71z",visibility:"kr9hpln1"},resetFlexBasis:{flexBasis:"mg4g778l"}};function j(a){var c=h(b("CometFocusTableContext"));c=c.FocusCell;a=a.children;return c!=null?b("React").jsx(c,{children:b("React").jsx("div",{role:"gridcell",children:a})}):a}function a(a){__p&&__p();var c=a.align,d=c===void 0?"justify":c;c=a.direction;c=c===void 0?"forward":c;var e=a.paddingHorizontal,f=a.paddingTop,h=a.primary,k=a.secondary,l=a.size,m=a.wrap;m=m===void 0?"none":m;var n=[],o=[],p=h.testid;p=babelHelpers.objectWithoutPropertiesLoose(h,["testid"]);h=b("React").jsx(j,{children:b("React").jsx(b("TetraButton.react"),babelHelpers["extends"]({},p,{size:l,testid:void 0}))});n.push({hidden:b("React").jsx(b("TetraButton.react"),babelHelpers["extends"]({},p,{disabled:!0,padding:"normal",size:l})),visible:h});if(k!=null){p=k.testid;p=babelHelpers.objectWithoutPropertiesLoose(k,["testid"]);n.push({hidden:b("React").jsx(b("TetraButton.react"),babelHelpers["extends"]({},p,{disabled:!0,padding:"normal",size:l,type:"secondary"})),visible:b("React").jsx(j,{children:b("React").jsx(b("TetraButton.react"),babelHelpers["extends"]({},p,{size:l,testid:void 0,type:"secondary"}))})})}else if(a.secondaryIcon!=null)o.push(b("React").jsx(b("CometRowItem.react"),{children:b("React").jsx(j,{children:b("React").jsx(b("TetraButton.react"),babelHelpers["extends"]({},a.secondaryIcon,{labelIsHidden:!0,size:l,type:"secondary"}))})},"secondary-icon"));else if(a.secondaryIconGroup!=null){k=a.secondaryIconGroup;p=k.primaryIcon;a=k.secondaryIcon;o.push((k=b("React")).jsx(b("CometRowItem.react"),{children:k.jsx(j,{children:k.jsx(b("TetraButton.react"),babelHelpers["extends"]({},p,{labelIsHidden:!0,size:l,type:"secondary"}))})},"secondary-icon-1"),k.jsx(b("CometRowItem.react"),{children:k.jsx(j,{children:k.jsx(b("TetraButton.react"),babelHelpers["extends"]({},a,{labelIsHidden:!0,size:l,type:"secondary"}))})},"secondary-icon-2"))}p=n.map(function(a,c){return b("React").jsx(b("CometRowItem.react"),{expanding:d==="justify",xstyle:i.resetFlexBasis,children:n.map(function(a,d){return b("React").jsx(b("React").Fragment,{children:c!==d?b("React").jsx("div",{"aria-hidden":!0,className:(g||(g=b("stylex")))(i.hiddenButton),children:a.hidden}):a.visible},d)})},c)});k=[b("React").jsx(b("CometRowItem.react"),{expanding:d==="justify",xstyle:i.resetFlexBasis,children:h},"primary")].concat(o);a=n.length===2;return b("React").jsx(b("CometRow.react"),{align:d,direction:c,paddingHorizontal:e,paddingTop:f,spacing:8,wrap:m,children:a?p:k})}e.exports=a}),null);
__d("CometConfirmationDialogImpl.react",["fbt","CometCardedDialog.react","CometTrackingNodeProvider.react","React","TetraButtonGroup.react","TetraText.react","stylex"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("React").useCallback;function a(a){var c=a.body,d=a.cancel,e=a.confirm,f=a.disabled;f=f===void 0?!1:f;var i=a.onClose;a=a.title;var j=h(function(){i(!0)},[i]),k=h(function(){i(!1)},[i]);return b("React").jsx(b("CometTrackingNodeProvider.react"),{trackingNode:163,children:b("React").jsxs(b("CometCardedDialog.react"),{onClose:k,testid:void 0,title:a,titleHorizontalAlignment:"start",withCloseButton:!0,children:[b("React").jsx("div",{className:"l9j0dhe7 dati1w0a f10w8fjw hv4rvrfc pybr56ya",children:b("React").jsx(b("TetraText.react"),{type:"body3",children:c})}),b("React").jsx("div",{className:"a8nywdso ihqw7lf3 rz4wbd8a jb3vyjys bkfpd7mw btwxx1t3 j83agx80",children:b("React").jsx(b("TetraButtonGroup.react"),{direction:"backward",primary:{disabled:f,label:(a=e)!=null?a:g._("Confirm"),onPress:j,testid:"CometConfirmationDialogConfirmButton"},secondary:{disabled:f,label:(c=d)!=null?c:g._("Cancel"),onPress:k,reduceEmphasis:!0,testid:"CometConfirmationDialogCancelButton"}})})]})})}e.exports=a}),null);
__d("PagesPostsByOthersUnit",["DOM"],(function(a,b,c,d,e,f){__p&&__p();var g;a=function(){"use strict";__p&&__p();function a(a,b){this.$1=a,this.$2=b,g=this}var c=a.prototype;c.getRoot=function(){return this.$1};c.insertPost=function(a){var c=this.getRoot();b("DOM").prependContent(c,a);c.children.length>this.$2&&b("DOM").remove(c.lastChild);this.$3&&(b("DOM").remove(this.$3),this.$3=null)};a.insertPostIntoCurrentInstance=function(a){this.getInstance().insertPost(a)};a.initPlaceholderElement=function(a){this.getInstance().$3=a};a.getInstance=function(){return g};return a}();e.exports=a}),null);
__d("PagesTimelineSearchBar.react",["ix","cx","fbt","Arbiter","Image.react","PagesEventObserver","React","XUIButton.react","XUITextInput.react","fbglyph","prop-types"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={query:d.props.searchQuery,disabled:!1},d.$1="",d.$3=function(a){!d.$1?d.setState({query:""}):d.state.disabled||(d.setState({disabled:!0,query:""}),b("Arbiter").inform("PagesTimelineSearch/search",{query:""}),b("PagesEventObserver").notify("search_timeline_posts",d.props.pageID,{searchTerm:""}))},d.$5=function(a){a=a.target.value;a.length<=d.props.maxLength&&d.setState({query:a})},d.$4=function(a){d.state.disabled||(d.setState({disabled:!0}),b("Arbiter").inform("PagesTimelineSearch/search",{query:d.state.query}),b("PagesEventObserver").notify("search_timeline_posts",d.props.pageID,{searchTerm:d.state.query}))},d.$2=function(a,b){b.query===d.state.query&&(d.setState({disabled:!1}),d.$1=b.query)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.UNSAFE_componentWillMount=function(){b("Arbiter").subscribe("PagesTimelineSearch/searchDone",this.$2)};d.render=function(){var a=i._("Search for posts on this Page"),c=null;!this.state.disabled&&this.state.query&&(c=b("React").jsx(b("XUIButton.react"),{className:"_5wkw",image:b("React").jsx(b("Image.react"),{src:g("141941")}),label:i._("Clear"),labelIsHidden:!0,onClick:this.$3}));var d=this.state.disabled?"_1fa6 _1wqb":"_1fa6";return b("React").jsxs("div",{className:d,children:[b("React").jsx(b("XUIButton.react"),{className:"_3fbq",disabled:this.state.disabled,image:b("React").jsx(b("Image.react"),{src:g("142454")}),label:i._("Search"),labelIsHidden:!0,onClick:this.$4}),b("React").jsx(b("XUITextInput.react"),{className:"_3fbp",onChange:this.$5,placeholder:a,value:this.state.query,onEnter:this.$4,disabled:this.state.disabled}),c]})};return c}(b("React").Component);a.propTypes={pageID:b("prop-types").string.isRequired,searchQuery:b("prop-types").string.isRequired,maxLength:b("prop-types").number.isRequired};e.exports=a}),null);
__d("PageTimelineViewportTracking",["csx","Banzai","DataAttributeUtils","DOM","ViewportTracking","$","viewportTrackingBuilder"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a){return{getAllStories:function(){return b("DOM").scry(b("$")("globalContainer"),"._5pat")},getStoryID:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return a&&a.top_level_post_id},getDataToLog:function(a){return JSON.parse(b("DataAttributeUtils").getDataFt(a))||{}},getStream:function(){return b("$")("globalContainer")},getDataFromConfig:function(a,b){b.isTimetrackingEnabled=!0}}}var i=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getTimetrackingDataToLog=function(a){a=c.prototype.getTimetrackingDataToLog.call(this,a);a.log_type="duration";return a};d.getAllStoriesFromCache=function(){return this.behavior.getAllStories()};d.sendDataToLog=function(a,c,d,e){if(!c.ft)return;a={};e&&(a.retry=e);d&&(a.delay=2e3);b("Banzai").post("page_timeline_vpv_tracking",c,a)};d.cleanup=function(){j.clearSingleton(),c.prototype.cleanup.call(this)};return a}(b("ViewportTracking")),j=b("viewportTrackingBuilder")(function(a){var b=new i(h(a));b.init(a);return b});j.init=j.singleton.bind(j);e.exports=j}),null);
__d("PagesPostsSearch",["cx","Arbiter","CSS","DOM","LoadingIndicator.react","React","ReactDOM","Run","SubscriptionsHandler","UIPagelet"],(function(a,b,c,d,e,f,g){__p&&__p();var h=100;a={searchPosts:function(a,c,d){this._pageID=a;this._postsContainer=c;this._searchResultsContainer=d;var e=new(b("SubscriptionsHandler"))();e.addSubscriptions(b("Arbiter").subscribe("PagesTimelineSearch/search",this._handleSearchBarAction.bind(this)));b("Run").onLeave(function(){return e.release()})},_handleSearchBarAction:function(a,c){var d=this;this._query=c.query;this._query!==""?this._handleSearch():this._handleClearField();setTimeout(function(){b("Arbiter").inform("PagesTimelineSearch/searchDone",{query:d._query})},h)},_handleSearch:function(){b("CSS").hide(this._postsContainer),b("ReactDOM").render(b("React").jsx("div",{className:"_3x9t",children:b("React").jsx(b("LoadingIndicator.react"),{color:"white",size:"large"})}),this._searchResultsContainer),b("UIPagelet").loadFromEndpoint("PagePostsSearchResultsPagelet",this._searchResultsContainer,{page_id:this._pageID,search_query:this._query})},_handleClearField:function(){b("DOM").setContent(this._searchResultsContainer,null),b("CSS").show(this._postsContainer)}};e.exports=a}),null);
__d("MorePagerFetchOnScroll",["AsyncRequest","DOMQuery","Event","Style","Vector","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g={};a=function(){"use strict";__p&&__p();function a(a,b,c){this._pager=a,this._offset=b||0,this._hasEventHandlers=!1,c&&this.setup(),g[a.id]=this}var c=a.prototype;c.setup=function(){this._scrollParent=b("Style").getScrollParent(this._pager),this.setPagerInViewHandler(this._defaultPagerInViewHandler.bind(this)),this.check()||(this._scrollListener=b("Event").listen(this._scrollParent,"scroll",b("throttle")(function(){this.check()}.bind(this),50)),this._clickListener=b("Event").listen(this._scrollParent,"click",b("throttle")(function(){this.check()}.bind(this),50)),this._hasEventHandlers=!0)};c.check=function(){__p&&__p();if(!b("DOMQuery").contains(document.body,this._pager)){this.removeEventListeners();return!0}var a=b("Vector").getElementPosition(this._pager).y,c=this._scrollParent===window?b("Vector").getViewportDimensions().y:b("Vector").getElementDimensions(this._scrollParent).y;c=this._scrollParent===window?b("Vector").getScrollPosition().y+c:b("Vector").getElementPosition(this._scrollParent).y+c;if(a-this._offset<c){this._inViewHandler();this.removeEventListeners();return!0}return!1};c.removeEventListeners=function(){this._hasEventHandlers&&(this._scrollListener&&this._scrollListener.remove(),this._clickListener&&this._clickListener.remove(),this._hasEventHandlers=!1)};c.setPagerInViewHandler=function(a){this._inViewHandler=a;return this};c._defaultPagerInViewHandler=function(){var a=b("DOMQuery").scry(this._pager,"a")[0];a&&b("AsyncRequest").bootstrap(a.getAttribute("ajaxify")||a.href,a)};a.getInstance=function(a){return g[a]};return a}();e.exports=a}),null);
__d("PagesPageWebsiteClickFalcoEvent",["FalcoLoggerInternal"],(function(a,b,c,d,e,f){"use strict";a=b("FalcoLoggerInternal").create("pages_page_website_click");e.exports=a}),null);
__d("TBLPagesPageWebsiteClickFalcoEventWrapper",["PagesPageWebsiteClickFalcoEvent"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(){}a.log=function(a){b("PagesPageWebsiteClickFalcoEvent").log(function(){return a.data})};a.registerLogOnClick=function(a){a.element.addEventListener("click",function(){b("PagesPageWebsiteClickFalcoEvent").log(function(){return a.data})})};return a}();e.exports=a}),null);