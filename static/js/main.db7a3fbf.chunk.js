(this["webpackJsonpcodeverse.pl"]=this["webpackJsonpcodeverse.pl"]||[]).push([[0],{10:function(e,n,t){e.exports=t.p+"static/media/main_bg.a351e03e.jpg"},15:function(e,n,t){e.exports=t(27)},20:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(9),c=t.n(o),i=(t(20),t(7)),s=t(1),u=t(2),l=t(10),d=t.n(l);function m(){var e=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateY(0);\n  width: 100vw;\n  height: 100vh;\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: transform 0.5s ease-out;\n  &.active {\n    transform: translateY(-100%);\n  }\n"]);return m=function(){return e},e}var v=u.a.header(m(),d.a),f=function(){return r.a.createElement(v,{className:"header"})};function h(){var e=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateY(100%);\n  width: 100vw;\n  height: 100vh;\n  background-color: pink;\n  transition: transform 0.5s ease-out;\n  &.active {\n    transform: translateY(0);\n  }\n"]);return h=function(){return e},e}var w=u.a.main(h()),b=function(){return r.a.createElement(w,{className:"main"})},p=t(6),g=t.n(p),E=function(){Object(a.useEffect)((function(){console.log(window.deltaY)}));var e=Object(a.useState)(),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(),s=Object(i.a)(c,2),u=s[0],l=s[1];return Object(a.useEffect)((function(){window.addEventListener("wheel",g()((function(e){e.deltaY>0?(document.querySelector("header").classList.add("active"),document.querySelector("main").classList.add("active")):(document.querySelector("header").classList.remove("active"),document.querySelector("main").classList.remove("active"))}),200))}),[]),Object(a.useEffect)(g()((function(){window.addEventListener("touchstart",(function(e){l(e.changedTouches[0].clientY)})),window.addEventListener("touchend",(function(e){o(e.changedTouches[0].clientY)})),u>t?(document.querySelector("header").classList.add("active"),document.querySelector("main").classList.add("active")):(document.querySelector("header").classList.remove("active"),document.querySelector("main").classList.remove("active"))}),350),[t,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(b,null))},L=function(){return r.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.db7a3fbf.chunk.js.map