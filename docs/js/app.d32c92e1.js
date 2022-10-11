(function(){var e={6943:function(e,n,t){"use strict";var o=t(9242),r=t(1957),a=t(3396);function i(e,n){const t=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(t)}var l=t(89);const s={},c=(0,l.Z)(s,[["render",i]]);var d=c,u=t(2483);const g={class:"header"},h=(0,a._)("h1",null,"Willkommen in der Lernumgebung zu minimalen Spannbäumen in der Graphentheorie!",-1),f=(0,a._)("p",{class:"aufgabenstellung"},'Auf dieser Platform wirst du drei verschiedene "greedy" (gierige) Algorithmen lernen können, die einen minimalen Spannbaum berechnen. Du wirst die drei Algorithmen in mehreren Aufgaben üben können.',-1),p=(0,a._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1),m=(0,a._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1),v=(0,a._)("h2",null,"Wähle eine der drei Aufgaben um zu starten:",-1),b={class:"taskrow"},w=(0,a._)("button",{class:"taskbtn"},[(0,a._)("h1",null,"Abwärts entfernen")],-1),k=(0,a._)("button",{class:"taskbtn"},[(0,a._)("h1",null,"Aufwärts auswählen"),(0,a.Uk)(),(0,a._)("br")],-1),A=(0,a._)("button",{class:"taskbtn"},[(0,a._)("h1",null,"Farbige Partitionen"),(0,a.Uk)(),(0,a._)("br")],-1),y=(0,a._)("button",{class:"info"}," Information ",-1);function x(e,n,t,o,r,i){const l=(0,a.up)("HomeGraph"),s=(0,a.up)("router-link"),c=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",g,[h,f,p,(0,a.Wm)(l,{class:"homegraph"}),m]),v,(0,a._)("div",b,[(0,a.Wm)(s,{to:"ex/descending"},{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(s,{to:"ex/ascending"},{default:(0,a.w5)((()=>[k])),_:1}),(0,a.Wm)(s,{to:"about"},{default:(0,a.w5)((()=>[A])),_:1})]),(0,a.Wm)(s,{to:"about"},{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)(c)])}const _={class:"footer"},D=(0,a._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1),C=[D];function S(e,n){return(0,a.wg)(),(0,a.iD)("div",_,C)}const E={},O=(0,l.Z)(E,[["render",S]]);var U=O,G=t(4870),K=t(5502),W=(0,a.aZ)({__name:"HomeGraphComp",setup(e){const n=(0,G.iH)(20),t=(0,G.qj)({}),o=(0,G.qj)({});l(n.value,t,o),(0,a.YP)(n,(()=>{l(n.value,t,o)}));const i=(0,G.qj)(r.Kl({view:{panEnabled:!1,zoomEnabled:!1,layoutHandler:new K.y({positionFixedByDrag:!1,positionFixedByClickWithAltKey:!0})},node:{label:{visible:!1}}}));function l(e,n,t){const o=[...Array(e)].map(((e,n)=>n)),r=Object.fromEntries(o.map((e=>[`node${e}`,{}])));Object.keys(n).forEach((e=>delete n[e])),Object.assign(n,r);const a=(e,n)=>[`edge${e}-${n}`,{source:`node${e}`,target:`node${n}`}],i=Object.fromEntries([...o.map((n=>[n,5*Math.floor(n/5)%e])).map((([n,t])=>n===t?[n,(n+5)%e]:[n,t])).map((([e,n])=>a(e,n)))]);Object.keys(t).forEach((e=>delete t[e])),Object.assign(t,i)}return(e,n)=>{const r=(0,a.up)("v-network-graph");return(0,a.wg)(),(0,a.j4)(r,{class:"graph","zoom-level":.5,nodes:t,edges:o,configs:i},null,8,["zoom-level","nodes","edges","configs"])}}});const j=W;var H=j,z={name:"HomeView",components:{FooterComp:U,HomeGraph:H}};const F=(0,l.Z)(z,[["render",x]]);var B=F,Z=t.p+"img/information-header.f1f4ea75.png",N=t.p+"img/ethz-logo.b77e6bb3.svg",V=t.p+"img/logo_abz_weiss.93909471.png";const M={class:"about"},P=(0,a.uE)('<div class="header" data-v-1912fb73><h1 data-v-1912fb73>Impressum</h1><img src="'+Z+'" class="largeimg" data-v-1912fb73><p class="aufgabenstellung" data-v-1912fb73>Diese Lernplattform basiert auf das Lehrmittel: <i data-v-1912fb73>Band Algorithmen - 3 Entwurf und Analyse von Algorithmen</i>.</p><p class="aufgabenstellung" data-v-1912fb73> Diese Plattform ist als open-source Projekt von Alexandre Reol [<a href="mailto:alexandre@reol.ch" data-v-1912fb73>alexandre@reol.ch</a>] als Teil der Bachelorarbeit an der ETH Zürich entwickelt worden. Source code: <a href="https://github.com/alexandrereol/bachelor-thesis" data-v-1912fb73>github.com/alexandrereol/bachelor-thesis</a></p><hr style="max-width:1100px;background-color:black;height:1px;border:none;" data-v-1912fb73></div><div data-v-1912fb73> Home icon by <a href="https://www.freepik.com" title="Freepik" data-v-1912fb73>Freepik</a> and <a href="https://www.flaticon.com/authors/vignesh-oviyan" title="Vignesh Oviyan" data-v-1912fb73>Vignesh Oviyan</a> , respectively from <a href="https://www.flaticon.com/" data-v-1912fb73>www.flaticon.com</a></div><div data-v-1912fb73> Help and check icon by <a href="https://freeicons.io/profile/726" data-v-1912fb73>Free Preloaders</a> and <a href="https://freeicons.io/profile/714" data-v-1912fb73>Raj Dev</a> respectively on <a href="https://freeicons.io" data-v-1912fb73>freeicons.io</a></div><div data-v-1912fb73> Info, go back, refresh and skip icon by <a href="https://freeicons.io/profile/3" data-v-1912fb73>icon king1</a> , on <a href="https://freeicons.io" data-v-1912fb73>freeicons.io</a></div><br data-v-1912fb73><br data-v-1912fb73><br data-v-1912fb73>',7),q=(0,a.uE)('<div id="links" data-v-1912fb73><div data-v-1912fb73><a href="https://ethz.ch/" data-v-1912fb73><img src="'+N+'" draggable="false" style="height:40px;left:50%;" data-v-1912fb73></a></div><div data-v-1912fb73><a href="https://abz.inf.ethz.ch/" data-v-1912fb73><img src="'+V+'" draggable="false" style="height:60px;" data-v-1912fb73></a></div></div>',1);function T(e,n,t,o,r,i){const l=(0,a.up)("BackHomepageComp"),s=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",M,[P,(0,a.Wm)(l),(0,a.Wm)(s),q])}var I=t.p+"img/home.73cf819f.png";const R=(0,a._)("button",{class:"back_to_homepage"},[(0,a._)("img",{src:I,style:{height:"40px",width:"40px"}}),(0,a._)("br"),(0,a.Uk)(" Startseite ")],-1);function J(e,n){const t=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(t,{to:"/"},{default:(0,a.w5)((()=>[R])),_:1})}const Q={},Y=(0,l.Z)(Q,[["render",J]]);var X=Y,L={components:{BackHomepageComp:X,FooterComp:U}};const $=(0,l.Z)(L,[["render",T],["__scopeId","data-v-1912fb73"]]);var ee=$;function ne(e,n,t,o,r,i){const l=(0,a.up)("HeaderComp"),s=(0,a.up)("ExerciseDescendingGraph"),c=(0,a.up)("VerifierComp"),d=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l,{title:"Minimaler Spannbaum berechnen 1",taskdescription:"Deine Aufgabe ist es die teuerste Kanten aus dem Graphen zu entfernen. Wähle jeweils eine Kante aus und entferne sie aus dem Graphen mit dem Knopf unter dem Graphen. Achte darauf, dass der Graph immer noch verbunden ist und im minimalen Spannbaum keine Kreise bleiben."},null,8,["taskdescription"]),(0,a.Wm)(s),this.submitted?((0,a.wg)(),(0,a.j4)(c,{key:0,correctSolution:this.result,tip:"",onCloseVerifier:n[0]||(n[0]=e=>this.submitted=!1)},null,8,["correctSolution"])):(0,a.kq)("",!0),(0,a.Wm)(d)])}var te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACz0lEQVR4nO2azW7TQBRGz3ULwt3Z40pI8DCsYcOKVhDatFKhsOFRWFFU1B/oDxKUBQ/AO7DkAQiwyUyWEYjmsmgjEtcJSepUHTNn5Uzkq/mOZ8YzSiAQCAQCgUAgELiUJFl2JzXmR2pMKzGmVnb9mbILls1cHH8CbgDXBO7Gcfyt3W5/Lqt+VFahKXK95zpC5FWapqtlFfdBQJ4Ika0ky9bLKeYnIqobZUjwVQCUJMFHAZ2eaxHVF2markxazDsBAnXgd09ThMh2kmWPJ6nnnYA4jj+gep9+CSKqLyeR4J0AAOfcUVkSvBQAQyVsGGOWR63jrQAYKCFS2BlVwmwyP39bOp1N4OZUejllnHNHSZZdEdU9/m7tuxLUWrs37P7I5/BdWs3mWxVZBo57mrsSlobdG+F5+C6tZvOwYDrMKOwOmw5erwF5nHPvUX1A8ZpQOBIkNUb7ilgr0+zkRZCm6T1EDoHZnuZjgdX8mlCpEdDldCTUODsdzoyESgoAcM69G0VCZQXAPyU8hIquAXmMMUsKu/Q/8GNUFyo9ArpYa/cEVuk/Ss8g8vy/EACgqkVZdbagsXIYY+oKW+SmgMCzygs4Db9NLrxC3Vn7sdJTIMmyxaInr1BvWXsAFX4NJlm2KKoH9P/40xceKipg1PDQv1cGIL8vuGzMxfFco9FoD/r+NPw+ufACKy4XHgoE+EyapguchM8fglastftF90RA40J6N2USY2pFJ0CF+qDwAJF2Oo+Ar1Pv4RRJjKkJvGaEOZ/n0u/7U2N+Ale7n/NrwDhn/yK8fgucNzx4LGBA+M444cFTAWWFBw8FtNvtYeHfjFvPu0WQkzN974ObODx4OAIoMXy+mG+oijw9T3jwV4CqyJNWs7l53kI+ngU6qK61rN0po5gPI+B7z3UH1TXnXCnhwYN/isZx/AWRWwK/VGS9NeZ7PhAIBAKBQCAQKOYPmu5CspmP/AcAAAAASUVORK5CYII=";const oe={node0:{name:"Node 0"},node1:{name:"Node 1"},node2:{name:"Node 2"},node3:{name:"Node 3"},node4:{name:"Node 4"},node5:{name:"Node 5"},node6:{name:"Node 6"},node7:{name:"Node 7"}};let re=Array.from({length:13},(()=>Math.floor(20*Math.random())+1));const ae=!1;ae&&(re=[20,19,5,14,5,5,16,6,14,13,10,20,19]);const ie=Array.from({length:8},(()=>Array.from({length:8},(()=>!1))));function le(e,n){return ie[e][n]?"red":"blue"}const se={edge1:{source:"node0",target:"node1",label:re[0].toString(),color:le(0,1)},edge2:{source:"node1",target:"node2",label:re[1].toString(),color:le(1,2)},edge3:{source:"node3",target:"node4",label:re[2].toString(),color:le(3,4)},edge4:{source:"node5",target:"node6",label:re[3].toString(),color:le(5,6)},edge5:{source:"node6",target:"node7",label:re[4].toString(),color:le(6,7)},edge6:{source:"node0",target:"node3",label:re[5].toString(),color:le(0,3)},edge7:{source:"node1",target:"node3",label:re[6].toString(),color:le(1,3)},edge8:{source:"node1",target:"node4",label:re[7].toString(),color:le(1,4)},edge9:{source:"node2",target:"node4",label:re[8].toString(),color:le(2,4)},edge10:{source:"node3",target:"node5",label:re[9].toString(),color:le(3,5)},edge11:{source:"node3",target:"node6",label:re[10].toString(),color:le(3,6)},edge12:{source:"node4",target:"node6",label:re[11].toString(),color:le(4,6)},edge13:{source:"node4",target:"node7",label:re[12].toString(),color:le(4,7)}},ce=1,de=2,ue={nodes:{node0:{x:-400*ce,y:200*de},node1:{x:0*ce,y:200*de},node2:{x:400*ce,y:200*de},node3:{x:-200*ce,y:100*de},node4:{x:200*ce,y:100*de},node5:{x:-400*ce,y:0*de},node6:{x:0*ce,y:0*de},node7:{x:400*ce,y:0*de}}},ge=(0,G.qj)(r.Kl({view:{panEnabled:!1,zoomEnabled:!1},node:{draggable:!1,label:{visible:!1}},edge:{selectable:1,label:{fontSize:20},normal:{color:e=>le(+e.source.replace("node",""),+e.target.replace("node","")),width:6}}}));var he={nodes:oe,edges:se,edgesWeight:re,customColor:ie,layouts:ue,configs:ge},fe=t(7139);const pe=e=>((0,a.dD)("data-v-60ab0c38"),e=e(),(0,a.Cn)(),e),me={class:"modal-wrapper"},ve={class:"modal-header"},be={key:0,class:"title"},we={key:1,class:"title"},ke={class:"flex-item flex-center flex-space-between flex-col"},Ae={class:"flex-item flex-center flex-space-between flex-row"},ye=["src"],xe=["src"],_e=pe((()=>(0,a._)("hr",null,null,-1))),De={key:0};function Ce(e,n,r,i,l,s){return(0,a.wg)(),(0,a.iD)("div",{id:"tutorial-wrapper",class:"modal-mask",onMousedown:n[2]||(n[2]=(0,o.iM)((n=>{e.showSolution=!1,e.$emit("close-verifier")}),["stop"]))},[(0,a._)("div",me,[(0,a._)("div",{class:"modal-container",onMousedown:n[1]||(n[1]=(0,o.iM)((()=>{}),["stop"]))},[(0,a._)("div",ve,[e.correctSolution?((0,a.wg)(),(0,a.iD)("p",be,"Das ist richtig!")):((0,a.wg)(),(0,a.iD)("p",we,"Das ist leider nicht richtig!")),(0,a._)("button",{class:"exit-button",onClick:n[0]||(n[0]=n=>e.$emit("close-verifier"))}," × ")]),(0,a._)("div",ke,[(0,a._)("div",Ae,[e.correctSolution?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"corr_img",src:t(8329),draggable:"false"},null,8,ye)):((0,a.wg)(),(0,a.iD)("img",{key:1,class:"corr_img",src:t(4519),draggable:"false"},null,8,xe))]),_e,e.correctSolution?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",De,(0,fe.zw)(e.tip),1))])],32)])],32)}var Se=(0,a.aZ)({name:"VerifierComp",props:["correctSolution","tip"],created:function(){console.log("Verifier activated")},methods:{reloadPage(){location.reload()}}});const Ee=(0,l.Z)(Se,[["render",Ce],["__scopeId","data-v-60ab0c38"]]);var Oe=Ee;const Ue=e=>((0,a.dD)("data-v-8532b7ac"),e=e(),(0,a.Cn)(),e),Ge=Ue((()=>(0,a._)("img",{src:te,class:"icon"},null,-1))),Ke=Ue((()=>(0,a._)("br",null,null,-1))),We=(0,a.Uk)(" Kante entfernen "),je=[Ge,Ke,We];var He=(0,a.aZ)({__name:"ExerciseDescendingGraph",setup(e){const n=(0,G.qj)({...he.nodes}),t=(0,G.qj)({...he.edges}),o=(0,G.iH)([]),r=he.edgesWeight,i=[],l=!0,s=(0,G.iH)(!1),c=(0,G.iH)(!1),d=(0,G.iH)("nothing..?");function u(e){const n=r.filter((e=>i.indexOf(e)<0));return Math.max.apply(null,n)}const g=[[0,r[0],0,r[5],0,0,0,0],[r[0],0,r[1],r[6],r[7],0,0,0],[0,r[1],0,0,r[8],0,0,0],[r[5],r[6],0,0,r[2],r[9],r[10],0],[0,r[7],r[8],r[2],0,0,r[11],r[12]],[0,0,0,r[9],0,0,r[3],0],[0,0,0,r[10],r[11],r[3],0,r[4]],[0,0,0,0,r[12],0,r[4],0]];let h=Array.from({length:8},(()=>!1));function f(e,n){for(let t=0;t<e.length;t++)e[n][t]>0&&!1===h[t]&&(h[t]=!0,f(e,t));return!h.includes(!1)}function p(e,n){if(g[e][n]<0)return!1;h=Array.from({length:8},(()=>!1));var t=JSON.parse(JSON.stringify(g));return t[e][n]=0,t[n][e]=0,!f(t,0)}function m(){if(0===o.value.length)return s.value=!0,c.value=!1,void(d.value="Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.");for(const e of o.value){const n=+t[e].source.replace("node",""),o=+t[e].target.replace("node",""),a=+t[e].label,i=u(r);if(l&&(console.log("[DEBUG] edge weight: "+a),console.log("[DEBUG] maximum edge in graph: "+i),console.log("[DEBUG] source node: "+n),console.log("[DEBUG] target node: "+o)),p(n,o))return l&&console.log("[DEBUG] edge would split graph"),console.log("WRONG; Graph would be divided:"+h),s.value=!0,c.value=!1,void(d.value="Dies scheint nicht richtig zu sein, da die Kante zwischen den beiden Knoten einen Teil des Graphen teilen würde.");if(a!==i)return l&&console.log("[DEBUG] edge weight is not the maximum edge in graph"),console.log("WRONG; Edge is not the maximum edge in graph s.t. graph stays connected"),s.value=!0,c.value=!1,void(d.value="Dies scheint nicht richtig zu sein, da die Kante nicht die größte Kante im Graphen ist.");if(g[n][o]=0,g[o][n]=0,a===i){const n=r.indexOf(a);r.splice(n,1),delete t[e],7===r.length&&(console.log("CORRECT; the m.s.t. has the following edges"+r),s.value=!0,c.value=!0,d.value="Alles korrekt! Du hast alle Kanten des minimalen Spannbaumes gefunden!")}}for(let e=0;e<g.length;e++)for(let n=0;n<g.length;n++)g[e][n]>0&&(i.includes(g[e][n])&&i.splice(i.indexOf(g[e][n]),1),p(e,n)&&g[e][n]===u(r)&&i.push(g[e][n]))}return(e,r)=>{const i=(0,a.up)("v-edge-label"),l=(0,a.up)("v-network-graph");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l,{class:"graph",nodes:n,edges:t,layouts:(0,G.SU)(he).layouts,configs:(0,G.SU)(he).configs,"selected-edges":o.value,"onUpdate:selected-edges":r[0]||(r[0]=e=>o.value=e)},{"edge-label":(0,a.w5)((({edge:e,...n})=>[(0,a.Wm)(i,(0,a.dG)({text:e.label,"text-align":"center","vertical-align":"center"},n),null,16,["text"])])),_:1},8,["nodes","edges","layouts","configs","selected-edges"]),s.value?((0,a.wg)(),(0,a.j4)(Oe,{key:0,correctSolution:c.value,tip:d.value,onCloseVerifier:r[1]||(r[1]=e=>s.value=!1)},null,8,["correctSolution","tip"])):(0,a.kq)("",!0),(0,a._)("button",{onClick:m,class:"next_task"},je)],64)}}});const ze=(0,l.Z)(He,[["__scopeId","data-v-8532b7ac"]]);var Fe=ze;const Be={class:"header"},Ze=(0,a._)("button",{class:"back_to_homepage"},[(0,a._)("img",{src:I,style:{height:"40px",width:"50px"}}),(0,a._)("br"),(0,a.Uk)(" Startseite ")],-1),Ne={class:"aufgabenstellung"},Ve=(0,a._)("span",{style:{"font-size":"25px","font-weight":"bold"}},null,-1),Me=(0,a._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1);function Pe(e,n,t,o,r,i){const l=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",Be,[(0,a._)("h1",null,(0,fe.zw)(t.title),1),(0,a.Wm)(l,{to:"/"},{default:(0,a.w5)((()=>[Ze])),_:1}),(0,a._)("p",Ne,[(0,a.Uk)((0,fe.zw)(t.taskdescription)+" ",1),Ve]),Me])])}var qe={props:["title","taskdescription"]};const Te=(0,l.Z)(qe,[["render",Pe]]);var Ie=Te;(0,a.aZ)({name:"TutorialComp",data(){return{}},props:["video_name","description"],created:function(){console.log("Tutorial activated")},methods:{reloadPage(){location.reload()},getSrc(){return t(4081)(`./${this.video_name}.mp4`)}}});var Re={components:{ExerciseDescendingGraph:Fe,VerifierComp:Oe,HeaderComp:Ie,FooterComp:U},data(){return{tutorialActive:!1,hint:!1}},methods:{reloadPage(){this.$router.go(0)},showTutorial(){this.tutorialActive=!0},showHint(){this.hint=!0},removeHint(){this.hint=!1}}};const Je=(0,l.Z)(Re,[["render",ne]]);var Qe=Je;function Ye(e,n,t,o,r,i){const l=(0,a.up)("HeaderComp"),s=(0,a.up)("ExerciseAscendingGraph"),c=(0,a.up)("VerifierComp"),d=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l,{title:"Minimaler Spannbaum berechnen 2",taskdescription:"Deine Aufgabe ist es die preiswertigste Kante auszuwählen und sie dem minimalen Spannbaum hinzuzufügen. Dies kannst du machen, indem du den Knopf unter der Graphen klickst. Es kann manchmal sein, dass mehrere Kanten das (gleiche) preiswertigste Gewicht haben, dann kannst du irgendeine Kante wählen! Achte ebenfalls dass in deinem minimalen Spannbaum keine Kreise gebildet werden."},null,8,["taskdescription"]),(0,a.Wm)(s),this.submitted?((0,a.wg)(),(0,a.j4)(c,{key:0,correctSolution:this.result,tip:"",onCloseVerifier:n[0]||(n[0]=e=>this.submitted=!1)},null,8,["correctSolution"])):(0,a.kq)("",!0),(0,a.Wm)(d)])}const Xe=e=>((0,a.dD)("data-v-21558246"),e=e(),(0,a.Cn)(),e),Le=Xe((()=>(0,a._)("img",{src:te,class:"icon"},null,-1))),$e=Xe((()=>(0,a._)("br",null,null,-1))),en=(0,a.Uk)(" Kante färben "),nn=[Le,$e,en];var tn=(0,a.aZ)({__name:"ExerciseAscendingGraph",setup(e){const n=(0,G.qj)({...he.nodes}),t=(0,G.qj)({...he.edges}),o=(0,G.qj)({...he.customColor}),r=(0,G.iH)([]),i=he.edgesWeight,l=!0,s=(0,G.iH)(!1),c=(0,G.iH)(!1),d=(0,G.iH)("nothing..?"),u=[[0,i[0],0,i[5],0,0,0,0],[i[0],0,i[1],i[6],i[7],0,0,0],[0,i[1],0,0,i[8],0,0,0],[i[5],i[6],0,0,i[2],i[9],i[10],0],[0,i[7],i[8],i[2],0,0,i[11],i[12]],[0,0,0,i[9],0,0,i[3],0],[0,0,0,i[10],i[11],i[3],0,i[4]],[0,0,0,0,i[12],0,i[4],0]];function g(e,n){for(let t=0;t<e.length;t++)e[n][t]>0&&!1===v[t]&&(v[t]=!0,g(e,t));return!v.includes(!1)}const h=[];function f(e){const n=i.filter((e=>h.indexOf(e)<0));return Math.min.apply(null,n)}const p=Array.from({length:8},(()=>Array.from({length:8},(()=>0))));function m(e,n,t){b=!1;var o=JSON.parse(JSON.stringify(e));o[n][t]=1,o[t][n]=1;for(var r=0;r<e.length;r++)for(var a=r;a<e.length;a++)o[r][a]=0;l&&console.log("tempMatrix",o);for(let i=0;i<e.length;i++)v=Array.from({length:8},(()=>!1)),w(o,i);return b}let v=Array.from({length:8},(()=>!1)),b=!1;function w(e,n){for(let t=0;t<e.length;t++)if(e[n][t]>0){if(v[t])return console.log("flag set for souce/i: "+n+"/"+t),void(b=!0);v[t]=!0,w(e,t)}}function k(){if(0===r.value.length)return s.value=!0,c.value=!1,void(d.value="Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.");for(const e of r.value){r.value=[];const n=+t[e].source.replace("node",""),a=+t[e].target.replace("node",""),b=+t[e].label;l&&(console.log("[DEBUG] edge weight: "+b),console.log("[DEBUG] source node: "+n),console.log("[DEBUG] target node: "+a));const w=f(i);if(l&&(console.log(""),console.log("[DEBUG] minimum edge in graph: "+w),console.log("[DEBUG] selected edge in graph: "+b),console.log("[DEBUG] condition 1 satisfied: "+(b===w))),b!==w)return s.value=!0,c.value=!1,void(d.value="Dies scheint nicht richtig zu sein, da die Kante nicht die preiswertigste Kante im Graphen ist.");const k=m(p,n,a);if(l&&(console.log(""),console.log("[DEBUG] checking cycles in MST"),console.log("[DEBUG] condition 2 satisfied: "+!k)),k)return s.value=!0,c.value=!1,void(d.value="Dies scheint nicht richtig zu sein, da die Kante einen Kreis im minimalen Spannbaum bilden würde.");o[n][a]=!0,o[a][n]=!0,u[n][a]=0,u[a][n]=0,p[n][a]=1,p[a][n]=1;const A=i.indexOf(b);i.splice(A,1),v=Array.from({length:8},(()=>!1)),g(p,0)&&(console.log("CORRECT; the m.s.t. has been found"),s.value=!0,c.value=!0,d.value="Das ist richtig! Du hast den minimalen Spannbaum gefunden.");const y=Array.from({length:20},(()=>0));for(let e=0;e<u.length;e++)for(let n=0;n<u.length;n++){const t=u[e][n];if(t>0){const o=y[t-1];if(1!==o){const o=u[e][n]===f(i),r=m(p,e,n);y[t-1]=o&&r?2:1}}}for(let e=0;e<y.length;e++)2===y[e]&&h.push(e+1)}}return(e,o)=>{const i=(0,a.up)("v-edge-label"),l=(0,a.up)("v-network-graph");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l,{class:"graph",nodes:n,edges:t,layouts:(0,G.SU)(he).layouts,configs:(0,G.SU)(he).configs,"selected-edges":r.value,"onUpdate:selected-edges":o[0]||(o[0]=e=>r.value=e)},{"edge-label":(0,a.w5)((({edge:e,...n})=>[(0,a.Wm)(i,(0,a.dG)({text:e.label,"text-align":"center","vertical-align":"center"},n),null,16,["text"])])),_:1},8,["nodes","edges","layouts","configs","selected-edges"]),s.value?((0,a.wg)(),(0,a.j4)(Oe,{key:0,correctSolution:c.value,tip:d.value,onCloseVerifier:o[1]||(o[1]=e=>s.value=!1)},null,8,["correctSolution","tip"])):(0,a.kq)("",!0),(0,a._)("button",{onClick:k,class:"next_task"},nn)],64)}}});const on=(0,l.Z)(tn,[["__scopeId","data-v-21558246"]]);var rn=on,an={components:{ExerciseAscendingGraph:rn,VerifierComp:Oe,HeaderComp:Ie,FooterComp:U},data(){return{tutorialActive:!1,hint:!1}},methods:{reloadPage(){this.$router.go(0)},showTutorial(){this.tutorialActive=!0},showHint(){this.hint=!0},removeHint(){this.hint=!1}}};const ln=(0,l.Z)(an,[["render",Ye]]);var sn=ln;const cn=[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:ee},{path:"/ex/descending",name:"ExerciseDescending",component:Qe},{path:"/ex/ascending",name:"ExerciseAscending",component:sn}],dn=(0,u.p7)({history:(0,u.r5)(),routes:cn});var un=dn;const gn=(0,o.ri)(d);gn.use(un),gn.use(r.ZP),gn.mount("#app")},4081:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=4081,e.exports=n},8329:function(e,n,t){"use strict";e.exports=t.p+"img/Task-completed-correctly-v3.b69cc745.png"},4519:function(e,n,t){"use strict";e.exports=t.p+"img/Task-completed-incorrectly2.413dd031.png"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(d--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(s)var d=s(t)}for(n&&n(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},o=self["webpackChunkbsc_ts"]=self["webpackChunkbsc_ts"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6943)}));o=t.O(o)})();
//# sourceMappingURL=app.d32c92e1.js.map