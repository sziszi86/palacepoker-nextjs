(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[4512],{3108:(X,ot,v)=>{/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var C={655:(l,a,c)=>{"use strict";c.d(a,{Z:()=>D});var k=c(609),x=c.n(k)()(function(E){return E[1]});x.push([l.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const D=x},609:l=>{"use strict";l.exports=function(a){var c=[];return c.toString=function(){return this.map(function(k){var x=a(k);return k[2]?"@media ".concat(k[2]," {").concat(x,"}"):x}).join("")},c.i=function(k,x,D){typeof k=="string"&&(k=[[null,k,""]]);var E={};if(D)for(var O=0;O<this.length;O++){var P=this[O][0];P!=null&&(E[P]=!0)}for(var A=0;A<k.length;A++){var $=[].concat(k[A]);D&&E[$[0]]||(x&&($[2]?$[2]="".concat(x," and ").concat($[2]):$[2]=x),c.push($))}},c}},62:(l,a,c)=>{"use strict";var k,x=function(){return k===void 0&&(k=Boolean(window&&document&&document.all&&!window.atob)),k},D=function(){var s={};return function(d){if(s[d]===void 0){var p=document.querySelector(d);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch{p=null}s[d]=p}return s[d]}}(),E=[];function O(s){for(var d=-1,p=0;p<E.length;p++)if(E[p].identifier===s){d=p;break}return d}function P(s,d){for(var p={},j=[],R=0;R<s.length;R++){var T=s[R],I=d.base?T[0]+d.base:T[0],nt=p[I]||0,H="".concat(I," ").concat(nt);p[I]=nt+1;var V=O(H),vt={css:T[1],media:T[2],sourceMap:T[3]};V!==-1?(E[V].references++,E[V].updater(vt)):E.push({identifier:H,updater:ut(vt,d),references:1}),j.push(H)}return j}function A(s){var d=document.createElement("style"),p=s.attributes||{};if(p.nonce===void 0){var j=c.nc;j&&(p.nonce=j)}if(Object.keys(p).forEach(function(T){d.setAttribute(T,p[T])}),typeof s.insert=="function")s.insert(d);else{var R=D(s.insert||"head");if(!R)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");R.appendChild(d)}return d}var $,mt=($=[],function(s,d){return $[s]=d,$.filter(Boolean).join(`
`)});function ft(s,d,p,j){var R=p?"":j.media?"@media ".concat(j.media," {").concat(j.css,"}"):j.css;if(s.styleSheet)s.styleSheet.cssText=mt(d,R);else{var T=document.createTextNode(R),I=s.childNodes;I[d]&&s.removeChild(I[d]),I.length?s.insertBefore(T,I[d]):s.appendChild(T)}}function at(s,d,p){var j=p.css,R=p.media,T=p.sourceMap;if(R?s.setAttribute("media",R):s.removeAttribute("media"),T&&typeof btoa<"u"&&(j+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(T))))," */")),s.styleSheet)s.styleSheet.cssText=j;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(j))}}var J=null,dt=0;function ut(s,d){var p,j,R;if(d.singleton){var T=dt++;p=J||(J=A(d)),j=ft.bind(null,p,T,!1),R=ft.bind(null,p,T,!0)}else p=A(d),j=at.bind(null,p,d),R=function(){(function(I){if(I.parentNode===null)return!1;I.parentNode.removeChild(I)})(p)};return j(s),function(I){if(I){if(I.css===s.css&&I.media===s.media&&I.sourceMap===s.sourceMap)return;j(s=I)}else R()}}l.exports=function(s,d){(d=d||{}).singleton||typeof d.singleton=="boolean"||(d.singleton=x());var p=P(s=s||[],d);return function(j){if(j=j||[],Object.prototype.toString.call(j)==="[object Array]"){for(var R=0;R<p.length;R++){var T=O(p[R]);E[T].references--}for(var I=P(j,d),nt=0;nt<p.length;nt++){var H=O(p[nt]);E[H].references===0&&(E[H].updater(),E.splice(H,1))}p=I}}}},704:(l,a,c)=>{l.exports=c(79)("./src/core.js")},492:(l,a,c)=>{l.exports=c(79)("./src/engine.js")},273:(l,a,c)=>{l.exports=c(79)("./src/ui.js")},209:(l,a,c)=>{l.exports=c(79)("./src/utils.js")},79:l=>{"use strict";l.exports=CKEditor5.dll}},kt={};function y(l){var a=kt[l];if(a!==void 0)return a.exports;var c=kt[l]={id:l,exports:{}};return C[l](c,c.exports,y),c.exports}y.n=l=>{var a=l&&l.__esModule?()=>l.default:()=>l;return y.d(a,{a}),a},y.d=(l,a)=>{for(var c in a)y.o(a,c)&&!y.o(l,c)&&Object.defineProperty(l,c,{enumerable:!0,get:a[c]})},y.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),y.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},y.nc=void 0;var S={};(()=>{"use strict";y.r(S),y.d(S,{ClassicEditor:()=>zt});var l=y(273),a=y(492),c=y(209);class k extends l.EditorUI{constructor(u,_){super(u),this.view=_,this._toolbarConfig=(0,l.normalizeToolbarConfig)(u.config.get("toolbar")),this._elementReplacer=new c.ElementReplacer}get element(){return this.view.element}init(u){const _=this.editor,K=this.view,n=_.editing.view,g=K.editable,M=n.document.getRoot();g.name=M.rootName,K.render();const f=g.element;this.setEditableElement(g.name,f),K.editable.bind("isFocused").to(this.focusTracker),n.attachDomRoot(f),u&&this._elementReplacer.replace(u,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const u=this.view,_=this.editor.editing.view;this._elementReplacer.restore(),_.detachDomRoot(u.editable.name),u.destroy()}_initToolbar(){const u=this.view;u.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),u.stickyPanel.limiterElement=u.element,u.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:_})=>_||0),u.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(u.toolbar)}_initPlaceholder(){const u=this.editor,_=u.editing.view,K=_.document.getRoot(),n=u.sourceElement,g=u.config.get("placeholder")||n&&n.tagName.toLowerCase()==="textarea"&&n.getAttribute("placeholder");g&&(0,a.enablePlaceholder)({view:_,element:K,text:g,isDirectHost:!1,keepOnFocus:!0})}}var x=y(62),D=y.n(x),E=y(655),O={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};D()(E.Z,O),E.Z.locals;class P extends l.BoxedEditorUIView{constructor(u,_,K={}){super(u),this.stickyPanel=new l.StickyPanelView(u),this.toolbar=new l.ToolbarView(u,{shouldGroupWhenFull:K.shouldToolbarGroupWhenFull}),this.editable=new l.InlineEditableUIView(u,_)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var A=y(704);const $=function(w){return w!=null&&typeof w=="object"},mt=typeof v.g=="object"&&v.g&&v.g.Object===Object&&v.g;var ft=typeof self=="object"&&self&&self.Object===Object&&self;const at=(mt||ft||Function("return this")()).Symbol;var J=Object.prototype,dt=J.hasOwnProperty,ut=J.toString,s=at?at.toStringTag:void 0;const d=function(w){var u=dt.call(w,s),_=w[s];try{w[s]=void 0;var K=!0}catch{}var n=ut.call(w);return K&&(u?w[s]=_:delete w[s]),n};var p=Object.prototype.toString;const j=function(w){return p.call(w)};var R="[object Null]",T="[object Undefined]",I=at?at.toStringTag:void 0;const nt=function(w){return w==null?w===void 0?T:R:I&&I in Object(w)?d(w):j(w)},H=function(w,u){return function(_){return w(u(_))}}(Object.getPrototypeOf,Object);var V="[object Object]",vt=Function.prototype,wt=Object.prototype,xt=vt.toString,Nt=wt.hasOwnProperty,Bt=xt.call(Object);const $t=function(w){if(!$(w)||nt(w)!=V)return!1;var u=H(w);if(u===null)return!0;var _=Nt.call(u,"constructor")&&u.constructor;return typeof _=="function"&&_ instanceof _&&xt.call(_)==Bt},Ht=function(w){return $(w)&&w.nodeType===1&&!$t(w)};class zt extends(0,A.DataApiMixin)((0,A.ElementApiMixin)(A.Editor)){constructor(u,_={}){if(!yt(u)&&_.initialData!==void 0)throw new c.CKEditorError("editor-create-initial-data",null);super(_),this.config.get("initialData")===void 0&&this.config.set("initialData",function(g){return yt(g)?(0,c.getDataFromElement)(g):g}(u)),yt(u)&&(this.sourceElement=u),this.model.document.createRoot();const K=!this.config.get("toolbar.shouldNotGroupWhenFull"),n=new P(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:K});this.ui=new k(this,n),(0,A.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(u,_={}){return new Promise(K=>{const n=new this(u,_);K(n.initPlugins().then(()=>n.ui.init(yt(u)?u:null)).then(()=>n.data.init(n.config.get("initialData"))).then(()=>n.fire("ready")).then(()=>n))})}}function yt(w){return Ht(w)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=S})()},72757:(X,ot,v)=>{X=v.nmd(X);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(C,kt){X.exports=kt(v(67294))})(self,C=>(()=>{var kt={703:(a,c,k)=>{"use strict";var x=k(414);function D(){}function E(){}E.resetWarningCache=D,a.exports=function(){function O($,mt,ft,at,J,dt){if(dt!==x){var ut=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ut.name="Invariant Violation",ut}}function P(){return O}O.isRequired=O;var A={array:O,bigint:O,bool:O,func:O,number:O,object:O,string:O,symbol:O,any:O,arrayOf:P,element:O,elementType:O,instanceOf:P,node:O,objectOf:P,oneOf:P,oneOfType:P,shape:P,exact:P,checkPropTypes:E,resetWarningCache:D};return A.PropTypes=A,A}},697:(a,c,k)=>{a.exports=k(703)()},414:a=>{"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:a=>{"use strict";a.exports=C}},y={};function S(a){var c=y[a];if(c!==void 0)return c.exports;var k=y[a]={exports:{}};return kt[a](k,k.exports,S),k.exports}S.n=a=>{var c=a&&a.__esModule?()=>a.default:()=>a;return S.d(c,{a:c}),c},S.d=(a,c)=>{for(var k in c)S.o(c,k)&&!S.o(a,k)&&Object.defineProperty(a,k,{enumerable:!0,get:c[k]})},S.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),S.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var l={};return(()=>{"use strict";S.r(l),S.d(l,{CKEditor:()=>Tt,CKEditorContext:()=>ge});var a=S(787),c=S.n(a),k=S(697),x=S.n(k);const D=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},E=typeof v.g=="object"&&v.g&&v.g.Object===Object&&v.g;var O=typeof self=="object"&&self&&self.Object===Object&&self;const P=E||O||Function("return this")(),A=function(){return P.Date.now()};var $=/\s/;const mt=function(t){for(var e=t.length;e--&&$.test(t.charAt(e)););return e};var ft=/^\s+/;const at=function(t){return t&&t.slice(0,mt(t)+1).replace(ft,"")},J=P.Symbol;var dt=Object.prototype,ut=dt.hasOwnProperty,s=dt.toString,d=J?J.toStringTag:void 0;const p=function(t){var e=ut.call(t,d),o=t[d];try{t[d]=void 0;var r=!0}catch{}var i=s.call(t);return r&&(e?t[d]=o:delete t[d]),i};var j=Object.prototype.toString;const R=function(t){return j.call(t)};var T="[object Null]",I="[object Undefined]",nt=J?J.toStringTag:void 0;const H=function(t){return t==null?t===void 0?I:T:nt&&nt in Object(t)?p(t):R(t)},V=function(t){return t!=null&&typeof t=="object"};var vt="[object Symbol]";const wt=function(t){return typeof t=="symbol"||V(t)&&H(t)==vt};var xt=NaN,Nt=/^[-+]0x[0-9a-f]+$/i,Bt=/^0b[01]+$/i,$t=/^0o[0-7]+$/i,Ht=parseInt;const zt=function(t){if(typeof t=="number")return t;if(wt(t))return xt;if(D(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=D(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=at(t);var o=Bt.test(t);return o||$t.test(t)?Ht(t.slice(2),o?2:8):Nt.test(t)?xt:+t};var yt="Expected a function",w=Math.max,u=Math.min;const _=function(t,e,o){var r,i,h,b,m,N,U=0,te=!1,It=!1,ht=!0;if(typeof t!="function")throw new TypeError(yt);function Ut(rt){var gt=r,Rt=i;return r=i=void 0,U=rt,b=t.apply(Rt,gt)}function qt(rt){var gt=rt-N;return N===void 0||gt>=e||gt<0||It&&rt-U>=h}function At(){var rt=A();if(qt(rt))return lt(rt);m=setTimeout(At,function(gt){var Rt=e-(gt-N);return It?u(Rt,h-(gt-U)):Rt}(rt))}function lt(rt){return m=void 0,ht&&r?Ut(rt):(r=i=void 0,b)}function pt(){var rt=A(),gt=qt(rt);if(r=arguments,i=this,N=rt,gt){if(m===void 0)return function(Rt){return U=Rt,m=setTimeout(At,e),te?Ut(Rt):b}(N);if(It)return clearTimeout(m),m=setTimeout(At,e),Ut(N)}return m===void 0&&(m=setTimeout(At,e)),b}return e=zt(e)||0,D(o)&&(te=!!o.leading,h=(It="maxWait"in o)?w(zt(o.maxWait)||0,e):h,ht="trailing"in o?!!o.trailing:ht),pt.cancel=function(){m!==void 0&&clearTimeout(m),U=0,r=N=i=m=void 0},pt.flush=function(){return m===void 0?b:lt(A())},pt};var K="Expected a function";const n=function(t,e,o){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(K);return D(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),_(t,e,{leading:r,maxWait:e,trailing:i})},g=function(){this.__data__=[],this.size=0},M=function(t,e){return t===e||t!=t&&e!=e},f=function(t,e){for(var o=t.length;o--;)if(M(t[o][0],e))return o;return-1};var Z=Array.prototype.splice;const L=function(t){var e=this.__data__,o=f(e,t);return!(o<0)&&(o==e.length-1?e.pop():Z.call(e,o,1),--this.size,!0)},it=function(t){var e=this.__data__,o=f(e,t);return o<0?void 0:e[o][1]},st=function(t){return f(this.__data__,t)>-1},F=function(t,e){var o=this.__data__,r=f(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};function Q(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Q.prototype.clear=g,Q.prototype.delete=L,Q.prototype.get=it,Q.prototype.has=st,Q.prototype.set=F;const G=Q,tt=function(){this.__data__=new G,this.size=0},et=function(t){var e=this.__data__,o=e.delete(t);return this.size=e.size,o},_t=function(t){return this.__data__.get(t)},jt=function(t){return this.__data__.has(t)};var Ct="[object AsyncFunction]",ct="[object Function]",Et="[object GeneratorFunction]",Wt="[object Proxy]";const B=function(t){if(!D(t))return!1;var e=H(t);return e==ct||e==Et||e==Ct||e==Wt},q=P["__core-js_shared__"];var bt=function(){var t=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const Yt=function(t){return!!bt&&bt in t};var Kt=Function.prototype.toString;const Ot=function(t){if(t!=null){try{return Kt.call(t)}catch{}try{return t+""}catch{}}return""};var uo=/^\[object .+?Constructor\]$/,ho=Function.prototype,po=Object.prototype,fo=ho.toString,bo=po.hasOwnProperty,go=RegExp("^"+fo.call(bo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const ko=function(t){return!(!D(t)||Yt(t))&&(B(t)?go:uo).test(Ot(t))},mo=function(t,e){return t?.[e]},Pt=function(t,e){var o=mo(t,e);return ko(o)?o:void 0},Gt=Pt(P,"Map"),Vt=Pt(Object,"create"),vo=function(){this.__data__=Vt?Vt(null):{},this.size=0},yo=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var wo="__lodash_hash_undefined__",xo=Object.prototype.hasOwnProperty;const _o=function(t){var e=this.__data__;if(Vt){var o=e[t];return o===wo?void 0:o}return xo.call(e,t)?e[t]:void 0};var jo=Object.prototype.hasOwnProperty;const Co=function(t){var e=this.__data__;return Vt?e[t]!==void 0:jo.call(e,t)};var Eo="__lodash_hash_undefined__";const Oo=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Vt&&e===void 0?Eo:e,this};function Mt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=vo,Mt.prototype.delete=yo,Mt.prototype.get=_o,Mt.prototype.has=Co,Mt.prototype.set=Oo;const me=Mt,Po=function(){this.size=0,this.__data__={hash:new me,map:new(Gt||G),string:new me}},So=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Jt=function(t,e){var o=t.__data__;return So(e)?o[typeof e=="string"?"string":"hash"]:o.map},To=function(t){var e=Jt(this,t).delete(t);return this.size-=e?1:0,e},Io=function(t){return Jt(this,t).get(t)},Ao=function(t){return Jt(this,t).has(t)},Ro=function(t,e){var o=Jt(this,t),r=o.size;return o.set(t,e),this.size+=o.size==r?0:1,this};function Lt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Lt.prototype.clear=Po,Lt.prototype.delete=To,Lt.prototype.get=Io,Lt.prototype.has=Ao,Lt.prototype.set=Ro;const zo=Lt;var Wo=200;const Mo=function(t,e){var o=this.__data__;if(o instanceof G){var r=o.__data__;if(!Gt||r.length<Wo-1)return r.push([t,e]),this.size=++o.size,this;o=this.__data__=new zo(r)}return o.set(t,e),this.size=o.size,this};function Dt(t){var e=this.__data__=new G(t);this.size=e.size}Dt.prototype.clear=tt,Dt.prototype.delete=et,Dt.prototype.get=_t,Dt.prototype.has=jt,Dt.prototype.set=Mo;const Lo=Dt,Do=function(t,e){for(var o=-1,r=t==null?0:t.length;++o<r&&e(t[o],o,t)!==!1;);return t},ve=function(){try{var t=Pt(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ye=function(t,e,o){e=="__proto__"&&ve?ve(t,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[e]=o};var Fo=Object.prototype.hasOwnProperty;const we=function(t,e,o){var r=t[e];Fo.call(t,e)&&M(r,o)&&(o!==void 0||e in t)||ye(t,e,o)},Xt=function(t,e,o,r){var i=!o;o||(o={});for(var h=-1,b=e.length;++h<b;){var m=e[h],N=r?r(o[m],t[m],m,o,t):void 0;N===void 0&&(N=t[m]),i?ye(o,m,N):we(o,m,N)}return o},Uo=function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r};var No="[object Arguments]";const xe=function(t){return V(t)&&H(t)==No};var _e=Object.prototype,Bo=_e.hasOwnProperty,$o=_e.propertyIsEnumerable;const Ho=xe(function(){return arguments}())?xe:function(t){return V(t)&&Bo.call(t,"callee")&&!$o.call(t,"callee")},ee=Array.isArray,Ko=function(){return!1};var je=ot&&!ot.nodeType&&ot,Ce=je&&!0&&X&&!X.nodeType&&X,Ee=Ce&&Ce.exports===je?P.Buffer:void 0;const Oe=(Ee?Ee.isBuffer:void 0)||Ko;var Go=9007199254740991,Vo=/^(?:0|[1-9]\d*)$/;const Zo=function(t,e){var o=typeof t;return!!(e=e??Go)&&(o=="number"||o!="symbol"&&Vo.test(t))&&t>-1&&t%1==0&&t<e};var Qo=9007199254740991;const Pe=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Qo};var W={};W["[object Float32Array]"]=W["[object Float64Array]"]=W["[object Int8Array]"]=W["[object Int16Array]"]=W["[object Int32Array]"]=W["[object Uint8Array]"]=W["[object Uint8ClampedArray]"]=W["[object Uint16Array]"]=W["[object Uint32Array]"]=!0,W["[object Arguments]"]=W["[object Array]"]=W["[object ArrayBuffer]"]=W["[object Boolean]"]=W["[object DataView]"]=W["[object Date]"]=W["[object Error]"]=W["[object Function]"]=W["[object Map]"]=W["[object Number]"]=W["[object Object]"]=W["[object RegExp]"]=W["[object Set]"]=W["[object String]"]=W["[object WeakMap]"]=!1;const qo=function(t){return V(t)&&Pe(t.length)&&!!W[H(t)]},oe=function(t){return function(e){return t(e)}};var Se=ot&&!ot.nodeType&&ot,Zt=Se&&!0&&X&&!X.nodeType&&X,re=Zt&&Zt.exports===Se&&E.process;const Ft=function(){try{var t=Zt&&Zt.require&&Zt.require("util").types;return t||re&&re.binding&&re.binding("util")}catch{}}();var Te=Ft&&Ft.isTypedArray;const Yo=Te?oe(Te):qo;var Jo=Object.prototype.hasOwnProperty;const Ie=function(t,e){var o=ee(t),r=!o&&Ho(t),i=!o&&!r&&Oe(t),h=!o&&!r&&!i&&Yo(t),b=o||r||i||h,m=b?Uo(t.length,String):[],N=m.length;for(var U in t)!e&&!Jo.call(t,U)||b&&(U=="length"||i&&(U=="offset"||U=="parent")||h&&(U=="buffer"||U=="byteLength"||U=="byteOffset")||Zo(U,N))||m.push(U);return m};var Xo=Object.prototype;const ne=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||Xo)},Ae=function(t,e){return function(o){return t(e(o))}},tr=Ae(Object.keys,Object);var er=Object.prototype.hasOwnProperty;const or=function(t){if(!ne(t))return tr(t);var e=[];for(var o in Object(t))er.call(t,o)&&o!="constructor"&&e.push(o);return e},Re=function(t){return t!=null&&Pe(t.length)&&!B(t)},ie=function(t){return Re(t)?Ie(t):or(t)},rr=function(t,e){return t&&Xt(e,ie(e),t)},nr=function(t){var e=[];if(t!=null)for(var o in Object(t))e.push(o);return e};var ir=Object.prototype.hasOwnProperty;const cr=function(t){if(!D(t))return nr(t);var e=ne(t),o=[];for(var r in t)(r!="constructor"||!e&&ir.call(t,r))&&o.push(r);return o},ce=function(t){return Re(t)?Ie(t,!0):cr(t)},ar=function(t,e){return t&&Xt(e,ce(e),t)};var ze=ot&&!ot.nodeType&&ot,We=ze&&!0&&X&&!X.nodeType&&X,Me=We&&We.exports===ze?P.Buffer:void 0,Le=Me?Me.allocUnsafe:void 0;const sr=function(t,e){if(e)return t.slice();var o=t.length,r=Le?Le(o):new t.constructor(o);return t.copy(r),r},lr=function(t,e){var o=-1,r=t.length;for(e||(e=Array(r));++o<r;)e[o]=t[o];return e},dr=function(t,e){for(var o=-1,r=t==null?0:t.length,i=0,h=[];++o<r;){var b=t[o];e(b,o,t)&&(h[i++]=b)}return h},De=function(){return[]};var ur=Object.prototype.propertyIsEnumerable,Fe=Object.getOwnPropertySymbols;const ae=Fe?function(t){return t==null?[]:(t=Object(t),dr(Fe(t),function(e){return ur.call(t,e)}))}:De,hr=function(t,e){return Xt(t,ae(t),e)},Ue=function(t,e){for(var o=-1,r=e.length,i=t.length;++o<r;)t[i+o]=e[o];return t},se=Ae(Object.getPrototypeOf,Object),Ne=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Ue(e,ae(t)),t=se(t);return e}:De,pr=function(t,e){return Xt(t,Ne(t),e)},Be=function(t,e,o){var r=e(t);return ee(t)?r:Ue(r,o(t))},fr=function(t){return Be(t,ie,ae)},br=function(t){return Be(t,ce,Ne)},le=Pt(P,"DataView"),de=Pt(P,"Promise"),ue=Pt(P,"Set"),he=Pt(P,"WeakMap");var $e="[object Map]",He="[object Promise]",Ke="[object Set]",Ge="[object WeakMap]",Ve="[object DataView]",gr=Ot(le),kr=Ot(Gt),mr=Ot(de),vr=Ot(ue),yr=Ot(he),St=H;(le&&St(new le(new ArrayBuffer(1)))!=Ve||Gt&&St(new Gt)!=$e||de&&St(de.resolve())!=He||ue&&St(new ue)!=Ke||he&&St(new he)!=Ge)&&(St=function(t){var e=H(t),o=e=="[object Object]"?t.constructor:void 0,r=o?Ot(o):"";if(r)switch(r){case gr:return Ve;case kr:return $e;case mr:return He;case vr:return Ke;case yr:return Ge}return e});const pe=St;var wr=Object.prototype.hasOwnProperty;const xr=function(t){var e=t.length,o=new t.constructor(e);return e&&typeof t[0]=="string"&&wr.call(t,"index")&&(o.index=t.index,o.input=t.input),o},Ze=P.Uint8Array,fe=function(t){var e=new t.constructor(t.byteLength);return new Ze(e).set(new Ze(t)),e},_r=function(t,e){var o=e?fe(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)};var jr=/\w*$/;const Cr=function(t){var e=new t.constructor(t.source,jr.exec(t));return e.lastIndex=t.lastIndex,e};var Qe=J?J.prototype:void 0,qe=Qe?Qe.valueOf:void 0;const Er=function(t){return qe?Object(qe.call(t)):{}},Or=function(t,e){var o=e?fe(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var Pr="[object Boolean]",Sr="[object Date]",Tr="[object Map]",Ir="[object Number]",Ar="[object RegExp]",Rr="[object Set]",zr="[object String]",Wr="[object Symbol]",Mr="[object ArrayBuffer]",Lr="[object DataView]",Dr="[object Float32Array]",Fr="[object Float64Array]",Ur="[object Int8Array]",Nr="[object Int16Array]",Br="[object Int32Array]",$r="[object Uint8Array]",Hr="[object Uint8ClampedArray]",Kr="[object Uint16Array]",Gr="[object Uint32Array]";const Vr=function(t,e,o){var r=t.constructor;switch(e){case Mr:return fe(t);case Pr:case Sr:return new r(+t);case Lr:return _r(t,o);case Dr:case Fr:case Ur:case Nr:case Br:case $r:case Hr:case Kr:case Gr:return Or(t,o);case Tr:return new r;case Ir:case zr:return new r(t);case Ar:return Cr(t);case Rr:return new r;case Wr:return Er(t)}};var Ye=Object.create;const Zr=function(){function t(){}return function(e){if(!D(e))return{};if(Ye)return Ye(e);t.prototype=e;var o=new t;return t.prototype=void 0,o}}(),Qr=function(t){return typeof t.constructor!="function"||ne(t)?{}:Zr(se(t))};var qr="[object Map]";const Yr=function(t){return V(t)&&pe(t)==qr};var Je=Ft&&Ft.isMap;const Jr=Je?oe(Je):Yr;var Xr="[object Set]";const tn=function(t){return V(t)&&pe(t)==Xr};var Xe=Ft&&Ft.isSet;const en=Xe?oe(Xe):tn;var on=1,rn=2,nn=4,to="[object Arguments]",eo="[object Function]",cn="[object GeneratorFunction]",oo="[object Object]",z={};z[to]=z["[object Array]"]=z["[object ArrayBuffer]"]=z["[object DataView]"]=z["[object Boolean]"]=z["[object Date]"]=z["[object Float32Array]"]=z["[object Float64Array]"]=z["[object Int8Array]"]=z["[object Int16Array]"]=z["[object Int32Array]"]=z["[object Map]"]=z["[object Number]"]=z[oo]=z["[object RegExp]"]=z["[object Set]"]=z["[object String]"]=z["[object Symbol]"]=z["[object Uint8Array]"]=z["[object Uint8ClampedArray]"]=z["[object Uint16Array]"]=z["[object Uint32Array]"]=!0,z["[object Error]"]=z[eo]=z["[object WeakMap]"]=!1;const an=function t(e,o,r,i,h,b){var m,N=o&on,U=o&rn,te=o&nn;if(r&&(m=h?r(e,i,h,b):r(e)),m!==void 0)return m;if(!D(e))return e;var It=ee(e);if(It){if(m=xr(e),!N)return lr(e,m)}else{var ht=pe(e),Ut=ht==eo||ht==cn;if(Oe(e))return sr(e,N);if(ht==oo||ht==to||Ut&&!h){if(m=U||Ut?{}:Qr(e),!N)return U?pr(e,ar(m,e)):hr(e,rr(m,e))}else{if(!z[ht])return h?e:{};m=Vr(e,ht,N)}}b||(b=new Lo);var qt=b.get(e);if(qt)return qt;b.set(e,m),en(e)?e.forEach(function(lt){m.add(t(lt,o,r,lt,e,b))}):Jr(e)&&e.forEach(function(lt,pt){m.set(pt,t(lt,o,r,pt,e,b))});var At=It?void 0:(te?U?br:fr:U?ce:ie)(e);return Do(At||e,function(lt,pt){At&&(lt=e[pt=lt]),we(m,pt,t(lt,o,r,pt,e,b))}),m};var sn=1,ln=4;const dn=function(t,e){return an(t,sn|ln,e=typeof e=="function"?e:void 0)};var un="[object Object]",hn=Function.prototype,pn=Object.prototype,ro=hn.toString,fn=pn.hasOwnProperty,bn=ro.call(Object);const gn=function(t){if(!V(t)||H(t)!=un)return!1;var e=se(t);if(e===null)return!0;var o=fn.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&ro.call(o)==bn},kn=function(t){return V(t)&&t.nodeType===1&&!gn(t)};function be(t,e=new Set){const o=[t],r=new Set;let i=0;for(;o.length>i;){const h=o[i++];if(!(r.has(h)||mn(h)||e.has(h)))if(r.add(h),h[Symbol.iterator])try{for(const b of h)o.push(b)}catch{}else for(const b in h)b!=="defaultValue"&&o.push(h[b])}return r}function mn(t){const e=Object.prototype.toString.call(t),o=typeof t;return o==="number"||o==="boolean"||o==="string"||o==="symbol"||o==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||t==null||t._watchdogExcluded===!0||t instanceof EventTarget||t instanceof Event}function no(t,e,o=new Set){if(t===e&&typeof(r=t)=="object"&&r!==null)return!0;var r;const i=be(t,o),h=be(e,o);for(const b of i)if(h.has(b))return!0;return!1}class io{constructor(e){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=o=>{const r=o.error||o.reason;r instanceof Error&&this._handleError(r,o)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,o){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o)}off(e,o){this._listeners[e]=this._listeners[e].filter(r=>r!==o)}_fire(e,...o){const r=this._listeners[e]||[];for(const i of r)i.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,o){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:o.filename,lineno:o.lineno,colno:o.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class co extends io{constructor(e,o={}){super(o),this._editor=null,this._throttledSave=n(this._save.bind(this),typeof o.saveInterval=="number"?o.saveInterval:5e3),this._creator=(r,i)=>e.create(r,i),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,o=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(o)||{},this._config.context=r,this._creator(e,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(o){console.error(o,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const o of this._editor.model.document.getRootNames())e[o]=this._editor.data.get({rootName:o});return e}_isErrorComingFromThisItem(e){return no(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return dn(e,(o,r)=>kn(o)||r==="context"?o:void 0)}}const Y=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2)),Qt=Symbol("MainQueueId");class ao extends io{constructor(e,o={}){super(o),this._watchdogs=new Map,this._watchdogConfig=o,this._context=null,this._contextProps=new Set,this._actionQueues=new vn,this._creator=r=>e.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(e={}){return this._actionQueues.enqueue(Qt,()=>(this._contextConfig=e,this._create()))}getItem(e){return this._getWatchdog(e)._item}getItemState(e){return this._getWatchdog(e).state}add(e){const o=so(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let i;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return i=new co(this._watchdogConfig),i.setCreator(r.creator),i._setExcludedProperties(this._contextProps),r.destructor&&i.setDestructor(r.destructor),this._watchdogs.set(r.id,i),i.on("error",(h,{error:b,causesRestart:m})=>{this._fire("itemError",{itemId:r.id,error:b}),m&&this._actionQueues.enqueue(r.id,()=>new Promise(N=>{i.on("restart",function U(){i.off("restart",U),this._fire("itemRestart",{itemId:r.id}),N()}.bind(this))}))}),i.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(e){const o=so(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r,()=>{const i=this._getWatchdog(r);return this._watchdogs.delete(r),i.destroy()})))}destroy(){return this._actionQueues.enqueue(Qt,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Qt,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(e=>{console.error("An error happened during destroying the context or items.",e)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(e=>(this._context=e,this._contextProps=be(this._context),Promise.all(Array.from(this._watchdogs.values()).map(o=>(o._setExcludedProperties(this._contextProps),o.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const e=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(o=>o.destroy())).then(()=>this._destructor(e))})}_getWatchdog(e){const o=this._watchdogs.get(e);if(!o)throw new Error(`Item with the given id was not registered: ${e}.`);return o}_isErrorComingFromThisItem(e){for(const o of this._watchdogs.values())if(o._isErrorComingFromThisItem(e))return!1;return no(this._context,e.context)}}class vn{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,o){const r=e===Qt;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const i=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Qt),this._queues.get(e)])).then(o),h=i.catch(()=>{});return this._queues.set(e,h),i.finally(()=>{this._activeActions--,this._queues.get(e)===h&&this._activeActions===0&&this._onEmptyCallbacks.forEach(b=>b())})}}function so(t){return Array.isArray(t)?t:[t]}const lo=c().createContext("contextWatchdog");class ge extends c().Component{constructor(e,o){super(e,o),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(e){return e.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(e.config)),e.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(e.config),!0):this.props.children!==e.children}render(){return c().createElement(lo.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(e){this.contextWatchdog=new ao(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(o,r)=>{this.props.onError(r.error,{phase:"runtime",willContextRestart:r.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(e).catch(o=>{this.props.onError(o,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}ge.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},ge.propTypes={id:x().string,isLayoutReady:x().bool,context:x().func,watchdogConfig:x().object,config:x().object,onReady:x().func,onError:x().func};const ke="Lock from React integration (@ckeditor/ckeditor5-react)";class Tt extends c().Component{constructor(e){super(e),this.editorDestructionInProgress=null,this.domContainer=c().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:o}=window;if(o){const[r]=o.split(".").map(Number);r<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(e){return!!this.editor&&(e.id!==this.props.id||(this._shouldUpdateEditor(e)&&this.editor.setData(e.data),"disabled"in e&&(e.disabled?this.editor.enableReadOnlyMode(ke):this.editor.disableReadOnlyMode(ke)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return c().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof ao?this.watchdog=new yn(this.context):this.watchdog=new Tt._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((e,o)=>this._createEditor(e,o)),this.watchdog.on("error",(e,{error:o,causesRestart:r})=>{this.props.onError(o,{phase:"runtime",willEditorRestart:r})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(e=>this.props.onError(e,{phase:"initialization",willEditorRestart:!1})))}_createEditor(e,o){return this.props.editor.create(e,o).then(r=>{"disabled"in this.props&&this.props.disabled&&r.enableReadOnlyMode(ke);const i=r.model.document,h=r.editing.view.document;return i.on("change:data",b=>{this.props.onChange&&this.props.onChange(b,r)}),h.on("focus",b=>{this.props.onFocus&&this.props.onFocus(b,r)}),h.on("blur",b=>{this.props.onBlur&&this.props.onBlur(b,r)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(r)}),r})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(e=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,e()}):e()})})}_shouldUpdateEditor(e){return this.props.data!==e.data&&this.editor.getData()!==e.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class yn{constructor(e){this._contextWatchdog=e,this._id=function(){const o=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,i=4294967296*Math.random()>>>0,h=4294967296*Math.random()>>>0;return"e"+Y[o>>0&255]+Y[o>>8&255]+Y[o>>16&255]+Y[o>>24&255]+Y[r>>0&255]+Y[r>>8&255]+Y[r>>16&255]+Y[r>>24&255]+Y[i>>0&255]+Y[i>>8&255]+Y[i>>16&255]+Y[i>>24&255]+Y[h>>0&255]+Y[h>>8&255]+Y[h>>16&255]+Y[h>>24&255]}()}setCreator(e){this._creator=e}create(e,o){return this._contextWatchdog.add({sourceElementOrData:e,config:o,creator:this._creator,id:this._id,type:"editor"})}on(e,o){this._contextWatchdog.on("itemError",(r,{itemId:i,causesRestart:h,error:b})=>{i===this._id&&o(null,{error:b,causesRestart:h})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}Tt.contextType=lo,Tt.propTypes={editor:x().func.isRequired,data:x().string,config:x().object,watchdogConfig:x().object,onChange:x().func,onReady:x().func,onFocus:x().func,onBlur:x().func,onError:x().func,disabled:x().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},Tt.defaultProps={config:{},onError:(t,e)=>console.error(t,e)},Tt._EditorWatchdog=co})(),l})())},34512:(X,ot,v)=>{"use strict";v.r(ot),v.d(ot,{default:()=>K});var C=v(67294),kt=v(45697),y=v.n(kt),S=v(88972),l=v(72757),a=v(77197),c=v(41580),k=v(30422),x=v(50361),D=v.n(x),E=v(39642),O=v(95046),P=v.n(O);const A=async(n,g)=>{if(!g)return;const{plugins:M=[]}=n,f=[...M.map(F=>F.pluginName)],Z=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"}],L=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],it=["FontBackgroundColor","FontColor","FontFamily","FontSize"],st=["List","DocumentList"];await Promise.all(Z.filter(({name:F})=>f.includes(F)).map(async({module:F})=>await v(74060)(`./${F}/build/translations/${g}.js`).catch(()=>null))),f.some(F=>L.includes(F))&&await v(98996)(`./${g}.js`).catch(()=>null),f.some(F=>st.includes(F))&&await v(44042)(`./${g}.js`).catch(()=>null),f.some(F=>it.includes(F))&&await v(42940)(`./${g}.js`).catch(()=>null)},$=async n=>{const g=new URLSearchParams(window.location.search),f=Object.fromEntries(g.entries())["plugins[i18n][locale]"],Z=k.I8.getUserInfo().preferedLanguage,{ui:L=Z||"en",content:it,textPartLanguage:st,ignorei18n:F}=n.language||{};if(f){const Q=f.split("-")[0];n.language={ui:typeof n.language=="string"?n.language:L,content:F?it:Q,textPartLanguage:st},await A(n,n.language.ui),await A(n,n.language.content)}else typeof n.language=="object"?(await A(n,n.language.ui),await A(n,n.language.content)):typeof n.language=="string"?await A(n,n.language):(n.language=Z,await A(n,Z))},mt=n=>{const{configs:g,configsOverwrite:M}=globalThis.CKEditorConfig||{};let f;return M?f=g:(f=E.Z,g&&Object.keys(g).map(L=>{E.Z.hasOwnProperty(L)?(f[L].fields={...E.Z[L].field,...g[L].field},f[L].styles=g[L].styles||E.Z[L].styles,f[L].editorConfig={...E.Z[L].editorConfig,...g[L].editorConfig}):f[L]=g[L]})),D()(f[n])},ft=(n,{responsiveDimensions:g},M)=>{const f=n.editorConfig?.plugins?[...n.editorConfig.plugins.map(Z=>Z.pluginName)]:[];f.includes("StrapiMediaLib")&&(n.editorConfig.strapiMediaLib={toggle:M}),f.includes("StrapiUploadAdapter")&&(n.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+k.I8.getToken()},backendUrl:strapi.backendURL,responsive:g}),f.includes("WordCount")&&(n.editorConfig.WordCountPlugin=!0)},at=n=>(0,k.WY)(`/${P()}/config/${n}`,{method:"GET"}),J=async(n,g)=>{const M=mt(n),f=await at("upload");return ft(M,f,g),await $(M.editorConfig),{currentConfig:M,uploadPluginConfig:f}},dt=(0,S.iv)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,ut=(0,S.iv)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,s=(0,S.iv)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,d=(0,S.iv)`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* --- color-picker --- */

.ck[dir=rtl] .ck-color-input{
  margin: 0 8px 8px 0 !important;
  padding: 3px 5px 0 0 !important;
}

.ck .ck-color-input{
  margin: 0 0 8px 8px ;
  padding: 3px 0 0 6px;
  border-radius:2px ;
  font-size:.77rem !important;
  width: 58px !important;
}
.ck .ck-color-picker{
  margin: 0 3px 8px 3px;
  border-radius:2px !important;
  width: 27px !important;
}
.ck .ck-color-picker-save{
  margin: 0 0 8px 0;
  border-radius:2px !important;
  width:27px !important;
}


/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,j={common:dt,light:ut,dark:s,additional:d},R=()=>{const n=localStorage.getItem("STRAPI_THEME")||"light",{theme:g,themeOverwrite:M}=globalThis.CKEditorConfig||{},f=M?g:{...j,...g};return(0,S.vJ)`
       ${f.common}
       ${f[n]}
       ${f.additional}
   `},T=({isOpen:n,onChange:g,onToggle:M,editor:f,uploadConfig:{responsiveDimensions:Z}})=>{const{components:L}=(0,k.yX)(),it=L["media-library"],st=Q=>{let G="";Q.map(({name:_t,url:jt,alt:Ct,formats:ct,mime:Et})=>{if(Et.includes("image"))if(ct&&Z){let Wt="",B=Object.keys(ct).sort((q,bt)=>ct[q].width-ct[bt].width);B.map(q=>Wt+=(0,k.CR)(ct[q].url)+` ${ct[q].width}w,`),G+=`<img src="${jt}" alt="${Ct}" width="${ct[B[B.length-1]].width}px" srcset="${Wt}" />`}else G+=`<img src="${jt}" alt="${Ct}" />`;else Et.includes("application/pdf")&&(G=`<a href="${(0,k.CR)(jt)}" download="${_t}">${_t||"Download PDF"}</a>`)});const tt=f.data.processor.toView(G),et=f.data.toModel(tt);f.model.insertContent(et),M()},F=Q=>{const G=Q.map(tt=>({name:tt.name,alt:tt.alternativeText||tt.name,url:(0,k.CR)(tt.url),mime:tt.mime,formats:tt.formats}));st(G)};return n?C.createElement(it,{onClose:M,onSelectAssets:F}):null};T.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},T.propTypes={isOpen:y().bool,onChange:y().func,onToggle:y().func};const I=T;var nt=v(77868),H=v(3108);const V=R(),vt=(0,S.ZP)("div")`${({editorStyles:n})=>n}`,wt=({onChange:n,name:g,value:M,disabled:f,preset:Z,maxLength:L})=>{const[it,st]=(0,C.useState)(!1),[F,Q]=(0,C.useState)(!1),[G,tt]=(0,C.useState)(null),[et,_t]=(0,C.useState)(null),[jt,Ct]=(0,C.useState)(!1),ct=(0,C.useRef)(null),Et=()=>Q(B=>!B),Wt=B=>B>L?Ct(!0):Ct(!1);return(0,C.useEffect)(()=>{(async()=>{const{currentConfig:B,uploadPluginConfig:q}=await J(Z,Et);_t(B),tt(q)})()},[]),C.createElement(C.Fragment,null,et&&C.createElement(V,null),C.createElement(vt,{editorStyles:et?.styles},!et&&C.createElement(Nt,{hasRadius:!0,background:"neutral100"},C.createElement(a.a,null,"Loading...")),et&&C.createElement(l.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:et?.editorConfig,disabled:f,data:M,onReady:B=>{if(et.editorConfig.WordCountPlugin){const q=B.plugins.get("WordCount");q.on("update",(Yt,Kt)=>Wt(Kt.characters)),ct.current?.appendChild(q.wordCountContainer)}B.plugins.has("ImageUploadEditing")&&B.plugins.get("ImageUploadEditing").on("uploadComplete",(q,{data:bt,imageElement:Yt})=>B.model.change(Kt=>Kt.setAttribute("alt",bt.alt,Yt))),st(B)},onChange:(B,q)=>{const bt=q.getData();n({target:{name:g,value:bt}})}}),et&&et.editorConfig.WordCountPlugin&&C.createElement(xt,{color:jt?"danger500":"neutral400",ref:ct},!it&&C.createElement(a.a,{small:!0},"Loading...")),G&&C.createElement(I,{isOpen:F,onToggle:Et,editor:it,uploadConfig:G})))};wt.defaultProps={value:"",disabled:!1},wt.propTypes={onChange:y().func.isRequired,name:y().string.isRequired,value:y().string,disabled:y().bool};const xt=(0,S.ZP)(c.x)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,Nt=(0,S.ZP)(c.x)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,Bt=wt;var $t=v(86896),Ht=v(54574),zt=v(64777),yt=v(63428),w=v(96404),u=v(7681);const _=({name:n,attribute:g,onChange:M,value:f,intlLabel:Z,labelAction:L,disabled:it,error:st,description:F,required:Q})=>{const{formatMessage:G}=(0,$t.Z)(),{preset:tt,maxLengthCharacters:et,..._t}=g.options;return C.createElement(Ht.g,{name:n,id:n,error:st,hint:F&&G(F)},C.createElement(u.K,{spacing:1},C.createElement(zt.Q,{action:L,required:Q},G(Z)),C.createElement(Bt,{disabled:it,name:n,onChange:M,value:f,preset:tt,maxLength:et}),C.createElement(yt.J,null),C.createElement(w.c,null)))};_.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},_.propTypes={intlLabel:y().object.isRequired,onChange:y().func.isRequired,attribute:y().object.isRequired,name:y().string.isRequired,description:y().object,disabled:y().bool,error:y().string,labelAction:y().object,required:y().bool,value:y().string};const K=_}}]);
