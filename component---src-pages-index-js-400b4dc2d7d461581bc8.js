(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,t,n){"use strict";n.r(t);n(199),n(99);var r=n(12),a=n.n(r),i=n(0),c=n.n(i),o=n(193),u=n(214),s=n.n(u),l=n(70),p=n(14),d=n(202),f=n(200),m=n(201),h=(n(215),n(1)),g=n.n(h),v=n(195),y=function(e){var t=e.product,n=e.isSimpleDisplay;return c.a.createElement("div",{className:n?"card-container--simple":"card-container",style:{background:t.style.background}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:t.imageLink,alt:t.name})),c.a.createElement("div",{className:"card-right-panel",style:{background:t.style.background}},c.a.createElement("div",{className:"card-info"},c.a.createElement("div",{className:"product-info"},c.a.createElement("div",{className:"product-name"},t.name),c.a.createElement("div",{className:"product-description"}," ",t.description)),c.a.createElement("div",{className:"product-detail"},c.a.createElement("div",{className:"product-sku"},"SKU: ",t.sku),c.a.createElement("div",{className:"product-pv"},t.pv," PV"),c.a.createElement("div",{className:"product-price"},c.a.createElement("div",{className:"product-dp"},Object(v.a)(Number(t.dp))),c.a.createElement("div",{className:"product-cp"},Object(v.a)(Number(t.cp)))))),c.a.createElement("button",{className:"card-button"},n?"Thêm":"Thêm vào giỏ hàng")))};y.propTypes={product:g.a.object},y.defaultProps={product:{}};var E=y,b=n(77),w=function(){return{type:b.a}},N=function(e){function t(t){var n;return(n=e.call(this,t)||this).search=function(){var e=n.value.trim();if(e){var t=n.props.products.filter(function(t){return Object(v.c)(e,t.name)});n.setState({products:[].concat(t)})}else n.setState({products:[].concat(n.props.products)})},n.onChangeInput=function(e){n.value=e.target.value,n.onSearch()},n.onSearch=s()(n.search,300),n.state={products:[]},n}a()(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){e.products.length!==this.props.products.length&&this.setState({products:[].concat(e.products)})},n.componentWillMount=function(){this.props.products.length||this.props.getProducts()},n.render=function(){var e=this.props,t=e.isLoading,n=e.isGrid,r=this.state.products;return console.log("isGrid",n),c.a.createElement(f.a,{onDisplayClick:this.props.switchDisplay,isGrid:n,onChangeInput:this.onChangeInput},c.a.createElement(m.a,{title:"Sản phẩm Amway",keywords:["Amway","Sản phẩm"],products:r}),c.a.createElement("div",{className:n?"product-container":"product-container--simple"},t?c.a.createElement("div",null,"Đang tải sản phẩm..."):r.map(function(e,t){return c.a.createElement(E,{key:t,product:e,isSimpleDisplay:!n})})),c.a.createElement(o.a,{to:"/page-2/"},"Go to page 2"))},t}(c.a.Component);t.default=Object(l.b)(function(e){return{isDarkMode:e.productReducer.isDarkMode,products:e.productReducer.products,isLoading:e.productReducer.isLoading,isGrid:e.layoutReducer.isGrid}},function(e){return{toggleDarkMode:Object(p.b)(d.b,e),getProducts:Object(p.b)(d.a,e),switchDisplay:Object(p.b)(w,e)}})(N)},193:function(e,t,n){"use strict";n.d(t,"b",function(){return l});var r=n(0),a=n.n(r),i=n(1),c=n.n(i),o=n(40),u=n.n(o);n.d(t,"a",function(){return u.a});n(194);var s=a.a.createContext({}),l=function(e){return a.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},194:function(e,t,n){var r;e.exports=(r=n(197))&&r.default||r},195:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return o});n(96),n(97),n(95),n(41),n(199);var r=function(e){return e?e.map(function(e){return{"@context":"https://schema.org/","@type":"Product",name:e.name,image:e.imageLink,brand:{"@type":"Thing",name:"Amway"},offers:{"@type":"AggregateOffer",lowPrice:e.dp,highPrice:e.cp,priceCurrency:"VND"}}}):[]},a=function(e){return e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},i=function(e){return e?e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d")).replace(/!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'| |"|&|#|\[|\]|~|$|_/g,"-")).replace(/-+-/g,"-")).replace(/^-+|-+$/g,"")).replace(/-/g," "):""},c=/^.| +./g,o=function(e,t){var n=i(e),r=i(t),a=r.match(c).join("").replace(/ /g,"");return r.includes(n)||a.includes(n)}},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Sản phẩm Amway"}}}}},197:function(e,t,n){"use strict";n.r(t);n(25);var r=n(0),a=n.n(r),i=n(1),c=n.n(i),o=n(66),u=n(3),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Sản phẩm Amway",description:"Tham khảo giá sản phẩm Amway",author:"Nguyễn Mạnh Huy"}}}}},200:function(e,t,n){"use strict";var r=n(12),a=n.n(r),i=n(196),c=n(0),o=n.n(c),u=n(1),s=n.n(u),l=n(193),p=function(e){var t=e.onClick;return o.a.createElement("button",{onClick:t},o.a.createElement("svg",{stroke:"white",fill:"white",strokeWidth:"0",viewBox:"0 0 24 24",size:"25",height:"25",width:"25",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"})))},d=function(e){var t=e.isGrid,n=e.onClick;return t?o.a.createElement("button",{onClick:n},o.a.createElement("svg",{fill:"white",x:"0px",y:"0px",viewBox:"0 0 28.617 28.617",size:"20",height:"20"},o.a.createElement("g",null,o.a.createElement("rect",{x:"0",y:"1.645",width:"28.617",height:"6.402"}),o.a.createElement("rect",{x:"0",y:"11.247",width:"28.617",height:"6.398"}),o.a.createElement("rect",{x:"0",y:"20.572",width:"28.617",height:"6.4"})))):o.a.createElement("button",{onClick:n},o.a.createElement("svg",{fill:"white",x:"0px",y:"0px",size:"20",height:"20",viewBox:"0 0 27.709 27.709"},o.a.createElement("g",null,o.a.createElement("path",{fill:"white",d:"M9.84,0.078h7.655V7.73H9.84V0.078z M9.84,9.918h7.655v7.652H9.84V9.918z M0,9.918h7.652v7.652H0\r V9.918z M0,0.078h7.652V7.73H0V0.078z M0.003,19.978h7.649v7.654H0.003V19.978z M9.843,19.978h7.652v7.654H9.843V19.978z\r M20.054,0.078h7.655V7.73h-7.655V0.078z M20.054,9.918h7.655v7.652h-7.655V9.918z M20.054,19.978h7.655v7.654h-7.655V19.978z"}))))},f=function(e){var t=e.onClick;return o.a.createElement("button",{onClick:t},o.a.createElement("svg",{height:"32px",version:"1.1",viewBox:"0 0 32 32",width:"32px"},o.a.createElement("path",{style:{fill:"white"},d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"})))},m=function(e){var t=e.siteTitle,n=e.onDisplayClick,r=e.isGrid,a=e.onChangeInput;return o.a.createElement("header",null,o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement(l.a,{to:"/"},t))),o.a.createElement("div",{className:"hamburger-menu"},o.a.createElement(f,null)),o.a.createElement("input",{className:"input-search",placeholder:"Tìm sản phẩm",onChange:a,onFocus:function(e){e.target.value="",a({target:{value:""}})}}),o.a.createElement("div",{className:"header-right"},o.a.createElement(d,{onClick:n,isGrid:!r}),o.a.createElement(p,{href:"/"})))};m.propTypes={siteTitle:s.a.string},m.defaultProps={siteTitle:""};var h=m,g=(n(203),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.onDisplayClick,r=t.isGrid,a=t.onChangeInput;return o.a.createElement(l.b,{query:"2994927498",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{siteTitle:t.site.siteMetadata.title,onDisplayClick:n,isGrid:r,onChangeInput:a}),o.a.createElement("main",null,e.props.children),o.a.createElement("footer",null))},data:i})},t}(o.a.Component));g.propTypes={children:s.a.node.isRequired};t.a=g},201:function(e,t,n){"use strict";var r=n(198),a=n(0),i=n.n(a),c=n(1),o=n.n(c),u=n(204),s=n.n(u),l=n(12),p=n.n(l),d=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){return i.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(this.props.data)}})},t}(i.a.PureComponent),f=n(195);function m(e){var t=e.description,n=e.lang,a=e.meta,c=e.keywords,o=e.title,u=e.products,l=r.data.site,p=t||l.siteMetadata.description,m=Object(f.b)(u);return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{data:m}),i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,meta:[{name:"description",content:p},{property:"og:title",content:o},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:p}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(a)}))}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired};t.a=m},202:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return c});var r=n(4),a=function(e){return{type:r.d,isDarkMode:e}},i=function(){return{type:r.a}},c=function(){return{type:r.f}}},206:function(e,t,n){var r=n(102),a=n(67),i=n(42),c=n(98),o=n(33),u=n(100),s=Object.getOwnPropertyDescriptor;t.f=n(24)?s:function(e,t){if(e=i(e),t=c(t,!0),u)try{return s(e,t)}catch(n){}if(o(e,t))return a(!r.f.call(e,t),e[t])}},214:function(e,t,n){(function(t){var n="Expected a function",r=NaN,a="[object Symbol]",i=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,d=l||p||Function("return this")(),f=Object.prototype.toString,m=Math.max,h=Math.min,g=function(){return d.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==a}(e))return r;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?s(e.slice(2),n?2:8):c.test(e)?r:+e}e.exports=function(e,t,r){var a,i,c,o,u,s,l=0,p=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError(n);function E(t){var n=a,r=i;return a=i=void 0,l=t,o=e.apply(r,n)}function b(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-l>=c}function w(){var e=g();if(b(e))return N(e);u=setTimeout(w,function(e){var n=t-(e-s);return d?h(n,c-(e-l)):n}(e))}function N(e){return u=void 0,f&&a?E(e):(a=i=void 0,o)}function k(){var e=g(),n=b(e);if(a=arguments,i=this,s=e,n){if(void 0===u)return function(e){return l=e,u=setTimeout(w,t),p?E(e):o}(s);if(d)return u=setTimeout(w,t),E(s)}return void 0===u&&(u=setTimeout(w,t)),o}return t=y(t)||0,v(r)&&(p=!!r.leading,c=(d="maxWait"in r)?m(y(r.maxWait)||0,t):c,f="trailing"in r?!!r.trailing:f),k.cancel=function(){void 0!==u&&clearTimeout(u),l=0,a=s=i=u=void 0},k.flush=function(){return void 0===u?o:N(g())},k}}).call(this,n(65))},215:function(e,t,n){"use strict";var r=n(9),a=n(33),i=n(20),c=n(216),o=n(98),u=n(26),s=n(218).f,l=n(206).f,p=n(32).f,d=n(219).trim,f=r.Number,m=f,h=f.prototype,g="Number"==i(n(103)(h)),v="trim"in String.prototype,y=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=v?t.trim():d(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var c,u=t.slice(2),s=0,l=u.length;s<l;s++)if((c=u.charCodeAt(s))<48||c>a)return NaN;return parseInt(u,r)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof f&&(g?u(function(){h.valueOf.call(n)}):"Number"!=i(n))?c(new m(y(t)),n,f):y(t)};for(var E,b=n(24)?s(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;b.length>w;w++)a(m,E=b[w])&&!a(f,E)&&p(f,E,l(m,E));f.prototype=h,h.constructor=f,n(21)(r,"Number",f)}},216:function(e,t,n){var r=n(17),a=n(217).set;e.exports=function(e,t,n){var i,c=t.constructor;return c!==n&&"function"==typeof c&&(i=c.prototype)!==n.prototype&&r(i)&&a&&a(e,i),e}},217:function(e,t,n){var r=n(17),a=n(8),i=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(27)(Function.call,n(206).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:i}},218:function(e,t,n){var r=n(101),a=n(68).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},219:function(e,t,n){var r=n(18),a=n(28),i=n(26),c=n(220),o="["+c+"]",u=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),l=function(e,t,n){var a={},o=i(function(){return!!c[e]()||"​"!="​"[e]()}),u=a[e]=o?t(p):c[e];n&&(a[n]=u),r(r.P+r.F*o,"String",a)},p=l.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(u,"")),2&t&&(e=e.replace(s,"")),e};e.exports=l},220:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=component---src-pages-index-js-400b4dc2d7d461581bc8.js.map