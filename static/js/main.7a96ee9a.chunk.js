(this["webpackJsonpfinished-app"]=this["webpackJsonpfinished-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),i=n.n(s),a=(n(11),n(12),n(13),n(0));var j=function(e){return Object(a.jsx)("div",{className:"header",children:e.title})};n(15);var h=function(e){return Object(a.jsx)("div",{className:"footer",children:e.title})},u=n(4),d=n.n(u),l=n(6),o=n(2);n(17),n(18);var b=function(e){return Object(a.jsx)("div",{className:"places",children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Airport ID"}),Object(a.jsx)("th",{children:"Airport Name"}),Object(a.jsx)("th",{children:"Country ID"}),Object(a.jsx)("th",{children:"Region ID"}),Object(a.jsx)("th",{children:"City ID"}),Object(a.jsx)("th",{children:"Country Name"})]})}),Object(a.jsx)("tbody",{children:e.places.map((function(e){return Object(a.jsxs)("tr",{id:e.PlaceId,children:[Object(a.jsx)("th",{children:e.PlaceId}),Object(a.jsx)("th",{children:e.PlaceName}),Object(a.jsx)("th",{children:e.CountryId}),Object(a.jsx)("th",{children:e.RegionId}),Object(a.jsx)("th",{children:e.CityId}),Object(a.jsx)("th",{children:e.CountryName})]})}))})]})})};var p=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),j=i[0],h=i[1],u=Object(c.useState)(!1),p=Object(o.a)(u,2),O=p[0],f=p[1];return Object(a.jsxs)("div",{className:"feed",children:[Object(a.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"f7fc70c755msh7a22b8eef5d6ae2p18c70ejsnd6dfb83277f3","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?"+new URLSearchParams({query:j}),t);case 3:return n=e.sent,e.next=6,n.json();case 6:n=e.sent,console.log(n.Places),r(n.Places);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),f(!0),h("")},children:[Object(a.jsx)("label",{htmlFor:"queryInput",children:"State or Country:::"}),Object(a.jsx)("input",{id:"queryInput",value:j,onChange:function(e){return h(e.target.value)},required:!0}),Object(a.jsx)("button",{className:"search",children:"Submit"})]}),O?Object(a.jsx)(b,{places:n}):Object(a.jsx)(a.Fragment,{})]})};var O=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{title:"Airport Info"}),Object(a.jsx)(p,{}),Object(a.jsx)(h,{title:"2020"})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.7a96ee9a.chunk.js.map