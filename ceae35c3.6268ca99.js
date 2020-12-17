(window.webpackJsonp=window.webpackJsonp||[]).push([[1740],{1802:function(e,t,c){"use strict";c.r(t),c.d(t,"frontMatter",(function(){return b})),c.d(t,"metadata",(function(){return i})),c.d(t,"rightToc",(function(){return a})),c.d(t,"default",(function(){return o}));var n=c(2191),l=c(2192),r=(c(0),c(2193)),b={title:"Taro.getBLEDeviceCharacteristics(option)",sidebar_label:"getBLEDeviceCharacteristics"},i={unversionedId:"apis/device/ble/getBLEDeviceCharacteristics",id:"apis/device/ble/getBLEDeviceCharacteristics",isDocsHomePage:!1,title:"Taro.getBLEDeviceCharacteristics(option)",description:"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u67d0\u4e2a\u670d\u52a1\u4e2d\u6240\u6709\u7279\u5f81\u503c(characteristic)\u3002",source:"@site/docs/apis/device/ble/getBLEDeviceCharacteristics.md",slug:"/apis/device/ble/getBLEDeviceCharacteristics",permalink:"/taro/docs/next/apis/device/ble/getBLEDeviceCharacteristics",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/ble/getBLEDeviceCharacteristics.md",version:"current",sidebar_label:"getBLEDeviceCharacteristics",sidebar:"API",previous:{title:"Taro.getBLEDeviceServices(option)",permalink:"/taro/docs/next/apis/device/ble/getBLEDeviceServices"},next:{title:"Taro.createBLEConnection(option)",permalink:"/taro/docs/next/apis/device/ble/createBLEConnection"}},a=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"BLECharacteristic",id:"blecharacteristic",children:[]},{value:"Properties",id:"properties",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:a};function o(e){var t=e.components,c=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u83b7\u53d6\u84dd\u7259\u8bbe\u5907\u67d0\u4e2a\u670d\u52a1\u4e2d\u6240\u6709\u7279\u5f81\u503c(characteristic)\u3002"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.getBLEDeviceCharacteristics.html"}),"\u53c2\u8003\u6587\u6863"))),Object(r.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(r.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(r.b)("h3",{id:"option"},"Option"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"deviceId"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),Object(r.b)("tr",null,Object(r.b)("td",null,"serviceId"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(r.b)("td",null,"\u84dd\u7259\u670d\u52a1 uuid\uff0c\u9700\u8981\u4f7f\u7528 ",Object(r.b)("code",null,"getBLEDeviceServices")," \u83b7\u53d6")),Object(r.b)("tr",null,Object(r.b)("td",null,"complete"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: BluetoothError) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(r.b)("tr",null,Object(r.b)("td",null,"fail"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: BluetoothError) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(r.b)("tr",null,Object(r.b)("td",null,"success"),Object(r.b)("td",null,Object(r.b)("code",null,"(res: SuccessCallbackResult) => void")),Object(r.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(r.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(r.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"characteristics"),Object(r.b)("td",null,Object(r.b)("code",null,"BLECharacteristic[]")),Object(r.b)("td",null,"\u8bbe\u5907\u7279\u5f81\u503c\u5217\u8868")),Object(r.b)("tr",null,Object(r.b)("td",null,"errMsg"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(r.b)("h3",{id:"blecharacteristic"},"BLECharacteristic"),Object(r.b)("p",null,"\u8bbe\u5907\u7279\u5f81\u503c\u5217\u8868"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"properties"),Object(r.b)("td",null,Object(r.b)("code",null,"Properties")),Object(r.b)("td",null,"\u8be5\u7279\u5f81\u503c\u652f\u6301\u7684\u64cd\u4f5c\u7c7b\u578b")),Object(r.b)("tr",null,Object(r.b)("td",null,"uuid"),Object(r.b)("td",null,Object(r.b)("code",null,"string")),Object(r.b)("td",null,"\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u7684 uuid")))),Object(r.b)("h3",{id:"properties"},"Properties"),Object(r.b)("p",null,"\u8be5\u7279\u5f81\u503c\u652f\u6301\u7684\u64cd\u4f5c\u7c7b\u578b"),Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"\u53c2\u6570"),Object(r.b)("th",null,"\u7c7b\u578b"),Object(r.b)("th",null,"\u8bf4\u660e"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"indicate"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",null,"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 indicate \u64cd\u4f5c")),Object(r.b)("tr",null,Object(r.b)("td",null,"notify"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",null,"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 notify \u64cd\u4f5c")),Object(r.b)("tr",null,Object(r.b)("td",null,"read"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",null,"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 read \u64cd\u4f5c")),Object(r.b)("tr",null,Object(r.b)("td",null,"write"),Object(r.b)("td",null,Object(r.b)("code",null,"boolean")),Object(r.b)("td",null,"\u8be5\u7279\u5f81\u503c\u662f\u5426\u652f\u6301 write \u64cd\u4f5c")))),Object(r.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getBLEDeviceCharacteristics({\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  success: function (res) {\n    console.log('device getBLEDeviceCharacteristics:', res.characteristics)\n  }\n})\n")),Object(r.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.getBLEDeviceCharacteristics"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0},2191:function(e,t,c){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}c.d(t,"a",(function(){return n}))},2192:function(e,t,c){"use strict";function n(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}c.d(t,"a",(function(){return n}))},2193:function(e,t,c){"use strict";c.d(t,"a",(function(){return O})),c.d(t,"b",(function(){return j}));var n=c(0),l=c.n(n);function r(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function b(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function i(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?b(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):b(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function a(e,t){if(null==e)return{};var c,n,l=function(e,t){if(null==e)return{};var c,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||(l[c]=e[c]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(l[c]=e[c])}return l}var u=l.a.createContext({}),o=function(e){var t=l.a.useContext(u),c=t;return e&&(c="function"==typeof e?e(t):i(i({},t),e)),c},O=function(e){var t=o(e.components);return l.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var c=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),O=o(c),s=n,j=O["".concat(b,".").concat(s)]||O[s]||d[s]||r;return c?l.a.createElement(j,i(i({ref:t},u),{},{components:c})):l.a.createElement(j,i({ref:t},u))}));function j(e,t){var c=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=c.length,b=new Array(r);b[0]=s;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var u=2;u<r;u++)b[u]=c[u];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,c)}s.displayName="MDXCreateElement"}}]);