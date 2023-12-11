"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[8702],{"./components/ui/followers/SingleFollower/SingleFollower.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SingleFollower_stories});const SingleFollower_stories={title:"owncast/Components/Followers/Single Follower",component:__webpack_require__("./components/ui/followers/SingleFollower/SingleFollower.tsx").U,parameters:{design:{type:"image",url:{src:"static/media/single-follower.8451bdf0.png",height:265,width:927,blurDataURL:"static/media/single-follower.8451bdf0.png"}},docs:{description:{component:"Represents a single follower."}}}};var Example={args:{follower:{name:"John Doe",description:"User",username:"@account@domain.tld",image:"https://avatars0.githubusercontent.com/u/1234?s=460&v=4",link:"https://yahoo.com"}}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  args: {\n    follower: {\n      name: 'John Doe',\n      description: 'User',\n      username: '@account@domain.tld',\n      image: 'https://avatars0.githubusercontent.com/u/1234?s=460&v=4',\n      link: 'https://yahoo.com'\n    }\n  }\n}",...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]},"./node_modules/antd/es/_util/getRenderPropValue.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>getRenderPropValue});var getRenderPropValue=function getRenderPropValue(propValue){return propValue?"function"==typeof propValue?propValue():propValue:null}},"./node_modules/antd/es/_util/hooks/useForceUpdate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useForceUpdate});var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function useForceUpdate(){var _React$useReducer=react__WEBPACK_IMPORTED_MODULE_0__.useReducer((function(x){return x+1}),0);return(0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.Z)(_React$useReducer,2)[1]}},"./node_modules/antd/es/avatar/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>es_avatar});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),es=__webpack_require__("./node_modules/rc-resize-observer/es/index.js"),es_ref=__webpack_require__("./node_modules/rc-util/es/ref.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),context=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),useBreakpoint=__webpack_require__("./node_modules/antd/es/grid/hooks/useBreakpoint.js"),responsiveObserve=__webpack_require__("./node_modules/antd/es/_util/responsiveObserve.js"),SizeContext=react.createContext("default"),SizeContextProvider=function SizeContextProvider(_ref){var children=_ref.children,size=_ref.size;return react.createElement(SizeContext.Consumer,null,(function(originSize){return react.createElement(SizeContext.Provider,{value:size||originSize},children)}))};const avatar_SizeContext=SizeContext;var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},InternalAvatar=function InternalAvatar(props,ref){var groupSize=react.useContext(avatar_SizeContext),_React$useState=react.useState(1),_React$useState2=(0,slicedToArray.Z)(_React$useState,2),scale=_React$useState2[0],setScale=_React$useState2[1],_React$useState3=react.useState(!1),_React$useState4=(0,slicedToArray.Z)(_React$useState3,2),mounted=_React$useState4[0],setMounted=_React$useState4[1],_React$useState5=react.useState(!0),_React$useState6=(0,slicedToArray.Z)(_React$useState5,2),isImgExist=_React$useState6[0],setIsImgExist=_React$useState6[1],avatarNodeRef=react.useRef(null),avatarChildrenRef=react.useRef(null),avatarNodeMergeRef=(0,es_ref.sQ)(ref,avatarNodeRef),getPrefixCls=react.useContext(context.E_).getPrefixCls,setScaleParam=function setScaleParam(){if(avatarChildrenRef.current&&avatarNodeRef.current){var childrenWidth=avatarChildrenRef.current.offsetWidth,nodeWidth=avatarNodeRef.current.offsetWidth;if(0!==childrenWidth&&0!==nodeWidth){var _props$gap=props.gap,gap=void 0===_props$gap?4:_props$gap;2*gap<nodeWidth&&setScale(nodeWidth-2*gap<childrenWidth?(nodeWidth-2*gap)/childrenWidth:1)}}};react.useEffect((function(){setMounted(!0)}),[]),react.useEffect((function(){setIsImgExist(!0),setScale(1)}),[props.src]),react.useEffect((function(){setScaleParam()}),[props.gap]);var childrenToRender,customizePrefixCls=props.prefixCls,_props$shape=props.shape,shape=void 0===_props$shape?"circle":_props$shape,_props$size=props.size,customSize=void 0===_props$size?"default":_props$size,src=props.src,srcSet=props.srcSet,icon=props.icon,className=props.className,alt=props.alt,draggable=props.draggable,children=props.children,crossOrigin=props.crossOrigin,others=__rest(props,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),size="default"===customSize?groupSize:customSize,needResponsive=Object.keys("object"===(0,esm_typeof.Z)(size)&&size||{}).some((function(key){return["xs","sm","md","lg","xl","xxl"].includes(key)})),screens=(0,useBreakpoint.Z)(needResponsive),responsiveSizeStyle=react.useMemo((function(){if("object"!==(0,esm_typeof.Z)(size))return{};var currentBreakpoint=responsiveObserve.c4.find((function(screen){return screens[screen]})),currentSize=size[currentBreakpoint];return currentSize?{width:currentSize,height:currentSize,lineHeight:"".concat(currentSize,"px"),fontSize:icon?currentSize/2:18}:{}}),[screens,size]),prefixCls=getPrefixCls("avatar",customizePrefixCls),sizeCls=classnames_default()((0,defineProperty.Z)((0,defineProperty.Z)({},"".concat(prefixCls,"-lg"),"large"===size),"".concat(prefixCls,"-sm"),"small"===size)),hasImageElement=react.isValidElement(src),classString=classnames_default()(prefixCls,sizeCls,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},"".concat(prefixCls,"-").concat(shape),!!shape),"".concat(prefixCls,"-image"),hasImageElement||src&&isImgExist),"".concat(prefixCls,"-icon"),!!icon),className),sizeStyle="number"==typeof size?{width:size,height:size,lineHeight:"".concat(size,"px"),fontSize:icon?size/2:18}:{};if("string"==typeof src&&isImgExist)childrenToRender=react.createElement("img",{src,draggable,srcSet,onError:function handleImgLoadError(){var onError=props.onError;!1!==(onError?onError():void 0)&&setIsImgExist(!1)},alt,crossOrigin});else if(hasImageElement)childrenToRender=src;else if(icon)childrenToRender=icon;else if(mounted||1!==scale){var transformString="scale(".concat(scale,") translateX(-50%)"),childrenStyle={msTransform:transformString,WebkitTransform:transformString,transform:transformString},sizeChildrenStyle="number"==typeof size?{lineHeight:"".concat(size,"px")}:{};childrenToRender=react.createElement(es.Z,{onResize:setScaleParam},react.createElement("span",{className:"".concat(prefixCls,"-string"),ref:avatarChildrenRef,style:(0,esm_extends.Z)((0,esm_extends.Z)({},sizeChildrenStyle),childrenStyle)},children))}else childrenToRender=react.createElement("span",{className:"".concat(prefixCls,"-string"),style:{opacity:0},ref:avatarChildrenRef},children);return delete others.onError,delete others.gap,react.createElement("span",(0,esm_extends.Z)({},others,{style:(0,esm_extends.Z)((0,esm_extends.Z)((0,esm_extends.Z)({},sizeStyle),responsiveSizeStyle),others.style),className:classString,ref:avatarNodeMergeRef}),childrenToRender)};const avatar=react.forwardRef(InternalAvatar);var toArray=__webpack_require__("./node_modules/rc-util/es/Children/toArray.js"),popover=__webpack_require__("./node_modules/antd/es/popover/index.js"),reactNode=__webpack_require__("./node_modules/antd/es/_util/reactNode.js");const group=function Group(props){var _React$useContext=react.useContext(context.E_),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,customizePrefixCls=props.prefixCls,_props$className=props.className,className=void 0===_props$className?"":_props$className,maxCount=props.maxCount,maxStyle=props.maxStyle,size=props.size,prefixCls=getPrefixCls("avatar-group",customizePrefixCls),cls=classnames_default()(prefixCls,(0,defineProperty.Z)({},"".concat(prefixCls,"-rtl"),"rtl"===direction),className),children=props.children,_props$maxPopoverPlac=props.maxPopoverPlacement,maxPopoverPlacement=void 0===_props$maxPopoverPlac?"top":_props$maxPopoverPlac,_props$maxPopoverTrig=props.maxPopoverTrigger,maxPopoverTrigger=void 0===_props$maxPopoverTrig?"hover":_props$maxPopoverTrig,childrenWithProps=(0,toArray.Z)(children).map((function(child,index){return(0,reactNode.Tm)(child,{key:"avatar-key-".concat(index)})})),numOfChildren=childrenWithProps.length;if(maxCount&&maxCount<numOfChildren){var childrenShow=childrenWithProps.slice(0,maxCount),childrenHidden=childrenWithProps.slice(maxCount,numOfChildren);return childrenShow.push(react.createElement(popover.Z,{key:"avatar-popover-key",content:childrenHidden,trigger:maxPopoverTrigger,placement:maxPopoverPlacement,overlayClassName:"".concat(prefixCls,"-popover")},react.createElement(avatar,{style:maxStyle},"+".concat(numOfChildren-maxCount)))),react.createElement(SizeContextProvider,{size},react.createElement("div",{className:cls,style:props.style},childrenShow))}return react.createElement(SizeContextProvider,{size},react.createElement("div",{className:cls,style:props.style},childrenWithProps))};var avatar_Avatar=avatar;avatar_Avatar.Group=group;const es_avatar=avatar_Avatar},"./node_modules/antd/es/col/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/antd/es/grid/col.js").Z},"./node_modules/antd/es/grid/col.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_config_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),_RowContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/grid/RowContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var sizes=["xs","sm","md","lg","xl","xxl"];const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((function(props,ref){var _React$useContext=react__WEBPACK_IMPORTED_MODULE_1__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__.E_),getPrefixCls=_React$useContext.getPrefixCls,direction=_React$useContext.direction,_React$useContext2=react__WEBPACK_IMPORTED_MODULE_1__.useContext(_RowContext__WEBPACK_IMPORTED_MODULE_3__.Z),gutter=_React$useContext2.gutter,wrap=_React$useContext2.wrap,supportFlexGap=_React$useContext2.supportFlexGap,customizePrefixCls=props.prefixCls,span=props.span,order=props.order,offset=props.offset,push=props.push,pull=props.pull,className=props.className,children=props.children,flex=props.flex,style=props.style,others=__rest(props,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),prefixCls=getPrefixCls("col",customizePrefixCls),sizeClassObj={};sizes.forEach((function(size){var sizeProps={},propSize=props[size];"number"==typeof propSize?sizeProps.span=propSize:"object"===(0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__.Z)(propSize)&&(sizeProps=propSize||{}),delete others[size],sizeClassObj=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},sizeClassObj),(0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)({},"".concat(prefixCls,"-").concat(size,"-").concat(sizeProps.span),void 0!==sizeProps.span),"".concat(prefixCls,"-").concat(size,"-order-").concat(sizeProps.order),sizeProps.order||0===sizeProps.order),"".concat(prefixCls,"-").concat(size,"-offset-").concat(sizeProps.offset),sizeProps.offset||0===sizeProps.offset),"".concat(prefixCls,"-").concat(size,"-push-").concat(sizeProps.push),sizeProps.push||0===sizeProps.push),"".concat(prefixCls,"-").concat(size,"-pull-").concat(sizeProps.pull),sizeProps.pull||0===sizeProps.pull),"".concat(prefixCls,"-rtl"),"rtl"===direction))}));var classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls,(0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.Z)({},"".concat(prefixCls,"-").concat(span),void 0!==span),"".concat(prefixCls,"-order-").concat(order),order),"".concat(prefixCls,"-offset-").concat(offset),offset),"".concat(prefixCls,"-push-").concat(push),push),"".concat(prefixCls,"-pull-").concat(pull),pull),className,sizeClassObj),mergedStyle={};if(gutter&&gutter[0]>0){var horizontalGutter=gutter[0]/2;mergedStyle.paddingLeft=horizontalGutter,mergedStyle.paddingRight=horizontalGutter}if(gutter&&gutter[1]>0&&!supportFlexGap){var verticalGutter=gutter[1]/2;mergedStyle.paddingTop=verticalGutter,mergedStyle.paddingBottom=verticalGutter}return flex&&(mergedStyle.flex=function parseFlex(flex){return"number"==typeof flex?"".concat(flex," ").concat(flex," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)?"0 0 ".concat(flex):flex}(flex),!1!==wrap||mergedStyle.minWidth||(mergedStyle.minWidth=0)),react__WEBPACK_IMPORTED_MODULE_1__.createElement("div",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},others,{style:(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},mergedStyle),style),className:classes,ref}),children)}))},"./node_modules/antd/es/grid/hooks/useBreakpoint.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_util_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/_util/hooks/useForceUpdate.js"),_util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/_util/responsiveObserve.js");const __WEBPACK_DEFAULT_EXPORT__=function useBreakpoint(){var refreshOnChange=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],screensRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),forceUpdate=(0,_util_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_1__.Z)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var token=_util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__.ZP.subscribe((function(supportScreens){screensRef.current=supportScreens,refreshOnChange&&forceUpdate()}));return function(){return _util_responsiveObserve__WEBPACK_IMPORTED_MODULE_2__.ZP.unsubscribe(token)}}),[]),screensRef.current}},"./node_modules/antd/es/popover/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/_util/getRenderPropValue.js"),_util_motion__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/_util/motion.js"),_config_provider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/tooltip/index.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},Overlay=function Overlay(_ref){var title=_ref.title,content=_ref.content,prefixCls=_ref.prefixCls;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,title&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"".concat(prefixCls,"-title")},(0,_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_1__.Z)(title)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"".concat(prefixCls,"-inner-content")},(0,_util_getRenderPropValue__WEBPACK_IMPORTED_MODULE_1__.Z)(content)))};const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(props,ref){var customizePrefixCls=props.prefixCls,title=props.title,content=props.content,_overlay=props._overlay,_props$placement=props.placement,placement=void 0===_props$placement?"top":_props$placement,_props$trigger=props.trigger,trigger=void 0===_props$trigger?"hover":_props$trigger,_props$mouseEnterDela=props.mouseEnterDelay,mouseEnterDelay=void 0===_props$mouseEnterDela?.1:_props$mouseEnterDela,_props$mouseLeaveDela=props.mouseLeaveDelay,mouseLeaveDelay=void 0===_props$mouseLeaveDela?.1:_props$mouseLeaveDela,_props$overlayStyle=props.overlayStyle,overlayStyle=void 0===_props$overlayStyle?{}:_props$overlayStyle,otherProps=__rest(props,["prefixCls","title","content","_overlay","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),getPrefixCls=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_2__.E_).getPrefixCls,prefixCls=getPrefixCls("popover",customizePrefixCls),rootPrefixCls=getPrefixCls(),mergedOverlay=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return _overlay||(title||content?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Overlay,{prefixCls,title,content}):null)}),[_overlay,title,content,prefixCls]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_tooltip__WEBPACK_IMPORTED_MODULE_3__.Z,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__.Z)({placement,trigger,mouseEnterDelay,mouseLeaveDelay,overlayStyle},otherProps,{prefixCls,ref,overlay:mergedOverlay,transitionName:(0,_util_motion__WEBPACK_IMPORTED_MODULE_5__.mL)(rootPrefixCls,"zoom-big",otherProps.transitionName)}))}))},"./components/ui/followers/SingleFollower/SingleFollower.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>SingleFollower});var row=__webpack_require__("./node_modules/antd/es/row/index.js"),col=__webpack_require__("./node_modules/antd/es/col/index.js"),avatar=__webpack_require__("./node_modules/antd/es/avatar/index.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SingleFollower_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/followers/SingleFollower/SingleFollower.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SingleFollower_module.Z,options);const SingleFollower_SingleFollower_module=SingleFollower_module.Z&&SingleFollower_module.Z.locals?SingleFollower_module.Z.locals:void 0;var __jsx=react.createElement,SingleFollower=function SingleFollower(_ref){var follower=_ref.follower;return __jsx("div",null,__jsx("a",{href:follower.link,target:"_blank",rel:"noreferrer"},__jsx(row.Z,{wrap:!1,className:classnames_default()([SingleFollower_SingleFollower_module.follower,"followers-follower"])},__jsx(col.Z,{span:6,className:SingleFollower_SingleFollower_module.avatarColumn},__jsx(avatar.C,{src:follower.image,alt:(follower.name||follower.username).charAt(0).toUpperCase(),className:SingleFollower_SingleFollower_module.avatar,size:"large"},(follower.name||follower.username).charAt(0).toUpperCase())),__jsx(col.Z,null,__jsx(row.Z,{className:SingleFollower_SingleFollower_module.username},follower.name||follower.username.split("@",2)[0]),__jsx(row.Z,{className:SingleFollower_SingleFollower_module.account},follower.username)))))};SingleFollower.displayName="SingleFollower";try{SingleFollower.displayName="SingleFollower",SingleFollower.__docgenInfo={description:"",displayName:"SingleFollower",props:{follower:{defaultValue:null,description:"",name:"follower",required:!0,type:{name:"Follower"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/followers/SingleFollower/SingleFollower.tsx#SingleFollower"]={docgenInfo:SingleFollower.__docgenInfo,name:"SingleFollower",path:"components/ui/followers/SingleFollower/SingleFollower.tsx#SingleFollower"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/followers/SingleFollower/SingleFollower.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".wILjRs2xIL3ZwjZRFPKP{border-color:rgba(0,0,0,.3);border-width:1px;border-style:solid;padding:10px;border-radius:15px;background-color:var(--theme-color-background-main);margin:.5em;font-size:1rem;line-height:1.5rem}.wILjRs2xIL3ZwjZRFPKP:hover{border-color:var(--theme-text-link)}.wILjRs2xIL3ZwjZRFPKP .dfu1hoZpNMAogbiPh3bq{height:60px;width:60px;border-color:rgba(0,0,0,.3);border-width:1px;border-style:solid;font-size:1.8rem}.wILjRs2xIL3ZwjZRFPKP .wHdqiMyfo8NG7SwhqrJ3{max-width:75px;min-width:75px}.wILjRs2xIL3ZwjZRFPKP .a5ihvwgoSviMGcitClGI{display:block;color:var(--theme-color-components-text-on-light);font-size:.7rem;line-height:1.2}.wILjRs2xIL3ZwjZRFPKP .A6hCk6Zq_Gj3FInV0kDG{display:block;font-family:var(--theme-text-display-font-family);font-weight:600;color:var(--theme-color-components-text-on-light);font-size:1rem;line-height:1.1;padding-bottom:5px}","",{version:3,sources:["webpack://./components/ui/followers/SingleFollower/SingleFollower.module.scss"],names:[],mappings:"AAEA,sBACE,2BAAA,CACA,gBAAA,CACA,kBAAA,CACA,YAAA,CACA,kBAAA,CACA,mDAAA,CACA,WAAA,CACA,cAAA,CACA,kBAAA,CAEA,4BACE,mCAAA,CAGF,4CACE,WAAA,CACA,UAAA,CACA,2BAAA,CACA,gBAAA,CACA,kBAAA,CACA,gBAAA,CAGF,4CACE,cAAA,CACA,cAAA,CAGF,4CACE,aAAA,CACA,iDAAA,CACA,eAAA,CACA,eAAA,CAGF,4CACE,aAAA,CACA,iDAAA,CACA,eAAA,CACA,iDAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA",sourcesContent:["@import '../../../../../web/styles/mixins';\n\n.follower {\n  border-color: rgb(0 0 0 / 30%);\n  border-width: 1px;\n  border-style: solid;\n  padding: 10px;\n  border-radius: 15px;\n  background-color: var(--theme-color-background-main);\n  margin: 0.5em;\n  font-size: 1rem;\n  line-height: 1.5rem;\n\n  &:hover {\n    border-color: var(--theme-text-link);\n  }\n\n  .avatar {\n    height: 60px;\n    width: 60px;\n    border-color: rgb(0 0 0 / 30%);\n    border-width: 1px;\n    border-style: solid;\n    font-size: 1.8rem;\n  }\n\n  .avatarColumn {\n    max-width: 75px;\n    min-width: 75px;\n  }\n\n  .account {\n    display: block;\n    color: var(--theme-color-components-text-on-light);\n    font-size: 0.7rem;\n    line-height: 1.2;\n  }\n\n  .username {\n    display: block;\n    font-family: var(--theme-text-display-font-family);\n    font-weight: 600;\n    color: var(--theme-color-components-text-on-light);\n    font-size: 1rem;\n    line-height: 1.1;\n    padding-bottom: 5px;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={follower:"wILjRs2xIL3ZwjZRFPKP",avatar:"dfu1hoZpNMAogbiPh3bq",avatarColumn:"wHdqiMyfo8NG7SwhqrJ3",account:"a5ihvwgoSviMGcitClGI",username:"A6hCk6Zq_Gj3FInV0kDG"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);