(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{2191:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return r}))},2192:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,"a",(function(){return r}))},2193:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},j=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=s(t),j=r,d=b["".concat(p,".").concat(j)]||b[j]||u[j]||i;return t?a.a.createElement(d,c(c({ref:n},l),{},{components:t})):a.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=j;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<i;l++)p[l]=t[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},71:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var r=t(2191),a=t(2192),i=(t(0),t(2193)),p={title:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"},c={unversionedId:"miniprogram-plugin",id:"version-3.2.0-canary.3/miniprogram-plugin",isDocsHomePage:!1,title:"\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",description:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",source:"@site/versioned_docs/version-3.2.0-canary.3/miniprogram-plugin.md",slug:"/miniprogram-plugin",permalink:"/taro/docs/3.2.0-canary.3/miniprogram-plugin",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.2.0-canary.3/miniprogram-plugin.md",version:"3.2.0-canary.3",sidebar:"version-3.2.0-canary.3/docs",previous:{title:"\u5c0f\u7a0b\u5e8f\u4e91\u5f00\u53d1\u6a21\u677f",permalink:"/taro/docs/3.2.0-canary.3/wxcloudbase"},next:{title:"React Native \u7aef\u5f00\u53d1\u6d41\u7a0b",permalink:"/taro/docs/3.2.0-canary.3/react-native"}},o=[{value:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",children:[{value:"\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248",id:"\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248",children:[]},{value:"\u4fee\u6539 appid",id:"\u4fee\u6539-appid",children:[]},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",children:[]},{value:"\u7f16\u8bd1\u9879\u76ee",id:"\u7f16\u8bd1\u9879\u76ee",children:[]},{value:"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee",id:"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee",children:[]},{value:"\u4f7f\u7528\u9875\u9762\u63d2\u4ef6",id:"\u4f7f\u7528\u9875\u9762\u63d2\u4ef6",children:[]},{value:"\u4f7f\u7528\u7ec4\u4ef6\u63d2\u4ef6",id:"\u4f7f\u7528\u7ec4\u4ef6\u63d2\u4ef6",children:[]},{value:"Taro v1.3+ \u7ec4\u4ef6\u63d2\u4ef6\u63a5\u53d7\u5916\u90e8 props \u7684\u95ee\u9898",id:"taro-v13-\u7ec4\u4ef6\u63d2\u4ef6\u63a5\u53d7\u5916\u90e8-props-\u7684\u95ee\u9898",children:[]},{value:"\u4f7f\u7528\u63a5\u53e3\u63d2\u4ef6",id:"\u4f7f\u7528\u63a5\u53e3\u63d2\u4ef6",children:[]}]},{value:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",id:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1",children:[{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784-1",children:[]},{value:"\u7f16\u8bd1\u9879\u76ee",id:"\u7f16\u8bd1\u9879\u76ee-1",children:[]}]}],l={rightToc:o};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1\u6982\u8ff0")),Object(i.b)("h3",{id:"\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248"},"\u521b\u5efa\u63d2\u4ef6\u5f00\u53d1\u6a21\u7248"),Object(i.b)("p",null,"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5206\u4e3a",Object(i.b)("strong",{parentName:"p"},"\u9875\u9762"),"\u3001",Object(i.b)("strong",{parentName:"p"},"\u7ec4\u4ef6"),"\u3001",Object(i.b)("strong",{parentName:"p"},"\u63a5\u53e3"),"\u4e09\u79cd\u3002\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"taro init")," \u547d\u4ee4\uff0c\u7136\u540e\u9009\u62e9\u751f\u6210",Object(i.b)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u6a21\u7248"),"\uff0c\u5373\u53ef\u5728\u5f53\u524d\u76ee\u5f55\u751f\u6210\u5305\u542b\u4e0a\u8ff0\u4e09\u79cd\u63d2\u4ef6\u7c7b\u578b\u7684 Taro \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u9879\u76ee\u3002"),Object(i.b)("h3",{id:"\u4fee\u6539-appid"},"\u4fee\u6539 appid"),Object(i.b)("p",null,"\u521b\u5efa\u5b8c\u6a21\u7248\u540e\uff0c\u9996\u5148\u9700\u8981\u4fee\u6539 ",Object(i.b)("inlineCode",{parentName:"p"},"project.conf.json")," \u7684 ",Object(i.b)("strong",{parentName:"p"},"appid")," \u5b57\u6bb5\u548c ",Object(i.b)("inlineCode",{parentName:"p"},"src/app.js")," \u7684 ",Object(i.b)("strong",{parentName:"p"},"prodiver")," \u5b57\u6bb5\u4e3a\u540c\u4e00 appid\u3002"),Object(i.b)("h3",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),Object(i.b)("p",null,"\u63a8\u8350\u7684\u63d2\u4ef6\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"),Object(i.b)("p",null,"\u6ce8\u610f\uff0c\u6700\u540e\u53d1\u5e03\u7684\u662f plugin \u6587\u4ef6\u5939\u5185\u7684\u5185\u5bb9\uff0c\u63d2\u4ef6\u7684\u6240\u6709\u5185\u5bb9\u53ca\u9664\u4e86 npm \u5305\u4ee5\u5916\u7684\u4f9d\u8d56\u90fd\u5e94\u5199\u5728 plugin \u6587\u4ef6\u5939\u5185\u3002",Object(i.b)("inlineCode",{parentName:"p"},"src/pages")," \u5185\u7684\u9875\u9762\u53ea\u662f\u7528\u4e8e\u8c03\u8bd5\u63d2\u4ef6\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 config                 \u914d\u7f6e\u76ee\u5f55\n\u251c\u2500\u2500 src                    \u6e90\u7801\u76ee\u5f55\n|   \u251c\u2500\u2500 pages              \u8c03\u8bd5\u9875\u9762\u76ee\u5f55\uff0c\u7528\u4e8e\u8c03\u8bd5\u63d2\u4ef6\n|   |   \u2514\u2500\u2500 index          \n|   \u251c\u2500\u2500 plugin             \u63d2\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 doc            \u63d2\u4ef6\u6587\u6863\u76ee\u5f55\n|   |   \u251c\u2500\u2500 component      \u7ec4\u4ef6\u63d2\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 page           \u9875\u9762\u63d2\u4ef6\u76ee\u5f55\n|   |   \u251c\u2500\u2500 index.js       \u63a5\u53e3\u63d2\u4ef6\u6587\u4ef6\n|   |   \u2514\u2500\u2500 plugin.json    \u63d2\u4ef6\u914d\u7f6e\u6587\u4ef6\n|   \u251c\u2500\u2500 app.css            \u9879\u76ee\u603b\u901a\u7528\u6837\u5f0f\n|   \u2514\u2500\u2500 app.js             \u9879\u76ee\u5165\u53e3\u6587\u4ef6\n\u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 package.config.json\n")),Object(i.b)("h3",{id:"\u7f16\u8bd1\u9879\u76ee"},"\u7f16\u8bd1\u9879\u76ee"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bin"}),"taro build --plugin weapp\ntaro build --plugin weapp --watch\n")),Object(i.b)("h3",{id:"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee"},"\u6dfb\u52a0\u5c0f\u7a0b\u5e8f\u9879\u76ee"),Object(i.b)("p",null,"\u5728\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\u4e2d\u6dfb\u52a0 Taro \u63d2\u4ef6\u9879\u76ee\u6839\u76ee\u5f55\u3002"),Object(i.b)("h3",{id:"\u4f7f\u7528\u9875\u9762\u63d2\u4ef6"},"\u4f7f\u7528\u9875\u9762\u63d2\u4ef6"),Object(i.b)("p",null,"plugin.json \u7684 ",Object(i.b)("strong",{parentName:"p"},"pages")," \u5b57\u6bb5\u52a0\u5165\u9875\u9762\u63d2\u4ef6\u8def\u5f84\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="plugin.json"',title:'"plugin.json"'}),'{\n  "pages": {\n    "list": "pages/list/list"\n  }\n}\n')),Object(i.b)("p",null,"\u9875\u9762\u4f7f\u7528\u8def\u5f84\uff1a ",Object(i.b)("strong",{parentName:"p"},"plugin://","[app.js \u4e2d\u6ce8\u518c\u7684\u63d2\u4ef6\u540d]","/","[plugin.json \u4e2d\u6ce8\u518c\u7684\u9875\u9762\u540d]")," \u8fdb\u884c\u8df3\u8f6c\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{1}","{1}":!0}),"<Navigator url='plugin://myPlugin/list'>\n  Go to pages/list!\n</Navigator>\n")),Object(i.b)("h3",{id:"\u4f7f\u7528\u7ec4\u4ef6\u63d2\u4ef6"},"\u4f7f\u7528\u7ec4\u4ef6\u63d2\u4ef6"),Object(i.b)("p",null,"plugin.json \u7684 ",Object(i.b)("strong",{parentName:"p"},"publicComponents")," \u5b57\u6bb5\u52a0\u5165\u7ec4\u4ef6\u63d2\u4ef6\u8def\u5f84\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="plugin.json"',title:'"plugin.json"'}),'{\n  "publicComponents": {\n    "avatar": "components/avatar/avatar"\n  }\n}\n')),Object(i.b)("p",null,"\u5728\u9875\u9762\u914d\u7f6e config.usingComponents \u4e2d\u914d\u7f6e\u597d\u63d2\u4ef6\u540d\u548c\u63d2\u4ef6\u8def\u5f84\uff08",Object(i.b)("strong",{parentName:"p"},"plugin://","[app.js \u4e2d\u6ce8\u518c\u7684\u63d2\u4ef6\u540d]","/","[plugin.json \u4e2d\u6ce8\u518c\u7684\u7ec4\u4ef6\u540d]"),"\uff09\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4}","{4}":!0}),"export default class Index extends Component {\n  config = {\n    usingComponents: {\n      'avatar': 'plugin://myPlugin/avatar'\n    }\n  }\n}\n")),Object(i.b)("h3",{id:"taro-v13-\u7ec4\u4ef6\u63d2\u4ef6\u63a5\u53d7\u5916\u90e8-props-\u7684\u95ee\u9898"},"Taro v1.3+ \u7ec4\u4ef6\u63d2\u4ef6\u63a5\u53d7\u5916\u90e8 props \u7684\u95ee\u9898"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/3176"}),"#3176")),Object(i.b)("p",null,"Taro v1.3 \u5bf9 props \u7cfb\u7edf\u8fdb\u884c\u4e86\u6539\u9020\uff0c\u4f7f\u5f97\u4e0d\u80fd\u517c\u5bb9\u539f\u751f\u7ec4\u4ef6\u901a\u8fc7 properties \u4f20\u5165\u7684\u5c5e\u6027\u3002"),Object(i.b)("p",null,"\u76ee\u524d\u53ef\u4ee5\u901a\u8fc7\u628a\u6240\u6709\u9700\u8981\u4f20\u5165\u7ec4\u4ef6\u63d2\u4ef6\u7684 props\uff0c\u901a\u8fc7\u501f\u52a9 ",Object(i.b)("inlineCode",{parentName:"p"},"extraProps")," \u5c5e\u6027\u6765\u89e3\u51b3\u3002"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// \u5e38\u89c4 props \u4f20\u9012\n<Plugin title={this.state.name} desc={this.state.desc} />\n\n// \u5728\u4f7f\u7528\u63d2\u4ef6\u7ec4\u4ef6\u65f6\u9700\u8981\u6539\u9020\u6210\u4ee5\u4e0b\u5f62\u5f0f\uff1a\nconst extraProps = {\n  name: this.state.name,\n  desc: this.state.desc\n}\n<Plugin extraProps={extraProps} />\n")),Object(i.b)("h3",{id:"\u4f7f\u7528\u63a5\u53e3\u63d2\u4ef6"},"\u4f7f\u7528\u63a5\u53e3\u63d2\u4ef6"),Object(i.b)("p",null,"plugin.json \u7684 ",Object(i.b)("strong",{parentName:"p"},"main")," \u5b57\u6bb5\u52a0\u5165\u63a5\u53e3\u63d2\u4ef6\u8def\u5f84\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="plugin.json"',title:'"plugin.json"'}),'{\n  "main": "index.js"\n}\n')),Object(i.b)("p",null,"\u9875\u9762\u4e2d\u4f7f\u7528\uff1a"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const myPluginInterface = Taro.requirePlugin('myPlugin')\n\nexport default class Index extends Component {\n  componentWillMount () {\n    myPluginInterface.sayHello()\n    const answer = myPluginInterface.answer\n    console.log('answer: ', answer)\n  }\n")),Object(i.b)("h2",{id:"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.alipay.com/mini/isv/plugin-intro"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u63d2\u4ef6\u5f00\u53d1\u6982\u8ff0")),Object(i.b)("h3",{id:"\u9879\u76ee\u7ed3\u6784-1"},"\u9879\u76ee\u7ed3\u6784"),Object(i.b)("p",null,"\u76ee\u524d\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u53ea\u652f\u6301\u5f00\u53d1\u9875\u9762\u63d2\u4ef6\uff0c\u56e0\u6b64\u9879\u76ee\u7ed3\u6784\u548c\u666e\u901a Taro \u9879\u76ee\u7684\u4e00\u81f4\u3002\u53ea\u9700\u5728\u6e90\u7801\u76ee\u5f55\u4e0b\u518d\u589e\u52a0 ",Object(i.b)("inlineCode",{parentName:"p"},"plugin.json")," \u548c ",Object(i.b)("inlineCode",{parentName:"p"},"plugin-mock.json")," \u4e24\u4e2a\u6587\u4ef6\u5373\u53ef\u3002"),Object(i.b)("h3",{id:"\u7f16\u8bd1\u9879\u76ee-1"},"\u7f16\u8bd1\u9879\u76ee"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bin"}),"taro build --plugin alipay\ntaro build --plugin alipay --watch\n")))}s.isMDXComponent=!0}}]);