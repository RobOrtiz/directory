(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(13),c=a.n(s),i=(a(20),a(3)),d=a(15),l=(a(21),r.a.createContext({})),o=a(0),j=function(){var e=Object(n.useContext)(l);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(o.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,n=e.name,r=e.picture,s=e.phone,c=e.email,i=e.dob;return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(o.jsx)("img",{src:r.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(o.jsxs)("td",{"data-th":"Name",className:"nameColumn align-middle",children:[n.first," ",n.last]}),Object(o.jsx)("td",{"data-th":"Phone",className:"align-middle",children:s}),Object(o.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(o.jsx)("a",{href:"mailto:"+c,target:"__blank",children:c})}),Object(o.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(i.date)})]},a.uuid)})):Object(o.jsx)(o.Fragment,{})})},h=(a(23),function(){var e=Object(n.useContext)(l);return Object(o.jsx)("div",{className:"datatable mt-5",children:Object(o.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(o.jsx)("thead",{children:Object(o.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,n=t.width;return Object(o.jsxs)("th",{className:"col",style:{width:n},onClick:function(){e.handleSort(a.toLowerCase())},children:[a,Object(o.jsx)("span",{className:"pointer"})]},a)}))})}),Object(o.jsx)(j,{})]})})}),u=(a(24),function(){var e=Object(n.useContext)(l);return Object(o.jsx)("div",{className:"searchField",children:Object(o.jsxs)("form",{className:"form-inline",children:[Object(o.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(t){return e.handleSearchChange(t)}}),Object(o.jsx)("button",{className:"btn my-2 my-sm-0",type:"submit",children:"Search"})]})})});a(25);var b=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsx)("div",{className:"search-area col-4",children:Object(o.jsx)(u,{})})})},m=a(14),f=a.n(m),O=function(){return f.a.get("https://randomuser.me/api/?results=200&nat=us")},x=(a(44),function(){var e=Object(n.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){O().then((function(e){r(Object(i.a)(Object(i.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),Object(o.jsxs)(l.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,n=a.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));r(Object(i.a)(Object(i.a)({},a),{},{filteredUsers:n}))},handleSort:function(e){"descend"===a.order?r({order:"ascend"}):r({order:"descend"});var t=a.filteredUsers.sort((function(t,n){return"ascend"===a.order?void 0===t[e]?1:void 0===n[e]?-1:"name"===e?t[e].first.localeCompare(n[e].first):n[e]-t[e]:void 0===t[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(t[e].first):n[e]-t[e]}));r(Object(i.a)(Object(i.a)({},a),{},{filteredUsers:t}))}},children:[Object(o.jsx)(b,{}),Object(o.jsx)("div",{className:"employeeData",children:a.filteredUsers.length>0?Object(o.jsx)(h,{}):Object(o.jsx)("div",{})})]})});var v=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(x,{})})};var p=function(e){var t=e.children;return Object(o.jsx)("div",{className:"wrapper",children:t})};a(45);var g=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"Employee Directory"}),Object(o.jsx)("p",{children:"Click on each heading to filter or use the search box to narrow your results"})]})};a(46);var N=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(p,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(v,{})]})})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.a4377ea6.chunk.js.map