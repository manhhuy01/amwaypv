(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{200:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(211),o=n(210);t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"404: Not found"}),a.a.createElement("h1",null,"NOT FOUND"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},206:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return p});n(104),n(106),n(107),n(105),n(44),n(209);var r=function(e){return e?e.map(function(e){return{"@context":"https://schema.org/","@type":"Product",name:e.name,image:e.imageLink,brand:{"@type":"Thing",name:"Amway"},offers:{"@type":"AggregateOffer",lowPrice:e.dp,highPrice:e.cp,priceCurrency:"VND"}}}):[]},a=function(e){return e.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},i=function(e){return e?e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e")).replace(/ì|í|ị|ỉ|ĩ/g,"i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y")).replace(/đ/g,"d")).replace(/!|@|%|\^|\*|\(|\)|\+|=|<|>|\?|\/|,|\.|:|;|'| |"|&|#|\[|\]|~|$|_/g,"-")).replace(/-+-/g,"-")).replace(/^-+|-+$/g,"")).replace(/-/g," "):""},o=/^.| +./g,c=function(e,t){var n=i(e),r=i(t),a=r.match(o).join("").replace(/ /g,"");return r.includes(n)||a.includes(n)},p=function(e){if(!e)return"";var t=e?e.substring(1):window.location.search.substring(1);return JSON.parse('{"'+decodeURI(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}')}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Sản phẩm Amway",description:"Tham khảo giá sản phẩm Amway",author:"Nguyễn Mạnh Huy"}}}}},210:function(e,t,n){"use strict";var r=n(208),a=n(0),i=n.n(a),o=n(1),c=n.n(o),p=n(216),l=n.n(p),u=n(12),s=n.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return i.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(this.props.data)}})},t}(i.a.PureComponent),m=n(206);function g(e){var t=e.description,n=e.lang,a=e.meta,o=e.keywords,c=e.title,p=e.products,u=r.data.site,s=t||u.siteMetadata.description,g=Object(m.b)(p);return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{data:g}),i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s},{name:"full-screen",content:"yes"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-title",content:""}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)}))}g.defaultProps={lang:"en",meta:[],keywords:[]},g.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};t.a=g},211:function(e,t,n){"use strict";var r=n(12),a=n.n(r),i=n(0),o=n.n(i),c=n(1),p=n.n(c),l=function(e){var t=e.children;return o.a.createElement("header",null,t)};l.propTypes={siteTitle:p.a.string},l.defaultProps={siteTitle:""};var u=l,s=(n(215),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.headerChildren;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null,e),o.a.createElement("main",null,this.props.children),o.a.createElement("footer",null))},t}(o.a.Component));s.propTypes={children:p.a.node.isRequired};t.a=s}}]);
//# sourceMappingURL=component---src-pages-404-js-46d976fbb406d813d74f.js.map