(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{64830:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(40341)}])},86177:function(e,t,n){"use strict";n.d(t,{o:function(){return h}});var s=n(85893);n(67294);var a=n(2307),l=n(59361),r=n(53740),i=n(53731),o=n(58091);let{Title:d}=r.default;function c(e,t){let n="black";return"warning"===t.level?n="orange":"error"===t.level&&(n="red"),(0,s.jsx)(l.Z,{color:n,children:e})}function u(e){return(0,s.jsx)(i.Z,{children:e})}let h=e=>{let{logs:t,pageSize:n}=e;if(!(null==t?void 0:t.length))return null;let l=[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:(e,t)=>0===t.level.indexOf(e),render:c},{title:"Timestamp",dataIndex:"time",key:"time",render:e=>{let t=new Date(e);return(0,o.Z)(t,"pp P")},sorter:(e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:u}];return(0,s.jsxs)("div",{className:"logs-section",children:[(0,s.jsx)(d,{children:"Logs"}),(0,s.jsx)(a.Z,{size:"middle",dataSource:t,columns:l,rowKey:e=>e.time,pagination:{pageSize:n||20}})]})}},53920:function(e,t,n){"use strict";n.d(t,{j:function(){return g}});var s=n(85893),a=n(4863),l=n(65400),r=n(70302),i=n(5789),o=n(55673),d=n(26289),c=n(53740),u=n(5152),h=n.n(u),m=n(41664),x=n.n(m),f=n(67294),j=n(38631);let p=h()(()=>Promise.resolve().then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),v=h()(()=>Promise.resolve().then(n.t.bind(n,67039,23)),{loadableGenerated:{webpack:()=>[67039]},ssr:!1}),g=e=>{let{showTroubleshootButton:t}=e,n=(0,f.useContext)(j.a),{health:u}=n;if(!u)return null;let{healthy:h,healthPercentage:m,message:g,representation:w}=u,b="#3f8600",y="info";return m<80?(b="#cf000f",y="error"):m<30&&(b="#f0ad4e",y="error"),(0,s.jsx)("div",{children:(0,s.jsxs)(r.default,{type:"inner",children:[(0,s.jsxs)(o.Z,{gutter:8,children:[(0,s.jsx)(i.Z,{span:12,children:(0,s.jsx)(d.Z,{title:"Healthy Stream",value:h?"Yes":"No",valueStyle:{color:b},prefix:h?(0,s.jsx)(p,{}):(0,s.jsx)(v,{})})}),(0,s.jsx)(i.Z,{span:12,children:(0,s.jsx)(d.Z,{title:"Playback Health",value:m,valueStyle:{color:b},suffix:"%"})})]}),(0,s.jsx)(o.Z,{style:{display:w<100&&0!==w?"grid":"none"},children:(0,s.jsxs)(c.default.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",w,"% of all known players. Other player status is unknown."]})}),(0,s.jsx)(o.Z,{gutter:16,style:{width:"100%",display:g?"grid":"none",marginTop:"10px"},children:(0,s.jsx)(i.Z,{span:24,children:(0,s.jsx)(a.default,{message:g,type:y,showIcon:!0,action:t&&(0,s.jsx)(x(),{passHref:!0,href:"/admin/stream-health",children:(0,s.jsx)(l.default,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})})};g.defaultProps={showTroubleshootButton:!0}},40341:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var s=n(85893),a=n(67294),l=n(10149),r=n(70302),i=n(26289),o=n(55673),d=n(5789),c=n(45938),u=n(19642),h=n(5152),m=n.n(h),x=n(38631),f=n(86177),j=n(53740),p=n(41664),v=n.n(p),g=n(42099),w=n(68469),b=n(58091),y=n(81453);let{Panel:k}=w.default,{Title:N,Link:Z}=j.default,S=e=>{let{title:t,url:n,content_html:a,date_published:l,defaultOpen:r=!1}=e,i=new Date(l),o=(0,b.Z)(i,"MMM dd, yyyy, HH:mm");return(0,s.jsx)("article",{children:(0,s.jsx)(w.default,{defaultActiveKey:r?n:null,children:(0,s.jsxs)(k,{header:t,children:[(0,s.jsxs)("p",{className:"timestamp",children:[o," (",(0,s.jsx)(Z,{href:"".concat("https://owncast.online").concat(n),target:"_blank",rel:"noopener noreferrer",children:"Link"}),")"]}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:a}})]},n)})})},O=()=>{let[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(!0),i=async()=>{r(!1);try{let e=await (0,y.kg)("https://owncast.online/news/index.json");(null==e?void 0:e.items.length)>0&&t(e.items)}catch(e){console.log("==== error",e)}};(0,a.useEffect)(()=>{i()},[]);let o=n?(0,s.jsx)(l.default,{loading:!0,active:!0}):null,d=n||0!==e.length?null:(0,s.jsx)("div",{children:"No news."});return(0,s.jsxs)("section",{className:"news-feed form-module",children:[(0,s.jsx)(N,{level:2,children:"News & Updates from Owncast"}),o,e.map(t=>(0,a.createElement)(S,{...t,key:t.url,defaultOpen:1===e.length})),d]})},{Paragraph:_,Text:C}=j.default,{Title:E}=j.default,{Meta:T}=r.default,D=m()(()=>n.e(3371).then(n.t.bind(n,33371,23)),{loadableGenerated:{webpack:()=>[33371]},ssr:!1}),U=m()(()=>n.e(5308).then(n.t.bind(n,85308,23)),{loadableGenerated:{webpack:()=>[85308]},ssr:!1}),I=m()(()=>n.e(856).then(n.t.bind(n,20856,23)),{loadableGenerated:{webpack:()=>[20856]},ssr:!1}),L=m()(()=>n.e(9208).then(n.t.bind(n,99208,23)),{loadableGenerated:{webpack:()=>[99208]},ssr:!1}),z=e=>{var t,l,i;let c,{logs:u=[],config:h}=e,m=(0,a.useContext)(x.a),{serverConfig:j}=m||{},{rtmpServerPort:p,streamKeyOverridden:w}=j,b=(null===(t=n.g.window)||void 0===t?void 0:t.location.hostname)||"";b&&p&&(c="rtmp://".concat(b.replace(/(^\w+:|^)\/\//,""),":").concat(p,"/live"));let y=[{icon:(0,s.jsx)(D,{twoToneColor:"#6f42c1"}),title:"Use your broadcasting software",content:(0,s.jsxs)("div",{children:[(0,s.jsx)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how to point your existing software to your new server and start streaming your content."}),(0,s.jsxs)("div",{className:"stream-info-container",children:[(0,s.jsx)(C,{strong:!0,className:"stream-info-label",children:"Streaming URL:"}),c&&(0,s.jsx)(_,{className:"stream-info-box",copyable:!0,children:c}),(0,s.jsx)(C,{strong:!0,className:"stream-info-label",children:"Streaming Keys:"}),(0,s.jsx)(C,{strong:!0,className:"stream-info-box",children:w?(0,s.jsx)("span",{style:{paddingLeft:"10px",fontWeight:"normal"},children:"Overridden via command line."}):(0,s.jsx)(v(),{href:"/admin/config/server",children:" View "})})]})]})},{icon:(0,s.jsx)(I,{twoToneColor:"#f9826c"}),title:"Embed your video onto other sites",content:(0,s.jsx)("div",{children:(0,s.jsx)("a",{href:"https://owncast.online/docs/embed?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how you can add your Owncast stream to other sites you control."})})}];return(null==h?void 0:h.chatDisabled)||y.push({icon:(0,s.jsx)(U,{twoToneColor:"#0366d6"}),title:"Chat is disabled",content:(0,s.jsx)("span",{children:"Chat will continue to be disabled until you begin a live stream."})}),(null==h?void 0:null===(l=h.yp)||void 0===l?void 0:l.enabled)||y.push({icon:(0,s.jsx)(L,{twoToneColor:"#D18BFE"}),title:"Find an audience on the Owncast Directory",content:(0,s.jsxs)("div",{children:["List yourself in the Owncast Directory and show off your stream. Enable it in"," ",(0,s.jsx)(v(),{href:"/admin/config/general/",children:"settings."})]})}),(null==h?void 0:null===(i=h.federation)||void 0===i?void 0:i.enabled)||y.push({icon:(0,s.jsx)("img",{alt:"fediverse",width:"20px",src:"/img/fediverse-color.png"}),title:"Add your Owncast instance to the Fediverse",content:(0,s.jsxs)("div",{children:[(0,s.jsx)(v(),{href:"/admin/config-federation/",children:"Enable Owncast social"})," features to have your instance join the Fediverse, allowing people to follow, share and engage with your live stream."]})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{children:(0,s.jsx)(d.Z,{span:12,offset:6,children:(0,s.jsxs)("div",{className:"offline-intro",children:[(0,s.jsx)("span",{className:"logo",children:(0,s.jsx)(g.C,{variant:"simple"})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(E,{level:2,children:"No stream is active"}),(0,s.jsx)("p",{children:"You should start one."})]})]})})}),(0,s.jsxs)(o.Z,{gutter:[16,16],className:"offline-content",children:[(0,s.jsx)(d.Z,{span:12,xs:24,sm:24,md:24,lg:12,className:"list-section",children:y.map(e=>(0,s.jsx)(r.default,{size:"small",bordered:!1,children:(0,s.jsx)(T,{avatar:e.icon,title:e.title,description:e.content})},e.title))}),(0,s.jsx)(d.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,s.jsx)(O,{})})]}),(0,s.jsx)(f.o,{logs:u,pageSize:5})]})};var B=n(53920),G=n(37135),P=n(34261);let F=m()(()=>n.e(5412).then(n.t.bind(n,95412,23)),{loadableGenerated:{webpack:()=>[95412]},ssr:!1}),H=m()(()=>n.e(9095).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1});function A(e){return(0,s.jsxs)("ul",{className:"statistics-list",children:[(0,s.jsxs)("li",{children:[e.videoCodec||"Unknown"," @ ",e.videoBitrate||"Unknown"," kbps"]}),(0,s.jsxs)("li",{children:[e.framerate||"Unknown"," fps"]}),(0,s.jsxs)("li",{children:[e.width," x ",e.height]})]})}function M(){var e,t;let n=(0,a.useContext)(x.a),{broadcaster:h,serverConfig:m}=n||{},{remoteAddr:j,streamDetails:p}=h||{},v=(null==p?void 0:p.encoder)||"Unknown encoder",[g,w]=(0,a.useState)([]),b=async()=>{try{let e=await (0,y.rQ)(y.WQ);w(e)}catch(e){console.log("==== error",e)}},k=()=>{b()};if((0,a.useEffect)(()=>{k();let e=null;return e=setInterval(k,y.NE),()=>{clearInterval(e)}},[]),(0,G.Qr)(m)||(0,G.Qr)(n))return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.default,{active:!0}),(0,s.jsx)(l.default,{active:!0}),(0,s.jsx)(l.default,{active:!0})]});if(!h)return(0,s.jsx)(z,{logs:g,config:m});let N=null==n?void 0:null===(t=n.currentBroadcast)||void 0===t?void 0:null===(e=t.outputSettings)||void 0===e?void 0:e.map(e=>{let{audioPassthrough:t,videoPassthrough:n,audioBitrate:a,videoBitrate:l,framerate:r}=e,o=t?"".concat(p.audioCodec||"Unknown",", ").concat(p.audioBitrate," kbps"):"".concat(a||"Unknown"," kbps"),d=n?"".concat(p.videoBitrate||"Unknown"," kbps, ").concat(p.framerate," fps ").concat(p.width," x ").concat(p.height):"".concat(l||"Unknown"," kbps, ").concat(r," fps");return(0,s.jsxs)("div",{className:"stream-details-item-container",children:[(0,s.jsx)(i.Z,{className:"stream-details-item",title:"Outbound Video Stream",value:d}),(0,s.jsx)(i.Z,{className:"stream-details-item",title:"Outbound Audio Stream",value:o})]})}),{viewerCount:Z,sessionPeakViewerCount:S}=n,_="".concat(p.audioCodec,", ").concat(p.audioBitrate||"Unknown"," kbps"),C=new Date(h.time);return(0,s.jsxs)("div",{className:"home-container",children:[(0,s.jsxs)("div",{className:"sections-container",children:[(0,s.jsx)("div",{className:"online-status-section",children:(0,s.jsxs)(r.default,{size:"small",type:"inner",className:"online-details-card",children:[(0,s.jsxs)(o.Z,{gutter:[16,16],align:"middle",children:[(0,s.jsx)(d.Z,{span:8,sm:24,md:8,children:(0,s.jsx)(i.Z,{title:"Stream started ".concat((0,u.Z)(C,Date.now())),value:(0,c.Z)(C),prefix:(0,s.jsx)(H,{})})}),(0,s.jsx)(d.Z,{span:8,sm:24,md:8,children:(0,s.jsx)(i.Z,{title:"Viewers",value:Z,prefix:(0,s.jsx)(F,{})})}),(0,s.jsx)(d.Z,{span:8,sm:24,md:8,children:(0,s.jsx)(i.Z,{title:"Peak viewer count",value:S,prefix:(0,s.jsx)(F,{})})})]}),(0,s.jsx)(B.j,{})]})}),(0,s.jsxs)(o.Z,{gutter:[16,16],className:"section stream-details-section",children:[(0,s.jsxs)(d.Z,{className:"stream-details",span:12,sm:24,md:24,lg:12,children:[(0,s.jsx)(r.default,{size:"small",title:"Outbound Stream Details",type:"inner",className:"outbound-details",children:N}),(0,s.jsxs)(r.default,{size:"small",title:"Inbound Stream Details",type:"inner",children:[(0,s.jsx)(i.Z,{className:"stream-details-item",title:"Input",value:"".concat(v," ").concat((0,G.t5)(j))}),(0,s.jsx)(i.Z,{className:"stream-details-item",title:"Inbound Video Stream",value:p,formatter:A}),(0,s.jsx)(i.Z,{className:"stream-details-item",title:"Inbound Audio Stream",value:_})]})]}),(0,s.jsx)(d.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,s.jsx)(O,{})})]})]}),(0,s.jsx)("br",{}),(0,s.jsx)(f.o,{logs:g,pageSize:5})]})}M.getLayout=function(e){return(0,s.jsx)(P.l,{page:e})}}},function(e){e.O(0,[5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,9552,7752,5891,2891,4749,6627,8966,3068,8091,6300,8531,8469,3595,4954,4261,9774,2888,179],function(){return e(e.s=64830)}),_N_E=e.O()}]);