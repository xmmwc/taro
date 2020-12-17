(window.webpackJsonp=window.webpackJsonp||[]).push([[1468],{1532:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return b}));var r=n(2191),i=n(2192),o=(n(0),n(2193)),c={title:"WifiInfo",sidebar_label:"WifiInfo"},l={unversionedId:"apis/device/wifi/WifiInfo",id:"version-2.x/apis/device/wifi/WifiInfo",isDocsHomePage:!1,title:"WifiInfo",description:"Wifi \u4fe1\u606f",source:"@site/versioned_docs/version-2.x/apis/device/wifi/WifiInfo.md",slug:"/apis/device/wifi/WifiInfo",permalink:"/taro/docs/2.x/apis/device/wifi/WifiInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/wifi/WifiInfo.md",version:"2.x",sidebar_label:"WifiInfo",sidebar:"version-2.x/API",previous:{title:"Taro.connectWifi(option)",permalink:"/taro/docs/2.x/apis/device/wifi/connectWifi"},next:{title:"Taro.addPhoneContact(option)",permalink:"/taro/docs/2.x/apis/device/contact/addPhoneContact"}},a=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}],u={rightToc:a};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Wifi \u4fe1\u606f"),Object(o.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"BSSID"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"Wi-Fi \u7684 BSSID")),Object(o.b)("tr",null,Object(o.b)("td",null,"SSID"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"Wi-Fi \u7684 SSID")),Object(o.b)("tr",null,Object(o.b)("td",null,"secure"),Object(o.b)("td",null,Object(o.b)("code",null,"boolean")),Object(o.b)("td",null,"Wi-Fi \u662f\u5426\u5b89\u5168")),Object(o.b)("tr",null,Object(o.b)("td",null,"signalStrength"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",null,"Wi-Fi \u4fe1\u53f7\u5f3a\u5ea6")))))}b.isMDXComponent=!0},2191:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2192:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return r}))},2193:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=b(n),s=r,p=f["".concat(c,".").concat(s)]||f[s]||d[s]||o;return n?i.a.createElement(p,l(l({ref:t},u),{},{components:n})):i.a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);