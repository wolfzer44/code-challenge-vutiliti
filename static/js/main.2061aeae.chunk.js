(this["webpackJsonpvutiliti-front"]=this["webpackJsonpvutiliti-front"]||[]).push([[0],{34:function(e,t,a){e.exports=a(66)},57:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=a(33),s=a(15),i=a(10),u=a(4),m=a.n(u),p=a(9),d=a(13),h=a(11),f=a(30),v=a.n(f).a.create({baseURL:"https://codechallenge-vutiliti-backend.herokuapp.com/",headers:{"content-type":"application/json",token:localStorage.token,userid:localStorage.user_id}}),E=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("auth",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("random");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("random",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();a(57);function w(){var e=Object(i.g)(),t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(d.a)(o,2),u=s[0],f=s[1];function v(){return(v=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(a);case 3:n=t.sent,localStorage.isAuthenticated=!0,localStorage.token=n.data.token,localStorage.user_id=n.data.user_id,e.push("/dashboard"),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),l(!0),setTimeout((function(){l(!1)}),2e3),f(t.t0.response.data.message);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"LoginPage"},r.a.createElement("div",{className:"background"}),r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"login"},r.a.createElement("h1",null,"Welcome"),r.a.createElement(h.a,{onSubmit:function(e){return v.apply(this,arguments)},reset:!0},r.a.createElement(h.b,{name:"username",type:"text",placeholder:"username"}),r.a.createElement(h.b,{name:"password",type:"password",placeholder:"password"}),r.a.createElement("button",null,"Enter")),c?r.a.createElement("div",{className:"handle-error"},u):r.a.createElement(r.a.Fragment,null))))}var k=a(16);a(63),a(64);function O(){var e=Object(i.g)(),t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],l=a[1];function o(){return(o=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(t);case 3:a=e.sent,k.a.success(a.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),k.a.error("Something went wrong!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"DashboardPage"},r.a.createElement("div",{className:"header"},r.a.createElement("span",null,"Vutiliti Code Challenge"),r.a.createElement("div",{className:"logout"},r.a.createElement("button",{onClick:function(){return delete localStorage.token,delete localStorage.isAuthenticated,delete localStorage.user_id,void e.push("/login")}},"logout"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"create-timer-container"},r.a.createElement("h1",null,"Create timer"),r.a.createElement(h.a,{onSubmit:function(e){return o.apply(this,arguments)},reset:!0},r.a.createElement("span",null,"Start:"),r.a.createElement(h.b,{name:"start",type:"datetime-local"}),r.a.createElement("span",null,"End:"),r.a.createElement(h.b,{name:"end",type:"datetime-local"}),r.a.createElement("button",null,"create timer"))),r.a.createElement("div",{className:"list-randoms"},r.a.createElement("h1",null,"Randoms"),r.a.createElement("div",{className:"list-randoms__list"},null===c||void 0===c?void 0:c.map((function(e){return r.a.createElement("div",{className:"list__item",key:e.id},r.a.createElement("div",{className:"list__item-average"},r.a.createElement("span",null,"-"|parseInt(e.average))),r.a.createElement("div",{className:"list__item-description"},"average"),r.a.createElement("div",{className:"list__item-id"},r.a.createElement("span",null,"ID: ",e.id)))}))))))}function j(){return r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(i.b,{exact:!0,path:"/login"},r.a.createElement(w,null)),r.a.createElement(x,{path:"/dashboard"},r.a.createElement(O,null))))}function x(e){var t=e.children,a=Object(o.a)(e,["children"]);return r.a.createElement(i.b,Object.assign({},a,{render:function(e){e.location;return localStorage.isAuthenticated?t:r.a.createElement(i.a,{to:{pathname:"/login"}})}}))}k.a.configure();a(65);var y=function(){return r.a.createElement(j,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2061aeae.chunk.js.map