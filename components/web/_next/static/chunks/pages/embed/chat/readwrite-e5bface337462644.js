(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[955],{30672:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/chat/readwrite",function(){return n(40349)}])},35567:function(e,t,n){"use strict";n.d(t,{h:function(){return m}});var i=n(85893),s=n(65118),r=n(27189),o=n(67294),a=n(93967),l=n.n(a),c=n(5152),u=n.n(c),h=n(41664),d=n.n(h),f=n(76893),_=n.n(f);let p=u()(()=>Promise.all([n.e(7406),n.e(8625),n.e(5695)]).then(n.bind(n,5695)).then(e=>e.UserDropdown),{loadableGenerated:{webpack:()=>[5695]},ssr:!1}),m=e=>{let{name:t,chatAvailable:n,chatDisabled:a,online:c}=e,[u,h]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{h(window.innerWidth>=768)},[]),(0,i.jsxs)("header",{className:l()(["".concat(_().header)],"global-header"),children:[c?(0,i.jsx)(d(),{href:"#player",className:_().skipLink,children:"Skip to player"}):(0,i.jsx)(d(),{href:"#offline-message",className:_().skipLink,children:"Skip to offline message"}),(0,i.jsx)(d(),{href:"#skip-to-content",className:_().skipLink,children:"Skip to page content"}),(0,i.jsx)(d(),{href:"#footer",className:_().skipLink,children:"Skip to footer"}),(0,i.jsxs)("div",{className:_().logo,children:[(0,i.jsx)("div",{id:"header-logo",className:_().logoImage,children:(0,i.jsx)(s.C,{src:"/logo",size:"large",shape:"circle",className:_().avatar})}),(0,i.jsx)("h1",{className:_().title,id:"global-header-text",children:t})]}),n&&!a&&(0,i.jsx)(p,{id:"user-menu",hideTitleOnMobile:!0,showToggleChatOption:u}),!n&&!a&&(0,i.jsx)(r.Z,{overlayClassName:_().toolTip,title:"Chat will be available when the stream is live.",placement:"left",children:(0,i.jsx)("span",{className:_().chatOfflineText,children:"Chat is offline"})})]})};t.Z=m},35033:function(e,t,n){var i=n(34155);n(91479);var s=n(67294),r=s&&"object"==typeof s&&"default"in s?s:{default:s};function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=void 0!==i&&i.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,r=void 0===s?a:s;u(l(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",u("boolean"==typeof r,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=r,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var o=document.querySelector('meta[property="csp-nonce"]');this._nonce=o?o.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(a||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(u(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return a||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){a||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];u(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&u(l(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(i,n):s.appendChild(i),i},o(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&o(e,t),e}();function u(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var h=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},d={};function f(e,t){if(!t)return"jsx-"+e;var n=String(t),i=e+n;return d[i]||(d[i]="jsx-"+h(e+"-"+n)),d[i]}function _(e,t){var n=e+t;return d[n]||(d[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[n]}var p=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,s=t.optimizeForSpeed,r=void 0!==s&&s;this._sheet=i||new c({name:"styled-jsx",optimizeForSpeed:r}),this._sheet.inject(),i&&"boolean"==typeof r&&(this._sheet.setOptimizeForSpeed(r),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,s=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var r=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=r,this._instancesCounts[i]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],i=e[1];return r.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,i=e.id;if(n){var s=f(i,n);return{styleId:s,rules:Array.isArray(t)?t.map(function(e){return _(s,e)}):[_(s,t)]}}return{styleId:f(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=s.createContext(null);m.displayName="StyleSheetContext";var v=r.default.useInsertionEffect||r.default.useLayoutEffect,S=new p;function g(e){var t=S||s.useContext(m);return t&&v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}g.dynamic=function(e){return e.map(function(e){return f(e[0],e[1])}).join(" ")},t.style=g},69554:function(e,t,n){"use strict";e.exports=n(35033).style},40349:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=n(85893),s=n(69554),r=n.n(s),o=n(4480),a=n(67294),l=n(4511),c=n(37976),u=n(61153),h=n(35567),d=n(26111),f=n(30927);function _(){let e=(0,o.sJ)(u.db),t=(0,o.sJ)(u.pH),n=(0,o.sJ)(u.g1),s=(0,o.sJ)(u.RI),_=(0,o.sJ)(u.Q),p=(0,o.sJ)(u.di),{name:m,chatDisabled:v}=n,{videoAvailable:S}=_,{streamTitle:g,online:y}=s;return(0,a.useEffect)(()=>{document.body.classList.add("body-background")},[]),(0,i.jsxs)("div",{className:"jsx-cf32fe5d739e776c",children:[(0,i.jsx)(r(),{id:"cf32fe5d739e776c",children:".body-background{background:var(--theme-color-components-chat-background)}"}),(0,i.jsxs)(l.SV,{fallbackRender:e=>{let{error:t}=e;return(0,i.jsx)(f.A,{componentName:"ReadWriteChatEmbed",message:t.message})},children:[(0,i.jsx)(u.me,{}),(0,i.jsx)(d.Q,{}),(0,i.jsx)(h.Z,{name:y&&g||m,chatAvailable:!0,chatDisabled:v,online:S}),e&&(0,i.jsx)("div",{id:"chat-container",className:"jsx-cf32fe5d739e776c",children:(0,i.jsx)(c.ChatContainer,{messages:t,usernameToHighlight:e.displayName,chatUserId:e.id,isModerator:e.isModerator,showInput:!0,height:"92vh",chatAvailable:p})})]})]})}},91479:function(){},76893:function(e){e.exports={header:"Header_header__h_8kj",logoImage:"Header_logoImage__u2hPz",logo:"Header_logo__ZlfnG",title:"Header_title__t7ymt",skipLink:"Header_skipLink__v1i8a",offlineTag:"Header_offlineTag__7jcdf",avatar:"Header_avatar__izREk",chatOfflineText:"Header_chatOfflineText__6Edb1",toolTip:"Header_toolTip__X1aqP"}}},function(e){e.O(0,[4283,5414,6906,5063,5888,6502,3226,1627,2888,9774,179],function(){return e(e.s=30672)}),_N_E=e.O()}]);