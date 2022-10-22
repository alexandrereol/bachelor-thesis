(function(){var e={837:function(e,n,o){"use strict";var t=o(9242),r=o(1957),a=o(3396);function l(e,n){const o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(o)}var i=o(89);const s={},d=(0,i.Z)(s,[["render",l]]);var c=d,u=o(2483);const g={class:"header"},h=(0,a._)("h1",null,"Willkommen in der Lernumgebung zu minimalen Spannbäumen in der Graphentheorie!",-1),p=(0,a._)("p",{class:"aufgabenstellung"},'Auf dieser Platform wirst du drei verschiedene "greedy" (gierige) Algorithmen lernen können, die einen minimalen Spannbaum berechnen. Du wirst die drei Algorithmen in mehreren Aufgaben üben können.',-1),m=(0,a._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1),f=(0,a._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1),v=(0,a._)("h2",null,"Wähle eine der drei Aufgaben um zu starten:",-1),b={class:"taskrow"},w=(0,a._)("button",{class:"taskbtn"},[(0,a._)("h1",null,"Abwärts entfernen (BETA)")],-1),y=(0,a._)("button",{class:"taskbtn"},[(0,a._)("h1",null,"Aufwärts auswählen"),(0,a.Uk)(),(0,a._)("br")],-1),k=(0,a._)("button",{class:"taskbtn"},[(0,a._)("h1",null,"Farbige Partitionen"),(0,a.Uk)(),(0,a._)("br")],-1),x=(0,a._)("button",{class:"info"}," Information ",-1);function A(e,n,o,t,r,l){const i=(0,a.up)("HomeGraph"),s=(0,a.up)("router-link"),d=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",g,[h,p,m,(0,a.Wm)(i,{class:"homegraph"}),f]),v,(0,a._)("div",b,[(0,a.Wm)(s,{to:"ex/descending"},{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(s,{to:"ex/ascending"},{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)(s,{to:"ex/partition"},{default:(0,a.w5)((()=>[k])),_:1})]),(0,a.Wm)(s,{to:"about"},{default:(0,a.w5)((()=>[x])),_:1}),(0,a.Wm)(d)])}const S={class:"footer"},_=(0,a._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1),D=[_];function C(e,n){return(0,a.wg)(),(0,a.iD)("div",S,D)}const E={},U=(0,i.Z)(E,[["render",C]]);var G=U,O=o(4870),K=o(5502),W=(0,a.aZ)({__name:"HomeGraphComp",setup(e){const n=(0,O.iH)(20),o=(0,O.qj)({}),t=(0,O.qj)({});i(n.value,o,t),(0,a.YP)(n,(()=>{i(n.value,o,t)}));const l=(0,O.qj)(r.Kl({view:{panEnabled:!1,zoomEnabled:!1,layoutHandler:new K.y({positionFixedByDrag:!1,positionFixedByClickWithAltKey:!0})},node:{label:{visible:!1}}}));function i(e,n,o){const t=[...Array(e)].map(((e,n)=>n)),r=Object.fromEntries(t.map((e=>[`node${e}`,{}])));Object.keys(n).forEach((e=>delete n[e])),Object.assign(n,r);const a=(e,n)=>[`edge${e}-${n}`,{source:`node${e}`,target:`node${n}`}],l=Object.fromEntries([...t.map((n=>[n,5*Math.floor(n/5)%e])).map((([n,o])=>n===o?[n,(n+5)%e]:[n,o])).map((([e,n])=>a(e,n)))]);Object.keys(o).forEach((e=>delete o[e])),Object.assign(o,l)}return(e,n)=>{const r=(0,a.up)("v-network-graph");return(0,a.wg)(),(0,a.j4)(r,{class:"graph","zoom-level":.5,nodes:o,edges:t,configs:l},null,8,["zoom-level","nodes","edges","configs"])}}});const j=W;var H=j,B={name:"HomeView",components:{FooterComp:G,HomeGraph:H}};const N=(0,i.Z)(B,[["render",A]]);var F=N,z=o.p+"img/information-header.f1f4ea75.png",Z=o.p+"img/ethz-logo.b77e6bb3.svg",P=o.p+"img/logo_abz_weiss.93909471.png";const V={class:"about"},M=(0,a.uE)('<div class="header" data-v-1912fb73><h1 data-v-1912fb73>Impressum</h1><img src="'+z+'" class="largeimg" data-v-1912fb73><p class="aufgabenstellung" data-v-1912fb73>Diese Lernplattform basiert auf das Lehrmittel: <i data-v-1912fb73>Band Algorithmen - 3 Entwurf und Analyse von Algorithmen</i>.</p><p class="aufgabenstellung" data-v-1912fb73> Diese Plattform ist als open-source Projekt von Alexandre Reol [<a href="mailto:alexandre@reol.ch" data-v-1912fb73>alexandre@reol.ch</a>] als Teil der Bachelorarbeit an der ETH Zürich entwickelt worden. Source code: <a href="https://github.com/alexandrereol/bachelor-thesis" data-v-1912fb73>github.com/alexandrereol/bachelor-thesis</a></p><hr style="max-width:1100px;background-color:black;height:1px;border:none;" data-v-1912fb73></div><div data-v-1912fb73> Home icon by <a href="https://www.freepik.com" title="Freepik" data-v-1912fb73>Freepik</a> and <a href="https://www.flaticon.com/authors/vignesh-oviyan" title="Vignesh Oviyan" data-v-1912fb73>Vignesh Oviyan</a> , respectively from <a href="https://www.flaticon.com/" data-v-1912fb73>www.flaticon.com</a></div><div data-v-1912fb73> Help and check icon by <a href="https://freeicons.io/profile/726" data-v-1912fb73>Free Preloaders</a> and <a href="https://freeicons.io/profile/714" data-v-1912fb73>Raj Dev</a> respectively on <a href="https://freeicons.io" data-v-1912fb73>freeicons.io</a></div><div data-v-1912fb73> Info, go back, refresh and skip icon by <a href="https://freeicons.io/profile/3" data-v-1912fb73>icon king1</a> , on <a href="https://freeicons.io" data-v-1912fb73>freeicons.io</a></div><br data-v-1912fb73><br data-v-1912fb73><br data-v-1912fb73>',7),q=(0,a.uE)('<div id="links" data-v-1912fb73><div data-v-1912fb73><a href="https://ethz.ch/" data-v-1912fb73><img src="'+Z+'" draggable="false" style="height:40px;left:50%;" data-v-1912fb73></a></div><div data-v-1912fb73><a href="https://abz.inf.ethz.ch/" data-v-1912fb73><img src="'+P+'" draggable="false" style="height:60px;" data-v-1912fb73></a></div></div>',1);function T(e,n,o,t,r,l){const i=(0,a.up)("BackHomepageComp"),s=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",V,[M,(0,a.Wm)(i),(0,a.Wm)(s),q])}var I=o.p+"img/home.73cf819f.png";const R=(0,a._)("button",{class:"back_to_homepage"},[(0,a._)("img",{src:I,style:{height:"40px",width:"40px"}}),(0,a._)("br"),(0,a.Uk)(" Startseite ")],-1);function J(e,n){const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(o,{to:"/"},{default:(0,a.w5)((()=>[R])),_:1})}const Y={},Q=(0,i.Z)(Y,[["render",J]]);var X=Q,L={components:{BackHomepageComp:X,FooterComp:G}};const $=(0,i.Z)(L,[["render",T],["__scopeId","data-v-1912fb73"]]);var ee=$;function ne(e,n,o,t,r,l){const i=(0,a.up)("HeaderComp"),s=(0,a.up)("ExerciseDescendingGraph"),d=(0,a.up)("VerifierComp"),c=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i,{title:"Minimaler Spannbaum berechnen 1 (BETA)",taskdescription:"Deine Aufgabe ist es die teuerste Kanten aus dem Graphen zu entfernen. Wähle jeweils eine Kante aus und entferne sie aus dem Graphen mit dem Knopf unter dem Graphen. Achte darauf, dass der Graph immer noch verbunden ist und im minimalen Spannbaum keine Kreise bleiben."},null,8,["title","taskdescription"]),(0,a.Wm)(s),this.submitted?((0,a.wg)(),(0,a.j4)(d,{key:0,correctSolution:this.result,tip:"",onCloseVerifier:n[0]||(n[0]=e=>this.submitted=!1)},null,8,["correctSolution"])):(0,a.kq)("",!0),(0,a.Wm)(c)])}var oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACz0lEQVR4nO2azW7TQBRGz3ULwt3Z40pI8DCsYcOKVhDatFKhsOFRWFFU1B/oDxKUBQ/AO7DkAQiwyUyWEYjmsmgjEtcJSepUHTNn5Uzkq/mOZ8YzSiAQCAQCgUAgELiUJFl2JzXmR2pMKzGmVnb9mbILls1cHH8CbgDXBO7Gcfyt3W5/Lqt+VFahKXK95zpC5FWapqtlFfdBQJ4Ika0ky9bLKeYnIqobZUjwVQCUJMFHAZ2eaxHVF2markxazDsBAnXgd09ThMh2kmWPJ6nnnYA4jj+gep9+CSKqLyeR4J0AAOfcUVkSvBQAQyVsGGOWR63jrQAYKCFS2BlVwmwyP39bOp1N4OZUejllnHNHSZZdEdU9/m7tuxLUWrs37P7I5/BdWs3mWxVZBo57mrsSlobdG+F5+C6tZvOwYDrMKOwOmw5erwF5nHPvUX1A8ZpQOBIkNUb7ilgr0+zkRZCm6T1EDoHZnuZjgdX8mlCpEdDldCTUODsdzoyESgoAcM69G0VCZQXAPyU8hIquAXmMMUsKu/Q/8GNUFyo9ArpYa/cEVuk/Ss8g8vy/EACgqkVZdbagsXIYY+oKW+SmgMCzygs4Db9NLrxC3Vn7sdJTIMmyxaInr1BvWXsAFX4NJlm2KKoH9P/40xceKipg1PDQv1cGIL8vuGzMxfFco9FoD/r+NPw+ufACKy4XHgoE+EyapguchM8fglastftF90RA40J6N2USY2pFJ0CF+qDwAJF2Oo+Ar1Pv4RRJjKkJvGaEOZ/n0u/7U2N+Ale7n/NrwDhn/yK8fgucNzx4LGBA+M444cFTAWWFBw8FtNvtYeHfjFvPu0WQkzN974ObODx4OAIoMXy+mG+oijw9T3jwV4CqyJNWs7l53kI+ngU6qK61rN0po5gPI+B7z3UH1TXnXCnhwYN/isZx/AWRWwK/VGS9NeZ7PhAIBAKBQCAQKOYPmu5CspmP/AcAAAAASUVORK5CYII=";const te={node0:{name:"Node 0"},node1:{name:"Node 1"},node2:{name:"Node 2"},node3:{name:"Node 3"},node4:{name:"Node 4"},node5:{name:"Node 5"},node6:{name:"Node 6"},node7:{name:"Node 7"},node8:{name:"Node 8"},node9:{name:"Node 9"}};let re=Array.from({length:17},(()=>Math.floor(21*Math.random())));const ae=!1;ae&&(re=[20,19,5,14,5,5,16,6,14,13,10,20,19,1,1,1,1]);const le=Array.from({length:10},(()=>Array.from({length:10},(()=>!1))));function ie(e,n){return le[e][n]?"red":"blue"}const se={edge1:{source:"node0",target:"node1",label:re[0].toString(),color:ie(0,1)},edge2:{source:"node1",target:"node2",label:re[1].toString(),color:ie(1,2)},edge3:{source:"node3",target:"node4",label:re[2].toString(),color:ie(3,4)},edge4:{source:"node5",target:"node6",label:re[3].toString(),color:ie(5,6)},edge5:{source:"node6",target:"node7",label:re[4].toString(),color:ie(6,7)},edge6:{source:"node0",target:"node3",label:re[5].toString(),color:ie(0,3)},edge7:{source:"node1",target:"node3",label:re[6].toString(),color:ie(1,3)},edge8:{source:"node1",target:"node4",label:re[7].toString(),color:ie(1,4)},edge9:{source:"node2",target:"node4",label:re[8].toString(),color:ie(2,4)},edge10:{source:"node3",target:"node5",label:re[9].toString(),color:ie(3,5)},edge11:{source:"node3",target:"node6",label:re[10].toString(),color:ie(3,6)},edge12:{source:"node4",target:"node6",label:re[11].toString(),color:ie(4,6)},edge13:{source:"node4",target:"node7",label:re[12].toString(),color:ie(4,7)},edge14:{source:"node5",target:"node8",label:re[13].toString(),color:ie(5,8)},edge15:{source:"node0",target:"node8",label:re[14].toString(),color:ie(0,8)},edge16:{source:"node7",target:"node9",label:re[15].toString(),color:ie(7,9)},edge17:{source:"node2",target:"node9",label:re[16].toString(),color:ie(2,9)}},de=1,ce=2,ue={nodes:{node0:{x:-400*de,y:200*ce},node1:{x:0*de,y:200*ce},node2:{x:400*de,y:200*ce},node3:{x:-200*de,y:100*ce},node4:{x:200*de,y:100*ce},node5:{x:-400*de,y:0*ce},node6:{x:0*de,y:0*ce},node7:{x:400*de,y:0*ce},node8:{x:-600*de,y:100*ce},node9:{x:600*de,y:100*ce}}},ge=(0,O.qj)(r.Kl({view:{panEnabled:!1,zoomEnabled:!1},node:{draggable:!1,label:{visible:!1}},edge:{selectable:1,label:{fontSize:20},normal:{color:e=>ie(+e.source.replace("node",""),+e.target.replace("node","")),width:6}}}));var he={nodes:te,edges:se,edgesWeight:re,customColor:le,layouts:ue,configs:ge},pe=o(7139);const me=e=>((0,a.dD)("data-v-60ab0c38"),e=e(),(0,a.Cn)(),e),fe={class:"modal-wrapper"},ve={class:"modal-header"},be={key:0,class:"title"},we={key:1,class:"title"},ye={class:"flex-item flex-center flex-space-between flex-col"},ke={class:"flex-item flex-center flex-space-between flex-row"},xe=["src"],Ae=["src"],Se=me((()=>(0,a._)("hr",null,null,-1))),_e={key:0};function De(e,n,r,l,i,s){return(0,a.wg)(),(0,a.iD)("div",{id:"tutorial-wrapper",class:"modal-mask",onMousedown:n[2]||(n[2]=(0,t.iM)((n=>{e.showSolution=!1,e.$emit("close-verifier")}),["stop"]))},[(0,a._)("div",fe,[(0,a._)("div",{class:"modal-container",onMousedown:n[1]||(n[1]=(0,t.iM)((()=>{}),["stop"]))},[(0,a._)("div",ve,[e.correctSolution?((0,a.wg)(),(0,a.iD)("p",be,"Das ist richtig!")):((0,a.wg)(),(0,a.iD)("p",we,"Das ist leider nicht richtig!")),(0,a._)("button",{class:"exit-button",onClick:n[0]||(n[0]=n=>e.$emit("close-verifier"))}," × ")]),(0,a._)("div",ye,[(0,a._)("div",ke,[e.correctSolution?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"corr_img",src:o(8329),draggable:"false"},null,8,xe)):((0,a.wg)(),(0,a.iD)("img",{key:1,class:"corr_img",src:o(4519),draggable:"false"},null,8,Ae))]),Se,e.correctSolution?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",_e,(0,pe.zw)(e.tip),1))])],32)])],32)}var Ce=(0,a.aZ)({name:"VerifierComp",props:["correctSolution","tip"],created:function(){console.log("Verifier activated")},methods:{reloadPage(){location.reload()}}});const Ee=(0,i.Z)(Ce,[["render",De],["__scopeId","data-v-60ab0c38"]]);var Ue=Ee;const Ge=e=>((0,a.dD)("data-v-34c86851"),e=e(),(0,a.Cn)(),e),Oe=Ge((()=>(0,a._)("img",{src:oe,class:"icon"},null,-1))),Ke=Ge((()=>(0,a._)("br",null,null,-1))),We=(0,a.Uk)(" Kante entfernen "),je=[Oe,Ke,We];var He=(0,a.aZ)({__name:"ExerciseDescendingGraph",setup(e){const n=(0,O.qj)({...he.nodes}),o=(0,O.qj)({...he.edges}),t=(0,O.iH)([]),r=he.edgesWeight,l=[],i=!0,s=(0,O.iH)(!1),d=(0,O.iH)(!1),c=(0,O.iH)("nothing..?");function u(e){const n=r.filter((e=>l.indexOf(e)<0));return Math.max.apply(null,n)}const g=[[0,r[0],0,r[5],0,0,0,0,r[14],0],[r[0],0,r[1],r[6],r[7],0,0,0,0,0],[0,r[1],0,0,r[8],0,0,0,0,r[16]],[r[5],r[6],0,0,r[2],r[9],r[10],0,0,0],[0,r[7],r[8],r[2],0,0,r[11],r[12],0,0],[0,0,0,r[9],0,0,r[3],0,r[13],0],[0,0,0,r[10],r[11],r[3],0,r[4],0,0],[0,0,0,0,r[12],0,r[4],0,0,r[15]],[r[14],0,0,0,0,r[13],0,0,0,0],[0,0,r[16],0,0,0,0,r[15],0,0]];let h=Array.from({length:10},(()=>!1));function p(e,n){for(let o=0;o<e.length;o++)e[n][o]>0&&!1===h[o]&&(h[o]=!0,p(e,o));return!h.includes(!1)}function m(e,n){if(g[e][n]<0)return!1;h=Array.from({length:10},(()=>!1));var o=JSON.parse(JSON.stringify(g));return o[e][n]=0,o[n][e]=0,!p(o,0)}function f(){if(0===t.value.length)return s.value=!0,d.value=!1,void(c.value="Du keine Kante ausgewählt. Überprüfe deine Auswahl.");for(const e of t.value){const n=+o[e].source.replace("node",""),t=+o[e].target.replace("node",""),a=+o[e].label,l=u(r);if(i&&(console.log("[DEBUG] edge weight: "+a),console.log("[DEBUG] maximum edge in graph: "+l),console.log("[DEBUG] source node: "+n),console.log("[DEBUG] target node: "+t)),m(n,t))return i&&console.log("[DEBUG] edge would split graph"),console.log("WRONG; Graph would be divided:"+h),s.value=!0,d.value=!1,void(c.value="Die augewählte Kante würde den Graphen in zwei teilen.");if(a!==l)return i&&console.log("[DEBUG] edge weight is not the maximum edge in graph"),console.log("WRONG; Edge is not the maximum edge in graph s.t. graph stays connected"),s.value=!0,d.value=!1,void(c.value="Die augewählte Kante ist nicht die teuerste im Graphen.");if(g[n][t]=0,g[t][n]=0,a===l){const n=r.indexOf(a);r.splice(n,1),delete o[e],9===r.length&&(console.log("CORRECT; the m.s.t. has the following edges"+r),s.value=!0,d.value=!0,c.value="Das ist richtig! Du hast den minimalen Spannbaum gefunden.")}}for(let e=0;e<g.length;e++)for(let n=0;n<g.length;n++)g[e][n]>0&&(l.includes(g[e][n])&&l.splice(l.indexOf(g[e][n]),1),m(e,n)&&g[e][n]===u(r)&&l.push(g[e][n]))}return(e,r)=>{const l=(0,a.up)("v-edge-label"),i=(0,a.up)("v-network-graph");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,{class:"graph",nodes:n,edges:o,layouts:(0,O.SU)(he).layouts,configs:(0,O.SU)(he).configs,"selected-edges":t.value,"onUpdate:selected-edges":r[0]||(r[0]=e=>t.value=e)},{"edge-label":(0,a.w5)((({edge:e,...n})=>[(0,a.Wm)(l,(0,a.dG)({text:e.label,"text-align":"center","vertical-align":"center"},n),null,16,["text"])])),_:1},8,["nodes","edges","layouts","configs","selected-edges"]),s.value?((0,a.wg)(),(0,a.j4)(Ue,{key:0,correctSolution:d.value,tip:c.value,onCloseVerifier:r[1]||(r[1]=e=>s.value=!1)},null,8,["correctSolution","tip"])):(0,a.kq)("",!0),(0,a._)("button",{onClick:f,class:"next_task"},je)],64)}}});const Be=(0,i.Z)(He,[["__scopeId","data-v-34c86851"]]);var Ne=Be;const Fe={class:"header"},ze=(0,a._)("button",{class:"back_to_homepage"},[(0,a._)("img",{src:I,style:{height:"40px",width:"50px"}}),(0,a._)("br"),(0,a.Uk)(" Startseite ")],-1),Ze={class:"aufgabenstellung"},Pe=(0,a._)("span",{style:{"font-size":"25px","font-weight":"bold"}},null,-1),Ve=(0,a._)("hr",{style:{"max-width":"1100px","background-color":"black",height:"1px",border:"none"}},null,-1);function Me(e,n,o,t,r,l){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",Fe,[(0,a._)("h1",null,(0,pe.zw)(o.title),1),(0,a.Wm)(i,{to:"/"},{default:(0,a.w5)((()=>[ze])),_:1}),(0,a._)("p",Ze,[(0,a.Uk)((0,pe.zw)(o.taskdescription)+" ",1),Pe]),Ve])])}var qe={props:["title","taskdescription"]};const Te=(0,i.Z)(qe,[["render",Me]]);var Ie=Te;(0,a.aZ)({name:"TutorialComp",data(){return{}},props:["video_name","description"],created:function(){console.log("Tutorial activated")},methods:{reloadPage(){location.reload()},getSrc(){return o(4081)(`./${this.video_name}.mp4`)}}});var Re={components:{ExerciseDescendingGraph:Ne,VerifierComp:Ue,HeaderComp:Ie,FooterComp:G},data(){return{tutorialActive:!1,hint:!1}},methods:{reloadPage(){this.$router.go(0)},showTutorial(){this.tutorialActive=!0},showHint(){this.hint=!0},removeHint(){this.hint=!1}}};const Je=(0,i.Z)(Re,[["render",ne]]);var Ye=Je;function Qe(e,n,o,t,r,l){const i=(0,a.up)("HeaderComp"),s=(0,a.up)("ExerciseAscendingGraph"),d=(0,a.up)("VerifierComp"),c=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i,{title:"Minimaler Spannbaum berechnen 2",taskdescription:"Deine Aufgabe ist es die preiswertigste Kante auszuwählen und sie dem minimalen Spannbaum hinzuzufügen. Dies kannst du machen, indem du den Knopf unter der Graphen klickst. Es kann manchmal sein, dass mehrere Kanten das (gleiche) preiswertigste Gewicht haben, dann kannst du irgendeine Kante wählen! Achte ebenfalls dass in deinem minimalen Spannbaum keine Kreise gebildet werden."},null,8,["taskdescription"]),(0,a.Wm)(s),this.submitted?((0,a.wg)(),(0,a.j4)(d,{key:0,correctSolution:this.result,tip:"",onCloseVerifier:n[0]||(n[0]=e=>this.submitted=!1)},null,8,["correctSolution"])):(0,a.kq)("",!0),(0,a.Wm)(c)])}const Xe=e=>((0,a.dD)("data-v-1fc6d95e"),e=e(),(0,a.Cn)(),e),Le=Xe((()=>(0,a._)("img",{src:oe,class:"icon"},null,-1))),$e=Xe((()=>(0,a._)("br",null,null,-1))),en=(0,a.Uk)(" Kante färben "),nn=[Le,$e,en];var on=(0,a.aZ)({__name:"ExerciseAscendingGraph",setup(e){const n=(0,O.qj)({...he.nodes}),o=(0,O.qj)({...he.edges}),t=(0,O.qj)({...he.customColor}),r=(0,O.iH)([]),l=he.edgesWeight,i=!0,s=(0,O.iH)(!1),d=(0,O.iH)(!1),c=(0,O.iH)("nothing..?"),u=[[0,l[0],0,l[5],0,0,0,0,l[14],0],[l[0],0,l[1],l[6],l[7],0,0,0,0,0],[0,l[1],0,0,l[8],0,0,0,0,l[16]],[l[5],l[6],0,0,l[2],l[9],l[10],0,0,0],[0,l[7],l[8],l[2],0,0,l[11],l[12],0,0],[0,0,0,l[9],0,0,l[3],0,l[13],0],[0,0,0,l[10],l[11],l[3],0,l[4],0,0],[0,0,0,0,l[12],0,l[4],0,0,l[15]],[l[14],0,0,0,0,l[13],0,0,0,0],[0,0,l[16],0,0,0,0,l[15],0,0]];function g(e,n){for(let o=0;o<e.length;o++)e[n][o]>0&&!1===v[o]&&(v[o]=!0,g(e,o));return!v.includes(!1)}const h=[];function p(){const e=l.filter((e=>h.indexOf(e)<0));return Math.min.apply(null,e)}const m=Array.from({length:10},(()=>Array.from({length:10},(()=>0))));function f(e,n,o){b=!1;const t=JSON.parse(JSON.stringify(e));t[n][o]=1,t[o][n]=1;for(let r=0;r<e.length;r++)for(let n=r;n<e.length;n++)t[r][n]=0;i&&console.log("tempMatrix",t);for(let r=0;r<e.length;r++)v=Array.from({length:10},(()=>!1)),w(t,r);return b}let v=Array.from({length:10},(()=>!1)),b=!1;function w(e,n){for(let o=0;o<e.length;o++)if(e[n][o]>0){if(v[o])return console.log("flag set for souce/i: "+n+"/"+o),void(b=!0);v[o]=!0,w(e,o)}}function y(){if(0===r.value.length)return s.value=!0,d.value=!1,void(c.value="Du keine Kante ausgewählt. Überprüfe deine Auswahl.");for(const e of r.value){r.value=[];const n=+o[e].source.replace("node",""),a=+o[e].target.replace("node",""),b=+o[e].label;i&&(console.log("[DEBUG] edge weight: "+b),console.log("[DEBUG] source node: "+n),console.log("[DEBUG] target node: "+a));const w=p();if(i&&(console.log(""),console.log("[DEBUG] minimum edge in graph: "+w),console.log("[DEBUG] selected edge in graph: "+b),console.log("[DEBUG] condition 1 satisfied: "+(b===w))),b!==w)return s.value=!0,d.value=!1,void(c.value="Die augewählte Kante ist nicht die preiswertigste blaue Kante im Graphen.");const y=f(m,n,a);if(i&&(console.log(""),console.log("[DEBUG] checking cycles in MST"),console.log("[DEBUG] condition 2 satisfied: "+!y)),y)return s.value=!0,d.value=!1,void(c.value="Die ausgewählte Kante würde im minimalen Spannbaum einen Kreis bilden.");t[n][a]=!0,t[a][n]=!0,u[n][a]=0,u[a][n]=0,m[n][a]=1,m[a][n]=1;const k=l.indexOf(b);l.splice(k,1),v=Array.from({length:10},(()=>!1)),g(m,0)&&(console.log("CORRECT; the m.s.t. has been found"),s.value=!0,d.value=!0,c.value="Das ist richtig! Du hast den minimalen Spannbaum gefunden.");const x=Array.from({length:20},(()=>0));for(let e=0;e<u.length;e++)for(let n=0;n<u.length;n++){const o=u[e][n];if(o>0){const t=x[o-1];if(1!==t){const t=u[e][n]===p(),r=f(m,e,n);x[o-1]=t&&r?2:1}}}for(let e=0;e<x.length;e++)2===x[e]&&h.push(e+1)}}return(e,t)=>{const l=(0,a.up)("v-edge-label"),i=(0,a.up)("v-network-graph");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i,{class:"graph",nodes:n,edges:o,layouts:(0,O.SU)(he).layouts,configs:(0,O.SU)(he).configs,"selected-edges":r.value,"onUpdate:selected-edges":t[0]||(t[0]=e=>r.value=e)},{"edge-label":(0,a.w5)((({edge:e,...n})=>[(0,a.Wm)(l,(0,a.dG)({text:e.label,"text-align":"center","vertical-align":"center"},n),null,16,["text"])])),_:1},8,["nodes","edges","layouts","configs","selected-edges"]),s.value?((0,a.wg)(),(0,a.j4)(Ue,{key:0,correctSolution:d.value,tip:c.value,onCloseVerifier:t[1]||(t[1]=e=>s.value=!1)},null,8,["correctSolution","tip"])):(0,a.kq)("",!0),(0,a._)("button",{onClick:y,class:"next_task"},nn)],64)}}});const tn=(0,i.Z)(on,[["__scopeId","data-v-1fc6d95e"]]);var rn=tn,an={components:{ExerciseAscendingGraph:rn,VerifierComp:Ue,HeaderComp:Ie,FooterComp:G},data(){return{tutorialActive:!1,hint:!1}},methods:{reloadPage(){this.$router.go(0)},showTutorial(){this.tutorialActive=!0},showHint(){this.hint=!0},removeHint(){this.hint=!1}}};const ln=(0,i.Z)(an,[["render",Qe]]);var sn=ln;function dn(e,n,o,t,r,l){const i=(0,a.up)("HeaderComp"),s=(0,a.up)("ExercisePartitionGraph"),d=(0,a.up)("VerifierComp"),c=(0,a.up)("FooterComp");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i,{title:"Minimaler Spannbaum berechnen 3",taskdescription:"Deine Aufgabe ist es die preiswertigste Kante zwischen der roten Partition und der blauen Partition zu markieren. Wähle jeweils eine Kante aus und färbe sie blau indem du den Knopf unter dem Graph klickst."},null,8,["taskdescription"]),(0,a.Wm)(s),this.submitted?((0,a.wg)(),(0,a.j4)(d,{key:0,correctSolution:this.result,tip:"",onCloseVerifier:n[0]||(n[0]=e=>this.submitted=!1)},null,8,["correctSolution"])):(0,a.kq)("",!0),(0,a.Wm)(c)])}let cn=Array.from({length:13},(()=>Math.floor(20*Math.random())+1));const un=!1;un&&(cn=[20,19,5,14,5,5,16,6,14,13,10,20,19]);const gn=Array.from({length:8},(()=>Array.from({length:8},(()=>!1))));gn[0][0]=!0;const hn=Array.from({length:8},(()=>Array.from({length:8},(()=>0))));function pn(e,n){return e===n?gn[e][e]?"blue":"red":hn[e][n]?"blue":gn[e][e]||gn[n][n]?"gray":"red"}const mn={node0:{name:"Node 0",color:pn(0,0)},node1:{name:"Node 1",color:pn(1,1)},node2:{name:"Node 2",color:pn(2,2)},node3:{name:"Node 3",color:pn(3,3)},node4:{name:"Node 4",color:pn(4,4)},node5:{name:"Node 5",color:pn(5,5)},node6:{name:"Node 6",color:pn(6,6)},node7:{name:"Node 7",color:pn(7,7)}},fn={edge1:{source:"node0",target:"node1",label:cn[0].toString(),color:pn(0,1)},edge2:{source:"node1",target:"node2",label:cn[1].toString(),color:pn(1,2)},edge3:{source:"node3",target:"node4",label:cn[2].toString(),color:pn(3,4)},edge4:{source:"node5",target:"node6",label:cn[3].toString(),color:pn(5,6)},edge5:{source:"node6",target:"node7",label:cn[4].toString(),color:pn(6,7)},edge6:{source:"node0",target:"node3",label:cn[5].toString(),color:pn(0,3)},edge7:{source:"node1",target:"node3",label:cn[6].toString(),color:pn(1,3)},edge8:{source:"node1",target:"node4",label:cn[7].toString(),color:pn(1,4)},edge9:{source:"node2",target:"node4",label:cn[8].toString(),color:pn(2,4)},edge10:{source:"node3",target:"node5",label:cn[9].toString(),color:pn(3,5)},edge11:{source:"node3",target:"node6",label:cn[10].toString(),color:pn(3,6)},edge12:{source:"node4",target:"node6",label:cn[11].toString(),color:pn(4,6)},edge13:{source:"node4",target:"node7",label:cn[12].toString(),color:pn(4,7)}},vn=1,bn=2,wn={nodes:{node0:{x:-400*vn,y:200*bn},node1:{x:0*vn,y:200*bn},node2:{x:400*vn,y:200*bn},node3:{x:-200*vn,y:100*bn},node4:{x:200*vn,y:100*bn},node5:{x:-400*vn,y:0*bn},node6:{x:0*vn,y:0*bn},node7:{x:400*vn,y:0*bn}}},yn=(0,O.qj)(r.Kl({view:{panEnabled:!1,zoomEnabled:!1},node:{draggable:!0,selectable:!0,label:{visible:!1},normal:{color:e=>pn(+e.name.replace("Node ",""),+e.name.replace("Node ",""))},focusring:{visible:!1}},edge:{selectable:1,label:{fontSize:20},normal:{color:e=>pn(+e.source.replace("node",""),+e.target.replace("node","")),width:6}}}));var kn={nodes:mn,edges:fn,edgesWeight:cn,customColor:gn,reactAdjMatrix:hn,layouts:wn,configs:yn};const xn=e=>((0,a.dD)("data-v-609dd437"),e=e(),(0,a.Cn)(),e),An=xn((()=>(0,a._)("img",{src:oe,class:"icon"},null,-1))),Sn=xn((()=>(0,a._)("br",null,null,-1))),_n=(0,a.Uk)(" Kante färben "),Dn=[An,Sn,_n];var Cn=(0,a.aZ)({__name:"ExercisePartitionGraph",setup(e){const n=(0,O.qj)({...kn.nodes}),o=(0,O.qj)({...kn.edges}),t=(0,O.qj)({...kn.customColor}),r=(0,O.qj)({...kn.reactAdjMatrix}),l=(0,O.iH)([]),i=(0,O.iH)([]),s=kn.edgesWeight,d=!0,c=(0,O.iH)(!1),u=(0,O.iH)(!1),g=(0,O.iH)("nothing..?"),h=[[0,s[0],0,s[5],0,0,0,0],[s[0],0,s[1],s[6],s[7],0,0,0],[0,s[1],0,0,s[8],0,0,0],[s[5],s[6],0,0,s[2],s[9],s[10],0],[0,s[7],s[8],s[2],0,0,s[11],s[12]],[0,0,0,s[9],0,0,s[3],0],[0,0,0,s[10],s[11],s[3],0,s[4]],[0,0,0,0,s[12],0,s[4],0]];function p(){const e=[];for(let n=0;n<h.length;n++)for(let o=0;o<h.length;o++)t[n][n]!==t[o][o]&&e.push(h[n][o]);return console.log(e.filter((e=>0!==e))),Math.min.apply(null,e.filter((e=>0!==e)))}function m(){if(i.value=["node0","node1","node2","node3","node4","node5","node6","node7"],0===l.value.length)return c.value=!0,u.value=!1,void(g.value="Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.");for(const n of l.value){const e=+o[n].source.replace("node",""),a=+o[n].target.replace("node",""),l=+o[n].label;d&&(console.log("[DEBUG] edge weight: "+l),console.log("[DEBUG] source node: "+e),console.log("[DEBUG] target node: "+a));const i=p();if(d&&(console.log(""),console.log("[DEBUG] minimum edge in grey edges: "+i),console.log("[DEBUG] selected edge in graph: "+l),console.log("[DEBUG] condition 1 satisfied: "+(l===i))),l!==i)return c.value=!0,u.value=!1,void(g.value="Dies scheint nicht richtig zu sein, da die Kante nicht die preiswertigste graue Kante ist.");t[e][e]=!0,t[a][a]=!0,t[e][a]=!0,t[a][e]=!0,r[e][a]=1,r[a][e]=1}for(const n in o){const e=o[n],a=+e.source.replace("node",""),l=+e.target.replace("node","");t[a][a]&&t[l][l]&&1!==r[a][l]&&delete o[n]}l.value=["edge1","edge2","edge3","edge4","edge5","edge6","edge7","edge8","edge9","edge10","edge11","edge12","edge13"];const e=t[0][0]&&t[1][1]&&t[2][2]&&t[3][3]&&t[4][4]&&t[5][5]&&t[6][6]&&t[7][7];e&&(console.log("CORRECT; the m.s.t. has the following edges"+s),c.value=!0,u.value=!0,g.value="Alles korrekt! Du hast alle Kanten des minimalen Spannbaumes gefunden!"),setTimeout((()=>{l.value=[]}),1e-5)}return(e,t)=>{const r=(0,a.up)("v-edge-label"),s=(0,a.up)("v-network-graph");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s,{class:"graph",nodes:n,edges:o,layouts:(0,O.SU)(kn).layouts,configs:(0,O.SU)(kn).configs,"selected-edges":l.value,"onUpdate:selected-edges":t[0]||(t[0]=e=>l.value=e),"selected-nodes":i.value,"onUpdate:selected-nodes":t[1]||(t[1]=e=>i.value=e)},{"edge-label":(0,a.w5)((({edge:e,...n})=>[(0,a.Wm)(r,(0,a.dG)({text:e.label,"text-align":"center","vertical-align":"center"},n),null,16,["text"])])),_:1},8,["nodes","edges","layouts","configs","selected-edges","selected-nodes"]),c.value?((0,a.wg)(),(0,a.j4)(Ue,{key:0,correctSolution:u.value,tip:g.value,onCloseVerifier:t[2]||(t[2]=e=>c.value=!1)},null,8,["correctSolution","tip"])):(0,a.kq)("",!0),(0,a._)("button",{onClick:m,class:"next_task"},Dn)],64)}}});const En=(0,i.Z)(Cn,[["__scopeId","data-v-609dd437"]]);var Un=En,Gn={components:{ExercisePartitionGraph:Un,VerifierComp:Ue,HeaderComp:Ie,FooterComp:G},data(){return{tutorialActive:!1,hint:!1}},methods:{reloadPage(){this.$router.go(0)},showTutorial(){this.tutorialActive=!0},showHint(){this.hint=!0},removeHint(){this.hint=!1}}};const On=(0,i.Z)(Gn,[["render",dn]]);var Kn=On;const Wn=[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:ee},{path:"/ex/descending",name:"ExerciseDescending",component:Ye},{path:"/ex/ascending",name:"ExerciseAscending",component:sn},{path:"/ex/partition",name:"ExercisePartition",component:Kn}],jn=(0,u.p7)({history:(0,u.r5)(),routes:Wn});var Hn=jn;const Bn=(0,t.ri)(c);Bn.use(Hn),Bn.use(r.ZP),Bn.mount("#app")},4081:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=4081,e.exports=n},8329:function(e,n,o){"use strict";e.exports=o.p+"img/Task-completed-correctly-v3.b69cc745.png"},4519:function(e,n,o){"use strict";e.exports=o.p+"img/Task-completed-incorrectly2.413dd031.png"}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,a){if(!t){var l=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],a=e[c][2];for(var i=!0,s=0;s<t.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](t[s])}))?t.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(c--,1);var d=r();void 0!==d&&(n=d)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,r,a]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.p="/"}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,a,l=t[0],i=t[1],s=t[2],d=0;if(l.some((function(n){return 0!==e[n]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(s)var c=s(o)}for(n&&n(t);d<l.length;d++)a=l[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},t=self["webpackChunkbsc_ts"]=self["webpackChunkbsc_ts"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(837)}));t=o.O(t)})();
//# sourceMappingURL=app.a892f0a8.js.map