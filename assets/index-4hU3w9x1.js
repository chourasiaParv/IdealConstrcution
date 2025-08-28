(function(){const de=document.createElement("link").relList;if(de&&de.supports&&de.supports("modulepreload"))return;for(const V of document.querySelectorAll('link[rel="modulepreload"]'))y(V);new MutationObserver(V=>{for(const k of V)if(k.type==="childList")for(const te of k.addedNodes)te.tagName==="LINK"&&te.rel==="modulepreload"&&y(te)}).observe(document,{childList:!0,subtree:!0});function H(V){const k={};return V.integrity&&(k.integrity=V.integrity),V.referrerPolicy&&(k.referrerPolicy=V.referrerPolicy),V.crossOrigin==="use-credentials"?k.credentials="include":V.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function y(V){if(V.ep)return;V.ep=!0;const k=H(V);fetch(V.href,k)}})();var Zu={exports:{}},zr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function Oh(){if(h0)return zr;h0=1;var E=Symbol.for("react.transitional.element"),de=Symbol.for("react.fragment");function H(y,V,k){var te=null;if(k!==void 0&&(te=""+k),V.key!==void 0&&(te=""+V.key),"key"in V){k={};for(var ve in V)ve!=="key"&&(k[ve]=V[ve])}else k=V;return V=k.ref,{$$typeof:E,type:y,key:te,ref:V!==void 0?V:null,props:k}}return zr.Fragment=de,zr.jsx=H,zr.jsxs=H,zr}var m0;function Mh(){return m0||(m0=1,Zu.exports=Oh()),Zu.exports}var c=Mh(),Ku={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function Dh(){if(p0)return we;p0=1;var E=Symbol.for("react.transitional.element"),de=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),te=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),me=Symbol.iterator;function z(h){return h===null||typeof h!="object"?null:(h=me&&h[me]||h["@@iterator"],typeof h=="function"?h:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,P={};function ne(h,C,K){this.props=h,this.context=C,this.refs=P,this.updater=K||L}ne.prototype.isReactComponent={},ne.prototype.setState=function(h,C){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,C,"setState")},ne.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function _e(){}_e.prototype=ne.prototype;function Se(h,C,K){this.props=h,this.context=C,this.refs=P,this.updater=K||L}var Ye=Se.prototype=new _e;Ye.constructor=Se,W(Ye,ne.prototype),Ye.isPureReactComponent=!0;var yt=Array.isArray,Te={H:null,A:null,T:null,S:null,V:null},it=Object.prototype.hasOwnProperty;function Ht(h,C,K,q,F,je){return K=je.ref,{$$typeof:E,type:h,key:C,ref:K!==void 0?K:null,props:je}}function xt(h,C){return Ht(h.type,C,void 0,void 0,void 0,h.props)}function na(h){return typeof h=="object"&&h!==null&&h.$$typeof===E}function dn(h){var C={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(K){return C[K]})}var Na=/\/+/g;function rt(h,C){return typeof h=="object"&&h!==null&&h.key!=null?dn(""+h.key):C.toString(36)}function qa(){}function Xa(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(qa,qa):(h.status="pending",h.then(function(C){h.status==="pending"&&(h.status="fulfilled",h.value=C)},function(C){h.status==="pending"&&(h.status="rejected",h.reason=C)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function ot(h,C,K,q,F){var je=typeof h;(je==="undefined"||je==="boolean")&&(h=null);var ae=!1;if(h===null)ae=!0;else switch(je){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(h.$$typeof){case E:case de:ae=!0;break;case Y:return ae=h._init,ot(ae(h._payload),C,K,q,F)}}if(ae)return F=F(h),ae=q===""?"."+rt(h,0):q,yt(F)?(K="",ae!=null&&(K=ae.replace(Na,"$&/")+"/"),ot(F,C,K,"",function(ia){return ia})):F!=null&&(na(F)&&(F=xt(F,K+(F.key==null||h&&h.key===F.key?"":(""+F.key).replace(Na,"$&/")+"/")+ae)),C.push(F)),1;ae=0;var _t=q===""?".":q+":";if(yt(h))for(var B=0;B<h.length;B++)q=h[B],je=_t+rt(q,B),ae+=ot(q,C,K,je,F);else if(B=z(h),typeof B=="function")for(h=B.call(h),B=0;!(q=h.next()).done;)q=q.value,je=_t+rt(q,B++),ae+=ot(q,C,K,je,F);else if(je==="object"){if(typeof h.then=="function")return ot(Xa(h),C,K,q,F);throw C=String(h),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}return ae}function N(h,C,K){if(h==null)return h;var q=[],F=0;return ot(h,q,"","",function(je){return C.call(K,je,F++)}),q}function G(h){if(h._status===-1){var C=h._result;C=C(),C.then(function(K){(h._status===0||h._status===-1)&&(h._status=1,h._result=K)},function(K){(h._status===0||h._status===-1)&&(h._status=2,h._result=K)}),h._status===-1&&(h._status=0,h._result=C)}if(h._status===1)return h._result.default;throw h._result}var le=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var C=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(C))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function Ue(){}return we.Children={map:N,forEach:function(h,C,K){N(h,function(){C.apply(this,arguments)},K)},count:function(h){var C=0;return N(h,function(){C++}),C},toArray:function(h){return N(h,function(C){return C})||[]},only:function(h){if(!na(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},we.Component=ne,we.Fragment=H,we.Profiler=V,we.PureComponent=Se,we.StrictMode=y,we.Suspense=U,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te,we.__COMPILER_RUNTIME={__proto__:null,c:function(h){return Te.H.useMemoCache(h)}},we.cache=function(h){return function(){return h.apply(null,arguments)}},we.cloneElement=function(h,C,K){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var q=W({},h.props),F=h.key,je=void 0;if(C!=null)for(ae in C.ref!==void 0&&(je=void 0),C.key!==void 0&&(F=""+C.key),C)!it.call(C,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&C.ref===void 0||(q[ae]=C[ae]);var ae=arguments.length-2;if(ae===1)q.children=K;else if(1<ae){for(var _t=Array(ae),B=0;B<ae;B++)_t[B]=arguments[B+2];q.children=_t}return Ht(h.type,F,void 0,void 0,je,q)},we.createContext=function(h){return h={$$typeof:te,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:k,_context:h},h},we.createElement=function(h,C,K){var q,F={},je=null;if(C!=null)for(q in C.key!==void 0&&(je=""+C.key),C)it.call(C,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&(F[q]=C[q]);var ae=arguments.length-2;if(ae===1)F.children=K;else if(1<ae){for(var _t=Array(ae),B=0;B<ae;B++)_t[B]=arguments[B+2];F.children=_t}if(h&&h.defaultProps)for(q in ae=h.defaultProps,ae)F[q]===void 0&&(F[q]=ae[q]);return Ht(h,je,void 0,void 0,null,F)},we.createRef=function(){return{current:null}},we.forwardRef=function(h){return{$$typeof:ve,render:h}},we.isValidElement=na,we.lazy=function(h){return{$$typeof:Y,_payload:{_status:-1,_result:h},_init:G}},we.memo=function(h,C){return{$$typeof:A,type:h,compare:C===void 0?null:C}},we.startTransition=function(h){var C=Te.T,K={};Te.T=K;try{var q=h(),F=Te.S;F!==null&&F(K,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(Ue,le)}catch(je){le(je)}finally{Te.T=C}},we.unstable_useCacheRefresh=function(){return Te.H.useCacheRefresh()},we.use=function(h){return Te.H.use(h)},we.useActionState=function(h,C,K){return Te.H.useActionState(h,C,K)},we.useCallback=function(h,C){return Te.H.useCallback(h,C)},we.useContext=function(h){return Te.H.useContext(h)},we.useDebugValue=function(){},we.useDeferredValue=function(h,C){return Te.H.useDeferredValue(h,C)},we.useEffect=function(h,C,K){var q=Te.H;if(typeof K=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(h,C)},we.useId=function(){return Te.H.useId()},we.useImperativeHandle=function(h,C,K){return Te.H.useImperativeHandle(h,C,K)},we.useInsertionEffect=function(h,C){return Te.H.useInsertionEffect(h,C)},we.useLayoutEffect=function(h,C){return Te.H.useLayoutEffect(h,C)},we.useMemo=function(h,C){return Te.H.useMemo(h,C)},we.useOptimistic=function(h,C){return Te.H.useOptimistic(h,C)},we.useReducer=function(h,C,K){return Te.H.useReducer(h,C,K)},we.useRef=function(h){return Te.H.useRef(h)},we.useState=function(h){return Te.H.useState(h)},we.useSyncExternalStore=function(h,C,K){return Te.H.useSyncExternalStore(h,C,K)},we.useTransition=function(){return Te.H.useTransition()},we.version="19.1.1",we}var g0;function Iu(){return g0||(g0=1,Ku.exports=Dh()),Ku.exports}var be=Iu(),$u={exports:{}},Or={},Ju={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function Ch(){return b0||(b0=1,function(E){function de(N,G){var le=N.length;N.push(G);e:for(;0<le;){var Ue=le-1>>>1,h=N[Ue];if(0<V(h,G))N[Ue]=G,N[le]=h,le=Ue;else break e}}function H(N){return N.length===0?null:N[0]}function y(N){if(N.length===0)return null;var G=N[0],le=N.pop();if(le!==G){N[0]=le;e:for(var Ue=0,h=N.length,C=h>>>1;Ue<C;){var K=2*(Ue+1)-1,q=N[K],F=K+1,je=N[F];if(0>V(q,le))F<h&&0>V(je,q)?(N[Ue]=je,N[F]=le,Ue=F):(N[Ue]=q,N[K]=le,Ue=K);else if(F<h&&0>V(je,le))N[Ue]=je,N[F]=le,Ue=F;else break e}}return G}function V(N,G){var le=N.sortIndex-G.sortIndex;return le!==0?le:N.id-G.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;E.unstable_now=function(){return k.now()}}else{var te=Date,ve=te.now();E.unstable_now=function(){return te.now()-ve}}var U=[],A=[],Y=1,me=null,z=3,L=!1,W=!1,P=!1,ne=!1,_e=typeof setTimeout=="function"?setTimeout:null,Se=typeof clearTimeout=="function"?clearTimeout:null,Ye=typeof setImmediate<"u"?setImmediate:null;function yt(N){for(var G=H(A);G!==null;){if(G.callback===null)y(A);else if(G.startTime<=N)y(A),G.sortIndex=G.expirationTime,de(U,G);else break;G=H(A)}}function Te(N){if(P=!1,yt(N),!W)if(H(U)!==null)W=!0,it||(it=!0,rt());else{var G=H(A);G!==null&&ot(Te,G.startTime-N)}}var it=!1,Ht=-1,xt=5,na=-1;function dn(){return ne?!0:!(E.unstable_now()-na<xt)}function Na(){if(ne=!1,it){var N=E.unstable_now();na=N;var G=!0;try{e:{W=!1,P&&(P=!1,Se(Ht),Ht=-1),L=!0;var le=z;try{t:{for(yt(N),me=H(U);me!==null&&!(me.expirationTime>N&&dn());){var Ue=me.callback;if(typeof Ue=="function"){me.callback=null,z=me.priorityLevel;var h=Ue(me.expirationTime<=N);if(N=E.unstable_now(),typeof h=="function"){me.callback=h,yt(N),G=!0;break t}me===H(U)&&y(U),yt(N)}else y(U);me=H(U)}if(me!==null)G=!0;else{var C=H(A);C!==null&&ot(Te,C.startTime-N),G=!1}}break e}finally{me=null,z=le,L=!1}G=void 0}}finally{G?rt():it=!1}}}var rt;if(typeof Ye=="function")rt=function(){Ye(Na)};else if(typeof MessageChannel<"u"){var qa=new MessageChannel,Xa=qa.port2;qa.port1.onmessage=Na,rt=function(){Xa.postMessage(null)}}else rt=function(){_e(Na,0)};function ot(N,G){Ht=_e(function(){N(E.unstable_now())},G)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(N){N.callback=null},E.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xt=0<N?Math.floor(1e3/N):5},E.unstable_getCurrentPriorityLevel=function(){return z},E.unstable_next=function(N){switch(z){case 1:case 2:case 3:var G=3;break;default:G=z}var le=z;z=G;try{return N()}finally{z=le}},E.unstable_requestPaint=function(){ne=!0},E.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var le=z;z=N;try{return G()}finally{z=le}},E.unstable_scheduleCallback=function(N,G,le){var Ue=E.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?Ue+le:Ue):le=Ue,N){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=le+h,N={id:Y++,callback:G,priorityLevel:N,startTime:le,expirationTime:h,sortIndex:-1},le>Ue?(N.sortIndex=le,de(A,N),H(U)===null&&N===H(A)&&(P?(Se(Ht),Ht=-1):P=!0,ot(Te,le-Ue))):(N.sortIndex=h,de(U,N),W||L||(W=!0,it||(it=!0,rt()))),N},E.unstable_shouldYield=dn,E.unstable_wrapCallback=function(N){var G=z;return function(){var le=z;z=G;try{return N.apply(this,arguments)}finally{z=le}}}}(Wu)),Wu}var v0;function kh(){return v0||(v0=1,Ju.exports=Ch()),Ju.exports}var Fu={exports:{}},Ut={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function Rh(){if(y0)return Ut;y0=1;var E=Iu();function de(U){var A="https://react.dev/errors/"+U;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)A+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+U+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(){}var y={d:{f:H,r:function(){throw Error(de(522))},D:H,C:H,L:H,m:H,X:H,S:H,M:H},p:0,findDOMNode:null},V=Symbol.for("react.portal");function k(U,A,Y){var me=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:me==null?null:""+me,children:U,containerInfo:A,implementation:Y}}var te=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ve(U,A){if(U==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,Ut.createPortal=function(U,A){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(de(299));return k(U,A,null,Y)},Ut.flushSync=function(U){var A=te.T,Y=y.p;try{if(te.T=null,y.p=2,U)return U()}finally{te.T=A,y.p=Y,y.d.f()}},Ut.preconnect=function(U,A){typeof U=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,y.d.C(U,A))},Ut.prefetchDNS=function(U){typeof U=="string"&&y.d.D(U)},Ut.preinit=function(U,A){if(typeof U=="string"&&A&&typeof A.as=="string"){var Y=A.as,me=ve(Y,A.crossOrigin),z=typeof A.integrity=="string"?A.integrity:void 0,L=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;Y==="style"?y.d.S(U,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:me,integrity:z,fetchPriority:L}):Y==="script"&&y.d.X(U,{crossOrigin:me,integrity:z,fetchPriority:L,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Ut.preinitModule=function(U,A){if(typeof U=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var Y=ve(A.as,A.crossOrigin);y.d.M(U,{crossOrigin:Y,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&y.d.M(U)},Ut.preload=function(U,A){if(typeof U=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var Y=A.as,me=ve(Y,A.crossOrigin);y.d.L(U,Y,{crossOrigin:me,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Ut.preloadModule=function(U,A){if(typeof U=="string")if(A){var Y=ve(A.as,A.crossOrigin);y.d.m(U,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:Y,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else y.d.m(U)},Ut.requestFormReset=function(U){y.d.r(U)},Ut.unstable_batchedUpdates=function(U,A){return U(A)},Ut.useFormState=function(U,A,Y){return te.H.useFormState(U,A,Y)},Ut.useFormStatus=function(){return te.H.useHostTransitionStatus()},Ut.version="19.1.1",Ut}var x0;function Yh(){if(x0)return Fu.exports;x0=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(de){console.error(de)}}return E(),Fu.exports=Rh(),Fu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function Uh(){if(_0)return Or;_0=1;var E=kh(),de=Iu(),H=Yh();function y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function V(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function k(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function te(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ve(e){if(k(e)!==e)throw Error(y(188))}function U(e){var t=e.alternate;if(!t){if(t=k(e),t===null)throw Error(y(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return ve(i),e;if(s===n)return ve(i),t;s=s.sibling}throw Error(y(188))}if(a.return!==n.return)a=i,n=s;else{for(var o=!1,f=i.child;f;){if(f===a){o=!0,a=i,n=s;break}if(f===n){o=!0,n=i,a=s;break}f=f.sibling}if(!o){for(f=s.child;f;){if(f===a){o=!0,a=s,n=i;break}if(f===n){o=!0,n=s,a=i;break}f=f.sibling}if(!o)throw Error(y(189))}}if(a.alternate!==n)throw Error(y(190))}if(a.tag!==3)throw Error(y(188));return a.stateNode.current===a?e:t}function A(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=A(e),t!==null)return t;e=e.sibling}return null}var Y=Object.assign,me=Symbol.for("react.element"),z=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),Se=Symbol.for("react.consumer"),Ye=Symbol.for("react.context"),yt=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),it=Symbol.for("react.suspense_list"),Ht=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),na=Symbol.for("react.activity"),dn=Symbol.for("react.memo_cache_sentinel"),Na=Symbol.iterator;function rt(e){return e===null||typeof e!="object"?null:(e=Na&&e[Na]||e["@@iterator"],typeof e=="function"?e:null)}var qa=Symbol.for("react.client.reference");function Xa(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case ne:return"Profiler";case P:return"StrictMode";case Te:return"Suspense";case it:return"SuspenseList";case na:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case L:return"Portal";case Ye:return(e.displayName||"Context")+".Provider";case Se:return(e._context.displayName||"Context")+".Consumer";case yt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ht:return t=e.displayName||null,t!==null?t:Xa(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return Xa(e(t))}catch{}}return null}var ot=Array.isArray,N=de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},Ue=[],h=-1;function C(e){return{current:e}}function K(e){0>h||(e.current=Ue[h],Ue[h]=null,h--)}function q(e,t){h++,Ue[h]=e.current,e.current=t}var F=C(null),je=C(null),ae=C(null),_t=C(null);function B(e,t){switch(q(ae,t),q(je,e),q(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qd(t),e=Xd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(F),q(F,e)}function ia(){K(F),K(je),K(ae)}function cl(e){e.memoizedState!==null&&q(_t,e);var t=F.current,a=Xd(t,e.type);t!==a&&(q(je,e),q(F,a))}function ul(e){je.current===e&&(K(F),K(je)),_t.current===e&&(K(_t),jr._currentValue=le)}var ls=Object.prototype.hasOwnProperty,hn=E.unstable_scheduleCallback,fl=E.unstable_cancelCallback,Ui=E.unstable_shouldYield,$n=E.unstable_requestPaint,pa=E.unstable_now,xc=E.unstable_getCurrentPriorityLevel,Mr=E.unstable_ImmediatePriority,Dr=E.unstable_UserBlockingPriority,dl=E.unstable_NormalPriority,_c=E.unstable_LowPriority,Cr=E.unstable_IdlePriority,hl=E.log,Ga=E.unstable_setDisableYieldValue,Jn=null,Bt=null;function Qa(e){if(typeof hl=="function"&&Ga(e),Bt&&typeof Bt.setStrictMode=="function")try{Bt.setStrictMode(Jn,e)}catch{}}var ct=Math.clz32?Math.clz32:ml,Wn=Math.log,Fn=Math.LN2;function ml(e){return e>>>=0,e===0?32:31-(Wn(e)/Fn|0)|0}var pl=256,In=4194304;function mn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var f=n&134217727;return f!==0?(n=f&~s,n!==0?i=mn(n):(o&=f,o!==0?i=mn(o):a||(a=f&~e,a!==0&&(i=mn(a))))):(f=n&~s,f!==0?i=mn(f):o!==0?i=mn(o):a||(a=n&~e,a!==0&&(i=mn(a)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:i}function Hi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wc(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(){var e=pl;return pl<<=1,(pl&4194048)===0&&(pl=256),e}function Rr(){var e=In;return In<<=1,(In&62914560)===0&&(In=4194304),e}function bl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Va(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yr(e,t,a,n,i,s){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,m=e.expirationTimes,_=e.hiddenUpdates;for(a=o&~a;0<a;){var T=31-ct(a),D=1<<T;f[T]=0,m[T]=-1;var w=_[T];if(w!==null)for(_[T]=null,T=0;T<w.length;T++){var S=w[T];S!==null&&(S.lane&=-536870913)}a&=~D}n!==0&&ss(e,n,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(o&~t))}function ss(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-ct(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Ur(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-ct(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function rs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:r0(e.type))}function Pn(e,t){var a=G.p;try{return G.p=e,t()}finally{G.p=a}}var $t=Math.random().toString(36).slice(2),pt="__reactFiber$"+$t,Tt="__reactProps$"+$t,ei="__reactContainer$"+$t,cs="__reactEvents$"+$t,Sc="__reactListeners$"+$t,us="__reactHandles$"+$t,pn="__reactResources$"+$t,Za="__reactMarker$"+$t;function fs(e){delete e[pt],delete e[Tt],delete e[cs],delete e[Sc],delete e[us]}function Ka(e){var t=e[pt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[ei]||a[pt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Zd(e);e!==null;){if(a=e[pt])return a;e=Zd(e)}return t}e=a,a=e.parentNode}return null}function ti(e){if(e=e[pt]||e[ei]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Bi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(y(33))}function la(e){var t=e[pn];return t||(t=e[pn]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Oe(e){e[Za]=!0}var zt=new Set,Ot={};function Je(e,t){Ta(e,t),Ta(e+"Capture",t)}function Ta(e,t){for(Ot[e]=t,e=0;e<t.length;e++)zt.add(t[e])}var ai=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$a={},gn={};function Br(e){return ls.call(gn,e)?!0:ls.call($a,e)?!1:ai.test(e)?gn[e]=!0:($a[e]=!0,!1)}function ni(e,t,a){if(Br(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function za(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ga(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var Li,vl;function bn(e){if(Li===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||"",vl=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Li+e+vl}var yl=!1;function xl(e,t){if(!e||yl)return"";yl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(S){var w=S}Reflect.construct(e,[],D)}else{try{D.call()}catch(S){w=S}e.call(D.prototype)}}else{try{throw Error()}catch(S){w=S}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(S){if(S&&w&&typeof S.stack=="string")return[S.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),o=s[0],f=s[1];if(o&&f){var m=o.split(`
`),_=f.split(`
`);for(i=n=0;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(n===m.length||i===_.length)for(n=m.length-1,i=_.length-1;1<=n&&0<=i&&m[n]!==_[i];)i--;for(;1<=n&&0<=i;n--,i--)if(m[n]!==_[i]){if(n!==1||i!==1)do if(n--,i--,0>i||m[n]!==_[i]){var T=`
`+m[n].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=n&&0<=i);break}}}finally{yl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?bn(a):""}function Lr(e){switch(e.tag){case 26:case 27:case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 15:return xl(e.type,!1);case 11:return xl(e.type.render,!1);case 1:return xl(e.type,!0);case 31:return bn("Activity");default:return""}}function ds(e){try{var t="";do t+=Lr(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Lt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qr(e){var t=hs(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qi(e){e._valueTracker||(e._valueTracker=qr(e))}function ms(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=hs(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xt=/[\n"\\]/g;function lt(e){return e.replace(Xt,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Mt(e,t,a,n,i,s,o,f){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Lt(t)):e.value!==""+Lt(t)&&(e.value=""+Lt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Xi(e,o,Lt(t)):a!=null?Xi(e,o,Lt(a)):n!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Lt(f):e.removeAttribute("name")}function _l(e,t,a,n,i,s,o,f){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null))return;a=a!=null?""+Lt(a):"",t=t!=null?""+Lt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=f?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function Xi(e,t,a){t==="number"&&qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function wt(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Lt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ja(e,t,a){if(t!=null&&(t=""+Lt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Lt(a):""}function Gi(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(y(92));if(ot(n)){if(1<n.length)throw Error(y(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Lt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function sa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var ps=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gs(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||ps.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function vn(e,t,a){if(t!=null&&typeof t!="object")throw Error(y(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&gs(e,i,n)}else for(var s in t)t.hasOwnProperty(s)&&gs(e,s,t[s])}function Qi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Oa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(e){return Oa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ba=null;function ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yn=null,va=null;function Sl(e){var t=ti(e);if(t&&(e=t.stateNode)){var a=e[Tt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Mt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+lt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Tt]||null;if(!i)throw Error(y(90));Mt(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&ms(n)}break e;case"textarea":Ja(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&wt(e,!!a.multiple,t,!1)}}}var xn=!1;function bs(e,t,a){if(xn)return e(t,a);xn=!0;try{var n=e(t);return n}finally{if(xn=!1,(yn!==null||va!==null)&&(Io(),yn&&(t=yn,e=va,va=yn=null,Sl(t),e)))for(t=0;t<e.length;t++)Sl(e[t])}}function li(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Tt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(y(231,t,typeof a));return a}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wa=!1;if(ya)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Wa=!1}var Ma=null,Zi=null,_n=null;function jl(){if(_n)return _n;var e,t=Zi,a=t.length,n,i="value"in Ma?Ma.value:Ma.textContent,s=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[s-n];n++);return _n=i.slice(e,1<n?1-n:void 0)}function El(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Gr(){return!1}function St(e){function t(a,n,i,s,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wn:Gr,this.isPropagationStopped=Gr,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},si=St(Da),Sn=Y({},Da,{view:0,detail:0}),Qr=St(Sn),jn,Ki,ri,$i=Y({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(jn=e.screenX-ri.screenX,Ki=e.screenY-ri.screenY):Ki=jn=0,ri=e),jn)},movementY:function(e){return"movementY"in e?e.movementY:Ki}}),En=St($i),jc=Y({},$i,{dataTransfer:0}),Vr=St(jc),Zr=Y({},Sn,{relatedTarget:0}),Al=St(Zr),Kr=Y({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),$r=St(Kr),vs=Y({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jr=St(vs),Ec=Y({},Da,{data:0}),Wr=St(Ec),Fr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ir={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ac(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nl[e])?!!t[e]:!1}function ys(){return Ac}var xs=Y({},Sn,{key:function(e){if(e.key){var t=Fr[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ir[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pr=St(xs),eo=Y({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fa=St(eo),_s=Y({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Nc=St(_s),to=Y({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tc=St(to),zc=Y({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oc=St(zc),Mc=Y({},Da,{newState:0,oldState:0}),ao=St(Mc),no=[9,13,27,32],ws=ya&&"CompositionEvent"in window,xa=null;ya&&"documentMode"in document&&(xa=document.documentMode);var An=ya&&"TextEvent"in window&&!xa,io=ya&&(!ws||xa&&8<xa&&11>=xa),Ji=" ",lo=!1;function so(e,t){switch(e){case"keyup":return no.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ro(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oi=!1;function Dc(e,t){switch(e){case"compositionend":return ro(t);case"keypress":return t.which!==32?null:(lo=!0,Ji);case"textInput":return e=t.data,e===Ji&&lo?null:e;default:return null}}function Cc(e,t){if(oi)return e==="compositionend"||!ws&&so(e,t)?(e=jl(),_n=Zi=Ma=null,oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return io&&t.locale!=="ko"?null:t.data;default:return null}}var kc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kc[e.type]:t==="textarea"}function Jt(e,t,a,n){yn?va?va.push(n):va=[n]:yn=n,t=ic(t,"onChange"),0<t.length&&(a=new si("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var ci=null,ui=null;function co(e){Yd(e,0)}function Tl(e){var t=Bi(e);if(ms(t))return e}function uo(e,t){if(e==="change")return t}var Ss=!1;if(ya){var fi;if(ya){var js="oninput"in document;if(!js){var fo=document.createElement("div");fo.setAttribute("oninput","return;"),js=typeof fo.oninput=="function"}fi=js}else fi=!1;Ss=fi&&(!document.documentMode||9<document.documentMode)}function Es(){ci&&(ci.detachEvent("onpropertychange",ho),ui=ci=null)}function ho(e){if(e.propertyName==="value"&&Tl(ui)){var t=[];Jt(t,ui,e,ii(e)),bs(co,t)}}function Rc(e,t,a){e==="focusin"?(Es(),ci=t,ui=a,ci.attachEvent("onpropertychange",ho)):e==="focusout"&&Es()}function mo(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Tl(ui)}function po(e,t){if(e==="click")return Tl(t)}function go(e,t){if(e==="input"||e==="change")return Tl(t)}function zl(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:zl;function Nn(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ls.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function Gt(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bo(e,t){var a=Gt(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gt(a)}}function vo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function As(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qt(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=qt(e.document)}return t}function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Yc=ya&&"documentMode"in document&&11>=document.documentMode,di=null,Ns=null,Wi=null,Ts=!1;function yo(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ts||di==null||di!==qt(n)||(n=di,"selectionStart"in n&&Ol(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wi&&Nn(Wi,n)||(Wi=n,n=ic(Ns,"onSelect"),0<n.length&&(t=new si("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=di)))}function Ia(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Tn={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Fi={},xo={};ya&&(xo=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function zn(e){if(Fi[e])return Fi[e];if(!Tn[e])return e;var t=Tn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in xo)return Fi[e]=t[a];return e}var Pa=zn("animationend"),_a=zn("animationiteration"),zs=zn("animationstart"),Uc=zn("transitionrun"),_o=zn("transitionstart"),wo=zn("transitioncancel"),Os=zn("transitionend"),Ms=new Map,Ds="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ds.push("scrollEnd");function ra(e,t){Ms.set(e,t),Je(t,[e])}var So=new WeakMap;function Qt(e,t){if(typeof e=="object"&&e!==null){var a=So.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ds(t)},So.set(e,t),t)}return{value:e,source:t,stack:ds(t)}}var Vt=[],hi=0,Cs=0;function Ml(){for(var e=hi,t=Cs=hi=0;t<e;){var a=Vt[t];Vt[t++]=null;var n=Vt[t];Vt[t++]=null;var i=Vt[t];Vt[t++]=null;var s=Vt[t];if(Vt[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}s!==0&&Rs(a,i,s)}}function Dl(e,t,a,n){Vt[hi++]=e,Vt[hi++]=t,Vt[hi++]=a,Vt[hi++]=n,Cs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function ks(e,t,a,n){return Dl(e,t,a,n),Cl(e)}function Ct(e,t){return Dl(e,null,null,t),Cl(e)}function Rs(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-ct(a),e=s.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),s):null}function Cl(e){if(50<gr)throw gr=0,gu=null,Error(y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function Hc(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,a,n){return new Hc(e,t,a,n)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ca(e,t){var a=e.alternate;return a===null?(a=Zt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jo(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function kl(e,t,a,n,i,s){var o=0;if(n=e,typeof e=="function")Ys(e)&&(o=1);else if(typeof e=="string")o=bh(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case na:return e=Zt(31,a,t,i),e.elementType=na,e.lanes=s,e;case W:return ka(a.children,i,s,t);case P:o=8,i|=24;break;case ne:return e=Zt(12,a,t,i|2),e.elementType=ne,e.lanes=s,e;case Te:return e=Zt(13,a,t,i),e.elementType=Te,e.lanes=s,e;case it:return e=Zt(19,a,t,i),e.elementType=it,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _e:case Ye:o=10;break e;case Se:o=9;break e;case yt:o=11;break e;case Ht:o=14;break e;case xt:o=16,n=null;break e}o=29,a=Error(y(130,e===null?"null":typeof e,"")),n=null}return t=Zt(o,a,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function ka(e,t,a,n){return e=Zt(7,e,n,t),e.lanes=a,e}function pi(e,t,a){return e=Zt(6,e,null,t),e.lanes=a,e}function Us(e,t,a){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var On=[],Mn=0,en=null,gi=0,kt=[],Wt=0,Dn=null,Ra=1,jt="";function Cn(e,t){On[Mn++]=gi,On[Mn++]=en,en=e,gi=t}function Eo(e,t,a){kt[Wt++]=Ra,kt[Wt++]=jt,kt[Wt++]=Dn,Dn=e;var n=Ra;e=jt;var i=32-ct(n)-1;n&=~(1<<i),a+=1;var s=32-ct(t)+i;if(30<s){var o=i-i%5;s=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Ra=1<<32-ct(t)+i|a<<i|n,jt=s+e}else Ra=1<<s|a<<i|n,jt=e}function Hs(e){e.return!==null&&(Cn(e,1),Eo(e,1,0))}function Bs(e){for(;e===en;)en=On[--Mn],On[Mn]=null,gi=On[--Mn],On[Mn]=null;for(;e===Dn;)Dn=kt[--Wt],kt[Wt]=null,jt=kt[--Wt],kt[Wt]=null,Ra=kt[--Wt],kt[Wt]=null}var st=null,Ze=null,Ce=!1,tn=null,wa=!1,an=Error(y(519));function Ya(e){var t=Error(y(418,""));throw oa(Qt(t,e)),an}function Ls(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[pt]=e,t[Tt]=n,a){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(a=0;a<vr.length;a++)Ne(vr[a],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),_l(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),qi(t);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),Gi(t,n.value,n.defaultValue,n.children),qi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Ld(t.textContent,a)?(n.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),n.onScroll!=null&&Ne("scroll",t),n.onScrollEnd!=null&&Ne("scrollend",t),n.onClick!=null&&(t.onclick=lc),t=!0):t=!1,t||Ya(e)}function Ao(e){for(st=e.return;st;)switch(st.tag){case 5:case 13:wa=!1;return;case 27:case 3:wa=!0;return;default:st=st.return}}function Ii(e){if(e!==st)return!1;if(!Ce)return Ao(e),Ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Du(e.type,e.memoizedProps)),a=!a),a&&Ze&&Ya(e),Ao(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ze=La(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ze=null}}else t===27?(t=Ze,Mi(e.type)?(e=Yu,Yu=null,Ze=e):Ze=t):Ze=st?La(e.stateNode.nextSibling):null;return!0}function Pi(){Ze=st=null,Ce=!1}function bi(){var e=tn;return e!==null&&(aa===null?aa=e:aa.push.apply(aa,e),tn=null),e}function oa(e){tn===null?tn=[e]:tn.push(e)}var qs=C(null),kn=null,Ua=null;function nn(e,t,a){q(qs,t._currentValue),t._currentValue=a}function Ha(e){e._currentValue=qs.current,K(qs)}function Xs(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Gs(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var o=i.child;s=s.firstContext;e:for(;s!==null;){var f=s;s=i;for(var m=0;m<t.length;m++)if(f.context===t[m]){s.lanes|=a,f=s.alternate,f!==null&&(f.lanes|=a),Xs(s.return,a,e),n||(o=null);break e}s=f.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=a,s=o.alternate,s!==null&&(s.lanes|=a),Xs(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function el(e,t,a,n){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(y(387));if(o=o.memoizedProps,o!==null){var f=i.type;Dt(i.pendingProps.value,o.value)||(e!==null?e.push(f):e=[f])}}else if(i===_t.current){if(o=i.alternate,o===null)throw Error(y(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(jr):e=[jr])}i=i.return}e!==null&&Gs(t,e,a,n),t.flags|=262144}function tl(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Rn(e){kn=e,Ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ut(e){return Qs(kn,e)}function vi(e,t){return kn===null&&Rn(e),Qs(e,t)}function Qs(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ua===null){if(e===null)throw Error(y(308));Ua=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ua=Ua.next=t;return a}var Yn=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},No=E.unstable_scheduleCallback,Vs=E.unstable_NormalPriority,Ie={$$typeof:Ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function al(){return{controller:new Yn,data:new Map,refCount:0}}function yi(e){e.refCount--,e.refCount===0&&No(Vs,function(){e.controller.abort()})}var Un=null,Zs=0,Ft=0,Kt=null;function Bc(e,t){if(Un===null){var a=Un=[];Zs=0,Ft=Su(),Kt={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Zs++,t.then(To,To),t}function To(){if(--Zs===0&&Un!==null){Kt!==null&&(Kt.status="fulfilled");var e=Un;Un=null,Ft=0,Kt=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Lc(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var zo=N.S;N.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Bc(e,t),zo!==null&&zo(e,t)};var Hn=C(null);function Ks(){var e=Hn.current;return e!==null?e:Ke.pooledCache}function Rl(e,t){t===null?q(Hn,Hn.current):q(Hn,t.pool)}function Oo(){var e=Ks();return e===null?null:{parent:Ie._currentValue,pool:e}}var xi=Error(y(460)),nl=Error(y(474)),Bn=Error(y(542)),$s={then:function(){}};function Mo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ln(){}function u(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ln,ln),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,d(e),e;default:if(typeof t.status=="string")t.then(ln,ln);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(y(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,d(e),e}throw l=t,xi}}var l=null;function r(){if(l===null)throw Error(y(459));var e=l;return l=null,e}function d(e){if(e===xi||e===Bn)throw Error(y(483))}var g=!1;function b(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function j(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function O(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function R(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Le&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Cl(e),Rs(e,null,a),t}return Dl(e,n,t,a),Cl(e)}function Z(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ur(e,a)}}function $(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=o:s=s.next=o,a=a.next}while(a!==null);s===null?i=s=t:s=s.next=t}else i=s=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var X=!1;function pe(){if(X){var e=Kt;if(e!==null)throw e}}function ie(e,t,a,n){X=!1;var i=e.updateQueue;g=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,_=m.next;m.next=null,o===null?s=_:o.next=_,o=m;var T=e.alternate;T!==null&&(T=T.updateQueue,f=T.lastBaseUpdate,f!==o&&(f===null?T.firstBaseUpdate=_:f.next=_,T.lastBaseUpdate=m))}if(s!==null){var D=i.baseState;o=0,T=_=m=null,f=s;do{var w=f.lane&-536870913,S=w!==f.lane;if(S?(De&w)===w:(n&w)===w){w!==0&&w===Ft&&(X=!0),T!==null&&(T=T.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var he=e,re=f;w=t;var Qe=a;switch(re.tag){case 1:if(he=re.payload,typeof he=="function"){D=he.call(Qe,D,w);break e}D=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=re.payload,w=typeof he=="function"?he.call(Qe,D,w):he,w==null)break e;D=Y({},D,w);break e;case 2:g=!0}}w=f.callback,w!==null&&(e.flags|=64,S&&(e.flags|=8192),S=i.callbacks,S===null?i.callbacks=[w]:S.push(w))}else S={lane:w,tag:f.tag,payload:f.payload,callback:f.callback,next:null},T===null?(_=T=S,m=D):T=T.next=S,o|=w;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;S=f,f=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);T===null&&(m=D),i.baseState=m,i.firstBaseUpdate=_,i.lastBaseUpdate=T,s===null&&(i.shared.lanes=0),Ni|=o,e.lanes=o,e.memoizedState=D}}function ge(e,t){if(typeof e!="function")throw Error(y(191,e));e.call(t)}function ce(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ge(a[e],t)}var se=C(null),ke=C(0);function He(e,t){e=Zn,q(ke,e),q(se,t),Zn=e|t.baseLanes}function xe(){q(ke,Zn),q(se,se.current)}function ze(){Zn=ke.current,K(se),K(ke)}var ue=0,Q=null,I=null,fe=null,Me=!1,Xe=!1,et=!1,Rt=0,tt=0,ft=null,It=0;function ye(){throw Error(y(321))}function Pt(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Dt(e[a],t[a]))return!1;return!0}function ea(e,t,a,n,i,s){return ue=s,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?xf:_f,et=!1,s=a(n,i),et=!1,Xe&&(s=at(t,a,n,i)),Ln(e),s}function Ln(e){N.H=Bo;var t=I!==null&&I.next!==null;if(ue=0,fe=I=Q=null,Me=!1,tt=0,ft=null,t)throw Error(y(300));e===null||gt||(e=e.dependencies,e!==null&&tl(e)&&(gt=!0))}function at(e,t,a,n){Q=e;var i=0;do{if(Xe&&(ft=null),tt=0,Xe=!1,25<=i)throw Error(y(301));if(i+=1,fe=I=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}N.H=T0,s=t(a,n)}while(Xe);return s}function Be(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?sn(t):t,e=e.useState()[0],(I!==null?I.memoizedState:null)!==e&&(Q.flags|=1024),t}function dt(){var e=Rt!==0;return Rt=0,e}function Yt(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Sa(e){if(Me){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Me=!1}ue=0,fe=I=Q=null,Xe=!1,tt=Rt=0,ft=null}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?Q.memoizedState=fe=e:fe=fe.next=e,fe}function We(){if(I===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=I.next;var t=fe===null?Q.memoizedState:fe.next;if(t!==null)fe=t,I=e;else{if(e===null)throw Q.alternate===null?Error(y(467)):Error(y(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},fe===null?Q.memoizedState=fe=e:fe=fe.next=e}return fe}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sn(e){var t=tt;return tt+=1,ft===null&&(ft=[]),e=u(ft,e,t),t=Q,(fe===null?t.memoizedState:fe.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?xf:_f),e}function Ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return sn(e);if(e.$$typeof===Ye)return ut(e)}throw Error(y(438,String(e)))}function Js(e){var t=null,a=Q.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=Q.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Yl(),Q.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=dn;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=We();return Bl(t,I,e)}function Bl(e,t,a){var n=e.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=a;var i=e.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}t.baseQueue=i=s,n.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var f=o=null,m=null,_=t,T=!1;do{var D=_.lane&-536870913;if(D!==_.lane?(De&D)===D:(ue&D)===D){var w=_.revertLane;if(w===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),D===Ft&&(T=!0);else if((ue&w)===w){_=_.next,w===Ft&&(T=!0);continue}else D={lane:0,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},m===null?(f=m=D,o=s):m=m.next=D,Q.lanes|=w,Ni|=w;D=_.action,et&&a(s,D),s=_.hasEagerState?_.eagerState:a(s,D)}else w={lane:D,revertLane:_.revertLane,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},m===null?(f=m=w,o=s):m=m.next=w,Q.lanes|=D,Ni|=D;_=_.next}while(_!==null&&_!==t);if(m===null?o=s:m.next=f,!Dt(s,e.memoizedState)&&(gt=!0,T&&(a=Kt,a!==null)))throw a;e.memoizedState=s,e.baseState=o,e.baseQueue=m,n.lastRenderedState=s}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ws(e){var t=We(),a=t.queue;if(a===null)throw Error(y(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,s=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Dt(s,t.memoizedState)||(gt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function Fs(e,t,a){var n=Q,i=We(),s=Ce;if(s){if(a===void 0)throw Error(y(407));a=a()}else a=t();var o=!Dt((I||i).memoizedState,a);o&&(i.memoizedState=a,gt=!0),i=i.queue;var f=Co.bind(null,n,i,e);if(lr(2048,8,f,[e]),i.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Gl(9,Yo(),Do.bind(null,n,i,a,t),null),Ke===null)throw Error(y(349));s||(ue&124)!==0||Is(n,t,a)}return a}function Is(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Q.updateQueue,t===null?(t=Yl(),Q.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Do(e,t,a,n){t.value=a,t.getSnapshot=n,rn(t)&&il(e)}function Co(e,t,a){return a(function(){rn(t)&&il(e)})}function rn(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Dt(e,a)}catch{return!0}}function il(e){var t=Ct(e,2);t!==null&&ma(t,e,2)}function Ll(e){var t=ht();if(typeof e=="function"){var a=e;if(e=a(),et){Qa(!0);try{a()}finally{Qa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function Ps(e,t,a,n){return e.baseState=a,Bl(e,I,typeof n=="function"?n:ca)}function er(e,t,a,n,i){if(Ho(e))throw Error(y(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){s.listeners.push(o)}};N.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,tr(t,s)):(s.next=a.next,t.pending=a.next=s)}}function tr(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var s=N.T,o={};N.T=o;try{var f=a(i,n),m=N.S;m!==null&&m(o,f),ar(e,t,f)}catch(_){ql(e,t,_)}finally{N.T=s}}else try{s=a(i,n),ar(e,t,s)}catch(_){ql(e,t,_)}}function ar(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){nr(e,t,n)},function(n){return ql(e,t,n)}):nr(e,t,a)}function nr(e,t,a){t.status="fulfilled",t.value=a,ko(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,tr(e,a)))}function ql(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,ko(t),t=t.next;while(t!==n)}e.action=null}function ko(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ro(e,t){return t}function Xl(e,t){if(Ce){var a=Ke.formState;if(a!==null){e:{var n=Q;if(Ce){if(Ze){t:{for(var i=Ze,s=wa;i.nodeType!==8;){if(!s){i=null;break t}if(i=La(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Ze=La(i.nextSibling),n=i.data==="F!";break e}}Ya(n)}n=!1}n&&(t=a[0])}}return a=ht(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:t},a.queue=n,a=bf.bind(null,Q,n),n.dispatch=a,n=Ll(!1),s=Vc.bind(null,Q,!1,n.queue),n=ht(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=er.bind(null,Q,i,s,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function ir(e){var t=We();return Pu(t,I,e)}function Pu(e,t,a){if(t=Bl(e,t,Ro)[0],e=Hl(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=sn(t)}catch(o){throw o===xi?Bn:o}else n=t;t=We();var i=t.queue,s=i.dispatch;return a!==t.memoizedState&&(Q.flags|=2048,Gl(9,Yo(),j0.bind(null,i,a),null)),[n,s,e]}function j0(e,t){e.action=t}function ef(e){var t=We(),a=I;if(a!==null)return Pu(t,a,e);We(),t=t.memoizedState,a=We();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Gl(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=Q.updateQueue,t===null&&(t=Yl(),Q.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Yo(){return{destroy:void 0,resource:void 0}}function tf(){return We().memoizedState}function Uo(e,t,a,n){var i=ht();n=n===void 0?null:n,Q.flags|=e,i.memoizedState=Gl(1|t,Yo(),a,n)}function lr(e,t,a,n){var i=We();n=n===void 0?null:n;var s=i.memoizedState.inst;I!==null&&n!==null&&Pt(n,I.memoizedState.deps)?i.memoizedState=Gl(t,s,a,n):(Q.flags|=e,i.memoizedState=Gl(1|t,s,a,n))}function af(e,t){Uo(8390656,8,e,t)}function nf(e,t){lr(2048,8,e,t)}function lf(e,t){return lr(4,2,e,t)}function sf(e,t){return lr(4,4,e,t)}function rf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,a){a=a!=null?a.concat([e]):null,lr(4,4,rf.bind(null,t,e),a)}function qc(){}function cf(e,t){var a=We();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Pt(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function uf(e,t){var a=We();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Pt(t,n[1]))return n[0];if(n=e(),et){Qa(!0);try{e()}finally{Qa(!1)}}return a.memoizedState=[n,t],n}function Xc(e,t,a){return a===void 0||(ue&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=hd(),Q.lanes|=e,Ni|=e,a)}function ff(e,t,a,n){return Dt(a,t)?a:se.current!==null?(e=Xc(e,a,n),Dt(e,t)||(gt=!0),e):(ue&42)===0?(gt=!0,e.memoizedState=a):(e=hd(),Q.lanes|=e,Ni|=e,t)}function df(e,t,a,n,i){var s=G.p;G.p=s!==0&&8>s?s:8;var o=N.T,f={};N.T=f,Vc(e,!1,t,a);try{var m=i(),_=N.S;if(_!==null&&_(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var T=Lc(m,n);sr(e,t,T,ha(e))}else sr(e,t,n,ha(e))}catch(D){sr(e,t,{then:function(){},status:"rejected",reason:D},ha())}finally{G.p=s,N.T=o}}function E0(){}function Gc(e,t,a,n){if(e.tag!==5)throw Error(y(476));var i=hf(e).queue;df(e,i,t,le,a===null?E0:function(){return mf(e),a(n)})}function hf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:le},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mf(e){var t=hf(e).next.queue;sr(e,t,{},ha())}function Qc(){return ut(jr)}function pf(){return We().memoizedState}function gf(){return We().memoizedState}function A0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ha();e=O(a);var n=R(t,e,a);n!==null&&(ma(n,t,a),Z(n,t,a)),t={cache:al()},e.payload=t;return}t=t.return}}function N0(e,t,a){var n=ha();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ho(e)?vf(t,a):(a=ks(e,t,a,n),a!==null&&(ma(a,e,n),yf(a,t,n)))}function bf(e,t,a){var n=ha();sr(e,t,a,n)}function sr(e,t,a,n){var i={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ho(e))vf(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,f=s(o,a);if(i.hasEagerState=!0,i.eagerState=f,Dt(f,o))return Dl(e,t,i,0),Ke===null&&Ml(),!1}catch{}finally{}if(a=ks(e,t,i,n),a!==null)return ma(a,e,n),yf(a,t,n),!0}return!1}function Vc(e,t,a,n){if(n={lane:2,revertLane:Su(),action:n,hasEagerState:!1,eagerState:null,next:null},Ho(e)){if(t)throw Error(y(479))}else t=ks(e,a,n,2),t!==null&&ma(t,e,2)}function Ho(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function vf(e,t){Xe=Me=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function yf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ur(e,a)}}var Bo={readContext:ut,use:Ul,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useLayoutEffect:ye,useInsertionEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useSyncExternalStore:ye,useId:ye,useHostTransitionStatus:ye,useFormState:ye,useActionState:ye,useOptimistic:ye,useMemoCache:ye,useCacheRefresh:ye},xf={readContext:ut,use:Ul,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:af,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Uo(4194308,4,rf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){Uo(4,2,e,t)},useMemo:function(e,t){var a=ht();t=t===void 0?null:t;var n=e();if(et){Qa(!0);try{e()}finally{Qa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ht();if(a!==void 0){var i=a(t);if(et){Qa(!0);try{a(t)}finally{Qa(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=N0.bind(null,Q,e),[n.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:function(e){e=Ll(e);var t=e.queue,a=bf.bind(null,Q,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:qc,useDeferredValue:function(e,t){var a=ht();return Xc(a,e,t)},useTransition:function(){var e=Ll(!1);return e=df.bind(null,Q,e.queue,!0,!1),ht().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=Q,i=ht();if(Ce){if(a===void 0)throw Error(y(407));a=a()}else{if(a=t(),Ke===null)throw Error(y(349));(De&124)!==0||Is(n,t,a)}i.memoizedState=a;var s={value:a,getSnapshot:t};return i.queue=s,af(Co.bind(null,n,s,e),[e]),n.flags|=2048,Gl(9,Yo(),Do.bind(null,n,s,a,t),null),a},useId:function(){var e=ht(),t=Ke.identifierPrefix;if(Ce){var a=jt,n=Ra;a=(n&~(1<<32-ct(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=Rt++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=It++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Qc,useFormState:Xl,useActionState:Xl,useOptimistic:function(e){var t=ht();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Vc.bind(null,Q,!0,a),a.dispatch=t,[e,t]},useMemoCache:Js,useCacheRefresh:function(){return ht().memoizedState=A0.bind(null,Q)}},_f={readContext:ut,use:Ul,useCallback:cf,useContext:ut,useEffect:nf,useImperativeHandle:of,useInsertionEffect:lf,useLayoutEffect:sf,useMemo:uf,useReducer:Hl,useRef:tf,useState:function(){return Hl(ca)},useDebugValue:qc,useDeferredValue:function(e,t){var a=We();return ff(a,I.memoizedState,e,t)},useTransition:function(){var e=Hl(ca)[0],t=We().memoizedState;return[typeof e=="boolean"?e:sn(e),t]},useSyncExternalStore:Fs,useId:pf,useHostTransitionStatus:Qc,useFormState:ir,useActionState:ir,useOptimistic:function(e,t){var a=We();return Ps(a,I,e,t)},useMemoCache:Js,useCacheRefresh:gf},T0={readContext:ut,use:Ul,useCallback:cf,useContext:ut,useEffect:nf,useImperativeHandle:of,useInsertionEffect:lf,useLayoutEffect:sf,useMemo:uf,useReducer:Ws,useRef:tf,useState:function(){return Ws(ca)},useDebugValue:qc,useDeferredValue:function(e,t){var a=We();return I===null?Xc(a,e,t):ff(a,I.memoizedState,e,t)},useTransition:function(){var e=Ws(ca)[0],t=We().memoizedState;return[typeof e=="boolean"?e:sn(e),t]},useSyncExternalStore:Fs,useId:pf,useHostTransitionStatus:Qc,useFormState:ef,useActionState:ef,useOptimistic:function(e,t){var a=We();return I!==null?Ps(a,I,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Js,useCacheRefresh:gf},Ql=null,rr=0;function Lo(e){var t=rr;return rr+=1,Ql===null&&(Ql=[]),u(Ql,e,t)}function or(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qo(e,t){throw t.$$typeof===me?Error(y(525)):(e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wf(e){var t=e._init;return t(e._payload)}function Sf(e){function t(v,p){if(e){var x=v.deletions;x===null?(v.deletions=[p],v.flags|=16):x.push(p)}}function a(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function n(v){for(var p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function i(v,p){return v=Ca(v,p),v.index=0,v.sibling=null,v}function s(v,p,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<p?(v.flags|=67108866,p):x):(v.flags|=67108866,p)):(v.flags|=1048576,p)}function o(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function f(v,p,x,M){return p===null||p.tag!==6?(p=pi(x,v.mode,M),p.return=v,p):(p=i(p,x),p.return=v,p)}function m(v,p,x,M){var J=x.type;return J===W?T(v,p,x.props.children,M,x.key):p!==null&&(p.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===xt&&wf(J)===p.type)?(p=i(p,x.props),or(p,x),p.return=v,p):(p=kl(x.type,x.key,x.props,null,v.mode,M),or(p,x),p.return=v,p)}function _(v,p,x,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Us(x,v.mode,M),p.return=v,p):(p=i(p,x.children||[]),p.return=v,p)}function T(v,p,x,M,J){return p===null||p.tag!==7?(p=ka(x,v.mode,M,J),p.return=v,p):(p=i(p,x),p.return=v,p)}function D(v,p,x){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=pi(""+p,v.mode,x),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case z:return x=kl(p.type,p.key,p.props,null,v.mode,x),or(x,p),x.return=v,x;case L:return p=Us(p,v.mode,x),p.return=v,p;case xt:var M=p._init;return p=M(p._payload),D(v,p,x)}if(ot(p)||rt(p))return p=ka(p,v.mode,x,null),p.return=v,p;if(typeof p.then=="function")return D(v,Lo(p),x);if(p.$$typeof===Ye)return D(v,vi(v,p),x);qo(v,p)}return null}function w(v,p,x,M){var J=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return J!==null?null:f(v,p,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case z:return x.key===J?m(v,p,x,M):null;case L:return x.key===J?_(v,p,x,M):null;case xt:return J=x._init,x=J(x._payload),w(v,p,x,M)}if(ot(x)||rt(x))return J!==null?null:T(v,p,x,M,null);if(typeof x.then=="function")return w(v,p,Lo(x),M);if(x.$$typeof===Ye)return w(v,p,vi(v,x),M);qo(v,x)}return null}function S(v,p,x,M,J){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return v=v.get(x)||null,f(p,v,""+M,J);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case z:return v=v.get(M.key===null?x:M.key)||null,m(p,v,M,J);case L:return v=v.get(M.key===null?x:M.key)||null,_(p,v,M,J);case xt:var Ee=M._init;return M=Ee(M._payload),S(v,p,x,M,J)}if(ot(M)||rt(M))return v=v.get(x)||null,T(p,v,M,J,null);if(typeof M.then=="function")return S(v,p,x,Lo(M),J);if(M.$$typeof===Ye)return S(v,p,x,vi(p,M),J);qo(p,M)}return null}function he(v,p,x,M){for(var J=null,Ee=null,ee=p,oe=p=0,vt=null;ee!==null&&oe<x.length;oe++){ee.index>oe?(vt=ee,ee=null):vt=ee.sibling;var Re=w(v,ee,x[oe],M);if(Re===null){ee===null&&(ee=vt);break}e&&ee&&Re.alternate===null&&t(v,ee),p=s(Re,p,oe),Ee===null?J=Re:Ee.sibling=Re,Ee=Re,ee=vt}if(oe===x.length)return a(v,ee),Ce&&Cn(v,oe),J;if(ee===null){for(;oe<x.length;oe++)ee=D(v,x[oe],M),ee!==null&&(p=s(ee,p,oe),Ee===null?J=ee:Ee.sibling=ee,Ee=ee);return Ce&&Cn(v,oe),J}for(ee=n(ee);oe<x.length;oe++)vt=S(ee,v,oe,x[oe],M),vt!==null&&(e&&vt.alternate!==null&&ee.delete(vt.key===null?oe:vt.key),p=s(vt,p,oe),Ee===null?J=vt:Ee.sibling=vt,Ee=vt);return e&&ee.forEach(function(Yi){return t(v,Yi)}),Ce&&Cn(v,oe),J}function re(v,p,x,M){if(x==null)throw Error(y(151));for(var J=null,Ee=null,ee=p,oe=p=0,vt=null,Re=x.next();ee!==null&&!Re.done;oe++,Re=x.next()){ee.index>oe?(vt=ee,ee=null):vt=ee.sibling;var Yi=w(v,ee,Re.value,M);if(Yi===null){ee===null&&(ee=vt);break}e&&ee&&Yi.alternate===null&&t(v,ee),p=s(Yi,p,oe),Ee===null?J=Yi:Ee.sibling=Yi,Ee=Yi,ee=vt}if(Re.done)return a(v,ee),Ce&&Cn(v,oe),J;if(ee===null){for(;!Re.done;oe++,Re=x.next())Re=D(v,Re.value,M),Re!==null&&(p=s(Re,p,oe),Ee===null?J=Re:Ee.sibling=Re,Ee=Re);return Ce&&Cn(v,oe),J}for(ee=n(ee);!Re.done;oe++,Re=x.next())Re=S(ee,v,oe,Re.value,M),Re!==null&&(e&&Re.alternate!==null&&ee.delete(Re.key===null?oe:Re.key),p=s(Re,p,oe),Ee===null?J=Re:Ee.sibling=Re,Ee=Re);return e&&ee.forEach(function(zh){return t(v,zh)}),Ce&&Cn(v,oe),J}function Qe(v,p,x,M){if(typeof x=="object"&&x!==null&&x.type===W&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case z:e:{for(var J=x.key;p!==null;){if(p.key===J){if(J=x.type,J===W){if(p.tag===7){a(v,p.sibling),M=i(p,x.props.children),M.return=v,v=M;break e}}else if(p.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===xt&&wf(J)===p.type){a(v,p.sibling),M=i(p,x.props),or(M,x),M.return=v,v=M;break e}a(v,p);break}else t(v,p);p=p.sibling}x.type===W?(M=ka(x.props.children,v.mode,M,x.key),M.return=v,v=M):(M=kl(x.type,x.key,x.props,null,v.mode,M),or(M,x),M.return=v,v=M)}return o(v);case L:e:{for(J=x.key;p!==null;){if(p.key===J)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){a(v,p.sibling),M=i(p,x.children||[]),M.return=v,v=M;break e}else{a(v,p);break}else t(v,p);p=p.sibling}M=Us(x,v.mode,M),M.return=v,v=M}return o(v);case xt:return J=x._init,x=J(x._payload),Qe(v,p,x,M)}if(ot(x))return he(v,p,x,M);if(rt(x)){if(J=rt(x),typeof J!="function")throw Error(y(150));return x=J.call(x),re(v,p,x,M)}if(typeof x.then=="function")return Qe(v,p,Lo(x),M);if(x.$$typeof===Ye)return Qe(v,p,vi(v,x),M);qo(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,p!==null&&p.tag===6?(a(v,p.sibling),M=i(p,x),M.return=v,v=M):(a(v,p),M=pi(x,v.mode,M),M.return=v,v=M),o(v)):a(v,p)}return function(v,p,x,M){try{rr=0;var J=Qe(v,p,x,M);return Ql=null,J}catch(ee){if(ee===xi||ee===Bn)throw ee;var Ee=Zt(29,ee,null,v.mode);return Ee.lanes=M,Ee.return=v,Ee}finally{}}}var Vl=Sf(!0),jf=Sf(!1),ja=C(null),on=null;function _i(e){var t=e.alternate;q(mt,mt.current&1),q(ja,e),on===null&&(t===null||se.current!==null||t.memoizedState!==null)&&(on=e)}function Ef(e){if(e.tag===22){if(q(mt,mt.current),q(ja,e),on===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(on=e)}}else wi()}function wi(){q(mt,mt.current),q(ja,ja.current)}function qn(e){K(ja),on===e&&(on=null),K(mt)}var mt=C(0);function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ru(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Zc(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:Y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Kc={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ha(),i=O(n);i.payload=t,a!=null&&(i.callback=a),t=R(e,i,n),t!==null&&(ma(t,e,n),Z(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ha(),i=O(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=R(e,i,n),t!==null&&(ma(t,e,n),Z(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ha(),n=O(a);n.tag=2,t!=null&&(n.callback=t),t=R(e,n,a),t!==null&&(ma(t,e,a),Z(t,e,a))}};function Af(e,t,a,n,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,o):t.prototype&&t.prototype.isPureReactComponent?!Nn(a,n)||!Nn(i,s):!0}function Nf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Kc.enqueueReplaceState(t,t.state,null)}function ll(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=Y({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}var Go=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Tf(e){Go(e)}function zf(e){console.error(e)}function Of(e){Go(e)}function Qo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Mf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function $c(e,t,a){return a=O(a),a.tag=3,a.payload={element:null},a.callback=function(){Qo(e,t)},a}function Df(e){return e=O(e),e.tag=3,e}function Cf(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;e.payload=function(){return i(s)},e.callback=function(){Mf(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Mf(t,a,n),typeof i!="function"&&(Ti===null?Ti=new Set([this]):Ti.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})})}function z0(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&el(t,a,i,!0),a=ja.current,a!==null){switch(a.tag){case 13:return on===null?vu():a.alternate===null&&Pe===0&&(Pe=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===$s?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),xu(e,n,i)),!1;case 22:return a.flags|=65536,n===$s?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),xu(e,n,i)),!1}throw Error(y(435,a.tag))}return xu(e,n,i),vu(),!1}if(Ce)return t=ja.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==an&&(e=Error(y(422),{cause:n}),oa(Qt(e,a)))):(n!==an&&(t=Error(y(423),{cause:n}),oa(Qt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Qt(n,a),i=$c(e.stateNode,n,i),$(e,i),Pe!==4&&(Pe=2)),!1;var s=Error(y(520),{cause:n});if(s=Qt(s,a),pr===null?pr=[s]:pr.push(s),Pe!==4&&(Pe=2),t===null)return!0;n=Qt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=$c(a.stateNode,n,e),$(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Ti===null||!Ti.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Df(i),Cf(i,e,a,n),$(a,i),!1}a=a.return}while(a!==null);return!1}var kf=Error(y(461)),gt=!1;function Et(e,t,a,n){t.child=e===null?jf(t,null,a,n):Vl(t,e.child,a,n)}function Rf(e,t,a,n,i){a=a.render;var s=t.ref;if("ref"in n){var o={};for(var f in n)f!=="ref"&&(o[f]=n[f])}else o=n;return Rn(t),n=ea(e,t,a,o,s,i),f=dt(),e!==null&&!gt?(Yt(e,t,i),Xn(e,t,i)):(Ce&&f&&Hs(t),t.flags|=1,Et(e,t,n,i),t.child)}function Yf(e,t,a,n,i){if(e===null){var s=a.type;return typeof s=="function"&&!Ys(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Uf(e,t,s,n,i)):(e=kl(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!au(e,i)){var o=s.memoizedProps;if(a=a.compare,a=a!==null?a:Nn,a(o,n)&&e.ref===t.ref)return Xn(e,t,i)}return t.flags|=1,e=Ca(s,n),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,a,n,i){if(e!==null){var s=e.memoizedProps;if(Nn(s,n)&&e.ref===t.ref)if(gt=!1,t.pendingProps=n=s,au(e,i))(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,Xn(e,t,i)}return Jc(e,t,a,n,i)}function Hf(e,t,a){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=s!==null?s.baseLanes|a:a,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;t.childLanes=s&~n}else t.childLanes=0,t.child=null;return Bf(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(t,s!==null?s.cachePool:null),s!==null?He(t,s):xe(),Ef(t);else return t.lanes=t.childLanes=536870912,Bf(e,t,s!==null?s.baseLanes|a:a,a)}else s!==null?(Rl(t,s.cachePool),He(t,s),wi(),t.memoizedState=null):(e!==null&&Rl(t,null),xe(),wi());return Et(e,t,i,a),t.child}function Bf(e,t,a,n){var i=Ks();return i=i===null?null:{parent:Ie._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&Rl(t,null),xe(),Ef(t),e!==null&&el(e,t,n,!0),null}function Vo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(y(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Jc(e,t,a,n,i){return Rn(t),a=ea(e,t,a,n,void 0,i),n=dt(),e!==null&&!gt?(Yt(e,t,i),Xn(e,t,i)):(Ce&&n&&Hs(t),t.flags|=1,Et(e,t,a,i),t.child)}function Lf(e,t,a,n,i,s){return Rn(t),t.updateQueue=null,a=at(t,n,a,i),Ln(e),n=dt(),e!==null&&!gt?(Yt(e,t,s),Xn(e,t,s)):(Ce&&n&&Hs(t),t.flags|=1,Et(e,t,a,s),t.child)}function qf(e,t,a,n,i){if(Rn(t),t.stateNode===null){var s=mi,o=a.contextType;typeof o=="object"&&o!==null&&(s=ut(o)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Kc,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},b(t),o=a.contextType,s.context=typeof o=="object"&&o!==null?ut(o):mi,s.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Zc(t,a,o,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(o=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),o!==s.state&&Kc.enqueueReplaceState(s,s.state,null),ie(t,n,s,i),pe(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var f=t.memoizedProps,m=ll(a,f);s.props=m;var _=s.context,T=a.contextType;o=mi,typeof T=="object"&&T!==null&&(o=ut(T));var D=a.getDerivedStateFromProps;T=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,T||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(f||_!==o)&&Nf(t,s,n,o),g=!1;var w=t.memoizedState;s.state=w,ie(t,n,s,i),pe(),_=t.memoizedState,f||w!==_||g?(typeof D=="function"&&(Zc(t,a,D,n),_=t.memoizedState),(m=g||Af(t,a,m,n,w,_,o))?(T||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=_),s.props=n,s.state=_,s.context=o,n=m):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,j(e,t),o=t.memoizedProps,T=ll(a,o),s.props=T,D=t.pendingProps,w=s.context,_=a.contextType,m=mi,typeof _=="object"&&_!==null&&(m=ut(_)),f=a.getDerivedStateFromProps,(_=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==D||w!==m)&&Nf(t,s,n,m),g=!1,w=t.memoizedState,s.state=w,ie(t,n,s,i),pe();var S=t.memoizedState;o!==D||w!==S||g||e!==null&&e.dependencies!==null&&tl(e.dependencies)?(typeof f=="function"&&(Zc(t,a,f,n),S=t.memoizedState),(T=g||Af(t,a,T,n,w,S,m)||e!==null&&e.dependencies!==null&&tl(e.dependencies))?(_||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,S,m),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,S,m)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=S),s.props=n,s.state=S,s.context=m,n=T):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Vo(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Vl(t,e.child,null,i),t.child=Vl(t,null,a,i)):Et(e,t,a,i),t.memoizedState=s.state,e=t.child):e=Xn(e,t,i),e}function Xf(e,t,a,n){return Pi(),t.flags|=256,Et(e,t,a,n),t.child}var Wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fc(e){return{baseLanes:e,cachePool:Oo()}}function Ic(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ea),e}function Gf(e,t,a){var n=t.pendingProps,i=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(mt.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(i?_i(t):wi(),Ce){var f=Ze,m;if(m=f){e:{for(m=f,f=wa;m.nodeType!==8;){if(!f){f=null;break e}if(m=La(m.nextSibling),m===null){f=null;break e}}f=m}f!==null?(t.memoizedState={dehydrated:f,treeContext:Dn!==null?{id:Ra,overflow:jt}:null,retryLane:536870912,hydrationErrors:null},m=Zt(18,null,null,0),m.stateNode=f,m.return=t,t.child=m,st=t,Ze=null,m=!0):m=!1}m||Ya(t)}if(f=t.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Ru(f)?t.lanes=32:t.lanes=536870912,null;qn(t)}return f=n.children,n=n.fallback,i?(wi(),i=t.mode,f=Zo({mode:"hidden",children:f},i),n=ka(n,i,a,null),f.return=t,n.return=t,f.sibling=n,t.child=f,i=t.child,i.memoizedState=Fc(a),i.childLanes=Ic(e,o,a),t.memoizedState=Wc,n):(_i(t),Pc(t,f))}if(m=e.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(s)t.flags&256?(_i(t),t.flags&=-257,t=eu(e,t,a)):t.memoizedState!==null?(wi(),t.child=e.child,t.flags|=128,t=null):(wi(),i=n.fallback,f=t.mode,n=Zo({mode:"visible",children:n.children},f),i=ka(i,f,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,Vl(t,e.child,null,a),n=t.child,n.memoizedState=Fc(a),n.childLanes=Ic(e,o,a),t.memoizedState=Wc,t=i);else if(_i(t),Ru(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var _=o.dgst;o=_,n=Error(y(419)),n.stack="",n.digest=o,oa({value:n,source:null,stack:null}),t=eu(e,t,a)}else if(gt||el(e,t,a,!1),o=(a&e.childLanes)!==0,gt||o){if(o=Ke,o!==null&&(n=a&-a,n=(n&42)!==0?1:rs(n),n=(n&(o.suspendedLanes|a))!==0?0:n,n!==0&&n!==m.retryLane))throw m.retryLane=n,Ct(e,n),ma(o,e,n),kf;f.data==="$?"||vu(),t=eu(e,t,a)}else f.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,Ze=La(f.nextSibling),st=t,Ce=!0,tn=null,wa=!1,e!==null&&(kt[Wt++]=Ra,kt[Wt++]=jt,kt[Wt++]=Dn,Ra=e.id,jt=e.overflow,Dn=t),t=Pc(t,n.children),t.flags|=4096);return t}return i?(wi(),i=n.fallback,f=t.mode,m=e.child,_=m.sibling,n=Ca(m,{mode:"hidden",children:n.children}),n.subtreeFlags=m.subtreeFlags&65011712,_!==null?i=Ca(_,i):(i=ka(i,f,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,f=e.child.memoizedState,f===null?f=Fc(a):(m=f.cachePool,m!==null?(_=Ie._currentValue,m=m.parent!==_?{parent:_,pool:_}:m):m=Oo(),f={baseLanes:f.baseLanes|a,cachePool:m}),i.memoizedState=f,i.childLanes=Ic(e,o,a),t.memoizedState=Wc,n):(_i(t),a=e.child,e=a.sibling,a=Ca(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Pc(e,t){return t=Zo({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zo(e,t){return e=Zt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function eu(e,t,a){return Vl(t,e.child,null,a),e=Pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Xs(e.return,t,a)}function tu(e,t,a,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i)}function Vf(e,t,a){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Et(e,t,n.children,a),n=mt.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qf(e,a,t);else if(e.tag===19)Qf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(q(mt,n),i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Xo(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),tu(t,!1,i,a,s);break;case"backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}tu(t,!0,a,null,s);break;case"together":tu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ni|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(el(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,a=Ca(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ca(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function au(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&tl(e)))}function O0(e,t,a){switch(t.tag){case 3:B(t,t.stateNode.containerInfo),nn(t,Ie,e.memoizedState.cache),Pi();break;case 27:case 5:cl(t);break;case 4:B(t,t.stateNode.containerInfo);break;case 10:nn(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(_i(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Gf(e,t,a):(_i(t),e=Xn(e,t,a),e!==null?e.sibling:null);_i(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(el(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Vf(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(mt,mt.current),n)break;return null;case 22:case 23:return t.lanes=0,Hf(e,t,a);case 24:nn(t,Ie,e.memoizedState.cache)}return Xn(e,t,a)}function Zf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)gt=!0;else{if(!au(e,a)&&(t.flags&128)===0)return gt=!1,O0(e,t,a);gt=(e.flags&131072)!==0}else gt=!1,Ce&&(t.flags&1048576)!==0&&Eo(t,gi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,i=n._init;if(n=i(n._payload),t.type=n,typeof n=="function")Ys(n)?(e=ll(n,e),t.tag=1,t=qf(null,t,n,e,a)):(t.tag=0,t=Jc(null,t,n,e,a));else{if(n!=null){if(i=n.$$typeof,i===yt){t.tag=11,t=Rf(null,t,n,e,a);break e}else if(i===Ht){t.tag=14,t=Yf(null,t,n,e,a);break e}}throw t=Xa(n)||n,Error(y(306,t,""))}}return t;case 0:return Jc(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=ll(n,t.pendingProps),qf(e,t,n,i,a);case 3:e:{if(B(t,t.stateNode.containerInfo),e===null)throw Error(y(387));n=t.pendingProps;var s=t.memoizedState;i=s.element,j(e,t),ie(t,n,null,a);var o=t.memoizedState;if(n=o.cache,nn(t,Ie,n),n!==s.cache&&Gs(t,[Ie],a,!0),pe(),n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=Xf(e,t,n,a);break e}else if(n!==i){i=Qt(Error(y(424)),t),oa(i),t=Xf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=La(e.firstChild),st=t,Ce=!0,tn=null,wa=!0,a=jf(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Pi(),n===i){t=Xn(e,t,a);break e}Et(e,t,n,a)}t=t.child}return t;case 26:return Vo(e,t),e===null?(a=Wd(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ce||(a=t.type,e=t.pendingProps,n=sc(ae.current).createElement(a),n[pt]=t,n[Tt]=e,Nt(n,a,e),Oe(n),t.stateNode=n):t.memoizedState=Wd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return cl(t),e===null&&Ce&&(n=t.stateNode=Kd(t.type,t.pendingProps,ae.current),st=t,wa=!0,i=Ze,Mi(t.type)?(Yu=i,Ze=La(n.firstChild)):Ze=i),Et(e,t,t.pendingProps.children,a),Vo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((i=n=Ze)&&(n=ih(n,t.type,t.pendingProps,wa),n!==null?(t.stateNode=n,st=t,Ze=La(n.firstChild),wa=!1,i=!0):i=!1),i||Ya(t)),cl(t),i=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,n=s.children,Du(i,s)?n=null:o!==null&&Du(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=ea(e,t,Be,null,null,a),jr._currentValue=i),Vo(e,t),Et(e,t,n,a),t.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=lh(a,t.pendingProps,wa),a!==null?(t.stateNode=a,st=t,Ze=null,e=!0):e=!1),e||Ya(t)),null;case 13:return Gf(e,t,a);case 4:return B(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vl(t,null,n,a):Et(e,t,n,a),t.child;case 11:return Rf(e,t,t.type,t.pendingProps,a);case 7:return Et(e,t,t.pendingProps,a),t.child;case 8:return Et(e,t,t.pendingProps.children,a),t.child;case 12:return Et(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,nn(t,t.type,n.value),Et(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Rn(t),i=ut(i),n=n(i),t.flags|=1,Et(e,t,n,a),t.child;case 14:return Yf(e,t,t.type,t.pendingProps,a);case 15:return Uf(e,t,t.type,t.pendingProps,a);case 19:return Vf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=Zo(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ca(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Hf(e,t,a);case 24:return Rn(t),n=ut(Ie),e===null?(i=Ks(),i===null&&(i=Ke,s=al(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),t.memoizedState={parent:n,cache:i},b(t),nn(t,Ie,i)):((e.lanes&a)!==0&&(j(e,t),ie(t,null,null,a),pe()),i=e.memoizedState,s=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),nn(t,Ie,n)):(n=s.cache,nn(t,Ie,n),n!==i.cache&&Gs(t,[Ie],a,!0))),Et(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(y(156,t.tag))}function Gn(e){e.flags|=4}function Kf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!t0(t)){if(t=ja.current,t!==null&&((De&4194048)===De?on!==null:(De&62914560)!==De&&(De&536870912)===0||t!==on))throw l=$s,nl;e.flags|=8192}}function Ko(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Rr():536870912,e.lanes|=t,Jl|=t)}function cr(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function M0(e,t,a){var n=t.pendingProps;switch(Bs(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Fe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ha(Ie),ia(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?Gn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bi())),Fe(t),null;case 26:return a=t.memoizedState,e===null?(Gn(t),a!==null?(Fe(t),Kf(t,a)):(Fe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Gn(t),Fe(t),Kf(t,a)):(Fe(t),t.flags&=-16777217):(e.memoizedProps!==n&&Gn(t),Fe(t),t.flags&=-16777217),null;case 27:ul(t),a=ae.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gn(t);else{if(!n){if(t.stateNode===null)throw Error(y(166));return Fe(t),null}e=F.current,Ii(t)?Ls(t):(e=Kd(i,n,a),t.stateNode=e,Gn(t))}return Fe(t),null;case 5:if(ul(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gn(t);else{if(!n){if(t.stateNode===null)throw Error(y(166));return Fe(t),null}if(e=F.current,Ii(t))Ls(t);else{switch(i=sc(ae.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?i.createElement("select",{is:n.is}):i.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?i.createElement(a,{is:n.is}):i.createElement(a)}}e[pt]=t,e[Tt]=n;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(Nt(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Gn(t)}}return Fe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Gn(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(y(166));if(e=ae.current,Ii(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=st,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[pt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Ld(e.nodeValue,a)),e||Ya(t)}else e=sc(e).createTextNode(n),e[pt]=t,t.stateNode=e}return Fe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Ii(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[pt]=t}else Pi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Fe(t),i=!1}else i=bi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(qn(t),t):(qn(t),null)}if(qn(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool);var s=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ko(t,t.updateQueue),Fe(t),null;case 4:return ia(),e===null&&Nu(t.stateNode.containerInfo),Fe(t),null;case 10:return Ha(t.type),Fe(t),null;case 19:if(K(mt),i=t.memoizedState,i===null)return Fe(t),null;if(n=(t.flags&128)!==0,s=i.rendering,s===null)if(n)cr(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Xo(e),s!==null){for(t.flags|=128,cr(i,!1),e=s.updateQueue,t.updateQueue=e,Ko(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)jo(a,e),a=a.sibling;return q(mt,mt.current&1|2),t.child}e=e.sibling}i.tail!==null&&pa()>Wo&&(t.flags|=128,n=!0,cr(i,!1),t.lanes=4194304)}else{if(!n)if(e=Xo(s),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Ko(t,e),cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!Ce)return Fe(t),null}else 2*pa()-i.renderingStartTime>Wo&&a!==536870912&&(t.flags|=128,n=!0,cr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pa(),t.sibling=null,e=mt.current,q(mt,n?e&1|2:e&1),t):(Fe(t),null);case 22:case 23:return qn(t),ze(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),a=t.updateQueue,a!==null&&Ko(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&K(Hn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ha(Ie),Fe(t),null;case 25:return null;case 30:return null}throw Error(y(156,t.tag))}function D0(e,t){switch(Bs(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ha(Ie),ia(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ul(t),null;case 13:if(qn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Pi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(mt),null;case 4:return ia(),null;case 10:return Ha(t.type),null;case 22:case 23:return qn(t),ze(),e!==null&&K(Hn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ha(Ie),null;case 25:return null;default:return null}}function $f(e,t){switch(Bs(t),t.tag){case 3:Ha(Ie),ia();break;case 26:case 27:case 5:ul(t);break;case 4:ia();break;case 13:qn(t);break;case 19:K(mt);break;case 10:Ha(t.type);break;case 22:case 23:qn(t),ze(),e!==null&&K(Hn);break;case 24:Ha(Ie)}}function ur(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var s=a.create,o=a.inst;n=s(),o.destroy=n}a=a.next}while(a!==i)}}catch(f){Ve(t,t.return,f)}}function Si(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){var o=n.inst,f=o.destroy;if(f!==void 0){o.destroy=void 0,i=t;var m=a,_=f;try{_()}catch(T){Ve(i,m,T)}}}n=n.next}while(n!==s)}}catch(T){Ve(t,t.return,T)}}function Jf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{ce(t,a)}catch(n){Ve(e,e.return,n)}}}function Wf(e,t,a){a.props=ll(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ve(e,t,n)}}function fr(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){Ve(e,t,i)}}function cn(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Ve(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Ve(e,t,i)}else a.current=null}function Ff(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Ve(e,e.return,i)}}function nu(e,t,a){try{var n=e.stateNode;P0(n,e.type,a,t),n[Tt]=t}catch(i){Ve(e,e.return,i)}}function If(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mi(e.type)||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||If(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=lc));else if(n!==4&&(n===27&&Mi(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(lu(e,t,a),e=e.sibling;e!==null;)lu(e,t,a),e=e.sibling}function $o(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Mi(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($o(e,t,a),e=e.sibling;e!==null;)$o(e,t,a),e=e.sibling}function Pf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Nt(t,n,a),t[pt]=e,t[Tt]=a}catch(s){Ve(e,e.return,s)}}var Qn=!1,nt=!1,su=!1,ed=typeof WeakSet=="function"?WeakSet:Set,bt=null;function C0(e,t){if(e=e.containerInfo,Ou=dc,e=As(e),Ol(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var o=0,f=-1,m=-1,_=0,T=0,D=e,w=null;t:for(;;){for(var S;D!==a||i!==0&&D.nodeType!==3||(f=o+i),D!==s||n!==0&&D.nodeType!==3||(m=o+n),D.nodeType===3&&(o+=D.nodeValue.length),(S=D.firstChild)!==null;)w=D,D=S;for(;;){if(D===e)break t;if(w===a&&++_===i&&(f=o),w===s&&++T===n&&(m=o),(S=D.nextSibling)!==null)break;D=w,w=D.parentNode}D=S}a=f===-1||m===-1?null:{start:f,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mu={focusedElem:e,selectionRange:a},dc=!1,bt=t;bt!==null;)if(t=bt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,bt=e;else for(;bt!==null;){switch(t=bt,s=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var he=ll(a.type,i,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(he,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(re){Ve(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ku(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ku(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(y(163))}if(e=t.sibling,e!==null){e.return=t.return,bt=e;break}bt=t.return}}function td(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),n&4&&ur(5,a);break;case 1:if(ji(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){Ve(a,a.return,o)}else{var i=ll(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){Ve(a,a.return,o)}}n&64&&Jf(a),n&512&&fr(a,a.return);break;case 3:if(ji(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{ce(e,t)}catch(o){Ve(a,a.return,o)}}break;case 27:t===null&&n&4&&Pf(a);case 26:case 5:ji(e,a),t===null&&n&4&&Ff(a),n&512&&fr(a,a.return);break;case 12:ji(e,a);break;case 13:ji(e,a),n&4&&id(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=X0.bind(null,a),sh(e,a))));break;case 22:if(n=a.memoizedState!==null||Qn,!n){t=t!==null&&t.memoizedState!==null||nt,i=Qn;var s=nt;Qn=n,(nt=t)&&!s?Ei(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),Qn=i,nt=s}break;case 30:break;default:ji(e,a)}}function ad(e){var t=e.alternate;t!==null&&(e.alternate=null,ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,ta=!1;function Vn(e,t,a){for(a=a.child;a!==null;)nd(e,t,a),a=a.sibling}function nd(e,t,a){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Jn,a)}catch{}switch(a.tag){case 26:nt||cn(a,t),Vn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nt||cn(a,t);var n=$e,i=ta;Mi(a.type)&&($e=a.stateNode,ta=!1),Vn(e,t,a),xr(a.stateNode),$e=n,ta=i;break;case 5:nt||cn(a,t);case 6:if(n=$e,i=ta,$e=null,Vn(e,t,a),$e=n,ta=i,$e!==null)if(ta)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(s){Ve(a,t,s)}else try{$e.removeChild(a.stateNode)}catch(s){Ve(a,t,s)}break;case 18:$e!==null&&(ta?(e=$e,Vd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tr(e)):Vd($e,a.stateNode));break;case 4:n=$e,i=ta,$e=a.stateNode.containerInfo,ta=!0,Vn(e,t,a),$e=n,ta=i;break;case 0:case 11:case 14:case 15:nt||Si(2,a,t),nt||Si(4,a,t),Vn(e,t,a);break;case 1:nt||(cn(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Wf(a,t,n)),Vn(e,t,a);break;case 21:Vn(e,t,a);break;case 22:nt=(n=nt)||a.memoizedState!==null,Vn(e,t,a),nt=n;break;default:Vn(e,t,a)}}function id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(a){Ve(t,t.return,a)}}function k0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ed),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ed),t;default:throw Error(y(435,e.tag))}}function ru(e,t){var a=k0(e);t.forEach(function(n){var i=G0.bind(null,e,n);a.has(n)||(a.add(n),n.then(i,i))})}function ua(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=e,o=t,f=o;e:for(;f!==null;){switch(f.tag){case 27:if(Mi(f.type)){$e=f.stateNode,ta=!1;break e}break;case 5:$e=f.stateNode,ta=!1;break e;case 3:case 4:$e=f.stateNode.containerInfo,ta=!0;break e}f=f.return}if($e===null)throw Error(y(160));nd(s,o,i),$e=null,ta=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}var Ba=null;function ld(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ua(t,e),fa(e),n&4&&(Si(3,e,e.return),ur(3,e),Si(5,e,e.return));break;case 1:ua(t,e),fa(e),n&512&&(nt||a===null||cn(a,a.return)),n&64&&Qn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=Ba;if(ua(t,e),fa(e),n&512&&(nt||a===null||cn(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Za]||s[pt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),Nt(s,n,a),s[pt]=e,Oe(s),n=s;break e;case"link":var o=Pd("link","href",i).get(n+(a.href||""));if(o){for(var f=0;f<o.length;f++)if(s=o[f],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(f,1);break t}}s=i.createElement(n),Nt(s,n,a),i.head.appendChild(s);break;case"meta":if(o=Pd("meta","content",i).get(n+(a.content||""))){for(f=0;f<o.length;f++)if(s=o[f],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(f,1);break t}}s=i.createElement(n),Nt(s,n,a),i.head.appendChild(s);break;default:throw Error(y(468,n))}s[pt]=e,Oe(s),n=s}e.stateNode=n}else e0(i,e.type,e.stateNode);else e.stateNode=Id(i,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?e0(i,e.type,e.stateNode):Id(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&nu(e,e.memoizedProps,a.memoizedProps)}break;case 27:ua(t,e),fa(e),n&512&&(nt||a===null||cn(a,a.return)),a!==null&&n&4&&nu(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ua(t,e),fa(e),n&512&&(nt||a===null||cn(a,a.return)),e.flags&32){i=e.stateNode;try{sa(i,"")}catch(S){Ve(e,e.return,S)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,nu(e,i,a!==null?a.memoizedProps:i)),n&1024&&(su=!0);break;case 6:if(ua(t,e),fa(e),n&4){if(e.stateNode===null)throw Error(y(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(S){Ve(e,e.return,S)}}break;case 3:if(cc=null,i=Ba,Ba=rc(t.containerInfo),ua(t,e),Ba=i,fa(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(S){Ve(e,e.return,S)}su&&(su=!1,sd(e));break;case 4:n=Ba,Ba=rc(e.stateNode.containerInfo),ua(t,e),fa(e),Ba=n;break;case 12:ua(t,e),fa(e);break;case 13:ua(t,e),fa(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(hu=pa()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ru(e,n)));break;case 22:i=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,_=Qn,T=nt;if(Qn=_||i,nt=T||m,ua(t,e),nt=T,Qn=_,fa(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||m||Qn||nt||sl(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(s=m.stateNode,i)o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{f=m.stateNode;var D=m.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null;f.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(S){Ve(m,m.return,S)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=i?"":m.memoizedProps}catch(S){Ve(m,m.return,S)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ru(e,a))));break;case 19:ua(t,e),fa(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ru(e,n)));break;case 30:break;case 21:break;default:ua(t,e),fa(e)}}function fa(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(If(n)){a=n;break}n=n.return}if(a==null)throw Error(y(160));switch(a.tag){case 27:var i=a.stateNode,s=iu(e);$o(e,s,i);break;case 5:var o=a.stateNode;a.flags&32&&(sa(o,""),a.flags&=-33);var f=iu(e);$o(e,f,o);break;case 3:case 4:var m=a.stateNode.containerInfo,_=iu(e);lu(e,_,m);break;default:throw Error(y(161))}}catch(T){Ve(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ji(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)td(e,t.alternate,t),t=t.sibling}function sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Si(4,t,t.return),sl(t);break;case 1:cn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Wf(t,t.return,a),sl(t);break;case 27:xr(t.stateNode);case 26:case 5:cn(t,t.return),sl(t);break;case 22:t.memoizedState===null&&sl(t);break;case 30:sl(t);break;default:sl(t)}e=e.sibling}}function Ei(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,s=t,o=s.flags;switch(s.tag){case 0:case 11:case 15:Ei(i,s,a),ur(4,s);break;case 1:if(Ei(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(_){Ve(n,n.return,_)}if(n=s,i=n.updateQueue,i!==null){var f=n.stateNode;try{var m=i.shared.hiddenCallbacks;if(m!==null)for(i.shared.hiddenCallbacks=null,i=0;i<m.length;i++)ge(m[i],f)}catch(_){Ve(n,n.return,_)}}a&&o&64&&Jf(s),fr(s,s.return);break;case 27:Pf(s);case 26:case 5:Ei(i,s,a),a&&n===null&&o&4&&Ff(s),fr(s,s.return);break;case 12:Ei(i,s,a);break;case 13:Ei(i,s,a),a&&o&4&&id(i,s);break;case 22:s.memoizedState===null&&Ei(i,s,a),fr(s,s.return);break;case 30:break;default:Ei(i,s,a)}t=t.sibling}}function ou(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&yi(a))}function cu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yi(e))}function un(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rd(e,t,a,n),t=t.sibling}function rd(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:un(e,t,a,n),i&2048&&ur(9,t);break;case 1:un(e,t,a,n);break;case 3:un(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&yi(e)));break;case 12:if(i&2048){un(e,t,a,n),e=t.stateNode;try{var s=t.memoizedProps,o=s.id,f=s.onPostCommit;typeof f=="function"&&f(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){Ve(t,t.return,m)}}else un(e,t,a,n);break;case 13:un(e,t,a,n);break;case 23:break;case 22:s=t.stateNode,o=t.alternate,t.memoizedState!==null?s._visibility&2?un(e,t,a,n):dr(e,t):s._visibility&2?un(e,t,a,n):(s._visibility|=2,Zl(e,t,a,n,(t.subtreeFlags&10256)!==0)),i&2048&&ou(o,t);break;case 24:un(e,t,a,n),i&2048&&cu(t.alternate,t);break;default:un(e,t,a,n)}}function Zl(e,t,a,n,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var s=e,o=t,f=a,m=n,_=o.flags;switch(o.tag){case 0:case 11:case 15:Zl(s,o,f,m,i),ur(8,o);break;case 23:break;case 22:var T=o.stateNode;o.memoizedState!==null?T._visibility&2?Zl(s,o,f,m,i):dr(s,o):(T._visibility|=2,Zl(s,o,f,m,i)),i&&_&2048&&ou(o.alternate,o);break;case 24:Zl(s,o,f,m,i),i&&_&2048&&cu(o.alternate,o);break;default:Zl(s,o,f,m,i)}t=t.sibling}}function dr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:dr(a,n),i&2048&&ou(n.alternate,n);break;case 24:dr(a,n),i&2048&&cu(n.alternate,n);break;default:dr(a,n)}t=t.sibling}}var hr=8192;function Kl(e){if(e.subtreeFlags&hr)for(e=e.child;e!==null;)od(e),e=e.sibling}function od(e){switch(e.tag){case 26:Kl(e),e.flags&hr&&e.memoizedState!==null&&yh(Ba,e.memoizedState,e.memoizedProps);break;case 5:Kl(e);break;case 3:case 4:var t=Ba;Ba=rc(e.stateNode.containerInfo),Kl(e),Ba=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=hr,hr=16777216,Kl(e),hr=t):Kl(e));break;default:Kl(e)}}function cd(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];bt=n,fd(n,e)}cd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ud(e),e=e.sibling}function ud(e){switch(e.tag){case 0:case 11:case 15:mr(e),e.flags&2048&&Si(9,e,e.return);break;case 3:mr(e);break;case 12:mr(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Jo(e)):mr(e);break;default:mr(e)}}function Jo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];bt=n,fd(n,e)}cd(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Si(8,t,t.return),Jo(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Jo(t));break;default:Jo(t)}e=e.sibling}}function fd(e,t){for(;bt!==null;){var a=bt;switch(a.tag){case 0:case 11:case 15:Si(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:yi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,bt=n;else e:for(a=e;bt!==null;){n=bt;var i=n.sibling,s=n.return;if(ad(n),n===a){bt=null;break e}if(i!==null){i.return=s,bt=i;break e}bt=s}}}var R0={getCacheForType:function(e){var t=ut(Ie),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Y0=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ke=null,Ae=null,De=0,qe=0,da=null,Ai=!1,$l=!1,uu=!1,Zn=0,Pe=0,Ni=0,rl=0,fu=0,Ea=0,Jl=0,pr=null,aa=null,du=!1,hu=0,Wo=1/0,Fo=null,Ti=null,At=0,zi=null,Wl=null,Fl=0,mu=0,pu=null,dd=null,gr=0,gu=null;function ha(){if((Le&2)!==0&&De!==0)return De&-De;if(N.T!==null){var e=Ft;return e!==0?e:Su()}return Hr()}function hd(){Ea===0&&(Ea=(De&536870912)===0||Ce?kr():536870912);var e=ja.current;return e!==null&&(e.flags|=32),Ea}function ma(e,t,a){(e===Ke&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(Il(e,0),Oi(e,De,Ea,!1)),Va(e,a),((Le&2)===0||e!==Ke)&&(e===Ke&&((Le&2)===0&&(rl|=a),Pe===4&&Oi(e,De,Ea,!1)),fn(e))}function md(e,t,a){if((Le&6)!==0)throw Error(y(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Hi(e,t),i=n?B0(e,t):yu(e,t,!0),s=n;do{if(i===0){$l&&!n&&Oi(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!U0(a)){i=yu(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var f=e;i=pr;var m=f.current.memoizedState.isDehydrated;if(m&&(Il(f,o).flags|=256),o=yu(f,o,!1),o!==2){if(uu&&!m){f.errorRecoveryDisabledLanes|=s,rl|=s,i=4;break e}s=aa,aa=i,s!==null&&(aa===null?aa=s:aa.push.apply(aa,s))}i=o}if(s=!1,i!==2)continue}}if(i===1){Il(e,0),Oi(e,t,0,!0);break}e:{switch(n=e,s=i,s){case 0:case 1:throw Error(y(345));case 4:if((t&4194048)!==t)break;case 6:Oi(n,t,Ea,!Ai);break e;case 2:aa=null;break;case 3:case 5:break;default:throw Error(y(329))}if((t&62914560)===t&&(i=hu+300-pa(),10<i)){if(Oi(n,t,Ea,!Ai),gl(n,0,!0)!==0)break e;n.timeoutHandle=Gd(pd.bind(null,n,a,aa,Fo,du,t,Ea,rl,Jl,Ai,s,2,-0,0),i);break e}pd(n,a,aa,Fo,du,t,Ea,rl,Jl,Ai,s,0,-0,0)}}break}while(!0);fn(e)}function pd(e,t,a,n,i,s,o,f,m,_,T,D,w,S){if(e.timeoutHandle=-1,D=t.subtreeFlags,(D&8192||(D&16785408)===16785408)&&(Sr={stylesheets:null,count:0,unsuspend:vh},od(t),D=xh(),D!==null)){e.cancelPendingCommit=D(wd.bind(null,e,t,s,a,n,i,o,f,m,T,1,w,S)),Oi(e,s,o,!_);return}wd(e,t,s,a,n,i,o,f,m)}function U0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Oi(e,t,a,n){t&=~fu,t&=~rl,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var s=31-ct(i),o=1<<s;n[s]=-1,i&=~o}a!==0&&ss(e,a,t)}function Io(){return(Le&6)===0?(br(0),!1):!0}function bu(){if(Ae!==null){if(qe===0)var e=Ae.return;else e=Ae,Ua=kn=null,Sa(e),Ql=null,rr=0,e=Ae;for(;e!==null;)$f(e.alternate,e),e=e.return;Ae=null}}function Il(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,th(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),bu(),Ke=e,Ae=a=Ca(e.current,null),De=t,qe=0,da=null,Ai=!1,$l=Hi(e,t),uu=!1,Jl=Ea=fu=rl=Ni=Pe=0,aa=pr=null,du=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ct(n),s=1<<i;t|=e[i],n&=~s}return Zn=t,Ml(),a}function gd(e,t){Q=null,N.H=Bo,t===xi||t===Bn?(t=r(),qe=3):t===nl?(t=r(),qe=4):qe=t===kf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,da=t,Ae===null&&(Pe=1,Qo(e,Qt(t,e.current)))}function bd(){var e=N.H;return N.H=Bo,e===null?Bo:e}function vd(){var e=N.A;return N.A=R0,e}function vu(){Pe=4,Ai||(De&4194048)!==De&&ja.current!==null||($l=!0),(Ni&134217727)===0&&(rl&134217727)===0||Ke===null||Oi(Ke,De,Ea,!1)}function yu(e,t,a){var n=Le;Le|=2;var i=bd(),s=vd();(Ke!==e||De!==t)&&(Fo=null,Il(e,t)),t=!1;var o=Pe;e:do try{if(qe!==0&&Ae!==null){var f=Ae,m=da;switch(qe){case 8:bu(),o=6;break e;case 3:case 2:case 9:case 6:ja.current===null&&(t=!0);var _=qe;if(qe=0,da=null,Pl(e,f,m,_),a&&$l){o=0;break e}break;default:_=qe,qe=0,da=null,Pl(e,f,m,_)}}H0(),o=Pe;break}catch(T){gd(e,T)}while(!0);return t&&e.shellSuspendCounter++,Ua=kn=null,Le=n,N.H=i,N.A=s,Ae===null&&(Ke=null,De=0,Ml()),o}function H0(){for(;Ae!==null;)yd(Ae)}function B0(e,t){var a=Le;Le|=2;var n=bd(),i=vd();Ke!==e||De!==t?(Fo=null,Wo=pa()+500,Il(e,t)):$l=Hi(e,t);e:do try{if(qe!==0&&Ae!==null){t=Ae;var s=da;t:switch(qe){case 1:qe=0,da=null,Pl(e,t,s,1);break;case 2:case 9:if(Mo(s)){qe=0,da=null,xd(t);break}t=function(){qe!==2&&qe!==9||Ke!==e||(qe=7),fn(e)},s.then(t,t);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:Mo(s)?(qe=0,da=null,xd(t)):(qe=0,da=null,Pl(e,t,s,7));break;case 5:var o=null;switch(Ae.tag){case 26:o=Ae.memoizedState;case 5:case 27:var f=Ae;if(!o||t0(o)){qe=0,da=null;var m=f.sibling;if(m!==null)Ae=m;else{var _=f.return;_!==null?(Ae=_,Po(_)):Ae=null}break t}}qe=0,da=null,Pl(e,t,s,5);break;case 6:qe=0,da=null,Pl(e,t,s,6);break;case 8:bu(),Pe=6;break e;default:throw Error(y(462))}}L0();break}catch(T){gd(e,T)}while(!0);return Ua=kn=null,N.H=n,N.A=i,Le=a,Ae!==null?0:(Ke=null,De=0,Ml(),Pe)}function L0(){for(;Ae!==null&&!Ui();)yd(Ae)}function yd(e){var t=Zf(e.alternate,e,Zn);e.memoizedProps=e.pendingProps,t===null?Po(e):Ae=t}function xd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Lf(a,t,t.pendingProps,t.type,void 0,De);break;case 11:t=Lf(a,t,t.pendingProps,t.type.render,t.ref,De);break;case 5:Sa(t);default:$f(a,t),t=Ae=jo(t,Zn),t=Zf(a,t,Zn)}e.memoizedProps=e.pendingProps,t===null?Po(e):Ae=t}function Pl(e,t,a,n){Ua=kn=null,Sa(t),Ql=null,rr=0;var i=t.return;try{if(z0(e,i,t,a,De)){Pe=1,Qo(e,Qt(a,e.current)),Ae=null;return}}catch(s){if(i!==null)throw Ae=i,s;Pe=1,Qo(e,Qt(a,e.current)),Ae=null;return}t.flags&32768?(Ce||n===1?e=!0:$l||(De&536870912)!==0?e=!1:(Ai=e=!0,(n===2||n===9||n===3||n===6)&&(n=ja.current,n!==null&&n.tag===13&&(n.flags|=16384))),_d(t,e)):Po(t)}function Po(e){var t=e;do{if((t.flags&32768)!==0){_d(t,Ai);return}e=t.return;var a=M0(t.alternate,t,Zn);if(a!==null){Ae=a;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Pe===0&&(Pe=5)}function _d(e,t){do{var a=D0(e.alternate,e);if(a!==null){a.flags&=32767,Ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=a}while(e!==null);Pe=6,Ae=null}function wd(e,t,a,n,i,s,o,f,m){e.cancelPendingCommit=null;do ec();while(At!==0);if((Le&6)!==0)throw Error(y(327));if(t!==null){if(t===e.current)throw Error(y(177));if(s=t.lanes|t.childLanes,s|=Cs,Yr(e,a,s,o,f,m),e===Ke&&(Ae=Ke=null,De=0),Wl=t,zi=e,Fl=a,mu=s,pu=i,dd=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Q0(dl,function(){return Nd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,i=G.p,G.p=2,o=Le,Le|=4;try{C0(e,t,a)}finally{Le=o,G.p=i,N.T=n}}At=1,Sd(),jd(),Ed()}}function Sd(){if(At===1){At=0;var e=zi,t=Wl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var n=G.p;G.p=2;var i=Le;Le|=4;try{ld(t,e);var s=Mu,o=As(e.containerInfo),f=s.focusedElem,m=s.selectionRange;if(o!==f&&f&&f.ownerDocument&&vo(f.ownerDocument.documentElement,f)){if(m!==null&&Ol(f)){var _=m.start,T=m.end;if(T===void 0&&(T=_),"selectionStart"in f)f.selectionStart=_,f.selectionEnd=Math.min(T,f.value.length);else{var D=f.ownerDocument||document,w=D&&D.defaultView||window;if(w.getSelection){var S=w.getSelection(),he=f.textContent.length,re=Math.min(m.start,he),Qe=m.end===void 0?re:Math.min(m.end,he);!S.extend&&re>Qe&&(o=Qe,Qe=re,re=o);var v=bo(f,re),p=bo(f,Qe);if(v&&p&&(S.rangeCount!==1||S.anchorNode!==v.node||S.anchorOffset!==v.offset||S.focusNode!==p.node||S.focusOffset!==p.offset)){var x=D.createRange();x.setStart(v.node,v.offset),S.removeAllRanges(),re>Qe?(S.addRange(x),S.extend(p.node,p.offset)):(x.setEnd(p.node,p.offset),S.addRange(x))}}}}for(D=[],S=f;S=S.parentNode;)S.nodeType===1&&D.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<D.length;f++){var M=D[f];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}dc=!!Ou,Mu=Ou=null}finally{Le=i,G.p=n,N.T=a}}e.current=t,At=2}}function jd(){if(At===2){At=0;var e=zi,t=Wl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var n=G.p;G.p=2;var i=Le;Le|=4;try{td(e,t.alternate,t)}finally{Le=i,G.p=n,N.T=a}}At=3}}function Ed(){if(At===4||At===3){At=0,$n();var e=zi,t=Wl,a=Fl,n=dd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?At=5:(At=0,Wl=zi=null,Ad(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ti=null),os(a),t=t.stateNode,Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Jn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=N.T,i=G.p,G.p=2,N.T=null;try{for(var s=e.onRecoverableError,o=0;o<n.length;o++){var f=n[o];s(f.value,{componentStack:f.stack})}}finally{N.T=t,G.p=i}}(Fl&3)!==0&&ec(),fn(e),i=e.pendingLanes,(a&4194090)!==0&&(i&42)!==0?e===gu?gr++:(gr=0,gu=e):gr=0,br(0)}}function Ad(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,yi(t)))}function ec(e){return Sd(),jd(),Ed(),Nd()}function Nd(){if(At!==5)return!1;var e=zi,t=mu;mu=0;var a=os(Fl),n=N.T,i=G.p;try{G.p=32>a?32:a,N.T=null,a=pu,pu=null;var s=zi,o=Fl;if(At=0,Wl=zi=null,Fl=0,(Le&6)!==0)throw Error(y(331));var f=Le;if(Le|=4,ud(s.current),rd(s,s.current,o,a),Le=f,br(0,!1),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Jn,s)}catch{}return!0}finally{G.p=i,N.T=n,Ad(e,t)}}function Td(e,t,a){t=Qt(a,t),t=$c(e.stateNode,t,2),e=R(e,t,2),e!==null&&(Va(e,2),fn(e))}function Ve(e,t,a){if(e.tag===3)Td(e,e,a);else for(;t!==null;){if(t.tag===3){Td(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ti===null||!Ti.has(n))){e=Qt(a,e),a=Df(2),n=R(t,a,2),n!==null&&(Cf(a,n,t,e),Va(n,2),fn(n));break}}t=t.return}}function xu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Y0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(uu=!0,i.add(a),e=q0.bind(null,e,t,a),t.then(e,e))}function q0(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ke===e&&(De&a)===a&&(Pe===4||Pe===3&&(De&62914560)===De&&300>pa()-hu?(Le&2)===0&&Il(e,0):fu|=a,Jl===De&&(Jl=0)),fn(e)}function zd(e,t){t===0&&(t=Rr()),e=Ct(e,t),e!==null&&(Va(e,t),fn(e))}function X0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),zd(e,a)}function G0(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(y(314))}n!==null&&n.delete(t),zd(e,a)}function Q0(e,t){return hn(e,t)}var tc=null,es=null,_u=!1,ac=!1,wu=!1,ol=0;function fn(e){e!==es&&e.next===null&&(es===null?tc=es=e:es=es.next=e),ac=!0,_u||(_u=!0,Z0())}function br(e,t){if(!wu&&ac){wu=!0;do for(var a=!1,n=tc;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var o=n.suspendedLanes,f=n.pingedLanes;s=(1<<31-ct(42|e)+1)-1,s&=i&~(o&~f),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Cd(n,s))}else s=De,s=gl(n,n===Ke?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Hi(n,s)||(a=!0,Cd(n,s));n=n.next}while(a);wu=!1}}function V0(){Od()}function Od(){ac=_u=!1;var e=0;ol!==0&&(eh()&&(e=ol),ol=0);for(var t=pa(),a=null,n=tc;n!==null;){var i=n.next,s=Md(n,t);s===0?(n.next=null,a===null?tc=i:a.next=i,i===null&&(es=a)):(a=n,(e!==0||(s&3)!==0)&&(ac=!0)),n=i}br(e)}function Md(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var o=31-ct(s),f=1<<o,m=i[o];m===-1?((f&a)===0||(f&n)!==0)&&(i[o]=wc(f,t)):m<=t&&(e.expiredLanes|=f),s&=~f}if(t=Ke,a=De,a=gl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&fl(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Hi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&fl(n),os(a)){case 2:case 8:a=Dr;break;case 32:a=dl;break;case 268435456:a=Cr;break;default:a=dl}return n=Dd.bind(null,e),a=hn(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&fl(n),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,t){if(At!==0&&At!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ec()&&e.callbackNode!==a)return null;var n=De;return n=gl(e,e===Ke?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(md(e,n,t),Md(e,pa()),e.callbackNode!=null&&e.callbackNode===a?Dd.bind(null,e):null)}function Cd(e,t){if(ec())return null;md(e,t,!0)}function Z0(){ah(function(){(Le&6)!==0?hn(Mr,V0):Od()})}function Su(){return ol===0&&(ol=kr()),ol}function kd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wl(""+e)}function Rd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function K0(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var s=kd((i[Tt]||null).action),o=n.submitter;o&&(t=(t=o[Tt]||null)?kd(t.formAction):o.getAttribute("formAction"),t!==null&&(s=t,o=null));var f=new si("action","action",null,n,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ol!==0){var m=o?Rd(i,o):new FormData(i);Gc(a,{pending:!0,data:m,method:i.method,action:s},null,m)}}else typeof s=="function"&&(f.preventDefault(),m=o?Rd(i,o):new FormData(i),Gc(a,{pending:!0,data:m,method:i.method,action:s},s,m))},currentTarget:i}]})}}for(var ju=0;ju<Ds.length;ju++){var Eu=Ds[ju],$0=Eu.toLowerCase(),J0=Eu[0].toUpperCase()+Eu.slice(1);ra($0,"on"+J0)}ra(Pa,"onAnimationEnd"),ra(_a,"onAnimationIteration"),ra(zs,"onAnimationStart"),ra("dblclick","onDoubleClick"),ra("focusin","onFocus"),ra("focusout","onBlur"),ra(Uc,"onTransitionRun"),ra(_o,"onTransitionStart"),ra(wo,"onTransitionCancel"),ra(Os,"onTransitionEnd"),Ta("onMouseEnter",["mouseout","mouseover"]),Ta("onMouseLeave",["mouseout","mouseover"]),Ta("onPointerEnter",["pointerout","pointerover"]),Ta("onPointerLeave",["pointerout","pointerover"]),Je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Je("onBeforeInput",["compositionend","keypress","textInput","paste"]),Je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vr));function Yd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var o=n.length-1;0<=o;o--){var f=n[o],m=f.instance,_=f.currentTarget;if(f=f.listener,m!==s&&i.isPropagationStopped())break e;s=f,i.currentTarget=_;try{s(i)}catch(T){Go(T)}i.currentTarget=null,s=m}else for(o=0;o<n.length;o++){if(f=n[o],m=f.instance,_=f.currentTarget,f=f.listener,m!==s&&i.isPropagationStopped())break e;s=f,i.currentTarget=_;try{s(i)}catch(T){Go(T)}i.currentTarget=null,s=m}}}}function Ne(e,t){var a=t[cs];a===void 0&&(a=t[cs]=new Set);var n=e+"__bubble";a.has(n)||(Ud(t,e,2,!1),a.add(n))}function Au(e,t,a){var n=0;t&&(n|=4),Ud(a,e,n,t)}var nc="_reactListening"+Math.random().toString(36).slice(2);function Nu(e){if(!e[nc]){e[nc]=!0,zt.forEach(function(a){a!=="selectionchange"&&(W0.has(a)||Au(a,!1,e),Au(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nc]||(t[nc]=!0,Au("selectionchange",!1,t))}}function Ud(e,t,a,n){switch(r0(t)){case 2:var i=Sh;break;case 8:i=jh;break;default:i=qu}a=i.bind(null,t,a,e),i=void 0,!Wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Tu(e,t,a,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var f=n.stateNode.containerInfo;if(f===i)break;if(o===4)for(o=n.return;o!==null;){var m=o.tag;if((m===3||m===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;f!==null;){if(o=Ka(f),o===null)return;if(m=o.tag,m===5||m===6||m===26||m===27){n=s=o;continue e}f=f.parentNode}}n=n.return}bs(function(){var _=s,T=ii(a),D=[];e:{var w=Ms.get(e);if(w!==void 0){var S=si,he=e;switch(e){case"keypress":if(El(a)===0)break e;case"keydown":case"keyup":S=Pr;break;case"focusin":he="focus",S=Al;break;case"focusout":he="blur",S=Al;break;case"beforeblur":case"afterblur":S=Al;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=En;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Vr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Nc;break;case Pa:case _a:case zs:S=$r;break;case Os:S=Tc;break;case"scroll":case"scrollend":S=Qr;break;case"wheel":S=Oc;break;case"copy":case"cut":case"paste":S=Jr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Fa;break;case"toggle":case"beforetoggle":S=ao}var re=(t&4)!==0,Qe=!re&&(e==="scroll"||e==="scrollend"),v=re?w!==null?w+"Capture":null:w;re=[];for(var p=_,x;p!==null;){var M=p;if(x=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||x===null||v===null||(M=li(p,v),M!=null&&re.push(yr(p,M,x))),Qe)break;p=p.return}0<re.length&&(w=new S(w,he,null,a,T),D.push({event:w,listeners:re}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",w&&a!==ba&&(he=a.relatedTarget||a.fromElement)&&(Ka(he)||he[ei]))break e;if((S||w)&&(w=T.window===T?T:(w=T.ownerDocument)?w.defaultView||w.parentWindow:window,S?(he=a.relatedTarget||a.toElement,S=_,he=he?Ka(he):null,he!==null&&(Qe=k(he),re=he.tag,he!==Qe||re!==5&&re!==27&&re!==6)&&(he=null)):(S=null,he=_),S!==he)){if(re=En,M="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(re=Fa,M="onPointerLeave",v="onPointerEnter",p="pointer"),Qe=S==null?w:Bi(S),x=he==null?w:Bi(he),w=new re(M,p+"leave",S,a,T),w.target=Qe,w.relatedTarget=x,M=null,Ka(T)===_&&(re=new re(v,p+"enter",he,a,T),re.target=x,re.relatedTarget=Qe,M=re),Qe=M,S&&he)t:{for(re=S,v=he,p=0,x=re;x;x=ts(x))p++;for(x=0,M=v;M;M=ts(M))x++;for(;0<p-x;)re=ts(re),p--;for(;0<x-p;)v=ts(v),x--;for(;p--;){if(re===v||v!==null&&re===v.alternate)break t;re=ts(re),v=ts(v)}re=null}else re=null;S!==null&&Hd(D,w,S,re,!1),he!==null&&Qe!==null&&Hd(D,Qe,he,re,!0)}}e:{if(w=_?Bi(_):window,S=w.nodeName&&w.nodeName.toLowerCase(),S==="select"||S==="input"&&w.type==="file")var J=uo;else if(oo(w))if(Ss)J=go;else{J=mo;var Ee=Rc}else S=w.nodeName,!S||S.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?_&&Qi(_.elementType)&&(J=uo):J=po;if(J&&(J=J(e,_))){Jt(D,J,a,T);break e}Ee&&Ee(e,w,_),e==="focusout"&&_&&w.type==="number"&&_.memoizedProps.value!=null&&Xi(w,"number",w.value)}switch(Ee=_?Bi(_):window,e){case"focusin":(oo(Ee)||Ee.contentEditable==="true")&&(di=Ee,Ns=_,Wi=null);break;case"focusout":Wi=Ns=di=null;break;case"mousedown":Ts=!0;break;case"contextmenu":case"mouseup":case"dragend":Ts=!1,yo(D,a,T);break;case"selectionchange":if(Yc)break;case"keydown":case"keyup":yo(D,a,T)}var ee;if(ws)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else oi?so(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(io&&a.locale!=="ko"&&(oi||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&oi&&(ee=jl()):(Ma=T,Zi="value"in Ma?Ma.value:Ma.textContent,oi=!0)),Ee=ic(_,oe),0<Ee.length&&(oe=new Wr(oe,e,null,a,T),D.push({event:oe,listeners:Ee}),ee?oe.data=ee:(ee=ro(a),ee!==null&&(oe.data=ee)))),(ee=An?Dc(e,a):Cc(e,a))&&(oe=ic(_,"onBeforeInput"),0<oe.length&&(Ee=new Wr("onBeforeInput","beforeinput",null,a,T),D.push({event:Ee,listeners:oe}),Ee.data=ee)),K0(D,e,_,a,T)}Yd(D,t)})}function yr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ic(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=li(e,a),i!=null&&n.unshift(yr(e,i,s)),i=li(e,t),i!=null&&n.push(yr(e,i,s))),e.tag===3)return n;e=e.return}return[]}function ts(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hd(e,t,a,n,i){for(var s=t._reactName,o=[];a!==null&&a!==n;){var f=a,m=f.alternate,_=f.stateNode;if(f=f.tag,m!==null&&m===n)break;f!==5&&f!==26&&f!==27||_===null||(m=_,i?(_=li(a,s),_!=null&&o.unshift(yr(a,_,m))):i||(_=li(a,s),_!=null&&o.push(yr(a,_,m)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var F0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function Bd(e){return(typeof e=="string"?e:""+e).replace(F0,`
`).replace(I0,"")}function Ld(e,t){return t=Bd(t),Bd(e)===t}function lc(){}function Ge(e,t,a,n,i,s){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||sa(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&sa(e,""+n);break;case"className":za(e,"class",n);break;case"tabIndex":za(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":za(e,a,n);break;case"style":vn(e,n,s);break;case"data":if(t!=="object"){za(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=wl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Ge(e,t,"name",i.name,i,null),Ge(e,t,"formEncType",i.formEncType,i,null),Ge(e,t,"formMethod",i.formMethod,i,null),Ge(e,t,"formTarget",i.formTarget,i,null)):(Ge(e,t,"encType",i.encType,i,null),Ge(e,t,"method",i.method,i,null),Ge(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=wl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=lc);break;case"onScroll":n!=null&&Ne("scroll",e);break;case"onScrollEnd":n!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(y(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(y(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=wl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),ni(e,"popover",n);break;case"xlinkActuate":ga(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ga(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ga(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ga(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ga(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ga(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ga(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ga(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ga(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ni(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xr.get(a)||a,ni(e,a,n))}}function zu(e,t,a,n,i,s){switch(a){case"style":vn(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(y(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(y(60));e.innerHTML=a}}break;case"children":typeof n=="string"?sa(e,n):(typeof n=="number"||typeof n=="bigint")&&sa(e,""+n);break;case"onScroll":n!=null&&Ne("scroll",e);break;case"onScrollEnd":n!=null&&Ne("scrollend",e);break;case"onClick":n!=null&&(e.onclick=lc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ot.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),s=e[Tt]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):ni(e,a,n)}}}function Nt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var o=a[s];if(o!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:Ge(e,t,s,o,a,null)}}i&&Ge(e,t,"srcSet",a.srcSet,a,null),n&&Ge(e,t,"src",a.src,a,null);return;case"input":Ne("invalid",e);var f=s=o=i=null,m=null,_=null;for(n in a)if(a.hasOwnProperty(n)){var T=a[n];if(T!=null)switch(n){case"name":i=T;break;case"type":o=T;break;case"checked":m=T;break;case"defaultChecked":_=T;break;case"value":s=T;break;case"defaultValue":f=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(y(137,t));break;default:Ge(e,t,n,T,a,null)}}_l(e,s,f,m,_,o,i,!1),qi(e);return;case"select":Ne("invalid",e),n=o=s=null;for(i in a)if(a.hasOwnProperty(i)&&(f=a[i],f!=null))switch(i){case"value":s=f;break;case"defaultValue":o=f;break;case"multiple":n=f;default:Ge(e,t,i,f,a,null)}t=s,a=o,e.multiple=!!n,t!=null?wt(e,!!n,t,!1):a!=null&&wt(e,!!n,a,!0);return;case"textarea":Ne("invalid",e),s=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(f=a[o],f!=null))switch(o){case"value":n=f;break;case"defaultValue":i=f;break;case"children":s=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(y(91));break;default:Ge(e,t,o,f,a,null)}Gi(e,n,i,s),qi(e);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(n=a[m],n!=null))switch(m){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ge(e,t,m,n,a,null)}return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(n=0;n<vr.length;n++)Ne(vr[n],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in a)if(a.hasOwnProperty(_)&&(n=a[_],n!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,t));default:Ge(e,t,_,n,a,null)}return;default:if(Qi(t)){for(T in a)a.hasOwnProperty(T)&&(n=a[T],n!==void 0&&zu(e,t,T,n,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!=null&&Ge(e,t,f,n,a,null))}function P0(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,o=null,f=null,m=null,_=null,T=null;for(S in a){var D=a[S];if(a.hasOwnProperty(S)&&D!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":m=D;default:n.hasOwnProperty(S)||Ge(e,t,S,null,n,D)}}for(var w in n){var S=n[w];if(D=a[w],n.hasOwnProperty(w)&&(S!=null||D!=null))switch(w){case"type":s=S;break;case"name":i=S;break;case"checked":_=S;break;case"defaultChecked":T=S;break;case"value":o=S;break;case"defaultValue":f=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(y(137,t));break;default:S!==D&&Ge(e,t,w,S,n,D)}}Mt(e,o,f,m,_,T,s,i);return;case"select":S=o=f=w=null;for(s in a)if(m=a[s],a.hasOwnProperty(s)&&m!=null)switch(s){case"value":break;case"multiple":S=m;default:n.hasOwnProperty(s)||Ge(e,t,s,null,n,m)}for(i in n)if(s=n[i],m=a[i],n.hasOwnProperty(i)&&(s!=null||m!=null))switch(i){case"value":w=s;break;case"defaultValue":f=s;break;case"multiple":o=s;default:s!==m&&Ge(e,t,i,s,n,m)}t=f,a=o,n=S,w!=null?wt(e,!!a,w,!1):!!n!=!!a&&(t!=null?wt(e,!!a,t,!0):wt(e,!!a,a?[]:"",!1));return;case"textarea":S=w=null;for(f in a)if(i=a[f],a.hasOwnProperty(f)&&i!=null&&!n.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Ge(e,t,f,null,n,i)}for(o in n)if(i=n[o],s=a[o],n.hasOwnProperty(o)&&(i!=null||s!=null))switch(o){case"value":w=i;break;case"defaultValue":S=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(y(91));break;default:i!==s&&Ge(e,t,o,i,n,s)}Ja(e,w,S);return;case"option":for(var he in a)if(w=a[he],a.hasOwnProperty(he)&&w!=null&&!n.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:Ge(e,t,he,null,n,w)}for(m in n)if(w=n[m],S=a[m],n.hasOwnProperty(m)&&w!==S&&(w!=null||S!=null))switch(m){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:Ge(e,t,m,w,n,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)w=a[re],a.hasOwnProperty(re)&&w!=null&&!n.hasOwnProperty(re)&&Ge(e,t,re,null,n,w);for(_ in n)if(w=n[_],S=a[_],n.hasOwnProperty(_)&&w!==S&&(w!=null||S!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(y(137,t));break;default:Ge(e,t,_,w,n,S)}return;default:if(Qi(t)){for(var Qe in a)w=a[Qe],a.hasOwnProperty(Qe)&&w!==void 0&&!n.hasOwnProperty(Qe)&&zu(e,t,Qe,void 0,n,w);for(T in n)w=n[T],S=a[T],!n.hasOwnProperty(T)||w===S||w===void 0&&S===void 0||zu(e,t,T,w,n,S);return}}for(var v in a)w=a[v],a.hasOwnProperty(v)&&w!=null&&!n.hasOwnProperty(v)&&Ge(e,t,v,null,n,w);for(D in n)w=n[D],S=a[D],!n.hasOwnProperty(D)||w===S||w==null&&S==null||Ge(e,t,D,w,n,S)}var Ou=null,Mu=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function qd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Du(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cu=null;function eh(){var e=window.event;return e&&e.type==="popstate"?e===Cu?!1:(Cu=e,!0):(Cu=null,!1)}var Gd=typeof setTimeout=="function"?setTimeout:void 0,th=typeof clearTimeout=="function"?clearTimeout:void 0,Qd=typeof Promise=="function"?Promise:void 0,ah=typeof queueMicrotask=="function"?queueMicrotask:typeof Qd<"u"?function(e){return Qd.resolve(null).then(e).catch(nh)}:Gd;function nh(e){setTimeout(function(){throw e})}function Mi(e){return e==="head"}function Vd(e,t){var a=t,n=0,i=0;do{var s=a.nextSibling;if(e.removeChild(a),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(0<n&&8>n){a=n;var o=e.ownerDocument;if(a&1&&xr(o.documentElement),a&2&&xr(o.body),a&4)for(a=o.head,xr(a),o=a.firstChild;o;){var f=o.nextSibling,m=o.nodeName;o[Za]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=f}}if(i===0){e.removeChild(s),Tr(t);return}i--}else a==="$"||a==="$?"||a==="$!"?i++:n=a.charCodeAt(0)-48;else n=0;a=s}while(a);Tr(t)}function ku(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ku(a),fs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ih(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Za])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=La(e.nextSibling),e===null)break}return null}function lh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=La(e.nextSibling),e===null))return null;return e}function Ru(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function sh(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function La(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Yu=null;function Zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Kd(e,t,a){switch(t=sc(a),e){case"html":if(e=t.documentElement,!e)throw Error(y(452));return e;case"head":if(e=t.head,!e)throw Error(y(453));return e;case"body":if(e=t.body,!e)throw Error(y(454));return e;default:throw Error(y(451))}}function xr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fs(e)}var Aa=new Map,$d=new Set;function rc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kn=G.d;G.d={f:rh,r:oh,D:ch,C:uh,L:fh,m:dh,X:mh,S:hh,M:ph};function rh(){var e=Kn.f(),t=Io();return e||t}function oh(e){var t=ti(e);t!==null&&t.tag===5&&t.type==="form"?mf(t):Kn.r(e)}var as=typeof document>"u"?null:document;function Jd(e,t,a){var n=as;if(n&&typeof t=="string"&&t){var i=lt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),$d.has(i)||($d.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Nt(t,"link",e),Oe(t),n.head.appendChild(t)))}}function ch(e){Kn.D(e),Jd("dns-prefetch",e,null)}function uh(e,t){Kn.C(e,t),Jd("preconnect",e,t)}function fh(e,t,a){Kn.L(e,t,a);var n=as;if(n&&e&&t){var i='link[rel="preload"][as="'+lt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+lt(a.imageSizes)+'"]')):i+='[href="'+lt(e)+'"]';var s=i;switch(t){case"style":s=ns(e);break;case"script":s=is(e)}Aa.has(s)||(e=Y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Aa.set(s,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(_r(s))||t==="script"&&n.querySelector(wr(s))||(t=n.createElement("link"),Nt(t,"link",e),Oe(t),n.head.appendChild(t)))}}function dh(e,t){Kn.m(e,t);var a=as;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+lt(n)+'"][href="'+lt(e)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=is(e)}if(!Aa.has(s)&&(e=Y({rel:"modulepreload",href:e},t),Aa.set(s,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wr(s)))return}n=a.createElement("link"),Nt(n,"link",e),Oe(n),a.head.appendChild(n)}}}function hh(e,t,a){Kn.S(e,t,a);var n=as;if(n&&e){var i=la(n).hoistableStyles,s=ns(e);t=t||"default";var o=i.get(s);if(!o){var f={loading:0,preload:null};if(o=n.querySelector(_r(s)))f.loading=5;else{e=Y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Aa.get(s))&&Uu(e,a);var m=o=n.createElement("link");Oe(m),Nt(m,"link",e),m._p=new Promise(function(_,T){m.onload=_,m.onerror=T}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,oc(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:f},i.set(s,o)}}}function mh(e,t){Kn.X(e,t);var a=as;if(a&&e){var n=la(a).hoistableScripts,i=is(e),s=n.get(i);s||(s=a.querySelector(wr(i)),s||(e=Y({src:e,async:!0},t),(t=Aa.get(i))&&Hu(e,t),s=a.createElement("script"),Oe(s),Nt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function ph(e,t){Kn.M(e,t);var a=as;if(a&&e){var n=la(a).hoistableScripts,i=is(e),s=n.get(i);s||(s=a.querySelector(wr(i)),s||(e=Y({src:e,async:!0,type:"module"},t),(t=Aa.get(i))&&Hu(e,t),s=a.createElement("script"),Oe(s),Nt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Wd(e,t,a,n){var i=(i=ae.current)?rc(i):null;if(!i)throw Error(y(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=ns(a.href),a=la(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ns(a.href);var s=la(i).hoistableStyles,o=s.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,o),(s=i.querySelector(_r(e)))&&!s._p&&(o.instance=s,o.state.loading=5),Aa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Aa.set(e,a),s||gh(i,e,a,o.state))),t&&n===null)throw Error(y(528,""));return o}if(t&&n!==null)throw Error(y(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=is(a),a=la(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,e))}}function ns(e){return'href="'+lt(e)+'"'}function _r(e){return'link[rel="stylesheet"]['+e+"]"}function Fd(e){return Y({},e,{"data-precedence":e.precedence,precedence:null})}function gh(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Nt(t,"link",a),Oe(t),e.head.appendChild(t))}function is(e){return'[src="'+lt(e)+'"]'}function wr(e){return"script[async]"+e}function Id(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+lt(a.href)+'"]');if(n)return t.instance=n,Oe(n),n;var i=Y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Oe(n),Nt(n,"style",i),oc(n,a.precedence,e),t.instance=n;case"stylesheet":i=ns(a.href);var s=e.querySelector(_r(i));if(s)return t.state.loading|=4,t.instance=s,Oe(s),s;n=Fd(a),(i=Aa.get(i))&&Uu(n,i),s=(e.ownerDocument||e).createElement("link"),Oe(s);var o=s;return o._p=new Promise(function(f,m){o.onload=f,o.onerror=m}),Nt(s,"link",n),t.state.loading|=4,oc(s,a.precedence,e),t.instance=s;case"script":return s=is(a.src),(i=e.querySelector(wr(s)))?(t.instance=i,Oe(i),i):(n=a,(i=Aa.get(s))&&(n=Y({},a),Hu(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Oe(i),Nt(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(y(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,oc(n,a.precedence,e));return t.instance}function oc(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,o=0;o<n.length;o++){var f=n[o];if(f.dataset.precedence===t)s=f;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var cc=null;function Pd(e,t,a){if(cc===null){var n=new Map,i=cc=new Map;i.set(a,n)}else i=cc,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var s=a[i];if(!(s[Za]||s[pt]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var o=s.getAttribute(t)||"";o=e+o;var f=n.get(o);f?f.push(s):n.set(o,[s])}}return n}function e0(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function bh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function t0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Sr=null;function vh(){}function yh(e,t,a){if(Sr===null)throw Error(y(475));var n=Sr;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=ns(a.href),s=e.querySelector(_r(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=uc.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=s,Oe(s);return}s=e.ownerDocument||e,a=Fd(a),(i=Aa.get(i))&&Uu(a,i),s=s.createElement("link"),Oe(s);var o=s;o._p=new Promise(function(f,m){o.onload=f,o.onerror=m}),Nt(s,"link",a),t.instance=s}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=uc.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function xh(){if(Sr===null)throw Error(y(475));var e=Sr;return e.stylesheets&&e.count===0&&Bu(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Bu(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function uc(){if(this.count--,this.count===0){if(this.stylesheets)Bu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var fc=null;function Bu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,t.forEach(_h,e),fc=null,uc.call(e))}function _h(e,t){if(!(t.state.loading&4)){var a=fc.get(e);if(a)var n=a.get(null);else{a=new Map,fc.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var o=i[s];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),s=a.get(o)||n,s===n&&a.set(null,i),a.set(o,i),this.count++,n=uc.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var jr={$$typeof:Ye,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function wh(e,t,a,n,i,s,o,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.hiddenUpdates=bl(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function a0(e,t,a,n,i,s,o,f,m,_,T,D){return e=new wh(e,t,a,o,f,m,_,D),t=1,s===!0&&(t|=24),s=Zt(3,null,null,t),e.current=s,s.stateNode=e,t=al(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},b(s),e}function n0(e){return e?(e=mi,e):mi}function i0(e,t,a,n,i,s){i=n0(i),n.context===null?n.context=i:n.pendingContext=i,n=O(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=R(e,n,t),a!==null&&(ma(a,e,t),Z(a,e,t))}function l0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Lu(e,t){l0(e,t),(e=e.alternate)&&l0(e,t)}function s0(e){if(e.tag===13){var t=Ct(e,67108864);t!==null&&ma(t,e,67108864),Lu(e,67108864)}}var dc=!0;function Sh(e,t,a,n){var i=N.T;N.T=null;var s=G.p;try{G.p=2,qu(e,t,a,n)}finally{G.p=s,N.T=i}}function jh(e,t,a,n){var i=N.T;N.T=null;var s=G.p;try{G.p=8,qu(e,t,a,n)}finally{G.p=s,N.T=i}}function qu(e,t,a,n){if(dc){var i=Xu(n);if(i===null)Tu(e,t,n,hc,a),o0(e,n);else if(Ah(i,e,t,a,n))n.stopPropagation();else if(o0(e,n),t&4&&-1<Eh.indexOf(e)){for(;i!==null;){var s=ti(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var o=mn(s.pendingLanes);if(o!==0){var f=s;for(f.pendingLanes|=2,f.entangledLanes|=2;o;){var m=1<<31-ct(o);f.entanglements[1]|=m,o&=~m}fn(s),(Le&6)===0&&(Wo=pa()+500,br(0))}}break;case 13:f=Ct(s,2),f!==null&&ma(f,s,2),Io(),Lu(s,2)}if(s=Xu(n),s===null&&Tu(e,t,n,hc,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else Tu(e,t,n,null,a)}}function Xu(e){return e=ii(e),Gu(e)}var hc=null;function Gu(e){if(hc=null,e=Ka(e),e!==null){var t=k(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=te(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return hc=e,null}function r0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xc()){case Mr:return 2;case Dr:return 8;case dl:case _c:return 32;case Cr:return 268435456;default:return 32}default:return 32}}var Qu=!1,Di=null,Ci=null,ki=null,Er=new Map,Ar=new Map,Ri=[],Eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function o0(e,t){switch(e){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ci=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":Er.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ar.delete(t.pointerId)}}function Nr(e,t,a,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ti(t),t!==null&&s0(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ah(e,t,a,n,i){switch(t){case"focusin":return Di=Nr(Di,e,t,a,n,i),!0;case"dragenter":return Ci=Nr(Ci,e,t,a,n,i),!0;case"mouseover":return ki=Nr(ki,e,t,a,n,i),!0;case"pointerover":var s=i.pointerId;return Er.set(s,Nr(Er.get(s)||null,e,t,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Ar.set(s,Nr(Ar.get(s)||null,e,t,a,n,i)),!0}return!1}function c0(e){var t=Ka(e.target);if(t!==null){var a=k(t);if(a!==null){if(t=a.tag,t===13){if(t=te(a),t!==null){e.blockedOn=t,Pn(e.priority,function(){if(a.tag===13){var n=ha();n=rs(n);var i=Ct(a,n);i!==null&&ma(i,a,n),Lu(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function mc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Xu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);ba=n,a.target.dispatchEvent(n),ba=null}else return t=ti(a),t!==null&&s0(t),e.blockedOn=a,!1;t.shift()}return!0}function u0(e,t,a){mc(e)&&a.delete(t)}function Nh(){Qu=!1,Di!==null&&mc(Di)&&(Di=null),Ci!==null&&mc(Ci)&&(Ci=null),ki!==null&&mc(ki)&&(ki=null),Er.forEach(u0),Ar.forEach(u0)}function pc(e,t){e.blockedOn===t&&(e.blockedOn=null,Qu||(Qu=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,Nh)))}var gc=null;function f0(e){gc!==e&&(gc=e,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Gu(n||a)===null)continue;break}var s=ti(a);s!==null&&(e.splice(t,3),t-=3,Gc(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Tr(e){function t(m){return pc(m,e)}Di!==null&&pc(Di,e),Ci!==null&&pc(Ci,e),ki!==null&&pc(ki,e),Er.forEach(t),Ar.forEach(t);for(var a=0;a<Ri.length;a++){var n=Ri[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Ri.length&&(a=Ri[0],a.blockedOn===null);)c0(a),a.blockedOn===null&&Ri.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],o=i[Tt]||null;if(typeof s=="function")o||f0(a);else if(o){var f=null;if(s&&s.hasAttribute("formAction")){if(i=s,o=s[Tt]||null)f=o.formAction;else if(Gu(i)!==null)continue}else f=o.action;typeof f=="function"?a[n+1]=f:(a.splice(n,3),n-=3),f0(a)}}}function Vu(e){this._internalRoot=e}bc.prototype.render=Vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));var a=t.current,n=ha();i0(a,n,e,t,null,null)},bc.prototype.unmount=Vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;i0(e.current,2,null,e,null,null),Io(),t[ei]=null}};function bc(e){this._internalRoot=e}bc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ri.length&&t!==0&&t<Ri[a].priority;a++);Ri.splice(a,0,e),a===0&&c0(e)}};var d0=de.version;if(d0!=="19.1.1")throw Error(y(527,d0,"19.1.1"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=U(t),e=e!==null?A(e):null,e=e===null?null:e.stateNode,e};var Th={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vc.isDisabled&&vc.supportsFiber)try{Jn=vc.inject(Th),Bt=vc}catch{}}return Or.createRoot=function(e,t){if(!V(e))throw Error(y(299));var a=!1,n="",i=Tf,s=zf,o=Of,f=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(f=t.unstable_transitionCallbacks)),t=a0(e,1,!1,null,null,a,n,i,s,o,f,null),e[ei]=t.current,Nu(e),new Vu(t)},Or.hydrateRoot=function(e,t,a){if(!V(e))throw Error(y(299));var n=!1,i="",s=Tf,o=zf,f=Of,m=null,_=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(m=a.unstable_transitionCallbacks),a.formState!==void 0&&(_=a.formState)),t=a0(e,1,!0,t,a??null,n,i,s,o,f,m,_),t.context=n0(null),a=t.current,n=ha(),n=rs(n),i=O(n),i.callback=null,R(a,i,n),a=n,t.current.lanes=a,Va(t,a),fn(t),e[ei]=t.current,Nu(e),new bc(t)},Or.version="19.1.1",Or}var w0;function Hh(){if(w0)return $u.exports;w0=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(de){console.error(de)}}return E(),$u.exports=Uh(),$u.exports}var Bh=Hh();const Lh=()=>{const[E,de]=be.useState(!1),[H,y]=be.useState(!1);be.useEffect(()=>{const k=()=>{const te=window.scrollY>50;y(te)};return window.addEventListener("scroll",k),()=>window.removeEventListener("scroll",k)},[]);const V=(k,te)=>{k.preventDefault();const ve=document.getElementById(te);ve&&ve.scrollIntoView({behavior:"smooth",block:"start"}),de(!1)};return c.jsxs(c.Fragment,{children:[c.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --dark-bg: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          --text-light: #ffffff;
          --text-secondary: #b8c5d6;
          --accent-color: #00d4ff;
          --glass-bg: rgba(255, 255, 255, 0.05);
          --glass-border: rgba(255, 255, 255, 0.1);
          --shadow-glow: 0 8px 32px rgba(0, 212, 255, 0.3);
          --shadow-dark: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        * {
          font-family: 'Poppins', sans-serif;
        }

        .header-navbar {
          background: ${H?"rgba(26, 26, 46, 0.95)":"var(--dark-bg)"};
          backdrop-filter: ${H?"blur(20px) saturate(180%)":"none"};
          -webkit-backdrop-filter: ${H?"blur(20px) saturate(180%)":"none"};
          border-bottom: ${H?"1px solid var(--glass-border)":"none"};
          box-shadow: ${H?"0 8px 32px rgba(0, 0, 0, 0.5)":"none"};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1050;
          padding: ${H?"10px 0":"20px 0"};
          animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .header-brand {
          font-size: 1.5rem;
          font-weight: 700;
          background: white;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.4s ease;
          text-decoration: none;
          letter-spacing: -0.5px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
          margin-left: -10px;
          padding-left: 0;
        }

        .header-brand::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          background: var(--primary-gradient);
          border-radius: 15px;
          opacity: 0;
          z-index: -1;
          transition: opacity 0.3s ease;
          filter: blur(10px);
        }

        .header-brand:hover::before {
          opacity: 0.2;
        }

        .header-brand i {
          background: var(--secondary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: 40px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .header-nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-decoration: none;
          padding: 12px 0;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
        }

        .header-nav-link:hover {
          color: var(--accent-color);
          transform: translateY(-3px);
          text-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .header-nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--primary-gradient);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateX(-50%);
        }

        .header-nav-link:hover::before {
          width: 100%;
        }

        .header-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--secondary-gradient);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateX(-50%);
          transition-delay: 0.1s;
        }

        .header-nav-link:hover::after {
          width: 100%;
        }

        .header-toggler {
          display: none;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 15px;
          padding: 12px;
          font-size: 1.3rem;
          color: var(--accent-color);
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .header-toggler:hover {
          background: var(--glass-border);
          transform: scale(1.05);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 10px;
          width: 100%;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .header-inner img{
          width: 50px;
          height:auto;
        }

        .header-collapse {
          display: flex;
          align-items: center;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(26, 26, 46, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--glass-border);
          padding: 30px;
          transform: translateY(-20px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: var(--shadow-dark);
        }

        .mobile-menu.show {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav {
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .mobile-nav .header-nav-link {
          font-size: 1.1rem;
          padding: 15px 0;
          border-bottom: 1px solid var(--glass-border);
          width: 100%;
          text-align: center;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-elements::before,
        .floating-elements::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          background: var(--accent-color);
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .floating-elements::before {
          top: 20%;
          left: 10%;
          animation-delay: -2s;
        }

        .floating-elements::after {
          top: 60%;
          right: 15%;
          animation-delay: -4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @media (max-width: 768px) {
          .header-toggler {
            display: block;
          }

          .header-nav {
            display: none;
          }

          .header-collapse {
            gap: 20px;
          }

          .header-brand {
            font-size: 1.5rem;
          }
        }
            @media (max-width: 480px) {
          .header-navbar {
            padding: ${H?"6px 0":"10px 0"};
          }
          
          .header-brand {
            font-size: ${H?"1.2rem":"1.3rem"};
          }
          
          .header-container {
            padding: 0 20px;
          }
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: -2px;
          left: 0;
          height: 2px;
          background: var(--primary-gradient);
          transition: width 0.3s ease;
          width: ${H?"100%":"0%"};
        }
      `}),c.jsxs("nav",{className:"header-navbar",children:[c.jsx("div",{className:"floating-elements"}),c.jsx("div",{className:"scroll-indicator"}),c.jsx("div",{className:"header-container",children:c.jsxs("div",{className:"header-inner",children:[c.jsxs("a",{href:"#home",className:"header-brand",onClick:k=>V(k,"home"),children:[c.jsx("img",{src:"/src/assets/logo.svg",alt:""}),"IDEAL CONSULTANTS & DEVELOPERS"]}),c.jsx("button",{className:"header-toggler",onClick:()=>de(!E),"aria-label":"Toggle navigation",children:c.jsx("i",{className:`fas ${E?"fa-times":"fa-bars"}`})}),c.jsx("div",{className:"header-collapse d-none d-md-flex",children:c.jsxs("nav",{className:"header-nav",children:[c.jsx("a",{className:"header-nav-link",onClick:k=>V(k,"home"),children:"Home"}),c.jsx("a",{className:"header-nav-link",onClick:k=>V(k,"about"),children:"About"}),c.jsx("a",{className:"header-nav-link",onClick:k=>V(k,"services"),children:"Services"}),c.jsx("a",{className:"header-nav-link",onClick:k=>V(k,"projects"),children:"Projects"}),c.jsx("a",{className:"header-nav-link",onClick:k=>V(k,"team"),children:"Team"}),c.jsx("a",{className:"header-nav-link",onClick:k=>V(k,"contact"),children:"Contact"})]})})]})}),c.jsx("div",{className:`mobile-menu d-md-none ${E?"show":""}`,children:c.jsxs("nav",{className:"header-nav mobile-nav",children:[c.jsxs("a",{className:"header-nav-link",onClick:k=>V(k,"home"),children:[c.jsx("i",{className:"fas fa-home me-2"}),"Home"]}),c.jsxs("a",{className:"header-nav-link",onClick:k=>V(k,"about"),children:[c.jsx("i",{className:"fas fa-info-circle me-2"}),"About"]}),c.jsxs("a",{className:"header-nav-link",onClick:k=>V(k,"services"),children:[c.jsx("i",{className:"fas fa-cogs me-2"}),"Services"]}),c.jsxs("a",{className:"header-nav-link",onClick:k=>V(k,"projects"),children:[c.jsx("i",{className:"fas fa-project-diagram me-2"}),"Projects"]}),c.jsxs("a",{className:"header-nav-link",onClick:k=>V(k,"team"),children:[c.jsx("i",{className:"fas fa-users me-2"}),"Team"]}),c.jsxs("a",{className:"header-nav-link",onClick:k=>V(k,"contact"),children:[c.jsx("i",{className:"fas fa-envelope me-2"}),"Contact"]})]})})]})]})},qh=()=>{const[E,de]=be.useState({x:0,y:0}),[H,y]=be.useState(!1),[V,k]=be.useState(0),[te,ve]=be.useState(0),U=be.useRef(null),[A,Y]=be.useState({projects:0,clients:0,years:0,awards:0});be.useEffect(()=>{y(!0);const z=P=>{de({x:P.clientX/window.innerWidth*100,y:P.clientY/window.innerHeight*100})},L=()=>{k(window.scrollY)};window.addEventListener("mousemove",z),window.addEventListener("scroll",L);const W=setInterval(()=>{ve(P=>(P+1)%3)},4e3);return()=>{window.removeEventListener("mousemove",z),window.removeEventListener("scroll",L),clearInterval(W)}},[]),be.useEffect(()=>{const z=setTimeout(()=>y(!0),100),W=setTimeout(()=>{const ne={projects:500,clients:250,years:20,awards:15},_e=3e3,Se=100;let Ye=0;const yt=setInterval(()=>{Ye++;const Te=Ye/Se,it=1-Math.pow(1-Te,4);Y({projects:Math.floor(ne.projects*it),clients:Math.floor(ne.clients*it),years:Math.floor(ne.years*it),awards:Math.floor(ne.awards*it)}),Ye>=Se&&clearInterval(yt)},_e/Se)},1500),P=ne=>{const _e=sectionRef.current?.getBoundingClientRect();if(_e){const Se=(ne.clientX-_e.left)/_e.width,Ye=(ne.clientY-_e.top)/_e.height;de({x:Se,y:Ye})}};return document.addEventListener("mousemove",P),()=>{clearTimeout(z),clearTimeout(W),document.removeEventListener("mousemove",P)}},[]);const me=[{number:A.projects,label:"Projects Completed",icon:"fas fa-building",suffix:"+",color:"#667eea"},{number:A.clients,label:"Happy Clients",icon:"fas fa-users",suffix:"+",color:"#f093fb"},{number:A.years,label:"Years Experience",icon:"fas fa-calendar-alt",suffix:"+",color:"#4facfe"}];return c.jsxs(c.Fragment,{children:[c.jsxs("style",{jsx:!0,children:[`
.stats-grid {
  display: grid !important;
  /* grid-template-columns: 1fr 1fr;  */
  gap: 30px;
  margin-bottom: 100px;
  width: 100%;
  max-width: 100%; /* Prevents bootstrap overflow */
  box-sizing: border-box;
  /* transform: translateY(0); */
  opacity: 1;
  transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s;
}


.stat-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 40px 50px;
  text-align: center;
  position: relative;
  width: 200px;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  margin-top:100px;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.1), 
    transparent);
  transition: left 0.8s;
}

.stat-card:hover::before {
  left: 100%;
}

.stat-card:hover {
  transform: translateY(-20px) scale(1.05);
  border-color: var(--card-color);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
}

.stat-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--card-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 1.8rem;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.stat-card:hover .stat-icon {
  transform: rotateY(360deg) scale(1.1);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 15px;
  line-height: 1;
  background: linear-gradient(135deg, var(--card-color), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .stats-grid {
    gap: 20px;
    margin-bottom: 80px;
  }
  
  .stat-card {
    padding: 30px 20px;
  }
  
  .stat-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 8px !important; /* reduced vertical gap */
    padding:50px;

  }

  .stat-card {
    margin: 20px 16px !important; /* tighter padding inside card */
  }

  .stat-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    margin-bottom: 10px !important; /* reduce bottom space below icon */
  }

  .stat-number {
    font-size: 2rem;
    margin-bottom: 5px !important;
  }

  .stat-label {
    font-size: 0.85rem;
  }
}



/* Animation classes */
.stats-grid.animate-in {
  transform: translateY(0);
  opacity: 1;
}

.stats-grid.animate-out {
  transform: translateY(80px);
  opacity: 0;
}    `," "]}),c.jsxs("div",{ref:U,className:"position-relative overflow-hidden",style:{minHeight:"100vh",background:"radial-gradient(ellipse at top left, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",overflowX:"hidden"},children:[c.jsxs("div",{className:"position-absolute w-100 h-100",style:{zIndex:1},children:[c.jsx("div",{className:"position-absolute rounded-circle",style:{width:"1000px",height:"1000px",background:`radial-gradient(circle, rgba(102, 126, 234, ${.08+Math.sin(Date.now()/2e3)*.03}) 0%, transparent 70%)`,left:`${E.x-50}%`,top:`${E.y-50}%`,transform:`translate(-50%, -50%) scale(${1+Math.sin(Date.now()/1e3)*.1})`,transition:"all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",filter:"blur(100px)",animation:"morphingGlow 8s ease-in-out infinite"}}),[...Array(12)].map((z,L)=>c.jsx("div",{className:"position-absolute",style:{width:`${Math.random()*60+20}px`,height:`${Math.random()*60+20}px`,background:`linear-gradient(${Math.random()*360}deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1))`,borderRadius:Math.random()>.5?"50%":"20%",top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animation:`floatComplex ${8+Math.random()*10}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`,filter:"blur(2px)",transform:`rotate(${Math.random()*360}deg)`}},L)),c.jsx("div",{className:"position-absolute w-100 h-100 opacity-25",style:{backgroundImage:`
              linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)
            `,backgroundSize:"50px 50px",animation:"gridMove 20s linear infinite"}})]}),c.jsx("div",{className:"container-fluid h-100 position-relative",style:{zIndex:2},children:c.jsxs("div",{className:"row min-vh-100 align-items-center py-0 py-md-5",children:[c.jsx("div",{className:"col-lg-6 col-md-12 pe-lg-5 px-3 px-md-4",style:{paddingTop:"6rem"},children:c.jsxs("div",{className:`${H?"animate-slideInLeft":"opacity-0"}`,children:[c.jsxs("h1",{className:"fw-bold mb-3 mb-md-4",style:{background:"linear-gradient(135deg, #ffffff 0%, #667eea 50%, #f093fb 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"textShimmer 4s ease-in-out infinite",textShadow:"0 0 30px rgba(102, 126, 234, 0.3)",fontSize:"clamp(1.8rem, 8vw, 4rem)",lineHeight:"1.1"},children:["Building Dreams",c.jsx("br",{}),c.jsxs("span",{className:"position-relative d-inline-block mt-2",style:{background:"linear-gradient(135deg,#d9d9d9  0%, #404040 50% ,#bb3f3f,100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:["Into Reality",c.jsx("div",{className:"position-absolute bottom-0 start-0",style:{width:"100%",height:"3px",background:"linear-gradient(135deg, #f093fb, #4facfe)",borderRadius:"2px",animation:"underlineExpand 2s ease-out"}})]})]}),c.jsx("p",{className:"mb-4 text-light opacity-75",style:{fontSize:"clamp(1rem, 3vw, 1.25rem)",lineHeight:"1.7",maxWidth:"500px",animation:"fadeInUp 1s ease-out 0.5s both"},children:"Transform your vision into extraordinary structures with our cutting-edge construction solutions and unparalleled craftsmanship."}),c.jsxs("div",{className:"d-flex flex-column flex-sm-row gap-3",style:{animation:"fadeInUp 1s ease-out 0.9s both"},children:[c.jsxs("button",{className:"btn px-4 px-lg-5 py-2 py-lg-3 rounded-pill fw-semibold position-relative overflow-hidden",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",border:"none",color:"white",textTransform:"uppercase",letterSpacing:"1px",boxShadow:"0 15px 35px rgba(102, 126, 234, 0.4)",transition:"all 0.4s ease",fontSize:"clamp(0.9rem, 2vw, 1rem)"},onMouseEnter:z=>{z.target.style.transform="translateY(-3px) scale(1.05)",z.target.style.boxShadow="0 20px 40px rgba(102, 126, 234, 0.6)"},onMouseLeave:z=>{z.target.style.transform="translateY(0) scale(1)",z.target.style.boxShadow="0 15px 35px rgba(102, 126, 234, 0.4)"},children:[c.jsx("span",{className:"me-2",children:"🚀"}),"Start Your Project",c.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3), transparent 70%)",transform:"translateX(-100%)",animation:"shimmer 3s ease-in-out infinite"}})]}),c.jsxs("button",{className:"btn px-4 px-lg-5 py-2 py-lg-3 rounded-pill fw-semibold",style:{background:"transparent",border:"2px solid rgba(240, 147, 251, 0.5)",color:"white",textTransform:"uppercase",letterSpacing:"1px",backdropFilter:"blur(10px)",transition:"all 0.4s ease",fontSize:"clamp(0.9rem, 2vw, 1rem)"},onMouseEnter:z=>{z.target.style.background="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",z.target.style.borderColor="transparent",z.target.style.transform="translateY(-3px) scale(1.05)",z.target.style.boxShadow="0 15px 35px rgba(240, 147, 251, 0.4)"},onMouseLeave:z=>{z.target.style.background="transparent",z.target.style.borderColor="rgba(240, 147, 251, 0.5)",z.target.style.transform="translateY(0) scale(1)",z.target.style.boxShadow="none"},children:[c.jsx("span",{className:"me-2",children:"📞"}),"Get Consultation"]})]})]})}),c.jsx("div",{className:"col-lg-6 col-md-12 mt-4 mt-lg-0 px-3 px-md-4",children:c.jsx("div",{className:`${H?"animate-slideInRight":"opacity-0"}`,children:c.jsx("div",{className:"stats-wrapper",children:c.jsx("div",{className:"stats-grid",children:me.map((z,L)=>c.jsxs("div",{className:"stat-card",style:{"--card-color":z.color},children:[c.jsx("div",{className:"stat-icon",children:c.jsx("i",{className:z.icon})}),c.jsxs("div",{className:"stat-number",children:[z.number,z.suffix]}),c.jsx("div",{className:"stat-label",children:z.label})]},L))})})})})]})}),c.jsx("style",{jsx:!0,children:`
        @keyframes morphingGlow {
          0%, 100% { 
            filter: blur(100px) hue-rotate(0deg); 
            transform: scale(1); 
          }
          25% { 
            filter: blur(80px) hue-rotate(90deg); 
            transform: scale(1.1); 
          }
          50% { 
            filter: blur(120px) hue-rotate(180deg); 
            transform: scale(0.9); 
          }
          75% { 
            filter: blur(90px) hue-rotate(270deg); 
            transform: scale(1.05); 
          }
        }

        @keyframes floatComplex {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-20px) rotate(90deg) scale(1.1); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-10px) rotate(180deg) scale(0.9); 
            opacity: 0.5; 
          }
          75% { 
            transform: translateY(-30px) rotate(270deg) scale(1.05); 
            opacity: 0.8; 
          }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes textShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes underlineExpand {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }

        @keyframes cardFloat {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulseGlow {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.7; 
          }
          50% { 
            transform: scale(1.2); 
            opacity: 0.3; 
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 1s ease-out;
        }

        @keyframes slideInLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-50px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slideInRight {
          0% { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          100% { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `})]})]})},Xh=()=>{const[E,de]=be.useState(!1),[H,y]=be.useState({x:0,y:0}),[V,k]=be.useState({projects:0,clients:0,years:0,awards:0}),te=be.useRef(null);be.useEffect(()=>{const U=setTimeout(()=>de(!0),100),Y=setTimeout(()=>{const z={projects:500,clients:250,years:20,awards:15},L=3e3,W=100;let P=0;const ne=setInterval(()=>{P++;const _e=P/W,Se=1-Math.pow(1-_e,4);k({projects:Math.floor(z.projects*Se),clients:Math.floor(z.clients*Se),years:Math.floor(z.years*Se),awards:Math.floor(z.awards*Se)}),P>=W&&clearInterval(ne)},L/W)},1500),me=z=>{const L=te.current?.getBoundingClientRect();if(L){const W=(z.clientX-L.left)/L.width,P=(z.clientY-L.top)/L.height;y({x:W,y:P})}};return document.addEventListener("mousemove",me),()=>{clearTimeout(U),clearTimeout(Y),document.removeEventListener("mousemove",me)}},[]);const ve=[{icon:"fas fa-award",title:"Quality First",description:"We never compromise on quality. Every project meets the highest standards with meticulous attention to detail.",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",glowColor:"#667eea"},{icon:"fas fa-rocket",title:"Innovation",description:"Cutting-edge technology and modern techniques to deliver exceptional results.",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",glowColor:"#f093fb"},{icon:"fas fa-shield-alt",title:"Safety Priority",description:"Comprehensive safety protocols ensuring zero-accident work environments.",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",glowColor:"#4facfe"},{icon:"fas fa-handshake",title:"Client Trust",description:"Building lasting relationships through transparency, reliability, and excellence.",gradient:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",glowColor:"#43e97b"}];return V.projects,V.clients,V.years,V.awards,c.jsxs(c.Fragment,{children:[c.jsx("style",{jsx:!0,children:`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        
        <link 
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
  rel="stylesheet" 
/>
<link 
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
  rel="stylesheet" 
/>
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .about-section {
          min-height: 100vh;
          padding: 120px 0;
          background: #0a0a0f;
          position: relative;
          overflow: hidden;
        }

        /* Advanced Background Effects */
        .bg-effects {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .neural-network {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.1;
        }

        .neural-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #667eea;
          border-radius: 50%;
          animation: pulse 3s infinite ease-in-out;
        }

        .neural-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, #667eea, transparent);
          animation: flow 4s infinite ease-in-out;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          animation: float 8s infinite ease-in-out;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.1), transparent);
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(240, 147, 251, 0.1), transparent);
          top: 60%;
          right: -5%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(79, 172, 254, 0.1), transparent);
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        /* Parallax Mouse Effect */
        .parallax-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: translate3d(${H.x*10}px, ${H.y*10}px, 0);
          transition: transform 0.1s ease-out;
        }

        /* Content Wrapper */
        .content-wrapper {
          position: relative;
          z-index: 2;
        }

        /* Hero Title */
        .hero-title {
          text-align: center;
          margin-bottom: 100px;
          transform: ${E?"translateY(0)":"translateY(100px)"};
          opacity: ${E?"1":"0"};
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-title h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #667eea 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 30px;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 800px;
          margin: 0 auto;
          font-weight: 400;
          line-height: 1.6;
        }

        .glitch-effect {
          position: relative;
          display: inline-block;
        }

        .glitch-effect::before,
        .glitch-effect::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-effect::before {
          animation: glitch-1 2s infinite;
          color: #667eea;
          z-index: -1;
        }

        .glitch-effect::after {
          animation: glitch-2 2s infinite;
          color: #f093fb;
          z-index: -2;
        }

        /* Main Content Grid */
        .main-content {
          transform: ${E?"translateY(0)":"translateY(80px)"};
          opacity: ${E?"1":"0"};
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
          margin-bottom: 120px;
        }

        .content-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 60px;
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .content-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transform: translateX(-100%);
          animation: shimmer 3s infinite;
        }

        .content-card:hover {
          transform: translateY(-20px);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
        }

        .content-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 30px;
          position: relative;
        }

        .content-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #667eea, #f093fb);
          border-radius: 2px;
        }

        .content-text {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .feature-list {
          list-style: none;
          padding: 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          padding: 15px 0;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
          transform: translateX(-30px);
          opacity: 0;
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .feature-item:nth-child(1) { animation-delay: 1s; }
        .feature-item:nth-child(2) { animation-delay: 1.2s; }
        .feature-item:nth-child(3) { animation-delay: 1.4s; }
        .feature-item:nth-child(4) { animation-delay: 1.6s; }

        .feature-icon {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #43e97b, #38f9d7);
          margin-right: 20px;
          position: relative;
          box-shadow: 0 0 20px rgba(67, 233, 123, 0.5);
        }

        .feature-icon::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border: 2px solid rgba(67, 233, 123, 0.3);
          border-radius: 50%;
          animation: ping 2s infinite;
        }

        /* 3D Image Container */
        .image-container {
          position: relative;
          perspective: 1000px;
          transform-style: preserve-3d;
        }

        .hero-image {
          width: 100%;
          height: 500px;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          transform: rotateY(0deg) rotateX(0deg);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .hero-image:hover {
          transform: rotateY(5deg) rotateX(5deg) translateZ(20px);
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-image:hover img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.1) 0%, 
            rgba(240, 147, 251, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .hero-image:hover .image-overlay {
          opacity: 1;
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-bottom: 120px;
          transform: ${E?"translateY(0)":"translateY(80px)"};
          opacity: ${E?"1":"0"};
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 25px;
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.1), 
            transparent);
          transition: left 0.8s;
        }

        .stat-card:hover::before {
          left: 100%;
        }

        .stat-card:hover {
          transform: translateY(-20px) scale(1.05);
          border-color: var(--card-color);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .stat-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--card-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          font-size: 1.8rem;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .stat-card:hover .stat-icon {
          transform: rotateY(360deg) scale(1.1);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 15px;
          line-height: 1;
          background: linear-gradient(135deg, var(--card-color), #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Values Grid */
        .values-section {
          transform: ${E?"translateY(0)":"translateY(80px)"};
          opacity: ${E?"1":"0"};
          transition: all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.9s;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 50px 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--card-gradient);
          transform: scaleX(0);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .value-card:hover::before {
          transform: scaleX(1);
        }

        .value-card:hover {
          transform: translateY(-15px) rotateX(5deg);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
        }

        .value-icon {
          width: 100px;
          height: 100px;
          border-radius: 25px;
          background: var(--card-gradient);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 30px;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 40px var(--glow-color);
        }

        .value-card:hover .value-icon {
          transform: rotateY(360deg) scale(1.1);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 60px var(--glow-color);
        }

        .value-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .value-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-weight: 400;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.2);
          }
        }

        @keyframes flow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slideInLeft {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes glitch-1 {
          0%, 14%, 15%, 49%, 50%, 99%, 100% {
            transform: translate(0);
          }
          15%, 49% {
            transform: translate(-2px, 0);
          }
        }

        @keyframes glitch-2 {
          0%, 20%, 21%, 62%, 63%, 99%, 100% {
            transform: translate(0);
          }
          21%, 62% {
            transform: translate(2px, 0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 992px) {
          .hero-title h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          
          .content-card {
            padding: 40px 30px;
          }
          
          .hero-image {
            height: 400px;
            margin-bottom: 40px;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 80px 0;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .content-card {
            padding: 30px 25px;
          }
          
          .value-card {
            padding: 35px 25px;
          }
          
          .hero-image {
            height: 300px;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            margin-bottom: 60px;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .stat-number {
            font-size: 2.5rem;
          }
          
          .content-title {
            font-size: 2rem;
          }
        }
      `}),c.jsxs("section",{className:"about-section",ref:te,children:[c.jsxs("div",{className:"bg-effects",children:[c.jsxs("div",{className:"parallax-layer",children:[c.jsx("div",{className:"floating-orb orb-1"}),c.jsx("div",{className:"floating-orb orb-2"}),c.jsx("div",{className:"floating-orb orb-3"})]}),c.jsxs("div",{className:"neural-network",children:[[...Array(20)].map((U,A)=>c.jsx("div",{className:"neural-dot",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`}},A)),[...Array(10)].map((U,A)=>c.jsx("div",{className:"neural-line",style:{left:`${Math.random()*80}%`,top:`${Math.random()*100}%`,width:`${20+Math.random()*200}px`,animationDelay:`${Math.random()*4}s`}},A))]})]}),c.jsxs("div",{className:"container content-wrapper",children:[c.jsxs("div",{className:"hero-title",children:[c.jsx("h1",{className:"glitch-effect","data-text":"About BuildCorp",children:"About BuildCorp"}),c.jsx("p",{className:"hero-subtitle",children:"We are a leading construction company committed to excellence, innovation, and delivering exceptional results that exceed expectations."})]}),c.jsxs("div",{className:"row main-content align-items-center",children:[c.jsx("div",{className:"col-lg-6",children:c.jsx("div",{className:"image-container",children:c.jsxs("div",{className:"hero-image",children:[c.jsx("img",{src:"/src\\assets\\about-img.jpg",alt:"Professional Construction Team"}),c.jsx("div",{className:"image-overlay"})]})})}),c.jsx("div",{className:"col-lg-6",children:c.jsxs("div",{className:"content-card",children:[c.jsx("h2",{className:"content-title",children:"Two Decades of Excellence"}),c.jsx("p",{className:"content-text",children:"Founded in 2003, BuildCorp has grown from a small local contractor to a trusted name in construction. We specialize in residential, commercial, and industrial projects, bringing innovation and craftsmanship to every build."}),c.jsx("p",{className:"content-text",children:"Our team of skilled professionals is dedicated to turning your vision into reality while maintaining the highest standards of quality, safety, and customer service."}),c.jsxs("ul",{className:"feature-list",children:[c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"feature-icon"}),"Licensed & Insured Professionals"]}),c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"feature-icon"}),"24/7 Support & Emergency Response"]}),c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"feature-icon"}),"Certified Quality Management"]}),c.jsxs("li",{className:"feature-item",children:[c.jsx("div",{className:"feature-icon"}),"Lifetime Warranty Coverage"]})]})]})})]}),c.jsx("div",{className:"values-section",children:c.jsx("div",{className:"values-grid",children:ve.map((U,A)=>c.jsxs("div",{className:"value-card",style:{"--card-gradient":U.gradient,"--glow-color":U.glowColor+"30"},children:[c.jsx("div",{className:"value-icon",children:c.jsx("i",{className:U.icon})}),c.jsx("h3",{className:"value-title",children:U.title}),c.jsx("p",{className:"value-description",children:U.description})]},A))})})]})]})]})},Gh="/assets/services1-C7Yrj11s.jpg",Qh="/assets/services2-BlX4lKm2.jpg",Vh="/assets/services3-vfH8w_qg.jpg",Zh=()=>{const[E,de]=be.useState(!1),[H,y]=be.useState({x:0,y:0}),[V,k]=be.useState(null),[te,ve]=be.useState([]),U=be.useRef(null),A=be.useRef(null),Y=be.useRef(null);be.useEffect(()=>{const L=setTimeout(()=>de(!0),200),W=[];for(let ne=0;ne<50;ne++)W.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:Math.random()*3+1,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5,opacity:Math.random()*.5+.1});ve(W);const P=ne=>{const _e=U.current?.getBoundingClientRect();if(_e){const Se=(ne.clientX-_e.left)/_e.width,Ye=(ne.clientY-_e.top)/_e.height;y({x:Se,y:Ye})}};return document.addEventListener("mousemove",P),()=>{clearTimeout(L),document.removeEventListener("mousemove",P),Y.current&&cancelAnimationFrame(Y.current)}},[]);const me=be.useCallback(()=>{const L=A.current;if(!L)return;const W=L.getContext("2d");L.width=window.innerWidth,L.height=window.innerHeight,W.clearRect(0,0,L.width,L.height),te.forEach((P,ne)=>{P.x+=P.speedX,P.y+=P.speedY,P.x>L.width&&(P.x=0),P.x<0&&(P.x=L.width),P.y>L.height&&(P.y=0),P.y<0&&(P.y=L.height),W.beginPath(),W.arc(P.x,P.y,P.size,0,Math.PI*2),W.fillStyle=`rgba(102, 126, 234, ${P.opacity})`,W.fill(),te.forEach((_e,Se)=>{if(ne!==Se){const Ye=Math.sqrt(Math.pow(P.x-_e.x,2)+Math.pow(P.y-_e.y,2));Ye<100&&(W.beginPath(),W.moveTo(P.x,P.y),W.lineTo(_e.x,_e.y),W.strokeStyle=`rgba(102, 126, 234, ${.1*(1-Ye/100)})`,W.lineWidth=.5,W.stroke())}})}),Y.current=requestAnimationFrame(me)},[te]);be.useEffect(()=>{te.length>0&&me()},[te,me]);const z=[{icon:"fas fa-home",title:"Residential Construction",description:"Custom homes, luxury estates, and residential developments crafted with precision and attention to every detail.",image:Gh,glowColor:"#667eea",features:["Smart Home Integration","Eco-Friendly Materials","Custom Architecture","Premium Finishes"],stats:{projects:"150+",satisfaction:"99%"}},{icon:"fas fa-building",title:"Commercial Construction",description:"Modern office buildings, retail spaces, and commercial complexes built to meet your business specifications.",image:Qh,gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",glowColor:"#f093fb",features:["Modern Architecture","Energy Efficient","Smart Building Tech","Flexible Spaces"],stats:{projects:"200+",satisfaction:"98%"}},{icon:"fas fa-industry",title:"Industrial Projects",description:"Heavy-duty warehouses, manufacturing facilities, and industrial complexes with specialized engineering.",image:Vh,gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",glowColor:"#4facfe",features:["Heavy Machinery Support","Safety Compliance","Efficient Logistics","Scalable Design"],stats:{projects:"75+",satisfaction:"97%"}}];return c.jsxs(c.Fragment,{children:[c.jsx("style",{jsx:!0,children:`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
        
        * {
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .services-section {
          min-height: 100vh;
          padding: 120px 0;
          background: #0a0a0f;
          position: relative;
          overflow: hidden;
        }

        /* Particle Canvas */
        .particle-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          opacity: 0.3;
        }

        /* Advanced Background Effects */
        .bg-effects {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: morphOrb 12s infinite ease-in-out;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent);
          top: -10%;
          left: -10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(240, 147, 251, 0.12), transparent);
          top: 50%;
          right: -5%;
          animation-delay: 4s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(79, 172, 254, 0.1), transparent);
          bottom: 10%;
          left: 30%;
          animation-delay: 8s;
        }

        /* Grid Pattern Background */
        .grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridPulse 4s infinite ease-in-out;
        }

        /* Parallax Mouse Effect */
        .parallax-layer {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: translate3d(${H.x*15}px, ${H.y*15}px, 0);
          transition: transform 0.1s ease-out;
        }

        /* Content Wrapper */
        .content-wrapper {
          position: relative;
          z-index: 2;
        }

        /* Hero Section */
        .hero-header {
          text-align: center;
          margin-bottom: 120px;
          transform: ${E?"translateY(0)":"translateY(100px)"};
          opacity: ${E?"1":"0"};
          transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-header h1 {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, #667eea 30%, #f093fb 70%, #ffffff 100%);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 6s ease-in-out infinite;
          margin-bottom: 30px;
          line-height: 1.1;
          letter-spacing: -2px;
          position: relative;
        }

        .hero-header h1::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          width: 120px;
          height: 6px;
          background: linear-gradient(135deg, #667eea, #f093fb);
          transform: translateX(-50%);
          border-radius: 3px;
          animation: pulseGlow 3s infinite;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 900px;
          margin: 0 auto;
          font-weight: 400;
          line-height: 1.7;
          animation: fadeInUp 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          transform: ${E?"translateY(0)":"translateY(80px)"};
          opacity: ${E?"1":"0"};
          transition: all 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          transform-style: preserve-3d;
          perspective: 1000px;
          height: 100%;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--card-gradient);
          transform: scaleX(0);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 3;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          transform: translateY(-30px) rotateX(5deg) rotateY(3deg);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 50px 100px rgba(0, 0, 0, 0.4),
            0 0 80px var(--glow-color);
        }

        /* Card Content */
        .card-header {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
          filter: brightness(0.7) contrast(1.2) saturate(1.1);
        }

        .service-card:hover .card-image {
          transform: scale(1.2) rotate(3deg);
          filter: brightness(1) contrast(1.3) saturate(1.3);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.6) 0%, 
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.8) 100%);
          transition: all 0.8s ease;
        }

        .service-card:hover .image-overlay {
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.2) 0%, 
            rgba(0, 0, 0, 0.1) 50%,
            rgba(0, 0, 0, 0.4) 100%);
        }

        .floating-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: var(--card-gradient);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: white;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 60px var(--glow-color);
          z-index: 2;
        }

        .service-card:hover .floating-icon {
          transform: translate(-50%, -50%) scale(1.2) rotateY(360deg);
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 100px var(--glow-color);
        }

        .card-stats {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 2;
        }

        .stat-badge {
          background: rgba(255, 255, 255, 0.9);
          color: #0a0a0f;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          backdrop-filter: blur(10px);
          transform: translateX(100px);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card:hover .stat-badge {
          transform: translateX(0);
          opacity: 1;
        }

        .stat-badge:nth-child(1) { transition-delay: 0.1s; }
        .stat-badge:nth-child(2) { transition-delay: 0.2s; }

        .card-body {
          padding: 40px 30px;
          position: relative;
        }

        .card-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.2;
          transition: all 0.6s ease;
        }

        .service-card:hover .card-title {
          color: var(--glow-color);
          text-shadow: 0 0 20px var(--glow-color);
        }

        .card-description {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 30px;
          transition: all 0.6s ease;
        }

        .service-card:hover .card-description {
          color: rgba(255, 255, 255, 0.95);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 25px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateY(20px);
          opacity: 0;
        }

        .service-card:hover .feature-item {
          transform: translateY(0);
          opacity: 1;
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .feature-item:nth-child(1) { transition-delay: 0.1s; }
        .feature-item:nth-child(2) { transition-delay: 0.2s; }
        .feature-item:nth-child(3) { transition-delay: 0.3s; }
        .feature-item:nth-child(4) { transition-delay: 0.4s; }

        .feature-item i {
          color: var(--glow-color);
          margin-right: 10px;
          font-size: 0.8rem;
          filter: drop-shadow(0 0 5px var(--glow-color));
        }

        .feature-item:hover {
          transform: translateY(-3px) scale(1.02);
          background: rgba(255, 255, 255, 0.15);
        }

        /* Card Number */
        .card-number {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 50px;
          height: 50px;
          background: var(--card-gradient);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 900;
          font-size: 1.3rem;
          z-index: 2;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .service-card:hover .card-number {
          transform: scale(1.1) rotate(360deg);
          box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.4),
            0 0 30px var(--glow-color);
        }

        /* Morphing Animation */
        .morphing-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--card-gradient);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 30px;
        }

        .service-card:hover .morphing-bg {
          opacity: 0.05;
          transform: scale(1.02);
        }

        /* Animations */
        @keyframes morphOrb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            border-radius: 50%;
          }
          25% {
            transform: translate(50px, -30px) scale(1.2);
            border-radius: 60% 40% 50% 70%;
          }
          50% {
            transform: translate(-30px, 40px) scale(0.8);
            border-radius: 70% 30% 60% 40%;
          }
          75% {
            transform: translate(30px, 20px) scale(1.1);
            border-radius: 40% 60% 70% 30%;
          }
        }

        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.1;
          }
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
            transform: translateX(-50%) scale(1);
          }
          50% {
            box-shadow: 0 0 40px rgba(240, 147, 251, 0.8);
            transform: translateX(-50%) scale(1.1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 35px;
          }
        }

        @media (max-width: 992px) {
          .services-section {
            padding: 80px 0;
          }

          .hero-header {
            margin-bottom: 80px;
          }

          .hero-header h1 {
            font-size: clamp(2.5rem, 6vw, 4rem);
          }

          .services-grid {
            gap: 30px;
          }

          .card-header {
            height: 250px;
          }

          .floating-icon {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .card-body {
            padding: 30px 25px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .card-stats {
            top: 15px;
            right: 15px;
            gap: 8px;
          }

          .card-number {
            width: 40px;
            height: 40px;
            font-size: 1.1rem;
          }
        }

        @media (max-width: 576px) {
          .services-section {
            padding: 60px 0;
          }

          .hero-header {
            margin-bottom: 60px;
          }

          .hero-subtitle {
            font-size: 1.1rem;
          }

          .card-header {
            height: 200px;
          }

          .floating-icon {
            width: 70px;
            height: 70px;
            font-size: 1.8rem;
          }

          .card-title {
            font-size: 1.5rem;
          }
        }
      `}),c.jsxs("section",{className:"services-section",ref:U,children:[c.jsx("canvas",{ref:A,className:"particle-canvas"}),c.jsxs("div",{className:"bg-effects",children:[c.jsx("div",{className:"grid-pattern"}),c.jsxs("div",{className:"parallax-layer",children:[c.jsx("div",{className:"gradient-orb orb-1"}),c.jsx("div",{className:"gradient-orb orb-2"}),c.jsx("div",{className:"gradient-orb orb-3"})]})]}),c.jsxs("div",{className:"container content-wrapper",children:[c.jsxs("div",{className:"hero-header",children:[c.jsx("h1",{children:"Our Premium Services"}),c.jsx("p",{className:"hero-subtitle",children:"Comprehensive construction solutions tailored to exceed your expectations, from innovative design concepts to flawless execution with cutting-edge technology."})]}),c.jsx("div",{className:"services-grid",children:z.map((L,W)=>c.jsxs("div",{className:"service-card",style:{"--card-gradient":L.gradient,"--glow-color":L.glowColor+"50"},onMouseEnter:()=>k(W),onMouseLeave:()=>k(null),children:[c.jsx("div",{className:"morphing-bg"}),c.jsx("div",{className:"card-number",children:String(W+1).padStart(2,"0")}),c.jsxs("div",{className:"card-header",children:[c.jsx("img",{src:L.image,alt:L.title,className:"card-image"}),c.jsx("div",{className:"image-overlay"}),c.jsx("div",{className:"floating-icon",children:c.jsx("i",{className:L.icon})}),c.jsxs("div",{className:"card-stats",children:[c.jsxs("div",{className:"stat-badge",children:[L.stats.projects," Projects"]}),c.jsxs("div",{className:"stat-badge",children:[L.stats.satisfaction," Satisfaction"]})]})]}),c.jsxs("div",{className:"card-body",children:[c.jsx("h3",{className:"card-title",children:L.title}),c.jsx("p",{className:"card-description",children:L.description}),c.jsx("div",{className:"features-grid",children:L.features.map((P,ne)=>c.jsxs("div",{className:"feature-item",children:[c.jsx("i",{className:"fas fa-check-circle"}),P]},ne))})]})]},W))})]})]})]})},Kh="/assets/project1-BTrnSUE3.jpg",$h="/assets/project2-CMJM7lgu.jpg",Jh="/assets/project3-DlwjuAX-.jpg",Wh="/assets/project4-BUJUf364.jpg",Fh=()=>{const[E,de]=be.useState("all"),H=[{id:1,title:"Luxury Residential Complex",category:"residential",image:Kh,description:"Modern 50-unit residential complex with premium amenities and sustainable design.",technologies:["Architecture","Interior Design","Landscaping"],duration:"18 months",status:"Completed",budget:"$2.5M",year:"2024"},{id:2,title:"Smart Corporate Headquarters",category:"commercial",image:$h,description:"20-story intelligent office building with IoT integration and green technology.",technologies:["Smart Systems","IoT","Green Tech"],duration:"24 months",status:"Completed",budget:"$8.2M",year:"2023"},{id:3,title:"Advanced Manufacturing Hub",category:"industrial",image:Jh,description:"100,000 sq ft facility with AI-powered automation and robotic systems.",technologies:["Automation","Robotics","AI Systems"],duration:"15 months",status:"In Progress",budget:"$5.8M",year:"2024"},{id:4,title:"Heritage Mall Transformation",category:"renovation",image:Wh,description:"Complete digital transformation of 200,000 sq ft heritage retail space.",technologies:["Digital Integration","AR/VR","Smart Retail"],duration:"12 months",status:"Completed",budget:"$3.2M",year:"2023"}],y=[{id:"all",name:"All Projects",icon:"fa-th-large",color:"#8B5CF6"},{id:"residential",name:"Residential",icon:"fa-home",color:"#10B981"},{id:"commercial",name:"Commercial",icon:"fa-building",color:"#3B82F6"},{id:"industrial",name:"Industrial",icon:"fa-industry",color:"#F59E0B"},{id:"renovation",name:"Renovation",icon:"fa-tools",color:"#EF4444"},{id:"infrastructure",name:"Infrastructure",icon:"fa-road",color:"#06B6D4"}],V=E==="all"?H:H.filter(k=>k.category===E);return be.useEffect(()=>{const k=new IntersectionObserver(te=>{te.forEach((ve,U)=>{ve.isIntersecting&&setTimeout(()=>{ve.target.classList.add("animate-in")},U*200)})},{threshold:.1});return document.querySelectorAll(".animate-on-scroll").forEach(te=>{k.observe(te)}),()=>k.disconnect()},[V]),c.jsxs(c.Fragment,{children:[c.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --warning-gradient: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          --bg-primary: #0d1117;
          --bg-secondary: #161b22;
          --bg-tertiary: #21262d;
          --text-primary: #f0f6fc;
          --text-secondary: #c9d1d9;
          --text-muted: #8b949e;
          --border-primary: #30363d;
          --shadow-primary: rgba(0, 0, 0, 0.6);
          --shadow-hover: rgba(0, 0, 0, 0.8);
          --accent-primary: #58a6ff;
          --accent-secondary: #39d353;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-x: hidden;
        }

        .projects-container {
          min-height: 100vh;
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.03;
          pointer-events: none;
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: var(--primary-gradient);
          animation: float 20s infinite linear;
        }

        .shape:nth-child(1) {
          width: 80px;
          height: 80px;
          left: 10%;
          animation-delay: 0s;
        }

        .shape:nth-child(2) {
          width: 120px;
          height: 120px;
          left: 80%;
          animation-delay: -5s;
        }

        .shape:nth-child(3) {
          width: 60px;
          height: 60px;
          left: 50%;
          animation-delay: -10s;
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .projects-section {
          padding: 6rem 0 4rem;
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Advanced Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
        }

        .section-titlee {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #f093fb 0%, #667eea 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          width: 80px;
          height: 4px;
          background: var(--primary-gradient);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Advanced Filter Tabs */
        .filter-container {
          margin-bottom: 3rem;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .filter-tab {
          background: transparent;
          border: 2px solid var(--border-primary);
          color: var(--text-secondary);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }

        .filter-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--primary-gradient);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .filter-tab:hover::before,
        .filter-tab.active::before {
          left: 0;
        }

        .filter-tab:hover,
        .filter-tab.active {
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .filter-tab i {
          margin-right: 0.5rem;
        }

        /* Advanced Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
          gap: 2.5rem;
        }

        /* Advanced Project Cards */
        .project-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px var(--shadow-hover);
          border-color: var(--accent-primary);
        }

        /* Advanced Image Container */
        .project-image-container {
          position: relative;
          height: 280px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0.9) saturate(1.1);
        }

        .project-card:hover .project-image {
          transform: scale(1.15) rotate(1deg);
          filter: brightness(1.1) saturate(1.3);
        }

        /* Advanced Overlay Effects */
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg, 
            rgba(139, 92, 246, 0.9) 0%, 
            rgba(6, 182, 212, 0.8) 50%, 
            rgba(16, 185, 129, 0.9) 100%
          );
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          color: white;
          transform: translateY(30px) scale(0.8);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .overlay-content {
          transform: translateY(0) scale(1);
        }

        .overlay-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
        }

        .overlay-text {
          font-size: 1.2rem;
          font-weight: 600;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        /* Advanced Status Badges */
        .status-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .status-completed {
          background: var(--success-gradient);
          color: white;
        }

        .status-progress {
          background: var(--warning-gradient);
          color: white;
        }

        .status-planning {
          background: var(--secondary-gradient);
          color: white;
        }

        /* Advanced Content Styling */
        .project-content {
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
        }

        .project-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.3;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .project-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stat-icon {
          font-size: 1.2rem;
          color: #8B5CF6;
        }

        .stat-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .stat-value {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* Advanced Technology Tags */
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .tech-tag {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2));
          color: rgba(255, 255, 255, 0.9);
          padding: 0.6rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(139, 92, 246, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .tech-tag:hover {
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.4));
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
          border-color: rgba(139, 92, 246, 0.5);
        }

        /* Advanced View Project Button */
        .view-project-btn {
          width: 100%;
          background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);
          border: none;
          color: white;
          padding: 1rem 2rem;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.4);
        }

        .view-project-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
          transition: all 0.5s ease;
        }

        .view-project-btn:hover::before {
          left: 0;
        }

        .view-project-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 15px 50px rgba(139, 92, 246, 0.5),
            0 0 0 1px rgba(139, 92, 246, 0.3);
          background: linear-gradient(135deg, #9333EA 0%, #0891B2 100%);
        }

        .view-project-btn i {
          transition: transform 0.3s ease;
        }

        .view-project-btn:hover i {
          transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .filter-tabs {
            gap: 0.8rem;
          }
          
          .filter-tab {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
          
          .project-content {
            padding: 2rem;
          }
          
          .container {
            padding: 0 1rem;
          }
          
          .project-stats {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .project-image-container {
            height: 220px;
          }

          .projects-section {
            padding: 4rem 0 3rem;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .filter-tab {
            padding: 0.6rem 1.2rem;
            font-size: 0.85rem;
          }
          
          .project-content {
            padding: 1.5rem;
          }
        }
      `}),c.jsxs("div",{className:"projects-container",children:[c.jsxs("div",{className:"floating-particles",children:[c.jsx("div",{className:"particle"}),c.jsx("div",{className:"particle"}),c.jsx("div",{className:"particle"}),c.jsx("div",{className:"particle"}),c.jsx("div",{className:"particle"}),c.jsx("div",{className:"particle"}),c.jsx("div",{className:"particle"}),c.jsx("div",{className:"particle"}),c.jsx("div",{className:"particle"})]}),c.jsx("section",{className:"projects-section",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header animate-on-scroll",children:[c.jsx("h1",{className:"section-titlee",children:"Exceptional Projects Portfolio"}),c.jsx("p",{className:"section-subtitle",children:"Discover our collection of groundbreaking projects that showcase cutting-edge technology, innovative design, and exceptional craftsmanship in modern construction."})]}),c.jsx("div",{className:"filter-container animate-on-scroll",children:c.jsx("div",{className:"filter-tabs",children:y.map(k=>c.jsxs("button",{className:`filter-tab ${E===k.id?"active":""}`,onClick:()=>de(k.id),children:[c.jsx("i",{className:`fas ${k.icon}`}),k.name]},k.id))})}),c.jsx("div",{className:"projects-grid",children:V.map((k,te)=>c.jsxs("div",{className:"project-card animate-on-scroll",style:{animationDelay:`${te*.15}s`},children:[c.jsxs("div",{className:"project-image-container",children:[c.jsx("img",{src:k.image,alt:k.title,className:"project-image"}),c.jsx("div",{className:"project-overlay",children:c.jsxs("div",{className:"overlay-content",children:[c.jsx("i",{className:"fas fa-search-plus overlay-icon"}),c.jsx("p",{className:"overlay-text",children:"Explore Project Details"})]})}),c.jsx("div",{className:`status-badge status-${k.status.toLowerCase().replace(" ","")}`,children:k.status})]}),c.jsxs("div",{className:"project-content",children:[c.jsx("h3",{className:"project-title",children:k.title}),c.jsx("p",{className:"project-description",children:k.description}),c.jsxs("div",{className:"project-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("i",{className:"fas fa-clock stat-icon"}),c.jsxs("div",{children:[c.jsx("div",{className:"stat-text",children:"Duration"}),c.jsx("div",{className:"stat-value",children:k.duration})]})]}),c.jsxs("div",{className:"stat-item",children:[c.jsx("i",{className:"fas fa-dollar-sign stat-icon"}),c.jsxs("div",{children:[c.jsx("div",{className:"stat-text",children:"Budget"}),c.jsx("div",{className:"stat-value",children:k.budget})]})]})]}),c.jsx("div",{className:"project-technologies",children:k.technologies.map((ve,U)=>c.jsx("span",{className:"tech-tag",children:ve},U))}),c.jsxs("button",{className:"view-project-btn",children:[c.jsx("i",{className:"fas fa-arrow-right me-2"}),"View Project"]})]})]},k.id))})]})})]})]})},Ih=()=>{const[E,de]=be.useState(null),[H,y]=be.useState({x:0,y:0}),[V,k]=be.useState(!1),[te,ve]=be.useState(null),[U,A]=be.useState(0);be.useEffect(()=>{k(!0);const z=W=>{y({x:W.clientX,y:W.clientY})},L=()=>{A(window.scrollY)};return window.addEventListener("mousemove",z),window.addEventListener("scroll",L),()=>{window.removeEventListener("mousemove",z),window.removeEventListener("scroll",L)}},[]);const Y=[{id:1,name:"Alexandra Rivera",position:"Chief Creative Director",image:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",description:"Visionary leader transforming digital landscapes with innovative design thinking and strategic creativity that pushes boundaries.",experience:"12+ Years",projects:"300+",speciality:"Digital Innovation",color:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",accentColor:"#667eea",achievements:["Design Excellence Award 2024","Innovation Leadership Prize","Creative Visionary Recognition"],skills:[{name:"Creative Strategy",level:96},{name:"Design Thinking",level:94},{name:"Team Leadership",level:92}],social:["linkedin","twitter","dribbble"]},{id:2,name:"Marcus Chen",position:"Technology Architect",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",description:"Full-stack visionary architecting scalable solutions that bridge innovation with practical implementation and cutting-edge technology.",experience:"10+ Years",projects:"250+",speciality:"Technology Innovation",color:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",accentColor:"#f093fb",achievements:["Tech Innovation Award 2024","AI Excellence Recognition","Open Source Contributor"],skills:[{name:"System Architecture",level:98},{name:"AI/ML Integration",level:95},{name:"Cloud Solutions",level:93}],social:["linkedin","twitter","github"]}],me={linkedin:"💼",twitter:"🐦",dribbble:"🎨",github:"💻",behance:"🎭"};return c.jsxs("div",{className:"position-relative min-vh-100 overflow-hidden",style:{background:"radial-gradient(ellipse at top left, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)"},children:[c.jsxs("div",{className:"position-absolute w-100 h-100",style:{zIndex:1},children:[c.jsx("div",{className:"position-absolute rounded-circle",style:{width:"800px",height:"800px",background:"radial-gradient(circle, rgba(102, 126, 234, 0.12) 0%, transparent 70%)",left:`${H.x-400}px`,top:`${H.y-400}px`,transition:"all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)",filter:"blur(80px)",animation:"pulseGlow 6s ease-in-out infinite alternate"}}),[...Array(30)].map((z,L)=>c.jsx("div",{className:"position-absolute rounded-circle",style:{width:`${Math.random()*6+2}px`,height:`${Math.random()*6+2}px`,background:`rgba(${102+Math.random()*100}, ${126+Math.random()*100}, 234, ${Math.random()*.8+.2})`,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animation:`floatingParticle ${Math.random()*10+5}s linear infinite`,animationDelay:`${Math.random()*5}s`}},L)),c.jsx("div",{className:"position-absolute",style:{width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",borderRadius:"50%",top:"10%",right:"5%",animation:"rotateGeometry 20s linear infinite",filter:"blur(40px)"}}),c.jsx("div",{className:"position-absolute",style:{width:"200px",height:"200px",background:"linear-gradient(135deg, rgba(240, 147, 251, 0.08), rgba(245, 87, 108, 0.08))",transform:"rotate(45deg)",bottom:"15%",left:"8%",animation:"rotateGeometry 15s linear infinite reverse",filter:"blur(30px)"}})]}),c.jsxs("div",{className:"container-fluid py-5 position-relative",style:{zIndex:2},children:[c.jsx("div",{className:`text-center mb-5 ${V?"animate-fadeInUp":"opacity-0"}`,children:c.jsx("div",{className:"row justify-content-center",children:c.jsxs("div",{className:"col-lg-8",children:[c.jsxs("h1",{className:"display-3 fw-bold mb-4 position-relative",style:{background:"linear-gradient(135deg, #ffffff 0%, #667eea 50%, #764ba2 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textShadow:"0 0 30px rgba(102, 126, 234, 0.3)",animation:"titleGlow 3s ease-in-out infinite alternate"},children:["Meet Our Visionaries",c.jsx("div",{className:"position-absolute start-50 translate-middle-x",style:{bottom:"-15px",width:"100px",height:"4px",background:"linear-gradient(135deg, #667eea, #764ba2)",borderRadius:"2px",animation:"expandLine 2s ease-out"}})]}),c.jsx("p",{className:"lead text-light opacity-75 mx-auto mb-5",style:{maxWidth:"600px",fontSize:"1.25rem"},children:"Exceptional leaders driving innovation and excellence in every project we undertake"})]})})}),c.jsx("div",{className:"row g-5 justify-content-center",children:Y.map((z,L)=>c.jsx("div",{className:"col-lg-5 col-md-6",children:c.jsx("div",{className:`team-card h-100 ${V?"animate-slideInUp":"opacity-0"}`,style:{animationDelay:`${L*.3}s`,transform:te===z.id?"translateY(-20px) rotateY(5deg)":"translateY(0) rotateY(0)",transition:"all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)"},onMouseEnter:()=>ve(z.id),onMouseLeave:()=>ve(null),children:c.jsxs("div",{className:"card border-0 h-100 position-relative overflow-hidden",style:{background:"rgba(255, 255, 255, 0.03)",backdropFilter:"blur(20px)",borderRadius:"28px",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:te===z.id?"0 30px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(102, 126, 234, 0.3)":"0 15px 35px rgba(0, 0, 0, 0.2)",transition:"all 0.4s ease"},children:[c.jsx("div",{className:"position-absolute w-100 h-100",style:{background:z.color,opacity:te===z.id?.1:.05,transition:"opacity 0.4s ease",borderRadius:"28px"}}),c.jsx("div",{className:"position-absolute w-100 h-100",style:{background:`conic-gradient(from 0deg, ${z.accentColor}, transparent, ${z.accentColor})`,borderRadius:"28px",opacity:te===z.id?.6:0,animation:te===z.id?"rotateBorder 3s linear infinite":"none",transition:"opacity 0.4s ease",padding:"2px",zIndex:-1},children:c.jsx("div",{className:"w-100 h-100",style:{background:"rgba(15, 15, 35, 0.95)",borderRadius:"26px"}})}),c.jsxs("div",{className:"card-body p-5 text-center position-relative",style:{zIndex:2},children:[c.jsxs("div",{className:"position-relative mb-4 mx-auto",style:{width:"160px",height:"160px"},children:[c.jsx("div",{className:"position-absolute w-100 h-100 rounded-circle",style:{background:z.color,filter:"blur(15px)",opacity:te===z.id?.8:.3,transform:te===z.id?"scale(1.2)":"scale(1)",transition:"all 0.4s ease"}}),c.jsx("img",{src:z.image,alt:z.name,className:"rounded-circle position-relative",style:{width:"100%",height:"100%",objectFit:"cover",border:`3px solid ${z.accentColor}40`,transform:te===z.id?"scale(1.05) rotate(3deg)":"scale(1)",transition:"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",zIndex:2}}),c.jsx("div",{className:"position-absolute bottom-0 end-0 rounded-circle border border-3 border-dark",style:{width:"24px",height:"24px",background:"#10b981",animation:"statusPulse 2s ease-in-out infinite"}})]}),c.jsx("h3",{className:"h2 fw-bold mb-2 text-white",style:{background:"linear-gradient(135deg, #ffffff 0%, "+z.accentColor+" 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:z.name}),c.jsxs("p",{className:"fw-semibold mb-3",style:{color:z.accentColor,fontSize:"1.1rem",textTransform:"uppercase",letterSpacing:"2px",position:"relative"},children:[z.position,c.jsx("span",{className:"position-absolute start-50 translate-middle-x",style:{bottom:"-8px",width:"60px",height:"2px",background:z.color,borderRadius:"2px"}})]}),c.jsx("p",{className:"text-light opacity-75 mb-4",style:{fontSize:"1rem",lineHeight:"1.7"},children:z.description}),c.jsxs("div",{className:"row g-3 mb-4",children:[c.jsx("div",{className:"col-md-4 col-12",children:c.jsxs("div",{className:"p-3 rounded-3",style:{background:"rgba(255, 255, 255, 0.05)"},children:[c.jsx("div",{className:"h4 fw-bold mb-1",style:{color:z.accentColor},children:z.experience}),c.jsx("small",{className:"text-light opacity-75 text-uppercase",children:"Experience"})]})}),c.jsx("div",{className:"col-md-4 col-6",children:c.jsxs("div",{className:"p-3 rounded-3",style:{background:"rgba(255, 255, 255, 0.05)"},children:[c.jsx("div",{className:"h4 fw-bold mb-1",style:{color:z.accentColor},children:z.projects}),c.jsx("small",{className:"text-light opacity-75 text-uppercase",children:"Projects"})]})}),c.jsx("div",{className:"col-md-4 col-6",children:c.jsxs("div",{className:"p-3 rounded-3",style:{background:"rgba(255, 255, 255, 0.05)"},children:[c.jsx("div",{className:"h4 fw-bold mb-1 text-warning",children:"4.9★"}),c.jsx("small",{className:"text-light opacity-75 text-uppercase",children:"Rating"})]})})]}),c.jsx("div",{className:"d-flex justify-content-center gap-3 mb-4",children:z.social.map((W,P)=>c.jsx("a",{href:"#",className:"btn btn-sm rounded-circle d-flex align-items-center justify-content-center",style:{width:"45px",height:"45px",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",color:"white",fontSize:"1.2rem",transition:"all 0.3s ease"},onMouseEnter:ne=>{ne.target.style.background=z.color,ne.target.style.transform="translateY(-3px) scale(1.1)",ne.target.style.boxShadow=`0 8px 25px ${z.accentColor}40`},onMouseLeave:ne=>{ne.target.style.background="rgba(255, 255, 255, 0.1)",ne.target.style.transform="translateY(0) scale(1)",ne.target.style.boxShadow="none"},children:me[W]},P))}),c.jsxs("button",{className:"btn btn-lg fw-semibold px-4 py-3 position-relative overflow-hidden",style:{background:z.color,border:"none",borderRadius:"50px",color:"white",textTransform:"uppercase",letterSpacing:"1px",boxShadow:`0 15px 35px ${z.accentColor}40`,transition:"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)"},onClick:()=>de(z),onMouseEnter:W=>{W.target.style.transform="translateY(-3px) scale(1.05)",W.target.style.boxShadow=`0 20px 40px ${z.accentColor}60`},onMouseLeave:W=>{W.target.style.transform="translateY(0) scale(1)",W.target.style.boxShadow=`0 15px 35px ${z.accentColor}40`},children:[c.jsx("span",{className:"me-2",children:"🚀"}),"View Profile",c.jsx("div",{className:"position-absolute top-0 start-0 w-100 h-100",style:{background:"linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3), transparent 70%)",transform:"translateX(-100%)",animation:"buttonShine 3s ease-in-out infinite"}})]})]})]})})},z.id))})]}),E&&c.jsx("div",{className:"modal d-flex align-items-center justify-content-center",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(20px)",zIndex:9999,animation:"modalFadeIn 0.4s ease-out"},onClick:()=>de(null),children:c.jsx("div",{className:"modal-dialog modal-lg",style:{animation:"modalSlideIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)"},onClick:z=>z.stopPropagation(),children:c.jsxs("div",{className:"modal-content border-0 overflow-hidden",style:{background:"linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(25, 25, 45, 0.95))",backdropFilter:"blur(25px)",borderRadius:"24px",border:"1px solid rgba(255, 255, 255, 0.1)"},children:[c.jsx("button",{className:"btn-close position-absolute top-0 end-0 m-3",style:{background:"rgba(255, 255, 255, 0.1)",border:"none",color:"white",width:"40px",height:"40px",borderRadius:"50%",zIndex:10},onClick:()=>de(null),children:"✕"}),c.jsx("div",{className:"modal-header border-0 p-4 pb-0",children:c.jsxs("div",{className:"d-flex align-items-center gap-4",children:[c.jsx("img",{src:E.image,alt:E.name,className:"rounded-circle",style:{width:"80px",height:"80px",objectFit:"cover"}}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-white mb-1",children:E.name}),c.jsx("p",{className:"mb-0",style:{color:E.accentColor},children:E.position})]})]})}),c.jsxs("div",{className:"modal-body p-4",children:[c.jsxs("div",{className:"mb-4",children:[c.jsx("h5",{className:"text-white mb-3",children:"Core Expertise"}),E.skills.map((z,L)=>c.jsxs("div",{className:"mb-3",children:[c.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-1",children:[c.jsx("span",{className:"text-light",children:z.name}),c.jsxs("span",{className:"text-light opacity-75",children:[z.level,"%"]})]}),c.jsx("div",{className:"progress",style:{height:"8px",background:"rgba(255, 255, 255, 0.1)"},children:c.jsx("div",{className:"progress-bar",style:{width:`${z.level}%`,background:E.color,animation:`skillProgress 1s ease-out ${L*.2}s both`}})})]},L))]}),c.jsxs("div",{children:[c.jsx("h5",{className:"text-white mb-3",children:"Key Achievements"}),E.achievements.map((z,L)=>c.jsxs("div",{className:"d-flex align-items-center gap-3 p-3 mb-2 rounded-3",style:{background:"rgba(255, 255, 255, 0.05)",animation:`achievementSlide 0.5s ease-out ${L*.1}s both`},children:[c.jsx("span",{style:{color:E.accentColor,fontSize:"1.2rem"},children:"🏆"}),c.jsx("span",{className:"text-light",children:z})]},L))]})]})]})})}),c.jsx("style",{children:`
        @keyframes pulseGlow {
          0% { transform: scale(0.9); opacity: 0.3; }
          100% { transform: scale(1.1); opacity: 0.7; }
        }

        @keyframes floatingParticle {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes rotateGeometry {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes titleGlow {
          0% { text-shadow: 0 0 20px rgba(102, 126, 234, 0.3); }
          100% { text-shadow: 0 0 40px rgba(102, 126, 234, 0.8), 0 0 60px rgba(118, 75, 162, 0.4); }
        }

        @keyframes expandLine {
          0% { width: 0; opacity: 0; }
          100% { width: 100px; opacity: 1; }
        }

        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes statusPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          50% { transform: scale(1.1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
        }

        @keyframes buttonShine {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }

        @keyframes modalFadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes modalSlideIn {
          0% { transform: translateY(50px) scale(0.9); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes skillProgress {
          0% { width: 0%; }
          100% { width: var(--width); }
        }

        @keyframes achievementSlide {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) both;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(60px) rotateX(-15deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }

        .team-card {
          perspective: 1000px;
        }

        .btn-close:focus {
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
          
          .modal-dialog {
            margin: 1rem;
          }
        }
        @media (max-width: 480px) {
        .stats-grid {
          grid-template-columns: 1fr;
          gap: 10px;
          padding: 10px;
        }

        .stat-card {
          width: 95%;
          margin: 0 auto;
          padding: 14px 12px;
          font-size: 0.9rem;
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
          margin-bottom: 6px;
        }

        .stat-number {
          font-size: 1.5rem;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.75rem;
        }
      }
      `})]})},Ph=()=>{const[E,de]=be.useState({name:"",email:"",phone:"",subject:"",message:""}),[H,y]=be.useState(!1),[V,k]=be.useState({x:0,y:0}),[te,ve]=be.useState(!1);be.useEffect(()=>{const me=new IntersectionObserver(([W])=>{W.isIntersecting&&y(!0)},{threshold:.1}),z=document.querySelector("#modern-contact");z&&me.observe(z);const L=W=>{k({x:W.clientX,y:W.clientY})};return window.addEventListener("mousemove",L),()=>{me.disconnect(),window.removeEventListener("mousemove",L)}},[]);const U=me=>{de({...E,[me.target.name]:me.target.value})},A=async me=>{me.preventDefault(),ve(!0),setTimeout(()=>{alert("Thank you for your message! We'll get back to you soon."),de({name:"",email:"",phone:"",subject:"",message:""}),ve(!1)},2e3)},Y=[{icon:"fas fa-map-marker-alt",title:"Address",info:`123 Tech Street
Innovation City, IC 12345`,color:"#f093fb"},{icon:"fas fa-phone",title:"Contact",info:`Phone: +1 (555) 123-4567
Email: hello@techcorp.com`,color:"#667eea"},{icon:"fas fa-clock",title:"Hours",info:`Mon-Fri: 9:00 AM - 6:00 PM
Sat: 10:00 AM - 4:00 PM`,color:"#8e54e9"}];return c.jsxs(c.Fragment,{children:[c.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap",rel:"stylesheet"}),c.jsx("style",{children:`
        :root {
          --primary-bg: #060606;
          --secondary-bg: #111111;
          --accent-bg: #222222;
          --glass-bg: rgba(15, 15, 15, 0.8);
          --glass-border: rgba(255, 255, 255, 0.1);
          --primary-gradient: linear-gradient(135deg, #aa4fb2 0%, #8e54e9 100%);
          --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --neon-gradient: linear-gradient(135deg, #f093fb 0%, #8e54e9 50%, #667eea 100%);
          --text-primary: #ffffff;
          --text-secondary: #ffffff;
          --text-muted: #aaaaaa;
          --accent-color: #64ffda;
          --neon-pink: #f093fb;
          --neon-purple: #edecef;
          --neon-blue: #667eea;
          --success-color: #10d876;
          --error-color: #ff4757;
        }

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          box-sizing: border-box;
        }

        body {
          background-color: #000000;
        }

        .modern-contact {
          background: var(--primary-bg);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }

        /* Interactive Background */
        .contact-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at ${V.x}px ${V.y}px, 
              rgba(102, 126, 234, 0.03) 0%, 
              transparent 50%),
            radial-gradient(circle at 20% 20%, rgba(240, 147, 251, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(142, 84, 233, 0.05) 0%, transparent 50%);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        /* Animated Grid Background */
        .grid-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 25s linear infinite;
          pointer-events: none;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }

        /* Floating Elements */
        .floating-element {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.1;
        }

        .floating-1 {
          width: 100px;
          height: 100px;
          top: 10%;
          left: 10%;
          background: var(--neon-pink);
          animation: float-1 15s infinite ease-in-out;
        }

        .floating-2 {
          width: 150px;
          height: 150px;
          top: 70%;
          right: 15%;
          background: var(--neon-purple);
          animation: float-2 20s infinite ease-in-out;
        }

        .floating-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 60%;
          background: var(--neon-blue);
          animation: float-3 18s infinite ease-in-out;
        }

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.05; }
          33% { transform: translate(40px, -30px) scale(1.2); opacity: 0.1; }
          66% { transform: translate(-30px, 40px) scale(0.8); opacity: 0.03; }
        }

        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.04; }
          50% { transform: translate(-50px, -40px) rotate(180deg); opacity: 0.08; }
        }

        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.06; }
          50% { transform: translate(30px, -50px) scale(1.3); opacity: 0.02; }
        }

        /* Section Title */
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          opacity: ${H?"1":"0"};
          transform: ${H?"translateY(0)":"translateY(50px)"};
          transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .section-title h2 {
          font-size: 3.5rem;
          font-weight: 900;
          background: var(--neon-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: -2px;
          position: relative;
        }

        .section-title h2::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 200px;
          background: var(--neon-gradient);
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
          z-index: -1;
        }

        .section-title p {
          font-size: 1.25rem;
        //  background: var(--text-primary);
         
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Glass Card Effect */
        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: blur(25px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          opacity: ${H?"1":"0"};
          transform: ${H?"translateY(0) scale(1)":"translateY(30px) scale(0.95)"};
          min-height: 800px; /* Increased height to match 3 cards */
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.02) 50%, 
            rgba(255, 255, 255, 0.05) 100%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .glass-card:hover::before {
          opacity: 1;
        }

        .glass-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 100px rgba(102, 126, 234, 0.1);
        }

        /* Form Styles */
        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2rem;
          position: relative;
          text-align: center;
        }

        .form-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: var(--neon-gradient);
          border-radius: 2px;
        }

        .form-group {
          margin-bottom: 2rem;
          position: relative;
        }

        .form-label {
          display: block;
          margin-bottom: 0.75rem;
          font-weight: 600;
          color: white;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .form-control, .form-select, .form-textarea {
          width: 100%;
          border: 2px solid var(--glass-border);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          font-size: 1rem;
          background: var(--glass-bg);
          color: white;
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
        }

        .form-control:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--neon-blue);
          box-shadow: 
            0 0 0 3px rgba(102, 126, 234, 0.1),
            0 8px 25px rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
          background: rgba(30, 30, 30, 0.8);
          color: white;
        }

        .form-control::placeholder, .form-textarea::placeholder {
          color: var(--text-muted);
          opacity: 0.7;
        }

        /* Style for select dropdown options */
        .form-select option {
          background-color: #111111;
          color: white;
          padding: 10px;
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        /* Submit Button */
        .submit-btn {
          background: linear-gradient(135deg, #f093fb 0%, #667eea 100%);
          border: none;
          color: #080808;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto;
          margin-top: 2rem;
          min-width: 200px;
          justify-content: center;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 15px 35px rgba(240, 147, 251, 0.4),
            0 0 50px rgba(240, 147, 251, 0.2);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        /* Loading Animation */
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid transparent;
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Contact Info Cards */
        .contact-info-container {
          height: 800px; /* Matching the form card height */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .contact-info-card {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          overflow: hidden;
          opacity: ${H?"1":"0"};
          transform: ${H?"translateX(0)":"translateX(50px)"};
        }

        /* Make the middle card (combined contact) taller */
        .contact-info-card:nth-child(2) {
          flex: 1.2;
          margin: 1.5rem 0;
        }

        .contact-info-card:nth-child(1) { transition-delay: 0.2s; }
        .contact-info-card:nth-child(2) { transition-delay: 0.4s; }
        .contact-info-card:nth-child(3) { transition-delay: 0.6s; }

        .contact-info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          transition: left 0.6s ease;
        }

        .contact-info-card:hover::before {
          left: 100%;
        }

        .contact-info-card:hover {
          transform: translateX(-10px) translateY(-5px);
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 60px rgba(102, 126, 234, 0.1);
        }

        .contact-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          margin-bottom: 1.25rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .contact-info-card:hover .contact-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .contact-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .contact-text {
          color: var(--text-primary);
          line-height: 1.6;
          font-size: 1rem;
          white-space: pre-line;
        }
          .form-select option {
  background-color: #111111;
  color: white;
  padding: 10px;
}

        /* Responsive Design */
        @media (max-width: 768px) {
          .section-title h2 { font-size: 2.5rem; }
          .glass-card { 
            padding: 2rem;
            min-height: auto;
          }
          .modern-contact { padding: 60px 0; }
          .contact-info-container {
            height: auto;
            margin-top: 2rem;
          }
          .contact-info-card {
            margin-bottom: 1.5rem;
          }
          .contact-info-card:nth-child(2) {
            margin: 1.5rem 0;
          }
        }

        /* Staggered Animations */
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.3s; }
      `}),c.jsxs("section",{id:"modern-contact",className:"modern-contact",children:[c.jsxs("div",{className:"contact-bg",children:[c.jsx("div",{className:"grid-background"}),c.jsx("div",{className:"floating-element floating-1"}),c.jsx("div",{className:"floating-element floating-2"}),c.jsx("div",{className:"floating-element floating-3"})]}),c.jsxs("div",{className:"container position-relative",children:[c.jsxs("div",{className:"section-title",children:[c.jsx("h2",{children:"Get In Touch"}),c.jsx("p",{style:{color:"white"},children:"Ready to start your next project? Let's create something amazing together. We're here to help bring your vision to life."})]}),c.jsxs("div",{className:"row g-4",children:[c.jsx("div",{className:"col-lg-8",children:c.jsxs("div",{className:"glass-card stagger-1",children:[c.jsx("h3",{className:"form-title",children:"Send us a Message"}),c.jsxs("div",{onSubmit:A,children:[c.jsxs("div",{className:"row g-3",children:[c.jsx("div",{className:"col-md-6",children:c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Full Name *"}),c.jsx("input",{type:"text",name:"name",value:E.name,onChange:U,required:!0,className:"form-control",placeholder:"Enter your full name"})]})}),c.jsx("div",{className:"col-md-6",children:c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Email Address *"}),c.jsx("input",{type:"email",name:"email",value:E.email,onChange:U,required:!0,className:"form-control",placeholder:"Enter your email address"})]})})]}),c.jsxs("div",{className:"row g-3",children:[c.jsx("div",{className:"col-md-6",children:c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Phone Number"}),c.jsx("input",{type:"tel",name:"phone",value:E.phone,onChange:U,className:"form-control",placeholder:"Enter your phone number"})]})}),c.jsx("div",{className:"col-md-6",children:c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Subject *"}),c.jsxs("select",{name:"subject",value:E.subject,onChange:U,required:!0,className:"form-select",children:[c.jsx("option",{value:"",children:"Select a service"}),c.jsx("option",{value:"web-development",children:"Web Development"}),c.jsx("option",{value:"mobile-apps",children:"Mobile Applications"}),c.jsx("option",{value:"ai-solutions",children:"AI Solutions"}),c.jsx("option",{value:"cloud-services",children:"Cloud Services"}),c.jsx("option",{value:"consultation",children:"Free Consultation"}),c.jsx("option",{value:"other",children:"Other"})]})]})})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{className:"form-label",children:"Message *"}),c.jsx("textarea",{name:"message",value:E.message,onChange:U,required:!0,className:"form-textarea",placeholder:"Tell us about your project requirements, goals, and any specific needs you have..."})]}),c.jsx("button",{onClick:A,className:"submit-btn",disabled:te,children:te?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"loading-spinner"}),"Sending..."]}):c.jsxs(c.Fragment,{children:[c.jsx("i",{className:"fas fa-paper-plane"}),"Send Message"]})})]})]})}),c.jsx("div",{className:"col-lg-4",children:c.jsxs("div",{className:"contact-info-container stagger-2",children:[c.jsxs("div",{className:"contact-info-card",children:[c.jsx("div",{className:"contact-icon",style:{background:`linear-gradient(135deg, ${Y[0].color}, ${Y[0].color}dd)`},children:c.jsx("i",{className:Y[0].icon})}),c.jsx("h4",{className:"contact-title",children:Y[0].title}),c.jsx("p",{className:"contact-text",children:Y[0].info})]}),c.jsxs("div",{className:"contact-info-card",children:[c.jsx("div",{className:"contact-icon",style:{background:`linear-gradient(135deg, ${Y[1].color}, ${Y[1].color}dd)`},children:c.jsx("i",{className:Y[1].icon})}),c.jsx("h4",{className:"contact-title",children:Y[1].title}),c.jsx("p",{className:"contact-text",children:Y[1].info})]}),c.jsxs("div",{className:"contact-info-card",children:[c.jsx("div",{className:"contact-icon",style:{background:`linear-gradient(135deg, ${Y[2].color}, ${Y[2].color}dd)`},children:c.jsx("i",{className:Y[2].icon})}),c.jsx("h4",{className:"contact-title",children:Y[2].title}),c.jsx("p",{className:"contact-text",children:Y[2].info})]})]})})]})]})]})]})},em=()=>{const[E,de]=be.useState(!1),H=new Date().getFullYear();return be.useEffect(()=>{const y=new IntersectionObserver(([k])=>{k.isIntersecting&&de(!0)},{threshold:.1}),V=document.querySelector("#footer");return V&&y.observe(V),()=>y.disconnect()},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        :root {
          /* --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --dark-bg: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          --card-bg: rgba(255, 255, 255, 0.05);
          --card-border: rgba(255, 255, 255, 0.1);
          --text-primary: #ffffff;
          --text-secondary: #b8c5d6;
          --text-muted: #8892b0;
          --accent-color: #64ffda;
          --glass-bg: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.08);
          --shadow-glow: 0 8px 32px rgba(100, 255, 218, 0.1);
          --shadow-hover: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        * {
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }

        .footer-section {
          background: var(--dark-bg);
          position: relative;
          overflow: hidden;
          padding: 80px 0 0;
        }

        /* Animated background elements */
        .footer-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: var(--accent-color);
          opacity: 0.03;
          animation: float 8s ease-in-out infinite;
        }

        .bg-circle:nth-child(1) {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .bg-circle:nth-child(2) {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 10%;
          animation-delay: -3s;
        }

        .bg-circle:nth-child(3) {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 60%;
          animation-delay: -6s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.03;
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.08;
          }
        }

        /* Glowing lines */
        .glow-line {
          position: absolute;
          height: 1px;
          background: var(--accent-gradient);
          animation: lineGlow 4s ease-in-out infinite;
        }

        .glow-line:nth-child(1) {
          top: 20%;
          left: 0;
          width: 30%;
          animation-delay: 0s;
        }

        .glow-line:nth-child(2) {
          top: 60%;
          right: 0;
          width: 25%;
          animation-delay: -2s;
        }

        @keyframes lineGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.8;
            transform: scaleX(1.2);
          }
        }

        /* Footer content container */
        .footer-content {
          position: relative;
          z-index: 2;
        }

        /* Brand section */
        .footer-brand {
          font-size: 1.5rem;
          font-weight: 700;
          background: white;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          margin-bottom: 20px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          letter-spacing: -1px;
          opacity: ${E?"1":"0"};
          transform: ${E?"translateY(0)":"translateY(30px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          /* white-space: nowrap; */

        }

        .footer-brand i {
          background: var(--secondary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-right: 15px;
          font-size: 1rem;
          animation: pulse 2s infinite;
        }

        .footer-brand img{
          width:50px;
          height:auto;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .footer-brand:hover {
          transform: translateY(-3px);
          filter: drop-shadow(0 5px 15px rgba(102, 126, 234, 0.3));
        }

        /* Description */
        .footer-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 30px;
          opacity: ${E?"1":"0"};
          transform: ${E?"translateY(0)":"translateY(20px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.1s;
        }

        /* Social links */
        .footer-social {
          display: flex;
          gap: 15px;
          margin-bottom: 30px;
          opacity: ${E?"1":"0"};
          transform: ${E?"translateY(0)":"translateY(20px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
        }

        .social-link {
          width: 55px;
          height: 55px;
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          font-size: 1.3rem;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--primary-gradient);
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }

        .social-link:hover::before {
          transform: scale(1);
        }

        .social-link:hover {
          transform: translateY(-5px) scale(1.1);
          color: white;
          box-shadow: var(--shadow-hover);
          border-color: transparent;
        }

        /* Section titles */
        .footer-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 25px;
          position: relative;
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: ${E?"1":"0"};
          transform: ${E?"translateX(0)":"translateX(-30px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 50px;
          height: 3px;
          background: var(--accent-gradient);
          border-radius: 2px;
          animation: ${E?"slideWidth 1s ease-out 0.8s both":"none"};
        }

        @keyframes slideWidth {
          from { width: 0; }
          to { width: 50px; }
        }

        /* Footer links */
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
          opacity: ${E?"1":"0"};
          transform: ${E?"translateX(0)":"translateX(-20px)"};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .footer-links li:nth-child(1) { transition-delay: 0.4s; }
        .footer-links li:nth-child(2) { transition-delay: 0.5s; }
        .footer-links li:nth-child(3) { transition-delay: 0.6s; }
        .footer-links li:nth-child(4) { transition-delay: 0.7s; }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 1rem;
          position: relative;
          padding: 8px 0;
          display: block;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .footer-link::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 50%;
          width: 0;
          height: 2px;
          background: var(--accent-color);
          transition: all 0.3s ease;
          transform: translateY(-50%);
        }

        .footer-link:hover::before {
          width: 10px;
        }

        .footer-link:hover {
          color: var(--accent-color);
          transform: translateX(15px);
          text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
        }

        /* Contact items */
        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
          font-size: 1rem;
          color: var(--text-secondary);
          opacity: ${E?"1":"0"};
          transform: ${E?"translateX(0)":"translateX(-20px)"};
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .contact-item:nth-child(1) { transition-delay: 0.4s; }
        .contact-item:nth-child(2) { transition-delay: 0.5s; }
        .contact-item:nth-child(3) { transition-delay: 0.6s; }

        .contact-icon {
          width: 40px;
          height: 40px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          margin-right: 15px;
          flex-shrink: 0;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          background: var(--accent-color);
          color: var(--dark-bg);
          transform: scale(1.1) rotate(360deg);
          box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
        }

        .contact-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: var(--accent-color);
        }

        /* Footer bottom */
        .footer-bottom {
          margin-top: 60px;
          padding: 30px 0;
          border-top: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: blur(10px);
          opacity: ${E?"1":"0"};
          transform: ${E?"translateY(0)":"translateY(30px)"};
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s;
        }

        .copyright-text {
          color: var(--text-muted);
          font-size: 0.95rem;
          margin: 0;
        }

        .bottom-links {
          display: flex;
          gap: 30px;
        }

        .bottom-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .bottom-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-color);
          transition: width 0.3s ease;
        }

        .bottom-link:hover::after {
          width: 100%;
        }

        .bottom-link:hover {
          color: var(--accent-color);
        }

        /* Scroll to top button */
        .scroll-top {
          position: absolute;
          top: -25px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: var(--primary-gradient);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }

        .scroll-top:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 768px) {
          .footer-brand {
            font-size: 2rem;
          }
          
          .bottom-links {
            flex-direction: column;
            gap: 15px;
            margin-top: 20px;
          }
          
          .scroll-top {
            right: 20px;
          }
        }
      `}),c.jsxs("footer",{id:"footer",className:"footer-section",children:[c.jsxs("div",{className:"footer-bg-elements",children:[c.jsx("div",{className:"bg-circle"}),c.jsx("div",{className:"bg-circle"}),c.jsx("div",{className:"bg-circle"}),c.jsx("div",{className:"glow-line"}),c.jsx("div",{className:"glow-line"})]}),c.jsx("div",{className:"container",children:c.jsx("div",{className:"footer-content",children:c.jsxs("div",{className:"row g-4",children:[c.jsxs("div",{className:"col-lg-4 col-md-6",children:[c.jsxs("a",{href:"#home",className:"footer-brand",children:[c.jsx("img",{src:"/src\\assets\\logo.svg",alt:""}),"IDEAL CONSULTANTS & DEVELOPERS"]}),c.jsx("p",{className:"footer-description",children:"Building excellence since 2003. We are committed to delivering high-quality construction services that exceed expectations and create lasting value for our clients."}),c.jsxs("div",{className:"footer-social",children:[c.jsx("a",{href:"#",className:"social-link","aria-label":"Facebook",children:c.jsx("i",{className:"fab fa-facebook-f"})}),c.jsx("a",{href:"#",className:"social-link","aria-label":"Twitter",children:c.jsx("i",{className:"fab fa-twitter"})}),c.jsx("a",{href:"#",className:"social-link","aria-label":"LinkedIn",children:c.jsx("i",{className:"fab fa-linkedin-in"})}),c.jsx("a",{href:"#",className:"social-link","aria-label":"Instagram",children:c.jsx("i",{className:"fab fa-instagram"})}),c.jsx("a",{href:"#",className:"social-link","aria-label":"YouTube",children:c.jsx("i",{className:"fab fa-youtube"})})]})]}),c.jsxs("div",{className:"col-lg-2 col-md-6 col-sm-6",children:[c.jsx("h6",{className:"footer-title",children:"Services"}),c.jsxs("ul",{className:"footer-links",children:[c.jsx("li",{children:c.jsx("a",{href:"#services",className:"footer-link",children:"Residential"})}),c.jsx("li",{children:c.jsx("a",{href:"#services",className:"footer-link",children:"Commercial"})}),c.jsx("li",{children:c.jsx("a",{href:"#services",className:"footer-link",children:"Industrial"})}),c.jsx("li",{children:c.jsx("a",{href:"#services",className:"footer-link",children:"Renovation"})})]})]}),c.jsxs("div",{className:"col-lg-3 col-md-6 col-sm-6",children:[c.jsx("h6",{className:"footer-title",children:"Quick Links"}),c.jsxs("ul",{className:"footer-links",children:[c.jsx("li",{children:c.jsx("a",{href:"#about",className:"footer-link",children:"About Us"})}),c.jsx("li",{children:c.jsx("a",{href:"#projects",className:"footer-link",children:"Our Projects"})}),c.jsx("li",{children:c.jsx("a",{href:"#team",className:"footer-link",children:"Our Team"})}),c.jsx("li",{children:c.jsx("a",{href:"#contact",className:"footer-link",children:"Contact"})})]})]}),c.jsxs("div",{className:"col-lg-3 col-md-6",children:[c.jsx("h6",{className:"footer-title",children:"Contact Info"}),c.jsxs("div",{className:"contact-item",children:[c.jsx("div",{className:"contact-icon",children:c.jsx("i",{className:"fas fa-map-marker-alt"})}),c.jsxs("div",{children:["123 Construction Ave,",c.jsx("br",{}),"Builder City, BC 12345"]})]}),c.jsxs("div",{className:"contact-item",children:[c.jsx("div",{className:"contact-icon",children:c.jsx("i",{className:"fas fa-phone"})}),c.jsx("a",{href:"tel:+15551234567",className:"contact-link",children:"+1 (555) 123-4567"})]}),c.jsxs("div",{className:"contact-item",children:[c.jsx("div",{className:"contact-icon",children:c.jsx("i",{className:"fas fa-envelope"})}),c.jsx("a",{href:"mailto:info@buildcorp.com",className:"contact-link",children:"info@buildcorp.com"})]})]})]})})}),c.jsxs("div",{className:"footer-bottom",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"row align-items-center",children:[c.jsx("div",{className:"col-md-6",children:c.jsxs("p",{className:"copyright-text",children:["© ",H," BuildCorp. All rights reserved."]})}),c.jsx("div",{className:"col-md-6 text-md-end",children:c.jsxs("div",{className:"bottom-links",children:[c.jsx("a",{href:"#privacy",className:"bottom-link",children:"Privacy Policy"}),c.jsx("a",{href:"#terms",className:"bottom-link",children:"Terms of Service"}),c.jsx("a",{href:"#cookies",className:"bottom-link",children:"Cookie Policy"})]})})]})}),c.jsx("button",{className:"scroll-top",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),"aria-label":"Scroll to top",children:c.jsx("i",{className:"fas fa-chevron-up"})})]})]})]})},tm=()=>{const[E,de]=be.useState(!1);return be.useEffect(()=>{document.body.className=E?"dark-theme":"light-theme",document.documentElement.setAttribute("data-theme",E?"dark":"light"),localStorage.setItem("darkMode",E.toString())},[E]),be.useEffect(()=>{const H=localStorage.getItem("darkMode");H&&de(H==="true")},[]),c.jsxs(c.Fragment,{children:[c.jsx("style",{jsx:!0,children:`
     
        :root {
          --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          --warning-gradient: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
          --bg-primary: #0d1117;
          --bg-secondary: #161b22;
          --bg-tertiary: #21262d;
          --text-primary: #f0f6fc;
          --text-secondary: #c9d1d9;
          --text-muted: #8b949e;
          --border-primary: #30363d;
          --shadow-primary: rgba(0, 0, 0, 0.6);
          --shadow-hover: rgba(0, 0, 0, 0.8);
          --accent-primary: #58a6ff;
          --accent-secondary: #39d353;
        }

 

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transition: color 0.3s ease, background-color 0.3s ease,
            border-color 0.3s ease;
        }

        body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: var(--text-dark);
          overflow-x: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Global Animation Classes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Smooth transitions for theme changes */
        .app-container {
          transition: all 0.3s ease;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: var(--bg-light);
        }

        ::-webkit-scrollbar-thumb {
          background: var(--primary-color);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #e55a2b;
        }

        /* Loading Animation */
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          opacity: 1;
          visibility: visible;
          transition: all 0.5s ease;
        }

        .loading-overlay.fade-out {
          opacity: 0;
          visibility: hidden;
        }

        .loader {
          width: 50px;
          height: 50px;
          border: 4px solid var(--bg-light);
          border-top: 4px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Back to Top Button */
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-color), #e55a2b);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.2rem;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          z-index: 1000;
        }

        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .back-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .back-to-top {
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            font-size: 1rem;
          }
        }

        /* Accessibility Improvements */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* Focus Styles */
        a:focus,
        button:focus,
        input:focus,
        textarea:focus,
        select:focus {
          outline: 2px solid var(--primary-color);
          outline-offset: 2px;
        }

        /* Print Styles */
        @media print {
          .navbar,
          .back-to-top,
          .social-links,
          .theme-toggle {
            display: none !important;
          }
        }
      `}),c.jsxs("div",{className:"app-container","data-theme":E?"dark":"light",children:[c.jsx(Lh,{}),c.jsxs("main",{children:[c.jsx("section",{id:"home",children:c.jsx(qh,{})}),c.jsx("section",{id:"about",children:c.jsx(Xh,{})}),c.jsx("section",{id:"services",children:c.jsx(Zh,{})}),c.jsx("section",{id:"projects",children:c.jsx(Fh,{})}),c.jsx("section",{id:"team",children:c.jsx(Ih,{})}),c.jsx("section",{id:"contact",children:c.jsx(Ph,{})})]}),c.jsx(em,{}),c.jsx(am,{})]})]})},am=()=>{const[E,de]=be.useState(!1);be.useEffect(()=>{const y=()=>{window.pageYOffset>300?de(!0):de(!1)};return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]);const H=()=>{window.scrollTo({top:0,behavior:"smooth"})};return c.jsx("button",{className:`back-to-top ${E?"visible":""}`,onClick:H,"aria-label":"Back to top",children:c.jsx("i",{className:"fas fa-chevron-up"})})};var yc={exports:{}};/*!
  * Bootstrap v5.3.7 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var nm=yc.exports,S0;function im(){return S0||(S0=1,function(E,de){(function(H,y){E.exports=y()})(nm,function(){const H=new Map,y={set(u,l,r){H.has(u)||H.set(u,new Map);const d=H.get(u);d.has(l)||d.size===0?d.set(l,r):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(d.keys())[0]}.`)},get:(u,l)=>H.has(u)&&H.get(u).get(l)||null,remove(u,l){if(!H.has(u))return;const r=H.get(u);r.delete(l),r.size===0&&H.delete(u)}},V="transitionend",k=u=>(u&&window.CSS&&window.CSS.escape&&(u=u.replace(/#([^\s"#']+)/g,(l,r)=>`#${CSS.escape(r)}`)),u),te=u=>{u.dispatchEvent(new Event(V))},ve=u=>!(!u||typeof u!="object")&&(u.jquery!==void 0&&(u=u[0]),u.nodeType!==void 0),U=u=>ve(u)?u.jquery?u[0]:u:typeof u=="string"&&u.length>0?document.querySelector(k(u)):null,A=u=>{if(!ve(u)||u.getClientRects().length===0)return!1;const l=getComputedStyle(u).getPropertyValue("visibility")==="visible",r=u.closest("details:not([open])");if(!r)return l;if(r!==u){const d=u.closest("summary");if(d&&d.parentNode!==r||d===null)return!1}return l},Y=u=>!u||u.nodeType!==Node.ELEMENT_NODE||!!u.classList.contains("disabled")||(u.disabled!==void 0?u.disabled:u.hasAttribute("disabled")&&u.getAttribute("disabled")!=="false"),me=u=>{if(!document.documentElement.attachShadow)return null;if(typeof u.getRootNode=="function"){const l=u.getRootNode();return l instanceof ShadowRoot?l:null}return u instanceof ShadowRoot?u:u.parentNode?me(u.parentNode):null},z=()=>{},L=u=>{u.offsetHeight},W=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,P=[],ne=()=>document.documentElement.dir==="rtl",_e=u=>{var l;l=()=>{const r=W();if(r){const d=u.NAME,g=r.fn[d];r.fn[d]=u.jQueryInterface,r.fn[d].Constructor=u,r.fn[d].noConflict=()=>(r.fn[d]=g,u.jQueryInterface)}},document.readyState==="loading"?(P.length||document.addEventListener("DOMContentLoaded",()=>{for(const r of P)r()}),P.push(l)):l()},Se=(u,l=[],r=u)=>typeof u=="function"?u.call(...l):r,Ye=(u,l,r=!0)=>{if(!r)return void Se(u);const d=(j=>{if(!j)return 0;let{transitionDuration:O,transitionDelay:R}=window.getComputedStyle(j);const Z=Number.parseFloat(O),$=Number.parseFloat(R);return Z||$?(O=O.split(",")[0],R=R.split(",")[0],1e3*(Number.parseFloat(O)+Number.parseFloat(R))):0})(l)+5;let g=!1;const b=({target:j})=>{j===l&&(g=!0,l.removeEventListener(V,b),Se(u))};l.addEventListener(V,b),setTimeout(()=>{g||te(l)},d)},yt=(u,l,r,d)=>{const g=u.length;let b=u.indexOf(l);return b===-1?!r&&d?u[g-1]:u[0]:(b+=r?1:-1,d&&(b=(b+g)%g),u[Math.max(0,Math.min(b,g-1))])},Te=/[^.]*(?=\..*)\.|.*/,it=/\..*/,Ht=/::\d+$/,xt={};let na=1;const dn={mouseenter:"mouseover",mouseleave:"mouseout"},Na=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function rt(u,l){return l&&`${l}::${na++}`||u.uidEvent||na++}function qa(u){const l=rt(u);return u.uidEvent=l,xt[l]=xt[l]||{},xt[l]}function Xa(u,l,r=null){return Object.values(u).find(d=>d.callable===l&&d.delegationSelector===r)}function ot(u,l,r){const d=typeof l=="string",g=d?r:l||r;let b=Ue(u);return Na.has(b)||(b=u),[d,g,b]}function N(u,l,r,d,g){if(typeof l!="string"||!u)return;let[b,j,O]=ot(l,r,d);l in dn&&(j=(ge=>function(ce){if(!ce.relatedTarget||ce.relatedTarget!==ce.delegateTarget&&!ce.delegateTarget.contains(ce.relatedTarget))return ge.call(this,ce)})(j));const R=qa(u),Z=R[O]||(R[O]={}),$=Xa(Z,j,b?r:null);if($)return void($.oneOff=$.oneOff&&g);const X=rt(j,l.replace(Te,"")),pe=b?function(ie,ge,ce){return function se(ke){const He=ie.querySelectorAll(ge);for(let{target:xe}=ke;xe&&xe!==this;xe=xe.parentNode)for(const ze of He)if(ze===xe)return C(ke,{delegateTarget:xe}),se.oneOff&&h.off(ie,ke.type,ge,ce),ce.apply(xe,[ke])}}(u,r,j):function(ie,ge){return function ce(se){return C(se,{delegateTarget:ie}),ce.oneOff&&h.off(ie,se.type,ge),ge.apply(ie,[se])}}(u,j);pe.delegationSelector=b?r:null,pe.callable=j,pe.oneOff=g,pe.uidEvent=X,Z[X]=pe,u.addEventListener(O,pe,b)}function G(u,l,r,d,g){const b=Xa(l[r],d,g);b&&(u.removeEventListener(r,b,!!g),delete l[r][b.uidEvent])}function le(u,l,r,d){const g=l[r]||{};for(const[b,j]of Object.entries(g))b.includes(d)&&G(u,l,r,j.callable,j.delegationSelector)}function Ue(u){return u=u.replace(it,""),dn[u]||u}const h={on(u,l,r,d){N(u,l,r,d,!1)},one(u,l,r,d){N(u,l,r,d,!0)},off(u,l,r,d){if(typeof l!="string"||!u)return;const[g,b,j]=ot(l,r,d),O=j!==l,R=qa(u),Z=R[j]||{},$=l.startsWith(".");if(b===void 0){if($)for(const X of Object.keys(R))le(u,R,X,l.slice(1));for(const[X,pe]of Object.entries(Z)){const ie=X.replace(Ht,"");O&&!l.includes(ie)||G(u,R,j,pe.callable,pe.delegationSelector)}}else{if(!Object.keys(Z).length)return;G(u,R,j,b,g?r:null)}},trigger(u,l,r){if(typeof l!="string"||!u)return null;const d=W();let g=null,b=!0,j=!0,O=!1;l!==Ue(l)&&d&&(g=d.Event(l,r),d(u).trigger(g),b=!g.isPropagationStopped(),j=!g.isImmediatePropagationStopped(),O=g.isDefaultPrevented());const R=C(new Event(l,{bubbles:b,cancelable:!0}),r);return O&&R.preventDefault(),j&&u.dispatchEvent(R),R.defaultPrevented&&g&&g.preventDefault(),R}};function C(u,l={}){for(const[r,d]of Object.entries(l))try{u[r]=d}catch{Object.defineProperty(u,r,{configurable:!0,get:()=>d})}return u}function K(u){if(u==="true")return!0;if(u==="false")return!1;if(u===Number(u).toString())return Number(u);if(u===""||u==="null")return null;if(typeof u!="string")return u;try{return JSON.parse(decodeURIComponent(u))}catch{return u}}function q(u){return u.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const F={setDataAttribute(u,l,r){u.setAttribute(`data-bs-${q(l)}`,r)},removeDataAttribute(u,l){u.removeAttribute(`data-bs-${q(l)}`)},getDataAttributes(u){if(!u)return{};const l={},r=Object.keys(u.dataset).filter(d=>d.startsWith("bs")&&!d.startsWith("bsConfig"));for(const d of r){let g=d.replace(/^bs/,"");g=g.charAt(0).toLowerCase()+g.slice(1),l[g]=K(u.dataset[d])}return l},getDataAttribute:(u,l)=>K(u.getAttribute(`data-bs-${q(l)}`))};class je{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,r){const d=ve(r)?F.getDataAttribute(r,"config"):{};return{...this.constructor.Default,...typeof d=="object"?d:{},...ve(r)?F.getDataAttributes(r):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,r=this.constructor.DefaultType){for(const[g,b]of Object.entries(r)){const j=l[g],O=ve(j)?"element":(d=j)==null?`${d}`:Object.prototype.toString.call(d).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(b).test(O))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${O}" but expected type "${b}".`)}var d}}class ae extends je{constructor(l,r){super(),(l=U(l))&&(this._element=l,this._config=this._getConfig(r),y.set(this._element,this.constructor.DATA_KEY,this))}dispose(){y.remove(this._element,this.constructor.DATA_KEY),h.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,r,d=!0){Ye(l,r,d)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return y.get(U(l),this.DATA_KEY)}static getOrCreateInstance(l,r={}){return this.getInstance(l)||new this(l,typeof r=="object"?r:null)}static get VERSION(){return"5.3.7"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const _t=u=>{let l=u.getAttribute("data-bs-target");if(!l||l==="#"){let r=u.getAttribute("href");if(!r||!r.includes("#")&&!r.startsWith("."))return null;r.includes("#")&&!r.startsWith("#")&&(r=`#${r.split("#")[1]}`),l=r&&r!=="#"?r.trim():null}return l?l.split(",").map(r=>k(r)).join(","):null},B={find:(u,l=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(l,u)),findOne:(u,l=document.documentElement)=>Element.prototype.querySelector.call(l,u),children:(u,l)=>[].concat(...u.children).filter(r=>r.matches(l)),parents(u,l){const r=[];let d=u.parentNode.closest(l);for(;d;)r.push(d),d=d.parentNode.closest(l);return r},prev(u,l){let r=u.previousElementSibling;for(;r;){if(r.matches(l))return[r];r=r.previousElementSibling}return[]},next(u,l){let r=u.nextElementSibling;for(;r;){if(r.matches(l))return[r];r=r.nextElementSibling}return[]},focusableChildren(u){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(r=>`${r}:not([tabindex^="-"])`).join(",");return this.find(l,u).filter(r=>!Y(r)&&A(r))},getSelectorFromElement(u){const l=_t(u);return l&&B.findOne(l)?l:null},getElementFromSelector(u){const l=_t(u);return l?B.findOne(l):null},getMultipleElementsFromSelector(u){const l=_t(u);return l?B.find(l):[]}},ia=(u,l="hide")=>{const r=`click.dismiss${u.EVENT_KEY}`,d=u.NAME;h.on(document,r,`[data-bs-dismiss="${d}"]`,function(g){if(["A","AREA"].includes(this.tagName)&&g.preventDefault(),Y(this))return;const b=B.getElementFromSelector(this)||this.closest(`.${d}`);u.getOrCreateInstance(b)[l]()})},cl=".bs.alert",ul=`close${cl}`,ls=`closed${cl}`;class hn extends ae{static get NAME(){return"alert"}close(){if(h.trigger(this._element,ul).defaultPrevented)return;this._element.classList.remove("show");const l=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),h.trigger(this._element,ls),this.dispose()}static jQueryInterface(l){return this.each(function(){const r=hn.getOrCreateInstance(this);if(typeof l=="string"){if(r[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);r[l](this)}})}}ia(hn,"close"),_e(hn);const fl='[data-bs-toggle="button"]';class Ui extends ae{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(l){return this.each(function(){const r=Ui.getOrCreateInstance(this);l==="toggle"&&r[l]()})}}h.on(document,"click.bs.button.data-api",fl,u=>{u.preventDefault();const l=u.target.closest(fl);Ui.getOrCreateInstance(l).toggle()}),_e(Ui);const $n=".bs.swipe",pa=`touchstart${$n}`,xc=`touchmove${$n}`,Mr=`touchend${$n}`,Dr=`pointerdown${$n}`,dl=`pointerup${$n}`,_c={endCallback:null,leftCallback:null,rightCallback:null},Cr={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class hl extends je{constructor(l,r){super(),this._element=l,l&&hl.isSupported()&&(this._config=this._getConfig(r),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return _c}static get DefaultType(){return Cr}static get NAME(){return"swipe"}dispose(){h.off(this._element,$n)}_start(l){this._supportPointerEvents?this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX):this._deltaX=l.touches[0].clientX}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),Se(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=40)return;const r=l/this._deltaX;this._deltaX=0,r&&Se(r>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.on(this._element,Dr,l=>this._start(l)),h.on(this._element,dl,l=>this._end(l)),this._element.classList.add("pointer-event")):(h.on(this._element,pa,l=>this._start(l)),h.on(this._element,xc,l=>this._move(l)),h.on(this._element,Mr,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType==="pen"||l.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ga=".bs.carousel",Jn=".data-api",Bt="ArrowLeft",Qa="ArrowRight",ct="next",Wn="prev",Fn="left",ml="right",pl=`slide${Ga}`,In=`slid${Ga}`,mn=`keydown${Ga}`,gl=`mouseenter${Ga}`,Hi=`mouseleave${Ga}`,wc=`dragstart${Ga}`,kr=`load${Ga}${Jn}`,Rr=`click${Ga}${Jn}`,bl="carousel",Va="active",Yr=".active",ss=".carousel-item",Ur=Yr+ss,rs={[Bt]:ml,[Qa]:Fn},os={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Hr={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Pn extends ae{constructor(l,r){super(l,r),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=B.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===bl&&this.cycle()}static get Default(){return os}static get DefaultType(){return Hr}static get NAME(){return"carousel"}next(){this._slide(ct)}nextWhenVisible(){!document.hidden&&A(this._element)&&this.next()}prev(){this._slide(Wn)}pause(){this._isSliding&&te(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?h.one(this._element,In,()=>this.cycle()):this.cycle())}to(l){const r=this._getItems();if(l>r.length-1||l<0)return;if(this._isSliding)return void h.one(this._element,In,()=>this.to(l));const d=this._getItemIndex(this._getActive());if(d===l)return;const g=l>d?ct:Wn;this._slide(g,r[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&h.on(this._element,mn,l=>this._keydown(l)),this._config.pause==="hover"&&(h.on(this._element,gl,()=>this.pause()),h.on(this._element,Hi,()=>this._maybeEnableCycle())),this._config.touch&&hl.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const r of B.find(".carousel-item img",this._element))h.on(r,wc,d=>d.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(Fn)),rightCallback:()=>this._slide(this._directionToOrder(ml)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new hl(this._element,l)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const r=rs[l.key];r&&(l.preventDefault(),this._slide(this._directionToOrder(r)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const r=B.findOne(Yr,this._indicatorsElement);r.classList.remove(Va),r.removeAttribute("aria-current");const d=B.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);d&&(d.classList.add(Va),d.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const r=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=r||this._config.defaultInterval}_slide(l,r=null){if(this._isSliding)return;const d=this._getActive(),g=l===ct,b=r||yt(this._getItems(),d,g,this._config.wrap);if(b===d)return;const j=this._getItemIndex(b),O=X=>h.trigger(this._element,X,{relatedTarget:b,direction:this._orderToDirection(l),from:this._getItemIndex(d),to:j});if(O(pl).defaultPrevented||!d||!b)return;const R=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(j),this._activeElement=b;const Z=g?"carousel-item-start":"carousel-item-end",$=g?"carousel-item-next":"carousel-item-prev";b.classList.add($),L(b),d.classList.add(Z),b.classList.add(Z),this._queueCallback(()=>{b.classList.remove(Z,$),b.classList.add(Va),d.classList.remove(Va,$,Z),this._isSliding=!1,O(In)},d,this._isAnimated()),R&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return B.findOne(Ur,this._element)}_getItems(){return B.find(ss,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return ne()?l===Fn?Wn:ct:l===Fn?ct:Wn}_orderToDirection(l){return ne()?l===Wn?Fn:ml:l===Wn?ml:Fn}static jQueryInterface(l){return this.each(function(){const r=Pn.getOrCreateInstance(this,l);if(typeof l!="number"){if(typeof l=="string"){if(r[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);r[l]()}}else r.to(l)})}}h.on(document,Rr,"[data-bs-slide], [data-bs-slide-to]",function(u){const l=B.getElementFromSelector(this);if(!l||!l.classList.contains(bl))return;u.preventDefault();const r=Pn.getOrCreateInstance(l),d=this.getAttribute("data-bs-slide-to");return d?(r.to(d),void r._maybeEnableCycle()):F.getDataAttribute(this,"slide")==="next"?(r.next(),void r._maybeEnableCycle()):(r.prev(),void r._maybeEnableCycle())}),h.on(window,kr,()=>{const u=B.find('[data-bs-ride="carousel"]');for(const l of u)Pn.getOrCreateInstance(l)}),_e(Pn);const $t=".bs.collapse",pt=`show${$t}`,Tt=`shown${$t}`,ei=`hide${$t}`,cs=`hidden${$t}`,Sc=`click${$t}.data-api`,us="show",pn="collapse",Za="collapsing",fs=`:scope .${pn} .${pn}`,Ka='[data-bs-toggle="collapse"]',ti={parent:null,toggle:!0},Bi={parent:"(null|element)",toggle:"boolean"};class la extends ae{constructor(l,r){super(l,r),this._isTransitioning=!1,this._triggerArray=[];const d=B.find(Ka);for(const g of d){const b=B.getSelectorFromElement(g),j=B.find(b).filter(O=>O===this._element);b!==null&&j.length&&this._triggerArray.push(g)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ti}static get DefaultType(){return Bi}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(g=>g!==this._element).map(g=>la.getOrCreateInstance(g,{toggle:!1}))),l.length&&l[0]._isTransitioning||h.trigger(this._element,pt).defaultPrevented)return;for(const g of l)g.hide();const r=this._getDimension();this._element.classList.remove(pn),this._element.classList.add(Za),this._element.style[r]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const d=`scroll${r[0].toUpperCase()+r.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Za),this._element.classList.add(pn,us),this._element.style[r]="",h.trigger(this._element,Tt)},this._element,!0),this._element.style[r]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown()||h.trigger(this._element,ei).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,L(this._element),this._element.classList.add(Za),this._element.classList.remove(pn,us);for(const r of this._triggerArray){const d=B.getElementFromSelector(r);d&&!this._isShown(d)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0,this._element.style[l]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Za),this._element.classList.add(pn),h.trigger(this._element,cs)},this._element,!0)}_isShown(l=this._element){return l.classList.contains(us)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=U(l.parent),l}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(Ka);for(const r of l){const d=B.getElementFromSelector(r);d&&this._addAriaAndCollapsedClass([r],this._isShown(d))}}_getFirstLevelChildren(l){const r=B.find(fs,this._config.parent);return B.find(l,this._config.parent).filter(d=>!r.includes(d))}_addAriaAndCollapsedClass(l,r){if(l.length)for(const d of l)d.classList.toggle("collapsed",!r),d.setAttribute("aria-expanded",r)}static jQueryInterface(l){const r={};return typeof l=="string"&&/show|hide/.test(l)&&(r.toggle=!1),this.each(function(){const d=la.getOrCreateInstance(this,r);if(typeof l=="string"){if(d[l]===void 0)throw new TypeError(`No method named "${l}"`);d[l]()}})}}h.on(document,Sc,Ka,function(u){(u.target.tagName==="A"||u.delegateTarget&&u.delegateTarget.tagName==="A")&&u.preventDefault();for(const l of B.getMultipleElementsFromSelector(this))la.getOrCreateInstance(l,{toggle:!1}).toggle()}),_e(la);var Oe="top",zt="bottom",Ot="right",Je="left",Ta="auto",ai=[Oe,zt,Ot,Je],$a="start",gn="end",Br="clippingParents",ni="viewport",za="popper",ga="reference",Li=ai.reduce(function(u,l){return u.concat([l+"-"+$a,l+"-"+gn])},[]),vl=[].concat(ai,[Ta]).reduce(function(u,l){return u.concat([l,l+"-"+$a,l+"-"+gn])},[]),bn="beforeRead",yl="read",xl="afterRead",Lr="beforeMain",ds="main",Lt="afterMain",hs="beforeWrite",qr="write",qi="afterWrite",ms=[bn,yl,xl,Lr,ds,Lt,hs,qr,qi];function qt(u){return u?(u.nodeName||"").toLowerCase():null}function Xt(u){if(u==null)return window;if(u.toString()!=="[object Window]"){var l=u.ownerDocument;return l&&l.defaultView||window}return u}function lt(u){return u instanceof Xt(u).Element||u instanceof Element}function Mt(u){return u instanceof Xt(u).HTMLElement||u instanceof HTMLElement}function _l(u){return typeof ShadowRoot<"u"&&(u instanceof Xt(u).ShadowRoot||u instanceof ShadowRoot)}const Xi={name:"applyStyles",enabled:!0,phase:"write",fn:function(u){var l=u.state;Object.keys(l.elements).forEach(function(r){var d=l.styles[r]||{},g=l.attributes[r]||{},b=l.elements[r];Mt(b)&&qt(b)&&(Object.assign(b.style,d),Object.keys(g).forEach(function(j){var O=g[j];O===!1?b.removeAttribute(j):b.setAttribute(j,O===!0?"":O)}))})},effect:function(u){var l=u.state,r={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,r.popper),l.styles=r,l.elements.arrow&&Object.assign(l.elements.arrow.style,r.arrow),function(){Object.keys(l.elements).forEach(function(d){var g=l.elements[d],b=l.attributes[d]||{},j=Object.keys(l.styles.hasOwnProperty(d)?l.styles[d]:r[d]).reduce(function(O,R){return O[R]="",O},{});Mt(g)&&qt(g)&&(Object.assign(g.style,j),Object.keys(b).forEach(function(O){g.removeAttribute(O)}))})}},requires:["computeStyles"]};function wt(u){return u.split("-")[0]}var Ja=Math.max,Gi=Math.min,sa=Math.round;function ps(){var u=navigator.userAgentData;return u!=null&&u.brands&&Array.isArray(u.brands)?u.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function gs(){return!/^((?!chrome|android).)*safari/i.test(ps())}function vn(u,l,r){l===void 0&&(l=!1),r===void 0&&(r=!1);var d=u.getBoundingClientRect(),g=1,b=1;l&&Mt(u)&&(g=u.offsetWidth>0&&sa(d.width)/u.offsetWidth||1,b=u.offsetHeight>0&&sa(d.height)/u.offsetHeight||1);var j=(lt(u)?Xt(u):window).visualViewport,O=!gs()&&r,R=(d.left+(O&&j?j.offsetLeft:0))/g,Z=(d.top+(O&&j?j.offsetTop:0))/b,$=d.width/g,X=d.height/b;return{width:$,height:X,top:Z,right:R+$,bottom:Z+X,left:R,x:R,y:Z}}function Qi(u){var l=vn(u),r=u.offsetWidth,d=u.offsetHeight;return Math.abs(l.width-r)<=1&&(r=l.width),Math.abs(l.height-d)<=1&&(d=l.height),{x:u.offsetLeft,y:u.offsetTop,width:r,height:d}}function Xr(u,l){var r=l.getRootNode&&l.getRootNode();if(u.contains(l))return!0;if(r&&_l(r)){var d=l;do{if(d&&u.isSameNode(d))return!0;d=d.parentNode||d.host}while(d)}return!1}function Oa(u){return Xt(u).getComputedStyle(u)}function wl(u){return["table","td","th"].indexOf(qt(u))>=0}function ba(u){return((lt(u)?u.ownerDocument:u.document)||window.document).documentElement}function ii(u){return qt(u)==="html"?u:u.assignedSlot||u.parentNode||(_l(u)?u.host:null)||ba(u)}function yn(u){return Mt(u)&&Oa(u).position!=="fixed"?u.offsetParent:null}function va(u){for(var l=Xt(u),r=yn(u);r&&wl(r)&&Oa(r).position==="static";)r=yn(r);return r&&(qt(r)==="html"||qt(r)==="body"&&Oa(r).position==="static")?l:r||function(d){var g=/firefox/i.test(ps());if(/Trident/i.test(ps())&&Mt(d)&&Oa(d).position==="fixed")return null;var b=ii(d);for(_l(b)&&(b=b.host);Mt(b)&&["html","body"].indexOf(qt(b))<0;){var j=Oa(b);if(j.transform!=="none"||j.perspective!=="none"||j.contain==="paint"||["transform","perspective"].indexOf(j.willChange)!==-1||g&&j.willChange==="filter"||g&&j.filter&&j.filter!=="none")return b;b=b.parentNode}return null}(u)||l}function Sl(u){return["top","bottom"].indexOf(u)>=0?"x":"y"}function xn(u,l,r){return Ja(u,Gi(l,r))}function bs(u){return Object.assign({},{top:0,right:0,bottom:0,left:0},u)}function li(u,l){return l.reduce(function(r,d){return r[d]=u,r},{})}const ya={name:"arrow",enabled:!0,phase:"main",fn:function(u){var l,r=u.state,d=u.name,g=u.options,b=r.elements.arrow,j=r.modifiersData.popperOffsets,O=wt(r.placement),R=Sl(O),Z=[Je,Ot].indexOf(O)>=0?"height":"width";if(b&&j){var $=function(fe,Me){return bs(typeof(fe=typeof fe=="function"?fe(Object.assign({},Me.rects,{placement:Me.placement})):fe)!="number"?fe:li(fe,ai))}(g.padding,r),X=Qi(b),pe=R==="y"?Oe:Je,ie=R==="y"?zt:Ot,ge=r.rects.reference[Z]+r.rects.reference[R]-j[R]-r.rects.popper[Z],ce=j[R]-r.rects.reference[R],se=va(b),ke=se?R==="y"?se.clientHeight||0:se.clientWidth||0:0,He=ge/2-ce/2,xe=$[pe],ze=ke-X[Z]-$[ie],ue=ke/2-X[Z]/2+He,Q=xn(xe,ue,ze),I=R;r.modifiersData[d]=((l={})[I]=Q,l.centerOffset=Q-ue,l)}},effect:function(u){var l=u.state,r=u.options.element,d=r===void 0?"[data-popper-arrow]":r;d!=null&&(typeof d!="string"||(d=l.elements.popper.querySelector(d)))&&Xr(l.elements.popper,d)&&(l.elements.arrow=d)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Wa(u){return u.split("-")[1]}var Vi={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ma(u){var l,r=u.popper,d=u.popperRect,g=u.placement,b=u.variation,j=u.offsets,O=u.position,R=u.gpuAcceleration,Z=u.adaptive,$=u.roundOffsets,X=u.isFixed,pe=j.x,ie=pe===void 0?0:pe,ge=j.y,ce=ge===void 0?0:ge,se=typeof $=="function"?$({x:ie,y:ce}):{x:ie,y:ce};ie=se.x,ce=se.y;var ke=j.hasOwnProperty("x"),He=j.hasOwnProperty("y"),xe=Je,ze=Oe,ue=window;if(Z){var Q=va(r),I="clientHeight",fe="clientWidth";Q===Xt(r)&&Oa(Q=ba(r)).position!=="static"&&O==="absolute"&&(I="scrollHeight",fe="scrollWidth"),(g===Oe||(g===Je||g===Ot)&&b===gn)&&(ze=zt,ce-=(X&&Q===ue&&ue.visualViewport?ue.visualViewport.height:Q[I])-d.height,ce*=R?1:-1),g!==Je&&(g!==Oe&&g!==zt||b!==gn)||(xe=Ot,ie-=(X&&Q===ue&&ue.visualViewport?ue.visualViewport.width:Q[fe])-d.width,ie*=R?1:-1)}var Me,Xe=Object.assign({position:O},Z&&Vi),et=$===!0?function(Rt,tt){var ft=Rt.x,It=Rt.y,ye=tt.devicePixelRatio||1;return{x:sa(ft*ye)/ye||0,y:sa(It*ye)/ye||0}}({x:ie,y:ce},Xt(r)):{x:ie,y:ce};return ie=et.x,ce=et.y,R?Object.assign({},Xe,((Me={})[ze]=He?"0":"",Me[xe]=ke?"0":"",Me.transform=(ue.devicePixelRatio||1)<=1?"translate("+ie+"px, "+ce+"px)":"translate3d("+ie+"px, "+ce+"px, 0)",Me)):Object.assign({},Xe,((l={})[ze]=He?ce+"px":"",l[xe]=ke?ie+"px":"",l.transform="",l))}const Zi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(u){var l=u.state,r=u.options,d=r.gpuAcceleration,g=d===void 0||d,b=r.adaptive,j=b===void 0||b,O=r.roundOffsets,R=O===void 0||O,Z={placement:wt(l.placement),variation:Wa(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:g,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,Ma(Object.assign({},Z,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:j,roundOffsets:R})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,Ma(Object.assign({},Z,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:R})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}};var _n={passive:!0};const jl={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(u){var l=u.state,r=u.instance,d=u.options,g=d.scroll,b=g===void 0||g,j=d.resize,O=j===void 0||j,R=Xt(l.elements.popper),Z=[].concat(l.scrollParents.reference,l.scrollParents.popper);return b&&Z.forEach(function($){$.addEventListener("scroll",r.update,_n)}),O&&R.addEventListener("resize",r.update,_n),function(){b&&Z.forEach(function($){$.removeEventListener("scroll",r.update,_n)}),O&&R.removeEventListener("resize",r.update,_n)}},data:{}};var El={left:"right",right:"left",bottom:"top",top:"bottom"};function wn(u){return u.replace(/left|right|bottom|top/g,function(l){return El[l]})}var Gr={start:"end",end:"start"};function St(u){return u.replace(/start|end/g,function(l){return Gr[l]})}function Da(u){var l=Xt(u);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function si(u){return vn(ba(u)).left+Da(u).scrollLeft}function Sn(u){var l=Oa(u),r=l.overflow,d=l.overflowX,g=l.overflowY;return/auto|scroll|overlay|hidden/.test(r+g+d)}function Qr(u){return["html","body","#document"].indexOf(qt(u))>=0?u.ownerDocument.body:Mt(u)&&Sn(u)?u:Qr(ii(u))}function jn(u,l){var r;l===void 0&&(l=[]);var d=Qr(u),g=d===((r=u.ownerDocument)==null?void 0:r.body),b=Xt(d),j=g?[b].concat(b.visualViewport||[],Sn(d)?d:[]):d,O=l.concat(j);return g?O:O.concat(jn(ii(j)))}function Ki(u){return Object.assign({},u,{left:u.x,top:u.y,right:u.x+u.width,bottom:u.y+u.height})}function ri(u,l,r){return l===ni?Ki(function(d,g){var b=Xt(d),j=ba(d),O=b.visualViewport,R=j.clientWidth,Z=j.clientHeight,$=0,X=0;if(O){R=O.width,Z=O.height;var pe=gs();(pe||!pe&&g==="fixed")&&($=O.offsetLeft,X=O.offsetTop)}return{width:R,height:Z,x:$+si(d),y:X}}(u,r)):lt(l)?function(d,g){var b=vn(d,!1,g==="fixed");return b.top=b.top+d.clientTop,b.left=b.left+d.clientLeft,b.bottom=b.top+d.clientHeight,b.right=b.left+d.clientWidth,b.width=d.clientWidth,b.height=d.clientHeight,b.x=b.left,b.y=b.top,b}(l,r):Ki(function(d){var g,b=ba(d),j=Da(d),O=(g=d.ownerDocument)==null?void 0:g.body,R=Ja(b.scrollWidth,b.clientWidth,O?O.scrollWidth:0,O?O.clientWidth:0),Z=Ja(b.scrollHeight,b.clientHeight,O?O.scrollHeight:0,O?O.clientHeight:0),$=-j.scrollLeft+si(d),X=-j.scrollTop;return Oa(O||b).direction==="rtl"&&($+=Ja(b.clientWidth,O?O.clientWidth:0)-R),{width:R,height:Z,x:$,y:X}}(ba(u)))}function $i(u){var l,r=u.reference,d=u.element,g=u.placement,b=g?wt(g):null,j=g?Wa(g):null,O=r.x+r.width/2-d.width/2,R=r.y+r.height/2-d.height/2;switch(b){case Oe:l={x:O,y:r.y-d.height};break;case zt:l={x:O,y:r.y+r.height};break;case Ot:l={x:r.x+r.width,y:R};break;case Je:l={x:r.x-d.width,y:R};break;default:l={x:r.x,y:r.y}}var Z=b?Sl(b):null;if(Z!=null){var $=Z==="y"?"height":"width";switch(j){case $a:l[Z]=l[Z]-(r[$]/2-d[$]/2);break;case gn:l[Z]=l[Z]+(r[$]/2-d[$]/2)}}return l}function En(u,l){l===void 0&&(l={});var r=l,d=r.placement,g=d===void 0?u.placement:d,b=r.strategy,j=b===void 0?u.strategy:b,O=r.boundary,R=O===void 0?Br:O,Z=r.rootBoundary,$=Z===void 0?ni:Z,X=r.elementContext,pe=X===void 0?za:X,ie=r.altBoundary,ge=ie!==void 0&&ie,ce=r.padding,se=ce===void 0?0:ce,ke=bs(typeof se!="number"?se:li(se,ai)),He=pe===za?ga:za,xe=u.rects.popper,ze=u.elements[ge?He:pe],ue=function(tt,ft,It,ye){var Pt=ft==="clippingParents"?function(Be){var dt=jn(ii(Be)),Yt=["absolute","fixed"].indexOf(Oa(Be).position)>=0&&Mt(Be)?va(Be):Be;return lt(Yt)?dt.filter(function(Sa){return lt(Sa)&&Xr(Sa,Yt)&&qt(Sa)!=="body"}):[]}(tt):[].concat(ft),ea=[].concat(Pt,[It]),Ln=ea[0],at=ea.reduce(function(Be,dt){var Yt=ri(tt,dt,ye);return Be.top=Ja(Yt.top,Be.top),Be.right=Gi(Yt.right,Be.right),Be.bottom=Gi(Yt.bottom,Be.bottom),Be.left=Ja(Yt.left,Be.left),Be},ri(tt,Ln,ye));return at.width=at.right-at.left,at.height=at.bottom-at.top,at.x=at.left,at.y=at.top,at}(lt(ze)?ze:ze.contextElement||ba(u.elements.popper),R,$,j),Q=vn(u.elements.reference),I=$i({reference:Q,element:xe,placement:g}),fe=Ki(Object.assign({},xe,I)),Me=pe===za?fe:Q,Xe={top:ue.top-Me.top+ke.top,bottom:Me.bottom-ue.bottom+ke.bottom,left:ue.left-Me.left+ke.left,right:Me.right-ue.right+ke.right},et=u.modifiersData.offset;if(pe===za&&et){var Rt=et[g];Object.keys(Xe).forEach(function(tt){var ft=[Ot,zt].indexOf(tt)>=0?1:-1,It=[Oe,zt].indexOf(tt)>=0?"y":"x";Xe[tt]+=Rt[It]*ft})}return Xe}function jc(u,l){l===void 0&&(l={});var r=l,d=r.placement,g=r.boundary,b=r.rootBoundary,j=r.padding,O=r.flipVariations,R=r.allowedAutoPlacements,Z=R===void 0?vl:R,$=Wa(d),X=$?O?Li:Li.filter(function(ge){return Wa(ge)===$}):ai,pe=X.filter(function(ge){return Z.indexOf(ge)>=0});pe.length===0&&(pe=X);var ie=pe.reduce(function(ge,ce){return ge[ce]=En(u,{placement:ce,boundary:g,rootBoundary:b,padding:j})[wt(ce)],ge},{});return Object.keys(ie).sort(function(ge,ce){return ie[ge]-ie[ce]})}const Vr={name:"flip",enabled:!0,phase:"main",fn:function(u){var l=u.state,r=u.options,d=u.name;if(!l.modifiersData[d]._skip){for(var g=r.mainAxis,b=g===void 0||g,j=r.altAxis,O=j===void 0||j,R=r.fallbackPlacements,Z=r.padding,$=r.boundary,X=r.rootBoundary,pe=r.altBoundary,ie=r.flipVariations,ge=ie===void 0||ie,ce=r.allowedAutoPlacements,se=l.options.placement,ke=wt(se),He=R||(ke!==se&&ge?function(Be){if(wt(Be)===Ta)return[];var dt=wn(Be);return[St(Be),dt,St(dt)]}(se):[wn(se)]),xe=[se].concat(He).reduce(function(Be,dt){return Be.concat(wt(dt)===Ta?jc(l,{placement:dt,boundary:$,rootBoundary:X,padding:Z,flipVariations:ge,allowedAutoPlacements:ce}):dt)},[]),ze=l.rects.reference,ue=l.rects.popper,Q=new Map,I=!0,fe=xe[0],Me=0;Me<xe.length;Me++){var Xe=xe[Me],et=wt(Xe),Rt=Wa(Xe)===$a,tt=[Oe,zt].indexOf(et)>=0,ft=tt?"width":"height",It=En(l,{placement:Xe,boundary:$,rootBoundary:X,altBoundary:pe,padding:Z}),ye=tt?Rt?Ot:Je:Rt?zt:Oe;ze[ft]>ue[ft]&&(ye=wn(ye));var Pt=wn(ye),ea=[];if(b&&ea.push(It[et]<=0),O&&ea.push(It[ye]<=0,It[Pt]<=0),ea.every(function(Be){return Be})){fe=Xe,I=!1;break}Q.set(Xe,ea)}if(I)for(var Ln=function(Be){var dt=xe.find(function(Yt){var Sa=Q.get(Yt);if(Sa)return Sa.slice(0,Be).every(function(ht){return ht})});if(dt)return fe=dt,"break"},at=ge?3:1;at>0&&Ln(at)!=="break";at--);l.placement!==fe&&(l.modifiersData[d]._skip=!0,l.placement=fe,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function Zr(u,l,r){return r===void 0&&(r={x:0,y:0}),{top:u.top-l.height-r.y,right:u.right-l.width+r.x,bottom:u.bottom-l.height+r.y,left:u.left-l.width-r.x}}function Al(u){return[Oe,Ot,zt,Je].some(function(l){return u[l]>=0})}const Kr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(u){var l=u.state,r=u.name,d=l.rects.reference,g=l.rects.popper,b=l.modifiersData.preventOverflow,j=En(l,{elementContext:"reference"}),O=En(l,{altBoundary:!0}),R=Zr(j,d),Z=Zr(O,g,b),$=Al(R),X=Al(Z);l.modifiersData[r]={referenceClippingOffsets:R,popperEscapeOffsets:Z,isReferenceHidden:$,hasPopperEscaped:X},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":$,"data-popper-escaped":X})}},$r={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(u){var l=u.state,r=u.options,d=u.name,g=r.offset,b=g===void 0?[0,0]:g,j=vl.reduce(function($,X){return $[X]=function(pe,ie,ge){var ce=wt(pe),se=[Je,Oe].indexOf(ce)>=0?-1:1,ke=typeof ge=="function"?ge(Object.assign({},ie,{placement:pe})):ge,He=ke[0],xe=ke[1];return He=He||0,xe=(xe||0)*se,[Je,Ot].indexOf(ce)>=0?{x:xe,y:He}:{x:He,y:xe}}(X,l.rects,b),$},{}),O=j[l.placement],R=O.x,Z=O.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=R,l.modifiersData.popperOffsets.y+=Z),l.modifiersData[d]=j}},vs={name:"popperOffsets",enabled:!0,phase:"read",fn:function(u){var l=u.state,r=u.name;l.modifiersData[r]=$i({reference:l.rects.reference,element:l.rects.popper,placement:l.placement})},data:{}},Jr={name:"preventOverflow",enabled:!0,phase:"main",fn:function(u){var l=u.state,r=u.options,d=u.name,g=r.mainAxis,b=g===void 0||g,j=r.altAxis,O=j!==void 0&&j,R=r.boundary,Z=r.rootBoundary,$=r.altBoundary,X=r.padding,pe=r.tether,ie=pe===void 0||pe,ge=r.tetherOffset,ce=ge===void 0?0:ge,se=En(l,{boundary:R,rootBoundary:Z,padding:X,altBoundary:$}),ke=wt(l.placement),He=Wa(l.placement),xe=!He,ze=Sl(ke),ue=ze==="x"?"y":"x",Q=l.modifiersData.popperOffsets,I=l.rects.reference,fe=l.rects.popper,Me=typeof ce=="function"?ce(Object.assign({},l.rects,{placement:l.placement})):ce,Xe=typeof Me=="number"?{mainAxis:Me,altAxis:Me}:Object.assign({mainAxis:0,altAxis:0},Me),et=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,Rt={x:0,y:0};if(Q){if(b){var tt,ft=ze==="y"?Oe:Je,It=ze==="y"?zt:Ot,ye=ze==="y"?"height":"width",Pt=Q[ze],ea=Pt+se[ft],Ln=Pt-se[It],at=ie?-fe[ye]/2:0,Be=He===$a?I[ye]:fe[ye],dt=He===$a?-fe[ye]:-I[ye],Yt=l.elements.arrow,Sa=ie&&Yt?Qi(Yt):{width:0,height:0},ht=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},We=ht[ft],Yl=ht[It],sn=xn(0,I[ye],Sa[ye]),Ul=xe?I[ye]/2-at-sn-We-Xe.mainAxis:Be-sn-We-Xe.mainAxis,Js=xe?-I[ye]/2+at+sn+Yl+Xe.mainAxis:dt+sn+Yl+Xe.mainAxis,ca=l.elements.arrow&&va(l.elements.arrow),Hl=ca?ze==="y"?ca.clientTop||0:ca.clientLeft||0:0,Bl=(tt=et?.[ze])!=null?tt:0,Ws=Pt+Js-Bl,Fs=xn(ie?Gi(ea,Pt+Ul-Bl-Hl):ea,Pt,ie?Ja(Ln,Ws):Ln);Q[ze]=Fs,Rt[ze]=Fs-Pt}if(O){var Is,Do=ze==="x"?Oe:Je,Co=ze==="x"?zt:Ot,rn=Q[ue],il=ue==="y"?"height":"width",Ll=rn+se[Do],Ps=rn-se[Co],er=[Oe,Je].indexOf(ke)!==-1,tr=(Is=et?.[ue])!=null?Is:0,ar=er?Ll:rn-I[il]-fe[il]-tr+Xe.altAxis,nr=er?rn+I[il]+fe[il]-tr-Xe.altAxis:Ps,ql=ie&&er?function(ko,Ro,Xl){var ir=xn(ko,Ro,Xl);return ir>Xl?Xl:ir}(ar,rn,nr):xn(ie?ar:Ll,rn,ie?nr:Ps);Q[ue]=ql,Rt[ue]=ql-rn}l.modifiersData[d]=Rt}},requiresIfExists:["offset"]};function Ec(u,l,r){r===void 0&&(r=!1);var d,g,b=Mt(l),j=Mt(l)&&function(X){var pe=X.getBoundingClientRect(),ie=sa(pe.width)/X.offsetWidth||1,ge=sa(pe.height)/X.offsetHeight||1;return ie!==1||ge!==1}(l),O=ba(l),R=vn(u,j,r),Z={scrollLeft:0,scrollTop:0},$={x:0,y:0};return(b||!b&&!r)&&((qt(l)!=="body"||Sn(O))&&(Z=(d=l)!==Xt(d)&&Mt(d)?{scrollLeft:(g=d).scrollLeft,scrollTop:g.scrollTop}:Da(d)),Mt(l)?(($=vn(l,!0)).x+=l.clientLeft,$.y+=l.clientTop):O&&($.x=si(O))),{x:R.left+Z.scrollLeft-$.x,y:R.top+Z.scrollTop-$.y,width:R.width,height:R.height}}function Wr(u){var l=new Map,r=new Set,d=[];function g(b){r.add(b.name),[].concat(b.requires||[],b.requiresIfExists||[]).forEach(function(j){if(!r.has(j)){var O=l.get(j);O&&g(O)}}),d.push(b)}return u.forEach(function(b){l.set(b.name,b)}),u.forEach(function(b){r.has(b.name)||g(b)}),d}var Fr={placement:"bottom",modifiers:[],strategy:"absolute"};function Ir(){for(var u=arguments.length,l=new Array(u),r=0;r<u;r++)l[r]=arguments[r];return!l.some(function(d){return!(d&&typeof d.getBoundingClientRect=="function")})}function Nl(u){u===void 0&&(u={});var l=u,r=l.defaultModifiers,d=r===void 0?[]:r,g=l.defaultOptions,b=g===void 0?Fr:g;return function(j,O,R){R===void 0&&(R=b);var Z,$,X={placement:"bottom",orderedModifiers:[],options:Object.assign({},Fr,b),modifiersData:{},elements:{reference:j,popper:O},attributes:{},styles:{}},pe=[],ie=!1,ge={state:X,setOptions:function(se){var ke=typeof se=="function"?se(X.options):se;ce(),X.options=Object.assign({},b,X.options,ke),X.scrollParents={reference:lt(j)?jn(j):j.contextElement?jn(j.contextElement):[],popper:jn(O)};var He,xe,ze=function(ue){var Q=Wr(ue);return ms.reduce(function(I,fe){return I.concat(Q.filter(function(Me){return Me.phase===fe}))},[])}((He=[].concat(d,X.options.modifiers),xe=He.reduce(function(ue,Q){var I=ue[Q.name];return ue[Q.name]=I?Object.assign({},I,Q,{options:Object.assign({},I.options,Q.options),data:Object.assign({},I.data,Q.data)}):Q,ue},{}),Object.keys(xe).map(function(ue){return xe[ue]})));return X.orderedModifiers=ze.filter(function(ue){return ue.enabled}),X.orderedModifiers.forEach(function(ue){var Q=ue.name,I=ue.options,fe=I===void 0?{}:I,Me=ue.effect;if(typeof Me=="function"){var Xe=Me({state:X,name:Q,instance:ge,options:fe});pe.push(Xe||function(){})}}),ge.update()},forceUpdate:function(){if(!ie){var se=X.elements,ke=se.reference,He=se.popper;if(Ir(ke,He)){X.rects={reference:Ec(ke,va(He),X.options.strategy==="fixed"),popper:Qi(He)},X.reset=!1,X.placement=X.options.placement,X.orderedModifiers.forEach(function(Me){return X.modifiersData[Me.name]=Object.assign({},Me.data)});for(var xe=0;xe<X.orderedModifiers.length;xe++)if(X.reset!==!0){var ze=X.orderedModifiers[xe],ue=ze.fn,Q=ze.options,I=Q===void 0?{}:Q,fe=ze.name;typeof ue=="function"&&(X=ue({state:X,options:I,name:fe,instance:ge})||X)}else X.reset=!1,xe=-1}}},update:(Z=function(){return new Promise(function(se){ge.forceUpdate(),se(X)})},function(){return $||($=new Promise(function(se){Promise.resolve().then(function(){$=void 0,se(Z())})})),$}),destroy:function(){ce(),ie=!0}};if(!Ir(j,O))return ge;function ce(){pe.forEach(function(se){return se()}),pe=[]}return ge.setOptions(R).then(function(se){!ie&&R.onFirstUpdate&&R.onFirstUpdate(se)}),ge}}var Ac=Nl(),ys=Nl({defaultModifiers:[jl,vs,Zi,Xi]}),xs=Nl({defaultModifiers:[jl,vs,Zi,Xi,$r,Vr,Jr,ya,Kr]});const Pr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Lt,afterRead:xl,afterWrite:qi,applyStyles:Xi,arrow:ya,auto:Ta,basePlacements:ai,beforeMain:Lr,beforeRead:bn,beforeWrite:hs,bottom:zt,clippingParents:Br,computeStyles:Zi,createPopper:xs,createPopperBase:Ac,createPopperLite:ys,detectOverflow:En,end:gn,eventListeners:jl,flip:Vr,hide:Kr,left:Je,main:ds,modifierPhases:ms,offset:$r,placements:vl,popper:za,popperGenerator:Nl,popperOffsets:vs,preventOverflow:Jr,read:yl,reference:ga,right:Ot,start:$a,top:Oe,variationPlacements:Li,viewport:ni,write:qr},Symbol.toStringTag,{value:"Module"})),eo="dropdown",Fa=".bs.dropdown",_s=".data-api",Nc="ArrowUp",to="ArrowDown",Tc=`hide${Fa}`,zc=`hidden${Fa}`,Oc=`show${Fa}`,Mc=`shown${Fa}`,ao=`click${Fa}${_s}`,no=`keydown${Fa}${_s}`,ws=`keyup${Fa}${_s}`,xa="show",An='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',io=`${An}.${xa}`,Ji=".dropdown-menu",lo=ne()?"top-end":"top-start",so=ne()?"top-start":"top-end",ro=ne()?"bottom-end":"bottom-start",oi=ne()?"bottom-start":"bottom-end",Dc=ne()?"left-start":"right-start",Cc=ne()?"right-start":"left-start",kc={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},oo={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Jt extends ae{constructor(l,r){super(l,r),this._popper=null,this._parent=this._element.parentNode,this._menu=B.next(this._element,Ji)[0]||B.prev(this._element,Ji)[0]||B.findOne(Ji,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return kc}static get DefaultType(){return oo}static get NAME(){return eo}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Y(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!h.trigger(this._element,Oc,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const r of[].concat(...document.body.children))h.on(r,"mouseover",z);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(xa),this._element.classList.add(xa),h.trigger(this._element,Mc,l)}}hide(){if(Y(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!h.trigger(this._element,Tc,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))h.off(r,"mouseover",z);this._popper&&this._popper.destroy(),this._menu.classList.remove(xa),this._element.classList.remove(xa),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),h.trigger(this._element,zc,l),this._element.focus()}}_getConfig(l){if(typeof(l=super._getConfig(l)).reference=="object"&&!ve(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${eo.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(Pr===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let l=this._element;this._config.reference==="parent"?l=this._parent:ve(this._config.reference)?l=U(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const r=this._getPopperConfig();this._popper=xs(l,this._menu,r)}_isShown(){return this._menu.classList.contains(xa)}_getPlacement(){const l=this._parent;if(l.classList.contains("dropend"))return Dc;if(l.classList.contains("dropstart"))return Cc;if(l.classList.contains("dropup-center"))return"top";if(l.classList.contains("dropdown-center"))return"bottom";const r=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?r?so:lo:r?oi:ro}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(r=>Number.parseInt(r,10)):typeof l=="function"?r=>l(r,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(F.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...Se(this._config.popperConfig,[void 0,l])}}_selectMenuItem({key:l,target:r}){const d=B.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(g=>A(g));d.length&&yt(d,r,l===to,!d.includes(r)).focus()}static jQueryInterface(l){return this.each(function(){const r=Jt.getOrCreateInstance(this,l);if(typeof l=="string"){if(r[l]===void 0)throw new TypeError(`No method named "${l}"`);r[l]()}})}static clearMenus(l){if(l.button===2||l.type==="keyup"&&l.key!=="Tab")return;const r=B.find(io);for(const d of r){const g=Jt.getInstance(d);if(!g||g._config.autoClose===!1)continue;const b=l.composedPath(),j=b.includes(g._menu);if(b.includes(g._element)||g._config.autoClose==="inside"&&!j||g._config.autoClose==="outside"&&j||g._menu.contains(l.target)&&(l.type==="keyup"&&l.key==="Tab"||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const O={relatedTarget:g._element};l.type==="click"&&(O.clickEvent=l),g._completeHide(O)}}static dataApiKeydownHandler(l){const r=/input|textarea/i.test(l.target.tagName),d=l.key==="Escape",g=[Nc,to].includes(l.key);if(!g&&!d||r&&!d)return;l.preventDefault();const b=this.matches(An)?this:B.prev(this,An)[0]||B.next(this,An)[0]||B.findOne(An,l.delegateTarget.parentNode),j=Jt.getOrCreateInstance(b);if(g)return l.stopPropagation(),j.show(),void j._selectMenuItem(l);j._isShown()&&(l.stopPropagation(),j.hide(),b.focus())}}h.on(document,no,An,Jt.dataApiKeydownHandler),h.on(document,no,Ji,Jt.dataApiKeydownHandler),h.on(document,ao,Jt.clearMenus),h.on(document,ws,Jt.clearMenus),h.on(document,ao,An,function(u){u.preventDefault(),Jt.getOrCreateInstance(this).toggle()}),_e(Jt);const ci="backdrop",ui="show",co=`mousedown.bs.${ci}`,Tl={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},uo={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ss extends je{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return Tl}static get DefaultType(){return uo}static get NAME(){return ci}show(l){if(!this._config.isVisible)return void Se(l);this._append();const r=this._getElement();this._config.isAnimated&&L(r),r.classList.add(ui),this._emulateAnimation(()=>{Se(l)})}hide(l){this._config.isVisible?(this._getElement().classList.remove(ui),this._emulateAnimation(()=>{this.dispose(),Se(l)})):Se(l)}dispose(){this._isAppended&&(h.off(this._element,co),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add("fade"),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=U(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),h.on(l,co,()=>{Se(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){Ye(l,this._getElement(),this._config.isAnimated)}}const fi=".bs.focustrap",js=`focusin${fi}`,fo=`keydown.tab${fi}`,Es="backward",ho={autofocus:!0,trapElement:null},Rc={autofocus:"boolean",trapElement:"element"};class mo extends je{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ho}static get DefaultType(){return Rc}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),h.off(document,fi),h.on(document,js,l=>this._handleFocusin(l)),h.on(document,fo,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,h.off(document,fi))}_handleFocusin(l){const{trapElement:r}=this._config;if(l.target===document||l.target===r||r.contains(l.target))return;const d=B.focusableChildren(r);d.length===0?r.focus():this._lastTabNavDirection===Es?d[d.length-1].focus():d[0].focus()}_handleKeydown(l){l.key==="Tab"&&(this._lastTabNavDirection=l.shiftKey?Es:"forward")}}const po=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",go=".sticky-top",zl="padding-right",Dt="margin-right";class Nn{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,zl,r=>r+l),this._setElementAttributes(po,zl,r=>r+l),this._setElementAttributes(go,Dt,r=>r-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,zl),this._resetElementAttributes(po,zl),this._resetElementAttributes(go,Dt)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,r,d){const g=this.getWidth();this._applyManipulationCallback(l,b=>{if(b!==this._element&&window.innerWidth>b.clientWidth+g)return;this._saveInitialAttribute(b,r);const j=window.getComputedStyle(b).getPropertyValue(r);b.style.setProperty(r,`${d(Number.parseFloat(j))}px`)})}_saveInitialAttribute(l,r){const d=l.style.getPropertyValue(r);d&&F.setDataAttribute(l,r,d)}_resetElementAttributes(l,r){this._applyManipulationCallback(l,d=>{const g=F.getDataAttribute(d,r);g!==null?(F.removeDataAttribute(d,r),d.style.setProperty(r,g)):d.style.removeProperty(r)})}_applyManipulationCallback(l,r){if(ve(l))r(l);else for(const d of B.find(l,this._element))r(d)}}const Gt=".bs.modal",bo=`hide${Gt}`,vo=`hidePrevented${Gt}`,As=`hidden${Gt}`,Ol=`show${Gt}`,Yc=`shown${Gt}`,di=`resize${Gt}`,Ns=`click.dismiss${Gt}`,Wi=`mousedown.dismiss${Gt}`,Ts=`keydown.dismiss${Gt}`,yo=`click${Gt}.data-api`,Ia="modal-open",Tn="show",Fi="modal-static",xo={backdrop:!0,focus:!0,keyboard:!0},zn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Pa extends ae{constructor(l,r){super(l,r),this._dialog=B.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Nn,this._addEventListeners()}static get Default(){return xo}static get DefaultType(){return zn}static get NAME(){return"modal"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||h.trigger(this._element,Ol,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Ia),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){this._isShown&&!this._isTransitioning&&(h.trigger(this._element,bo).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Tn),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){h.off(window,Gt),h.off(this._dialog,Gt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ss({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new mo({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const r=B.findOne(".modal-body",this._dialog);r&&(r.scrollTop=0),L(this._element),this._element.classList.add(Tn),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,h.trigger(this._element,Yc,{relatedTarget:l})},this._dialog,this._isAnimated())}_addEventListeners(){h.on(this._element,Ts,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),h.on(window,di,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),h.on(this._element,Wi,l=>{h.one(this._element,Ns,r=>{this._element===l.target&&this._element===r.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Ia),this._resetAdjustments(),this._scrollBar.reset(),h.trigger(this._element,As)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(h.trigger(this._element,vo).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,r=this._element.style.overflowY;r==="hidden"||this._element.classList.contains(Fi)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(Fi),this._queueCallback(()=>{this._element.classList.remove(Fi),this._queueCallback(()=>{this._element.style.overflowY=r},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,r=this._scrollBar.getWidth(),d=r>0;if(d&&!l){const g=ne()?"paddingLeft":"paddingRight";this._element.style[g]=`${r}px`}if(!d&&l){const g=ne()?"paddingRight":"paddingLeft";this._element.style[g]=`${r}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,r){return this.each(function(){const d=Pa.getOrCreateInstance(this,l);if(typeof l=="string"){if(d[l]===void 0)throw new TypeError(`No method named "${l}"`);d[l](r)}})}}h.on(document,yo,'[data-bs-toggle="modal"]',function(u){const l=B.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&u.preventDefault(),h.one(l,Ol,d=>{d.defaultPrevented||h.one(l,As,()=>{A(this)&&this.focus()})});const r=B.findOne(".modal.show");r&&Pa.getInstance(r).hide(),Pa.getOrCreateInstance(l).toggle(this)}),ia(Pa),_e(Pa);const _a=".bs.offcanvas",zs=".data-api",Uc=`load${_a}${zs}`,_o="show",wo="showing",Os="hiding",Ms=".offcanvas.show",Ds=`show${_a}`,ra=`shown${_a}`,So=`hide${_a}`,Qt=`hidePrevented${_a}`,Vt=`hidden${_a}`,hi=`resize${_a}`,Cs=`click${_a}${zs}`,Ml=`keydown.dismiss${_a}`,Dl={backdrop:!0,keyboard:!0,scroll:!1},ks={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ct extends ae{constructor(l,r){super(l,r),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Dl}static get DefaultType(){return ks}static get NAME(){return"offcanvas"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||h.trigger(this._element,Ds,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Nn().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(wo),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(_o),this._element.classList.remove(wo),h.trigger(this._element,ra,{relatedTarget:l})},this._element,!0))}hide(){this._isShown&&(h.trigger(this._element,So).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Os),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(_o,Os),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Nn().reset(),h.trigger(this._element,Vt)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=!!this._config.backdrop;return new Ss({className:"offcanvas-backdrop",isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?()=>{this._config.backdrop!=="static"?this.hide():h.trigger(this._element,Qt)}:null})}_initializeFocusTrap(){return new mo({trapElement:this._element})}_addEventListeners(){h.on(this._element,Ml,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():h.trigger(this._element,Qt))})}static jQueryInterface(l){return this.each(function(){const r=Ct.getOrCreateInstance(this,l);if(typeof l=="string"){if(r[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);r[l](this)}})}}h.on(document,Cs,'[data-bs-toggle="offcanvas"]',function(u){const l=B.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&u.preventDefault(),Y(this))return;h.one(l,Vt,()=>{A(this)&&this.focus()});const r=B.findOne(Ms);r&&r!==l&&Ct.getInstance(r).hide(),Ct.getOrCreateInstance(l).toggle(this)}),h.on(window,Uc,()=>{for(const u of B.find(Ms))Ct.getOrCreateInstance(u).show()}),h.on(window,hi,()=>{for(const u of B.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(u).position!=="fixed"&&Ct.getOrCreateInstance(u).hide()}),ia(Ct),_e(Ct);const Rs={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Cl=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),mi=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Hc=(u,l)=>{const r=u.nodeName.toLowerCase();return l.includes(r)?!Cl.has(r)||!!mi.test(u.nodeValue):l.filter(d=>d instanceof RegExp).some(d=>d.test(r))},Zt={allowList:Rs,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ys={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ca={entry:"(string|element|function|null)",selector:"(string|element)"};class jo extends je{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return Zt}static get DefaultType(){return Ys}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[g,b]of Object.entries(this._config.content))this._setContent(l,b,g);const r=l.children[0],d=this._resolvePossibleFunction(this._config.extraClass);return d&&r.classList.add(...d.split(" ")),r}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[r,d]of Object.entries(l))super._typeCheckConfig({selector:r,entry:d},Ca)}_setContent(l,r,d){const g=B.findOne(d,l);g&&((r=this._resolvePossibleFunction(r))?ve(r)?this._putElementInTemplate(U(r),g):this._config.html?g.innerHTML=this._maybeSanitize(r):g.textContent=r:g.remove())}_maybeSanitize(l){return this._config.sanitize?function(r,d,g){if(!r.length)return r;if(g&&typeof g=="function")return g(r);const b=new window.DOMParser().parseFromString(r,"text/html"),j=[].concat(...b.body.querySelectorAll("*"));for(const O of j){const R=O.nodeName.toLowerCase();if(!Object.keys(d).includes(R)){O.remove();continue}const Z=[].concat(...O.attributes),$=[].concat(d["*"]||[],d[R]||[]);for(const X of Z)Hc(X,$)||O.removeAttribute(X.nodeName)}return b.body.innerHTML}(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return Se(l,[void 0,this])}_putElementInTemplate(l,r){if(this._config.html)return r.innerHTML="",void r.append(l);r.textContent=l.textContent}}const kl=new Set(["sanitize","allowList","sanitizeFn"]),ka="fade",pi="show",Us=".tooltip-inner",On=".modal",Mn="hide.bs.modal",en="hover",gi="focus",kt="click",Wt={AUTO:"auto",TOP:"top",RIGHT:ne()?"left":"right",BOTTOM:"bottom",LEFT:ne()?"right":"left"},Dn={allowList:Rs,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Ra={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class jt extends ae{constructor(l,r){if(Pr===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(l,r),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Dn}static get DefaultType(){return Ra}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),h.off(this._element.closest(On),Mn,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const l=h.trigger(this._element,this.constructor.eventName("show")),r=(me(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!r)return;this._disposePopper();const d=this._getTipElement();this._element.setAttribute("aria-describedby",d.getAttribute("id"));const{container:g}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(g.append(d),h.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(d),d.classList.add(pi),"ontouchstart"in document.documentElement)for(const b of[].concat(...document.body.children))h.on(b,"mouseover",z);this._queueCallback(()=>{h.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!h.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(pi),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))h.off(l,"mouseover",z);this._activeTrigger[kt]=!1,this._activeTrigger[gi]=!1,this._activeTrigger[en]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),h.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const r=this._getTemplateFactory(l).toHtml();if(!r)return null;r.classList.remove(ka,pi),r.classList.add(`bs-${this.constructor.NAME}-auto`);const d=(g=>{do g+=Math.floor(1e6*Math.random());while(document.getElementById(g));return g})(this.constructor.NAME).toString();return r.setAttribute("id",d),this._isAnimated()&&r.classList.add(ka),r}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new jo({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Us]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ka)}_isShown(){return this.tip&&this.tip.classList.contains(pi)}_createPopper(l){const r=Se(this._config.placement,[this,l,this._element]),d=Wt[r.toUpperCase()];return xs(this._element,l,this._getPopperConfig(d))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(r=>Number.parseInt(r,10)):typeof l=="function"?r=>l(r,this._element):l}_resolvePossibleFunction(l){return Se(l,[this._element,this._element])}_getPopperConfig(l){const r={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:d=>{this._getTipElement().setAttribute("data-popper-placement",d.state.placement)}}]};return{...r,...Se(this._config.popperConfig,[void 0,r])}}_setListeners(){const l=this._config.trigger.split(" ");for(const r of l)if(r==="click")h.on(this._element,this.constructor.eventName("click"),this._config.selector,d=>{const g=this._initializeOnDelegatedTarget(d);g._activeTrigger[kt]=!(g._isShown()&&g._activeTrigger[kt]),g.toggle()});else if(r!=="manual"){const d=r===en?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),g=r===en?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");h.on(this._element,d,this._config.selector,b=>{const j=this._initializeOnDelegatedTarget(b);j._activeTrigger[b.type==="focusin"?gi:en]=!0,j._enter()}),h.on(this._element,g,this._config.selector,b=>{const j=this._initializeOnDelegatedTarget(b);j._activeTrigger[b.type==="focusout"?gi:en]=j._element.contains(b.relatedTarget),j._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},h.on(this._element.closest(On),Mn,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,r){clearTimeout(this._timeout),this._timeout=setTimeout(l,r)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const r=F.getDataAttributes(this._element);for(const d of Object.keys(r))kl.has(d)&&delete r[d];return l={...r,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:U(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[r,d]of Object.entries(this._config))this.constructor.Default[r]!==d&&(l[r]=d);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const r=jt.getOrCreateInstance(this,l);if(typeof l=="string"){if(r[l]===void 0)throw new TypeError(`No method named "${l}"`);r[l]()}})}}_e(jt);const Cn=".popover-header",Eo=".popover-body",Hs={...jt.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Bs={...jt.DefaultType,content:"(null|string|element|function)"};class st extends jt{static get Default(){return Hs}static get DefaultType(){return Bs}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Cn]:this._getTitle(),[Eo]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const r=st.getOrCreateInstance(this,l);if(typeof l=="string"){if(r[l]===void 0)throw new TypeError(`No method named "${l}"`);r[l]()}})}}_e(st);const Ze=".bs.scrollspy",Ce=`activate${Ze}`,tn=`click${Ze}`,wa=`load${Ze}.data-api`,an="active",Ya="[href]",Ls=".nav-link",Ao=`${Ls}, .nav-item > ${Ls}, .list-group-item`,Ii={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Pi={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class bi extends ae{constructor(l,r){super(l,r),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Ii}static get DefaultType(){return Pi}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=U(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(r=>Number.parseFloat(r))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(h.off(this._config.target,tn),h.on(this._config.target,tn,Ya,l=>{const r=this._observableSections.get(l.target.hash);if(r){l.preventDefault();const d=this._rootElement||window,g=r.offsetTop-this._element.offsetTop;if(d.scrollTo)return void d.scrollTo({top:g,behavior:"smooth"});d.scrollTop=g}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(r=>this._observerCallback(r),l)}_observerCallback(l){const r=j=>this._targetLinks.get(`#${j.target.id}`),d=j=>{this._previousScrollData.visibleEntryTop=j.target.offsetTop,this._process(r(j))},g=(this._rootElement||document.documentElement).scrollTop,b=g>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=g;for(const j of l){if(!j.isIntersecting){this._activeTarget=null,this._clearActiveClass(r(j));continue}const O=j.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(b&&O){if(d(j),!g)return}else b||O||d(j)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=B.find(Ya,this._config.target);for(const r of l){if(!r.hash||Y(r))continue;const d=B.findOne(decodeURI(r.hash),this._element);A(d)&&(this._targetLinks.set(decodeURI(r.hash),r),this._observableSections.set(r.hash,d))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(an),this._activateParents(l),h.trigger(this._element,Ce,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains("dropdown-item"))B.findOne(".dropdown-toggle",l.closest(".dropdown")).classList.add(an);else for(const r of B.parents(l,".nav, .list-group"))for(const d of B.prev(r,Ao))d.classList.add(an)}_clearActiveClass(l){l.classList.remove(an);const r=B.find(`${Ya}.${an}`,l);for(const d of r)d.classList.remove(an)}static jQueryInterface(l){return this.each(function(){const r=bi.getOrCreateInstance(this,l);if(typeof l=="string"){if(r[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);r[l]()}})}}h.on(window,wa,()=>{for(const u of B.find('[data-bs-spy="scroll"]'))bi.getOrCreateInstance(u)}),_e(bi);const oa=".bs.tab",qs=`hide${oa}`,kn=`hidden${oa}`,Ua=`show${oa}`,nn=`shown${oa}`,Ha=`click${oa}`,Xs=`keydown${oa}`,Gs=`load${oa}`,el="ArrowLeft",tl="ArrowRight",Rn="ArrowUp",ut="ArrowDown",vi="Home",Qs="End",Yn="active",No="fade",Vs="show",Ie=".dropdown-toggle",al=`:not(${Ie})`,yi='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Un=`.nav-link${al}, .list-group-item${al}, [role="tab"]${al}, ${yi}`,Zs=`.${Yn}[data-bs-toggle="tab"], .${Yn}[data-bs-toggle="pill"], .${Yn}[data-bs-toggle="list"]`;class Ft extends ae{constructor(l){super(l),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),h.on(this._element,Xs,r=>this._keydown(r)))}static get NAME(){return"tab"}show(){const l=this._element;if(this._elemIsActive(l))return;const r=this._getActiveElem(),d=r?h.trigger(r,qs,{relatedTarget:l}):null;h.trigger(l,Ua,{relatedTarget:r}).defaultPrevented||d&&d.defaultPrevented||(this._deactivate(r,l),this._activate(l,r))}_activate(l,r){l&&(l.classList.add(Yn),this._activate(B.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),h.trigger(l,nn,{relatedTarget:r})):l.classList.add(Vs)},l,l.classList.contains(No)))}_deactivate(l,r){l&&(l.classList.remove(Yn),l.blur(),this._deactivate(B.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),h.trigger(l,kn,{relatedTarget:r})):l.classList.remove(Vs)},l,l.classList.contains(No)))}_keydown(l){if(![el,tl,Rn,ut,vi,Qs].includes(l.key))return;l.stopPropagation(),l.preventDefault();const r=this._getChildren().filter(g=>!Y(g));let d;if([vi,Qs].includes(l.key))d=r[l.key===vi?0:r.length-1];else{const g=[tl,ut].includes(l.key);d=yt(r,l.target,g,!0)}d&&(d.focus({preventScroll:!0}),Ft.getOrCreateInstance(d).show())}_getChildren(){return B.find(Un,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,r){this._setAttributeIfNotExists(l,"role","tablist");for(const d of r)this._setInitialAttributesOnChild(d)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const r=this._elemIsActive(l),d=this._getOuterElement(l);l.setAttribute("aria-selected",r),d!==l&&this._setAttributeIfNotExists(d,"role","presentation"),r||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const r=B.getElementFromSelector(l);r&&(this._setAttributeIfNotExists(r,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(r,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,r){const d=this._getOuterElement(l);if(!d.classList.contains("dropdown"))return;const g=(b,j)=>{const O=B.findOne(b,d);O&&O.classList.toggle(j,r)};g(Ie,Yn),g(".dropdown-menu",Vs),d.setAttribute("aria-expanded",r)}_setAttributeIfNotExists(l,r,d){l.hasAttribute(r)||l.setAttribute(r,d)}_elemIsActive(l){return l.classList.contains(Yn)}_getInnerElement(l){return l.matches(Un)?l:B.findOne(Un,l)}_getOuterElement(l){return l.closest(".nav-item, .list-group-item")||l}static jQueryInterface(l){return this.each(function(){const r=Ft.getOrCreateInstance(this);if(typeof l=="string"){if(r[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);r[l]()}})}}h.on(document,Ha,yi,function(u){["A","AREA"].includes(this.tagName)&&u.preventDefault(),Y(this)||Ft.getOrCreateInstance(this).show()}),h.on(window,Gs,()=>{for(const u of B.find(Zs))Ft.getOrCreateInstance(u)}),_e(Ft);const Kt=".bs.toast",Bc=`mouseover${Kt}`,To=`mouseout${Kt}`,Lc=`focusin${Kt}`,zo=`focusout${Kt}`,Hn=`hide${Kt}`,Ks=`hidden${Kt}`,Rl=`show${Kt}`,Oo=`shown${Kt}`,xi="hide",nl="show",Bn="showing",$s={animation:"boolean",autohide:"boolean",delay:"number"},Mo={animation:!0,autohide:!0,delay:5e3};class ln extends ae{constructor(l,r){super(l,r),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Mo}static get DefaultType(){return $s}static get NAME(){return"toast"}show(){h.trigger(this._element,Rl).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(xi),L(this._element),this._element.classList.add(nl,Bn),this._queueCallback(()=>{this._element.classList.remove(Bn),h.trigger(this._element,Oo),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(h.trigger(this._element,Hn).defaultPrevented||(this._element.classList.add(Bn),this._queueCallback(()=>{this._element.classList.add(xi),this._element.classList.remove(Bn,nl),h.trigger(this._element,Ks)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(nl),super.dispose()}isShown(){return this._element.classList.contains(nl)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,r){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=r;break;case"focusin":case"focusout":this._hasKeyboardInteraction=r}if(r)return void this._clearTimeout();const d=l.relatedTarget;this._element===d||this._element.contains(d)||this._maybeScheduleHide()}_setListeners(){h.on(this._element,Bc,l=>this._onInteraction(l,!0)),h.on(this._element,To,l=>this._onInteraction(l,!1)),h.on(this._element,Lc,l=>this._onInteraction(l,!0)),h.on(this._element,zo,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const r=ln.getOrCreateInstance(this,l);if(typeof l=="string"){if(r[l]===void 0)throw new TypeError(`No method named "${l}"`);r[l](this)}})}}return ia(ln),_e(ln),{Alert:hn,Button:Ui,Carousel:Pn,Collapse:la,Dropdown:Jt,Modal:Pa,Offcanvas:Ct,Popover:st,ScrollSpy:bi,Tab:Ft,Toast:ln,Tooltip:jt}})}(yc)),yc.exports}im();Bh.createRoot(document.getElementById("root")).render(c.jsx(be.StrictMode,{children:c.jsx(tm,{})}));
