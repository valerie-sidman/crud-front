(this["webpackJsonpstore-func"]=this["webpackJsonpstore-func"]||[]).push([[0],{24:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),a=n(17),r=n.n(a),o=(n(24),n(3)),i=n(2),d=n(11),u=n.n(d),b=n(18),l=n(6),j=Object(c.createContext)([]),h=n(1);function f(t){var e=Object(c.useState)([]),n=Object(l.a)(e,2),s=n[0],a=n[1],r=function(){var t=Object(b.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://valerie-sidman-crud-back.herokuapp.com/posts",{method:"GET"});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a(n),console.log("\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u043b\u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435");case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(h.jsx)(j.Provider,{value:{cards:s,update:r},children:t.children})}var m=n(8),p=n.n(m);function O(t){return Object(h.jsxs)(o.b,{to:"/posts/".concat(t.id),className:"list-group-item list-group-item-action","aria-current":"true",children:[Object(h.jsx)("div",{className:"d-flex w-100 justify-content-between",children:Object(h.jsxs)("h5",{className:"mb-1",children:["ID:",t.id]})}),Object(h.jsxs)("p",{className:"mb-1",children:["Content: ",t.content]}),Object(h.jsxs)("small",{children:["Created: ",p()(new Date(t.created)).fromNow()]})]})}function x(){var t=Object(c.useContext)(j);return Object(h.jsxs)("div",{className:"cardlist-container",children:[Object(h.jsx)(o.b,{to:"/posts/new",children:Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",children:"New card"})}),Object(h.jsx)("div",{className:"list-group",children:t.cards.map((function(t){return Object(h.jsx)(O,{id:t.id,created:t.created,content:t.content},t.id)}))})]})}function v(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],s=e[1],a=Object(i.f)(),r=Object(c.useContext)(j);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"newcard-field",className:"form-label",children:"What's new?"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"newcard-field",value:n,onChange:function(t){s(t.target.value)}})]}),Object(h.jsx)("button",{className:"btn btn-success",onClick:function(){fetch("https://valerie-sidman-crud-back.herokuapp.com/posts",{method:"POST",body:JSON.stringify({id:0,content:n}),headers:{"Content-Type":"application/json"}}).then((function(){return console.log("\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440")})).then((function(){return r.update()})).then((function(){return a.push("/")}))},children:"Add"}),Object(h.jsx)(o.b,{to:"/",className:"btn btn-secondary",children:"Return"})]})}function N(t){var e=t.match,n=Object(c.useState)({}),s=Object(l.a)(n,2),a=s[0],r=s[1],d=Object(c.useContext)(j),u=Object(i.f)();Object(c.useEffect)((function(){var t=e.params.id?d.cards.find((function(t){return t.id===Number(e.params.id)})):alert("ID not found");t&&r(t)}),[d,e.params.id]);return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsxs)("div",{className:"card-header",children:["Created: ",p()(new Date(a.created)).fromNow()]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("h5",{className:"card-title",children:["ID: ",a.id]}),Object(h.jsxs)("p",{className:"card-text",children:["Content: ",a.content]}),Object(h.jsx)(o.b,{to:"/posts/".concat(a.id,"/edit"),className:"btn btn-warning",children:"Edit"}),Object(h.jsx)("button",{className:"btn btn-danger",onClick:function(){fetch("https://valerie-sidman-crud-back.herokuapp.com/posts/".concat(a.id),{method:"DELETE"}).then((function(){return console.log("\u0423\u0434\u0430\u043b\u0438\u043b\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443")})).then((function(){return d.update()})).then((function(){return u.push("/")}))},children:"Delete"}),Object(h.jsx)(o.b,{to:"/",className:"btn btn-secondary",children:"Return"})]})]})}var g=n(14);function C(t){var e=t.match,n=Object(c.useState)({}),s=Object(l.a)(n,2),a=s[0],r=s[1],d=Object(c.useContext)(j),u=Object(i.f)();Object(c.useEffect)((function(){var t=e.params.id?d.cards.find((function(t){return t.id===Number(e.params.id)})):alert("ID not found");t?r(t):alert("Card not found")}),[d,e.params.id]);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{htmlFor:"content-field",className:"form-label",children:"Edit your card"}),Object(h.jsx)("input",{type:"text",className:"form-control",value:a.content||"",id:"content-field",onChange:function(t){r((function(e){return Object(g.a)(Object(g.a)({},e),{},{content:t.target.value})}))}})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-info",onClick:function(){fetch("https://valerie-sidman-crud-back.herokuapp.com/posts",{method:"POST",body:JSON.stringify({id:a.id,content:a.content}),headers:{"Content-Type":"application/json"}}).then((function(){return console.log("\u0418\u0437\u043c\u0435\u043d\u0438\u043b\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440")})).then((function(){return d.update()})).then((function(){return u.push("/")}))},children:"Confirm"}),Object(h.jsx)(o.b,{to:"/posts/".concat(a.id),className:"btn btn-secondary",children:"Return"})]})}function y(){return Object(h.jsx)(f,{children:Object(h.jsx)(o.a,{children:Object(h.jsx)("div",{className:"board-container",children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{path:"/posts/:id([0-9]+)?/edit",component:C}),Object(h.jsx)(i.a,{path:"/posts/new",component:v}),Object(h.jsx)(i.a,{path:"/posts/:id([0-9]+)?",component:N}),Object(h.jsx)(i.a,{path:"/",component:x})]})})})})}function w(){return Object(h.jsx)(y,{})}var k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),a(t),r(t)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),k()}},[[33,1,2]]]);
//# sourceMappingURL=main.7e3a91e4.chunk.js.map