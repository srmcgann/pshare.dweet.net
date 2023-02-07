(function(){"use strict";var e={252:function(e,t,s){var o=s(963),i=s(548);const a={class:"App"};function n(e,t,s,o,n,r){const l=(0,i.up)("Settings"),d=(0,i.up)("Register"),g=(0,i.up)("Login"),h=(0,i.up)("Header"),c=(0,i.up)("Dropzone"),p=(0,i.up)("Main");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n.state.settingsModalVisible?((0,i.wg)(),(0,i.j4)(l,{key:0,state:n.state},null,8,["state"])):(0,i.kq)("",!0),n.state.registerModalVisible?((0,i.wg)(),(0,i.j4)(d,{key:1,state:n.state},null,8,["state"])):(0,i.kq)("",!0),n.state.loginModalVisible?((0,i.wg)(),(0,i.j4)(g,{key:2,state:n.state},null,8,["state"])):(0,i.kq)("",!0),(0,i.Wm)(h,{state:n.state},null,8,["state"]),((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(1,(e=>(0,i._)("div",a,[(0,i.Wm)(c,{state:n.state,caption:"zone "+e},null,8,["state","caption"])]))),64)),(0,i.Wm)(p,{state:n.state},null,8,["state"])],64)}const r={class:"header"};function l(e,t,s,o,a,n){const l=(0,i.up)("HeaderTools");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Uk)(" header component "),(0,i.Wm)(l,{state:s.state},null,8,["state"])])}var d=s(577);const g=e=>((0,i.dD)("data-v-91fcfc60"),e=e(),(0,i.Cn)(),e),h={class:"headerTools"},c={key:0},p=g((()=>(0,i._)("br",null,null,-1))),u={key:1},f=g((()=>(0,i._)("br",null,null,-1)));function m(e,t,s,o,a,n){return(0,i.wg)(),(0,i.iD)("div",h,[s.state.loggedin?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("button",{class:"button",onClick:t[0]||(t[0]=e=>n.logout())},"logout"),p,(0,i._)("button",{class:"button",onClick:t[1]||(t[1]=e=>n.settings())},"settings")])):((0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("button",{class:(0,d.C_)(["button",{float:s.state.registerModalVisible}]),onClick:t[2]||(t[2]=e=>n.login())},"login",2),f,(0,i._)("button",{class:(0,d.C_)(["button",{float:s.state.loginModalVisible}]),onClick:t[3]||(t[3]=e=>n.register())},"register",2)]))])}var v={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logou()},register(){this.state.register()},settings(){this.state.closeModals(),this.state.showModal("settings")}},mounted(){this.state.loginModalVisible=!0}},w=s(744);const D=(0,w.Z)(v,[["render",m],["__scopeId","data-v-91fcfc60"]]);var k=D,b={name:"Header",components:{HeaderTools:k},props:["state"],data(){return{testData:"it works!"}}};const U=(0,w.Z)(b,[["render",l],["__scopeId","data-v-ed0f71d6"]]);var L=U;const M={class:"main"};function y(e,t,s,o,a,n){return(0,i.wg)(),(0,i.iD)("div",M," main component ")}var _={name:"Main",props:["state"],data(){return{testData:"it works!"}}};const C=(0,w.Z)(_,[["render",y],["__scopeId","data-v-494a82c8"]]);var O=C;const H={class:"settings"};function T(e,t,s,o,a,n){return(0,i.wg)(),(0,i.iD)("div",H,[(0,i.Uk)(" settings component "),(0,i._)("button",{class:"cancelButton button",onClick:t[0]||(t[0]=e=>s.state.closeModals())},"close")])}var P={name:"Login",props:["state"],data(){return{testData:"it works!"}}};const I=(0,w.Z)(P,[["render",T],["__scopeId","data-v-3e8a8d96"]]);var j=I;const x=e=>((0,i.dD)("data-v-17aef8bc"),e=e(),(0,i.Cn)(),e),E={class:"login"},S={class:"inputForm"},N=x((()=>(0,i._)("div",{class:"sectionTitle"},"LOGIN",-1))),V=x((()=>(0,i._)("br",null,null,-1))),z=x((()=>(0,i._)("br",null,null,-1))),A=x((()=>(0,i._)("div",{id:"loginError",class:"status"},"error",-1)));function R(e,t,s,a,n,r){return(0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("div",S,[N,V,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.loginUserName=e),autofocus:"",onKeyup:t[1]||(t[1]=(0,o.D2)((e=>r.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"user name / email"},null,544),[[o.nr,n.loginUserName]]),(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>n.loginPassword=e),onKeyup:t[3]||(t[3]=(0,o.D2)((e=>r.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"password"},null,544),[[o.nr,n.loginPassword]]),z,A,(0,i._)("button",{onClick:t[4]||(t[4]=e=>r.login()),class:"button"},"login")]),(0,i._)("button",{class:"cancelButton button",id:"loginCancel",onClick:t[5]||(t[5]=e=>s.state.closeModals())},"close")])}var Z={name:"Login",props:["state"],data(){return{loginUserName:"",loginPassword:""}},methods:{login(){if(!this.loginPassword||!this.loginUserName)return;let e={user:this.loginUserName,password:this.loginPassword};fetch(this.state.baseURL+"/login.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{if(e[0])console.log(e[1]),this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals();else{let t=document.querySelector("#loginError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){}};const q=(0,w.Z)(Z,[["render",R],["__scopeId","data-v-17aef8bc"]]);var F=q;const B={class:"register"};function W(e,t,s,o,a,n){return(0,i.wg)(),(0,i.iD)("div",B,[(0,i.Uk)(" register component "),(0,i._)("button",{class:"cancelButton button",id:"registrationCancel",onClick:t[0]||(t[0]=e=>s.state.closeModals())},"close")])}var K={name:"Login",props:["state"],data(){return{testData:"it works!"}}};const $=(0,w.Z)(K,[["render",W],["__scopeId","data-v-ad6dc52a"]]);var J=$;const Y=e=>((0,i.dD)("data-v-e0e71a54"),e=e(),(0,i.Cn)(),e),X=["innerHTML"],G={key:0},Q=Y((()=>(0,i._)("p",null,[(0,i.Uk)("Drag one or more files to this "),(0,i._)("i",null,"drop zone"),(0,i.Uk)(".")],-1))),ee=[Q],te={key:1},se={key:0},oe={key:1},ie=["innerHTML"];function ae(e,t,s,o,a,n){return(0,i.wg)(),(0,i.iD)("div",{class:(0,d.C_)(["dropzone",{dragOver:a.draggingOver,fileUploading:a.showProgress,finished:a.finished}]),ref:"drop_zone",onDrop:t[0]||(t[0]=(...e)=>n.dropHandler&&n.dropHandler(...e)),onDragover:t[1]||(t[1]=(...e)=>n.dragOverHandler&&n.dragOverHandler(...e)),onDragleave:t[2]||(t[2]=(...e)=>n.dragLeaveHandler&&n.dragLeaveHandler(...e)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseupHandler&&e.mouseupHandler(...t))},[(0,i._)("div",{class:"caption",innerHTML:s.caption},null,8,X),a.showProgress||a.finished?((0,i.wg)(),(0,i.iD)("div",te,[a.finished?((0,i.wg)(),(0,i.iD)("div",se," finished uploading "+(0,d.zw)(this.count)+" files ",1)):((0,i.wg)(),(0,i.iD)("div",oe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.fileList,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("span",{class:"fileName",innerHTML:n.fileNameFormatted(e.name)},null,8,ie),((0,i.wg)(),(0,i.iD)("div",{class:"progressBar",key:"outer_"+t},[((0,i.wg)(),(0,i.iD)("div",{style:(0,d.j5)(n.setWidth(t)),class:"innerProgress",key:"inner_"+t},null,4))]))])))),128))]))])):((0,i.wg)(),(0,i.iD)("div",G,ee)),(0,i.kq)("",!0)],34)}var ne={name:"Dropzone",props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,showUploadProgress:!1}},methods:{setWidth(e){return`width: calc(${this.fileList[e].perc}%)`},fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){let t=!1;e.preventDefault(),this.showProgress||(this.count=0,e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,[...e.dataTransfer.items].forEach(((e,s)=>{if("file"===e.kind){const o=e.getAsFile();console.log(`… file[${s}].name = ${o.name}`),this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,o];let i=this.fileList;Array.from(i).forEach(((e,t)=>{e.completed=!1,this.fileList[t].perc=0,this.fileList[t].idx=t})),Array.from(i).forEach(((e,s)=>{if(!t)if(e.size<1e8){let t=new FormData;t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("description",""),t.append("file",e);let o=new XMLHttpRequest;o.open("POST",this.state.baseURL+"/upload.php");let a=s;o.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[a].perc=t})),o.addEventListener("load",(t=>{e.completed=!0;let s=!0;Array.from(i).forEach((e=>{e.completed||(s=!1)})),s&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),o.send(t)}else this.showProgress=!1,this.finished=!1,this.draggingOver=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,[...e.dataTransfer.files].forEach(((e,s)=>{if(t)return;this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let o=this.fileList;Array.from(o).forEach(((e,t)=>{e.completed=!1,this.fileList[t].idx=t})),Array.from(o).forEach(((e,s)=>{if(e.size<1e8){let t=new FormData;t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("description",""),t.append("file",e);let i=new XMLHttpRequest;i.open("POST",this.state.baseURL+"/upload.php");let a=s;i.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[a].perc=t})),i.addEventListener("load",(t=>{e.completed=!0;let s=!0;Array.from(o).forEach((e=>{e.completed||(s=!1)})),s&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),i.send(t)}else this.draggingOver=!1,this.showProgress=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}))))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){e.preventDefault(),e.stopPropagation(),this.showProgress||(this.showProgress||(this.finished=!1),this.draggingOver=!0)}},mounted(){console.log(this.$refs),window.onmousemove=()=>{this.draggingOver=!1}}};const re=(0,w.Z)(ne,[["render",ae],["__scopeId","data-v-e0e71a54"]]);var le=re,de={components:{Header:L,Main:O,Dropzone:le,Login:F,Settings:j,Register:J},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net",rootDomain:"pshare.dweet.net",loggedin:!1,admin:!1,loggedinUserAvatar:"",loggedinUserEmail:"",loggedinUserName:"",loggedinUserID:"",loggedinUserHash:"",showModal:null,closeModals:null,login:null,token:"",loadLoggedInUserData:null,register:null,logout:null,loginModalVisible:!1,registerModalVisible:!1,settingsModalVisible:!1,setCookie:null}}},methods:{login(){this.closeModals(),this.showModal("login")},logout(){},setCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain})),document.cookie="loggedinUser="+this.state.loggedinUserName+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="minimized="+this.state.minimized+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserID="+this.state.loggedinUserID+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserHash="+this.state.loggedinUserHash+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="token="+this.state.token+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain},loadLoggedInUserData(){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash};fetch(this.state.baseURL+"/loadUserData.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{e[0]?console.log(e):(console.log(e),alert("there was an error loading user data. consarnit!"))}))},register(){this.closeModals(),this.showModal("register")},showModal(e){switch(e){case"login":this.state.loginModalVisible=!0;break;case"register":this.state.registerModalVisible=!0;break;case"settings":this.state.settingsModalVisible=!0;break}},closeModals(){this.state.loginModalVisible=!1,this.state.registerModalVisible=!1,this.state.settingsModalVisible=!1},clearCookoie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain}))},checkCookie(){let e=document.cookie.split(";"),t="",s="",o="";if(e.map((e=>{e=e.trim();let i=e.split("=");switch(i[0]){case"loggedinUser":t=i[1];break;case"loggedinUserID":o=i[1];break;case"loggedinUserHash":s=i[1];break}})),t&&s&&o){let e={user:t,passhash:s};console.log(e),fetch(this.state.baseURL+"/cookieLogin.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e),e[0]?(console.log(e[1]),this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals()):this.clearCookie()}))}}},mounted(){this.state.login=this.login,this.state.logout=this.logout,this.state.register=this.register,this.state.setCookie=this.setCookie,this.state.showModals=this.showModals,this.state.closeModals=this.closeModals,this.state.loadLoggedInUserData=this.loadLoggedInUserData,this.checkCookie()}};const ge=(0,w.Z)(de,[["render",n]]);var he=ge;(0,o.ri)(he).mount("#app")}},t={};function s(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,o,i,a){if(!o){var n=1/0;for(g=0;g<e.length;g++){o=e[g][0],i=e[g][1],a=e[g][2];for(var r=!0,l=0;l<o.length;l++)(!1&a||n>=a)&&Object.keys(s.O).every((function(e){return s.O[e](o[l])}))?o.splice(l--,1):(r=!1,a<n&&(n=a));if(r){e.splice(g--,1);var d=i();void 0!==d&&(t=d)}}return t}a=a||0;for(var g=e.length;g>0&&e[g-1][2]>a;g--)e[g]=e[g-1];e[g]=[o,i,a]}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,n=o[0],r=o[1],l=o[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(l)var g=l(s)}for(t&&t(o);d<n.length;d++)a=n[d],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(g)},o=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[998],(function(){return s(252)}));o=s.O(o)})();
//# sourceMappingURL=app.c0987a70.js.map