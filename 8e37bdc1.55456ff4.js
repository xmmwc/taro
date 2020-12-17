(window.webpackJsonp=window.webpackJsonp||[]).push([[1202],{1267:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(2191),c=r(2192),o=(r(0),r(2193)),l={title:"Taro.startBluetoothDevicesDiscovery(option)",sidebar_label:"startBluetoothDevicesDiscovery"},b={unversionedId:"apis/device/bluetooth/startBluetoothDevicesDiscovery",id:"apis/device/bluetooth/startBluetoothDevicesDiscovery",isDocsHomePage:!1,title:"Taro.startBluetoothDevicesDiscovery(option)",description:"\u5f00\u59cb\u641c\u5bfb\u9644\u8fd1\u7684\u84dd\u7259\u5916\u56f4\u8bbe\u5907\u3002\u6b64\u64cd\u4f5c\u6bd4\u8f83\u8017\u8d39\u7cfb\u7edf\u8d44\u6e90\uff0c\u8bf7\u5728\u641c\u7d22\u5e76\u8fde\u63a5\u5230\u8bbe\u5907\u540e\u8c03\u7528 Taro.stopBluetoothDevicesDiscovery \u65b9\u6cd5\u505c\u6b62\u641c\u7d22\u3002",source:"@site/docs/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",slug:"/apis/device/bluetooth/startBluetoothDevicesDiscovery",permalink:"/taro/docs/next/apis/device/bluetooth/startBluetoothDevicesDiscovery",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",version:"current",sidebar_label:"startBluetoothDevicesDiscovery",sidebar:"API",previous:{title:"Taro.stopBluetoothDevicesDiscovery(option)",permalink:"/taro/docs/next/apis/device/bluetooth/stopBluetoothDevicesDiscovery"},next:{title:"Taro.openBluetoothAdapter(option)",permalink:"/taro/docs/next/apis/device/bluetooth/openBluetoothAdapter"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],a={rightToc:i};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},a,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u5f00\u59cb\u641c\u5bfb\u9644\u8fd1\u7684\u84dd\u7259\u5916\u56f4\u8bbe\u5907\u3002",Object(o.b)("strong",{parentName:"p"},"\u6b64\u64cd\u4f5c\u6bd4\u8f83\u8017\u8d39\u7cfb\u7edf\u8d44\u6e90\uff0c\u8bf7\u5728\u641c\u7d22\u5e76\u8fde\u63a5\u5230\u8bbe\u5907\u540e\u8c03\u7528 Taro.stopBluetoothDevicesDiscovery \u65b9\u6cd5\u505c\u6b62\u641c\u7d22\u3002")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html"}),"\u53c2\u8003\u6587\u6863"))),Object(o.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<Promised>\n")),Object(o.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(o.b)("h3",{id:"promised"},"Promised"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"errMsg"),Object(o.b)("td",null,Object(o.b)("code",null,"string")),Object(o.b)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),Object(o.b)("h3",{id:"option"},"Option"),Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"\u53c2\u6570"),Object(o.b)("th",null,"\u7c7b\u578b"),Object(o.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(o.b)("th",null,"\u8bf4\u660e"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,"allowDuplicatesKey"),Object(o.b)("td",null,Object(o.b)("code",null,"boolean")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u662f\u5426\u5141\u8bb8\u91cd\u590d\u4e0a\u62a5\u540c\u4e00\u8bbe\u5907\u3002\u5982\u679c\u5141\u8bb8\u91cd\u590d\u4e0a\u62a5\uff0c\u5219 Taro.onBlueToothDeviceFound \u65b9\u6cd5\u4f1a\u591a\u6b21\u4e0a\u62a5\u540c\u4e00\u8bbe\u5907\uff0c\u4f46\u662f RSSI \u503c\u4f1a\u6709\u4e0d\u540c\u3002")),Object(o.b)("tr",null,Object(o.b)("td",null,"complete"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: BluetoothError) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(o.b)("tr",null,Object(o.b)("td",null,"fail"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: BluetoothError) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(o.b)("tr",null,Object(o.b)("td",null,"interval"),Object(o.b)("td",null,Object(o.b)("code",null,"number")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u4e0a\u62a5\u8bbe\u5907\u7684\u95f4\u9694\u30020 \u8868\u793a\u627e\u5230\u65b0\u8bbe\u5907\u7acb\u5373\u4e0a\u62a5\uff0c\u5176\u4ed6\u6570\u503c\u6839\u636e\u4f20\u5165\u7684\u95f4\u9694\u4e0a\u62a5\u3002")),Object(o.b)("tr",null,Object(o.b)("td",null,"services"),Object(o.b)("td",null,Object(o.b)("code",null,"string[]")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u8981\u641c\u7d22\u7684\u84dd\u7259\u8bbe\u5907\u4e3b service \u7684 uuid \u5217\u8868\u3002\u67d0\u4e9b\u84dd\u7259\u8bbe\u5907\u4f1a\u5e7f\u64ad\u81ea\u5df1\u7684\u4e3b service \u7684 uuid\u3002\u5982\u679c\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u5219\u53ea\u641c\u7d22\u5e7f\u64ad\u5305\u6709\u5bf9\u5e94 uuid \u7684\u4e3b\u670d\u52a1\u7684\u84dd\u7259\u8bbe\u5907\u3002\u5efa\u8bae\u4e3b\u8981\u901a\u8fc7\u8be5\u53c2\u6570\u8fc7\u6ee4\u6389\u5468\u8fb9\u4e0d\u9700\u8981\u5904\u7406\u7684\u5176\u4ed6\u84dd\u7259\u8bbe\u5907\u3002")),Object(o.b)("tr",null,Object(o.b)("td",null,"success"),Object(o.b)("td",null,Object(o.b)("code",null,"(res: BluetoothError) => void")),Object(o.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(o.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(o.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"// \u4ee5\u5fae\u4fe1\u786c\u4ef6\u5e73\u53f0\u7684\u84dd\u7259\u667a\u80fd\u706f\u4e3a\u4f8b\uff0c\u4e3b\u670d\u52a1\u7684 UUID \u662f FEE7\u3002\u4f20\u5165\u8fd9\u4e2a\u53c2\u6570\uff0c\u53ea\u641c\u7d22\u4e3b\u670d\u52a1 UUID \u4e3a FEE7 \u7684\u8bbe\u5907\nTaro.startBluetoothDevicesDiscovery({\n  services: ['FEE7'],\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),Object(o.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Taro.startBluetoothDevicesDiscovery"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0},2191:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},2192:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}r.d(t,"a",(function(){return n}))},2193:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return p}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var a=c.a.createContext({}),u=function(e){var t=c.a.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},s=function(e){var t=u(e.components);return c.a.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),s=u(r),O=n,p=s["".concat(l,".").concat(O)]||s[O]||d[O]||o;return r?c.a.createElement(p,b(b({ref:t},a),{},{components:r})):c.a.createElement(p,b({ref:t},a))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var a=2;a<o;a++)l[a]=r[a];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);