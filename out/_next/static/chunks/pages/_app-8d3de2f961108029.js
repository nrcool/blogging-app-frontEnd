(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7808)}])},1133:function(e,n,r){"use strict";r.d(n,{I:function(){return t}});var t=(0,r(7294).createContext)()},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(c){a=!0,s=c}finally{try{t||null==i.return||i.return()}finally{if(a)throw s}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},o=r(6273),i=r(387),c=r(7190);var l={};function u(e,n,r,t){if(e&&o.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=i.useRouter(),f=s.default.useMemo((function(){var n=t(o.resolveHref(a,e.href,!0),2),r=n[0],s=n[1];return{href:r,as:e.as?o.resolveHref(a,e.as):s||r}}),[a,e.href,e.as]),d=f.href,v=f.as,h=e.children,p=e.replace,b=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var x=(n=s.default.Children.only(h))&&"object"===typeof n&&n.ref,j=t(c.useIntersection({rootMargin:"200px"}),2),y=j[0],N=j[1],w=s.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);s.default.useEffect((function(){var e=N&&r&&o.isLocalURL(d),n="undefined"!==typeof g?g:a&&a.locale,t=l[d+"%"+v+(n?"%"+n:"")];e&&!t&&u(a,d,v,{locale:n})}),[v,d,N,g,r,a]);var E={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,s,i,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](r,t,{shallow:s,locale:c,scroll:i}))}(e,a,d,v,p,b,m,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(d)&&u(a,d,v,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof g?g:a&&a.locale,_=a&&a.isLocaleDomain&&o.getDomainLocale(v,k,a&&a.locales,a&&a.domainLocales);E.href=_||o.addBasePath(o.addLocale(v,k,a&&a.defaultLocale))}return s.default.cloneElement(n,E)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done)&&(r.push(o.value),!n||r.length!==n);t=!0);}catch(c){a=!0,s=c}finally{try{t||null==i.return||i.return()}finally{if(a)throw s}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!o,c=a.useRef(),l=t(a.useState(!1),2),u=l[0],f=l[1],d=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||u||e&&e.tagName&&(c.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,s=t.observer,o=t.elements;return o.set(e,n),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[r,n,u]);return a.useEffect((function(){if(!o&&!u){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=r(7294),s=r(9311),o="undefined"!==typeof IntersectionObserver;var i=new Map},7808:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(5893),a=(r(906),r(8074),r(1664)),s=r(1163),o=r(7294),i=r(1133);function c(){var e=(0,o.useContext)(i.I),n=e.isRegister,r=e.user,c=e.setUser,l=(e.cart,(0,s.useRouter)()),u=(0,o.useRef)();return(0,t.jsxs)("nav",{className:"navbar",role:"navigation","aria-label":"main navigation",children:[(0,t.jsxs)("div",{className:"navbar-brand",children:[(0,t.jsx)("span",{className:"navbar-item hero is-warning is-centered",href:"/",children:"Blog-App"}),(0,t.jsxs)("a",{role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:function(){return u.current.classList.toggle("is-active")},children:[(0,t.jsx)("span",{"aria-hidden":"true"}),(0,t.jsx)("span",{"aria-hidden":"true"}),(0,t.jsx)("span",{"aria-hidden":"true"})]})]}),(0,t.jsxs)("div",{ref:u,id:"navbarBasicExample",className:"navbar-menu",children:[(0,t.jsxs)("div",{className:"navbar-start",children:[(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{className:"navbar-item",children:"Home"})}),r&&(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(a.default,{href:"/createblog",children:(0,t.jsx)("a",{className:"navbar-item",children:"Create-Blog"})}),(0,t.jsx)(a.default,{href:"/profile",children:(0,t.jsx)("a",{className:"navbar-item",children:"Profile"})})]}),r&&"admin"===r.role&&(0,t.jsx)(a.default,{href:"/users",children:(0,t.jsx)("a",{className:"navbar-item",children:"Users"})})]}),(0,t.jsx)("div",{className:"navbar-end",children:(0,t.jsx)("div",{className:"navbar-item",children:(0,t.jsx)("div",{className:"buttons",children:r?(0,t.jsx)("a",{className:"button is-light",onClick:function(){c(null),localStorage.removeItem("token"),l.push("/")},children:"Log Out"}):(0,t.jsxs)(t.Fragment,{children:[" ",!n&&(0,t.jsx)(a.default,{href:"/signup",children:(0,t.jsx)("a",{className:"button is-primary",children:(0,t.jsx)("strong",{children:"Sign up"})})}),(0,t.jsx)(a.default,{href:"/login",children:(0,t.jsx)("a",{className:"button is-light",children:"Log in"})})]})})})})]})]})}function l(e){var n=e.children,r=(0,o.useState)(null),a=r[0],s=r[1],c=(0,o.useState)(null),l=c[0],u=c[1],f=(0,o.useState)([]),d=f[0],v=f[1],h=(0,o.useState)([]),p=h[0],b=h[1],m=(0,o.useState)([]),g=m[0],x=m[1],j=(0,o.useState)(!1),y=j[0],N=j[1];return(0,o.useEffect)((function(){localStorage.getItem("isRegistered")&&N(!0);var e=localStorage.getItem("token");e&&fetch("https://blogs-app-server.vercel.app/verifytoken",{method:"GET",headers:{token:e}}).then((function(e){return e.json()})).then((function(e){console.log(e),e.success&&s(e.data)}))}),[]),(0,t.jsx)(i.I.Provider,{value:{user:a,setUser:s,token:l,setToken:u,records:d,setRecords:v,orders:p,setOrders:b,cart:g,setCart:x,isRegister:y},children:n})}function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}var d=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsx)(l,{children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)(c,{}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n,f({},r))]})})}},8074:function(){},906:function(){},1664:function(e,n,r){e.exports=r(8418)},1163:function(e,n,r){e.exports=r(387)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var r=e.O();_N_E=r}]);