(function(){"use strict";var e={388:function(e,t,s){var i=s(963),o=s(252);const a={class:"App"};function n(e,t,s,i,n,r){const l=(0,o.up)("Settings"),d=(0,o.up)("Register"),g=(0,o.up)("Login"),h=(0,o.up)("Header"),c=(0,o.up)("Dropzone"),p=(0,o.up)("Main");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n.state.settingsModalVisible?((0,o.wg)(),(0,o.j4)(l,{key:0,state:n.state},null,8,["state"])):(0,o.kq)("",!0),n.state.registerModalVisible?((0,o.wg)(),(0,o.j4)(d,{key:1,state:n.state},null,8,["state"])):(0,o.kq)("",!0),n.state.loginModalVisible?((0,o.wg)(),(0,o.j4)(g,{key:2,state:n.state},null,8,["state"])):(0,o.kq)("",!0),(0,o.Wm)(h,{state:n.state},null,8,["state"]),((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(1,(e=>(0,o._)("div",a,[(0,o.Wm)(c,{state:n.state,caption:"zone "+e},null,8,["state","caption"])]))),64)),(0,o.Wm)(p,{state:n.state},null,8,["state"])],64)}const r={class:"header"},l=["innerHTML"];function d(e,t,s,i,a,n){const d=(0,o.up)("HeaderTools");return(0,o.wg)(),(0,o.iD)("div",r,[s.state.loggedin?((0,o.wg)(),(0,o.iD)("div",{key:0,innerHTML:"welcome, "+s.state.loggedinUserName},null,8,l)):(0,o.kq)("",!0),(0,o.Wm)(d,{state:s.state},null,8,["state"])])}var g=s(577);const h=e=>((0,o.dD)("data-v-478e3880"),e=e(),(0,o.Cn)(),e),c={class:"headerTools"},p={key:0},u=h((()=>(0,o._)("br",null,null,-1))),m={key:1},f=h((()=>(0,o._)("br",null,null,-1)));function v(e,t,s,i,a,n){return(0,o.wg)(),(0,o.iD)("div",c,[s.state.loggedin?((0,o.wg)(),(0,o.iD)("div",p,[(0,o._)("button",{class:"button",onClick:t[0]||(t[0]=e=>n.logout())},"logout"),u,(0,o._)("button",{class:"button",onClick:t[1]||(t[1]=e=>n.settings())},"settings")])):((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("button",{class:(0,g.C_)(["button",{float:s.state.registerModalVisible}]),onClick:t[2]||(t[2]=e=>n.login())},"login",2),f,(0,o._)("button",{class:(0,g.C_)(["button",{float:s.state.loginModalVisible}]),onClick:t[3]||(t[3]=e=>n.register())},"register",2)]))])}var w={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logout()},register(){this.state.register()},settings(){this.state.closeModals(),this.state.showModal("settings")}},mounted(){this.state.loginModalVisible=!0}},D=s(744);const k=(0,D.Z)(w,[["render",v],["__scopeId","data-v-478e3880"]]);var U=k,b={name:"Header",components:{HeaderTools:U},props:["state"],data(){return{testData:"it works!"}}};const L=(0,D.Z)(b,[["render",d],["__scopeId","data-v-461f5b55"]]);var M=L;const y={class:"main"};function C(e,t,s,i,a,n){return(0,o.wg)(),(0,o.iD)("div",y," main component ")}var _={name:"Main",props:["state"],data(){return{testData:"it works!"}}};const O=(0,D.Z)(_,[["render",C],["__scopeId","data-v-494a82c8"]]);var H=O;const T={class:"settings"};function I(e,t,s,i,a,n){return(0,o.wg)(),(0,o.iD)("div",T,[(0,o.Uk)(" settings component "),(0,o._)("button",{class:"cancelButton button",onClick:t[0]||(t[0]=e=>s.state.closeModals())},"close")])}var P={name:"Login",props:["state"],data(){return{testData:"it works!"}}};const x=(0,D.Z)(P,[["render",I],["__scopeId","data-v-3e8a8d96"]]);var E=x;const N=e=>((0,o.dD)("data-v-7f63594c"),e=e(),(0,o.Cn)(),e),S={class:"login"},j={class:"inputForm"},V=N((()=>(0,o._)("div",{class:"sectionTitle"},"LOGIN",-1))),z=N((()=>(0,o._)("br",null,null,-1))),A=N((()=>(0,o._)("br",null,null,-1))),R=N((()=>(0,o._)("div",{id:"loginError",class:"status"},"error",-1)));function q(e,t,s,a,n,r){return(0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("div",j,[V,z,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.loginUserName=e),autofocus:"",onKeyup:t[1]||(t[1]=(0,i.D2)((e=>r.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"user name / email"},null,544),[[i.nr,n.loginUserName]]),(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>n.loginPassword=e),onKeyup:t[3]||(t[3]=(0,i.D2)((e=>r.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"password"},null,544),[[i.nr,n.loginPassword]]),A,R,(0,o._)("button",{onClick:t[4]||(t[4]=e=>r.login()),class:"button"},"login")]),(0,o._)("button",{class:"cancelButton button",id:"loginCancel",onClick:t[5]||(t[5]=e=>s.state.closeModals())},"close")])}var F={name:"Login",props:["state"],data(){return{loginUserName:"",loginPassword:""}},methods:{login(){if(!this.loginPassword||!this.loginUserName)return;let e={user:this.loginUserName,password:this.loginPassword};fetch(this.state.baseURL+"/login.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{if(e[0])this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0;else{let t=document.querySelector("#loginError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){}};const Z=(0,D.Z)(F,[["render",q],["__scopeId","data-v-7f63594c"]]);var B=Z;const W={class:"register"};function $(e,t,s,i,a,n){return(0,o.wg)(),(0,o.iD)("div",W,[(0,o.Uk)(" register component "),(0,o._)("button",{class:"cancelButton button",id:"registrationCancel",onClick:t[0]||(t[0]=e=>s.state.closeModals())},"close")])}var J={name:"Login",props:["state"],data(){return{testData:"it works!"}}};const K=(0,D.Z)(J,[["render",$],["__scopeId","data-v-ad6dc52a"]]);var X=K;const Y=e=>((0,o.dD)("data-v-94964c62"),e=e(),(0,o.Cn)(),e),G=["innerHTML"],Q={key:0},ee=Y((()=>(0,o._)("p",null,[(0,o.Uk)("Drag one or more files to this "),(0,o._)("i",null,"drop zone"),(0,o.Uk)(".")],-1))),te=[ee],se={key:1},ie={key:0},oe={key:1};function ae(e,t,s,i,a,n){return(0,o.wg)(),(0,o.iD)("div",{class:(0,g.C_)(["dropzone",{dragOver:a.draggingOver,fileUploading:a.showProgress,finished:a.finished}]),ref:"drop_zone",onDrop:t[0]||(t[0]=(...e)=>n.dropHandler&&n.dropHandler(...e)),onDragover:t[1]||(t[1]=(...e)=>n.dragOverHandler&&n.dragOverHandler(...e)),onDragleave:t[2]||(t[2]=(...e)=>n.dragLeaveHandler&&n.dragLeaveHandler(...e)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseupHandler&&e.mouseupHandler(...t))},[(0,o._)("div",{class:"caption",innerHTML:s.caption},null,8,G),a.showProgress||a.finished?((0,o.wg)(),(0,o.iD)("div",se,[a.finished?((0,o.wg)(),(0,o.iD)("div",ie," finished uploading "+(0,g.zw)(this.count)+" files ",1)):((0,o.wg)(),(0,o.iD)("div",oe,[(0,o.Uk)(" uploading... "),(0,o.kq)("",!0)]))])):((0,o.wg)(),(0,o.iD)("div",Q,te)),(0,o.kq)("",!0)],34)}var ne={name:"Dropzone",props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,showUploadProgress:!1}},methods:{setWidth(e){return`width: calc(${this.fileList[e].perc}%)`},fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){let t=!1;e.preventDefault(),this.showProgress||(this.count=0,e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,[...e.dataTransfer.items].forEach(((e,s)=>{if("file"===e.kind){const i=e.getAsFile();console.log(`… file[${s}].name = ${i.name}`),this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,i];let o=this.fileList;Array.from(o).forEach(((e,t)=>{e.completed=!1,this.fileList[t].perc=0,this.fileList[t].idx=t})),Array.from(o).forEach(((e,s)=>{if(!t)if(e.size<1e8){let t=new FormData;t.append("user",this.state.loggedinUserName),t.append("passhash",this.state.loggedinUserHash),t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("description",""),t.append("file",e);let i=new XMLHttpRequest;i.open("POST",this.state.baseURL+"/upload.php");let a=s;i.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[a].perc=t})),i.addEventListener("load",(t=>{e.completed=!0;let s=!0;Array.from(o).forEach((e=>{e.completed||(s=!1)})),s&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),i.send(t)}else this.showProgress=!1,this.finished=!1,this.draggingOver=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,[...e.dataTransfer.files].forEach(((e,s)=>{if(t)return;this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let i=this.fileList;Array.from(i).forEach(((e,t)=>{e.completed=!1,this.fileList[t].idx=t})),Array.from(i).forEach(((e,s)=>{if(e.size<1e8){let t=new FormData;t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("description",""),t.append("file",e);let o=new XMLHttpRequest;o.open("POST",this.state.baseURL+"/upload.php");let a=s;o.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[a].perc=t})),o.addEventListener("load",(t=>{e.completed=!0;let s=!0;Array.from(i).forEach((e=>{e.completed||(s=!1)})),s&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),o.send(t)}else this.draggingOver=!1,this.showProgress=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}))))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){e.preventDefault(),e.stopPropagation(),this.showProgress||(this.showProgress||(this.finished=!1),this.draggingOver=!0)}},mounted(){console.log(this.$refs),window.onmousemove=()=>{this.draggingOver=!1}}};const re=(0,D.Z)(ne,[["render",ae],["__scopeId","data-v-94964c62"]]);var le=re,de={components:{Header:M,Main:H,Dropzone:le,Login:B,Settings:E,Register:X},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net",rootDomain:"pshare.dweet.net",loggedin:!1,admin:!1,loggedinUserAvatar:"",loggedinUserEmail:"",loggedinUserName:"",loggedinUserID:"",loggedinUserHash:"",showModal:null,closeModals:null,login:null,token:"",loadLoggedInUserData:null,register:null,logout:null,loginModalVisible:!1,registerModalVisible:!1,settingsModalVisible:!1,setCookie:null}}},methods:{login(){this.closeModals(),this.showModal("login")},logout(){this.clearCookie(),this.state.loggedinUserName="",this.state.loggedinUserID="",this.state.loggedinUserHash="",this.state.loggedinUserFiles=[],this.state.loggedin=!1,window.location.reload()},setCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain})),document.cookie="loggedinUser="+this.state.loggedinUserName+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="minimized="+this.state.minimized+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserID="+this.state.loggedinUserID+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserHash="+this.state.loggedinUserHash+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="token="+this.state.token+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain},loadLoggedInUserData(){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash};fetch(this.state.baseURL+"/loadUserData.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{e[0]?this.state.loggedinUserFiles=e[1]:(console.log(e),alert("there was an error loading user data. consarnit!"))}))},register(){this.closeModals(),this.showModal("register")},showModal(e){switch(e){case"login":this.state.loginModalVisible=!0;break;case"register":this.state.registerModalVisible=!0;break;case"settings":this.state.settingsModalVisible=!0;break}},closeModals(){this.state.loginModalVisible=!1,this.state.registerModalVisible=!1,this.state.settingsModalVisible=!1},clearCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain}))},checkCookie(){let e=document.cookie.split(";"),t="",s="",i="";if(e.map((e=>{e=e.trim();let o=e.split("=");switch(o[0]){case"loggedinUser":t=o[1];break;case"loggedinUserID":i=o[1];break;case"loggedinUserHash":s=o[1];break}})),t&&s&&i){let e={user:t,passhash:s};fetch(this.state.baseURL+"/cookieLogin.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{e[0]?(this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0):this.clearCookie()}))}}},mounted(){this.state.login=this.login,this.state.logout=this.logout,this.state.register=this.register,this.state.setCookie=this.setCookie,this.state.showModals=this.showModals,this.state.closeModals=this.closeModals,this.state.loadLoggedInUserData=this.loadLoggedInUserData,this.checkCookie()}};const ge=(0,D.Z)(de,[["render",n]]);var he=ge;(0,i.ri)(he).mount("#app")}},t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,i,o,a){if(!i){var n=1/0;for(g=0;g<e.length;g++){i=e[g][0],o=e[g][1],a=e[g][2];for(var r=!0,l=0;l<i.length;l++)(!1&a||n>=a)&&Object.keys(s.O).every((function(e){return s.O[e](i[l])}))?i.splice(l--,1):(r=!1,a<n&&(n=a));if(r){e.splice(g--,1);var d=o();void 0!==d&&(t=d)}}return t}a=a||0;for(var g=e.length;g>0&&e[g-1][2]>a;g--)e[g]=e[g-1];e[g]=[i,o,a]}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,a,n=i[0],r=i[1],l=i[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var g=l(s)}for(t&&t(i);d<n.length;d++)a=n[d],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(g)},i=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(388)}));i=s.O(i)})();
//# sourceMappingURL=app.d6083263.js.map