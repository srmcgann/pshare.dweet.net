(function(){"use strict";var e={750:function(e,t,r){var i=r(963),n=r(252);const s={class:"App"};function a(e,t,r,i,a,o){const l=(0,n.up)("Dropzone"),d=(0,n.up)("Main");return(0,n.wg)(),(0,n.iD)(n.HY,null,[((0,n.wg)(),(0,n.iD)(n.HY,null,(0,n.Ko)(100,(e=>(0,n._)("div",s,[(0,n.Wm)(l,{state:a.state,caption:"zone "+e},null,8,["state","caption"])]))),64)),(0,n.Wm)(d)],64)}const o={class:"main"};function l(e,t,r,i,s,a){return(0,n.wg)(),(0,n.iD)("div",o," main component ")}var d={name:"Main",props:["state"],data(){return{testData:"it works!"}}},p=r(744);const f=(0,p.Z)(d,[["render",l],["__scopeId","data-v-494a82c8"]]);var h=f,g=r(577);const c=e=>((0,n.dD)("data-v-2ab41d74"),e=e(),(0,n.Cn)(),e),u=["innerHTML"],v={key:0},m=c((()=>(0,n._)("p",null,[(0,n.Uk)("Drag one or more files to this "),(0,n._)("i",null,"drop zone"),(0,n.Uk)(".")],-1))),w=[m],D={key:1},O={key:0},L={key:1},y=["innerHTML"],U={class:"progressBar"};function H(e,t,r,i,s,a){return(0,n.wg)(),(0,n.iD)("div",{class:(0,g.C_)(["dropzone",{dragOver:s.draggingOver,fileUploading:s.showProgress,finished:s.finished}]),ref:"drop_zone",onDrop:t[0]||(t[0]=(...e)=>a.dropHandler&&a.dropHandler(...e)),onDragover:t[1]||(t[1]=(...e)=>a.dragOverHandler&&a.dragOverHandler(...e)),onDragleave:t[2]||(t[2]=(...e)=>a.dragLeaveHandler&&a.dragLeaveHandler(...e)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseupHandler&&e.mouseupHandler(...t))},[(0,n._)("div",{class:"caption",innerHTML:r.caption},null,8,u),s.showProgress||s.finished?((0,n.wg)(),(0,n.iD)("div",D,[s.finished?((0,n.wg)(),(0,n.iD)("div",O," finished uploading "+(0,g.zw)(this.count)+" files ",1)):((0,n.wg)(),(0,n.iD)("div",L,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.fileList,((e,t)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("span",{class:"fileName",innerHTML:a.fileNameFormatted(e.name)},null,8,y),(0,n._)("div",U,[(0,n._)("div",{style:(0,g.j5)(a.setWidth(t)),class:"innerProgress"},null,4)])])))),256))]))])):((0,n.wg)(),(0,n.iD)("div",v,w))],34)}var b={name:"Dropzone",props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,showUploadProgress:!1,filesUploading:[]}},methods:{setWidth(e){return"width: calc("+this.filesUploading[e].perc+"%)"},fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){let t=!1;this.count=0,e.preventDefault(),e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,this.filesUploading=Array(this.count).fill().map((e=>({}))),[...e.dataTransfer.items].forEach(((e,r)=>{if("file"===e.kind){const i=e.getAsFile();console.log(`… file[${r}].name = ${i.name}`),this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,i];let n=this.fileList;Array.from(n).forEach(((e,t)=>{e.completed=!1,this.filesUploading[t].perc=0,this.filesUploading[t].fileName=e.name})),Array.from(n).forEach(((e,r)=>{if(!t)if(e.size<1e8){let t=new FormData;t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("description",""),t.append("file",e);let i=new XMLHttpRequest;i.open("POST",this.state.baseURL+"/upload.php"),i.upload.addEventListener("progress",(t=>{let i=t.loaded/t.total*100;this.filesUploading[r].fileName=e.name,this.filesUploading[r].perc=i})),i.addEventListener("load",(t=>{e.completed=!0;let r=!0;Array.from(n).forEach((e=>{e.completed||(r=!1)})),r&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),i.send(t)}else alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)"),this.showUploadProgress=!1,this.finished=!1,this.draggingOver=!1,t=!0}))}}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,this.filesUploading=Array(this.count).fill().map((e=>({}))),[...e.dataTransfer.files].forEach(((e,r)=>{if(t)return;this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let i=this.fileList;Array.from(i).forEach(((e,t)=>{e.completed=!1,this.filesUploading[t].perc=0,this.filesUploading[t].fileName=e.name})),Array.from(i).forEach(((e,r)=>{if(e.size<1e8){let t=new FormData;t.append("name",e.name),t.append("userID",this.state.loggedinUserID),t.append("description",""),t.append("file",e);let n=new XMLHttpRequest;n.open("POST",this.state.baseURL+"/upload.php"),n.upload.addEventListener("progress",(t=>{let i=t.loaded/t.total*100;this.filesUploading[r].fileName=e.name,this.filesUploading[r].perc=i,this.$refs["progress"+r].style.width=`calc(${i+"%"})`})),n.addEventListener("load",(t=>{e.completed=!0;let r=!0;Array.from(i).forEach((e=>{e.completed||(r=!1)})),r&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),n.send(t)}else alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)"),this.showUploadProgress=!1,this.draggingOver=!1,this.showProgress=!1,t=!0}))})))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){this.showProgress||(this.finished=!1),this.draggingOver=!0,e.preventDefault(),e.stopPropagation()}},mounted(){console.log(this.$refs),window.onmousemove=()=>{this.draggingOver=!1}}};const P=(0,p.Z)(b,[["render",H],["__scopeId","data-v-2ab41d74"]]);var k=P,z={components:{Main:h,Dropzone:k},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net"}}}};const E=(0,p.Z)(z,[["render",a]]);var T=E;(0,i.ri)(T).mount("#app")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,s){if(!i){var a=1/0;for(p=0;p<e.length;p++){i=e[p][0],n=e[p][1],s=e[p][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[l])}))?i.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(p--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[i,n,s]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,a=i[0],o=i[1],l=i[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var p=l(r)}for(t&&t(i);d<a.length;d++)s=a[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(p)},i=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(750)}));i=r.O(i)})();
//# sourceMappingURL=app.940f2280.js.map