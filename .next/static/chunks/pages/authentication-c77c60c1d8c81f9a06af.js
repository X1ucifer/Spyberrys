_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[25],{"20a2":function(e,t,r){e.exports=r("nOHt")},ODXe:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,c=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(i){c=!0,a=i}finally{try{n||null==s.return||s.return()}finally{if(c)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return c}))},SMlj:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return u}));var n=r("p46w"),c=r.n(n),a=r("20a2"),o=r.n(a),s=function(e){c.a.set("token",e),o.a.push("/")},i=function(e,t){e.req?(e.res.writeHead(302,{Location:t}),e.res.end()):o.a.push(t)},u=function(){c.a.remove("token"),o.a.push("/")}},eGLW:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication",function(){return r("eShx")}])},eShx:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),c=r("q1tI"),a=r.n(c),o=r("Ix5F"),s=r("o0o1"),i=r.n(s),u=r("HaE+"),l=r("rePB"),f=r("ODXe"),p=r("aLZG"),d=r("bTjV"),j=r("YFqc"),b=r.n(j),m=r("vDqi"),O=r.n(m),h=r("xUX2"),v=r("rjN7"),g=r("SMlj");function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={email:"",password:""},N=function(){var e=a.a.useState(y),t=Object(f.a)(e,2),r=t[0],c=t[1],o=a.a.useState(!0),s=Object(f.a)(o,2),j=s[0],m=s[1],w=a.a.useState(!1),N=Object(f.a)(w,2),P=N[0],S=N[1],C=a.a.useState(""),k=Object(f.a)(C,2),E=k[0],D=k[1];a.a.useEffect((function(){var e=Object.values(r).every((function(e){return Boolean(e)}));m(!e)}),[r]);var _=function(e){var t=e.target,r=t.name,n=t.value;c((function(e){return x(x({},e),{},Object(l.a)({},r,n))}))},A=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,S(!0),D(""),n="".concat(v.a,"/api/v1/auth/signin"),c=x({},r),e.next=8,O.a.post(n,c);case 8:a=e.sent,Object(g.a)(a.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),Object(h.a)(e.t0,D);case 15:return e.prev=15,S(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"login-form",children:[Object(n.jsx)("h2",{children:"Login"}),Object(n.jsx)(p.a,{color:"danger",isOpen:!!E,toggle:function(){return D(!1)},children:E}),Object(n.jsxs)("form",{onSubmit:A,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",value:r.email,onChange:_})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{className:"form-control",placeholder:"Password",name:"password",type:"password",value:r.password,onChange:_})]}),Object(n.jsxs)("div",{className:"row align-items-center",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 remember-me-wrap",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("input",{type:"checkbox",id:"test2"}),Object(n.jsx)("label",{htmlFor:"test2",children:"Remember me"})]})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap",children:Object(n.jsx)(b.a,{href:"/reset-password",children:Object(n.jsx)("a",{className:"lost-your-password",children:"Lost your password?"})})})]}),Object(n.jsxs)("button",{type:"submit",disabled:j,children:["Log In",P?Object(n.jsx)(d.a,{color:"success"}):""]})]})]})};function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={name:"",email:"",password:"",confirmPassword:""},k=function(){var e=a.a.useState(C),t=Object(f.a)(e,2),r=t[0],c=t[1],o=a.a.useState(!0),s=Object(f.a)(o,2),j=s[0],b=s[1],m=a.a.useState(!1),w=Object(f.a)(m,2),x=w[0],y=w[1],N=a.a.useState(""),P=Object(f.a)(N,2),k=P[0],E=P[1];a.a.useEffect((function(){var e=Object.values(r).every((function(e){return Boolean(e)}));b(!e)}),[r]);var D=function(e){var t=e.target,r=t.name,n=t.value;c((function(e){return S(S({},e),{},Object(l.a)({},r,n))}))},_=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,y(!0),E(""),n="".concat(v.a,"/api/v1/auth/signup"),c=S({},r),e.next=8,O.a.post(n,c);case 8:a=e.sent,Object(g.a)(a.data),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),Object(h.a)(e.t0,E);case 15:return e.prev=15,y(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"register-form",children:[Object(n.jsx)("h2",{children:"Register"}),Object(n.jsx)(p.a,{color:"danger",isOpen:!!k,toggle:function(){return E(!1)},children:k}),Object(n.jsxs)("form",{onSubmit:_,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Name"}),Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Full Name",name:"name",value:r.name,onChange:D})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email"}),Object(n.jsx)("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",value:r.email,onChange:D})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"password",value:r.password,onChange:D})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Confirm Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Confirm Password",name:"confirmPassword",value:r.confirmPassword,onChange:D})]}),Object(n.jsx)("p",{className:"description",children:'The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )'}),Object(n.jsxs)("button",{type:"submit",disabled:j,children:["Register",x?Object(n.jsx)(d.a,{color:"success"}):""]})]})]})};t.default=function(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(o.a,{pageTitle:"Authentication",homePageUrl:"/",homePageText:"Home",activePageText:"Authentication"}),Object(n.jsx)("div",{className:"profile-authentication-area ptb-100",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsx)(N,{})}),Object(n.jsx)("div",{className:"col-lg-6 col-md-12",children:Object(n.jsx)(k,{})})]})})})]})}},p46w:function(e,t,r){var n,c;!function(a){if(void 0===(c="function"===typeof(n=a)?n.call(t,r,t,e):n)||(e.exports=c),!0,e.exports=a(),!!0){var o=window.Cookies,s=window.Cookies=a();s.noConflict=function(){return window.Cookies=o,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var n in r)t[n]=r[n]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(n){function c(){}function a(t,r,a){if("undefined"!==typeof document){"number"===typeof(a=e({path:"/"},c.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var o=JSON.stringify(r);/^[\{\[]/.test(o)&&(r=o)}catch(u){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var i in a)a[i]&&(s+="; "+i,!0!==a[i]&&(s+="="+a[i].split(";")[0]));return document.cookie=t+"="+r+s}}function o(e,r){if("undefined"!==typeof document){for(var c={},a=document.cookie?document.cookie.split("; "):[],o=0;o<a.length;o++){var s=a[o].split("="),i=s.slice(1).join("=");r||'"'!==i.charAt(0)||(i=i.slice(1,-1));try{var u=t(s[0]);if(i=(n.read||n)(i,u)||t(i),r)try{i=JSON.parse(i)}catch(l){}if(c[u]=i,e===u)break}catch(l){}}return e?c[e]:c}}return c.set=a,c.get=function(e){return o(e,!1)},c.getJSON=function(e){return o(e,!0)},c.remove=function(t,r){a(t,"",e(r,{expires:-1}))},c.defaults={},c.withConverter=r,c}((function(){}))}))},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},zLVn:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}r.d(t,"a",(function(){return n}))}},[["eGLW",0,2,1,4,6,10]]]);