(function(e){function n(n){for(var a,r,d=n[0],c=n[1],u=n[2],s=0,f=[];s<d.length;s++)r=d[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(n);while(f.length)f.shift()();return t.push.apply(t,u||[]),o()}function o(){for(var e,n=0;n<t.length;n++){for(var o=t[n],a=!0,d=1;d<o.length;d++){var c=o[d];0!==i[c]&&(a=!1)}a&&(t.splice(n--,1),e=r(r.s=o[0]))}return e}var a={},i={index:0},t=[];function r(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var n=[],o=i[e];if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(n,a){o=i[e]=[n,a]}));n.push(o[2]=a);var t,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=function(e){return r.p+"static/js/"+({"pages-main-ask-index":"pages-main-ask-index","pages-main-chat-index~pages-main-index-index":"pages-main-chat-index~pages-main-index-index","pages-main-chat-index":"pages-main-chat-index","pages-main-index-index":"pages-main-index-index"}[e]||e)+"."+{"pages-main-ask-index":"b7a5b61b","pages-main-chat-index~pages-main-index-index":"d854d506","pages-main-chat-index":"3e14e338","pages-main-index-index":"7550f8e6"}[e]+".js"}(e);var c=new Error;t=function(n){d.onerror=d.onload=null,clearTimeout(u);var o=i[e];if(0!==o){if(o){var a=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+t+")",c.name="ChunkLoadError",c.type=a,c.request=t,o[1](c)}i[e]=void 0}};var u=setTimeout((function(){t({type:"timeout",target:d})}),12e4);d.onerror=d.onload=t,document.head.appendChild(d)}return Promise.all(n)},r.m=e,r.c=a,r.d=function(e,n,o){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)r.d(o,a,function(n){return e[n]}.bind(null,a));return o},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=n,d=d.slice();for(var u=0;u<d.length;u++)n(d[u]);var l=c;t.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("bcc2")},"1ef7":function(e,n,o){"use strict";var a=o("f386"),i=o.n(a);i.a},"363b":function(e,n,o){var a=o("24fb");n=a(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */.u-line-1{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button::after{border:none}.u-hover-class{opacity:.7}.u-primary-light{color:#ecf5ff}.u-warning-light{color:#fdf6ec}.u-success-light{color:#f5fff0}.u-error-light{color:#fef0f0}.u-info-light{color:#f4f4f5}.u-primary-light-bg{background-color:#ecf5ff}.u-warning-light-bg{background-color:#fdf6ec}.u-success-light-bg{background-color:#f5fff0}.u-error-light-bg{background-color:#fef0f0}.u-info-light-bg{background-color:#f4f4f5}.u-primary-dark{color:#398ade}.u-warning-dark{color:#f1a532}.u-success-dark{color:#53c21d}.u-error-dark{color:#e45656}.u-info-dark{color:#767a82}.u-primary-dark-bg{background-color:#398ade}.u-warning-dark-bg{background-color:#f1a532}.u-success-dark-bg{background-color:#53c21d}.u-error-dark-bg{background-color:#e45656}.u-info-dark-bg{background-color:#767a82}.u-primary-disabled{color:#9acafc}.u-warning-disabled{color:#f9d39b}.u-success-disabled{color:#a9e08f}.u-error-disabled{color:#f7b2b2}.u-info-disabled{color:#c4c6c9}.u-primary{color:#3c9cff}.u-warning{color:#f9ae3d}.u-success{color:#5ac725}.u-error{color:#f56c6c}.u-info{color:#909399}.u-primary-bg{background-color:#3c9cff}.u-warning-bg{background-color:#f9ae3d}.u-success-bg{background-color:#5ac725}.u-error-bg{background-color:#f56c6c}.u-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909193}.u-light-color{color:#c0c4cc}.u-safe-area-inset-top{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-page-body{font-size:%?28?%}',""]),e.exports=n},"42c4":function(e,n,o){"use strict";o.r(n);var a=o("e014"),i=o("d99d");for(var t in i)["default"].indexOf(t)<0&&function(e){o.d(n,e,(function(){return i[e]}))}(t);o("1ef7");var r=o("f0c5"),d=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=d.exports},"49a6":function(e,n,o){"use strict";o("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=a},bcc2:function(e,n,o){"use strict";var a=o("4ea4").default,i=a(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("bf71"),o("1c31");var t=a(o("42c4")),r=a(o("e143")),d=a(o("f78d"));console.log("\n %c ChatGPT专业版 V1.0.1 %c 公众号：南羽工作室 \n\n","color: #ffffff; background: #3c9cff; padding:5px 0;","color: #3c9cff;background: #ffffff; padding:5px 0;");(function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?2470ff5771a9da26606a9f5858f9dfb0";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)})(),r.default.use(d.default),r.default.config.productionTip=!1,t.default.mpType="app";var c=new r.default((0,i.default)({},t.default));c.$mount()},bf71:function(e,n,o){"use strict";(function(e){var n=o("4ea4").default;o("13d5"),o("d3b7"),o("ddb0"),o("ac1f"),o("5319");var a=n(o("e143")),i={keys:function(){return[]}};e["____4AC1694____"]=!0,delete e["____4AC1694____"],e.__uniConfig={easycom:{"^u-(.*)":"uview-ui/components/u-$1/u-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^uniad$":"@dcloudio/uni-cli-shared/components/uniad.vue","^ad-rewarded-video$":"@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue","^ad-fullscreen-video$":"@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue","^ad-interstitial$":"@dcloudio/uni-cli-shared/components/ad-interstitial.vue","^ad-interactive$":"@dcloudio/uni-cli-shared/components/ad-interactive.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"},tabBar:{color:"#999999",selectedColor:"#26B3A0",borderStyle:"white",backgroundColor:"#ffffff",list:[{pagePath:"pages/main/index/index",iconPath:"static/tabbar/home_blue2.png",selectedIconPath:"static/tabbar/home_blue3_selected.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/main/chat/index",iconPath:"static/tabbar/all_blue2.png",selectedIconPath:"static/tabbar/all_blue2_selected.png",text:"对话",redDot:!1,badge:""},{pagePath:"pages/main/ask/index",iconPath:"static/tabbar/all_blue2.png",selectedIconPath:"static/tabbar/all_blue2_selected.png",text:"关于",redDot:!1,badge:""}]},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"ChatGPT专业版",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff"},uniIdRouter:{}},e.__uniConfig.compilerVersion="3.6.15",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__4AC1694",e.__uniConfig.appName="火爆全网的ChatGPT页面模板，让AI回答你的任何问题！ 分销版本已上线！",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,n){var o=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),a=i(n);return Object.assign(e[o]||(e[o]={}),a.common||a),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=o.e,a.default.component("pages-main-index-index",(function(e){var n={component:Promise.all([o.e("pages-main-chat-index~pages-main-index-index"),o.e("pages-main-index-index")]).then(function(){return e(o("2932"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-main-chat-index",(function(e){var n={component:Promise.all([o.e("pages-main-chat-index~pages-main-index-index"),o.e("pages-main-chat-index")]).then(function(){return e(o("0e83"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-main-ask-index",(function(e){var n={component:o.e("pages-main-ask-index").then(function(){return e(o("54c3"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/main/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"ChatGPT专业版",enablePullDownRefresh:!1,navigationBarBackgroundColor:"#26B3A0",navigationBarTextStyle:"white"})},[e("pages-main-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-main-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/main/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/main/chat/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"对话",enablePullDownRefresh:!1,navigationBarBackgroundColor:"#26B3A0",navigationBarTextStyle:"white"})},[e("pages-main-chat-index",{slot:"page"})])}},meta:{id:2,name:"pages-main-chat-index",isNVue:!1,maxWidth:0,pagePath:"pages/main/chat/index",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/main/ask/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"关于",enablePullDownRefresh:!1,navigationBarBackgroundColor:"#26B3A0",navigationBarTextStyle:"white"})},[e("pages-main-ask-index",{slot:"page"})])}},meta:{id:3,name:"pages-main-ask-index",isNVue:!1,maxWidth:0,pagePath:"pages/main/ask/index",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,o("c8ba"))},d99d:function(e,n,o){"use strict";o.r(n);var a=o("49a6"),i=o.n(a);for(var t in a)["default"].indexOf(t)<0&&function(e){o.d(n,e,(function(){return a[e]}))}(t);n["default"]=i.a},e014:function(e,n,o){"use strict";o.d(n,"b",(function(){return a})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){}));var a=function(){var e=this.$createElement,n=this._self._c||e;return n("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},i=[]},f386:function(e,n,o){var a=o("363b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=o("4f06").default;i("b8a5c214",a,!0,{sourceMap:!1,shadowMode:!1})}});