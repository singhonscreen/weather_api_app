(this.webpackJsonpweathertemperature=this.webpackJsonpweathertemperature||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(5),r=c.n(s),i=(c(11),c(3)),j=c.n(i),l=c(6),d=c(4),h=c(0),b=function(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("Ambah"),r=Object(d.a)(s,2),i=r[0],b=r[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&APPID=230ac2bd77b3b2471fcca16f13beb4a8"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,n(a.main),console.log(a.main);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"box",children:Object(h.jsxs)("div",{className:"main",children:[Object(h.jsxs)("div",{className:"inp",children:[Object(h.jsx)("p",{children:"Please Enter your city Name"}),Object(h.jsx)("input",{type:"search",placeholder:i,onChange:function(e){b(e.target.value)}})]}),c?Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"showdata",children:Object(h.jsxs)("h2",{className:"icon",children:[Object(h.jsx)("i",{className:"fas fa-street-view"}),i," "]})}),Object(h.jsx)("div",{className:"showData",children:Object(h.jsxs)("h3",{children:[" ",c.temp,"\xb0C "]})}),Object(h.jsxs)("div",{className:"para",children:[Object(h.jsxs)("p",{children:["Min temp ",c.temp_min,"\xb0C and max temp ",c.temp_max,"\xb0C   "]}),Object(h.jsxs)("p",{children:["Humidity ",c.humidity]}),Object(h.jsxs)("p",{children:["Feel like ",c.feels_like]})]})]}):Object(h.jsx)("p",{children:"City not found"})]})})})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dd7b1ee0.chunk.js.map