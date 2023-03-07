(function(){"use strict";var __webpack_modules__={1993:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _components_Header__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8592),_components_Main__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9498),_components_Settings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8070),_components_Login__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5590),_components_Viewer__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4648),_components_Register__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8756),_components_Dropzone__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8796);__webpack_exports__["Z"]={components:{Header:_components_Header__WEBPACK_IMPORTED_MODULE_0__.Z,Main:_components_Main__WEBPACK_IMPORTED_MODULE_1__.Z,Dropzone:_components_Dropzone__WEBPACK_IMPORTED_MODULE_6__.Z,Login:_components_Login__WEBPACK_IMPORTED_MODULE_3__.Z,Viewer:_components_Viewer__WEBPACK_IMPORTED_MODULE_4__.Z,Settings:_components_Settings__WEBPACK_IMPORTED_MODULE_2__.Z,Register:_components_Register__WEBPACK_IMPORTED_MODULE_5__.Z},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net",rootDomain:"pshare.dweet.net",loggedin:!1,assetsURL:"https://assets.dweet.net/misc",fileViewerURL:"https://pshare.dweet.net/viewer",admin:!1,loaded:!1,loggedinUserAvatar:"",loggedinUserEmail:"",loggedinUserName:"",loggedinUserHash:"",parentFolderDropTarget:null,cursorX:null,cursorY:null,loadLoggedInUserData:null,loggedinUserBasicIcons:"",loggedinUserSnapToGrid:"",positionFilesAbsolutely:null,loggedinUserID:"",curFileDragging:null,loggedinUserFiles:[],loggedinUserLocation:"",viewerSrc:"",decToAlpha:null,alphaToDec:null,view:null,setting:null,dropTarget:"/",fetchObj:null,getSuffix:null,showModal:null,closeModals:null,login:null,token:"",register:null,logout:null,loginModalVisible:!1,registerModalVisible:!1,settingsModalVisible:!1,viewerModalVisible:!1,setCookie:null}}},methods:{login(){this.closeModals(),this.showModal("login")},logout(){this.clearCookie(),this.state.loggedinUserName="",this.state.loggedinUserID="",this.state.loggedinUserHash="",this.state.loggedinUserLocation="",this.state.loggedinUserFiles=[],this.state.loggedin=!1,window.location.reload()},alphaToDec(e){let t,s,i=0,a=0;while(""!=e)t=e[e.length-1],e=e.substring(0,e.length-1),s=t.charCodeAt(0)<58?t:t.charCodeAt(0)-(t.charCodeAt(0)>96?87:29),a+=s*62**i,i++;return a},decToAlpha(e){let t,s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",i="";while(e)i=s[0|Math.round(62*(e/62-(t=e/62|0)))]+i,e=t;return""==i?"0":i},getAvatar(e){return"undefined"!=typeof this.state.userInfo[e]&&this.state.userInfo[e].avatar?(this.state.userInfo[e].avatar=this.state.userInfo[e].avatar.replace(" ",""),this.state.userInfo[e].avatar):this.state.defaultAvatar},setCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain})),document.cookie="loggedinUser="+this.state.loggedinUserName+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserLocation="+this.state.loggedinUserLocation+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="minimized="+this.state.minimized+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserID="+this.state.loggedinUserID+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserHash="+this.state.loggedinUserHash+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="token="+this.state.token+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain},fetchObj(e){let t;return t=-1===location.href.indexOf("8000")?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}:{method:"POST",body:JSON.stringify(e)},t},loadLoggedInUserData(){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash};fetch(this.state.baseURL+"/loadUserData.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{e[0]?(this.state.loggedinUserFiles=[],this.$nextTick((()=>{e[1].map((e=>{e.private=!!+e.private})),this.state.loggedinUserFiles=e[1];let t=window.location.origin+"/"+this.decToAlpha(this.state.loggedinUserID)+this.state.loggedinUserLocation;window.history.pushState(t,null,t),this.$nextTick((()=>this.state.positionFilesAbsolutely()))}))):(console.log("loadUserData[App.vue]",e),alert("there was an error loading user data. consarnit!"))}))},register(){this.closeModals(),this.showModal("register")},showModal(e){switch(e){case"login":this.state.loginModalVisible=!0;break;case"register":this.state.registerModalVisible=!0;break;case"settings":this.state.settingsModalVisible=!0;break;case"viewer":this.state.viewerModalVisible=!0;break}},view(e){this.closeModals,this.state.viewerSrc=e,this.showModal("viewer")},settings(){this.closeModals(),this.showModal("settings")},closeModals(){this.state.loginModalVisible=!1,this.state.registerModalVisible=!1,this.state.settingsModalVisible=!1,this.state.viewerModalVisible=!1},clearCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain}))},positionFilesAbsolutely(e){this.$nextTick((()=>{e&&this.state.loggedinUserFiles.map((e=>{e.fileDiv.style.position="initial",e.fileDiv.style.left="initial",e.fileDiv.style.top="initial"})),this.$nextTick((()=>{this.state.loggedinUserFiles.map((e=>{e.rect=e.fileDiv.getBoundingClientRect(),e.dragHandleRect=e.dragHandle.getBoundingClientRect()})),this.state.loggedinUserFiles.map((e=>{let t=e.rect;e.fileDiv.style.position="absolute",e.fileDiv.style.left=t.x-11+"px",e.fileDiv.style.top=t.y-82+"px"}))}))}))},checkCookie(){let parts=document.cookie.split(";"),user="",passhash="",id="",location=decodeURIComponent(window.location.pathname);if(parts.map((e=>{e=e.trim();let t=e.split("=");switch(t[0]){case"loggedinUser":user=t[1];break;case"loggedinUserID":id=t[1];break;case"loggedinUserHash":passhash=t[1];break}})),user&&passhash&&id){let sendData={user:user,passhash:passhash,location:location};fetch(this.state.baseURL+"/cookieLogin.php",this.state.fetchObj(sendData)).then((e=>e.json())).then((data=>{this.$nextTick((()=>this.state.loaded=!0)),data[0]?(console.log("cookieLogin.php[App.vue]",data),this.state.loggedin=!0,this.state.loggedinUser=data[1],this.state.token=data[1].passhash,this.state.loggedinUserHash=data[1].passhash,this.state.loggedinUserID=data[1].id,this.state.loggedinUserAvatar=data[1].avatar,this.state.loggedinUserBasicIcons=eval(data[1].basicIcons),//!!(+data[1].basicIcons)
this.state.loggedinUserSnapToGrid=eval(data[1].snapToGrid),//!!(+data[1].snapToGrid)
this.state.loggedinUserName=data[1].name,this.state.loggedinUserLocation=data[1].currentLocation,this.state.loggedinUserEmail=data[1].email,this.state.admin=!!+data[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals()):this.clearCookie()}))}else this.state.loaded=!0},moveToParent(e){let t={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,src:e.id};console.log(t),fetch(this.state.baseURL+"/moveFileToParent.php",this.state.fetchObj(t)).then((e=>e.json())).then((t=>{console.log(t),t[0]&&(this.state.loggedinUserFiles=this.state.loggedinUserFiles.filter((t=>t.id!=e.id)),this.positionFilesAbsolutely(!0))}))},moveFile(e,t){let s={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,src:e.id,dest:t.id};console.log(s),fetch(this.state.baseURL+"/moveFile.php",this.state.fetchObj(s)).then((e=>e.json())).then((t=>{console.log(t),t[0]&&(this.state.loggedinUserFiles=this.state.loggedinUserFiles.filter((t=>t.id!=e.id)),this.positionFilesAbsolutely(!0))}))},setupListeners(){document.body.onmousemove=e=>{if(e.preventDefault(),e.stopPropagation(),null!=this.state.curFileDragging&&this.state.button&&("/"!=this.state.loggedinUserLocation&&(this.state.parentFolderDropTarget.style.backgroundColor="#f004"),this.state.loggedinUserFiles.map((e=>{e.dragHandle.style.backgroundColor="#f004",e.rect=e.fileDiv.getBoundingClientRect(),e.dragHandleRect=e.dragHandle.getBoundingClientRect()})),this.state.curFileDragging.style.left=this.state.cursorX-5+e.pageX+"px",this.state.curFileDragging.style.top=this.state.curFileDragging.dropzone.scrollTop+this.state.cursorY-80+e.pageY+"px",this.state.loggedinUserFiles.map((t=>{e.pageX>t.dragHandleRect.x&&e.pageX<t.dragHandleRect.x+t.dragHandleRect.width&&e.pageY>t.dragHandleRect.y-this.state.curFileDragging.dropzone.scrollTop&&e.pageY<t.dragHandleRect.y+t.dragHandleRect.height-this.state.curFileDragging.dropzone.scrollTop&&"folder"==t.type&&(t.dragHandle.style.backgroundColor="#0f44")})),"/"!=this.state.loggedinUserLocation)){let t=this.state.parentFolderDropTarget.getBoundingClientRect();e.pageX>t.x&&e.pageX<t.x+t.width&&e.pageY>t.y-this.state.curFileDragging.dropzone.scrollTop&&e.pageY<t.y+t.height-this.state.curFileDragging.dropzone.scrollTop&&(this.state.parentFolderDropTarget.style.backgroundColor="#0f44")}},window.onresize=()=>{this.positionFilesAbsolutely(!0)},document.body.onmouseup=e=>{if(null!=this.state.curFileDragging&&0==e.button&&this.state.loggedinUserFiles.map((t=>{if(t.id!=this.state.curFileDragging.file.id&&e.pageX>t.dragHandleRect.x&&e.pageX<t.dragHandleRect.x+t.dragHandleRect.width&&e.pageY>t.dragHandleRect.y&&e.pageY<t.dragHandleRect.y+t.dragHandleRect.height&&"folder"==t.type){console.log("moveFile -> ",this.state.curFileDragging.file,t);let e=this.state.curFileDragging.file;this.moveFile(e,t)}})),"/"!=this.state.loggedinUserLocation){let t=this.state.parentFolderDropTarget.getBoundingClientRect();if(e.pageX>t.x&&e.pageX<t.x+t.width&&e.pageY>t.y&&e.pageY<t.y+t.height){let e=this.state.curFileDragging.file;this.moveToParent(e)}}0==e.button&&(this.state.button=!1,this.state.curFileDragging.file=null,this.state.curFileDragging=null)}}},mounted(){this.state.view=this.view,this.state.login=this.login,this.state.logout=this.logout,this.state.register=this.register,this.state.settings=this.settings,this.state.fetchObj=this.fetchObj,this.state.getSuffix=this.getSuffix,this.state.setCookie=this.setCookie,this.state.decToAlpha=this.decToAlpha,this.state.alphaToDec=this.alphaToDec,this.state.showModals=this.showModals,this.state.closeModals=this.closeModals,this.state.loadLoggedInUserData=this.loadLoggedInUserData,this.state.positionFilesAbsolutely=this.positionFilesAbsolutely,this.checkCookie(),this.setupListeners()}}},5266:function(e,t,s){var i=s(9963),a=s(6252);const o={class:"App"};function n(e,t,s,i,n,r){const l=(0,a.up)("Viewer"),d=(0,a.up)("Settings"),g=(0,a.up)("Register"),h=(0,a.up)("Login"),c=(0,a.up)("Header"),p=(0,a.up)("Dropzone"),u=(0,a.up)("Main");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n.state.viewerModalVisible?((0,a.wg)(),(0,a.j4)(l,{key:0,state:n.state,src:this.state.viewerSrc},null,8,["state","src"])):(0,a.kq)("",!0),n.state.settingsModalVisible?((0,a.wg)(),(0,a.j4)(d,{key:1,state:n.state},null,8,["state"])):(0,a.kq)("",!0),n.state.registerModalVisible?((0,a.wg)(),(0,a.j4)(g,{key:2,state:n.state},null,8,["state"])):(0,a.kq)("",!0),n.state.loginModalVisible?((0,a.wg)(),(0,a.j4)(h,{key:3,state:n.state},null,8,["state"])):(0,a.kq)("",!0),(0,a.Wm)(c,{state:n.state},null,8,["state"]),n.state.loggedin?((0,a.wg)(),(0,a.iD)(a.HY,{key:4},(0,a.Ko)(1,(e=>(0,a._)("div",o,[(0,a.Wm)(p,{state:n.state,caption:"zone "+e},null,8,["state","caption"])]))),64)):((0,a.wg)(),(0,a.j4)(u,{key:5,state:n.state},null,8,["state"]))],64)}var r=s(1993),l=s(3744);const d=(0,l.Z)(r.Z,[["render",n]]);var g=d;(0,i.ri)(g).mount("#app")},8796:function(e,t,s){s.d(t,{Z:function(){return N}});var i=s(6252),a=s(3577);const o={key:0},n={key:1},r={key:0},l={key:1},d=["innerHTML"];function g(e,t,s,g,h,c){const p=(0,i.up)("DZTools"),u=(0,i.up)("File");return(0,i.wg)(),(0,i.iD)("div",{class:(0,a.C_)(["dropzone",{dragOver:h.draggingOver,fileUploading:h.showProgress,finished:h.finished}]),ref:"drop_zone",onDrop:t[0]||(t[0]=(...e)=>c.dropHandler&&c.dropHandler(...e)),onDragover:t[1]||(t[1]=(...e)=>c.dragOverHandler&&c.dragOverHandler(...e)),onDragleave:t[2]||(t[2]=(...e)=>c.dragLeaveHandler&&c.dragLeaveHandler(...e)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseupHandler&&e.mouseupHandler(...t))},[(0,i.Wm)(p,{state:s.state,caption:s.caption},null,8,["state","caption"]),h.showProgress||h.finished?((0,i.wg)(),(0,i.iD)("div",n,[h.finished?((0,i.wg)(),(0,i.iD)("div",r,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.state.loggedinUserFiles,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"fileContainer",key:e.idx},[(0,i.Wm)(u,{state:s.state,file:t},null,8,["state","file"])])))),128))])):((0,i.wg)(),(0,i.iD)("div",l,[(0,i.Uk)(" uploading... "),((0,i.wg)(!0),(0,i.iD)(i.HY,{key:0},(0,i.Ko)(h.fileList,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("span",{class:"fileName",innerHTML:c.fileNameFormatted(e.name)},null,8,d),((0,i.wg)(),(0,i.iD)("div",{class:"progressBar",key:"outer_"+t},[((0,i.wg)(),(0,i.iD)("div",{style:(0,a.j5)(`width:calc(${e.perc}%)`),class:"innerProgress",key:"inner_"+t},null,4))]))])))),128))]))])):((0,i.wg)(),(0,i.iD)("div",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.state.loggedinUserFiles,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:t,class:"fileContainer"},[(0,i.Wm)(u,{state:s.state,file:e,dropzone:c.dropzone},null,8,["state","file","dropzone"])])))),128))])),(0,i.kq)("",!0)],34)}var h=s(9963);const c={class:"fileButtons"},p=["for","title"],u=["id"],_=["title"],f=["innerHTML"],m=["title","href"];function b(e,t,s,o,n,r){return(0,i.wg)(),(0,i.iD)("div",{class:(0,a.C_)(["fileDiv",{folderIcon:"folder"==s.file.type,basicIcon:"folder"!=s.file.type&&s.state.loggedinUserBasicIcons}]),ref:"fileDiv"},[(0,i._)("div",{class:"dragHandle",ref:"dragHandle",onMousedown:t[0]||(t[0]=(...t)=>e.mousedown&&e.mousedown(...t))},null,544),(0,i._)("div",c,[((0,i.wg)(),(0,i.iD)("label",{for:"privateCheckbox"+s.file.id,key:"cblabel"+s.file.id,class:"checkboxLabel",style:{margin:"2px",display:"unset",transform:"scale(.75)"},title:"toggle public visibility of this "+(+s.file.folder?"folder":"file")+"\n["+s.file.name+" is currently "+(0==s.file.private?"PUBLIC":"PRIVATE")+"]"},[(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{type:"checkbox",key:"cbkey"+s.file.id,id:"privateCheckbox"+s.file.id,"onUpdate:modelValue":t[1]||(t[1]=e=>s.file.private=e),onInput:t[2]||(t[2]=e=>r.togglePublic())},null,40,u)),[[h.e8,s.file.private]]),(0,i._)("span",{class:(0,a.C_)(["checkmark",{warning:0==s.file.private}]),style:{border:"1px solid #fff8"}},null,2)],8,p)),(0,i._)("button",{onClick:t[3]||(t[3]=e=>r.renameFile()),title:"rename",class:"fileButton renameButton"}),"folder"!=s.file.type?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:t[4]||(t[4]=e=>r.downloadFile()),title:"download file",class:"fileButton downloadButton"})):(0,i.kq)("",!0),(0,i._)("button",{onClick:t[5]||(t[5]=e=>r.deleteFile()),title:"delete",class:"fileButton deleteButton"})]),(0,i._)("div",{onClick:t[6]||(t[6]=e=>r.load()),class:"file",ref:s.file.id,title:`open ${s.file.name}`},[(0,i._)("div",{class:"fileName",innerHTML:s.file.name,ref:"name_"+s.file.hash},null,8,f)],8,_),r.viewableAsset()&&!s.file.private?((0,i.wg)(),(0,i.iD)("a",{key:0,class:"fileName shareLink",title:"share link (for: "+s.file.name+")\nright+click to copy",innerHTML:"share",ref:"share_"+s.file.hash,href:s.state.baseURL+"/t/"+s.state.decToAlpha(s.file.id),target:"_blank"},null,8,m)):(0,i.kq)("",!0)],2)}var w={name:"File",props:["state","file","dropzone"],data(){return{}},methods:{drag(){},togglePublic(){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,fileID:this.file.id,private:0==this.file.private?1:0};fetch(this.state.baseURL+"/setPrivate.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{}))},share(){this.viewableAsset()&&window.open(this.state.baseURL+"/t/"+this.state.decToAlpha(this.file.id),"_blank")},load(){this.viewableAsset()?this.state.view(this.state.fileViewerURL+"/?url="+this.file.hash):"folder"==this.file.type?window.location.href+=this.file.name+"/":this.downloadFile()},renameFile(){let e=prompt("enter a new name",this.file.name);if(this.file.name!=e&&e){let t={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,fileID:this.file.id,newName:e};fetch(this.state.baseURL+"/renameFile.php",this.state.fetchObj(t)).then((e=>e.json())).then((t=>{console.log("renameFile.php[File.vue]",t),t[0]&&(this.file.name=e)}))}},downloadFile(){let e=document.createElement("a");e.href="/proxy.php?url="+this.state.assetsURL+"/"+this.file.hash,e.download=this.file.name,e.style.position="absolute",e.style.visible="hidden",e.target="_blank",document.body.appendChild(e),e.click(),e.remove()},deleteFile(){if(confirm("are you sure?\n\ndeleting this file ("+this.file.name+") cannot be undone!")){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,fileID:this.file.id};fetch(this.state.baseURL+"/deleteFile.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{e[0]&&(this.state.loggedinUserFiles=this.state.loggedinUserFiles.filter((e=>e.id!=this.file.id)))}))}},viewableAsset(){return-1!==this.file.type.indexOf("image")||-1!==this.file.type.indexOf("video")||-1!==this.file.type.indexOf("audio")}},mounted(){let e=this.$refs.fileDiv,t=this.$refs.dragHandle;e.getBoundingClientRect();this.file.fileDiv=this.$refs.fileDiv,this.file.dragHandle=t,this.file.dragHandleRect=t.getBoundingClientRect(),this.file.rect=this.$refs.fileDiv.getBoundingClientRect(),t.onmousedown=t=>{if(0!==t.button)return;t.preventDefault(),t.stopPropagation(),this.state.button=!0;let s=e.getBoundingClientRect();e.style.position="absolute",this.state.curFileDragging=e,this.state.curFileDragging.file=this.file,this.state.curFileDragging.dropzone=this.dropzone,this.state.cursorX=s.x-t.pageX,this.state.cursorY=s.y-t.pageY},-1!==this.file.type.indexOf("image")&&(e.style.backgroundSize="cover",e.style.repeat="no-repeat",e.style.position="center center",e.style.backgroundImage=`url(${this.state.assetsURL+"/"+this.file.hash})`);let s=this.$refs["name_"+this.file.hash];s.onmouseover=()=>{s.style.background="#0f0",s.style.color="#000",s.style.cursor="pointer"},s.onmouseleave=()=>{s.style.background="#033",s.style.color="#fff",s.style.cursor="default"};let i=this.$refs["share_"+this.file.hash];i.onmouseover=()=>{i.style.background="#0f0",i.style.color="#000",i.style.cursor="pointer"},i.onmouseleave=()=>{i.style.background="#033",i.style.color="#fff",i.style.cursor="default"}}},v=s(3744);const k=(0,v.Z)(w,[["render",b],["__scopeId","data-v-ce902bb4"]]);var U=k;const D=e=>((0,i.dD)("data-v-22a81015"),e=e(),(0,i.Cn)(),e),y={class:"DZTools"},L=["innerHTML"],T=D((()=>(0,i._)("br",null,null,-1))),M=D((()=>(0,i._)("div",{class:"specialIcon"},[(0,i.Uk)(" drop items here to"),(0,i._)("br"),(0,i.Uk)(" move to parent directory ")],-1))),C=[M],x={class:"descText"},I=D((()=>(0,i._)("i",null,"drop zone",-1))),F=D((()=>(0,i._)("br",null,null,-1))),P=D((()=>(0,i._)("span",{style:{float:"left"}},"tools:",-1))),O=D((()=>(0,i._)("br",null,null,-1))),H=D((()=>(0,i._)("br",null,null,-1)));function R(e,t,s,a,o,n){return(0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",{class:"caption",innerHTML:s.caption},null,8,L),T,"/"!==this.state.loggedinUserLocation?((0,i.wg)(),(0,i.iD)("div",{key:0,ref:"parentFolderDropTarget",onClick:t[0]||(t[0]=e=>n.goUp()),title:"click to go up a directory",class:"folderIcon fileDiv parentFolder"},C,512)):(0,i.kq)("",!0),(0,i._)("div",x,[(0,i.Uk)("Drag one or more files to this "),I,(0,i.Uk)("."),F,P,O,(0,i._)("button",{title:"create new folder",onClick:t[1]||(t[1]=e=>n.createFolder()),class:"DZToolsButton folderButton"},[(0,i.Uk)("create"),H,(0,i.Uk)("folder")])])])}s(7658);var E={name:"DZTools",props:["state","caption"],data(){return{testData:"it works!"}},methods:{goUp(){let e=window.location.href.split("/");e.pop(),e.pop(),e=e.join("/"),window.location.href=e+"/"},createFolder(){let e=prompt("enter the name of the folder:","new folder name");if(!e)return;let t={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,currentLocation:this.state.loggedinUserLocation,folderName:e};fetch(this.state.baseURL+"/createFolder.php",this.state.fetchObj(t)).then((e=>e.json())).then((e=>{e[0]?(this.state.loggedinUserFiles.push(e[2]),this.state.positionFilesAbsolutely(!0)):console.log("error creating folder!")}))}},mounted(){this.state.parentFolderDropTarget=this.$refs.parentFolderDropTarget}};const A=(0,v.Z)(E,[["render",R],["__scopeId","data-v-22a81015"]]);var B=A,j={name:"Dropzone",components:{File:U,DZTools:B},props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,drag:!1,showUploadProgress:!1}},computed:{dropzone(){return this.$refs["drop_zone"]},filteredFiles(){let e=100,t=5,s=120,i=100;return this.state.loggedinUserFiles.map(((a,o)=>(a.X=20+o%t*s,a.Y=175+(o/t|0)%e*i,a)))}},methods:{setWidth(e){return`width: calc(${this.fileList[e].perc}%)`},fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){let t=!1;e.preventDefault(),this.showProgress||(this.count=0,e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,[...e.dataTransfer.items].forEach(((e,t)=>{if("file"===e.kind){const t=e.getAsFile();this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,t],this.fileList.map(((e,t)=>{e.completed=!1,e.perc=0,e.idx=t}))}})),this.fileList.map(((e,s)=>{if(!t)if(e.size<1e8){let t=new FormData;t.append("user",this.state.loggedinUserName),t.append("passhash",this.state.loggedinUserHash),t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("location",this.state.loggedinUserLocation),t.append("description",""),t.append("file",e);let i=new XMLHttpRequest;i.open("POST",this.state.baseURL+"/upload.php");let a=s;i.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[a].perc=t})),i.onreadystatechange=e=>{200==e.status&&e.readyState},i.addEventListener("load",(t=>{e.completed=!0;let s=!0;this.fileList.map((e=>{e.completed||(s=!1)})),s&&(this.state.loadLoggedInUserData(),this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),i.send(t)}else this.showProgress=!1,this.finished=!1,this.draggingOver=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,[...e.dataTransfer.files].forEach(((e,s)=>{if(t)return;this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let i=this.fileList;Array.from(i).forEach(((e,t)=>{e.completed=!1,this.fileList[t].idx=t})),Array.from(i).forEach(((e,s)=>{if(e.size<1e8){let t=new FormData;t.append("user",this.state.loggedinUserName),t.append("passhash",this.state.loggedinUserHash),t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("location",this.state.loggedinUserLocation),t.append("description",""),t.append("file",e);let a=new XMLHttpRequest;a.open("POST",this.state.baseURL+"/upload.php");let o=s;a.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[o].perc=t})),a.onreadystatechange=e=>{200==e.status&&e.readyState},a.addEventListener("load",(t=>{e.completed=!0;let s=!0;Array.from(i).forEach((e=>{e.completed||(s=!1)})),s&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),a.send(t)}else this.draggingOver=!1,this.showProgress=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}))))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){e.preventDefault(),e.stopPropagation(),this.showProgress||(this.showProgress||(this.finished=!1),this.draggingOver=!0)}},mounted(){window.onmousemove=()=>{this.draggingOver=!1}}};const q=(0,v.Z)(j,[["render",g],["__scopeId","data-v-f6026ba6"]]);var N=q},8592:function(e,t,s){s.d(t,{Z:function(){return C}});var i=s(6252);const a={class:"header"},o=["innerHTML"];function n(e,t,s,n,r,l){const d=(0,i.up)("HeaderTools");return(0,i.wg)(),(0,i.iD)("div",a,[s.state.loggedin?((0,i.wg)(),(0,i.iD)("div",{key:0,innerHTML:l.headerText()},null,8,o)):(0,i.kq)("",!0),(0,i.Wm)(d,{state:s.state},null,8,["state"])])}var r=s(9963),l=s(3577);const d=e=>((0,i.dD)("data-v-2bda9967"),e=e(),(0,i.Cn)(),e),g={class:"headerTools"},h={key:0},c=["title"],p=d((()=>(0,i._)("span",{class:"checkmark",style:{border:"1px solid #fff8"}},null,-1))),u=d((()=>(0,i._)("span",{class:"headerToolsCheckboxLabel",style:{"margin-top":"30px"}},"basic icons",-1))),_={for:"snapToGridCheckbox",class:"checkboxLabel headerToolsCheckboxes",style:{transform:"scale(.75)","margin-top":"35px"},title:"toggle auto-align icons to grid"},f=d((()=>(0,i._)("span",{class:"checkmark",style:{border:"1px solid #fff8"}},null,-1))),m=d((()=>(0,i._)("span",{class:"headerToolsCheckboxLabel",style:{"margin-top":"30px"}},"snap to grid",-1))),b=d((()=>(0,i._)("br",null,null,-1))),w={key:1},v=d((()=>(0,i._)("br",null,null,-1)));function k(e,t,s,a,o,n){return(0,i.wg)(),(0,i.iD)("div",g,[s.state.loggedin?((0,i.wg)(),(0,i.iD)("div",h,[(0,i._)("label",{for:"basicIconsCheckbox",class:"checkboxLabel headerToolsCheckboxes",style:{transform:"scale(.75)"},title:"use/don't use basic icons\n(by default, gif thumbnails are animated for example\n but with many of them this can cause performance problems"},[(0,i.wy)((0,i._)("input",{type:"checkbox",id:"basicIconsCheckbox","onUpdate:modelValue":t[0]||(t[0]=e=>s.state.loggedinUserBasicIcons=e),onInput:t[1]||(t[1]=e=>n.toggleUserProperty("basicIcons"))},null,544),[[r.e8,s.state.loggedinUserBasicIcons]]),p,u],8,c),(0,i._)("label",_,[(0,i.wy)((0,i._)("input",{type:"checkbox",id:"snapToGridCheckbox","onUpdate:modelValue":t[2]||(t[2]=e=>s.state.loggedinUserSnapToGrid=e),onInput:t[3]||(t[3]=e=>n.toggleUserProperty("snapToGrid"))},null,544),[[r.e8,s.state.loggedinUserSnapToGrid]]),f,m]),(0,i._)("button",{class:"button",onClick:t[4]||(t[4]=e=>n.logout())},"logout"),b,(0,i._)("button",{class:"button",onClick:t[5]||(t[5]=e=>n.settings())},"settings")])):((0,i.wg)(),(0,i.iD)("div",w,[(0,i._)("button",{class:(0,l.C_)(["button",{float:s.state.registerModalVisible}]),onClick:t[6]||(t[6]=e=>n.login())},"login",2),v,(0,i._)("button",{class:(0,l.C_)(["button",{float:s.state.loginModalVisible}]),onClick:t[7]||(t[7]=e=>n.register())},"register",2)]))])}var U={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logout()},register(){this.state.register()},toggleUserProperty(e){let t={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,property:e,value:0==this.state["loggedinUser"+e.split("").map(((e,t)=>t?e:e.toUpperCase())).join("")]?1:0};console.log(t),fetch(this.state.baseURL+"/setUserProperty.php",this.state.fetchObj(t)).then((e=>e.json())).then((e=>{console.log(e)}))},settings(){this.state.closeModals(),this.state.settings()}},mounted(){}},D=s(3744);const y=(0,D.Z)(U,[["render",k],["__scopeId","data-v-2bda9967"]]);var L=y,T={name:"Header",components:{HeaderTools:L},props:["state"],data(){return{}},methods:{headerText(){if(this.state.loggedin){let e='<button onclick="window.location.href=\'/\'" style="min-width:25px" class="button">top</button><button onclick="l=window.location.href.split(\'/\');l.pop();l.pop();l=l.join(\'/\');window.location.href=l+\'/\'" style="min-width:25px" class="button">up</button>';return"current location: "+("/"==this.state.loggedinUserLocation?"":e)+`<span style="background: #000;color:#fff;margin-right:150px;border: 1px solid #4f84;font-size: 14px;padding: 3px;">${this.state.loggedinUserName+this.state.loggedinUserLocation}$</span>`}return"pshare"}}};const M=(0,D.Z)(T,[["render",n],["__scopeId","data-v-6ef7d9df"]]);var C=M},5590:function(e,t,s){s.d(t,{Z:function(){return f}});var i=s(6252),a=s(9963);const o=e=>((0,i.dD)("data-v-20e1c572"),e=e(),(0,i.Cn)(),e),n={class:"login"},r={class:"inputForm"},l=o((()=>(0,i._)("div",{class:"sectionTitle"},"LOGIN",-1))),d=o((()=>(0,i._)("br",null,null,-1))),g=o((()=>(0,i._)("br",null,null,-1))),h=o((()=>(0,i._)("div",{id:"loginError",class:"status"},"error",-1)));function c(e,t,s,o,c,p){return(0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",r,[l,d,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>c.loginUserName=e),ref:"loginModal",onKeyup:t[1]||(t[1]=(0,a.D2)((e=>p.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"user name / email"},null,544),[[a.nr,c.loginUserName]]),(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>c.loginPassword=e),onKeyup:t[3]||(t[3]=(0,a.D2)((e=>p.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"password"},null,544),[[a.nr,c.loginPassword]]),g,h,(0,i._)("button",{onClick:t[4]||(t[4]=e=>p.login()),class:"button"},"login")]),(0,i._)("button",{class:"cancelButton button",id:"loginCancel",onClick:t[5]||(t[5]=e=>s.state.closeModals())},"close")])}var p={name:"Login",props:["state"],data(){return{loginUserName:"",loginPassword:""}},methods:{login(){if(!this.loginPassword||!this.loginUserName)return;let e={user:this.loginUserName,password:this.loginPassword,location:decodeURIComponent(window.location.pathname)};fetch(this.state.baseURL+"/login.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{if(e[0])this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserBasicIcons=e[1].basicIcons,this.state.loggedinUserSnapToGrid=e[1].snapToGrid,this.state.loggedinUserLocation=e[1].currentLocation,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),window.location.reload();else{let t=document.querySelector("#loginError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){this.$refs.loginModal.focus()}},u=s(3744);const _=(0,u.Z)(p,[["render",c],["__scopeId","data-v-20e1c572"]]);var f=_},9498:function(e,t,s){s.d(t,{Z:function(){return w}});var i=s(6252);const a=e=>((0,i.dD)("data-v-26cb2b86"),e=e(),(0,i.Cn)(),e),o={key:0,class:"main"},n=a((()=>(0,i._)("br",null,null,-1))),r=a((()=>(0,i._)("br",null,null,-1))),l=a((()=>(0,i._)("br",null,null,-1))),d=a((()=>(0,i._)("br",null,null,-1))),g=a((()=>(0,i._)("br",null,null,-1))),h=a((()=>(0,i._)("br",null,null,-1))),c=a((()=>(0,i._)("br",null,null,-1))),p=a((()=>(0,i._)("br",null,null,-1))),u=a((()=>(0,i._)("br",null,null,-1)));function _(e,t,s,a,_,f){return s.state.loaded?((0,i.wg)(),(0,i.iD)("div",o,[(0,i.Uk)(" pshare"),n,r,(0,i.Uk)(" a distributed, browser based operating system"),l,d,(0,i.Uk)(" registration is free and anonymous"),g,h,c,(0,i.Uk)(" upload, manage, use, and share your data..."),p,u,(0,i._)("button",{onClick:t[0]||(t[0]=e=>s.state.register()),class:"button"},"register")])):(0,i.kq)("",!0)}var f={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logout()},register(){this.state.register()},settings(){this.state.closeModals(),this.state.showModal("settings")}}},m=s(3744);const b=(0,m.Z)(f,[["render",_],["__scopeId","data-v-26cb2b86"]]);var w=b},8756:function(e,t,s){s.d(t,{Z:function(){return k}});var i=s(6252),a=s(9963),o=s(3577);const n=e=>((0,i.dD)("data-v-110bb7a2"),e=e(),(0,i.Cn)(),e),r={class:"register"},l={class:"inputForm"},d=n((()=>(0,i._)("div",{class:"sectionTitle"},"REGISTER",-1))),g=n((()=>(0,i._)("br",null,null,-1))),h={key:0,id:"unavailableError",class:"unavailable"},c=n((()=>(0,i._)("br",null,null,-1))),p=n((()=>(0,i._)("br",null,null,-1))),u=["innerHTML"],_=n((()=>(0,i._)("br",null,null,-1))),f=n((()=>(0,i._)("div",{id:"registerError",class:"status"},"error",-1)));function m(e,t,s,n,m,b){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",l,[d,g,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>m.registerUserName=e),autofocus:"",ref:"registerModal",onInput:t[1]||(t[1]=e=>b.checkavailability()),onKeyup:t[2]||(t[2]=(0,a.D2)((e=>b.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"user name / email"},null,544),[[a.nr,m.registerUserName]]),this.available?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",h,"user name unavailable!")),(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>m.registerPassword=e),onKeyup:t[4]||(t[4]=(0,a.D2)((e=>b.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"password"},null,544),[[a.nr,m.registerPassword]]),c,(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>m.confirmPassword=e),onInput:t[6]||(t[6]=e=>b.validatePW()),onKeyup:t[7]||(t[7]=(0,a.D2)((e=>b.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"confirm password"},null,544),[[a.nr,m.confirmPassword]]),p,(0,i._)("div",{ref:"pwsMatch",class:(0,o.C_)(["status",{good:m.pwsMatch,noGood:!m.pwsMatch}]),innerHTML:m.pwsMatch?"passwords match!":"passwords don't match!"},null,10,u),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=e=>m.registerEmail=e),onInput:t[9]||(t[9]=e=>b.validatePW()),onKeyup:t[10]||(t[10]=(0,a.D2)((e=>b.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"email (optional, for recovery)"},null,544),[[a.nr,m.registerEmail]]),_,f,(0,i._)("button",{onClick:t[11]||(t[11]=e=>b.register()),class:"button"},"submit")]),(0,i._)("button",{class:"cancelButton button",id:"registerCancel",onClick:t[12]||(t[12]=e=>s.state.closeModals())},"close")])}var b={name:"Register",props:["state"],data(){return{registerUserName:"",registerPassword:"",confirmPassword:"",registerEmail:"",pwsMatch:!1,available:!0}},methods:{validatePW(){this.pwsMatch=!1,this.registerPassword&&this.confirmPassword?(this.$refs.pwsMatch.style.display="block",this.pwsMatch=this.registerPassword==this.confirmPassword):this.$ref.pwsMatch.style.display="none"},checkavailability(){if(!this.registerUserName)return;let e={userName:this.registerUserName};fetch(this.state.baseURL+"/checkavailability.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{this.available=e[0]}))},register(){if(!this.pwsMatch||!this.registerPassword||!this.registerUserName||!this.confirmPassword||!this.available)return;let e={user:this.registerUserName,password:this.registerPassword,email:this.registerEmail};fetch(this.state.baseURL+"/register.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{if(e[0])this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0;else{let t=document.querySelector("#registerError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){this.$refs.registerModal.focus()}},w=s(3744);const v=(0,w.Z)(b,[["render",m],["__scopeId","data-v-110bb7a2"]]);var k=v},8070:function(e,t,s){s.d(t,{Z:function(){return d}});var i=s(6252);const a={class:"settings"};function o(e,t,s,o,n,r){return(0,i.wg)(),(0,i.iD)("div",a,[(0,i.Uk)(" settings component "),(0,i._)("button",{class:"cancelButton button",onClick:t[0]||(t[0]=e=>s.state.closeModals())},"close")])}var n={name:"Login",props:["state"],data(){return{testData:"it works!"}}},r=s(3744);const l=(0,r.Z)(n,[["render",o],["__scopeId","data-v-3e8a8d96"]]);var d=l},4648:function(e,t,s){s.d(t,{Z:function(){return h}});var i=s(6252),a=s(9963);const o={class:"viewer"},n=["src"];function r(e,t,s,r,l,d){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("button",{class:"cancelButton button",id:"viewerClose",onKeyup:t[0]||(t[0]=(0,a.D2)((e=>s.state.closeModals()),["esc"])),ref:"viewerClose",onClick:t[1]||(t[1]=e=>s.state.closeModals())},"close",544),(0,i._)("div",o,[(0,i._)("iframe",{src:s.src,class:"viewerFrame"},null,8,n)])],64)}var l={name:"Viewer",props:["state","src"],data(){return{}},methods:{checkKeys(e){console.log(e)}},mounted(){this.$refs.viewerClose.focus()}},d=s(3744);const g=(0,d.Z)(l,[["render",r],["__scopeId","data-v-c62f6990"]]);var h=g}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var s=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](s,s.exports,__webpack_require__),s.exports}__webpack_require__.m=__webpack_modules__,function(){var e=[];__webpack_require__.O=function(t,s,i,a){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],i=e[d][1],a=e[d][2];for(var n=!0,r=0;r<s.length;r++)(!1&a||o>=a)&&Object.keys(__webpack_require__.O).every((function(e){return __webpack_require__.O[e](s[r])}))?s.splice(r--,1):(n=!1,a<o&&(o=a));if(n){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,i,a]}}(),function(){__webpack_require__.d=function(e,t){for(var s in t)__webpack_require__.o(t,s)&&!__webpack_require__.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};__webpack_require__.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,a,o=s[0],n=s[1],r=s[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in n)__webpack_require__.o(n,i)&&(__webpack_require__.m[i]=n[i]);if(r)var d=r(__webpack_require__)}for(t&&t(s);l<o.length;l++)a=o[l],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return __webpack_require__.O(d)},s=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(5266)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.67e45e95.js.map