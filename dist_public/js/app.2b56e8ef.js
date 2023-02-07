(function(){"use strict";var e={226:function(e,t,s){var i=s(963),a=s(252);const o={class:"App"};function n(e,t,s,i,n,r){const l=(0,a.up)("Settings"),d=(0,a.up)("Register"),g=(0,a.up)("Login"),h=(0,a.up)("Header"),u=(0,a.up)("Dropzone"),c=(0,a.up)("Main");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n.state.settingsModalVisible?((0,a.wg)(),(0,a.j4)(l,{key:0,state:n.state},null,8,["state"])):(0,a.kq)("",!0),n.state.registerModalVisible?((0,a.wg)(),(0,a.j4)(d,{key:1,state:n.state},null,8,["state"])):(0,a.kq)("",!0),n.state.loginModalVisible?((0,a.wg)(),(0,a.j4)(g,{key:2,state:n.state},null,8,["state"])):(0,a.kq)("",!0),(0,a.Wm)(h,{state:n.state},null,8,["state"]),n.state.loggedin?((0,a.wg)(),(0,a.iD)(a.HY,{key:3},(0,a.Ko)(1,(e=>(0,a._)("div",o,[(0,a.Wm)(u,{state:n.state,caption:"zone "+e},null,8,["state","caption"])]))),64)):((0,a.wg)(),(0,a.j4)(c,{key:4,state:n.state},null,8,["state"]))],64)}const r={class:"header"},l=["innerHTML"];function d(e,t,s,i,o,n){const d=(0,a.up)("HeaderTools");return(0,a.wg)(),(0,a.iD)("div",r,[s.state.loggedin?((0,a.wg)(),(0,a.iD)("div",{key:0,innerHTML:"welcome, "+s.state.loggedinUserName},null,8,l)):(0,a.kq)("",!0),(0,a.Wm)(d,{state:s.state},null,8,["state"])])}var g=s(577);const h=e=>((0,a.dD)("data-v-676eeda0"),e=e(),(0,a.Cn)(),e),u={class:"headerTools"},c={key:0},p=h((()=>(0,a._)("br",null,null,-1))),m={key:1},f=h((()=>(0,a._)("br",null,null,-1)));function v(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",u,[s.state.loggedin?((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("button",{class:"button",onClick:t[0]||(t[0]=e=>n.logout())},"logout"),p,(0,a._)("button",{class:"button",onClick:t[1]||(t[1]=e=>n.settings())},"settings")])):((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("button",{class:(0,g.C_)(["button",{float:s.state.registerModalVisible}]),onClick:t[2]||(t[2]=e=>n.login())},"login",2),f,(0,a._)("button",{class:(0,g.C_)(["button",{float:s.state.loginModalVisible}]),onClick:t[3]||(t[3]=e=>n.register())},"register",2)]))])}var w={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logout()},register(){this.state.register()},settings(){this.state.closeModals(),this.state.showModal("settings")}},mounted(){}},b=s(744);const U=(0,b.Z)(w,[["render",v],["__scopeId","data-v-676eeda0"]]);var k=U,D={name:"Header",components:{HeaderTools:k},props:["state"],data(){return{testData:"it works!"}}};const y=(0,b.Z)(D,[["render",d],["__scopeId","data-v-461f5b55"]]);var _=y;const M=e=>((0,a.dD)("data-v-7ca67414"),e=e(),(0,a.Cn)(),e),L={class:"main"},C=M((()=>(0,a._)("br",null,null,-1))),O=M((()=>(0,a._)("br",null,null,-1))),I=M((()=>(0,a._)("br",null,null,-1))),T=M((()=>(0,a._)("br",null,null,-1))),H=M((()=>(0,a._)("br",null,null,-1))),P=M((()=>(0,a._)("br",null,null,-1))),x=M((()=>(0,a._)("br",null,null,-1))),E=M((()=>(0,a._)("br",null,null,-1))),j=M((()=>(0,a._)("br",null,null,-1)));function N(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",L,[(0,a.Uk)(" pshare"),C,O,(0,a.Uk)(" a distributed, browser based operating system"),I,T,(0,a.Uk)(" registration is free and anonymous"),H,P,x,(0,a.Uk)(" upload, manage, use, and share your data..."),E,j,(0,a._)("button",{onClick:t[0]||(t[0]=e=>s.state.register()),class:"button"},"register")])}var S={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logout()},register(){this.state.register()},settings(){this.state.closeModals(),this.state.showModal("settings")}}};const V=(0,b.Z)(S,[["render",N],["__scopeId","data-v-7ca67414"]]);var F=V;const R={class:"settings"};function z(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",R,[(0,a.Uk)(" settings component "),(0,a._)("button",{class:"cancelButton button",onClick:t[0]||(t[0]=e=>s.state.closeModals())},"close")])}var A={name:"Login",props:["state"],data(){return{testData:"it works!"}}};const q=(0,b.Z)(A,[["render",z],["__scopeId","data-v-3e8a8d96"]]);var K=q;const Z=e=>((0,a.dD)("data-v-2f63bca8"),e=e(),(0,a.Cn)(),e),$={class:"login"},W={class:"inputForm"},Y=Z((()=>(0,a._)("div",{class:"sectionTitle"},"LOGIN",-1))),B=Z((()=>(0,a._)("br",null,null,-1))),X=Z((()=>(0,a._)("br",null,null,-1))),G=Z((()=>(0,a._)("div",{id:"loginError",class:"status"},"error",-1)));function J(e,t,s,o,n,r){return(0,a.wg)(),(0,a.iD)("div",$,[(0,a._)("div",W,[Y,B,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.loginUserName=e),ref:"loginModal",onKeyup:t[1]||(t[1]=(0,i.D2)((e=>r.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"user name / email"},null,544),[[i.nr,n.loginUserName]]),(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>n.loginPassword=e),onKeyup:t[3]||(t[3]=(0,i.D2)((e=>r.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"password"},null,544),[[i.nr,n.loginPassword]]),X,G,(0,a._)("button",{onClick:t[4]||(t[4]=e=>r.login()),class:"button"},"login")]),(0,a._)("button",{class:"cancelButton button",id:"loginCancel",onClick:t[5]||(t[5]=e=>s.state.closeModals())},"close")])}var Q={name:"Login",props:["state"],data(){return{loginUserName:"",loginPassword:""}},methods:{login(){if(!this.loginPassword||!this.loginUserName)return;let e={user:this.loginUserName,password:this.loginPassword};fetch(this.state.baseURL+"/login.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{if(e[0])this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0;else{let t=document.querySelector("#loginError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){this.$refs.loginModal.focus()}};const ee=(0,b.Z)(Q,[["render",J],["__scopeId","data-v-2f63bca8"]]);var te=ee;const se=e=>((0,a.dD)("data-v-35569d16"),e=e(),(0,a.Cn)(),e),ie={class:"register"},ae={class:"inputForm"},oe=se((()=>(0,a._)("div",{class:"sectionTitle"},"REGISTER",-1))),ne=se((()=>(0,a._)("br",null,null,-1))),re={key:0,id:"unavailableError",class:"unavailable"},le=se((()=>(0,a._)("br",null,null,-1))),de=se((()=>(0,a._)("br",null,null,-1))),ge=se((()=>(0,a._)("br",null,null,-1))),he=se((()=>(0,a._)("div",{id:"registerError",class:"status"},"error",-1)));function ue(e,t,s,o,n,r){return(0,a.wg)(),(0,a.iD)("div",ie,[(0,a._)("div",ae,[oe,ne,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.registerUserName=e),autofocus:"",ref:"registerModal",onInput:t[1]||(t[1]=e=>r.checkavailability()),onKeyup:t[2]||(t[2]=(0,i.D2)((e=>r.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"user name / email"},null,544),[[i.nr,n.registerUserName]]),this.available?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",re,"user name unavailable!")),(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>n.registerPassword=e),onKeyup:t[4]||(t[4]=(0,i.D2)((e=>r.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"password"},null,544),[[i.nr,n.registerPassword]]),le,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.confirmPassword=e),onKeyup:t[6]||(t[6]=(0,i.D2)((e=>r.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"confirm password"},null,544),[[i.nr,n.confirmPassword]]),de,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=e=>n.registerEmail=e),onKeyup:t[8]||(t[8]=(0,i.D2)((e=>r.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"email (optional, for recovery)"},null,544),[[i.nr,n.registerEmail]]),ge,he,(0,a._)("button",{onClick:t[9]||(t[9]=e=>r.register()),class:"button"},"submit")]),(0,a._)("button",{class:"cancelButton button",id:"registerCancel",onClick:t[10]||(t[10]=e=>s.state.closeModals())},"close")])}var ce={name:"Register",props:["state"],data(){return{registerUserName:"",registerPassword:"",confirmPassword:"",registerEmail:"",available:!0}},methods:{checkavailability(){if(!this.registerUserName)return;let e={userName:this.registerUserName};fetch(this.state.baseURL+"/checkavailability.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{this.available=e[0]}))},register(){if(!this.registerPassword||!this.registerUserName||!this.confirmPassword||!this.available)return;let e={user:this.registerUserName,password:this.registerPassword,email:this.registerEmail};fetch(this.state.baseURL+"/register.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{if(e[0])this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0;else{let t=document.querySelector("#loginError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){this.$refs.registerModal.focus()}};const pe=(0,b.Z)(ce,[["render",ue],["__scopeId","data-v-35569d16"]]);var me=pe;const fe=e=>((0,a.dD)("data-v-45a21a79"),e=e(),(0,a.Cn)(),e),ve=["innerHTML"],we={key:0},be=fe((()=>(0,a._)("p",null,[(0,a.Uk)("Drag one or more files to this "),(0,a._)("i",null,"drop zone"),(0,a.Uk)(".")],-1))),Ue={key:1},ke={key:0},De={key:1};function ye(e,t,s,i,o,n){const r=(0,a.up)("File");return(0,a.wg)(),(0,a.iD)("div",{class:(0,g.C_)(["dropzone",{dragOver:o.draggingOver,fileUploading:o.showProgress,finished:o.finished}]),ref:"drop_zone",onDrop:t[0]||(t[0]=(...e)=>n.dropHandler&&n.dropHandler(...e)),onDragover:t[1]||(t[1]=(...e)=>n.dragOverHandler&&n.dragOverHandler(...e)),onDragleave:t[2]||(t[2]=(...e)=>n.dragLeaveHandler&&n.dragLeaveHandler(...e)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseupHandler&&e.mouseupHandler(...t))},[(0,a._)("div",{class:"caption",innerHTML:s.caption},null,8,ve),o.showProgress||o.finished?((0,a.wg)(),(0,a.iD)("div",Ue,[o.finished?((0,a.wg)(),(0,a.iD)("div",ke,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.state.loggedinUserFiles,(e=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{state:s.state,file:e},null,8,["state","file"])])))),256))])):((0,a.wg)(),(0,a.iD)("div",De,[(0,a.Uk)(" uploading... "),(0,a.kq)("",!0)]))])):((0,a.wg)(),(0,a.iD)("div",we,[be,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.filteredFiles,(e=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(r,{state:s.state,file:e},null,8,["state","file"])])))),256))])),(0,a.kq)("",!0)],34)}function _e(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",{onClick:t[0]||(t[0]=e=>n.load()),class:"file",ref:this.file.id},(0,g.zw)(s.file.name),513)}var Me={name:"File",props:["state","file"],data(){return{}},methods:{load(){window.open(this.state.assetsURL+this.file.hash+"."+this.file.name.split(".")[1].toUpperCase())}},mounted(){let e=this.$refs[this.file.id];console.log(e),e.style.left=this.file.X+"px",e.style.top=this.file.Y+"px",e.onmouseover=()=>{e.style.background="#0f0"},e.onmouseleave=()=>{e.style.background="#0000"}}};const Le=(0,b.Z)(Me,[["render",_e],["__scopeId","data-v-03d2885c"]]);var Ce=Le,Oe={name:"Dropzone",components:{File:Ce},props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,showUploadProgress:!1}},computed:{filteredFiles(){let e=100,t=4,s=150;return this.state.loggedinUserFiles.map(((i,a)=>(i.X=20+a%t*s,i.Y=200+(a/t|0)%e*s,i)))}},methods:{setWidth(e){return`width: calc(${this.fileList[e].perc}%)`},fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){let t,s=!1;e.preventDefault(),this.showProgress||(this.count=0,e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,[...e.dataTransfer.items].forEach(((e,s)=>{if("file"===e.kind){const i=e.getAsFile();console.log(`… file[${s}].name = ${i.name}`),this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,i],t=this.fileList,Array.from(t).forEach(((e,t)=>{e.completed=!1,this.fileList[t].perc=0,this.fileList[t].idx=t}))}})),Array.from(t).forEach(((e,i)=>{if(!s)if(e.size<1e8){let s=new FormData;s.append("user",this.state.loggedinUserName),s.append("passhash",this.state.loggedinUserHash),s.append("name",e.name),s.append("userID",this.state.loggedinUserID),s.append("location",this.state.dropTarget),s.append("description",""),s.append("file",e);let a=new XMLHttpRequest;a.open("POST",this.state.baseURL+"/upload.php");let o=i;a.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[o].perc=t})),a.onreadystatechange=e=>{console.log(e),200==e.status&&4==e.readyState&&console.log(e.response)},a.addEventListener("load",(s=>{console.log(s),e.completed=!0;let i=!0;Array.from(t).forEach((e=>{e.completed||(i=!1)})),i&&(this.state.loadLoggedInUserData(),this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),a.send(s)}else this.showProgress=!1,this.finished=!1,this.draggingOver=!1,s=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,[...e.dataTransfer.files].forEach(((e,t)=>{if(s)return;this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let i=this.fileList;Array.from(i).forEach(((e,t)=>{e.completed=!1,this.fileList[t].idx=t})),Array.from(i).forEach(((e,t)=>{if(e.size<1e8){let s=new FormData;s.append("name",e.name),s.append("userID",this.state.loggedinUserID),s.append("description",""),s.append("file",e);let a=new XMLHttpRequest;a.open("POST",this.state.baseURL+"/upload.php");let o=t;a.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[o].perc=t})),a.onreadystatechange=e=>{200==e.status&&4==e.readyState&&console.log(e.response)},a.addEventListener("load",(t=>{e.completed=!0;let s=!0;Array.from(i).forEach((e=>{e.completed||(s=!1)})),s&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),a.send(s)}else this.draggingOver=!1,this.showProgress=!1,s=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}))))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){e.preventDefault(),e.stopPropagation(),this.showProgress||(this.showProgress||(this.finished=!1),this.draggingOver=!0)}},mounted(){window.onmousemove=()=>{this.draggingOver=!1}}};const Ie=(0,b.Z)(Oe,[["render",ye],["__scopeId","data-v-45a21a79"]]);var Te=Ie,He={components:{Header:_,Main:F,Dropzone:Te,Login:te,Settings:K,Register:me},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net",rootDomain:"pshare.dweet.net",loggedin:!1,assetsURL:"https://assets.dweet.net",admin:!1,loggedinUserAvatar:"",loggedinUserEmail:"",loggedinUserName:"",loggedinUserID:"",loggedinUserFiles:[],loggedinUserHash:"",dropTarget:"/",fetchObj:null,showModal:null,closeModals:null,login:null,token:"",loadLoggedInUserData:null,register:null,logout:null,loginModalVisible:!1,registerModalVisible:!1,settingsModalVisible:!1,setCookie:null}}},methods:{login(){this.closeModals(),this.showModal("login")},logout(){this.clearCookie(),this.state.loggedinUserName="",this.state.loggedinUserID="",this.state.loggedinUserHash="",this.state.loggedinUserFiles=[],this.state.loggedin=!1,window.location.reload()},setCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain})),document.cookie="loggedinUser="+this.state.loggedinUserName+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="minimized="+this.state.minimized+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserID="+this.state.loggedinUserID+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserHash="+this.state.loggedinUserHash+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="token="+this.state.token+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain},fetchObj(e){let t;return t=-1===location.href.indexOf("8000")?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}:{method:"POST",body:JSON.stringify(e)},t},loadLoggedInUserData(){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash};fetch(this.state.baseURL+"/loadUserData.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{console.log(e),e[0]?(this.state.loggedinUserFiles=[],this.$nextTick((()=>{this.state.loggedinUserFiles=e[1]}))):(console.log(e),alert("there was an error loading user data. consarnit!"))}))},register(){this.closeModals(),this.showModal("register")},showModal(e){switch(e){case"login":this.state.loginModalVisible=!0;break;case"register":this.state.registerModalVisible=!0;break;case"settings":this.state.settingsModalVisible=!0;break}},closeModals(){this.state.loginModalVisible=!1,this.state.registerModalVisible=!1,this.state.settingsModalVisible=!1},clearCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain}))},checkCookie(){let e=document.cookie.split(";"),t="",s="",i="";if(e.map((e=>{e=e.trim();let a=e.split("=");switch(a[0]){case"loggedinUser":t=a[1];break;case"loggedinUserID":i=a[1];break;case"loggedinUserHash":s=a[1];break}})),t&&s&&i){let e={user:t,passhash:s};fetch(this.state.baseURL+"/cookieLogin.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{e[0]?(this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0):this.clearCookie()}))}}},mounted(){this.state.login=this.login,this.state.logout=this.logout,this.state.register=this.register,this.state.fetchObj=this.fetchObj,this.state.setCookie=this.setCookie,this.state.showModals=this.showModals,this.state.closeModals=this.closeModals,this.state.loadLoggedInUserData=this.loadLoggedInUserData,this.checkCookie()}};const Pe=(0,b.Z)(He,[["render",n]]);var xe=Pe;(0,i.ri)(xe).mount("#app")}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,i,a,o){if(!i){var n=1/0;for(g=0;g<e.length;g++){i=e[g][0],a=e[g][1],o=e[g][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(e){return s.O[e](i[l])}))?i.splice(l--,1):(r=!1,o<n&&(n=o));if(r){e.splice(g--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var g=e.length;g>0&&e[g-1][2]>o;g--)e[g]=e[g-1];e[g]=[i,a,o]}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,n=i[0],r=i[1],l=i[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(l)var g=l(s)}for(t&&t(i);d<n.length;d++)o=n[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(g)},i=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(226)}));i=s.O(i)})();
//# sourceMappingURL=app.2b56e8ef.js.map