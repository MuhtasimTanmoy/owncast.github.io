(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4440],{15746:function(e,n,t){"use strict";var i=t(21584);n.Z=i.Z},97183:function(e,n,t){"use strict";var i=t(2897),a=t(7293),s=i.ZP;s.Header=i.h4,s.Footer=i.$_,s.Content=i.VY,s.Sider=a.Z,n.Z=s},71230:function(e,n,t){"use strict";var i=t(92820);n.Z=i.Z},94594:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var i=t(87462),a=t(4942),s=t(50888),r=t(94184),l=t.n(r),o=t(97685),c=t(45987),d=t(67294),u=t(21770),h=t(15105),f=d.forwardRef(function(e,n){var t,i=e.prefixCls,s=void 0===i?"rc-switch":i,r=e.className,f=e.checked,p=e.defaultChecked,m=e.disabled,g=e.loadingIcon,x=e.checkedChildren,b=e.unCheckedChildren,v=e.onClick,y=e.onChange,j=e.onKeyDown,w=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),Z=(0,u.Z)(!1,{value:f,defaultValue:p}),k=(0,o.Z)(Z,2),C=k[0],N=k[1];function E(e,n){var t=C;return m||(N(t=e),null==y||y(t,n)),t}var S=l()(s,r,(t={},(0,a.Z)(t,"".concat(s,"-checked"),C),(0,a.Z)(t,"".concat(s,"-disabled"),m),t));return d.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":C,disabled:m,className:S,ref:n,onKeyDown:function(e){e.which===h.Z.LEFT?E(!1,e):e.which===h.Z.RIGHT&&E(!0,e),null==j||j(e)},onClick:function(e){var n=E(!C,e);null==v||v(n,e)}}),g,d.createElement("span",{className:"".concat(s,"-inner")},C?x:b))});f.displayName="Switch";var p=t(53124),m=t(98866),g=t(97647),x=t(68349),b=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>n.indexOf(i)&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)0>n.indexOf(i[a])&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]]);return t},v=d.forwardRef(function(e,n){var t,r=e.prefixCls,o=e.size,c=e.disabled,u=e.loading,h=e.className,v=b(e,["prefixCls","size","disabled","loading","className"]),y=d.useContext(p.E_),j=y.getPrefixCls,w=y.direction,Z=d.useContext(g.Z),k=d.useContext(m.Z),C=(null!=c?c:k)||u,N=j("switch",r),E=d.createElement("div",{className:"".concat(N,"-handle")},u&&d.createElement(s.Z,{className:"".concat(N,"-loading-icon")})),S=l()((t={},(0,a.Z)(t,"".concat(N,"-small"),"small"===(o||Z)),(0,a.Z)(t,"".concat(N,"-loading"),u),(0,a.Z)(t,"".concat(N,"-rtl"),"rtl"===w),t),void 0===h?"":h);return d.createElement(x.Z,{insertExtraNode:!0},d.createElement(f,(0,i.Z)({},v,{prefixCls:N,className:S,disabled:C,ref:n,loadingIcon:E})))});v.__ANT_SWITCH=!0;var y=v},13882:function(e,n,t){"use strict";function i(e,n){if(n.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}t.d(n,{Z:function(){return i}})},93645:function(e,n,t){"use strict";t.d(n,{u:function(){return a}});var i={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function a(e){return e?i[e]:i.trunc}},59910:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(19013),a=t(13882);function s(e,n){return(0,a.Z)(2,arguments),(0,i.Z)(e).getTime()-(0,i.Z)(n).getTime()}},11699:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(59910),a=t(13882),s=t(93645);function r(e,n,t){(0,a.Z)(2,arguments);var r=(0,i.Z)(e,n)/1e3;return(0,s.u)(null==t?void 0:t.roundingMethod)(r)}},19013:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(71002),a=t(13882);function s(e){(0,a.Z)(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,i.Z)(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):(("string"==typeof e||"[object String]"===n)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},7148:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-notify",function(){return t(4391)}])},44716:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var i=t(85893),a=t(67294),s=t(94594),r=t(91332),l=t(57520),o=t(24044),c=t(38631);let d=e=>{let{apiPath:n,checked:t,reversed:d=!1,configPath:u="",disabled:h=!1,fieldName:f,label:p,tip:m,useSubmit:g,onChange:x}=e,[b,v]=(0,a.useState)(null),y=null,j=(0,a.useContext)(c.a),{setFieldInConfigState:w}=j||{},Z=()=>{v(null),clearTimeout(y),y=null},k=async e=>{if(g){v((0,r.kg)(r.Jk));let t=d?!e:e;await (0,o.Si)({apiPath:n,data:{value:t},onSuccess:()=>{w({fieldName:f,value:t,path:u}),v((0,r.kg)(r.zv))},onError:e=>{v((0,r.kg)(r.Un,"There was an error: ".concat(e)))}}),y=setTimeout(Z,o.sI)}x&&x(e)},C=null!==b&&b.type===r.Jk;return(0,i.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,i.jsx)("div",{className:"label-side",children:(0,i.jsx)("span",{className:"formfield-label",children:p})}),(0,i.jsxs)("div",{className:"input-side",children:[(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)(s.Z,{className:"switch field-".concat(f),loading:C,onChange:k,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,i.jsx)(l.E,{status:b})]}),(0,i.jsx)("p",{className:"field-tip",children:m})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},4391:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var i=t(85893),a=t(85818),s=t(14670),r=t(71230),l=t(15746),o=t(71577),c=t(67294),d=t(41664),u=t.n(d),h=t(38631),f=t(67032),p=t(57520),m=t(24044),g=t(44716),x=t(91332);let{Title:b}=a.Z,v=()=>{let e=(0,c.useContext)(h.a),{serverConfig:n,setFieldInConfigState:t}=e||{},{notifications:a}=n||{},{discord:s}=a||{},{enabled:r,webhook:l,goLiveMessage:d}=s||{},[u,v]=(0,c.useState)({}),[y,j]=(0,c.useState)(null),[w,Z]=(0,c.useState)(!1);(0,c.useEffect)(()=>{v({enabled:r,webhook:l,goLiveMessage:d})},[a,s]);let k=()=>""!==l&&""!==d,C=e=>{let{fieldName:n,value:t}=e;v({...u,[n]:t}),Z(k())},N=()=>{j(null),clearTimeout(null)},E=async()=>{await (0,m.Si)({apiPath:"/notifications/discord",data:{value:u},onSuccess:()=>{t({fieldName:"discord",value:u,path:"notifications"}),j((0,x.kg)(x.zv,"Updated.")),setTimeout(N,m.sI)},onError:e=>{j((0,x.kg)(x.Un,e)),setTimeout(N,m.sI)}})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{children:"Discord"}),(0,i.jsx)("p",{className:"description reduced-margins",children:"Let your Discord channel know each time you go live."}),(0,i.jsxs)("p",{className:"description reduced-margins",children:[(0,i.jsx)("a",{href:"https://support.discord.com/hc/en-us/articles/228383668",target:"_blank",rel:"noreferrer",children:"Create a webhook"})," ","under ",(0,i.jsx)("i",{children:"Edit Channel / Integrations"})," on your Discord channel and provide it below."]}),(0,i.jsx)(g.Z,{apiPath:"",fieldName:"discordEnabled",label:"Enable Discord",checked:u.enabled,onChange:e=>{C({fieldName:"enabled",value:e})}}),(0,i.jsx)("div",{style:{display:u.enabled?"block":"none"},children:(0,i.jsx)(f.nv,{...m.oy.webhookUrl,required:!0,value:u.webhook,onChange:C})}),(0,i.jsx)("div",{style:{display:u.enabled?"block":"none"},children:(0,i.jsx)(f.nv,{...m.oy.goLiveMessage,required:!0,value:u.goLiveMessage,onChange:C})}),(0,i.jsx)(o.Z,{type:"primary",onClick:E,style:{display:w?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Save"}),(0,i.jsx)(p.E,{status:y})]})},{Title:y}=a.Z,j=()=>{let e=(0,c.useContext)(h.a),{serverConfig:n,setFieldInConfigState:t}=e||{},{notifications:a}=n||{},{browser:s}=a||{},{enabled:r,goLiveMessage:l}=s||{},[d,u]=(0,c.useState)({}),[b,v]=(0,c.useState)(null),[j,w]=(0,c.useState)(!1);(0,c.useEffect)(()=>{u({enabled:r,goLiveMessage:l})},[a,s]);let Z=()=>!0,k=e=>{let{fieldName:n,value:t}=e;console.log(n,t),u({...d,[n]:t}),w(Z())},C=()=>{v(null),clearTimeout(null)},N=async()=>{await (0,m.Si)({apiPath:"/notifications/browser",data:{value:d},onSuccess:()=>{t({fieldName:"browser",value:d,path:"notifications"}),v((0,x.kg)(x.zv,"Updated.")),setTimeout(C,m.sI)},onError:e=>{v((0,x.kg)(x.Un,e)),setTimeout(C,m.sI)}})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{children:"Browser Alerts"}),(0,i.jsx)("p",{className:"description reduced-margins",children:"Viewers can opt into being notified when you go live with their browser."}),(0,i.jsx)("p",{className:"description reduced-margins",children:"Not all browsers support this."}),(0,i.jsx)(g.Z,{apiPath:"",fieldName:"enabled",label:"Enable browser notifications",onChange:e=>{k({fieldName:"enabled",value:e})},checked:d.enabled}),(0,i.jsx)("div",{style:{display:d.enabled?"block":"none"},children:(0,i.jsx)(f.nv,{...m.mv.goLiveMessage,required:!0,type:f.Sk,value:d.goLiveMessage,onChange:k})}),(0,i.jsx)(o.Z,{type:"primary",style:{display:j?"inline-block":"none",position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},onClick:N,children:"Save"}),(0,i.jsx)(p.E,{status:b})]})},{Title:w}=a.Z,Z=()=>{let e=(0,c.useContext)(h.a),{serverConfig:n}=e||{},{federation:t}=n||{},{enabled:a}=t||{},[s,r]=(0,c.useState)({});return(0,c.useEffect)(()=>{r({enabled:a})},[a]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{children:"Fediverse Social"}),(0,i.jsx)("p",{className:"description",children:"Enabling the Fediverse social features will not just alert people to when you go live, but also enable other functionality."}),(0,i.jsxs)("p",{children:["Fediverse social features:"," ",(0,i.jsx)("span",{style:{color:t.enabled?"green":"red"},children:s.enabled?"Enabled":"Disabled"})]}),(0,i.jsx)(u(),{passHref:!0,href:"/admin/config-federation/",children:(0,i.jsx)(o.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Configure"})})]})};var k=t(78353),C=t(53899),N=t(34261);let{Title:E}=a.Z;function S(){let[e,n]=(0,c.useState)(null),t=(0,c.useContext)(h.a),{serverConfig:a}=t||{},{yp:d}=a,{instanceUrl:f}=d,[p,g]=(0,c.useState)(!1);(0,c.useEffect)(()=>{n({instanceUrl:f})},[d]);let x=""!==f,b=!x&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,i.jsx)("br",{}),(0,i.jsx)(k.$7,{fieldName:"instanceUrl",...m.yi,value:(null==e?void 0:e.instanceUrl)||"",initialValue:d.instanceUrl,type:k.xA,onChange:t=>{let{fieldName:i,value:a}=t;g((0,C.jv)(a)),n({...e,[i]:a})},onSubmit:()=>{p&&n({...e,enabled:!1})},required:!0})]});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(E,{children:"Notifications"}),(0,i.jsxs)("p",{className:"description",children:["Let your viewers know when you go live by supporting any of the below notification channels."," ",(0,i.jsx)("a",{href:"https://owncast.online/docs/notifications/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more about live notifications."})]}),b,(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(l.Z,{span:10,className:"form-module ".concat(x?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,i.jsx)(j,{})}),(0,i.jsx)(l.Z,{span:10,className:"form-module ".concat(x?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,i.jsx)(v,{})}),(0,i.jsx)(l.Z,{span:10,className:"form-module ".concat(x?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:(0,i.jsx)(Z,{})}),(0,i.jsxs)(l.Z,{span:10,className:"form-module ".concat(x?"":"disabled"),style:{margin:"5px",display:"flex",flexDirection:"column"},children:[(0,i.jsx)(E,{children:"Custom"}),(0,i.jsx)("p",{className:"description",children:"Build your own notifications by using custom webhooks."}),(0,i.jsx)(u(),{passHref:!0,href:"/admin/webhooks",children:(0,i.jsx)(o.Z,{type:"primary",style:{position:"relative",marginLeft:"auto",right:"0",marginTop:"20px"},children:"Create"})})]})]})]})}S.getLayout=function(e){return(0,i.jsx)(N.l,{page:e})}},11163:function(e,n,t){e.exports=t(96885)}},function(e){e.O(0,[173,5874,7311,5634,4931,5402,5257,1664,5348,9915,4261,9774,2888,179],function(){return e(e.s=7148)}),_N_E=e.O()}]);