(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),c=a(0),o=a.n(c),i=a(212),l=a(72),u=a(16),s=a(215),p=a(214),d=function(e){var t=e.number,a=e.onClick;return o.a.createElement("button",{onClick:a,className:"icon-selection"},o.a.createElement("div",null,t))},m=function(e){var t=e.onClick;return o.a.createElement("button",{onClick:t,className:"icon-back"},o.a.createElement("svg",{version:"1.1",x:"0px",y:"0px",size:"23",height:"23",width:"25",viewBox:"0 0 31.494 31.494"},o.a.createElement("path",{style:{fill:"#fff"},d:"M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554\r c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587\r c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"})))},b=a(1),f=a.n(b),h=a(219),v=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).onChange=function(e){var a=t.props,n=a.number,r=a.min,c=a.max,o=a.onChange,i=n+e;i>=r&&i<=c&&o(e)},t}return r()(t,e),t.prototype.render=function(){var e=this.props.number;return o.a.createElement("div",{className:"input-group"},o.a.createElement("span",{className:"input-group-btn input-group-btn--down"},o.a.createElement("button",{onClick:this.onChange.bind(this,-1)},"-")),o.a.createElement("div",{className:"input-group-number"},e),o.a.createElement("span",{className:"input-group-btn input-group-btn--up"},o.a.createElement("button",{onClick:this.onChange.bind(this,1)},"+")))},t}(o.a.Component),g=a(71),y=function(e){var t=e.data,a=e.isSimpleDisplay,n=e.onChangeQuantity,r=e.onRemove;return o.a.createElement("div",{className:"cartItem-container"},o.a.createElement(h.a,{product:t.product,isSimpleDisplay:a}),o.a.createElement("div",{className:"cartItem-action"},o.a.createElement("div",{className:"cartItem-quantity"},o.a.createElement("div",null,o.a.createElement(v,{min:0,max:999,number:t.amount,onChange:n})),o.a.createElement("div",{className:"product-pv"},(t.product.pv*t.amount).toFixed(2)+" PV"),o.a.createElement("div",{className:"product-dp"},Object(g.a)(t.product.dp*t.amount)),o.a.createElement("div",{className:"product-cp"},Object(g.a)(t.product.cp*t.amount))),o.a.createElement("div",{className:"cartItem-remove"},o.a.createElement("label",{onClick:r},"xóa"))))};y.propTypes={product:f.a.object},y.defaultProps={product:{}};var E=y,N=a(210),C=a(222),k=function(e){function t(t){var a;return(a=e.call(this,t)||this).validateParams=function(e){return!0},a.back=function(){a.props.isPageProductLoaded?window.history.back():Object(i.b)("/")},a.state={},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.isPageProductLoaded||this.props.pageProductLoaded(),console.log(Object(g.c)())},a.onChangeQuantity=function(e,t){t>0&&this.props.addProductToCart({product:e}),t<0&&this.props.subProductFromCart({product:e})},a.onRemove=function(e){this.props.removeProductFromCart({product:e})},a.render=function(){var e=this,t=this.props,a=t.cartSelected,n=a.products,r=a.totalPv,c=a.totalCp,i=a.totalDp,l=t.isLoading,u=o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{onClick:this.back}),o.a.createElement("div",null,o.a.createElement("h1",null,"Giỏ hàng")),o.a.createElement("div",{className:"header-right"},o.a.createElement(d,null)));return o.a.createElement(s.a,{headerChildren:u},o.a.createElement(p.a,{title:"Đơn hàng Amway",keywords:["Amway","Sản phẩm"]}),l?o.a.createElement("div",null," Đang tải sản phẩm..."):o.a.createElement("div",{className:"cart-body"},o.a.createElement("div",{className:"cart-container"},!!n&&n.map(function(t,a){return o.a.createElement(E,{key:a,data:t,isSimpleDisplay:!1,onChangeQuantity:e.onChangeQuantity.bind(e,t.product),onRemove:e.onRemove.bind(e,t.product)})})),o.a.createElement("div",{className:"cart-total-container"},o.a.createElement("div",{className:"cart-total"},o.a.createElement("label",{className:"title"},"Tổng Tiền"),o.a.createElement("label",{className:"total-pv"},""+r.toFixed(2)),o.a.createElement("label",{className:"total-dp"},Object(g.a)(i)),o.a.createElement("label",{className:"total-price"},Object(g.a)(c))))))},t}(o.a.Component);t.default=Object(l.b)(function(e){return{isDarkMode:e.productReducer.isDarkMode,isPageProductLoaded:e.layoutReducer.isPageProductLoaded,cartSelected:e.productReducer.cartSelected,isLoading:e.productReducer.isLoading}},function(e){return{addProductToCart:Object(u.b)(N.a,e),subProductFromCart:Object(u.b)(N.d,e),removeProductFromCart:Object(u.b)(N.c,e),pageProductLoaded:Object(u.b)(C.a,e)}})(k)},209:function(e,t,a){var n;e.exports=(n=a(213))&&n.default||n},210:function(e,t,a){"use strict";a.d(t,"e",function(){return r}),a.d(t,"b",function(){return c}),a.d(t,"f",function(){return o}),a.d(t,"a",function(){return i}),a.d(t,"d",function(){return l}),a.d(t,"c",function(){return u});var n=a(4),r=function(e){return{type:n.h,isDarkMode:e}},c=function(){return{type:n.c}},o=function(){return{type:n.j}},i=function(e){return{type:n.a,payload:e}},l=function(e){return{type:n.g,payload:e}},u=function(e){return{type:n.f,payload:e}}},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Sản phẩm Amway",description:"Tham khảo giá sản phẩm Amway",author:"Nguyễn Mạnh Huy"}}}}},212:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),o=a.n(c),i=a(46),l=a.n(i);a.d(t,"a",function(){return l.a}),a.d(t,"b",function(){return i.navigate});a(209),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},213:function(e,t,a){"use strict";a.r(t);a(25);var n=a(0),r=a.n(n),c=a(1),o=a.n(c),i=a(74),l=a(3),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},214:function(e,t,a){"use strict";var n=a(211),r=a(0),c=a.n(r),o=a(1),i=a.n(o),l=a(218),u=a.n(l),s=a(12),p=a.n(s),d=function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){return c.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(this.props.data)}})},t}(c.a.PureComponent),m=a(71);function b(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,i=e.title,l=e.products,s=n.data.site,p=t||s.siteMetadata.description,b=Object(m.b)(l);return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{data:b}),c.a.createElement(u.a,{htmlAttributes:{lang:a},title:i,meta:[{name:"description",content:p},{property:"og:title",content:i},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:p},{name:"full-screen",content:"yes"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-title",content:""}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)}))}b.defaultProps={lang:"en",meta:[],keywords:[]},b.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired};t.a=b},215:function(e,t,a){"use strict";var n=a(12),r=a.n(n),c=a(0),o=a.n(c),i=a(1),l=a.n(i),u=function(e){var t=e.children;return o.a.createElement("header",null,t)};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var s=u,p=(a(216),a(217),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.headerChildren;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null,e),o.a.createElement("main",null,this.props.children),o.a.createElement("footer",null))},t}(o.a.Component));p.propTypes={children:l.a.node.isRequired};t.a=p},219:function(e,t,a){"use strict";a(112),a(111);var n=a(1),r=a.n(n),c=a(0),o=a.n(c),i=a(4),l=a(71),u=function(e){var t=e.product,a=e.isSimpleDisplay,n=e.onAddItemToCart;return o.a.createElement("div",{className:a?"card-container--simple":"card-container",style:{background:i.b[t.category]||i.b.DEFAULT}},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{src:t.imageLink,alt:t.name})),o.a.createElement("div",{className:"card-right-panel",style:{background:i.b[t.category]||i.b.DEFAULT}},o.a.createElement("div",{className:"card-info"},o.a.createElement("div",{className:"product-info"},o.a.createElement("div",{className:"product-name"},t.name),o.a.createElement("div",{className:"product-description"}," ",t.description)),o.a.createElement("div",{className:"product-detail"},o.a.createElement("div",{className:"product-sku"},"SKU: ",t.sku),o.a.createElement("div",{className:"product-pv"},t.pv," PV"),o.a.createElement("div",{className:"product-price"},o.a.createElement("div",{className:"product-dp"},Object(l.a)(Number(t.dp))),o.a.createElement("div",{className:"product-cp"},Object(l.a)(Number(t.cp)))))),o.a.createElement("button",{className:"card-button",onClick:n},a?"Thêm":"Thêm vào giỏ hàng")))};u.propTypes={product:r.a.object},u.defaultProps={product:{}},t.a=u},222:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return c});var n=a(34),r=function(){return{type:n.b}},c=function(){return{type:n.a}}}}]);
//# sourceMappingURL=component---src-pages-order-js-c9d7d9088299a62330fd.js.map