(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4661],{917:function(e,n,r){"use strict";r.r(n),r.d(n,{FollowerCollection:function(){return x}});var t=r(85893),a=r(67294),o=r(70936),l=r(9974),s=r(4511),c=r(6647),i=r(55050),u=r(65118),f=r(93967),d=r.n(f),h=r(61391),w=r.n(h);let m=e=>{let{follower:n}=e;return(0,t.jsx)("div",{children:(0,t.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:(0,t.jsxs)(c.Z,{wrap:!1,className:d()([w().follower,"followers-follower"]),children:[(0,t.jsx)(i.Z,{span:6,className:w().avatarColumn,children:(0,t.jsx)(u.C,{src:n.image,alt:(n.name||n.username).charAt(0).toUpperCase(),className:w().avatar,size:"large",children:(n.name||n.username).charAt(0).toUpperCase()})}),(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(c.Z,{className:w().username,children:n.name||n.username.split("@",2)[0]}),(0,t.jsx)(c.Z,{className:w().account,children:n.username})]})]})})})};var g=r(71535),v=r.n(g),p=r(73652),_=r(30927);let x=e=>{let{name:n,onFollowButtonClick:r}=e,[c,i]=(0,a.useState)([]),[u,f]=(0,a.useState)(0),[d,h]=(0,a.useState)(1),[w,g]=(0,a.useState)(!0),x=async()=>{try{g(!0);let e=await fetch("".concat("/api/followers","?offset=").concat((d-1)*24,"&limit=").concat(24)),{results:n,total:r}=await e.json();i(n),f(r),g(!1)}catch(e){console.error(e)}};(0,a.useEffect)(()=>{x()},[d]);let Z=(0,t.jsxs)("div",{className:v().noFollowers,id:"followers-collection",children:[(0,t.jsx)("h2",{children:"Be the first follower!"}),(0,t.jsxs)("p",{children:["Owncast"!==n?n:"This server"," is a part of the"," ",(0,t.jsx)("a",{href:"https://owncast.online/join-fediverse",children:"Fediverse"}),", an interconnected network of independent users and servers."]}),(0,t.jsxs)("p",{children:["By following ","Owncast"!==n?n:"this server"," you'll be able to get updates from the stream, share it with others, and show your appreciation when it goes live, all from your own Fediverse account."]}),(0,t.jsx)(p.e,{onClick:r})]});return(null==c?void 0:c.length)||w?(0,t.jsx)(s.SV,{fallbackRender:e=>{let{error:n,resetErrorBoundary:r}=e;return(0,t.jsx)(_.A,{componentName:"FollowerCollection",message:n.message,retryFunction:r})},children:(0,t.jsx)(o.Z,{spinning:w,size:"large",children:(0,t.jsxs)("div",{className:v().followers,id:"followers-collection",children:[(0,t.jsx)("div",{className:v().followerRow,children:c.map(e=>(0,t.jsx)(m,{follower:e},e.link))}),(0,t.jsx)(l.Z,{className:v().pagination,current:d,pageSize:24,defaultPageSize:24,total:u,showSizeChanger:!1,onChange:e=>{h(e)},hideOnSinglePage:!0})]})})}):Z}},66192:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(1413),a=r(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=r(32206),s=function(e,n){return a.createElement(l.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:o}))};s.displayName="CheckOutlined";var c=a.forwardRef(s)},38443:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(1413),a=r(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},l=r(32206),s=function(e,n){return a.createElement(l.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:o}))};s.displayName="DownOutlined";var c=a.forwardRef(s)},72909:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(1413),a=r(67294),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},l=r(32206),s=function(e,n){return a.createElement(l.Z,(0,t.Z)((0,t.Z)({},e),{},{ref:n,icon:o}))};s.displayName="SearchOutlined";var c=a.forwardRef(s)},58448:function(e,n,r){"use strict";r.d(n,{F:function(){return s},Z:function(){return l}});var t=r(4942),a=r(93967),o=r.n(a);function l(e,n,r){return o()((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},"".concat(e,"-status-success"),"success"===n),"".concat(e,"-status-warning"),"warning"===n),"".concat(e,"-status-error"),"error"===n),"".concat(e,"-status-validating"),"validating"===n),"".concat(e,"-has-feedback"),r))}(0,r(3957).b)("warning","error","");var s=function(e,n){return n||e}},71535:function(e){e.exports={followers:"FollowerCollection_followers__DfFYk",followerRow:"FollowerCollection_followerRow__AP1gv",noFollowers:"FollowerCollection_noFollowers__zeGt_",pagination:"FollowerCollection_pagination__Iq9HJ"}},61391:function(e){e.exports={follower:"SingleFollower_follower__QdHxf",avatar:"SingleFollower_avatar__HfeN_",avatarColumn:"SingleFollower_avatarColumn__q2toA",account:"SingleFollower_account__dtUEp",username:"SingleFollower_username__X9Dea"}}}]);