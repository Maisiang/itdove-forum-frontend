(function(){"use strict";var e={8018:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(6252),o=n(3577),r=n(9963);function i(e,t,n,i,l,u){const d=(0,a.up)("IceTea"),s=(0,a.up)("el-icon"),c=(0,a.up)("Star"),g=(0,a.up)("StarFilled"),m=(0,a.up)("el-menu-item"),f=(0,a.up)("Watermelon"),h=(0,a.up)("el-menu"),p=(0,a.up)("el-aside"),w=(0,a.up)("MediaMaxWidth");return(0,a.wg)(),(0,a.j4)(w,null,{default:(0,a.w5)((()=>[(0,a.Wm)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{onSelect:u.handleMenuSelect,"default-active":this.$route.path,"active-text-color":"#66b1ff","background-color":"#1d3043","text-color":"white",class:"noselect"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.kanbanList,((e,n)=>((0,a.wg)(),(0,a.j4)(m,{key:n,index:"/kanban/"+e.name_en},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d)])),_:1}),(0,a.Uk)(" "+(0,o.zw)(e.name),1)]),1!=e.kanban_id?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:t[0]||(t[0]=(0,r.iM)((e=>{this.starStatus=!this.starStatus}),["stop"]))},[l.starStatus?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(s,{key:0},{default:(0,a.w5)((()=>[(0,a.Wm)(c)])),_:1})),l.starStatus?((0,a.wg)(),(0,a.j4)(s,{key:1},{default:(0,a.w5)((()=>[(0,a.Wm)(g)])),_:1})):(0,a.kq)("",!0)])):(0,a.kq)("",!0)])),_:2},1032,["index"])))),128)),(0,a.Wm)(m,{index:"/about"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f)])),_:1}),(0,a.Uk)("常見問題")])])),_:1}),(0,a.Wm)(m,{disabled:""},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f)])),_:1}),(0,a.Uk)("研究所板")])])),_:1})])),_:1},8,["onSelect","default-active"])])),_:1})])),_:1})}var l=n(7235),u=n(3481),d=n(4703);const s=u.ZP.div`
    @media (max-width: ${d.Eb}px) {
        .el-aside,
        .el-menu{
            width:100% !important;
        }
    }
`;var c={name:"Kanban",data(){return{kanbanList:[],starStatus:!1}},methods:{handleMenuSelect(e){this.$router.push(e)}},mounted(){(0,l.Xi)().then((e=>{this.kanbanList=Object.assign([],e.data)}))},components:{MediaMaxWidth:s}},g=n(3744);const m=(0,g.Z)(c,[["render",i],["__scopeId","data-v-146e21fe"]]);var f=m},7235:function(e,t,n){n.d(t,{BH:function(){return s},Lh:function(){return g},Xi:function(){return d},xt:function(){return c}});var a=n(6154),o=n(8471);const r="https://itdove-forum-backend.onrender.com",i=a.Z.create({baseURL:r+"/public/",withCredentials:!0}),l=a.Z.create({baseURL:r+"/user/"}),u=a.Z.create({baseURL:r+"/admin/"}),d=()=>i.get("/kanban"),s=(e,t)=>i.get("/article/"+e+"?page="+t),c=e=>i.post("/login",e),g=e=>i.post("/register",e),m=e=>{e.interceptors.request.use((e=>(o.Z.commit("changeLoading",!0),e)),(e=>{throw e}))};m(i),m(l),m(u);const f=e=>{e.interceptors.response.use((e=>(o.Z.commit("changeLoading",!1),e)),(e=>{throw alert("Server目前不在...請稍後再試"),o.Z.commit("changeLoading",!1),e}))};f(i),f(l),f(u)},4703:function(e,t,n){n.d(t,{Eb:function(){return a},kS:function(){return r},tq:function(){return o}});n(3413);const a="768";function o(){const e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return!!e}function r(e,t,n){console.log(e,t,n);let a=[];if(!t)return;if(n===t)return;localStorage.getItem(e)?a=JSON.parse(localStorage.getItem(e)):localStorage.setItem(e,"[]"),a.unshift(t);let o=new Set(a);localStorage.setItem(e,JSON.stringify(Array.from(o)))}},8471:function(e,t,n){var a=n(2273);const o=(0,a.MT)({state:{isLoading:!1},mutations:{changeLoading(e,t){e.isLoading=t}}});t["Z"]=o},6875:function(e,t,n){var a=n(9963),o=n(6252);function r(e,t,n,a,r,i){const l=(0,o.up)("Header"),u=(0,o.up)("el-header"),d=(0,o.up)("router-view"),s=(0,o.up)("el-main"),c=(0,o.up)("el-container"),g=(0,o.Q2)("loading");return(0,o.wy)(((0,o.wg)(),(0,o.j4)(c,{"element-loading-text":"載入中...","element-loading-background":"rgba(120, 120, 120, 0.3)"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1}),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d)])),_:1})])),_:1})),[[g,r.loadingStatus,void 0,{fullscreen:!0,lock:!0}]])}var i="data:image/png;base64,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";const l=e=>((0,o.dD)("data-v-50e8cfd6"),e=e(),(0,o.Cn)(),e),u=l((()=>(0,o._)("a",{href:"/"},[(0,o._)("img",{src:i})],-1)));function d(e,t,n,a,r,i){const l=(0,o.up)("el-col"),d=(0,o.up)("ArticleSearch"),s=(0,o.up)("Login"),c=(0,o.up)("Register"),g=(0,o.up)("Search"),m=(0,o.up)("el-icon"),f=(0,o.up)("Menu"),h=(0,o.up)("el-row");return(0,o.wg)(),(0,o.j4)(h,{type:"flex",justify:"space-between",align:"middle"},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{span:3,xs:10},{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(l,{span:8,pull:1,class:"hidden-xs-only"},{default:(0,o.w5)((()=>[(0,o.Wm)(d)])),_:1}),(0,o.Wm)(l,{span:2,push:3,class:"hidden-xs-only"},{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1}),(0,o.Wm)(l,{span:2,class:"hidden-xs-only"},{default:(0,o.w5)((()=>[(0,o.Wm)(c)])),_:1}),(0,o.Wm)(l,{xs:4,push:3,class:"hidden-sm-and-up"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{size:"30",color:"white"},{default:(0,o.w5)((()=>[(0,o.Wm)(g)])),_:1})])),_:1}),(0,o.Wm)(l,{xs:4,class:"hidden-sm-and-up"},{default:(0,o.w5)((()=>[(0,o.Wm)(f)])),_:1})])),_:1})}const s={style:{width:"50%"}};function c(e,t,n,a,r,i){const l=(0,o.up)("Menu",!0),u=(0,o.up)("el-icon"),d=(0,o.up)("Login"),c=(0,o.up)("Kanban"),g=(0,o.up)("el-drawer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u,{size:"30",color:"white",onClick:t[0]||(t[0]=e=>r.drawerActive=!0)},{default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1}),(0,o.Wm)(g,{modelValue:r.drawerActive,"onUpdate:modelValue":t[1]||(t[1]=e=>r.drawerActive=e),title:"選單",size:"80%",style:{"background-color":"#1d3043"}},{default:(0,o.w5)((()=>[(0,o._)("div",s,[(0,o.Wm)(d)]),(0,o.Wm)(c)])),_:1},8,["modelValue"])],64)}function g(e,t,n,a,r,i){const l=(0,o.up)("el-button"),u=(0,o.up)("el-input"),d=(0,o.up)("el-form-item"),s=(0,o.up)("el-form"),c=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{type:"primary",onClick:t[0]||(t[0]=e=>r.loginFormVisible=!0),class:"login-btn"},{default:(0,o.w5)((()=>[(0,o.Uk)("登入")])),_:1}),(0,o.Wm)(c,{modelValue:r.loginFormVisible,"onUpdate:modelValue":t[4]||(t[4]=e=>r.loginFormVisible=e),title:"會員登入",width:r.dialogWidth,center:"",draggable:""},{footer:(0,o.w5)((()=>[(0,o.Wm)(l,{onClick:t[3]||(t[3]=e=>r.loginFormVisible=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("取消")])),_:1}),(0,o.Wm)(l,{type:"primary",onClick:i.login},{default:(0,o.w5)((()=>[(0,o.Uk)("登入")])),_:1},8,["onClick"])])),default:(0,o.w5)((()=>[(0,o.Wm)(s,{"label-width":"70px"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{label:"用戶名"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:r.username,"onUpdate:modelValue":t[1]||(t[1]=e=>r.username=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(d,{label:"密碼"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:r.password,"onUpdate:modelValue":t[2]||(t[2]=e=>r.password=e),"show-password":""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","width"])],64)}var m=n(9996);function f(e,t){m.bM.success({title:e,message:(0,o.h)("b",{style:"color: green"},t),duration:1500,position:"bottom-right"})}function h(e,t){m.bM.error({title:e,message:(0,o.h)("b",{style:"color: red"},t),duration:1500,position:"bottom-right",dangerouslyUseHTMLString:!0})}var p=n(4703),w=n(7235),b={name:"Login",data(){return{username:"",password:"",loginFormVisible:!1,dialogWidth:"30%"}},methods:{login(){(0,w.xt)({username:this.username,password:this.password}).then((e=>{e.data.isSuccess?(f("登入提示","登入成功！"),this.loginFormVisible=!1):h("登入提示","登入失敗！帳號或密碼錯誤...")}))}},mounted(){(0,p.tq)()&&(this.dialogWidth="90%")}},A=n(3744);const v=(0,A.Z)(b,[["render",g],["__scopeId","data-v-53e0988c"]]);var I=v,Q=n(8018),B={data(){return{drawerActive:!1}},components:{Login:I,Kanban:Q.Z}};const W=(0,A.Z)(B,[["render",c]]);var C=W;function y(e,t,n,a,r,i){const l=(0,o.up)("Search"),u=(0,o.up)("el-icon"),d=(0,o.up)("el-button"),s=(0,o.up)("el-autocomplete");return(0,o.wg)(),(0,o.j4)(s,{modelValue:r.inputValue,"onUpdate:modelValue":t[1]||(t[1]=e=>r.inputValue=e),"fetch-suggestions":r.suggestions,placeholder:"搜尋...",clearable:"",style:{width:"100%"}},{append:(0,o.w5)((()=>[(0,o.Wm)(d,{circle:"",onClick:t[0]||(t[0]=e=>i.goSearch())},{default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1})])),_:1})])),_:1},8,["modelValue","fetch-suggestions"])}var k=n(1348),V={data(){return{inputValue:"",suggestions:[]}},methods:{goSearch(){(0,p.kS)("ArticleSearch",this.inputValue,this.$route.query.key),this.suggestions.unshift({value:this.inputValue}),(0,k.z8)({message:this.inputValue,type:"success",duration:2e3})}},mounted(){if(localStorage.getItem("ArticleSearch"))for(var e=JSON.parse(localStorage.getItem("ArticleSearch")),t=0;t<e.length;t++)this.suggestions.push({value:e[t]})}};const E=(0,A.Z)(V,[["render",y]]);var G=E;function O(e,t,n,a,r,i){const l=(0,o.up)("el-button"),u=(0,o.up)("el-input"),d=(0,o.up)("el-form-item"),s=(0,o.up)("el-form"),c=(0,o.up)("el-dialog");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l,{type:"primary",onClick:t[0]||(t[0]=e=>r.registerFormVisible=!0),class:"register-btn"},{default:(0,o.w5)((()=>[(0,o.Uk)("註冊")])),_:1}),(0,o.Wm)(c,{modelValue:r.registerFormVisible,"onUpdate:modelValue":t[5]||(t[5]=e=>r.registerFormVisible=e),title:"會員註冊",width:r.dialogWidth,center:"",draggable:""},{footer:(0,o.w5)((()=>[(0,o.Wm)(l,{onClick:t[4]||(t[4]=e=>r.registerFormVisible=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("取消")])),_:1}),(0,o.Wm)(l,{type:"primary",onClick:i.register},{default:(0,o.w5)((()=>[(0,o.Uk)("註冊")])),_:1},8,["onClick"])])),default:(0,o.w5)((()=>[(0,o.Wm)(s,{"label-width":"70px"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{label:"用戶名"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:r.username,"onUpdate:modelValue":t[1]||(t[1]=e=>r.username=e)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(d,{label:"密碼"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:r.password,"onUpdate:modelValue":t[2]||(t[2]=e=>r.password=e),"show-password":""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(d,{label:"電子信箱"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{modelValue:r.email,"onUpdate:modelValue":t[3]||(t[3]=e=>r.email=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","width"])],64)}var D={name:"Register",data(){return{username:"",password:"",email:"",registerFormVisible:!1,dialogWidth:"30%"}},methods:{register(){(0,w.Lh)({username:this.username,password:this.password,email:this.email}).then((e=>{e.data.isSuccess?(f("註冊提示","註冊成功！"),this.registerFormVisible=!1):h("註冊提示","帳號或信箱重複！請重新再試...")}))}},mounted(){(0,p.tq)()&&(this.dialogWidth="90%"),console.log((0,p.tq)())}};const L=(0,A.Z)(D,[["render",O],["__scopeId","data-v-67e662d1"]]);var M=L,Z={name:"Header",components:{Menu:C,ArticleSearch:G,Login:I,Register:M}};const F=(0,A.Z)(Z,[["render",d],["__scopeId","data-v-50e8cfd6"]]);var x=F,z={name:"App",data(){return{loadingStatus:!1}},components:{Header:x},created(){this.$store.watch((e=>e.isLoading),((e,t)=>{this.loadingStatus=e}))}};const N=(0,A.Z)(z,[["render",r],["__scopeId","data-v-21073ef0"]]);var U=N,S=n(3413),H=n(8471),j=(n(4926),n(1621)),Y=(n(4415),n(5781));const K=(0,a.ri)(U);for(const[R,P]of Object.entries(Y))K.component(R,P);K.use(S.Z),K.use(H.Z),K.use(j.Z),K.provide("theme",j.Z.theme),K.mount("#app")},3413:function(e,t,n){var a=n(2201);const o=[{path:"/:catchAll(.*)",redirect:"/"},{path:"/",name:"Public",component:()=>n.e(214).then(n.bind(n,6214)),children:[{path:"kanban/:kanbanName",name:"Home",component:()=>n.e(412).then(n.bind(n,412))},{path:"about",name:"About",component:()=>n.e(377).then(n.bind(n,6377))}]}],r=(0,a.p7)({history:(0,a.PO)("/itdove-forum-frontend/"),routes:o});r.afterEach(((e,t,n)=>{window.scrollTo(0,0)})),t["Z"]=r}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(s=0;s<e.length;s++){a=e[s][0],o=e[s][1],r=e[s][2];for(var l=!0,u=0;u<a.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[u])}))?a.splice(u--,1):(l=!1,r<i&&(i=r));if(l){e.splice(s--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[a,o,r]}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{214:"d97259b6",377:"944dbb00",412:"018623af"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{214:"cb15bccd",412:"ea0c36dd"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="itdove-forum-frontend:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var l,u;if(void 0!==r)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var c=d[s];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+r){l=c;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+r),l.src=a),e[a]=[o];var g=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=g.bind(null,l.onerror),l.onload=g.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/itdove-forum-frontend/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,r.parentNode&&r.parentNode.removeChild(r),o(u)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),l=n.p+i;if(t(i,l))return o();e(a,l,null,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={214:1,412:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),l=new Error,u=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],l=a[1],u=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var s=u(n)}for(t&&t(a);d<i.length;d++)r=i[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},a=self["webpackChunkitdove_forum_frontend"]=self["webpackChunkitdove_forum_frontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6875)}));a=n.O(a)})();
//# sourceMappingURL=app.19932ed7.js.map