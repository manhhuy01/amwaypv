(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(199),o=n(203),c=n(204);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},199:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(42),p=n.n(c);n.d(t,"a",function(){return p.a}),n.d(t,"b",function(){return c.navigate});n(201),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},200:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return p});n(98),n(100),n(101),n(99),n(43),n(207);var a=function(e){return e?e.map(function(e){return{"@context":"https://schema.org/","@type":"Product",name:e.name,image:e.imageLink,brand:{"@type":"Thing",name:"Amway"},offers:{"@type":"AggregateOffer",lowPrice:e.dp,highPrice:e.cp,priceCurrency:"VND"}}}):[]},r=function(e){return e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},i=function(e){return e?e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d")).replace(/!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'| |"|&|#|\[|\]|~|$|_/g,"-")).replace(/-+-/g,"-")).replace(/^-+|-+$/g,"")).replace(/-/g," "):""},o=/^.| +./g,c=function(e,t){var n=i(e),a=i(t),r=a.match(o).join("").replace(/ /g,"");return a.includes(n)||r.includes(n)},p=function(e){if(!e)return"";var t=e?e.substring(1):window.location.search.substring(1);return JSON.parse('{"'+decodeURI(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}},201:function(e,t,n){var a;e.exports=(a=n(205))&&a.default||a},203:function(e,t,n){"use strict";var a=n(12),r=n.n(a),i=n(0),o=n.n(i),c=n(1),p=n.n(c),u=(n(199),function(e){var t=e.children;return o.a.createElement("header",null,t)});u.propTypes={siteTitle:p.a.string},u.defaultProps={siteTitle:""};var l=u,s=(n(208),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.headerChildren;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l,null,e),o.a.createElement("main",null,this.props.children),o.a.createElement("footer",null))},t}(o.a.Component));s.propTypes={children:p.a.node.isRequired};t.a=s},204:function(e,t,n){"use strict";var a=n(206),r=n(0),i=n.n(r),o=n(1),c=n.n(o),p=n(209),u=n.n(p),l=n(12),s=n.n(l),d=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(this.props.data)}})},t}(i.a.PureComponent),m=n(200);function g(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title,p=e.products,l=a.data.site,s=t||l.siteMetadata.description,g=Object(m.b)(p);return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{data:g}),i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s},{name:"full-screen",content:"yes"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-title",content:""}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)}))}g.defaultProps={lang:"en",meta:[],keywords:[]},g.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};t.a=g},205:function(e,t,n){"use strict";n.r(t);n(25);var a=n(0),r=n.n(a),i=n(1),o=n.n(i),c=n(67),p=n(3),u=function(e){var t=e.location,n=p.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},206:function(e){e.exports={data:{site:{siteMetadata:{title:"Sản phẩm Amway",description:"Tham khảo giá sản phẩm Amway",author:"Nguyễn Mạnh Huy"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-47df14b854804f7a3f8a.js.map