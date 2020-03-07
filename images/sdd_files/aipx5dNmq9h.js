if (self.CavalryLogger) { CavalryLogger.start_js(["ndifr"]); }

__d("CometToasterStateManager",["requireCond","CometMaxEnqueuedToastsSitevarConfig","JSScheduler","cr:724654","emptyObject","once","removeFromArray","cr:724655","unrecoverableViolation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometMaxEnqueuedToastsSitevarConfig").max;a=function(){__p&&__p();function a(){this.$1=0,this.$2=new Map(),this.$3=[],this.$4=[],this.$5=null}var c=a.prototype;c.push=function(a,b){var c="toast-"+this.$1++;b={duration:b,expired:!1,id:c,shown:!1,timer:null,value:a};this.$6({node:b,type:"PUSH"});return c};c.shown=function(a){this.$6({id:a,type:"SHOWN"})};c["delete"]=function(a){this.$6({id:a,type:"DELETE"})};c.expire=function(a){this.$6({id:a,type:"EXPIRE"})};c.hidden=function(a){this.$6({id:a,type:"HIDDEN"})};c.stopTimer=function(a){this.$6({id:a,type:"STOP_TIMER"})};c.resetTimer=function(a){this.$6({id:a,type:"RESET_TIMER"})};c.getState=function(){return Object.fromEntries(this.$2)};c.getEmptyState=function(){return b("emptyObject")};c.addListener=function(a){var c=this;this.$3.push(a);return{remove:b("once")(function(){b("removeFromArray")(c.$3,a)})}};c.$7=function(a){(this.$5==null||a.priority>this.$5.priority)&&(this.$5=a)};c.registerView=function(a,c){var d=this;c===void 0&&(c=1);var e={handler:a,priority:c};this.$4.push(e);this.$7(e);this.$8();return{remove:b("once")(function(){b("removeFromArray")(d.$4,e),d.$5===e&&(d.$5=null,d.$4.forEach(function(a){return d.$7(a)}))})}};c.$6=function(a){__p&&__p();var b=this.$2;switch(a.type){case"PUSH":var c=a.node;this.$2=new Map([].concat(Array.from(this.$2),[[c.id,c]]));if(g!==0){c=Array.from(this.$2.values()).filter(function(a){return!a.shown&&!a.expired});if(c.length>g){c=c[0];this["delete"](c.id)}}break;case"SHOWN":if(this.$2.has(a.id)&&!this.$9(a.id).shown){c=babelHelpers["extends"]({},this.$9(a.id),{shown:!0});this.$2=new Map([].concat(Array.from(this.$2),[[a.id,this.$10(c)]]))}break;case"EXPIRE":if(this.$2.has(a.id)){c=babelHelpers["extends"]({},this.$9(a.id),{expired:!0});this.$2=new Map([].concat(Array.from(this.$2),[[a.id,this.$11(c)]]));this.$12(c)}break;case"HIDDEN":if(this.$2.has(a.id)){c=this.$9(a.id);(c.shown||c.expired)&&(this.$2=new Map(this.$2),this.$2["delete"](a.id),this.$11(c))}break;case"DELETE":if(this.$2.has(a.id)){c=this.$9(a.id);this.$2=new Map(this.$2);this.$2["delete"](a.id);this.$11(c)}break;case"STOP_TIMER":if(this.$2.has(a.id)&&this.$13(this.$9(a.id))){c=babelHelpers["extends"]({},this.$9(a.id));this.$2=new Map([].concat(Array.from(this.$2),[[a.id,this.$11(c)]]))}break;case"RESET_TIMER":if(this.$2.has(a.id)&&!this.$13(this.$9(a.id))){c=babelHelpers["extends"]({},this.$9(a.id));this.$2=new Map([].concat(Array.from(this.$2),[[a.id,this.$10(c)]]))}break;default:a.type}b!==this.$2&&this.$8()};c.$8=function(){var a=this;this.$3.forEach(function(a){return b("JSScheduler").scheduleNormalPriCallback(function(){a()})});this.$4.forEach(function(c){return b("JSScheduler").scheduleNormalPriCallback(function(){c.handler(c===a.$5?a.getState():a.getEmptyState())})})};c.$10=function(a){var c=this;a.duration!==null&&a.timer==null&&(a.timer=b("cr:724655")(function(){c.expire(a.id)},a.duration));return a};c.$11=function(a){a.timer!=null&&(b("cr:724654")(a.timer),a.timer=null);return a};c.$12=function(a){var c=this;this.$11(a);var d=a.id;b("cr:724655")(function(){c["delete"](d)},1e3)};c.$13=function(a){return a.timer!=null};c.$9=function(a){a=this.$2.get(a);if(a==null)throw b("unrecoverableViolation")("Toast with given identifier was not found","comet_ui");return a};a.getInstance=function(){a.$14==null&&(a.$14=new a());return a.$14};a.resetInstance_DO_NOT_USE=function(){a.$14=null};return a}();e.exports=a}),null);
__d("cometPushToast",["ix","requireDeferred","CometToasterStateManager","React","TetraIcon.react","deferredLoadComponent","fbicon"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("CometToasterStateManager").getInstance(),i=b("deferredLoadComponent")(b("requireDeferred")("CometToast.react"));function j(a,c,d){c===void 0&&(c=2750);var e=(d=d)!=null?d:h,f=e.push(b("React").jsx(i,babelHelpers["extends"]({},a,{loadImmediately:!0,onDismiss:function(){return e.expire(f)}})),c);return f}function a(a,b){return j({message:a},b)}function c(a,c,d){c===void 0&&(c=2750);return j(babelHelpers["extends"]({},a,{icon:b("React").jsx(b("TetraIcon.react"),{color:"warning",icon:b("fbicon")._(g("502062"),20)})}),c,d)}e.exports={cometPushErrorToast:c,cometPushSimpleToast:a,cometPushToast:j}}),null);
__d("useIsMountedRef",["React","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").useRef;function a(){var a=g(!1);b("useLayoutEffect_SAFE_FOR_SSR")(function(){a.current=!0;return function(){a.current=!1}},[]);return a}e.exports=a}),null);
__d("CometTransientDialogProvider.react",["fbt","BaseModal.react","CometDialogContext","CometErrorBoundary.react","CometHeroLogging","FBLogger","React","cometPushToast","useCometInteractionTracing","useIsMountedRef"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=(c=b("React")).useCallback,i=c.useEffect,j=c.useRef,k=c.useState,l=b("cometPushToast").cometPushErrorToast;function m(a){__p&&__p();var c=a.dialogConfig,d=a.removeDialogConfig,e=j(null);i(function(){return function(){e.current!=null&&window.cancelAnimationFrame(e.current)}},[]);a=c.dialog;var f=c.dialogProps,m=k(!1),n=m[0];m=m[1];var o=h(function(){for(var a=arguments.length,b=new Array(a),f=0;f<a;f++)b[f]=arguments[f];e.current!=null&&window.cancelAnimationFrame(e.current);e.current=window.requestAnimationFrame(function(){d(c,b),e.current=null})},[c,d]),p=h(function(){o(),l({message:g._("Something isn't working. This may be because of a technical error we're working to fix.")})},[o]);return b("React").jsx(b("CometErrorBoundary.react"),{fallback:null,onError:p,children:b("React").jsx(b("BaseModal.react"),{hidden:n,interactionDesc:c.interactionDesc,interactionUUID:c.interactionUUID,children:b("React").jsx(a,babelHelpers["extends"]({},f,{onClose:o,onHide:m}))})})}function a(a){__p&&__p();var c=k([]),d=c[0],e=c[1],f=b("useCometInteractionTracing")(30605361,"fluid","INTERACTION");c=h(function(a,c,d,g){f(function(f){var g=b("CometHeroLogging").genCometHeroInteractionUUIDAndMarkStart(f.getTraceId()),h="Dialog";e(function(b){return b.concat({dialog:a,dialogProps:c,interactionDesc:h,interactionUUID:g,onClose:d})})},void 0,void 0,g)},[f]);var g=b("useIsMountedRef")(),i=h(function(a,c){__p&&__p();if(!g.current)return;e(function(c){var d=c.indexOf(a);if(d<0){b("FBLogger")("CometTransientDialogProvider").mustfix("Attempting to close a dialog that does not exist anymore.");return c}return c.slice(0,d)});a.onClose&&a.onClose.apply(a,c)},[g]);return b("React").jsxs(b("CometDialogContext").Provider,{value:c,children:[a.children,d.map(function(a,c){return b("React").jsx(m,{dialogConfig:a,removeDialogConfig:i},c)})]})}e.exports=a}),null);
__d("Actor",["CometRelay","CometRelayEnvironmentFactory","CometTransientDialogProvider.react","React","recoverableViolation","unrecoverableViolation","usePrevious"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometRelay").RelayEnvironmentProvider,h=(f=b("React")).useContext,i=f.useMemo,j=f.useState;function a(a){return function(){throw b("unrecoverableViolation")("You are "+a+" the Actor from a React component that is not a descendent of ActorProvider.","groups_comet")}}var k=f.createContext({get:a("reading"),set:a("setting")});function c(a){__p&&__p();var c=a.children,d=a.initialActorID,e=a.readonly,f=e===void 0?!1:e;e=a.scope;a=e===void 0?null:e;e=j(d);var h=e[0],l=e[1];e=b("usePrevious")(a);var m=b("usePrevious")(d),n=b("CometRelayEnvironmentFactory").getForActorID(h);m=m!=null&&m!==d;e=e!=null&&e!==a;(m||e)&&h!==d&&l(d);a=i(function(){return{get:function(){return h},set:function(a){if(f){b("recoverableViolation")("You tried to update the Actor ID, but the <ActorProvider /> closest to your useActor() call has a read-only Actor ID. To fix this, wrap the React tree that you want to set an Actor ID for with your own <ActorProvider />.","groups_comet");return}l(a)}}},[h,f]);return b("React").jsx(k.Provider,{value:a,children:b("React").jsx(g,{environment:n,children:b("React").jsx(b("CometTransientDialogProvider.react"),{children:c})})})}function d(){var a=h(k);return[a.get(),a.set]}e.exports={ActorProvider:c,useActor:d}}),null);
__d("BaseScrollableArea.react",["BaseScrollableAreaContext","React","UserAgent","cometTestID","debounce","gkx","resize-observer-polyfill","stylex","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=(c=b("React")).useContext,i=c.useEffect,j=c.useImperativeHandle,k=c.useMemo,l=c.useRef,m=c.useState,n={baseScroller:{alignContent:"tojvnm2t",alignItems:"a6sixzi8",boxSizing:"rq0escxv",display:"a8s20v7p",flexDirection:"k5wvi7nf",flexGrow:"buofh1pr",flexShrink:"pfnyh3mw",justifyContent:"cebpdrjk",minHeight:"sn7ne77z",minWidth:"oqhjfihn",position:"l9j0dhe7",zIndex:"du4w35lb"},"default":{"-ms-overflow-style":"o8kakjsu","-ms-scroll-chaining":"rpm2j7zs","-ms-scroll-rails":"k7i0oixp",WebkitOverflowScrolling:"gvuykj2m",overflowX:"ni8dbmo4",overflowY:"stjgntxs"},hideScrollbar:{MsOverflowStyle:"q5bimw55",scrollbarWidth:"ofs802cu","::-webkit-scrollbar":{height:"dkue75c7",width:"mb9wzai9"}},horizontalAuto:{overflowX:"d76ob5m9",overscrollBehaviorX:"qan41l3s"},perspective:{perspective:"l56l04vs",perspectiveOrigin:"r57mb794",position:"l9j0dhe7",transformStyle:"kh7kg01d"},verticalAuto:{overflowY:"eg9m0zos",overscrollBehaviorY:"c3g1iek1"}},o={base:{boxSizing:"rq0escxv",display:"mkhogb32",opacity:"b5wmifdl",paddingTop:"jb3vyjys",paddingEnd:"ph5uu5jm",paddingBottom:"qt6c0cv9",paddingStart:"b3onmgus",pointerEvents:"hzruof5a",position:"pmk7jnqg",right:"kwrap0ej",top:"kr520xx4",transformOrigin:"enuw37q7",transitionDuration:"dpja2al7",transitionProperty:"art1omkt",transitionTimingFunction:"nw2je8n7",width:"hhz5lgdu"},hovered:{opacity:"pedkr2u6",transitionDuration:"z1801hqc"},inner:{backgroundColor:"pwoa4pd7",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",height:"datstx6m",width:"k4urcfbm"}},p={base:{backgroundColor:"pwoa4pd7",display:"mkhogb32",height:"datstx6m",opacity:"b5wmifdl",position:"pmk7jnqg",right:"kwrap0ej",top:"kr520xx4",transitionDuration:"qgmjvhk0",transitionProperty:"art1omkt",transitionTimingFunction:"nw2je8n7",width:"hhz5lgdu",":hover":{opacity:"pyaxyem1"}}};function q(){return b("UserAgent").isPlatform("iOS")||b("UserAgent").isPlatform("Android")||b("UserAgent").isBrowser("Edge")||b("UserAgent").isBrowser("IE")||b("UserAgent").isBrowser("Firefox < 64")}function a(a,c){__p&&__p();var d=a.children,e=a.forceBrowserDefault,f=e===void 0?!1:e;e=a.hideScrollbar;var r=e===void 0?!1:e,t=a.horizontal;e=a.id;var u=a.labelledby,v=a.onScrollBottom,w=a.tagName;w=w===void 0?"div":w;var x=a.testid,y=a.vertical,z=a.xstyle,A=k(function(){return f||!y||r||t||q()||!b("gkx")("993687")},[f,y,r,t]),B=m(!1),C=B[0],D=B[1];B=m(!1);var E=B[0],F=B[1];B=m(!1);var G=B[0],H=B[1],I=h(b("BaseScrollableAreaContext")),J=l(null),K=l(null),L=l(null),M=l(null),N=l(null),O=l(0);i(function(){__p&&__p();if(A)return;var a=J.current,c=K.current,d=L.current,e=M.current;if(a==null||c==null||d==null||e==null)return;var f=0,g=0,h=function(){__p&&__p();e.style.display="none";d.style.display="none";var a=c.getBoundingClientRect(),b=a.height;g=a.top;O.current=c.scrollHeight;a=O.current;a!==c.scrollHeight&&(a=c.scrollHeight);f=Math.pow(b,2)/a;var h=(b-f)/(a-b);d.style.right="0px";e.style.right="0px";d.style.height=a<=b?"0px":f+"px";e.style.height=a+"px";d.style.transform=["matrix3d(\n          1,0,0,0,\n          0,1,0,0,\n          0,0,1,0,\n          0,0,0,-1)","scale("+1/h+")","translateZ("+(1-1/h)+"px)","translateZ(-2px)"].join(" ");d.style.display="block";e.style.display=a<=b?"none":"block"},i=function(a){__p&&__p();a.preventDefault();var b=a.clientY;a=c.clientHeight;var d=c.scrollTop;H(!0);var h=O.current/a;a=d/h;var i=function(a){a.preventDefault(),a.stopPropagation(),a.stopImmediatePropagation()};if(b<g+a||b>g+a+f){var j=b<g+a?-20:20,k=!0,l=window.setInterval(function(){k&&c.scrollTo({top:c.scrollTop+j})},16);a=function a(b){i(b),l&&window.clearInterval(l),window.removeEventListener("mouseup",a,!0),e.removeEventListener("mouseenter",m),e.removeEventListener("mouseleave",n)};var m=function(a){k=!0},n=function(a){k=!1};window.addEventListener("mouseup",a,!0);e.addEventListener("mouseenter",m);e.addEventListener("mouseleave",n);return}var o=function(a){i(a);a=a.clientY-b;c.scrollTo({top:d+a*h})};a=function a(b){i(b),H(!1),window.removeEventListener("mousemove",o,!0),window.removeEventListener("mouseup",a,!0)};window.addEventListener("mousemove",o,!0);window.addEventListener("mouseup",a,!0)},j=b("debounce")(h,100);window.addEventListener("resize",j);e.addEventListener("mousedown",i);var k=new(b("resize-observer-polyfill"))(j);k.observe(a);return function(){window.removeEventListener("resize",j),e.removeEventListener("mousedown",i),k.disconnect(),j.reset()}},[A]);B=function(){D(!0)};var P=function(){return D(!1)},Q=function(b){a.onScroll&&a.onScroll(b),F(!0),N.current&&window.clearTimeout(N.current),N.current=window.setTimeout(function(){F(!1)},1e3)};i(function(){return function(){window.clearTimeout(N.current)}},[]);var R=k(function(){return{getDOMNode:function(){return K.current}}},[]);j(c,function(){return R});c=k(function(){return[].concat(I,[R])},[R,I]);return A?b("React").jsx(b("BaseScrollableAreaContext").Provider,{value:c,children:b("React").jsx(w,{"aria-labelledby":u,className:(g||(g=b("stylex")))(n["default"],r&&n.hideScrollbar,t&&n.horizontalAuto,y&&n.verticalAuto,z),onScroll:Q,ref:K,children:b("React").jsxs("div",babelHelpers["extends"]({className:g(n.baseScroller),id:e},b("cometTestID")(x),{children:[d,v?b("React").jsx(s,{onVisible:v}):null]}))})}):b("React").jsx(b("BaseScrollableAreaContext").Provider,{value:c,children:b("React").jsxs(w,{"aria-labelledby":u,className:(g||(g=b("stylex")))(n.hideScrollbar,n["default"],n.perspective,t&&n.horizontalAuto,y&&n.verticalAuto,z),onMouseEnter:B,onMouseLeave:P,onScroll:Q,ref:K,children:[b("React").jsxs("div",babelHelpers["extends"]({className:g(n.baseScroller),id:e},b("cometTestID")(x),{ref:J,children:[d,v?b("React").jsx(s,{onVisible:v}):null]})),b("React").jsx("div",{className:g(p.base),"data-novc":"1","data-thumb":1,ref:M}),b("React").jsx("div",{className:g(o.base,(C||E||G)&&o.hovered),"data-novc":"1","data-thumb":1,ref:L,children:b("React").jsx("div",{className:g(o.inner)})})]})})}var r={main:{height:"ay7djpcl",opacity:"b5wmifdl",pointerEvents:"hzruof5a",width:"rfua0xdk"}};function s(a){a=a.onVisible;a=b("useVisibilityObserver")({onVisible:a});return b("React").jsx("div",{className:(g||(g=b("stylex")))(r.main),ref:a})}e.exports=c.forwardRef(a)}),null);
__d("BaseToasterView.react",["CometToasterStateManager","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("CometToasterStateManager").getInstance();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={visibleToasts:[]},b)||babelHelpers.assertThisInitialized(c)}c.getDerivedStateFromProps=function(a,b){__p&&__p();b=b!=null?b.visibleToasts.slice(0,a.maxVisible):[];var c=0,d=a.filterToasts,e=a.toasterState,f={},h=d!=null?Object.keys(e).filter(function(a){__p&&__p();var b,c=e[a];f[a]=c;var h=c==null?void 0:c.shown;b=c==null?void 0:(b=c.value)==null?void 0:(b=b.type)==null?void 0:b.name;if(c==null||b==null)return!0;if(d.has(b)&&!h){g.expire(a);return!1}}):Object.keys(e),i=b.reduce(function(a,b){b!=null&&a.add(b.id);return a},new Set()),j=0;while(c<a.maxVisible){var k=b[c],l=Object.keys(f).length>0?f:a.toasterState;if(k!=null){l=Object.prototype.hasOwnProperty.call(l,k.id);if(l){l=e[k.id];b[c]={expired:l.expired,id:l.id,toast:l.value};c++;continue}else b[c]=null}k=null;while(k==null&&j<h.length){l=h[j++];var m=i.has(l);m||(k=a.toasterState[l])}k!=null&&(b[c]={expired:k.expired,id:k.id,toast:k.value});c++}return{visibleToasts:b}};var d=c.prototype;d.render=function(){var a=this;return b("React").jsx("ul",{className:this.props.className,children:this.state.visibleToasts.map(function(b,c){return b!=null?a.props.children(b.toast,b.id,b.expired,c):null})})};return c}(b("React").PureComponent);a.defaultProps={maxVisible:1};e.exports=a}),null);
__d("CometToasterStateManagerContext.react",["CometToasterStateManager","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createContext(b("CometToasterStateManager").getInstance());e.exports=a}),null);
__d("useToasterStateManager",["CometToasterStateManagerContext.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(){return g(b("CometToasterStateManagerContext.react"))}e.exports=a}),null);
__d("CometToastAnimationInternal.react",["React","stylex","useFadeEffect","useMergeRefs","useToasterStateManager","useVisibilityObserver"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").useCallback,i=100,j={mount:{opacity:"pedkr2u6",transform:"g3zh7qmp",transitionDuration:"pc15xi3s",transitionTimingFunction:"ilcmz9jb"},root:{opacity:"b5wmifdl",transform:"f2tghaqp",transitionDuration:"s1992sns",transitionProperty:"r5qslco7",transitionTimingFunction:"nf1dmkjp"}};function a(a){__p&&__p();var c=a.children,d=a.expired;d=d===void 0?!1:d;var e=a.id,f=a.position;a=a.xstyle;var k=b("useToasterStateManager")(),l=b("React").Children.only(c);c=h(function(){k.resetTimer(e)},[e,k]);var m=h(function(){k.stopTimer(e)},[e,k]),n=h(function(){k.shown(e)},[e,k]),o=h(function(){k.hidden(e)},[e,k]),p=h(function(a){l.props.onActionPress!=null&&l.props.onActionPress(a),a.defaultPrevented||k.expire(e)},[l.props,e,k]);o=b("useVisibilityObserver")({onHidden:o,onVisible:n});n=b("useFadeEffect")(!d);d=n[0];var q=n[1];n=n[2];n=b("useMergeRefs")(n,o);return d?b("React").jsx("li",{className:(g||(g=b("stylex")))(j.root,q&&j.mount,a),onMouseEnter:m,onMouseLeave:c,ref:n,style:{bottom:i*f},children:b("React").cloneElement(l,{onActionPress:p})}):null}e.exports=a}),null);
__d("CometHero.react",["CometHeroInteractionContext","CometHeroInteractionIDContext","React","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useContext;function a(a){var c=a.description,d=g(b("CometHeroInteractionContext").Context),e=g(b("CometHeroInteractionIDContext"));b("useLayoutEffect_SAFE_FOR_SSR")(function(){e!=null&&d.logCometHero(e,c,d.pageletStack)},[c,d,e]);return null}e.exports=b("React").memo(a)}),null);