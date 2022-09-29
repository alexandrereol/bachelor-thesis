(function(){"use strict";var e={6517:function(e,a,t){var n=t(9242),r=t(1957),o=t(3396);function i(e,a){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}var s=t(89);const f={},d=(0,s.Z)(f,[["render",i]]);var c=d,l=t(2483);const u={class:"header"},h=(0,o._)("h1",null,"Willkommen in der Lernumgebung zu minimalen Spannbäumen in der Graphentheorie!",-1),p=(0,o._)("p",{class:"aufgabenstellung"},'Auf dieser Platform wirst du drei verschiedene "greedy" (gierige) Algorithmen lernen können, die einen minimalen Spannbaum berechnen. Du wirst die drei Algorithmen in mehreren Aufgaben üben können.',-1),v=(0,o._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1),m=(0,o._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1),b=(0,o._)("h2",null,"Wähle eine der drei Aufgaben um zu starten:",-1),g={class:"taskrow"},w=(0,o._)("button",{class:"taskbtn"},[(0,o._)("h1",null,"Abwärts entfernen")],-1),k=(0,o._)("button",{class:"taskbtn"},[(0,o._)("h1",null,"Aufwärts auswählen"),(0,o.Uk)(),(0,o._)("br")],-1),_=(0,o._)("button",{class:"taskbtn"},[(0,o._)("h1",null,"Farbige Partitionen"),(0,o.Uk)(),(0,o._)("br")],-1),y=(0,o._)("button",{class:"info"}," Information ",-1);function x(e,a,t,n,r,i){const s=(0,o.up)("HomeGraph"),f=(0,o.up)("router-link"),d=(0,o.up)("FooterComp");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",u,[h,p,v,(0,o.Wm)(s,{class:"homegraph"}),m]),b,(0,o._)("div",g,[(0,o.Wm)(f,{to:"about"},{default:(0,o.w5)((()=>[w])),_:1}),(0,o.Wm)(f,{to:"about"},{default:(0,o.w5)((()=>[k])),_:1}),(0,o.Wm)(f,{to:"about"},{default:(0,o.w5)((()=>[_])),_:1})]),(0,o.Wm)(f,{to:"about"},{default:(0,o.w5)((()=>[y])),_:1}),(0,o.Wm)(d)])}const j={class:"footer"},O=(0,o._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1),A=[O];function E(e,a){return(0,o.wg)(),(0,o.iD)("div",j,A)}const F={},H=(0,s.Z)(F,[["render",E]]);var W=H,z=t(4870),C=t(5502),P=(0,o.aZ)({__name:"HomeGraphComp",setup(e){const a=(0,z.iH)(20),t=(0,z.qj)({}),n=(0,z.qj)({});s(a.value,t,n),(0,o.YP)(a,(()=>{s(a.value,t,n)}));const i=(0,z.qj)(r.Kl({view:{panEnabled:!1,zoomEnabled:!1,layoutHandler:new C.y({positionFixedByDrag:!1,positionFixedByClickWithAltKey:!0})},node:{label:{visible:!1}}}));function s(e,a,t){const n=[...Array(e)].map(((e,a)=>a)),r=Object.fromEntries(n.map((e=>[`node${e}`,{}])));Object.keys(a).forEach((e=>delete a[e])),Object.assign(a,r);const o=(e,a)=>[`edge${e}-${a}`,{source:`node${e}`,target:`node${a}`}],i=Object.fromEntries([...n.map((a=>[a,5*Math.floor(a/5)%e])).map((([a,t])=>a===t?[a,(a+5)%e]:[a,t])).map((([e,a])=>o(e,a)))]);Object.keys(t).forEach((e=>delete t[e])),Object.assign(t,i)}return(e,a)=>{const r=(0,o.up)("v-network-graph");return(0,o.wg)(),(0,o.j4)(r,{class:"graph","zoom-level":.5,nodes:t,edges:n,configs:i},null,8,["zoom-level","nodes","edges","configs"])}}});const D=P;var Z=D,B={name:"HomeView",components:{FooterComp:W,HomeGraph:Z}};const $=(0,s.Z)(B,[["render",x]]);var G=$,I=t.p+"img/information-header.f1f4ea75.png",S=t.p+"img/ethz-logo.b77e6bb3.svg",T=t.p+"img/logo_abz_weiss.93909471.png";const q={class:"about"},L=(0,o.uE)('<div class="header" data-v-1d8af85f><h1 data-v-1d8af85f>Impressum</h1><img src="'+I+'" class="largeimg" data-v-1d8af85f><p class="aufgabenstellung" data-v-1d8af85f>Diese Lernplattform basiert auf das Lehrmittel: <i data-v-1d8af85f>Band Algorithmen - 3 Entwurf und Analyse von Algorithmen</i>.</p><p class="aufgabenstellung" data-v-1d8af85f> Diese Platfrom ist als open-source Projekt von Alexandre Reol [<a href="mailto:alexandre@reol.ch" data-v-1d8af85f>alexandre@reol.ch</a>] als Teil der Bachelorarbeit an der ETH Zürich entwickelt worden. Source code: <a href="https://github.com/alexandrereol/bsc-ts" data-v-1d8af85f>github.com/alexandrereol/bsc-ts</a></p><hr style="max-width:1100px;background-color:black;height:1px;border:none;" data-v-1d8af85f></div><div data-v-1d8af85f> Home icon by <a href="https://www.freepik.com" title="Freepik" data-v-1d8af85f>Freepik</a> and <a href="https://www.flaticon.com/authors/vignesh-oviyan" title="Vignesh Oviyan" data-v-1d8af85f>Vignesh Oviyan</a> , respectively from <a href="https://www.flaticon.com/" data-v-1d8af85f>www.flaticon.com</a></div><div data-v-1d8af85f> Help and check icon by <a href="https://freeicons.io/profile/726" data-v-1d8af85f>Free Preloaders</a> and <a href="https://freeicons.io/profile/714" data-v-1d8af85f>Raj Dev</a> respectively on <a href="https://freeicons.io" data-v-1d8af85f>freeicons.io</a></div><div data-v-1d8af85f> Info, go back, refresh and skip icon by <a href="https://freeicons.io/profile/3" data-v-1d8af85f>icon king1</a> , on <a href="https://freeicons.io" data-v-1d8af85f>freeicons.io</a></div><br data-v-1d8af85f><br data-v-1d8af85f><br data-v-1d8af85f>',7),U=(0,o.uE)('<div id="links" data-v-1d8af85f><div data-v-1d8af85f><a href="https://ethz.ch/" data-v-1d8af85f><img src="'+S+'" draggable="false" style="height:40px;left:50%;" data-v-1d8af85f></a></div><div data-v-1d8af85f><a href="https://abz.inf.ethz.ch/" data-v-1d8af85f><img src="'+T+'" draggable="false" style="height:60px;" data-v-1d8af85f></a></div></div>',1);function V(e,a,t,n,r,i){const s=(0,o.up)("BackHomepageComp"),f=(0,o.up)("FooterComp");return(0,o.wg)(),(0,o.iD)("div",q,[L,(0,o.Wm)(s),(0,o.Wm)(f),U])}var K=t.p+"img/home.73cf819f.png";const M=(0,o._)("button",{class:"back_to_homepage"},[(0,o._)("img",{src:K,style:{height:"40px",width:"40px"}}),(0,o._)("br"),(0,o.Uk)(" Startseite ")],-1);function R(e,a){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(t,{to:"/"},{default:(0,o.w5)((()=>[M])),_:1})}const Y={},J=(0,s.Z)(Y,[["render",R]]);var N=J,Q={components:{BackHomepageComp:N,FooterComp:W}};const X=(0,s.Z)(Q,[["render",V],["__scopeId","data-v-1d8af85f"]]);var ee=X;const ae=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:ee}],te=(0,l.p7)({history:(0,l.r5)(),routes:ae});var ne=te;const re=(0,n.ri)(c);re.use(ne),re.use(r.ZP),re.mount("#app")}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var o=a[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,n,r,o){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,f=0;f<n.length;f++)(!1&o||i>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[f])}))?n.splice(f--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var d=r();void 0!==d&&(a=d)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var r,o,i=n[0],s=n[1],f=n[2],d=0;if(i.some((function(a){return 0!==e[a]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(f)var c=f(t)}for(a&&a(n);d<i.length;d++)o=i[d],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},n=self["webpackChunkbsc_ts"]=self["webpackChunkbsc_ts"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6517)}));n=t.O(n)})();
//# sourceMappingURL=app.2742b4f9.js.map