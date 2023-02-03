(function(){"use strict";var e={7964:function(e,o,n){var t=n(9242),r=n(3396);function a(e,o){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var l=n(89);const d={},i=(0,l.Z)(d,[["render",a]]);var s=i,c=n(2483);const g={class:"header"},u=(0,r._)("h1",null,"Lernumgebung zu minimalen Spannbäumen in der Graphentheorie",-1),m=(0,r._)("p",{class:"aufgabenstellung"},"In dieser Lernumgebung lernst du spielerisch drei Algorithmen kennen, mit denen der minimale Spannbaum bestimmt werden kann.",-1),h=(0,r._)("h2",null,"Wähle einen der Algorithmen:",-1),p={class:"taskrow"},f=(0,r._)("button",{class:"taskbtn"},[(0,r._)("h1",null,"Greedy")],-1),b=(0,r._)("button",{class:"taskbtn"},[(0,r._)("h1",null,"Kruskal"),(0,r.Uk)(),(0,r._)("br")],-1),v=(0,r._)("button",{class:"taskbtn"},[(0,r._)("h1",null,"Prim"),(0,r.Uk)(),(0,r._)("br")],-1),A=(0,r._)("button",{class:"info"}," Information ",-1);function w(e,o,n,t,a,l){const d=(0,r.up)("HomeGraph"),i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",g,[u,m,(0,r.Wm)(d,{class:"homegraph"})]),h,(0,r._)("div",p,[(0,r.Wm)(i,{to:"ex/greedy"},{default:(0,r.w5)((()=>[f])),_:1}),(0,r.Wm)(i,{to:"ex/kruskal"},{default:(0,r.w5)((()=>[b])),_:1}),(0,r.Wm)(i,{to:"ex/prim"},{default:(0,r.w5)((()=>[v])),_:1})]),(0,r.Wm)(i,{to:"about"},{default:(0,r.w5)((()=>[A])),_:1})])}var y=n(4870),k=n(1957),x=n(5502),S=(0,r.aZ)({__name:"HomeGraphComp",setup(e){const o=(0,y.iH)(20),n=(0,y.qj)({}),t=(0,y.qj)({});l(o.value,n,t),(0,r.YP)(o,(()=>{l(o.value,n,t)}));const a=(0,y.qj)(k.Kl({view:{panEnabled:!1,zoomEnabled:!1,layoutHandler:new x.y({positionFixedByDrag:!1,positionFixedByClickWithAltKey:!0})},node:{label:{visible:!1}}}));function l(e,o,n){const t=[...Array(e)].map(((e,o)=>o)),r=Object.fromEntries(t.map((e=>[`node${e}`,{}])));Object.keys(o).forEach((e=>delete o[e])),Object.assign(o,r);const a=(e,o)=>[`edge${e}-${o}`,{source:`node${e}`,target:`node${o}`}],l=Object.fromEntries([...t.map((o=>[o,5*Math.floor(o/5)%e])).map((([o,n])=>o===n?[o,(o+5)%e]:[o,n])).map((([e,o])=>a(e,o)))]);Object.keys(n).forEach((e=>delete n[e])),Object.assign(n,l)}return(e,o)=>{const l=(0,r.up)("v-network-graph");return(0,r.wg)(),(0,r.j4)(l,{class:"graph","zoom-level":.5,nodes:n,edges:t,configs:a},null,8,["zoom-level","nodes","edges","configs"])}}});const C=S;var E=C;window.innerWidth<=736&&window.alert("Die Webplattform ist nicht für Smartphones optimiert. Benutzen Sie am besten ein iPad oder ein Computer um die Algorithmen durchzuspielen.");var D={name:"HomeView",components:{HomeGraph:E}};const B=(0,l.Z)(D,[["render",w]]);var U=B,H=n.p+"img/information-header.f1f4ea75.png",W=n.p+"img/ethz.b77e6bb3.svg",K=n.p+"img/abz.93909471.png";const N={class:"about"},O=(0,r.uE)('<div class="header" data-v-872b8640><h1 data-v-872b8640>Impressum</h1><img src="'+H+'" class="largeimg" data-v-872b8640><p class="aufgabenstellung" data-v-872b8640>Diese Lernplattform basiert auf das Lehrmittel: <i data-v-872b8640>Band Algorithmen - 3 Entwurf und Analyse von Algorithmen</i>.</p><p class="aufgabenstellung" data-v-872b8640>Diese Plattform ist als open-source Projekt von Alexandre Reol [<a href="mailto:alexandre@reol.ch" data-v-872b8640>alexandre@reol.ch</a>] als Teil der Bachelorarbeit an der ETH Zürich entwickelt worden. Source code: <a href="https://github.com/alexandrereol/bachelor-thesis" data-v-872b8640>github.com/alexandrereol/bachelor-thesis</a></p><p class="aufgabenstellung" data-v-872b8640>Dokumentation kann auf <a href="https://github.com/alexandrereol/bachelor-thesis/tree/main/thesis" data-v-872b8640>github.com/alexandrereol/bachelor-thesis/tree/main/thesis</a> gelesen werden.</p></div><div data-v-872b8640> Home icon by <a href="https://www.freepik.com" title="Freepik" data-v-872b8640>Freepik</a> and <a href="https://www.flaticon.com/authors/vignesh-oviyan" title="Vignesh Oviyan" data-v-872b8640>Vignesh Oviyan</a> , respectively from <a href="https://www.flaticon.com/" data-v-872b8640>www.flaticon.com</a></div><div data-v-872b8640> Help and check icon by <a href="https://freeicons.io/profile/726" data-v-872b8640>Free Preloaders</a> and <a href="https://freeicons.io/profile/714" data-v-872b8640>Raj Dev</a> respectively on <a href="https://freeicons.io" data-v-872b8640>freeicons.io</a></div><div data-v-872b8640> Info, go back, refresh and skip icon by <a href="https://freeicons.io/profile/3" data-v-872b8640>icon king1</a> , on <a href="https://freeicons.io" data-v-872b8640>freeicons.io</a></div><br data-v-872b8640><br data-v-872b8640><br data-v-872b8640>',7),G=(0,r.uE)('<div id="links" data-v-872b8640><div data-v-872b8640><a href="https://ethz.ch/" data-v-872b8640><img src="'+W+'" draggable="false" style="height:40px;left:50%;" data-v-872b8640></a></div><div data-v-872b8640><a href="https://abz.inf.ethz.ch/" data-v-872b8640><img src="'+K+'" draggable="false" style="height:60px;" data-v-872b8640></a></div></div>',1);function j(e,o,n,t,a,l){const d=(0,r.up)("BackHomepageComp");return(0,r.wg)(),(0,r.iD)("div",N,[O,(0,r.Wm)(d),G])}var z=n.p+"img/home.73cf819f.png";const _=(0,r._)("button",{class:"back_to_homepage"},[(0,r._)("img",{src:z,style:{height:"40px",width:"40px"}}),(0,r._)("br"),(0,r.Uk)(" Startseite ")],-1);function R(e,o){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(n,{to:"/"},{default:(0,r.w5)((()=>[_])),_:1})}const P={},M=(0,l.Z)(P,[["render",R]]);var Z=M,V={components:{BackHomepageComp:Z}};const I=(0,l.Z)(V,[["render",j],["__scopeId","data-v-872b8640"]]);var F=I;function Q(e,o,n,t,a,l){const d=(0,r.up)("HeaderComp"),i=(0,r.up)("ExerciseGreedyGraph"),s=(0,r.up)("RemoveEdgeComp"),c=(0,r.up)("VerifierComp");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(d,{title:"Minimalen Spannbaum berechnen mit dem Algorithmus «Greedy»",taskdescription:"Entferne die teuerste Kante, die sich in einem Kreis befindet. Dies machst du, indem du die Kante mit der Maus auswählst und dann den Knopf drückst."},null,8,["taskdescription"]),(0,r.Wm)(i),(0,r.Wm)(s),this.submitted?((0,r.wg)(),(0,r.j4)(c,{key:0,correctSolution:this.result,tip:"",onCloseVerifier:o[0]||(o[0]=e=>this.submitted=!1)},null,8,["correctSolution"])):(0,r.kq)("",!0)])}var q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAACz0lEQVR4nO2azW7TQBRGz3ULwt3Z40pI8DCsYcOKVhDatFKhsOFRWFFU1B/oDxKUBQ/AO7DkAQiwyUyWEYjmsmgjEtcJSepUHTNn5Uzkq/mOZ8YzSiAQCAQCgUAgELiUJFl2JzXmR2pMKzGmVnb9mbILls1cHH8CbgDXBO7Gcfyt3W5/Lqt+VFahKXK95zpC5FWapqtlFfdBQJ4Ika0ky9bLKeYnIqobZUjwVQCUJMFHAZ2eaxHVF2markxazDsBAnXgd09ThMh2kmWPJ6nnnYA4jj+gep9+CSKqLyeR4J0AAOfcUVkSvBQAQyVsGGOWR63jrQAYKCFS2BlVwmwyP39bOp1N4OZUejllnHNHSZZdEdU9/m7tuxLUWrs37P7I5/BdWs3mWxVZBo57mrsSlobdG+F5+C6tZvOwYDrMKOwOmw5erwF5nHPvUX1A8ZpQOBIkNUb7ilgr0+zkRZCm6T1EDoHZnuZjgdX8mlCpEdDldCTUODsdzoyESgoAcM69G0VCZQXAPyU8hIquAXmMMUsKu/Q/8GNUFyo9ArpYa/cEVuk/Ss8g8vy/EACgqkVZdbagsXIYY+oKW+SmgMCzygs4Db9NLrxC3Vn7sdJTIMmyxaInr1BvWXsAFX4NJlm2KKoH9P/40xceKipg1PDQv1cGIL8vuGzMxfFco9FoD/r+NPw+ufACKy4XHgoE+EyapguchM8fglastftF90RA40J6N2USY2pFJ0CF+qDwAJF2Oo+Ar1Pv4RRJjKkJvGaEOZ/n0u/7U2N+Ale7n/NrwDhn/yK8fgucNzx4LGBA+M444cFTAWWFBw8FtNvtYeHfjFvPu0WQkzN974ObODx4OAIoMXy+mG+oijw9T3jwV4CqyJNWs7l53kI+ngU6qK61rN0po5gPI+B7z3UH1TXnXCnhwYN/isZx/AWRWwK/VGS9NeZ7PhAIBAKBQCAQKOYPmu5CspmP/AcAAAAASUVORK5CYII=";let X=Array.from({length:17},(()=>Math.floor(20.9*Math.random())+1));const L=!1;L&&(X=[16,18,15,2,9,10,14,14,9,21,10,15,18,4,10,10,12]);const J=Array.from({length:10},(()=>Array.from({length:10},(()=>!1))));function Y(e,o){return J[e][o]?"red":"blue"}const T={node0:{name:"Node 0"},node1:{name:"Node 1"},node2:{name:"Node 2"},node3:{name:"Node 3"},node4:{name:"Node 4"},node5:{name:"Node 5"},node6:{name:"Node 6"},node7:{name:"Node 7"},node8:{name:"Node 8"},node9:{name:"Node 9"}},$={edge1:{source:"node0",target:"node1",label:X[0].toString(),color:Y(0,1)},edge2:{source:"node1",target:"node2",label:X[1].toString(),color:Y(1,2)},edge3:{source:"node3",target:"node4",label:X[2].toString(),color:Y(3,4)},edge4:{source:"node5",target:"node6",label:X[3].toString(),color:Y(5,6)},edge5:{source:"node6",target:"node7",label:X[4].toString(),color:Y(6,7)},edge6:{source:"node0",target:"node3",label:X[5].toString(),color:Y(0,3)},edge7:{source:"node1",target:"node3",label:X[6].toString(),color:Y(1,3)},edge8:{source:"node1",target:"node4",label:X[7].toString(),color:Y(1,4)},edge9:{source:"node2",target:"node4",label:X[8].toString(),color:Y(2,4)},edge10:{source:"node3",target:"node5",label:X[9].toString(),color:Y(3,5)},edge11:{source:"node3",target:"node6",label:X[10].toString(),color:Y(3,6)},edge12:{source:"node4",target:"node6",label:X[11].toString(),color:Y(4,6)},edge13:{source:"node4",target:"node7",label:X[12].toString(),color:Y(4,7)},edge14:{source:"node5",target:"node8",label:X[13].toString(),color:Y(5,8)},edge15:{source:"node0",target:"node8",label:X[14].toString(),color:Y(0,8)},edge16:{source:"node7",target:"node9",label:X[15].toString(),color:Y(7,9)},edge17:{source:"node2",target:"node9",label:X[16].toString(),color:Y(2,9)}};let ee=1;const oe=2;window.innerWidth<=1112&&(ee=.8),window.innerWidth<=736&&(ee=.3);const ne={nodes:{node0:{x:-400*ee,y:200*oe},node1:{x:0*ee,y:200*oe},node2:{x:400*ee,y:200*oe},node3:{x:-200*ee,y:100*oe},node4:{x:200*ee,y:100*oe},node5:{x:-400*ee,y:0*oe},node6:{x:0*ee,y:0*oe},node7:{x:400*ee,y:0*oe},node8:{x:-600*ee,y:100*oe},node9:{x:600*ee,y:100*oe}}},te=(0,y.qj)(k.Kl({view:{panEnabled:!1,zoomEnabled:!1},node:{draggable:!1,label:{visible:!1}},edge:{selectable:1,label:{fontSize:20},normal:{color:e=>Y(+e.source.replace("node",""),+e.target.replace("node","")),width:6}}}));var re={nodes:T,edges:$,edgesWeight:X,customColor:J,layouts:ne,configs:te},ae=n(7139);const le=e=>((0,r.dD)("data-v-be273f16"),e=e(),(0,r.Cn)(),e),de={class:"modal-wrapper"},ie={class:"modal-header"},se={key:0,class:"title"},ce={key:1,class:"title"},ge={class:"flex-item flex-center flex-space-between flex-col"},ue={class:"flex-item flex-center flex-space-between flex-row"},me=["src"],he=["src"],pe=le((()=>(0,r._)("hr",null,null,-1))),fe={key:0};function be(e,o,a,l,d,i){return(0,r.wg)(),(0,r.iD)("div",{id:"tutorial-wrapper",class:"modal-mask",onMousedown:o[2]||(o[2]=(0,t.iM)((o=>{e.showSolution=!1,e.$emit("close-verifier")}),["stop"]))},[(0,r._)("div",de,[(0,r._)("div",{class:"modal-container",onMousedown:o[1]||(o[1]=(0,t.iM)((()=>{}),["stop"]))},[(0,r._)("div",ie,[e.correctSolution?((0,r.wg)(),(0,r.iD)("p",se,"Super, du hast einen minimalen Spannbaum bestimmt!")):((0,r.wg)(),(0,r.iD)("p",ce,"Das ist leider nicht richtig!")),(0,r._)("button",{class:"exit-button",onClick:o[0]||(o[0]=o=>e.$emit("close-verifier"))}," × ")]),(0,r._)("div",ge,[(0,r._)("div",ue,[e.correctSolution?((0,r.wg)(),(0,r.iD)("img",{key:0,class:"corr_img",src:n(4317),draggable:"false"},null,8,me)):((0,r.wg)(),(0,r.iD)("img",{key:1,class:"corr_img",src:n(1613),draggable:"false"},null,8,he))]),pe,e.correctSolution?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",fe,(0,ae.zw)(e.tip),1))])],32)])],32)}var ve=(0,r.aZ)({name:"VerifierComp",props:["correctSolution","tip"],methods:{reloadPage(){location.reload()}}});const Ae=(0,l.Z)(ve,[["render",be],["__scopeId","data-v-be273f16"]]);var we=Ae;const ye=e=>((0,r.dD)("data-v-e235c1fe"),e=e(),(0,r.Cn)(),e),ke=ye((()=>(0,r._)("img",{src:q,class:"icon"},null,-1))),xe=ye((()=>(0,r._)("br",null,null,-1))),Se=(0,r.Uk)(" Kante entfernen "),Ce=[ke,xe,Se],Ee=ye((()=>(0,r._)("p",null,null,-1)));var De=(0,r.aZ)({__name:"ExerciseGreedyGraph",setup(e){const o=new URLSearchParams(window.location.search);o.has("in")||(window.location.href=window.location.href+"?in");const n=(0,y.qj)({...re.nodes}),t=(0,y.qj)({...re.edges}),a=(0,y.iH)([]),l=re.edgesWeight,d=!0,i=(0,y.iH)(!1),s=(0,y.iH)(!1),c=(0,y.iH)("nothing..?"),g=[[0,l[0],0,l[5],0,0,0,0,l[14],0],[l[0],0,l[1],l[6],l[7],0,0,0,0,0],[0,l[1],0,0,l[8],0,0,0,0,l[16]],[l[5],l[6],0,0,l[2],l[9],l[10],0,0,0],[0,l[7],l[8],l[2],0,0,l[11],l[12],0,0],[0,0,0,l[9],0,0,l[3],0,l[13],0],[0,0,0,l[10],l[11],l[3],0,l[4],0,0],[0,0,0,0,l[12],0,l[4],0,0,l[15]],[l[14],0,0,0,0,l[13],0,0,0,0],[0,0,l[16],0,0,0,0,l[15],0,0]],u=[["","edge1","","edge6","","","","","edge15",""],["edge1","","edge2","edge7","edge8","","","","",""],["","edge2","","","edge9","","","","","edge17"],["edge6","edge7","","","edge3","edge10","edge11","","",""],["","edge8","edge9","edge3","","","edge12","edge13","",""],["","","","edge10","","","edge4","","edge14",""],["","","","edge11","edge12","edge4","","edge5","",""],["","","","","edge13","","edge5","","","edge16"],["edge15","","","","","edge14","","","",""],["","","edge17","","","","","edge16","",""]];let m=Array.from({length:10},(()=>!1));function h(e,o){for(let n=0;n<e.length;n++)e[o][n]>0&&!1===m[n]&&(m[n]=!0,h(e,n));return!m.includes(!1)}for(var p=0;p<g.length;p++)for(var f=p;f<g.length;f++)if(g[p][f]>=21){const e=l.indexOf(g[p][f]);l.splice(e,1),g[p][f]=0,g[f][p]=0;const o=u[p][f];delete t[o]}function b(e,o){if(g[e][o]<0)return!1;m=Array.from({length:10},(()=>!1));var n=JSON.parse(JSON.stringify(g));return n[e][o]=0,n[o][e]=0,!h(n,0)}function v(){let e=-12345;for(let o=0;o<g.length;o++)for(let n=0;n<g.length;n++)g[o][n]>Math.max(0,e)&&!b(o,n)&&(e=g[o][n]);return e}function A(){if(d&&(console.log("AR: getCorrectWeight:"),console.log("AR: "+v())),0===a.value.length)return i.value=!0,s.value=!1,void(c.value="Du hast keine Kante ausgewählt. Überprüfe deine Auswahl.");const e=a.value[0];a.value=[];const o=+t[e].source.replace("node",""),n=+t[e].target.replace("node",""),r=+t[e].label;if(d&&(console.log("[DEBUG] edge weight: "+r),console.log("[DEBUG] source node: "+o),console.log("[DEBUG] target node: "+n),console.log(""),console.log("[DEBUG] getCorrectWeight(): "+v())),r!==v())return i.value=!0,s.value=!1,void(c.value="Dies ist nicht richtig, da es nicht die teuerste entfernbare Kante ist. Überprüfe deine Auswahl.");if(b(o,n))return i.value=!0,s.value=!1,void(c.value="Dies ist nicht richtig, da diese Kante den Graphen in zwei teilen würde. Überprüfe deine Auswahl.");g[o][n]=0,g[n][o]=0;const u=l.indexOf(r);l.splice(u,1),delete t[e],-12345===v()&&(console.log("CORRECT; the m.s.t. has the following edges"+l),i.value=!0,s.value=!0,c.value="Super, du hast den minimalen Spannbaum bestimmt!"),console.log("AR: getCorrectWeight:"),console.log("AR: "+v())}return h(g,0)||window.location.reload(),(e,o)=>{const l=(0,r.up)("v-edge-label"),d=(0,r.up)("v-network-graph");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(d,{class:"graph",nodes:n,edges:t,layouts:(0,y.SU)(re).layouts,configs:(0,y.SU)(re).configs,"selected-edges":a.value,"onUpdate:selected-edges":o[0]||(o[0]=e=>a.value=e)},{"edge-label":(0,r.w5)((({edge:e,...o})=>[(0,r.Wm)(l,(0,r.dG)({text:e.label,"text-align":"center","vertical-align":"center"},o),null,16,["text"])])),_:1},8,["nodes","edges","layouts","configs","selected-edges"]),i.value?((0,r.wg)(),(0,r.j4)(we,{key:0,correctSolution:s.value,tip:c.value,onCloseVerifier:o[1]||(o[1]=e=>i.value=!1)},null,8,["correctSolution","tip"])):(0,r.kq)("",!0),(0,r._)("button",{onClick:A,class:"next_task"},Ce),Ee],64)}}});const Be=(0,l.Z)(De,[["__scopeId","data-v-e235c1fe"]]);var Ue=Be;const He={class:"header"},We=(0,r._)("button",{class:"back_to_homepage"},[(0,r._)("img",{src:z,style:{height:"40px",width:"50px"}}),(0,r._)("br"),(0,r.Uk)(" Startseite ")],-1),Ke={class:"aufgabenstellung"},Ne=(0,r._)("span",{style:{"font-size":"25px","font-weight":"bold"}},null,-1);function Oe(e,o,n,t,a,l){const d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",He,[(0,r._)("h1",null,(0,ae.zw)(n.title),1),(0,r.Wm)(d,{to:"/"},{default:(0,r.w5)((()=>[We])),_:1}),(0,r._)("p",Ke,[(0,r.Uk)((0,ae.zw)(n.taskdescription)+" ",1),Ne])])])}var Ge={props:["title","taskdescription"]};const je=(0,l.Z)(Ge,[["render",Oe]]);var ze=je,_e="data:image/png;base64,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";const Re=(0,r._)("img",{src:_e,class:"icon"},null,-1),Pe=(0,r._)("br",null,null,-1),Me=(0,r.Uk)(" Neue Aufgabe "),Ze=[Re,Pe,Me];function Ve(e,o,n,t,a,l){return(0,r.wg)(),(0,r.iD)("button",{onClick:o[0]||(o[0]=e=>l.reloadPage()),class:"next_task"},Ze)}var Ie={methods:{reloadPage(){location.reload()}}};const Fe=(0,l.Z)(Ie,[["render",Ve]]);var Qe=Fe,qe={components:{ExerciseGreedyGraph:Ue,VerifierComp:we,HeaderComp:ze,RemoveEdgeComp:Qe}};const Xe=(0,l.Z)(qe,[["render",Q]]);var Le=Xe;function Je(e,o,n,t,a,l){const d=(0,r.up)("HeaderComp"),i=(0,r.up)("ExerciseKruskalGraph"),s=(0,r.up)("RemoveEdgeComp"),c=(0,r.up)("VerifierComp");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(d,{title:"Minimalen Spannbaum bestimmen mit Kruskal's Algorithmus",taskdescription:"Wähle die preiswerteste Kante aus und füge sie dem Spannbaum hinzu. Achte dabei darauf, dass keine Kreise entstehen! Dies machst du, indem du die Kante mit der Maus auswählst und dann den Knopf drückst."},null,8,["taskdescription"]),(0,r.Wm)(i),(0,r.Wm)(s),this.submitted?((0,r.wg)(),(0,r.j4)(c,{key:0,correctSolution:this.result,tip:"",onCloseVerifier:o[0]||(o[0]=e=>this.submitted=!1)},null,8,["correctSolution"])):(0,r.kq)("",!0)])}const Ye=e=>((0,r.dD)("data-v-575c3d6b"),e=e(),(0,r.Cn)(),e),Te=Ye((()=>(0,r._)("img",{src:q,class:"icon"},null,-1))),$e=Ye((()=>(0,r._)("br",null,null,-1))),eo=(0,r.Uk)(" Kante hinzufügen "),oo=[Te,$e,eo],no=Ye((()=>(0,r._)("p",null,null,-1)));var to=(0,r.aZ)({__name:"ExerciseKruskalGraph",setup(e){const o=new URLSearchParams(window.location.search);o.has("in")||(window.location.href=window.location.href+"?in");const n=(0,y.qj)({...re.nodes}),t=(0,y.qj)({...re.edges}),a=(0,y.qj)({...re.customColor}),l=(0,y.iH)([]),d=re.edgesWeight,i=!0,s=(0,y.iH)(!1),c=(0,y.iH)(!1),g=(0,y.iH)("nothing..?"),u=[[0,d[0],0,d[5],0,0,0,0,d[14],0],[d[0],0,d[1],d[6],d[7],0,0,0,0,0],[0,d[1],0,0,d[8],0,0,0,0,d[16]],[d[5],d[6],0,0,d[2],d[9],d[10],0,0,0],[0,d[7],d[8],d[2],0,0,d[11],d[12],0,0],[0,0,0,d[9],0,0,d[3],0,d[13],0],[0,0,0,d[10],d[11],d[3],0,d[4],0,0],[0,0,0,0,d[12],0,d[4],0,0,d[15]],[d[14],0,0,0,0,d[13],0,0,0,0],[0,0,d[16],0,0,0,0,d[15],0,0]],m=Array.from({length:10},(()=>Array.from({length:10},(()=>0)))),h=[["","edge1","","edge6","","","","","edge15",""],["edge1","","edge2","edge7","edge8","","","","",""],["","edge2","","","edge9","","","","","edge17"],["edge6","edge7","","","edge3","edge10","edge11","","",""],["","edge8","edge9","edge3","","","edge12","edge13","",""],["","","","edge10","","","edge4","","edge14",""],["","","","edge11","edge12","edge4","","edge5","",""],["","","","","edge13","","edge5","","","edge16"],["edge15","","","","","edge14","","","",""],["","","edge17","","","","","edge16","",""]];let p=Array.from({length:10},(()=>!1));function f(e,o){for(let n=0;n<e.length;n++)e[o][n]>0&&!1===p[n]&&(p[n]=!0,f(e,n));return!p.includes(!1)}for(var b=0;b<u.length;b++)for(var v=b;v<u.length;v++)if(u[b][v]>=21){const e=d.indexOf(u[b][v]);d.splice(e,1),u[b][v]=0,u[v][b]=0;const o=h[b][v];delete t[o]}f(u,0)||window.location.reload();let A=!1;function w(e,o,n){A=!1;var t=JSON.parse(JSON.stringify(e));t[o][n]=1,t[n][o]=1;for(let r=0;r<e.length;r++)p=Array.from({length:10},(()=>!1)),k(t,r,-1);return A}function k(e,o,n){for(let t=0;t<e.length;t++)if(e[o][t]>0&&t!==n){if(p[t])return void(A=!0);p[t]=!0,k(e,t,o)}}function x(){let e=12345;for(let o=0;o<u.length;o++)for(let n=0;n<u.length;n++)u[o][n]>0&&!w(m,o,n)&&u[o][n]<e&&(e=u[o][n]);return e}function S(){if(i&&(console.log("AR: getCorrectWeight:"),console.log("AR: "+x())),0===l.value.length)return s.value=!0,c.value=!1,void(g.value="Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.");const e=l.value[0];l.value=[];const o=+t[e].source.replace("node",""),n=+t[e].target.replace("node",""),r=+t[e].label;if(i&&(console.log("[DEBUG] edge weight: "+r),console.log("[DEBUG] source node: "+o),console.log("[DEBUG] target node: "+n),console.log(""),console.log("[DEBUG] getCorrectWeight(): "+x())),r!==x())return s.value=!0,c.value=!1,void(g.value="Dies ist nicht richtig, da es nicht die preiswerteste hinzufügbare Kante ist. Überprüfe deine Auswahl.");if(w(m,o,n))return s.value=!0,c.value=!1,void(g.value="Dies ist nicht richtig, da diese Kante einen Kreis im minimalen Spannbaum bilden würde. Überprüfe deine Auswahl.");a[o][n]=!0,a[n][o]=!0,u[o][n]=0,u[n][o]=0,m[o][n]=1,m[n][o]=1;const h=d.indexOf(r);d.splice(h,1),12345===x()&&(console.log("CORRECT; the m.s.t. has been found"),s.value=!0,c.value=!0,g.value="Super, du hast den minimalen Spannbaum bestimmt!"),console.log("AR: getCorrectWeight:"),console.log("AR: "+x())}return(e,o)=>{const a=(0,r.up)("v-edge-label"),d=(0,r.up)("v-network-graph");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(d,{class:"graph",nodes:n,edges:t,layouts:(0,y.SU)(re).layouts,configs:(0,y.SU)(re).configs,"selected-edges":l.value,"onUpdate:selected-edges":o[0]||(o[0]=e=>l.value=e)},{"edge-label":(0,r.w5)((({edge:e,...o})=>[(0,r.Wm)(a,(0,r.dG)({text:e.label,"text-align":"center","vertical-align":"center"},o),null,16,["text"])])),_:1},8,["nodes","edges","layouts","configs","selected-edges"]),s.value?((0,r.wg)(),(0,r.j4)(we,{key:0,correctSolution:c.value,tip:g.value,onCloseVerifier:o[1]||(o[1]=e=>s.value=!1)},null,8,["correctSolution","tip"])):(0,r.kq)("",!0),(0,r._)("button",{onClick:S,class:"next_task"},oo),no],64)}}});const ro=(0,l.Z)(to,[["__scopeId","data-v-575c3d6b"]]);var ao=ro,lo={components:{ExerciseKruskalGraph:ao,VerifierComp:we,HeaderComp:ze,RemoveEdgeComp:Qe}};const io=(0,l.Z)(lo,[["render",Je]]);var so=io;function co(e,o,n,t,a,l){const d=(0,r.up)("HeaderComp"),i=(0,r.up)("ExercisePrimGraph"),s=(0,r.up)("RemoveEdgeComp"),c=(0,r.up)("VerifierComp");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(d,{title:"Minimalen Spannbaum bestimmen mit Prim's Algorithmus",taskdescription:"Wähle die preiswerteste Kante zwischen der roten und der blauen Partition. Markiere die Kante und färbe sie blau indem du den Knopf drückst."},null,8,["taskdescription"]),(0,r.Wm)(i),(0,r.Wm)(s),this.submitted?((0,r.wg)(),(0,r.j4)(c,{key:0,correctSolution:this.result,tip:"",onCloseVerifier:o[0]||(o[0]=e=>this.submitted=!1)},null,8,["correctSolution"])):(0,r.kq)("",!0)])}let go=Array.from({length:17},(()=>Math.floor(20.9*Math.random())+1));const uo=!1;uo&&(go=[20,19,5,14,5,5,16,6,14,13,10,20,19,1,1,1,1]);const mo=Array.from({length:10},(()=>Array.from({length:10},(()=>!1))));mo[0][0]=!0;const ho=Array.from({length:10},(()=>Array.from({length:10},(()=>0))));function po(e,o){return e===o?mo[e][e]?"blue":"red":ho[e][o]?"blue":mo[e][e]||mo[o][o]?"gray":"red"}const fo={node0:{name:"Node 0",color:po(0,0)},node1:{name:"Node 1",color:po(1,1)},node2:{name:"Node 2",color:po(2,2)},node3:{name:"Node 3",color:po(3,3)},node4:{name:"Node 4",color:po(4,4)},node5:{name:"Node 5",color:po(5,5)},node6:{name:"Node 6",color:po(6,6)},node7:{name:"Node 7",color:po(7,7)},node8:{name:"Node 8",color:po(8,8)},node9:{name:"Node 9",color:po(9,9)}},bo={edge1:{source:"node0",target:"node1",label:go[0].toString(),color:po(0,1)},edge2:{source:"node1",target:"node2",label:go[1].toString(),color:po(1,2)},edge3:{source:"node3",target:"node4",label:go[2].toString(),color:po(3,4)},edge4:{source:"node5",target:"node6",label:go[3].toString(),color:po(5,6)},edge5:{source:"node6",target:"node7",label:go[4].toString(),color:po(6,7)},edge6:{source:"node0",target:"node3",label:go[5].toString(),color:po(0,3)},edge7:{source:"node1",target:"node3",label:go[6].toString(),color:po(1,3)},edge8:{source:"node1",target:"node4",label:go[7].toString(),color:po(1,4)},edge9:{source:"node2",target:"node4",label:go[8].toString(),color:po(2,4)},edge10:{source:"node3",target:"node5",label:go[9].toString(),color:po(3,5)},edge11:{source:"node3",target:"node6",label:go[10].toString(),color:po(3,6)},edge12:{source:"node4",target:"node6",label:go[11].toString(),color:po(4,6)},edge13:{source:"node4",target:"node7",label:go[12].toString(),color:po(4,7)},edge14:{source:"node5",target:"node8",label:go[13].toString(),color:po(5,8)},edge15:{source:"node0",target:"node8",label:go[14].toString(),color:po(0,8)},edge16:{source:"node7",target:"node9",label:go[15].toString(),color:po(7,9)},edge17:{source:"node2",target:"node9",label:go[16].toString(),color:po(2,9)}};let vo=1;const Ao=2;window.innerWidth<=1112&&(vo=.8),window.innerWidth<=736&&(vo=.3);const wo={nodes:{node0:{x:-400*vo,y:200*Ao},node1:{x:0*vo,y:200*Ao},node2:{x:400*vo,y:200*Ao},node3:{x:-200*vo,y:100*Ao},node4:{x:200*vo,y:100*Ao},node5:{x:-400*vo,y:0*Ao},node6:{x:0*vo,y:0*Ao},node7:{x:400*vo,y:0*Ao},node8:{x:-600*vo,y:100*Ao},node9:{x:600*vo,y:100*Ao}}},yo=(0,y.qj)(k.Kl({view:{panEnabled:!1,zoomEnabled:!1},node:{draggable:!0,selectable:!0,label:{visible:!1},normal:{color:e=>po(+e.name.replace("Node ",""),+e.name.replace("Node ",""))},focusring:{visible:!1}},edge:{selectable:1,label:{fontSize:20},normal:{color:e=>po(+e.source.replace("node",""),+e.target.replace("node","")),width:6}}}));var ko={nodes:fo,edges:bo,edgesWeight:go,customColor:mo,reactAdjMatrix:ho,layouts:wo,configs:yo};const xo=e=>((0,r.dD)("data-v-8f1c6520"),e=e(),(0,r.Cn)(),e),So=xo((()=>(0,r._)("img",{src:q,class:"icon"},null,-1))),Co=xo((()=>(0,r._)("br",null,null,-1))),Eo=(0,r.Uk)(" Kante färben "),Do=[So,Co,Eo],Bo=xo((()=>(0,r._)("p",null,null,-1)));var Uo=(0,r.aZ)({__name:"ExercisePrimGraph",setup(e){const o=new URLSearchParams(window.location.search);o.has("in")||(window.location.href=window.location.href+"?in");const n=(0,y.qj)({...ko.nodes}),t=(0,y.qj)({...ko.edges}),a=(0,y.qj)({...ko.customColor}),l=(0,y.qj)({...ko.reactAdjMatrix}),d=(0,y.iH)([]),i=(0,y.iH)([]),s=ko.edgesWeight,c=!0,g=(0,y.iH)(!1),u=(0,y.iH)(!1),m=(0,y.iH)("nothing..?"),h=[[0,s[0],0,s[5],0,0,0,0,s[14],0],[s[0],0,s[1],s[6],s[7],0,0,0,0,0],[0,s[1],0,0,s[8],0,0,0,0,s[16]],[s[5],s[6],0,0,s[2],s[9],s[10],0,0,0],[0,s[7],s[8],s[2],0,0,s[11],s[12],0,0],[0,0,0,s[9],0,0,s[3],0,s[13],0],[0,0,0,s[10],s[11],s[3],0,s[4],0,0],[0,0,0,0,s[12],0,s[4],0,0,s[15]],[s[14],0,0,0,0,s[13],0,0,0,0],[0,0,s[16],0,0,0,0,s[15],0,0]],p=[["","edge1","","edge6","","","","","edge15",""],["edge1","","edge2","edge7","edge8","","","","",""],["","edge2","","","edge9","","","","","edge17"],["edge6","edge7","","","edge3","edge10","edge11","","",""],["","edge8","edge9","edge3","","","edge12","edge13","",""],["","","","edge10","","","edge4","","edge14",""],["","","","edge11","edge12","edge4","","edge5","",""],["","","","","edge13","","edge5","","","edge16"],["edge15","","","","","edge14","","","",""],["","","edge17","","","","","edge16","",""]],f=Array.from({length:10},(()=>!1));function b(e,o){for(let n=0;n<e.length;n++)e[o][n]>0&&!1===f[n]&&(f[n]=!0,b(e,n));return!f.includes(!1)}for(var v=0;v<h.length;v++)for(var A=v;A<h.length;A++)if(h[v][A]>=21){const e=s.indexOf(h[v][A]);s.splice(e,1),h[v][A]=0,h[A][v]=0;const o=p[v][A];delete t[o]}function w(){const e=[];for(let o=0;o<h.length;o++)for(let n=0;n<h.length;n++)a[o][o]!==a[n][n]&&e.push(h[o][n]);return Math.min.apply(null,e.filter((e=>0!==e)))}function k(){if(i.value=["node0","node1","node2","node3","node4","node5","node6","node7","node8","node9"],0===d.value.length)return g.value=!0,u.value=!1,void(m.value="Es scheint als hättest du keine Kante ausgewählt. Überprüfe deine Auswahl.");for(const o of d.value){const e=+t[o].source.replace("node",""),n=+t[o].target.replace("node",""),r=+t[o].label;c&&(console.log("[DEBUG] edge weight: "+r),console.log("[DEBUG] source node: "+e),console.log("[DEBUG] target node: "+n));const d=w();if(c&&(console.log(""),console.log("[DEBUG] minimum edge in grey edges: "+d),console.log("[DEBUG] selected edge in graph: "+r),console.log("[DEBUG] condition 1 satisfied: "+(r===d))),r!==d)return g.value=!0,u.value=!1,void(m.value="Dies scheint nicht richtig zu sein, da die Kante nicht die preiswerteste graue Kante ist.");a[e][e]=!0,a[n][n]=!0,a[e][n]=!0,a[n][e]=!0,l[e][n]=1,l[n][e]=1}for(const o in t){const e=t[o],n=+e.source.replace("node",""),r=+e.target.replace("node","");a[n][n]&&a[r][r]&&1!==l[n][r]&&delete t[o]}d.value=["edge1","edge2","edge3","edge4","edge5","edge6","edge7","edge8","edge9","edge10","edge11","edge12","edge13","edge14","edge15","edge16","edge17"];const e=a[0][0]&&a[1][1]&&a[2][2]&&a[3][3]&&a[4][4]&&a[5][5]&&a[6][6]&&a[7][7]&&a[8][8]&&a[9][9];e&&(console.log("CORRECT; the m.s.t. has the following edges"+s),g.value=!0,u.value=!0,m.value="Super, du hast den minimalen Spannbaum bestimmt!"),setTimeout((()=>{d.value=[]}),1e-5)}return b(h,0)||(console.log("not all reachable"),window.location.reload()),(e,o)=>{const a=(0,r.up)("v-edge-label"),l=(0,r.up)("v-network-graph");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{class:"graph",nodes:n,edges:t,layouts:(0,y.SU)(ko).layouts,configs:(0,y.SU)(ko).configs,"selected-edges":d.value,"onUpdate:selected-edges":o[0]||(o[0]=e=>d.value=e),"selected-nodes":i.value,"onUpdate:selected-nodes":o[1]||(o[1]=e=>i.value=e)},{"edge-label":(0,r.w5)((({edge:e,...o})=>[(0,r.Wm)(a,(0,r.dG)({text:e.label,"text-align":"center","vertical-align":"center"},o),null,16,["text"])])),_:1},8,["nodes","edges","layouts","configs","selected-edges","selected-nodes"]),g.value?((0,r.wg)(),(0,r.j4)(we,{key:0,correctSolution:u.value,tip:m.value,onCloseVerifier:o[2]||(o[2]=e=>g.value=!1)},null,8,["correctSolution","tip"])):(0,r.kq)("",!0),(0,r._)("button",{onClick:k,class:"next_task"},Do),Bo],64)}}});const Ho=(0,l.Z)(Uo,[["__scopeId","data-v-8f1c6520"]]);var Wo=Ho,Ko={components:{ExercisePrimGraph:Wo,VerifierComp:we,HeaderComp:ze,RemoveEdgeComp:Qe}};const No=(0,l.Z)(Ko,[["render",co]]);var Oo=No;const Go=[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:F},{path:"/ex/greedy",name:"ExerciseGreedy",component:Le},{path:"/ex/kruskal",name:"ExerciseKruskal",component:so},{path:"/ex/prim",name:"ExercisePrim",component:Oo}],jo=(0,c.p7)({history:(0,c.PO)(),routes:Go});var zo=jo;const _o=(0,t.ri)(s);_o.use(zo),_o.use(k.ZP),_o.mount("#app")},4317:function(e,o,n){e.exports=n.p+"img/beaver-correct.b69cc745.png"},1613:function(e,o,n){e.exports=n.p+"img/beaver-incorrect.413dd031.png"}},o={};function n(t){var r=o[t];if(void 0!==r)return r.exports;var a=o[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(o,t,r,a){if(!t){var l=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],a=e[c][2];for(var d=!0,i=0;i<t.length;i++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[i])}))?t.splice(i--,1):(d=!1,a<l&&(l=a));if(d){e.splice(c--,1);var s=r();void 0!==s&&(o=s)}}return o}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[t,r,a]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(o){return 0===e[o]};var o=function(o,t){var r,a,l=t[0],d=t[1],i=t[2],s=0;if(l.some((function(o){return 0!==e[o]}))){for(r in d)n.o(d,r)&&(n.m[r]=d[r]);if(i)var c=i(n)}for(o&&o(t);s<l.length;s++)a=l[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},t=self["webpackChunkbsc_ts"]=self["webpackChunkbsc_ts"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(7964)}));t=n.O(t)})();
//# sourceMappingURL=app.0343644b.js.map