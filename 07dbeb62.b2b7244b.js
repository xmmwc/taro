(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{131:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2191),o=r(2192),a=(r(0),r(2193)),c={slug:"2018-09-18-taro-1-0-0",title:"\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6 Taro 1.0 \u6b63\u5f0f\u53d1\u5e03",author:"luckyadam",author_url:"https://github.com/luckyadam",author_image_url:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4"},i={permalink:"/taro/blog/2018-09-18-taro-1-0-0",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2018-09-18-taro-1-0-0.md",source:"@site/blog/2018-09-18-taro-1-0-0.md",description:"\u5728 2018.6.7 \u6211\u4eec\u5bf9\u5916\u5f00\u6e90\u4e86 \u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\u2014\u2014Taro\u3002",date:"2018-09-18T00:00:00.000Z",tags:[],title:"\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6 Taro 1.0 \u6b63\u5f0f\u53d1\u5e03",readingTime:4.095,truncated:!0,prevItem:{title:"Taro 1.1 \u53d1\u5e03\uff0c\u5168\u9762\u652f\u6301\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2018-11-05-taro-1-1"},nextItem:{title:"Taro \u5728\u4eac\u4e1c\u8d2d\u7269\u5c0f\u7a0b\u5e8f\u4e0a\u7684\u5b9e\u8df5",permalink:"/taro/blog/2018-09-11-taro-in-jd"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"2018.6.7")," \u6211\u4eec\u5bf9\u5916\u5f00\u6e90\u4e86 ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://aotu.io/notes/2018/06/07/Taro/"}),Object(a.b)("inlineCode",{parentName:"a"},"\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\u2014\u2014Taro")),"\u3002"),Object(a.b)("p",null,"Taro \u662f\u4e00\u4e2a\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\uff0c\u5b83\u652f\u6301\u4f7f\u7528 React \u7684\u5f00\u53d1\u65b9\u5f0f\u6765\u7f16\u5199\u53ef\u4ee5\u540c\u65f6\u5728\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001Web \u3001React Native \u7b49\u591a\u4e2a\u5e73\u53f0\u4e0a\u8fd0\u884c\u7684\u5e94\u7528\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u63d0\u5347\u5f00\u53d1\u6548\u7387\uff0c\u6539\u5584\u5f00\u53d1\u4f53\u9a8c\uff0c\u964d\u4f4e\u591a\u7aef\u7814\u53d1\u6210\u672c\u3002"),Object(a.b)("p",null,"\u81ea\u5f00\u6e90\u4ee5\u6765\uff0cTaro \u4e00\u76f4\u5e7f\u53d7\u4e1a\u754c\u5173\u6ce8\uff0c\u5176\u539f\u7406\u4e0e\u601d\u60f3\u4e5f\u5f97\u5230\u4e86\u5e7f\u6cdb\u5f00\u53d1\u8005\u7684\u8ba4\u53ef\uff0c\u8fd9\u5bf9\u4e8e\u6211\u4eec\u6765\u8bf4\u65e0\u7591\u662f\u4e00\u4ef6\u4ee4\u4eba\u632f\u594b\u7684\u4e8b\u3002\u4f46\u662f\u7531\u4e8e\u521d\u671f Taro \u6d4b\u8bd5\u4e0e\u5b9e\u73b0\u65b9\u5f0f\u7684\u4e0d\u8db3\uff0c\u5bfc\u81f4\u5728\u5f00\u6e90\u671f\u95f4 Bug \u8f83\u591a\uff0c\u53d7\u5230\u4e86\u4e00\u4e9b\u8d28\u7591\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u75db\u5b9a\u601d\u75db\uff0c\u79ef\u6781\u63a5\u53d7\u4e86\u5f00\u6e90\u793e\u533a\u7684\u610f\u89c1\u4e0e\u5e2e\u52a9\uff0c\u5e76\u52aa\u529b\u63a2\u7d22\u63d0\u5347 Taro \u7a33\u5b9a\u6027\u4e0e\u6027\u80fd\u7684\u65b9\u5f0f\u3002\u7ecf\u8fc7\u4e0d\u65ad\u5730\u8fed\u4ee3\u5b8c\u5584\uff0c\u5df2\u7ecf\u8ba9 Taro \u6d74\u706b\u91cd\u751f\u3002"))}p.isMDXComponent=!0},2191:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},2192:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))},2193:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(r),s=n,m=f["".concat(c,".").concat(s)]||f[s]||b[s]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);