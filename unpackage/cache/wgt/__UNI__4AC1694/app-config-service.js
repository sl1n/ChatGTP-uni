
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/main/index/index","pages/main/ask/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"ChatGPT专业版","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff"},"tabBar":{"color":"#999999","selectedColor":"#26B3A0","borderStyle":"white","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/index/index","iconPath":"static/tabbar/home_blue2.png","selectedIconPath":"static/tabbar/home_blue3_selected.png","text":"首页"},{"pagePath":"pages/main/ask/index","iconPath":"static/tabbar/all_blue2.png","selectedIconPath":"static/tabbar/all_blue2_selected.png","text":"关于"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"火爆全网的ChatGPT页面模板，让AI回答你的任何问题！ 分销版本已上线！","compilerVersion":"3.6.15","entryPagePath":"pages/main/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/main/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"ChatGPT专业版","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#26B3A0","navigationBarTextStyle":"white"}},{"path":"/pages/main/ask/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"关于","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#26B3A0","navigationBarTextStyle":"white"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});