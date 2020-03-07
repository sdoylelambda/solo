if (self.CavalryLogger) { CavalryLogger.start_js(["aC2Hj"]); }

__d("useCometDisplayTimingTracker",["requireCond","cr:1075529","cr:683059","React"],(function(a,b,c,d,e,f){"use strict";var g=b("React").useCallback,h=b("React").useRef;function a(a,c,d,e,f){var i=h(null);return g(function(g){i.current!==g&&(i.current=g,g&&(b("cr:683059")&&b("cr:683059").addRenderingInfo(g,a,c,d,e,f),b("cr:1075529")&&(b("cr:1075529").addRenderingInfo(g,a,c,"TAIL_LOAD"),b("cr:1075529").addMutationRootForTraceType(g,"TAIL_LOAD"))))},[a,c,d,e,f])}e.exports=a}),null);
__d("CometPageletImpl.react",["requireCond","CometHeroInteractionContext","CometHeroInteractionIDContext","CometRelay","cr:683059","React","mergeRefs","performanceNavigationStart","performanceNow","useCometDisplayTimingTracker"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("CometRelay").ProfilerContext,i=(c=b("React")).useCallback,j=c.useContext,k=c.useMemo;function l(a,b){return babelHelpers["extends"]({},a,{pageletStack:[].concat(a.pageletStack,[b])})}function a(a,c){__p&&__p();var d=a.children,e=a.name,f=a.pageletType,m=a.position,n=j(b("CometHeroInteractionContext").Context),o=j(b("CometHeroInteractionIDContext")),p=m===void 0?e:e+"_"+m;a=k(function(){var a=l(n,p),b=a.getRelayProfilerContext(a.pageletStack);return[a,b]},[n,p]);var q=a[0];a=a[1];var r=k(function(){return(g||(g=b("performanceNow")))()},[o]),s=i(function(){if(m!=null&&m>10)return null;b("cr:683059")&&(b("cr:683059").addFirstMarkerPoint("Queue_"+p,r+b("performanceNavigationStart")()),b("cr:683059").addFirstMarkerPoint("Render_"+p));return null},[p,m,r]),t=i(function(a,b){o!=null&&q.logPageletVC(o,r,a,b,q.pageletStack)},[o,q,r]),u=b("useCometDisplayTimingTracker")(e,m,p,t,f);e=k(function(){return b("mergeRefs")(c,u)},[c,u]);return b("React").jsx(b("CometHeroInteractionContext").Context.Provider,{value:q,children:b("React").jsx(h.Provider,{value:a,children:d(e,s)})})}e.exports=c.forwardRef(a)}),null);
__d("CometVisualCompletionUtil",["Visibility","cancelAnimationFrame","clearTimeout","requestAnimationFrame","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={foregroundRequestAnimationFrame:function(a){if(b("Visibility").isHidden()){var c=b("setTimeout")(a,0);return function(){b("clearTimeout")(c)}}else{var d=b("requestAnimationFrame")(a);return function(){b("cancelAnimationFrame")(d)}}},getPixels:function(a){return(a.right-a.left)*(a.bottom-a.top)},getRectIntersection:function(a,b){return{bottom:Math.max(Math.min(a.bottom,b.bottom),b.top),left:Math.min(Math.max(a.left,b.left),b.right),right:Math.max(Math.min(a.right,b.right),b.left),top:Math.min(Math.max(a.top,b.top),b.bottom)}},getViewportSize:function(){return{height:window.innerHeight,width:window.innerWidth}},isInAboveTheFold:function(a){if(typeof a.getBoundingClientRect!=="function")return!1;var b=g.getViewportSize();a=a.getBoundingClientRect();var c=a.bottom,d=a.left,e=a.right;a=a.top;c=g.getPixels(g.getRectIntersection({bottom:c,left:d,right:e,top:a},{bottom:b.height,left:0,right:b.width,top:-window.scrollY}));return c>0},offsetTop:function(a,b){__p&&__p();var c=0;a=a;while(a&&a.offsetParent&&typeof a.offsetTop==="number")c+=a.offsetTop,a=a.offsetParent;if(a&&a.offsetParent==null&&typeof a.getBoundingClientRect==="function"){var d=a.getBoundingClientRect();d=d.top;d>=0?c+=d:a===document.body&&(c-=b)}return c},trimHash:function(a){return a.split("#")[0]}};e.exports=g}),null);
__d("CometHeroInteractionLoggerAPI",["CometInteractionTracingMetrics"],(function(a,b,c,d,e,f){"use strict";function a(){return b("CometInteractionTracingMetrics").getHeroInteractionLogger()}e.exports={getInteractionLogger:a}}),null);
__d("CometHeroInteractionImpl.react",["Promise","requireCond","CometHeroInteractionContext","CometHeroInteractionIDContext","CometHeroInteractionLoggerAPI","CometHeroLogging","cr:1075529","CometPageletImpl.react","cr:683059","CometVisualCompletionConstants","CometVisualCompletionUtil","HiddenSubtreePassiveContext","PromiseAnnotate","React","gkx","relay-experimental/ProfilerContext","stylex","useLayoutEffect_SAFE_FOR_SSR","useStable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=(c=b("React")).useCallback,j=c.useContext,k=c.useEffect,l=c.useMemo,m=c.useRef,n="Interaction Start",o="root",p=new WeakSet();function q(a,c){b("CometHeroLogging").markStart(a,c)}function r(a,c,d,e,f){b("CometHeroLogging").markEnd(a,c,[].concat(e),"PlaceholderWait","Placeholder Wait: "+f,d)}function s(a){if(!a)return"No placeholder";var c=a.name!=null?"@"+a.name:"";a=b("CometHeroLogging").createThenableDescription(a.thenables)||"No Promises";return a+c}function a(a,c){__p&&__p();var d=a.children,e=a.hidden,f=a.interactionDesc,t=a.interactionUUID,u=a.pageletName,v=a.xstyle,w=j(b("CometHeroInteractionContext").Context),x=m(null),y=m(null),z=j(b("HiddenSubtreePassiveContext")),A=f!=null?f:"No Description",B=m({}),C=m({}),D=m(null),E=b("useStable")(b("CometHeroInteractionLoggerAPI").getInteractionLogger),F=b("useStable")(b("CometHeroLogging").getSimpleUUID),G=l(function(){var a;return[].concat(w.pageletStack,[(a=u)!=null?a:o])},[w.pageletStack,u]),H=i(function(a,c){y.current!==a&&x.current==null&&!z.getCurrentState().hidden&&Object.values(B.current).length===0&&(x.current=(g||(g=b("CometVisualCompletionUtil"))).foregroundRequestAnimationFrame(function(){x.current=null,!z.getCurrentState().hidden&&y.current!==a&&Object.values(B.current).length===0&&(y.current=a,b("CometHeroLogging").markEnd(E,a,G,"Interaction","Interaction Done: "+c,n),E.endHeroInteraction(a),b("cr:1075529")&&b("cr:1075529").resumeVCTrace(a,b("CometVisualCompletionConstants").HERO_TRACING_HOLD),b("cr:683059")&&b("gkx")("1266275")&&b("cr:683059").resumeTrigger(a),w.unhold(a,a+"_"+F))}))},[z,E,w,F,G]),I=i(function(){var a=D.current;a!=null&&H(a.interactionUUID,a.interactionDesc)},[H]),J=i(function(a,c){var d=D.current;d!=null&&y.current!==d.interactionUUID&&(b("CometHeroLogging").markEnd(E,d.interactionUUID,G,"Interaction","Interaction Aborted ("+c+"): "+d.interactionDesc,n),E.endHeroInteraction(d.interactionUUID),b("cr:1075529")&&b("cr:1075529").resumeVCTrace(d.interactionUUID,b("CometVisualCompletionConstants").HERO_TRACING_HOLD),w.unhold(d.interactionUUID,d.interactionUUID+"_"+F),b("cr:683059")&&b("gkx")("1266275")&&b("cr:683059").resumeTrigger(d.interactionUUID),a!==null&&d.interactionUUID===a.interactionUUID&&(b("CometHeroLogging").markStart(a.interactionUUID,n),b("cr:1075529")&&b("cr:1075529").holdVCTrace(a.interactionUUID,b("CometVisualCompletionConstants").HERO_TRACING_HOLD),w.hold(d.interactionUUID,G,"Sub Interaction:"+A,d.interactionUUID+"_"+F)));y.current=null;x.current&&x.current();x.current=null;D.current=a},[E,w,F,A,G]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){var a=null;t!=null&&(a={interactionDesc:A,interactionUUID:t});J(a,"New Interaction");t!=null&&H(t,A)},[A,t,J,H]);b("useLayoutEffect_SAFE_FOR_SSR")(function(){if(t!=null){var a=z.getCurrentState().hidden,b=z.subscribeToChanges(function(b){b=b.hidden;a!==b&&(a=b,b?J({interactionDesc:A,interactionUUID:t},"Hidden"):H(t,A))});return function(){return b.remove()}}},[z,t,A,J,H]);k(function(){return function(){J(null,"Unmount")}},[J]);var K=l(function(){__p&&__p();var a={getRelayProfilerContext:function(a){return{wrapPrepareQueryResource:function(a){a=a();return a}}},hold:function(c,d,e,f,g){e===void 0&&(e="Hold");f=(f=f)!=null?f:b("CometHeroLogging").getSimpleUUID();a.registerPlaceholder(c,f,d);var h=new(b("Promise"))(function(){});b("PromiseAnnotate").setDisplayName(h,e);a.suspenseCallback(c,f,d,new Set([h]),g);return f},logCometHero:function(a,c,d){y.current!==a&&b("CometHeroLogging").markEnd(E,a,[].concat(d),"HeroRendering","Hero Rendering: "+c,n,void 0)},logMetadata:function(a,b,c){var d;c=c[c.length-1];d=(d=C.current[c])!=null?d:Object.create(null);b!=null?d[a]=b:delete d[a];C.current[c]=d},logPageletVC:function(a,c,d,e,f){var g=f[f.length-1],h=C.current[g];h=h!=null?babelHelpers["extends"]({},h):void 0;h&&b("cr:683059")&&b("cr:683059").addRenderingMetadata(g,h);e!=null&&b("CometHeroLogging").measure(E,a,[].concat(f),"VCWithoutImage","VCWithoutImage: "+f[f.length-1],Math.min(c,e),e,h);d!=null&&b("CometHeroLogging").measure(E,a,[].concat(f),"VC","VC: "+f[f.length-1],Math.min(c,d),d,h)},logReactRender:function(a,c,d,e,f,g,h){y.current!==a&&b("CometHeroLogging").measure(E,a,[].concat(h),"ReactRender","ReactRender: "+c,e,f,{baseDuration:g})},pageletStack:w.pageletStack,registerPlaceholder:function(a,b,c){var d=B.current[b]==null;if(!d)return;x.current&&x.current();x.current=null;d=new Set();B.current[b]={pageletStack:c,thenables:d};q(a,b)},removePlaceholder:function(a,b){var c=B.current[b]!=null;if(!c)return;c=B.current[b];delete B.current[b];I();r(E,a,b,c.pageletStack,s(c))},suspenseCallback:function(a,c,d,e,f){__p&&__p();var g=B.current[c];B.current[c]==null&&q(a,c);B.current[c]={name:f,pageletStack:d,thenables:e};e.forEach(function(c){if(!p.has(c)){var e;p.add(c);var f=(e=b("PromiseAnnotate").getDisplayName(c))!=null?e:"Promise",g=b("CometHeroLogging").getSimpleUUID();b("CometHeroLogging").markStart(a,g);c.then(function(){b("CometHeroLogging").markEnd(E,a,d,"SuspensePromise","Promise: "+f,g)})}});f=s(g);e=s(B.current[c]);e!==f&&(r(E,a,c,d,e),q(a,c))},unhold:function(b,c){a.removePlaceholder(b,c)}};return a},[E,w,I]);a=l(function(){return K.getRelayProfilerContext(K.pageletStack)},[K]);return b("React").jsx(b("CometHeroInteractionContext").Context.Provider,{value:K,children:b("React").jsx(b("CometHeroInteractionIDContext").Provider,{value:t,children:b("React").jsx(b("relay-experimental/ProfilerContext").Provider,{value:a,children:b("React").jsx(b("CometPageletImpl.react"),{name:(f=u)!=null?f:o,ref:c,children:function(a,c){return b("React").jsxs("div",{className:(h||(h=b("stylex")))(v),hidden:e,ref:a,children:[b("React").jsx(c,{}),d]})}})})})})}e.exports=c.forwardRef(a)}),null);
__d("XSavedForLaterDashboardController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/saved/",{collection_token:{type:"String"},tag_filter:{type:"String"},cref:{type:"Int"},suggestion_dialog:{type:"Int"},cursor:{type:"String"},notif_id:{type:"Int"},dashboard_section:{type:"Enum",defaultValue:"ALL",enumType:1},cref_name:{type:"String"},a_type:{type:"String"},search_token:{type:"String"},list_id:{type:"Int"},tab:{type:"Enum",enumType:1},unlisted_only:{type:"Bool",defaultValue:!1},seen_state_filter:{type:"Enum",enumType:0},referrer:{type:"String"},use_case:{type:"Enum",enumType:1}})}),null);