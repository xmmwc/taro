(window.webpackJsonp=window.webpackJsonp||[]).push([[2019],{2081:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2191),a=n(2192),c=(n(0),n(2193)),i=n(2197),l=n(2198),b={title:"matchMedia",sidebar_label:"matchMedia"},o={unversionedId:"components/viewContainer/match-media",id:"version-3.x/components/viewContainer/match-media",isDocsHomePage:!1,title:"matchMedia",description:"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002",source:"@site/versioned_docs/version-3.x/components/viewContainer/match-media.md",slug:"/components/viewContainer/match-media",permalink:"/taro/docs/components/viewContainer/match-media",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/match-media.md",version:"3.x",sidebar_label:"matchMedia",sidebar:"version-3.x/components",previous:{title:"CoverImage",permalink:"/taro/docs/components/viewContainer/cover-image"},next:{title:"Icon",permalink:"/taro/docs/components/base/icon"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"CoverImageProps",id:"coverimageprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}]}],d={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"media query \u5339\u914d\u68c0\u6d4b\u8282\u70b9\u3002\u53ef\u4ee5\u6307\u5b9a\u4e00\u7ec4 media query \u89c4\u5219\uff0c\u6ee1\u8db3\u65f6\uff0c\u8fd9\u4e2a\u8282\u70b9\u624d\u4f1a\u88ab\u5c55\u793a\u3002"),Object(c.b)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u8282\u70b9\u53ef\u4ee5\u5b9e\u73b0\u201c\u9875\u9762\u5bbd\u9ad8\u5728\u67d0\u4e2a\u8303\u56f4\u65f6\u624d\u5c55\u793a\u67d0\u4e2a\u533a\u57df\u201d\u8fd9\u6837\u7684\u6548\u679c\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MatchMediaProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)(i.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"React",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),'class App extends Components {\n  render () {\n    return (\n      <View>\n        <MatchMedia min-width="300" max-width="600">\n          <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n        <MatchMedia min-height="400" orientation="landscape">\n          <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n        </MatchMedia>\n      </View>\n    )\n  }\n}\n'))),Object(c.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <match-media min-width="300" max-width="500">\n      <view>\u5f53\u9875\u9762\u5bbd\u5ea6\u5728 300 ~ 500 px \u4e4b\u95f4\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n    <match-media min-height="400" orientation="landscape">\n      <view>\u5f53\u9875\u9762\u9ad8\u5ea6\u4e0d\u5c0f\u4e8e 400 px \u4e14\u5c4f\u5e55\u65b9\u5411\u4e3a\u7eb5\u5411\u65f6\u5c55\u793a\u8fd9\u91cc</view>\n    </match-media>\n  </view>\n</template>\n')))),Object(c.b)("h2",{id:"coverimageprops"},"CoverImageProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"minWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5c0f\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxWidth"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5927\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u5bbd\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"minHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5c0f\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"maxHeight"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u6700\u5927\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"Height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u9875\u9762\u9ad8\u5ea6\uff08 px \u4e3a\u5355\u4f4d\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"orientation"),Object(c.b)("td",null,"string"),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5c4f\u5e55\u65b9\u5411\uff08 landscape \u6216 portrait \uff09")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImageProps.src"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImageProps.onLoad"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"CoverImageProps.onError"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0},2191:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2192:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},2193:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,p=d["".concat(i,".").concat(m)]||d[m]||s[m]||c;return n?a.a.createElement(p,l(l({ref:t},o),{},{components:n})):a.a.createElement(p,l({ref:t},o))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2194:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},2195:function(e,t,n){"use strict";var r=n(0),a=n(2196);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2196:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},2197:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(2195),i=n(2194),l=n(51),b=n.n(l),o=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,d=e.defaultValue,s=e.values,m=e.groupId,p=e.className,O=Object(c.a)(),j=O.tabGroupChoices,f=O.setTabGroupChoices,v=Object(r.useState)(d),h=v[0],g=v[1];if(null!=m){var y=j[m];null!=y&&y!==h&&s.some((function(e){return e.value===y}))&&g(y)}var x=function(e){g(e),null!=m&&f(m,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},s.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",b.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(r.cloneElement)(l.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},2198:function(e,t,n){"use strict";var r=n(2191),a=n(0),c=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return c.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);