(window.webpackJsonp=window.webpackJsonp||[]).push([[673],{2191:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},2192:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},2193:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),u=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,a=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=u(n),O=r,d=m["".concat(a,".").concat(O)]||m[O]||s[O]||b;return n?c.a.createElement(d,l(l({ref:t},i),{},{components:n})):c.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,a=new Array(b);a[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var i=2;i<b;i++)a[i]=n[i];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},2194:function(e,t,n){"use strict";function r(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(c&&(c+=" "),c+=t);return c}},2195:function(e,t,n){"use strict";var r=n(0),c=n(2196);t.a=function(){var e=Object(r.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2196:function(e,t,n){"use strict";var r=n(0),c=Object(r.createContext)(void 0);t.a=c},2197:function(e,t,n){"use strict";var r=n(0),c=n.n(r),b=n(2195),a=n(2194),l=n(51),o=n.n(l),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,m=e.defaultValue,s=e.values,O=e.groupId,d=e.className,j=Object(b.a)(),p=j.tabGroupChoices,f=j.setTabGroupChoices,v=Object(r.useState)(m),g=v[0],y=v[1];if(null!=O){var h=p[O];null!=h&&h!==g&&s.some((function(e){return e.value===h}))&&y(h)}var N=function(e){y(e),null!=O&&f(O,e)},x=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},d)},s.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(a.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(r.cloneElement)(l.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},2198:function(e,t,n){"use strict";var r=n(2191),c=n(0),b=n.n(c);t.a=function(e){var t=e.children,n=e.hidden,c=e.className;return b.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:c}),t)}},738:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2191),c=n(2192),b=(n(0),n(2193)),a=n(2197),l=n(2198),o={title:"Form",sidebar_label:"Form"},i={unversionedId:"components/forms/form",id:"version-3.x/components/forms/form",isDocsHomePage:!1,title:"Form",description:"\u8868\u5355\u3002\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684 switch input checkbox slider radio picker \u63d0\u4ea4\u3002",source:"@site/versioned_docs/version-3.x/components/forms/form.md",slug:"/components/forms/form",permalink:"/taro/docs/components/forms/form",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/forms/form.md",version:"3.x",sidebar_label:"Form",sidebar:"version-3.x/components",previous:{title:"Editor",permalink:"/taro/docs/components/forms/editor"},next:{title:"Input",permalink:"/taro/docs/components/forms/input"}},u=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"FormProps",id:"formprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onSubmitEventDetail",id:"onsubmiteventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],m={rightToc:u};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u8868\u5355\u3002\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684 switch input checkbox slider radio picker \u63d0\u4ea4\u3002"),Object(b.b)("p",null,"\u5f53\u70b9\u51fb form \u8868\u5355\u4e2d form-type \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/form.html"}),"\u53c2\u8003\u6587\u6863"))),Object(b.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<FormProps>\n")),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)(a.a,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},Object(b.b)(l.a,{value:"React",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n\n  formSubmit = e => {\n    console.log(e)\n  }\n\n  formReset = e => {\n    console.log(e)\n  }\n\n  render () {\n    return (\n      <Form onSubmit={this.formSubmit} onReset={this.formReset} >\n        <View className='example-body'>\n          <Switch name='switch' className='form-switch'></Switch>\n        </View>\n      </Form>\n    )\n  }\n}\n"))),Object(b.b)(l.a,{value:"Vue",mdxType:"TabItem"},Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<template>\n  <form @submit="formSubmit" @reset="formReset" >\n      <view class="taro-example-body">\n        <switch name="switch" class="form-switch"></Switch>\n      </view>\n      <view class="taro-example-btns">\n        <button form-type="submit">Submit</button>\n        <button type="default" form-type="reset">Reset</button>\n    </view>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {}\n  },\n  methods: {\n    formSubmit (e) {\n      console.log(e)\n    },\n\n    formReset (e) {\n      console.log(e)\n    }\n  }\n}\n<\/script>\n\n')))),Object(b.b)("h2",{id:"formprops"},"FormProps"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"reportSubmit"),Object(b.b)("td",null,Object(b.b)("code",null,"boolean")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"false")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u662f\u5426\u8fd4\u56de ",Object(b.b)("code",null,"formId")," \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f\u3002")),Object(b.b)("tr",null,Object(b.b)("td",null,"reportSubmitTimeout"),Object(b.b)("td",null,Object(b.b)("code",null,"number")),Object(b.b)("td",{style:{textAlign:"center"}},Object(b.b)("code",null,"0")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u7b49\u5f85\u4e00\u6bb5\u65f6\u95f4\uff08\u6beb\u79d2\u6570\uff09\u4ee5\u786e\u8ba4 ",Object(b.b)("code",null,"formId")," \u662f\u5426\u751f\u6548\u3002",Object(b.b)("br",null),"\u5982\u679c\u672a\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\uff0c",Object(b.b)("code",null,"formId")," \u6709\u5f88\u5c0f\u7684\u6982\u7387\u662f\u65e0\u6548\u7684\uff08\u5982\u9047\u5230\u7f51\u7edc\u5931\u8d25\u7684\u60c5\u51b5\uff09\u3002",Object(b.b)("br",null),"\u6307\u5b9a\u8fd9\u4e2a\u53c2\u6570\u5c06\u53ef\u4ee5\u68c0\u6d4b ",Object(b.b)("code",null,"formId")," \u662f\u5426\u6709\u6548\uff0c",Object(b.b)("br",null),"\u4ee5\u8fd9\u4e2a\u53c2\u6570\u7684\u65f6\u95f4\u4f5c\u4e3a\u8fd9\u9879\u68c0\u6d4b\u7684\u8d85\u65f6\u65f6\u95f4\u3002",Object(b.b)("br",null),"\u5982\u679c\u5931\u8d25\uff0c\u5c06\u8fd4\u56de ",Object(b.b)("code",null,"requestFormId:fail")," \u5f00\u5934\u7684 ",Object(b.b)("code",null,"formId"),"\u3002")),Object(b.b)("tr",null,Object(b.b)("td",null,"onSubmit"),Object(b.b)("td",null,Object(b.b)("code",null,"BaseEventOrigFunction<onSubmitEventDetail>")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u643a\u5e26 form \u4e2d\u7684\u6570\u636e\u89e6\u53d1 submit \u4e8b\u4ef6",Object(b.b)("br",null),"event.detail = ","{ value : { name': 'value'}, formId: '' }")),Object(b.b)("tr",null,Object(b.b)("td",null,"onReset"),Object(b.b)("td",null,Object(b.b)("code",null,"BaseEventOrigFunction<any>")),Object(b.b)("td",{style:{textAlign:"center"}}),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u8868\u5355\u91cd\u7f6e\u65f6\u4f1a\u89e6\u53d1 reset \u4e8b\u4ef6")))),Object(b.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"FormProps.reportSubmit"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"FormProps.reportSubmitTimeout"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"FormProps.onSubmit"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"FormProps.onReset"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),Object(b.b)("h3",{id:"onsubmiteventdetail"},"onSubmitEventDetail"),Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"\u53c2\u6570"),Object(b.b)("th",null,"\u7c7b\u578b"),Object(b.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(b.b)("th",null,"\u8bf4\u660e"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"value"),Object(b.b)("td",null,Object(b.b)("code",null,"{ [formItemName: string]: any; }")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u5f53\u70b9\u51fb ",Object(b.b)("code",null,"<form>")," \u8868\u5355\u4e2d ",Object(b.b)("code",null,"form-type")," \u4e3a ",Object(b.b)("code",null,"submit")," \u7684 ",Object(b.b)("code",null,"<button>")," \u7ec4\u4ef6\u65f6\uff0c",Object(b.b)("br",null),"\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 ",Object(b.b)("code",null,"value")," \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c",Object(b.b)("br",null),"\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a ",Object(b.b)("code",null,"name")," \u6765\u4f5c\u4e3a ",Object(b.b)("code",null,"key"),"\u3002")),Object(b.b)("tr",null,Object(b.b)("td",null,"formId"),Object(b.b)("td",null,Object(b.b)("code",null,"string")),Object(b.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(b.b)("td",null,"\u5f53 ",Object(b.b)("code",null,"reportSubmit")," \u4e3a ",Object(b.b)("code",null,"true")," \u65f6\uff0c\u8fd4\u56de ",Object(b.b)("code",null,"formId")," \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f\u3002")))),Object(b.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Form"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);