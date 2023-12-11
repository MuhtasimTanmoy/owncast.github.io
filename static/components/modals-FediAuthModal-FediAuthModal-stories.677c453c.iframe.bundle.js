"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[2778],{"./components/modals/FediAuthModal/FediAuthModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Authenticated:()=>Authenticated,NotYetAuthenticated:()=>NotYetAuthenticated,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FediAuthModal_stories});const FediAuthModal_stories={title:"owncast/Modals/FediAuth",component:__webpack_require__("./components/modals/FediAuthModal/FediAuthModal.tsx").f,parameters:{design:{type:"image",url:{src:"static/media/fediauth-modal.00d94bf3.png",height:581,width:1041,blurDataURL:"static/media/fediauth-modal.00d94bf3.png"},scale:.5}}};var NotYetAuthenticated={args:{displayName:"fake-user",authenticated:!1,accessToken:""}},Authenticated={args:{displayName:"fake-user",authenticated:!0,accessToken:""}};NotYetAuthenticated.parameters={...NotYetAuthenticated.parameters,docs:{...NotYetAuthenticated.parameters?.docs,source:{originalSource:"{\n  args: {\n    displayName: 'fake-user',\n    authenticated: false,\n    accessToken: ''\n  }\n}",...NotYetAuthenticated.parameters?.docs?.source}}},Authenticated.parameters={...Authenticated.parameters,docs:{...Authenticated.parameters?.docs,source:{originalSource:"{\n  args: {\n    displayName: 'fake-user',\n    authenticated: true,\n    accessToken: ''\n  }\n}",...Authenticated.parameters?.docs?.source}}};const __namedExportsOrder=["NotYetAuthenticated","Authenticated"]},"./components/modals/FediAuthModal/FediAuthModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>FediAuthModal});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),collapse=__webpack_require__("./node_modules/antd/es/collapse/index.js"),input=__webpack_require__("./node_modules/antd/es/input/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),space=__webpack_require__("./node_modules/antd/es/space/index.js"),es_alert=__webpack_require__("./node_modules/antd/es/alert/index.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FediAuthModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/FediAuthModal/FediAuthModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FediAuthModal_module.Z,options);const FediAuthModal_FediAuthModal_module=FediAuthModal_module.Z&&FediAuthModal_module.Z.locals?FediAuthModal_module.Z.locals:void 0;var validators=__webpack_require__("./utils/validators.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,Panel=collapse.Z.Panel,CheckCircleOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(2074),__webpack_require__.e(7996)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CheckCircleOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/CheckCircleOutlined.js"]}}}),FediAuthModal=function FediAuthModal(_ref){var authenticated=_ref.authenticated,displayName=_ref.displayName,accessToken=_ref.accessToken,_useState=(0,react.useState)(null),errorMessage=_useState[0],setErrorMessage=_useState[1],_useState2=(0,react.useState)(!1),loading=_useState2[0],setLoading=_useState2[1],_useState3=(0,react.useState)(!1),valid=_useState3[0],setValid=_useState3[1],_useState4=(0,react.useState)(""),account=_useState4[0],setAccount=_useState4[1],_useState5=(0,react.useState)(""),code=_useState5[0],setCode=_useState5[1],_useState6=(0,react.useState)(!1),verifyingCode=_useState6[0],setVerifyingCode=_useState6[1],message=authenticated?__jsx("span",null,__jsx("b",null,"You are already authenticated"),". However, you can add other domains or log in as a different user."):__jsx("span",null,"Receive a direct message on the Fediverse to link your account to"," ",__jsx("strong",null,displayName),", or login as a previously linked chat user."),errorMessageText=errorMessage;errorMessageText&&errorMessageText.includes("url does not support indieauth")&&(errorMessageText="The provided URL is either invalid or does not support IndieAuth.");var makeRequest=function(){var _ref2=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(url,data){var rawResponse,content;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch(url,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)});case 2:return rawResponse=_context.sent,_context.next=5,rawResponse.json();case 5:(content=_context.sent).message&&(setErrorMessage(content.message),setLoading(!1));case 7:case"end":return _context.stop()}}),_callee)})));return function makeRequest(_x,_x2){return _ref2.apply(this,arguments)}}(),submitCodePressed=function(){var _ref3=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee2(){var url,data;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return setLoading(!0),url="/api/auth/fediverse/verify?accessToken=".concat(accessToken),data={code},_context2.prev=3,_context2.next=6,makeRequest(url,data);case 6:window.location.href="/",_context2.next=13;break;case 9:_context2.prev=9,_context2.t0=_context2.catch(3),console.error(_context2.t0),setErrorMessage(_context2.t0);case 13:setLoading(!1);case 14:case"end":return _context2.stop()}}),_callee2,null,[[3,9]])})));return function submitCodePressed(){return _ref3.apply(this,arguments)}}(),submitAccountPressed=function(){var _ref4=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee3(){var url,normalizedAccount,data;return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(valid){_context3.next=2;break}return _context3.abrupt("return");case 2:return setLoading(!0),setErrorMessage(null),url="/api/auth/fediverse?accessToken=".concat(accessToken),normalizedAccount=account.replace(/^@+/,""),data={account:normalizedAccount},_context3.prev=7,_context3.next=10,makeRequest(url,data);case 10:setVerifyingCode(!0),_context3.next=17;break;case 13:_context3.prev=13,_context3.t0=_context3.catch(7),console.error(_context3.t0),setErrorMessage(_context3.t0);case 17:setLoading(!1);case 18:case"end":return _context3.stop()}}),_callee3,null,[[7,13]])})));return function submitAccountPressed(){return _ref4.apply(this,arguments)}}(),inputCodeStep=__jsx("div",null,"Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",__jsx("div",{className:FediAuthModal_FediAuthModal_module.codeInputContainer},__jsx(input.Z,{value:code,onChange:function onChange(e){return setCode(e.target.value)},className:FediAuthModal_FediAuthModal_module.codeInput,placeholder:"123456",maxLength:6}),__jsx(es_button.Z,{type:"primary",onClick:submitCodePressed,disabled:code.length<6,className:FediAuthModal_FediAuthModal_module.submitButton},"Verify Code"))),inputAccountStep=__jsx(react.Fragment,null,__jsx("div",null,"Your Fediverse Account"),__jsx(input.Z.Search,{addonBefore:"@",onInput:function onInput(e){setAccount(e.target.value),function validate(acct){setValid((0,validators.ME)(acct))}(e.target.value)},value:account,placeholder:"youraccount@yourserver.com",status:!valid&&account.length>0?"error":void 0,onSearch:submitAccountPressed,enterButton:__jsx(es_button.Z,{type:valid?"primary":"default",disabled:!valid||0===account.length},__jsx(CheckCircleOutlined,null))}));return __jsx(spin.Z,{spinning:loading},__jsx(space.Z,{direction:"vertical"},message,errorMessageText&&__jsx(es_alert.Z,{message:"Error",description:errorMessageText,type:"error",showIcon:!0}),verifyingCode?inputCodeStep:inputAccountStep,__jsx(collapse.Z,{ghost:!0},__jsx(Panel,{key:"header",header:"Learn more about using the Fediverse to authenticate with chat."},__jsx("p",null,"You can link your chat identity with your Fediverse identity. Next time you want to use this chat identity you can again go through the Fediverse authentication."))),__jsx("div",null,__jsx("strong",null,"Note"),": This is for authentication purposes only, and no personal information will be accessed or stored.")))};FediAuthModal.displayName="FediAuthModal";try{FediAuthModal.displayName="FediAuthModal",FediAuthModal.__docgenInfo={description:"",displayName:"FediAuthModal",props:{authenticated:{defaultValue:null,description:"",name:"authenticated",required:!0,type:{name:"boolean"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}},accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/modals/FediAuthModal/FediAuthModal.tsx#FediAuthModal"]={docgenInfo:FediAuthModal.__docgenInfo,name:"FediAuthModal",path:"components/modals/FediAuthModal/FediAuthModal.tsx#FediAuthModal"})}catch(__react_docgen_typescript_loader_error){}},"./utils/validators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ME:()=>isValidFediverseAccount,jv:()=>isValidUrl});function isValidUrl(url){var validProtocols=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{var validationObject=new URL(url);if(""===validationObject.protocol||""===validationObject.hostname||!validProtocols.includes(validationObject.protocol))return!1}catch(e){return!1}return!0}function isValidFediverseAccount(account){var sanitized=account.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(sanitized).toLowerCase())}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/FediAuthModal/FediAuthModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".AFFWVbJomufBXfHPzW0d{display:flex;justify-content:center;flex-direction:column}.AFFWVbJomufBXfHPzW0d .x63iu67imRumXk_ZW6W5{font-size:1.6rem;font-family:monospace;max-width:220px;margin:auto;text-align:center;letter-spacing:6px;border-color:var(--theme-color-palette-9);color:var(--theme-color-palette-9)}.AFFWVbJomufBXfHPzW0d .hoCXtQEUFKO8yU2i2UI6{max-width:150px;margin:auto;margin-top:10px}","",{version:3,sources:["webpack://./components/modals/FediAuthModal/FediAuthModal.module.scss"],names:[],mappings:"AAAA,sBAkBE,YAAA,CACA,sBAAA,CACA,qBAAA,CAnBA,4CACE,gBAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CACA,yCAAA,CACA,kCAAA,CAGF,4CACE,eAAA,CACA,WAAA,CACA,eAAA",sourcesContent:[".codeInputContainer {\n  .codeInput {\n    font-size: 1.6rem;\n    font-family: monospace;\n    max-width: 220px;\n    margin: auto;\n    text-align: center;\n    letter-spacing: 6px;\n    border-color: var(--theme-color-palette-9);\n    color: var(--theme-color-palette-9);\n  }\n\n  .submitButton {\n    max-width: 150px;\n    margin: auto;\n    margin-top: 10px;\n  }\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={codeInputContainer:"AFFWVbJomufBXfHPzW0d",codeInput:"x63iu67imRumXk_ZW6W5",submitButton:"hoCXtQEUFKO8yU2i2UI6"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);