(window.webpackJsonp=window.webpackJsonp||[]).push([[752],{2191:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},2192:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},2193:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,O=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return a?r.a.createElement(O,b(b({ref:t},i),{},{components:a})):r.a.createElement(O,b({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},817:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2191),r=a(2192),c=(a(0),a(2193)),o={title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},b={unversionedId:"apis/device/compass/onCompassChange",id:"version-1.x/apis/device/compass/onCompassChange",isDocsHomePage:!1,title:"Taro.onCompassChange(callback)",description:"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 wx.stopCompass \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-1.x/apis/device/compass/onCompassChange.md",slug:"/apis/device/compass/onCompassChange",permalink:"/taro/docs/1.x/apis/device/compass/onCompassChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.x/apis/device/compass/onCompassChange.md",version:"1.x",sidebar_label:"onCompassChange",sidebar:"version-1.x/API",previous:{title:"Taro.setClipboardData(OBJECT)",permalink:"/taro/docs/1.x/apis/device/clipboard/setClipboardData"},next:{title:"Taro.startCompass(param)",permalink:"/taro/docs/1.x/apis/device/compass/startCompass"}},l=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"callback(res)",id:"callbackres",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],i={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 wx.stopCompass \u505c\u6b62\u76d1\u542c\u3002"),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.onCompassChange.html"}),Object(c.b)("inlineCode",{parentName:"a"},"wx.onCompassChange")),"\u3002"),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"callbackres"},"callback(res)"),Object(c.b)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),Object(c.b)("h5",{id:"object-res"},"object res"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"direction"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9762\u5bf9\u7684\u65b9\u5411\u5ea6\u6570")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"accuracy"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("code",null,"'","high","'")," / ",Object(c.b)("code",null,"'","medium","'")," / ",Object(c.b)("code",null,"'","low","'")," / ",Object(c.b)("code",null,"'","no-contact","'")," / ",Object(c.b)("code",null,"'","unreliable","'")," / ",Object(c.b)("code",null,"'","unknow","'")," / ",Object(c.b)("code",null,"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u7cbe\u5ea6")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u7531\u4e8e\u5e73\u53f0\u5dee\u5f02\uff0caccuracy \u5728 iOS/Android \u7684\u503c\u4e0d\u540c\u3002")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"iOS\uff1aaccuracy \u662f\u4e00\u4e2a number \u7c7b\u578b\u7684\u503c\uff0c\u8868\u793a\u76f8\u5bf9\u4e8e\u78c1\u5317\u6781\u7684\u504f\u5dee\u30020 \u8868\u793a\u8bbe\u5907\u6307\u5411\u78c1\u5317\uff0c90 \u8868\u793a\u6307\u5411\u4e1c\uff0c180 \u8868\u793a\u6307\u5411\u5357\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002"),Object(c.b)("li",{parentName:"ul"},"Android\uff1aaccuracy \u662f\u4e00\u4e2a string \u7c7b\u578b\u7684\u679a\u4e3e\u503c\u3002",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"high"),": \u9ad8\u7cbe\u5ea6"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"medium"),": \u4e2d\u7b49\u7cbe\u5ea6"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"low"),": \u4f4e\u7cbe\u5ea6"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"no-contact"),": \u4e0d\u53ef\u4fe1\uff0c\u4f20\u611f\u5668\u5931\u53bb\u8fde\u63a5"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"unreliable"),": \u4e0d\u53ef\u4fe1\uff0c\u539f\u56e0\u672a\u77e5"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"unknow ${value}"),": \u672a\u77e5\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c\uff0c\u5373\u8be5 Android \u7cfb\u7edf\u6b64\u65f6\u8fd4\u56de\u7684\u8868\u793a\u7cbe\u5ea6\u7684 value \u4e0d\u662f\u4e00\u4e2a\u6807\u51c6\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.onCompassChange(res => {\n  console.log(res.direction)\n})\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.onCompassChange"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);