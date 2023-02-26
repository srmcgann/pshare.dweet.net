(function(){"use strict";var e={1609:function(e,t,s){var i=s(9963),a=s(6252);const o={class:"App"};function n(e,t,s,i,n,l){const r=(0,a.up)("Viewer"),d=(0,a.up)("Settings"),h=(0,a.up)("Register"),g=(0,a.up)("Login"),c=(0,a.up)("Header"),u=(0,a.up)("Dropzone"),p=(0,a.up)("Main");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n.state.viewerModalVisible?((0,a.wg)(),(0,a.j4)(r,{key:0,state:n.state,src:this.state.viewerSrc},null,8,["state","src"])):(0,a.kq)("",!0),n.state.settingsModalVisible?((0,a.wg)(),(0,a.j4)(d,{key:1,state:n.state},null,8,["state"])):(0,a.kq)("",!0),n.state.registerModalVisible?((0,a.wg)(),(0,a.j4)(h,{key:2,state:n.state},null,8,["state"])):(0,a.kq)("",!0),n.state.loginModalVisible?((0,a.wg)(),(0,a.j4)(g,{key:3,state:n.state},null,8,["state"])):(0,a.kq)("",!0),(0,a.Wm)(c,{state:n.state},null,8,["state"]),n.state.loggedin?((0,a.wg)(),(0,a.iD)(a.HY,{key:4},(0,a.Ko)(1,(e=>(0,a._)("div",o,[(0,a.Wm)(u,{state:n.state,caption:"zone "+e},null,8,["state","caption"])]))),64)):((0,a.wg)(),(0,a.j4)(p,{key:5,state:n.state},null,8,["state"]))],64)}const l={class:"header"},r=["innerHTML"];function d(e,t,s,i,o,n){const d=(0,a.up)("HeaderTools");return(0,a.wg)(),(0,a.iD)("div",l,[s.state.loggedin?((0,a.wg)(),(0,a.iD)("div",{key:0,innerHTML:n.headerText()},null,8,r)):(0,a.kq)("",!0),(0,a.Wm)(d,{state:s.state},null,8,["state"])])}var h=s(3577);const g=e=>((0,a.dD)("data-v-8af85336"),e=e(),(0,a.Cn)(),e),c={class:"headerTools"},u={key:0},p=["title"],f=g((()=>(0,a._)("span",{class:"checkmark",style:{border:"1px solid #fff8"}},null,-1))),m=g((()=>(0,a._)("br",null,null,-1))),w={key:1},b=g((()=>(0,a._)("br",null,null,-1)));function v(e,t,s,o,n,l){return(0,a.wg)(),(0,a.iD)("div",c,[s.state.loggedin?((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("label",{for:"basicIconsCheckbox",class:"checkboxLabel basicIcons",style:{transform:"scale(.75)"},title:"use/don't use basic icons\n(by default, gif thumbnails are animated for example\n but with many of them this can cause performance problems"},[(0,a.wy)((0,a._)("input",{type:"checkbox",id:"basicIconsCheckbox","onUpdate:modelValue":t[0]||(t[0]=e=>s.state.loggedinUserBasicIcons=e),onInput:t[1]||(t[1]=e=>l.toggleBasicIcons())},null,544),[[i.e8,s.state.loggedinUserBasicIcons]]),f],8,p),(0,a._)("button",{class:"button",onClick:t[2]||(t[2]=e=>l.logout())},"logout"),m,(0,a._)("button",{class:"button",onClick:t[3]||(t[3]=e=>l.settings())},"settings")])):((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("button",{class:(0,h.C_)(["button",{float:s.state.registerModalVisible}]),onClick:t[4]||(t[4]=e=>l.login())},"login",2),b,(0,a._)("button",{class:(0,h.C_)(["button",{float:s.state.loginModalVisible}]),onClick:t[5]||(t[5]=e=>l.register())},"register",2)]))])}var U={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logout()},register(){this.state.register()},toggleBasicIcons(){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,basicIcons:0==this.state.loggedinUserBasicIcons?1:0};fetch(this.state.baseURL+"/setBasicIcons.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{console.log(e)}))},settings(){this.state.closeModals(),this.state.settings()}},mounted(){}},y=s(3744);const k=(0,y.Z)(U,[["render",v],["__scopeId","data-v-8af85336"]]);var D=k,_={name:"Header",components:{HeaderTools:D},props:["state"],data(){return{}},methods:{headerText(){if(this.state.loggedin){let e='<button onclick="window.location.href=\'/\'" style="min-width:25px" class="button">top</button><button onclick="l=window.location.href.split(\'/\');l.pop();l.pop();l=l.join(\'/\');window.location.href=l+\'/\'" style="min-width:25px" class="button">up</button>';return"current location: "+("/"==this.state.loggedinUserLocation?"":e)+`<span style="background: #000;color:#fff;margin-right:150px;border: 1px solid #4f84;font-size: 14px;padding: 3px;">${this.state.loggedinUserName+this.state.loggedinUserLocation}$</span>`}return"pshare"}}};const L=(0,y.Z)(_,[["render",d],["__scopeId","data-v-6ef7d9df"]]);var I=L;const M=e=>((0,a.dD)("data-v-7ca67414"),e=e(),(0,a.Cn)(),e),C={class:"main"},H=M((()=>(0,a._)("br",null,null,-1))),x=M((()=>(0,a._)("br",null,null,-1))),T=M((()=>(0,a._)("br",null,null,-1))),F=M((()=>(0,a._)("br",null,null,-1))),O=M((()=>(0,a._)("br",null,null,-1))),P=M((()=>(0,a._)("br",null,null,-1))),R=M((()=>(0,a._)("br",null,null,-1))),j=M((()=>(0,a._)("br",null,null,-1))),N=M((()=>(0,a._)("br",null,null,-1)));function B(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",C,[(0,a.Uk)(" pshare"),H,x,(0,a.Uk)(" a distributed, browser based operating system"),T,F,(0,a.Uk)(" registration is free and anonymous"),O,P,R,(0,a.Uk)(" upload, manage, use, and share your data..."),j,N,(0,a._)("button",{onClick:t[0]||(t[0]=e=>s.state.register()),class:"button"},"register")])}var V={name:"Main",props:["state"],data(){return{testData:"it works!"}},methods:{login(){this.state.login()},logout(){this.state.logout()},register(){this.state.register()},settings(){this.state.closeModals(),this.state.showModal("settings")}}};const A=(0,y.Z)(V,[["render",B],["__scopeId","data-v-7ca67414"]]);var S=A;const E={class:"settings"};function $(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",E,[(0,a.Uk)(" settings component "),(0,a._)("button",{class:"cancelButton button",onClick:t[0]||(t[0]=e=>s.state.closeModals())},"close")])}var z={name:"Login",props:["state"],data(){return{testData:"it works!"}}};const Y=(0,y.Z)(z,[["render",$],["__scopeId","data-v-3e8a8d96"]]);var Z=Y;const q=e=>((0,a.dD)("data-v-28e3949c"),e=e(),(0,a.Cn)(),e),K={class:"login"},X={class:"inputForm"},W=q((()=>(0,a._)("div",{class:"sectionTitle"},"LOGIN",-1))),G=q((()=>(0,a._)("br",null,null,-1))),J=q((()=>(0,a._)("br",null,null,-1))),Q=q((()=>(0,a._)("div",{id:"loginError",class:"status"},"error",-1)));function ee(e,t,s,o,n,l){return(0,a.wg)(),(0,a.iD)("div",K,[(0,a._)("div",X,[W,G,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.loginUserName=e),ref:"loginModal",onKeyup:t[1]||(t[1]=(0,i.D2)((e=>l.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"user name / email"},null,544),[[i.nr,n.loginUserName]]),(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=e=>n.loginPassword=e),onKeyup:t[3]||(t[3]=(0,i.D2)((e=>l.login()),["enter"])),class:"basicTextInput loginInput",placeholder:"password"},null,544),[[i.nr,n.loginPassword]]),J,Q,(0,a._)("button",{onClick:t[4]||(t[4]=e=>l.login()),class:"button"},"login")]),(0,a._)("button",{class:"cancelButton button",id:"loginCancel",onClick:t[5]||(t[5]=e=>s.state.closeModals())},"close")])}var te={name:"Login",props:["state"],data(){return{loginUserName:"",loginPassword:""}},methods:{login(){if(!this.loginPassword||!this.loginUserName)return;let e={user:this.loginUserName,password:this.loginPassword,location:decodeURIComponent(window.location.pathname)};fetch(this.state.baseURL+"/login.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{if(e[0])this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserBasicIcons=e[1].basicIcons,this.state.loggedinUserLocation=e[1].currentLocation,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),window.location.reload();else{let t=document.querySelector("#loginError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){this.$refs.loginModal.focus()}};const se=(0,y.Z)(te,[["render",ee],["__scopeId","data-v-28e3949c"]]);var ie=se;const ae={class:"viewer"},oe=["src"];function ne(e,t,s,o,n,l){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("button",{class:"cancelButton button",id:"viewerClose",onKeyup:t[0]||(t[0]=(0,i.D2)((e=>s.state.closeModals()),["esc"])),ref:"viewerClose",onClick:t[1]||(t[1]=e=>s.state.closeModals())},"close",544),(0,a._)("div",ae,[(0,a._)("iframe",{src:s.src,class:"viewerFrame"},null,8,oe)])],64)}var le={name:"Viewer",props:["state","src"],data(){return{}},methods:{checkKeys(e){console.log(e)}},mounted(){this.$refs.viewerClose.focus()}};const re=(0,y.Z)(le,[["render",ne],["__scopeId","data-v-155d0fc2"]]);var de=re;const he=e=>((0,a.dD)("data-v-110bb7a2"),e=e(),(0,a.Cn)(),e),ge={class:"register"},ce={class:"inputForm"},ue=he((()=>(0,a._)("div",{class:"sectionTitle"},"REGISTER",-1))),pe=he((()=>(0,a._)("br",null,null,-1))),fe={key:0,id:"unavailableError",class:"unavailable"},me=he((()=>(0,a._)("br",null,null,-1))),we=he((()=>(0,a._)("br",null,null,-1))),be=["innerHTML"],ve=he((()=>(0,a._)("br",null,null,-1))),Ue=he((()=>(0,a._)("div",{id:"registerError",class:"status"},"error",-1)));function ye(e,t,s,o,n,l){return(0,a.wg)(),(0,a.iD)("div",ge,[(0,a._)("div",ce,[ue,pe,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.registerUserName=e),autofocus:"",ref:"registerModal",onInput:t[1]||(t[1]=e=>l.checkavailability()),onKeyup:t[2]||(t[2]=(0,i.D2)((e=>l.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"user name / email"},null,544),[[i.nr,n.registerUserName]]),this.available?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",fe,"user name unavailable!")),(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>n.registerPassword=e),onKeyup:t[4]||(t[4]=(0,i.D2)((e=>l.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"password"},null,544),[[i.nr,n.registerPassword]]),me,(0,a.wy)((0,a._)("input",{type:"password","onUpdate:modelValue":t[5]||(t[5]=e=>n.confirmPassword=e),onInput:t[6]||(t[6]=e=>l.validatePW()),onKeyup:t[7]||(t[7]=(0,i.D2)((e=>l.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"confirm password"},null,544),[[i.nr,n.confirmPassword]]),we,(0,a._)("div",{ref:"pwsMatch",class:(0,h.C_)(["status",{good:n.pwsMatch,noGood:!n.pwsMatch}]),innerHTML:n.pwsMatch?"passwords match!":"passwords don't match!"},null,10,be),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[8]||(t[8]=e=>n.registerEmail=e),onInput:t[9]||(t[9]=e=>l.validatePW()),onKeyup:t[10]||(t[10]=(0,i.D2)((e=>l.register()),["enter"])),class:"basicTextInput registerInput",placeholder:"email (optional, for recovery)"},null,544),[[i.nr,n.registerEmail]]),ve,Ue,(0,a._)("button",{onClick:t[11]||(t[11]=e=>l.register()),class:"button"},"submit")]),(0,a._)("button",{class:"cancelButton button",id:"registerCancel",onClick:t[12]||(t[12]=e=>s.state.closeModals())},"close")])}var ke={name:"Register",props:["state"],data(){return{registerUserName:"",registerPassword:"",confirmPassword:"",registerEmail:"",pwsMatch:!1,available:!0}},methods:{validatePW(){this.pwsMatch=!1,this.registerPassword&&this.confirmPassword?(this.$refs.pwsMatch.style.display="block",this.pwsMatch=this.registerPassword==this.confirmPassword):this.$ref.pwsMatch.style.display="none"},checkavailability(){if(!this.registerUserName)return;let e={userName:this.registerUserName};fetch(this.state.baseURL+"/checkavailability.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{this.available=e[0]}))},register(){if(!this.pwsMatch||!this.registerPassword||!this.registerUserName||!this.confirmPassword||!this.available)return;let e={user:this.registerUserName,password:this.registerPassword,email:this.registerEmail};fetch(this.state.baseURL+"/register.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{if(e[0])this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserName=e[1].name,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals(),this.state.loggedin=!0;else{let t=document.querySelector("#registerError");t.style.display="block",t.innerHTML=e[2]}}))}},mounted(){this.$refs.registerModal.focus()}};const De=(0,y.Z)(ke,[["render",ye],["__scopeId","data-v-110bb7a2"]]);var _e=De;const Le={key:0},Ie={class:"fileContainer"},Me={key:1},Ce={key:0},He={class:"fileContainer"},xe={key:1},Te=["innerHTML"];function Fe(e,t,s,i,o,n){const l=(0,a.up)("DZTools"),r=(0,a.up)("File");return(0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)(["dropzone",{dragOver:o.draggingOver,fileUploading:o.showProgress,finished:o.finished}]),ref:"drop_zone",onDrop:t[0]||(t[0]=(...e)=>n.dropHandler&&n.dropHandler(...e)),onDragover:t[1]||(t[1]=(...e)=>n.dragOverHandler&&n.dragOverHandler(...e)),onDragleave:t[2]||(t[2]=(...e)=>n.dragLeaveHandler&&n.dragLeaveHandler(...e)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseupHandler&&e.mouseupHandler(...t))},[(0,a.Wm)(l,{state:s.state,caption:s.caption},null,8,["state","caption"]),o.showProgress||o.finished?((0,a.wg)(),(0,a.iD)("div",Me,[o.finished?((0,a.wg)(),(0,a.iD)("div",Ce,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.state.loggedinUserFiles,(e=>((0,a.wg)(),(0,a.iD)("div",He,[(0,a.Wm)(r,{state:s.state,file:e},null,8,["state","file"])])))),256))])):((0,a.wg)(),(0,a.iD)("div",xe,[(0,a.Uk)(" uploading... "),((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(o.fileList,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t},[(0,a._)("span",{class:"fileName",innerHTML:n.fileNameFormatted(e.name)},null,8,Te),((0,a.wg)(),(0,a.iD)("div",{class:"progressBar",key:"outer_"+t},[((0,a.wg)(),(0,a.iD)("div",{style:(0,h.j5)(`width:calc(${e.perc}%)`),class:"innerProgress",key:"inner_"+t},null,4))]))])))),128))]))])):((0,a.wg)(),(0,a.iD)("div",Le,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.state.loggedinUserFiles,((e,t)=>((0,a.wg)(),(0,a.iD)("div",Ie,[(0,a.Wm)(r,{state:s.state,file:e},null,8,["state","file"])])))),256))])),(0,a.kq)("",!0)],34)}const Oe={class:"fileButtons"},Pe=["for","title"],Re=["id"],je=["title"],Ne=["title"],Be=["innerHTML"];function Ve(e,t,s,o,n,l){return(0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)(["fileDiv",{folderIcon:"folder"==s.file.type,basicIcon:"folder"!=s.file.type&&s.state.loggedinUserBasicIcons}]),ref:"fileDiv"},[(0,a._)("div",{class:"dragHandle",ref:"dragHandle",onMousedown:t[0]||(t[0]=(...t)=>e.mousedown&&e.mousedown(...t))},null,544),(0,a._)("div",Oe,[((0,a.wg)(),(0,a.iD)("label",{for:"privateCheckbox"+s.file.id,key:"cblabel"+s.file.id,class:"checkboxLabel",style:{margin:"2px",display:"unset",transform:"scale(.75)"},title:"toggle public visibility of this "+(+s.file.folder?"folder":"file")+"\n["+s.file.name+" is currently "+(0==s.file.private?"PUBLIC":"PRIVATE")+"]"},[(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{type:"checkbox",key:"cbkey"+s.file.id,id:"privateCheckbox"+s.file.id,"onUpdate:modelValue":t[1]||(t[1]=e=>s.file.private=e),onInput:t[2]||(t[2]=e=>l.togglePublic())},null,40,Re)),[[i.e8,s.file.private]]),(0,a._)("span",{class:(0,h.C_)(["checkmark",{warning:0==s.file.private}]),style:{border:"1px solid #fff8"}},null,2)],8,Pe)),(0,a._)("button",{onClick:t[3]||(t[3]=e=>l.renameFile()),title:"rename",class:"fileButton renameButton"}),"folder"!=s.file.type?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:t[4]||(t[4]=e=>l.downloadFile()),title:"download file",class:"fileButton downloadButton"})):(0,a.kq)("",!0),(0,a._)("button",{onClick:t[5]||(t[5]=e=>l.deleteFile()),title:"delete file",class:"fileButton deleteButton"})]),(0,a._)("div",{onClick:t[6]||(t[6]=t=>e.copyLink()),class:"file",ref:s.file.id,title:`copy link to -> ${s.file.name}`},null,8,je),(0,a._)("div",{onClick:t[7]||(t[7]=e=>l.load()),class:"file",ref:s.file.id,title:`open ${s.file.name}`},[(0,a._)("div",{class:"fileName",innerHTML:s.file.name,ref:"name_"+s.file.hash},null,8,Be)],8,Ne)],2)}var Ae={name:"File",props:["state","file"],data(){return{}},methods:{drag(){},togglePublic(){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,fileID:this.file.id,private:0==this.file.private?1:0};fetch(this.state.baseURL+"/setPrivate.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{}))},viewableAsset(){return-1!==this.file.type.indexOf("image")||-1!==this.file.type.indexOf("video")||-1!==this.file.type.indexOf("audio")},load(){this.viewableAsset()?this.state.view(this.state.fileViewerURL+"/?url="+this.file.hash):"folder"==this.file.type?window.location.href+=this.file.name+"/":this.downloadFile()},renameFile(){let e=prompt("enter a new name",this.file.name);if(this.file.name!=e&&e){let t={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,fileID:this.file.id,newName:e};fetch(this.state.baseURL+"/renameFile.php",this.state.fetchObj(t)).then((e=>e.json())).then((t=>{console.log("renameFile.php[File.vue]",t),t[0]&&(this.file.name=e)}))}},downloadFile(){let e=document.createElement("a");e.href="/proxy.php?url="+this.state.assetsURL+"/"+this.file.hash,e.download=this.file.name,e.style.position="absolute",e.style.visible="hidden",e.target="_blank",document.body.appendChild(e),e.click(),e.remove()},deleteFile(){if(confirm("are you sure?\n\ndeleting this file ("+this.file.name+") cannot be undone!")){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,fileID:this.file.id};fetch(this.state.baseURL+"/deleteFile.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{e[0]&&(this.state.loggedinUserFiles=this.state.loggedinUserFiles.filter((e=>e.id!=this.file.id)))}))}}},mounted(){let e=this.$refs.fileDiv,t=this.$refs.dragHandle;e.getBoundingClientRect();this.file.fileDiv=this.$refs.fileDiv,this.file.dragHandle=t,this.file.dragHandleRect=t.getBoundingClientRect(),this.file.rect=this.$refs.fileDiv.getBoundingClientRect(),t.onmousedown=t=>{if(0!==t.button)return;t.preventDefault(),t.stopPropagation(),this.state.button=!0;let s=e.getBoundingClientRect();e.style.position="absolute",this.state.curFileDragging=e,this.state.curFileDragging.file=this.file,this.state.cursorX=s.x-t.pageX,this.state.cursorY=s.y-t.pageY},-1!==this.file.type.indexOf("image")&&(e.style.backgroundSize="cover",e.style.repeat="no-repeat",e.style.position="center center",e.style.backgroundImage=`url(${this.state.assetsURL+"/"+this.file.hash})`);let s=this.$refs["name_"+this.file.hash];s.onmouseover=()=>{s.style.background="#0f0",s.style.color="#000",s.style.cursor="pointer"},s.onmouseleave=()=>{s.style.background="#033",s.style.color="#fff",s.style.cursor="default"}}};const Se=(0,y.Z)(Ae,[["render",Ve],["__scopeId","data-v-5089fe5e"]]);var Ee=Se;const $e=e=>((0,a.dD)("data-v-c91807e2"),e=e(),(0,a.Cn)(),e),ze={class:"DZTools"},Ye=["innerHTML"],Ze=$e((()=>(0,a._)("br",null,null,-1))),qe=$e((()=>(0,a._)("span",{class:"desc"},[(0,a.Uk)("Drag one or more files to this "),(0,a._)("i",null,"drop zone"),(0,a.Uk)(".")],-1))),Ke=$e((()=>(0,a._)("span",{style:{float:"left"}},"tools:",-1))),Xe=$e((()=>(0,a._)("br",null,null,-1)));function We(e,t,s,i,o,n){return(0,a.wg)(),(0,a.iD)("div",ze,[(0,a._)("div",{class:"caption",innerHTML:s.caption},null,8,Ye),Ze,qe,Ke,(0,a._)("button",{title:"create new folder",onClick:t[0]||(t[0]=e=>n.createFolder()),class:"DZToolsButton folderButton"},[(0,a.Uk)("create"),Xe,(0,a.Uk)("folder")])])}s(7658);var Ge={name:"DZTools",props:["state","caption"],data(){return{testData:"it works!"}},methods:{createFolder(){let e=prompt("enter the name of the folder:","new folder name");if(!e)return;let t={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,currentLocation:this.state.loggedinUserLocation,folderName:e};fetch(this.state.baseURL+"/createFolder.php",this.state.fetchObj(t)).then((e=>e.json())).then((e=>{e[0]?this.state.loggedinUserFiles.push(e[2]):console.log("error creating folder!")}))}}};const Je=(0,y.Z)(Ge,[["render",We],["__scopeId","data-v-c91807e2"]]);var Qe=Je,et={name:"Dropzone",components:{File:Ee,DZTools:Qe},props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,drag:!1,showUploadProgress:!1}},computed:{filteredFiles(){let e=100,t=5,s=120,i=100;return this.state.loggedinUserFiles.map(((a,o)=>(a.X=20+o%t*s,a.Y=175+(o/t|0)%e*i,a)))}},methods:{setWidth(e){return`width: calc(${this.fileList[e].perc}%)`},fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){let t=!1;e.preventDefault(),this.showProgress||(this.count=0,e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,[...e.dataTransfer.items].forEach(((e,t)=>{if("file"===e.kind){const t=e.getAsFile();this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,t],this.fileList.map(((e,t)=>{e.completed=!1,e.perc=0,e.idx=t}))}})),this.fileList.map(((e,s)=>{if(!t)if(e.size<1e8){let t=new FormData;t.append("user",this.state.loggedinUserName),t.append("passhash",this.state.loggedinUserHash),t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("location",this.state.loggedinUserLocation),t.append("description",""),t.append("file",e);let i=new XMLHttpRequest;i.open("POST",this.state.baseURL+"/upload.php");let a=s;i.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[a].perc=t})),i.onreadystatechange=e=>{200==e.status&&e.readyState},i.addEventListener("load",(t=>{e.completed=!0;let s=!0;this.fileList.map((e=>{e.completed||(s=!1)})),s&&(this.state.loadLoggedInUserData(),this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),i.send(t)}else this.showProgress=!1,this.finished=!1,this.draggingOver=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,[...e.dataTransfer.files].forEach(((e,s)=>{if(t)return;this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let i=this.fileList;Array.from(i).forEach(((e,t)=>{e.completed=!1,this.fileList[t].idx=t})),Array.from(i).forEach(((e,s)=>{if(e.size<1e8){let t=new FormData;t.append("user",this.state.loggedinUserName),t.append("passhash",this.state.loggedinUserHash),t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("location",this.state.loggedinUserLocation),t.append("description",""),t.append("file",e);let a=new XMLHttpRequest;a.open("POST",this.state.baseURL+"/upload.php");let o=s;a.upload.addEventListener("progress",(e=>{let t=e.loaded/e.total*100;this.fileList[o].perc=t})),a.onreadystatechange=e=>{200==e.status&&e.readyState},a.addEventListener("load",(t=>{e.completed=!0;let s=!0;Array.from(i).forEach((e=>{e.completed||(s=!1)})),s&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),a.send(t)}else this.draggingOver=!1,this.showProgress=!1,t=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}))))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){e.preventDefault(),e.stopPropagation(),this.showProgress||(this.showProgress||(this.finished=!1),this.draggingOver=!0)}},mounted(){window.onmousemove=()=>{this.draggingOver=!1}}};const tt=(0,y.Z)(et,[["render",Fe],["__scopeId","data-v-20ffefda"]]);var st=tt,it={components:{Header:I,Main:S,Dropzone:st,Login:ie,Viewer:de,Settings:Z,Register:_e},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net",rootDomain:"pshare.dweet.net",loggedin:!1,assetsURL:"https://assets.dweet.net/misc",fileViewerURL:"https://pshare.dweet.net/viewer",admin:!1,loggedinUserAvatar:"",loggedinUserEmail:"",loggedinUserName:"",loggedinUserHash:"",cursorX:null,cursorY:null,loadLoggedInUserData:null,loggedinUserBasicIcons:"",positionFilesAbsolutely:null,loggedinUserID:"",curFileDragging:null,loggedinUserFiles:[],loggedinUserLocation:"",viewerSrc:"",decToAlpha:null,alphaToDec:null,view:null,setting:null,dropTarget:"/",fetchObj:null,getSuffix:null,showModal:null,closeModals:null,login:null,token:"",register:null,logout:null,loginModalVisible:!1,registerModalVisible:!1,settingsModalVisible:!1,viewerModalVisible:!1,setCookie:null}}},methods:{login(){this.closeModals(),this.showModal("login")},logout(){this.clearCookie(),this.state.loggedinUserName="",this.state.loggedinUserID="",this.state.loggedinUserHash="",this.state.loggedinUserLocation="",this.state.loggedinUserFiles=[],this.state.loggedin=!1,window.location.reload()},alphaToDec(e){let t,s,i=0,a=0;while(""!=e)t=e[e.length-1],e=e.substring(0,e.length-1),s=t.charCodeAt(0)<58?t:t.charCodeAt(0)-(t.charCodeAt(0)>96?87:29),a+=s*62**i,i++;return a},decToAlpha(e){let t,s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",i="";while(e)i=s[0|Math.round(62*(e/62-(t=e/62|0)))]+i,e=t;return""==i?"0":i},getAvatar(e){return"undefined"!=typeof this.state.userInfo[e]&&this.state.userInfo[e].avatar?(this.state.userInfo[e].avatar=this.state.userInfo[e].avatar.replace(" ",""),this.state.userInfo[e].avatar):this.state.defaultAvatar},setCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain})),document.cookie="loggedinUser="+this.state.loggedinUserName+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserLocation="+this.state.loggedinUserLocation+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="basicIcons="+this.state.loggedinUserBasicIcons+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="minimized="+this.state.minimized+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserID="+this.state.loggedinUserID+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="loggedinUserHash="+this.state.loggedinUserHash+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain,document.cookie="token="+this.state.token+"; expires="+new Date(Date.now()+31536e8).toUTCString()+"; path=/; domain="+this.state.rootDomain},fetchObj(e){let t;return t=-1===location.href.indexOf("8000")?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}:{method:"POST",body:JSON.stringify(e)},t},loadLoggedInUserData(){let e={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash};fetch(this.state.baseURL+"/loadUserData.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{e[0]?(this.state.loggedinUserFiles=[],this.$nextTick((()=>{e[1].map((e=>{e.private=!!+e.private})),this.state.loggedinUserFiles=e[1];let t=window.location.origin+"/"+this.decToAlpha(this.state.loggedinUserID)+this.state.loggedinUserLocation;window.history.pushState(t,null,t),this.$nextTick((()=>this.state.positionFilesAbsolutely()))}))):(console.log("loadUserData[App.vue]",e),alert("there was an error loading user data. consarnit!"))}))},register(){this.closeModals(),this.showModal("register")},showModal(e){switch(e){case"login":this.state.loginModalVisible=!0;break;case"register":this.state.registerModalVisible=!0;break;case"settings":this.state.settingsModalVisible=!0;break;case"viewer":this.state.viewerModalVisible=!0;break}},view(e){this.closeModals,this.state.viewerSrc=e,this.showModal("viewer")},settings(){this.closeModals(),this.showModal("settings")},closeModals(){this.state.loginModalVisible=!1,this.state.registerModalVisible=!1,this.state.settingsModalVisible=!1,this.state.viewerModalVisible=!1},clearCookie(){let e=document.cookie;e.split(";").map((e=>{document.cookie=e+"; expires="+new Date(0).toUTCString()+"; path=/; domain="+this.state.rootDomain}))},positionFilesAbsolutely(){this.$nextTick((()=>{this.state.loggedinUserFiles.map((e=>{let t=e.rect;e.fileDiv.style.position="absolute",e.fileDiv.style.left=t.x-11+"px",e.fileDiv.style.top=t.y-82+"px"}))}))},checkCookie(){let e=document.cookie.split(";"),t="",s="",i="",a=decodeURIComponent(window.location.pathname);if(e.map((e=>{e=e.trim();let a=e.split("=");switch(a[0]){case"loggedinUser":t=a[1];break;case"loggedinUserID":i=a[1];break;case"loggedinUserHash":s=a[1];break}})),t&&s&&i){let e={user:t,passhash:s,location:a};fetch(this.state.baseURL+"/cookieLogin.php",this.state.fetchObj(e)).then((e=>e.json())).then((e=>{e[0]?(console.log("cookieLogin.php[App.vue]",e),this.state.loggedin=!0,this.state.loggedinUser=e[1],this.state.token=e[1].passhash,this.state.loggedinUserHash=e[1].passhash,this.state.loggedinUserID=e[1].id,this.state.loggedinUserAvatar=e[1].avatar,this.state.loggedinUserBasicIcons=!!+e[1].basicIcons,this.state.loggedinUserName=e[1].name,this.state.loggedinUserLocation=e[1].currentLocation,this.state.loggedinUserEmail=e[1].email,this.state.admin=!!+e[1].admin,this.state.setCookie(),this.state.loadLoggedInUserData(),this.state.closeModals()):this.clearCookie()}))}},moveFile(e,t){let s={user:this.state.loggedinUserName,passhash:this.state.loggedinUserHash,src:e.id,dest:t.id};console.log(s),fetch(this.state.baseURL+"/moveFile.php",this.state.fetchObj(s)).then((e=>e.json())).then((t=>{console.log(t),t[0]&&(this.state.loggedinUserFiles=this.state.loggedinUserFiles.filter((t=>{t.id,e.id})))}))},setupListeners(){document.body.onmousemove=e=>{e.preventDefault(),e.stopPropagation(),null!=this.state.curFileDragging&&(this.state.loggedinUserFiles.map((e=>{e.dragHandle.style.backgroundColor="#f004"})),this.state.curFileDragging.style.left=this.state.cursorX-5+e.pageX+"px",this.state.curFileDragging.style.top=this.state.cursorY-80+e.pageY+"px",this.state.loggedinUserFiles.map((t=>{e.pageX>t.dragHandleRect.x&&e.pageX<t.dragHandleRect.x+t.dragHandleRect.width&&e.pageY>t.dragHandleRect.y&&e.pageY<t.dragHandleRect.y+t.dragHandleRect.height&&"folder"==t.type&&(t.dragHandle.style.backgroundColor="#0f44")})))},document.body.onmouseup=e=>{null!=this.state.curFileDrgging&&this.state.loggedinUserFiles.map((t=>{e.pageX>t.dragHandleRect.x&&e.pageX<t.dragHandleRect.x+t.dragHandleRect.width&&e.pageY>t.dragHandleRect.y&&e.pageY<t.dragHandleRect.y+t.dragHandleRect.height&&"folder"==t.type&&(console.log("moveFile -> ",this.state.curFileDragging.file,t),this.moveFile(this.state.curFileDragging.file,t))})),this.state.button=!1}}},mounted(){this.state.view=this.view,this.state.login=this.login,this.state.logout=this.logout,this.state.register=this.register,this.state.settings=this.settings,this.state.fetchObj=this.fetchObj,this.state.getSuffix=this.getSuffix,this.state.setCookie=this.setCookie,this.state.decToAlpha=this.decToAlpha,this.state.alphaToDec=this.alphaToDec,this.state.showModals=this.showModals,this.state.closeModals=this.closeModals,this.state.loadLoggedInUserData=this.loadLoggedInUserData,this.state.positionFilesAbsolutely=this.positionFilesAbsolutely,this.checkCookie(),this.setupListeners()}};const at=(0,y.Z)(it,[["render",n]]);var ot=at;(0,i.ri)(ot).mount("#app")}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,i,a,o){if(!i){var n=1/0;for(h=0;h<e.length;h++){i=e[h][0],a=e[h][1],o=e[h][2];for(var l=!0,r=0;r<i.length;r++)(!1&o||n>=o)&&Object.keys(s.O).every((function(e){return s.O[e](i[r])}))?i.splice(r--,1):(l=!1,o<n&&(n=o));if(l){e.splice(h--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[i,a,o]}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,n=i[0],l=i[1],r=i[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(r)var h=r(s)}for(t&&t(i);d<n.length;d++)o=n[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(h)},i=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(1609)}));i=s.O(i)})();
//# sourceMappingURL=app.3e5102c1.js.map