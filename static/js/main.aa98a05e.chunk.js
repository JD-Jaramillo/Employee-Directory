(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,s){},26:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s(14),a=s.n(r),c=s(5),i=s(15),l=s(16),o=s(3),h=s(19),d=s(18),u=(s(24),s(0));var j=function(e){return Object(u.jsxs)("header",{className:"jumbotron masthead text-white border",children:[Object(u.jsxs)("h1",{children:[" ",Object(u.jsx)("button",{onClick:e.loadUsers,className:"h1-btn",children:"Employee Directory"})]}),Object(u.jsx)("p",{children:"Click on the name to sort by name or use the search box to narrow your results"})]})};var b=function(e){return console.log("inside table with users",e),Object(u.jsxs)("table",{className:"table table-striped table-bordered table-hover",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Image"}),Object(u.jsx)("th",{onClick:function(t){e.handler()},scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Phone"}),Object(u.jsx)("th",{scope:"col",children:"Email"}),Object(u.jsx)("th",{scope:"col",children:"DOB (Yr-Mo-D)"})]})}),Object(u.jsx)("tbody",{children:e.filteredUsers.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.picture,alt:e.name})}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:Object(u.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(u.jsx)("td",{children:e.dob})]},e.id)}))})]})};s(26);var m=function(e){return Object(u.jsx)("div",{className:"container h-100",children:Object(u.jsx)("div",{className:"search d-flex justify-content-center h-100",children:Object(u.jsx)("div",{className:"searchbar",children:Object(u.jsx)("input",{onChange:e.handleInputChange,value:e.search,className:"search-input",type:"text",name:"search",placeholder:"Search by name",id:"search"})})})})},f=s(17),O=s.n(f),x={users:function(){return O.a.get("https://randomuser.me/api/?inc=name,picture,email,dob,phone,login&nat=us&results=15")}},p=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).loadUsers=function(){x.users().then((function(e){e.data.results.forEach((function(e){e.name="".concat(e.name.first," ").concat(e.name.last),e.dob=e.dob.date.slice(0,10),e.id=e.login.uuid,e.picture=e.picture.thumbnail})),n.setState({users:e.data.results,filteredUsers:e.data.results})}))},n.handleInputChange=function(e){var t=e.target.value.toLowerCase();n.setState({search:t}),n.handleSearch(t)},n.state={search:"",filteredSearch:[],users:[],filteredUsers:[],nameColumnClick:0},n.handler=n.handler.bind(Object(o.a)(n)),n}return Object(l.a)(s,[{key:"componentDidMount",value:function(){this.loadUsers("")}},{key:"handler",value:function(){console.log(this.state.nameColumnClick);var e=this.state.nameColumnClick+1;switch(e){case 1:this.setState({nameColumnClick:e});var t=this.state.users.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));this.setState({filteredUsers:t});break;case 2:this.setState({nameColumnClick:e});var s=this.state.users.sort((function(e,t){return e.name<t.name?1:e.name>t.name?-1:0}));this.setState({filteredUsers:s});break;default:this.setState({filteredUsers:Object(c.a)(this.state.users),nameColumnClick:0})}}},{key:"handleSearch",value:function(e){console.log("value is being received",e);var t=Object(c.a)(this.state.users);if(e.length>0){var s=t.filter((function(t){return t.name.toLowerCase().includes(e)}));console.log("newSearchArr",s),this.setState({filteredUsers:s})}else this.setState({filteredUsers:t})}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{loadUsers:this.loadUsers}),Object(u.jsx)(m,{handleInputChange:this.handleInputChange}),Object(u.jsx)(b,{handler:this.handler,filteredUsers:this.state.filteredUsers})]})}}]),s}(n.Component),v=function(){return Object(u.jsx)(p,{})};s(45);a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.aa98a05e.chunk.js.map