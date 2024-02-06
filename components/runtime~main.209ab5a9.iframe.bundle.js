(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({24:"chat-ChatModeratorNotification-ChatModeratorNotification-stories",384:"ui-NotifyReminderPopup-NotifyReminderPopup-stories",524:"chat-ChatSocialMessage-ChatSocialMessage-stories",576:"screenshots-android-Screenshots-android-stock-browser-landscape-stories-mdx",612:"layouts-Main-Main-stories",628:"colors-UserColors-stories-mdx",892:"ui-SocialLinks-SocialLinks-stories",988:"ui-followers-FollowerCollection-FollowerCollection-stories",1360:"LogosAndGraphics-stories-mdx",1432:"ui-Statusbar-StatusBar-stories",1496:"Tshirt-stories-mdx",1508:"Emoji-stories-mdx",1532:"screenshots-macos-Screenshots-macOS-firefox-stories-mdx",1552:"action-buttons-ActionButtonMenu-ActionButtonMenu-stories",1640:"chat-ChatUserBadge-ChatUserBadge-stories",1704:"screenshots-macos-Screenshots-macOS-safari-stories-mdx",1784:"screenshots-ipad-Screenshots-iPad-portrait-safari-stories-mdx",1788:"colors-ComponentColors-stories-mdx",1928:"SocialPlatformImages-stories-mdx",2020:"examples-S3InfrastructureExamples-stories-mdx",2260:"chat-ChatNameChangeMessage-ChatNameChangeMessage-stories",2372:"examples-CDN-S3InfrastructureExamples-stories-mdx",2380:"modals-ChatModal-ChatModal-stories",2392:"ReadwriteChat-stories",2656:"video-OwncastPlayer-OwncastPlayer-stories",3076:"ui-Footer-Footer-stories",3180:"screenshots-android-Screenshots-android-stock-browser-portrait-stories-mdx",3184:"chat-ChatModerationDetailsModal-ChatModerationDetailsModal-stories",3276:"screenshots-iphone-Screenshots-iPhone-safari-landscape-stories-mdx",3652:"config-federation-stories",3812:"common-ContentHeader-ContentHeader-stories",3972:"action-buttons-ActionButtonRow-ActionButtonRow-stories",3984:"modals-IndieAuthModal-IndieAuthModal-stories",4108:"examples-BasicInfrastructureExamples-stories-mdx",4164:"chat-ChatJoinMessage-ChatJoinMessage-stories",4168:"chat-ChatContainer-ChatContainer-stories",4292:"ui-ComponentError-ComponentError-stories",4376:"ui-Modal-Modal-stories",4492:"modals-NameChangeModal-NameChangeModal-stories",4796:"Images-stories-mdx",5352:"screenshots-windows-Screenshots-windows-chrome-stories-mdx",5656:"ui-followers-SingleFollower-SingleFollower-stories",5868:"colors-OwncastColorPalette-stories-mdx",6052:"common-UserDropdown-UserDropdown-stories",6072:"PageLogo-stories",6224:"screenshots-windows-Screenshots-windows-firefox-stories-mdx",6560:"Development-stories-mdx",6568:"modals-FatalErrorStateModal-FatalErrorStateModal-stories",6604:"ReadonlyChat-stories",6624:"ui-OfflineBanner-OfflineBanner-stories",6632:"ProductDefinition-stories-mdx",6716:"modals-AuthModal-AuthModal-stories",6804:"action-buttons-ActionButton-ActionButton-stories",6824:"ui-Header-Header-stories",6843:"modals-FollowModal-FollowModal-stories",7376:"modals-FediAuthModal-FediAuthModal-stories",7616:"Design-stories-mdx",7632:"chat-ChatSystemMessage-ChatSystemMessage-stories",7764:"chat-ChatTextField-ChatTextField-stories",8004:"chat-ChatUserMessage-ChatUserMessage-stories",8092:"screenshots-ipad-Screenshots-iPad-landscape-safari-stories-mdx",8168:"video-VideoPoster-VideoPoster-stories",8272:"chat-ChatActionMessage-ChatActionMessage-stories",8280:"modals-BrowserNotifyModal-BrowserNotifyModal-stories",8992:"screenshots-macos-Screenshots-macOS-chrome-stories-mdx",9100:"chat-ChatPartMessage-ChatPartMessage-stories",9212:"WebComponents-stories-mdx",9340:"common-OwncastLogo-OwncastLogo-stories",9432:"Typography-stories-mdx",9524:"examples-CDNInfrastructureExamples-stories-mdx",9584:"chat-ChatModerationActionMenu-ChatModerationActionMenu-stories",9804:"ui-CustomPageContent-CustomPageContent-stories",9956:"screenshots-iphone-Screenshots-iPhone-safari-portrait-stories-mdx"}[chunkId]||chunkId)+"."+{24:"88d4daa9",96:"e83db403",104:"ebddebbc",152:"e2d1a663",264:"7410cc92",292:"a9e888aa",340:"a14ee233",352:"b6695583",384:"942d9b89",388:"20f6fe2d",464:"219cfcd4",524:"620a485f",528:"eedeef92",576:"5bd60096",612:"96f46c0a",628:"2c643916",660:"70817fb9",780:"45958f36",840:"66e99e7d",844:"e76bc4cf",892:"fe85e6f0",987:"0d7fd4a6",988:"2cccb76f",1004:"359c2694",1056:"8d1ff08d",1072:"356a0510",1168:"4ea9194b",1224:"bb301de6",1228:"673ef237",1252:"de9352ac",1272:"f15f8934",1360:"381c68ca",1412:"43bd0a34",1432:"69ff845d",1436:"852e3311",1464:"2e8ce29c",1488:"8923d925",1496:"4e4649c5",1508:"40c9e9cd",1532:"a54fabe7",1552:"d396b99c",1616:"5757f542",1640:"0ab3c1b5",1704:"d265b721",1728:"ce5f785d",1769:"edf41993",1784:"62792168",1788:"99cdda9b",1800:"e44cc29c",1888:"b9be57a8",1928:"8cce4dbf",1968:"6931882c",2006:"56ce5f3c",2016:"e644ffe2",2020:"c6be8cac",2021:"d5f414ff",2051:"8c6dd217",2108:"0d11058b",2228:"dd86c09c",2232:"54f6d02e",2260:"7735e118",2348:"85b21881",2372:"e0cf0567",2380:"21e19251",2392:"1b4b78bd",2408:"6fbd71b4",2416:"50f3ad8d",2419:"9ea52b14",2472:"8de1ef77",2504:"6982770f",2640:"e6a252b4",2656:"d0eb56aa",2668:"d132b96d",2700:"218aba5d",2784:"ce65292d",2863:"7a543b1d",2901:"60df38c7",2964:"209f9d26",3020:"b91f9d6c",3076:"dc94f380",3100:"cf54f944",3104:"6b09fcb0",3180:"317b8e52",3184:"9a2c39ea",3276:"bcdb6850",3280:"761afa54",3304:"c1c3e746",3372:"65fa6a29",3500:"4dd76249",3584:"21a717dc",3605:"45f7778f",3652:"15b45fc2",3676:"cc237f05",3732:"8af228ef",3780:"0b382403",3812:"dcbf651d",3832:"054a6b43",3840:"c85dcb4b",3876:"f73b91df",3900:"9a1f9f92",3928:"f527b725",3972:"19e23de4",3984:"1034b47e",4040:"26eacef8",4108:"4928efe3",4120:"a93b41ed",4164:"55e0f10f",4168:"046c49a0",4188:"8c1f12ae",4292:"35176286",4372:"548ea57d",4376:"f8000333",4400:"94a4dfdb",4492:"34c448a5",4664:"aff970ed",4796:"884e5852",4800:"f7e3dd4c",4807:"99b0c349",4832:"efef2482",4888:"3e1bd396",5140:"72f64b87",5212:"d0bf4697",5232:"b538aaf4",5344:"422df977",5352:"97bbbc79",5640:"c9b7fb32",5644:"7bc722ca",5656:"8c9117b3",5726:"93bf4a71",5848:"892aba3a",5868:"7cb7e6da",5872:"324a9f1e",5936:"db1ad849",6035:"75185590",6052:"0f491333",6072:"a8af1735",6172:"c5079e07",6204:"f9ace76d",6224:"8266d5cd",6272:"d66b3eef",6288:"339d123a",6364:"d5c7bdca",6388:"778497a5",6420:"12b5a9fe",6444:"b1fad182",6552:"8e2f4952",6560:"535e7e3e",6568:"9bc36e55",6604:"3f683f50",6612:"a38b83d7",6624:"c5c52ba1",6632:"157d4339",6716:"20f18b94",6752:"77831365",6760:"05467b31",6804:"e4b6cb09",6824:"59493f05",6843:"0fea139e",6948:"a696df1c",7035:"a0ec511e",7044:"bfed7a51",7264:"1e003b27",7276:"69c9b239",7328:"4fc8b9ab",7376:"b9ff6270",7616:"ac2a636f",7632:"b1da8006",7664:"0e139130",7744:"700e7e8e",7764:"375a0a47",7784:"c2887da5",7813:"055df7cf",7932:"960b0f55",7960:"92c7a3cb",8004:"4dce7f47",8008:"33f0cfa6",8092:"0f735778",8163:"82266426",8168:"6dc614e3",8195:"8fc7c055",8228:"1f1e62a0",8240:"b11e7913",8244:"5cc829da",8272:"f1429022",8276:"547b6d56",8280:"4c1e09f4",8396:"9eb3a88c",8432:"a5622a95",8504:"56880126",8588:"ee4c7a7a",8600:"7947d2ee",8608:"7dba33d5",8612:"af9d98c9",8692:"e2a730a9",8704:"47131039",8804:"29aef179",8824:"e122b0e8",8848:"5fa61c1e",8884:"ee695e1d",8992:"f1aa6a18",9092:"e2e18839",9096:"b7264519",9100:"7a058bbd",9108:"080f9524",9112:"5f66c26e",9128:"5846c610",9156:"c2ef3693",9212:"9dbe37d6",9244:"6bf0acc5",9320:"123f97ae",9324:"ab041ded",9340:"b441a965",9416:"8eb5c218",9421:"0d5544b0",9432:"5c8b47a6",9456:"e02d0bf2",9496:"49b79eb1",9524:"62f97d36",9572:"355d9e92",9584:"45f6f70c",9656:"bd0467e9",9659:"f9bc11da",9728:"1e22728d",9804:"32234a1c",9832:"7cc81645",9860:"b34bb232",9936:"1ec63460",9956:"53ecbb0e"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="owncast-web:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","owncast-web:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={296:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(296!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkowncast_web=self.webpackChunkowncast_web||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();