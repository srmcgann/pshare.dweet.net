(function(){"use strict";var e={6871:function(e,t,s){var i=s(9963),a=s(6252);const o={class:"App"};function n(e,t,s,i,n,r){const l=(0,a.up)("Settings"),d=(0,a.up)("Register"),h=(0,a.up)("Login"),g=(0,a.up)("Header"),c=(0,a.up)("Dropzone"),u=(0,a.up)("Main");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n.state.settingsModalVisible?((0,a.wg)(),(0,a.j4)(l,{key:0,state:n.state},null,8,["state"])):(0,a.kq)("",!0),n.state.registerModalVisible?((0,a.wg)(),(0,a.j4)(d,{key:1,state:n.state},null,8,["state"])):(0,a.kq)("",!0),n.state.loginModalVisible?((0,a.wg)(),(0,a.j4)(h,{key:2,state:n.state},null,8,["state"])):(0,a.kq)("",!0),(0,a.Wm)(g,{state:n.state},null,8,["state"]),n.state.loggedin?((0,a.wg)(),(0,a.iD)(a.HY,{key:3},(0,a.Ko)(1,(e=>(0,a._)("div",o,[(0,a.Wm)(c,{state:n.state,caption:"zone "+e},null,8,["state","caption"])]))),64)):((0,a.wg)(),(0,a.j4)(u,{key:4,state:n.state},null,8,["state"]))],64)}const r={class:"header"},l=["innerHTML"];function d(e,t,s,i,o,n){const d=(0,a.up)("HeaderTools");return(0,a.wg)(),(0,a.iD)("div",r,[s.state.loggedin?((0,a.wg)(),(0,a.iD)("div",{key:0,innerHTML:n.headerText()},null,8,l)):(0,a.kq)("",!0),(0,a.Wm)(d,{state:s.state},null,8,["state"])])}var h=s(3577);const g=e=>((0,a.dD)("data-v-7bb9048a"),e=e(),(0,a.Cn)(),e),c={class:"headerTools"},u={key:0},p=g((()=>(0,a._)("br",null,null,-1))),f={key:1},m=g((()=>(0,a._)("br",null,null,-1)));function w(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",c,[s.state.loggedin?((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("button",{class:"button",onClick:t[0]||(t[0]=e=>n.logout())},"logout"),p,(0,a._)("button",{class:"button",onClick:t[1]||(t[1]=e=>n.settings())},"settings")])):((0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("button",{class:(0,h.C_)(["button",{float:s.state.registerModalVisible}]),onClick:t[2]||(t[2]=e=>n.login())},"login",2),m,(0,a._)("button",{class:(0,h.C_)(["button",{float:s.state.loginModalVisible}]),onClick:t[3]||(t[3]=e=>n.register())},"register",2)]))])}var b={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logout()},register(){this.state.register()},settings(){this.state.closeModals(),this.state.settings()}},mounted(){}},v=s(3744);const U=(0,v.Z)(b,[["render",w],["__scopeId","data-v-7bb9048a"]]);var k=U,D={name:"Header",components:{HeaderTools:k},props:["state"],data(){return{}},methods:{headerText(){if(this.state.loggedin){let e="<button onclick=\"l=window.location.href.split('/');l.pop();l.pop();l=l.join('/');window.location.href=l+'/'\" style=\"min-width:25px\" class=\"button\">up</button>";return"welcome, "+this.state.loggedinUserName+"<br>"+("/"==this.state.loggedinUserLocation?"":e)+`current directory: ${this.state.loggedinUserLocation}`}return"pshare"}}};const y=(0,v.Z)(D,[["render",d],["__scopeId","data-v-23b4ea1f"]]);var L=y;const _=e=>((0,a.dD)("data-v-7ca67414"),e=e(),(0,a.Cn)(),e),M={class:"main"},C=_((()=>(0,a._)("br",null,null,-1))),T=_((()=>(0,a._)("br",null,null,-1))),I=_((()=>(0,a._)("br",null,null,-1))),H=_((()=>(0,a._)("br",null,null,-1))),O=_((()=>(0,a._)("br",null,null,-1))),P=_((()=>(0,a._)("br",null,null,-1))),x=_((()=>(0,a._)("br",null,null,-1))),N=_((()=>(0,a._)("br",null,null,-1))),j=_((()=>(0,a._)("br",null,null,-1)));function F(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",M,[(0,a.Uk)(" pshare"),C,T,(0,a.Uk)(" a distributed, browser based operating system"),I,H,(0,a.Uk)(" registration is free and anonymous"),O,P,x,(0,a.Uk)(" upload, manage, use, and share your data..."),N,j,(0,a._)("button",{onClick:t[0]||(t[0]=e=>s.state.register()),class:"button"},"register")])}var S={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logout()},register(){this.state.register()},settings(){this.state.closeModals(),this.state.showModal("settings")}}};const E=(0,v.Z)(S,[["render",F],["__scopeId","data-v-7ca67414"]]);var R=E;const V={class:"settings"};function z(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",V,[(0,a.Uk)(" settings component "),(0,a._)("button",{class:"cancelButton button",onClick:t[0]||(t[0]=e=>s.state.closeModals())},"close")])}var B={name:"Login",props:["state"],data(){return{testData:"it works!"}}};const Z=(0,v.Z)(B,[["render",z],["__scopeId","data-v-3e8a8d96"]]);var $=Z;const q=e=>((0,a.dD)("data-v-b636680c"),e=e(),(0,a.Cn)(),e),A={class:"login"},K={class:"inputForm"},W=q((()=>(0,a._)("div",{class:"sectionTitle"},"LOGIN",-1))),Y=q((()=>(0,a._)("br",null,null,-1))),G=q((()=>(0,a._)("br",null,null,-1))),X=q((()=>(0,a._)("div",{id:"loginError",class:"status"},"error",-1)));function J(e,t,s,o,n,r){return(0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("div",K,[W,Y,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.loginUserName=e),ref:"loginModal",onKeyup:t[1]||(t[1]=(0,i.D2)((e=>r.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"user name / email"},null,544),[[i.nr,n.loginUserName]]),(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>n.loginPassword=e),onKeyup:t[3]||(t[3]=(0,i.D2)((e=>r.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"password"},null,544),[[i.nr,n.loginPassword]]),G,X,(0,a._)("button",{onClick:t[4]||(t[4]=e=>r.login()),class:"button"},"login")]),(0,a._)("button",{class:"cancelButton button",id:"loginCancel",onClick:t[5]||(t[5]=e=>s.state.closeModals())},"close")])}var Q={name:"Login",props:["state"],data(){return{loginUserName:"",loginPassword:""}},methods:{login(){if(!this.loginPassword||!this.loginUserName)return;let e={user:this.loginUserName,password:this.loginPassword,location:decodeURIComponent(window.location.pathname)};fetch(this.state.baseURL+"/login.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{if(e[0])this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserLocation=e[1].currentLocation,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0;else{let t=document.querySelector("#loginError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){this.$refs.loginModal.focus()}};const ee=(0,v.Z)(Q,[["render",J],["__scopeId","data-v-b636680c"]]);var te=ee;const se=e=>((0,a.dD)("data-v-161f19f5"),e=e(),(0,a.Cn)(),e),ie={class:"register"},ae={class:"inputForm"},oe=se((()=>(0,a._)("div",{class:"sectionTitle"},"REGISTER",-1))),ne=se((()=>(0,a._)("br",null,null,-1))),re={key:0,id:"unavailableError",class:"unavailable"},le=se((()=>(0,a._)("br",null,null,-1))),de=se((()=>(0,a._)("br",null,null,-1))),he=["innerHTML"],ge=se((()=>(0,a._)("br",null,null,-1))),ce=se((()=>(0,a._)("div",{id:"registerError",class:"status"},"error",-1)));function ue(e,t,s,o,n,r){return(0,a.wg)(),(0,a.iD)("div",ie,[(0,a._)("div",ae,[oe,ne,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.registerUserName=e),autofocus:"",ref:"registerModal",onInput:t[1]||(t[1]=e=>r.checkavailability()),onKeyup:t[2]||(t[2]=(0,i.D2)((e=>r.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"user name / email"},null,544),[[i.nr,n.registerUserName]]),this.available?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",re,"user name unavailable!")),(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>n.registerPassword=e),onKeyup:t[4]||(t[4]=(0,i.D2)((e=>r.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"password"},null,544),[[i.nr,n.registerPassword]]),le,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.confirmPassword=e),onInput:t[6]||(t[6]=e=>r.validatePW()),onKeyup:t[7]||(t[7]=(0,i.D2)((e=>r.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"confirm password"},null,544),[[i.nr,n.confirmPassword]]),de,(0,a._)("div",{ref:"pwsMatch",class:(0,h.C_)(["status",{good:n.pwsMatch,noGood:!n.pwsMatch}]),innerHTML:n.pwsMatch?"passwords match!":"passwords don't match!"},null,10,he),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=e=>n.registerEmail=e),onInput:t[9]||(t[9]=e=>r.validatePW()),onKeyup:t[10]||(t[10]=(0,i.D2)((e=>r.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"email (optional, for recovery)"},null,544),[[i.nr,n.registerEmail]]),ge,ce,(0,a._)("button",{onClick:t[11]||(t[11]=e=>r.register()),class:"button"},"submit")]),(0,a._)("button",{class:"cancelButton button",id:"registerCancel",onClick:t[12]||(t[12]=e=>s.state.closeModals())},"close")])}var pe={name:"Register",props:["state"],data(){return{registerUserName:"",registerPassword:"",confirmPassword:"",registerEmail:"",pwsMatch:!1,available:!0}},methods:{validatePW(){this.pwsMatch=!1,this.registerPassword&&this.confirmPassword?(this.$refs.pwsMatch.style.display="block",this.pwsMatch=this.registerPassword==this.confirmPassword):this.$ref.pwsMatch.style.display="none"},checkavailability(){if(!this.registerUserName)return;let e={userName:this.registerUserName};fetch(this.state.baseURL+"/checkavailability.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{this.available=e[0]}))},register(){if(!this.pwsMatch||!this.registerPassword||!this.registerUserName||!this.confirmPassword||!this.available)return;let e={user:this.registerUserName,password:this.registerPassword,email:this.registerEmail};fetch(this.state.baseURL+"/register.php",this.state.fetchObj(e)).then((e=>e.text())).then((e=>{if(e[0])this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0;else{let t=document.querySelector("#registerError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){this.$refs.registerModal.focus()}};const fe=(0,v.Z)(pe,[["render",ue],["__scopeId","data-v-161f19f5"]]);var me=fe;const we=e=>((0,a.dD)("data-v-f39547e8"),e=e(),(0,a.Cn)(),e),be=["innerHTML"],ve={key:0},Ue=we((()=>(0,a._)("span",{class:"desc"},[(0,a.Uk)("Drag one or more files to this "),(0,a._)("i",null,"drop zone"),(0,a.Uk)(".")],-1))),ke={class:"fileContainer"},De={key:1},ye={key:0},Le={class:"fileContainer"},_e={key:1},Me=["innerHTML"];function Ce(e,t,s,i,o,n){const r=(0,a.up)("DZTools"),l=(0,a.up)("File");return(0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)(["dropzone",{dragOver:o.draggingOver,fileUploading:o.showProgress,finished:o.finished}]),ref:"drop_zone",onDrop:t[0]||(t[0]=(...e)=>n.dropHandler&&n.dropHandler(...e)),onDragover:t[1]||(t[1]=(...e)=>n.dragOverHandler&&n.dragOverHandler(...e)),onDragleave:t[2]||(t[2]=(...e)=>n.dragLeaveHandler&&n.dragLeaveHandler(...e)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseupHandler&&e.mouseupHandler(...t))},[(0,a._)("div",{class:"caption",innerHTML:s.caption},null,8,be),(0,a.Wm)(r,{state:s.state},null,8,["state"]),o.showProgress||o.finished?((0,a.wg)(),(0,a.iD)("div",De,[o.finished?((0,a.wg)(),(0,a.iD)("div",ye,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.state.loggedinUserFiles,(e=>((0,a.wg)(),(0,a.iD)("div",Le,[(0,a.Wm)(l,{state:s.state,file:e},null,8,["state","file"])])))),256))])):((0,a.wg)(),(0,a.iD)("div",_e,[(0,a.Uk)(" uploading... "),((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(o.fileList,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a._)("span",{class:"fileName",innerHTML:n.fileNameFormatted(e.name)},null,8,Me),((0,a.wg)(),(0,a.iD)("div",{class:"progressBar",key:"outer_"+t},[((0,a.wg)(),(0,a.iD)("div",{style:(0,h.j5)(`width:calc(${e.perc}%)`),class:"innerProgress",key:"inner_"+t},null,4))]))])))),128))]))])):((0,a.wg)(),(0,a.iD)("div",ve,[Ue,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.state.loggedinUserFiles,(e=>((0,a.wg)(),(0,a.iD)("div",ke,[(0,a.Wm)(l,{state:s.state,file:e},null,8,["state","file"])])))),256))])),(0,a.kq)("",!0)],34)}const Te={class:"fileButtons"},Ie=["title"],He=["innerHTML"];function Oe(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)(["fileDiv",{folderIcon:"folder"==s.file.type}]),ref:"fileDiv"},[(0,a._)("div",Te,[(0,a._)("button",{onClick:t[0]||(t[0]=e=>n.renameFile()),title:"rename",class:"fileButton renameButton"}),"folder"!=s.file.type?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[1]||(t[1]=e=>n.downloadFile()),title:"download file",class:"fileButton downloadButton"})):(0,a.kq)("",!0),(0,a._)("button",{onClick:t[2]||(t[2]=e=>n.deleteFile()),title:"delete file",class:"fileButton deleteButton"})]),(0,a._)("div",{onClick:t[3]||(t[3]=e=>n.load()),class:"file",ref:s.file.id,title:`open ${s.file.name}`+(+s.file.folder?"":" in a new browser tab")},[(0,a._)("div",{class:"fileName",innerHTML:s.file.name,ref:"name_"+s.file.hash},null,8,He)],8,Ie)],2)}var Pe={name:"File",props:["state","file"],data(){return{}},methods:{load(){"folder"!=this.file.type?window.open(this.state.fileViewerURL+"/"+this.file.hash):window.location.href+=this.file.name+"/"},renameFile(){let e=prompt("enter a new name",this.file.name);if(this.file.name!=e&&e){let t={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,fileID:this.file.id,newName:e};fetch(this.state.baseURL+"/renameFile.php",this.state.fetchObj(t)).then((e=>e.json())).then((t=>{console.log(t),t[0]&&(this.file.name=e)}))}},downloadFile(){let e=document.createElement("a");e.href="proxy.php?url="+this.state.assetsURL+"/"+this.file.hash,e.download=this.file.name,e.style.position="absolute",e.style.visible="hidden",e.target="_blank",document.body.appendChild(e),e.click(),e.remove()},deleteFile(){if(confirm("are you sure?\n\ndeleting this file ("+this.file.name+") cannot be undone!")){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,fileID:this.file.id};fetch(this.state.baseURL+"/deleteFile.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{e[0]&&(console.log("file deleted"),this.state.loggedinUserFiles=this.state.loggedinUserFiles.filter((e=>e.id!=this.file.id)))}))}}},mounted(){if(-1!==this.file.type.indexOf("image")){let e=this.$refs.fileDiv;e.style.backgroundSize="cover",e.style.repeat="no-repeat",e.style.position="center center",e.style.backgroundImage=`url(${this.state.assetsURL+"/"+this.file.hash})`}let e=this.$refs["name_"+this.file.hash];e.onmouseover=()=>{e.style.background="#0f0",e.style.color="#000",e.style.cursor="pointer"},e.onmouseleave=()=>{e.style.background="#033",e.style.color="#fff",e.style.cursor="default"}}};const xe=(0,v.Z)(Pe,[["render",Oe],["__scopeId","data-v-34fb9162"]]);var Ne=xe;const je=e=>((0,a.dD)("data-v-3ea4a120"),e=e(),(0,a.Cn)(),e),Fe={class:"DZTools"},Se=je((()=>(0,a._)("span",{style:{float:"left"}},"tools:",-1))),Ee=je((()=>(0,a._)("br",null,null,-1)));function Re(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",Fe,[Se,(0,a._)("button",{title:"create new folder",onClick:t[0]||(t[0]=e=>n.createFolder()),class:"DZToolsButton folderButton"},[(0,a.Uk)("create"),Ee,(0,a.Uk)("folder")])])}s(7658);var Ve={name:"DZTools",props:["state"],data(){return{testData:"it works!"}},methods:{createFolder(){let e=prompt("enter the name of the folder:","new folder name");if(!e)return;let t={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,currentLocation:this.state.loggedinUserLocation,folderName:e};fetch(this.state.baseURL+"/createFolder.php",this.state.fetchObj(t)).then((e=>e.json())).then((e=>{e[0]?this.state.loggedinUserFiles.push(e[2]):console.log("error creating folder!")}))}}};const ze=(0,v.Z)(Ve,[["render",Re],["__scopeId","data-v-3ea4a120"]]);var Be=ze,Ze={name:"Dropzone",components:{File:Ne,DZTools:Be},props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,showUploadProgress:!1}},computed:{filteredFiles(){let e=100,t=5,s=120,i=100;return this.state.loggedinUserFiles.map(((a,o)=>(a.X=20+o%t*s,a.Y=175+(o/t|0)%e*i,a)))}},methods:{setWidth(e){return`width: calc(${this.fileList[e].perc}%)`},fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){let t=!1;e.preventDefault(),this.showProgress||(this.count=0,e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,[...e.dataTransfer.items].forEach(((e,t)=>{if("file"===e.kind){const t=e.getAsFile();this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,t],this.fileList.map(((e,t)=>{e.completed=!1,e.perc=0,e.idx=t}))}})),this.fileList.map(((e,s)=>{if(!t)if(e.size<1e8){let t=new FormData;t.append("user",this.state.loggedinUserName),t.append("passhash",this.state.loggedinUserHash),t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("location",this.state.loggedinUserLocation),t.append("description",""),t.append("file",e);let i=new XMLHttpRequest;i.open("POST",this.state.baseURL+"/upload.php");let a=s;i.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[a].perc=t})),i.onreadystatechange=e=>{200==e.status&&e.readyState},i.addEventListener("load",(t=>{e.completed=!0;let s=!0;this.fileList.map((e=>{e.completed||(s=!1)})),s&&(this.state.loadLoggedInUserData(),this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),i.send(t)}else this.showProgress=!1,this.finished=!1,this.draggingOver=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,[...e.dataTransfer.files].forEach(((e,s)=>{if(t)return;this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let i=this.fileList;Array.from(i).forEach(((e,t)=>{e.completed=!1,this.fileList[t].idx=t})),Array.from(i).forEach(((e,s)=>{if(e.size<1e8){let t=new FormData;t.append("user",this.state.loggedinUserName),t.append("passhash",this.state.loggedinUserHash),t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("location",this.state.loggedinUserLocation),t.append("description",""),t.append("file",e);let a=new XMLHttpRequest;a.open("POST",this.state.baseURL+"/upload.php");let o=s;a.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[o].perc=t})),a.onreadystatechange=e=>{200==e.status&&e.readyState},a.addEventListener("load",(t=>{e.completed=!0;let s=!0;Array.from(i).forEach((e=>{e.completed||(s=!1)})),s&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),a.send(t)}else this.draggingOver=!1,this.showProgress=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}))))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){e.preventDefault(),e.stopPropagation(),this.showProgress||(this.showProgress||(this.finished=!1),this.draggingOver=!0)}},mounted(){window.onmousemove=()=>{this.draggingOver=!1}}};const $e=(0,v.Z)(Ze,[["render",Ce],["__scopeId","data-v-f39547e8"]]);var qe=$e,Ae={components:{Header:L,Main:R,Dropzone:qe,Login:te,Settings:$,Register:me},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net",rootDomain:"pshare.dweet.net",loggedin:!1,assetsURL:"https://assets.dweet.net/misc",fileViewerURL:"https://pshare.dweet.net/viewer",admin:!1,loggedinUserAvatar:"",loggedinUserEmail:"",loggedinUserName:"",loggedinUserID:"",loggedinUserFiles:[],loggedinUserLocation:"",loggedinUserHash:"",setting:null,dropTarget:"/",fetchObj:null,getSuffix:null,showModal:null,closeModals:null,login:null,token:"",loadLoggedInUserData:null,register:null,logout:null,loginModalVisible:!1,registerModalVisible:!1,settingsModalVisible:!1,setCookie:null}}},methods:{login(){this.closeModals(),this.showModal("login")},logout(){this.clearCookie(),this.state.loggedinUserName="",this.state.loggedinUserID="",this.state.loggedinUserHash="",this.state.loggedinUserLocation="",this.state.loggedinUserFiles=[],this.state.loggedin=!1,window.location.reload()},getSuffix(e){},setCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain})),document.cookie="loggedinUser="+this.state.loggedinUserName+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserLocation="+this.state.loggedinUserLocation+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="minimized="+this.state.minimized+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserID="+this.state.loggedinUserID+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserHash="+this.state.loggedinUserHash+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="token="+this.state.token+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain},fetchObj(e){let t;return t=-1===location.href.indexOf("8000")?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}:{method:"POST",body:JSON.stringify(e)},t},loadLoggedInUserData(){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash};fetch(this.state.baseURL+"/loadUserData.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{e[0]?(this.state.loggedinUserFiles=[],this.$nextTick((()=>{this.state.loggedinUserFiles=e[1];let t=window.location.origin+this.state.loggedinUserLocation;window.history.pushState(t,null,t)}))):(console.log(e),alert("there was an error loading user data. consarnit!"))}))},register(){this.closeModals(),this.showModal("register")},showModal(e){switch(e){case"login":this.state.loginModalVisible=!0;break;case"register":this.state.registerModalVisible=!0;break;case"settings":this.state.settingsModalVisible=!0;break}},settings(){this.closeModals(),this.showModal("settings")},closeModals(){this.state.loginModalVisible=!1,this.state.registerModalVisible=!1,this.state.settingsModalVisible=!1},clearCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain}))},checkCookie(){let e=document.cookie.split(";"),t="",s="",i="",a=decodeURIComponent(window.location.pathname);if(e.map((e=>{e=e.trim();let a=e.split("=");switch(a[0]){case"loggedinUser":t=a[1];break;case"loggedinUserID":i=a[1];break;case"loggedinUserHash":s=a[1];break}})),t&&s&&i){let e={user:t,passhash:s,location:a};fetch(this.state.baseURL+"/cookieLogin.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{e[0]?(this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserLocation=e[1].currentLocation,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0):this.clearCookie()}))}}},mounted(){this.state.login=this.login,this.state.logout=this.logout,this.state.register=this.register,this.state.settings=this.settings,this.state.fetchObj=this.fetchObj,this.state.getSuffix=this.getSuffix,this.state.setCookie=this.setCookie,this.state.showModals=this.showModals,this.state.closeModals=this.closeModals,this.state.loadLoggedInUserData=this.loadLoggedInUserData,this.checkCookie()}};const Ke=(0,v.Z)(Ae,[["render",n]]);var We=Ke;(0,i.ri)(We).mount("#app")}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,i,a,o){if(!i){var n=1/0;for(h=0;h<e.length;h++){i=e[h][0],a=e[h][1],o=e[h][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(e){return s.O[e](i[l])}))?i.splice(l--,1):(r=!1,o<n&&(n=o));if(r){e.splice(h--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[i,a,o]}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,n=i[0],r=i[1],l=i[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(a in r)s.o(r,a)&&(s.m[a]=r[a]);if(l)var h=l(s)}for(t&&t(i);d<n.length;d++)o=n[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(h)},i=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(6871)}));i=s.O(i)})();
//# sourceMappingURL=app.4be23b0e.js.map