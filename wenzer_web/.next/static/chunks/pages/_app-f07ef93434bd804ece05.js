(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{833:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),o=t(7261),i=t(1120),a=t(7623);function c(){var e=(0,o.Z)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n\n  img {\n    margin: 10px;\n    width: 100px;\n  }\n"]);return c=function(){return e},e}var s=t(9163).ZP.div(c()),u=((0,i.Z)((function(e){return(0,a.Z)({root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}})})),t(5477));var l=function(){return(0,r.jsxs)(s,{children:[(0,r.jsx)("img",{src:"/Logo_wenzer.png",alt:"wenzer"}),(0,r.jsx)(u.Z,{})]})}},3895:function(e,n,t){"use strict";t.d(n,{HD:function(){return h},FR:function(){return m},aC:function(){return g}});var r=t(5893),o=t(809),i=t.n(o),a=t(2447),c=t(7294),s=t(1163),u=t(6808),l=t.n(u),p=t(3434),f=t(833),d=(0,c.createContext)({});function h(e){var n=e.children,t=(0,c.useState)(!1),o=t[0],u=t[1],f=(0,c.useState)(!1),h=f[0],m=f[1],g=(0,s.useRouter)();function v(){return(v=(0,a.Z)(i().mark((function e(n,t){var r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.Z.post("api/login",{email:n,password:t});case 3:r=e.sent,(o=r.data)&&(console.log("Got WzrToken"),l().set("WenzerToken",o,{expires:60}),p.Z.defaults.headers.Authorization="Bearer ".concat(o.token),g.push("/")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("E-mail ou senha incorreta!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return(0,c.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=l().get("WenzerToken"))?(m(!0),console.log("Is authenticated!"),p.Z.defaults.headers.Authorization="Bearer ".concat(n),g.push("/")):g.push("/welcome"),u(!1);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u(!0),function(){e.apply(this,arguments)}()}),[]),(0,r.jsx)(d.Provider,{value:{isAuthenticated:h,Login:function(e,n){return v.apply(this,arguments)},isLoading:o,Logout:function(){g.push("/welcome"),l().remove("WenzerToken"),delete p.Z.defaults.headers.Authorization},Authentication:function(){m(!h)}},children:n})}var m=function(e){var n=e.children;return g().isLoading?(0,r.jsx)(f.Z,{}):n},g=function(){return(0,c.useContext)(d)}},1855:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(5893),o=t(6265),i=t(5988),a=t(7294),c=t(9008),s=t(3895),u=t(3457),l=t(5834),p=t(4506),f=t(907),d=(0,p.Z)({palette:{primary:{main:"#B732A2"},secondary:{main:"#202020"},error:{main:f.Z.A400},background:{default:"#181818"},text:{primary:"#FFFFFF"}}}),h=t(4865),m=t.n(h),g=(t(4884),t(2441));function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function x(e){var n=e.Component,t=e.pageProps;return(0,a.useEffect)((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{className:"jsx-396479494",children:"Wenzer"}),(0,r.jsx)("meta",{name:"theme-color",content:d.palette.primary.main,className:"jsx-396479494"}),(0,r.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width",className:"jsx-396479494"})]}),(0,r.jsx)(u.Z,{theme:d,children:(0,r.jsx)(s.HD,{children:(0,r.jsxs)(s.FR,{children:[(0,r.jsx)(l.ZP,{}),(0,r.jsx)(n,j(j({},t),{},{className:"jsx-396479494 "+(t&&null!=t.className&&t.className||"")}))]})})}),(0,r.jsx)(i.default,{id:"396479494",children:["#nprogress{position:relative;z-index:9999999;}","#nprogress .bar{background:#b732a2 !important;height:3px;}"]})]})}m().configure({showSpinner:!0,trickRate:.1,trickSpeed:300}),g.Router.events.on("routerChangeStart",(function(){m().start()})),g.Router.events.on("routerChangeComplete",(function(){m().done()})),g.Router.events.on("routerChangeError",(function(){m().done()}))},3434:function(e,n,t){"use strict";var r=t(9669),o=t.n(r)().create({baseURL:"http://localhost:3333/",headers:{Accept:"application/json","Content-Type":"application/json"}});n.Z=o},6363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1855)}])}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,351,82,39],(function(){return n(6363),n(2441)}));var t=e.O();_N_E=t}]);