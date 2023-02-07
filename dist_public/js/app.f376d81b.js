(function(){"use strict";var e={605:function(e,t,r){var n=r(963),i=r(252);function a(e,t,r,n,a,s){const o=(0,i.up)("Dropzone"),l=(0,i.up)("Main");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{state:a.state,caption:"zone 1"},null,8,["state"]),(0,i.Wm)(o,{state:a.state,caption:"zone 2"},null,8,["state"]),(0,i.Wm)(l)],64)}const s={class:"main"};function o(e,t,r,n,a,o){return(0,i.wg)(),(0,i.iD)("div",s," main component ")}var l={name:"Main",props:["state"],data(){return{testData:"it works!"}}},d=r(744);const p=(0,d.Z)(l,[["render",o],["__scopeId","data-v-494a82c8"]]);var f=p,g=r(577);const h=e=>((0,i.dD)("data-v-1f1f177c"),e=e(),(0,i.Cn)(),e),c=["innerHTML"],u={key:0},m=h((()=>(0,i._)("p",null,[(0,i.Uk)("Drag one or more files to this "),(0,i._)("i",null,"drop zone"),(0,i.Uk)(".")],-1))),v=[m],w={key:1},D={key:0},O={key:1},L=["innerHTML"],U=h((()=>(0,i._)("div",{class:"progressBar"},[(0,i._)("div",{class:"innerProgress"})],-1)));function y(e,t,r,n,a,s){return(0,i.wg)(),(0,i.iD)("div",{id:"dropzone",class:(0,g.C_)({dragOver:a.draggingOver,fileUploading:a.showProgress,finished:a.finished}),ref:"drop_zone",onDrop:t[0]||(t[0]=(...e)=>s.dropHandler&&s.dropHandler(...e)),onDragover:t[1]||(t[1]=(...e)=>s.dragOverHandler&&s.dragOverHandler(...e)),onDragleave:t[2]||(t[2]=(...e)=>s.dragLeaveHandler&&s.dragLeaveHandler(...e)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseupHandler&&e.mouseupHandler(...t))},[(0,i._)("div",{class:"caption",innerHTML:r.caption},null,8,c),a.showProgress||a.finished?((0,i.wg)(),(0,i.iD)("div",w,[a.finished?((0,i.wg)(),(0,i.iD)("div",D," finished uploading "+(0,g.zw)(this.count)+" files ",1)):((0,i.wg)(),(0,i.iD)("div",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.fileList,((e,t)=>((0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("span",{class:"fileName",innerHTML:s.fileNameFormatted(e.name)},null,8,L),U])))),256))]))])):((0,i.wg)(),(0,i.iD)("div",u,v))],34)}var H={name:"Dropzone",props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,showUploadProgress:!1,filesUploading:[]}},methods:{fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){this.count=0,e.preventDefault(),e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,this.filesUploading=Array(this.count).fill().map((e=>({}))),[...e.dataTransfer.items].forEach(((e,t)=>{if("file"===e.kind){const r=e.getAsFile();console.log(`… file[${t}].name = ${r.name}`),this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,r];let n=this.fileList;Array.from(n).forEach(((e,t)=>{e.completed=!1,this.filesUploading[t].perc=0,this.filesUploading[t].fileName=e.name})),Array.from(n).forEach(((e,t)=>{if(e.size<1e8){let r=new FormData;r.append("name",e.name),r.append("userID",this.state.loggedinUserID),r.append("description",""),r.append("file",e);let i=new XMLHttpRequest;i.open("POST",this.state.baseURL+"/upload.php"),i.upload.addEventListener("progress",(r=>{let n=r.loaded/r.total*100;this.filesUploading[t].fileName=e.name,this.filesUploading[t].perc=n})),i.addEventListener("load",(t=>{e.completed=!0;let r=!0;Array.from(n).forEach((e=>{e.completed||(r=!1)})),r&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),i.send(r)}else alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)"),this.showUploadProgress=!1}))}}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,this.filesUploading=Array(this.count).fill().map((e=>({}))),[...e.dataTransfer.files].forEach(((e,t)=>{console.log(`… file[${t}].name = ${e.name}`),this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let r=this.fileList;Array.from(r).forEach(((e,t)=>{e.completed=!1,this.filesUploading[t].perc=0,this.filesUploading[t].fileName=e.name})),Array.from(r).forEach(((e,t)=>{if(e.size<1e8){let n=new FormData;n.append("name",e.name),n.append("userID",this.state.loggedinUserID),n.append("description",""),n.append("file",e);let i=new XMLHttpRequest;i.open("POST",this.state.baseURL+"/upload.php"),i.upload.addEventListener("progress",(r=>{let n=r.loaded/r.total*100;this.filesUploading[t].fileName=e.name,this.filesUploading[t].perc=n})),i.addEventListener("load",(t=>{e.completed=!0;let n=!0;Array.from(r).forEach((e=>{e.completed||(n=!1)})),n&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),i.send(n)}else alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)"),this.showUploadProgress=!1}))})))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){this.draggingOver=!0,e.preventDefault(),e.stopPropagation()}},mounted(){window.onmousemove=()=>{this.draggingOver=!1}}};const b=(0,d.Z)(H,[["render",y],["__scopeId","data-v-1f1f177c"]]);var P=b,z={components:{Main:f,Dropzone:P},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net"}}}};const k=(0,d.Z)(z,[["render",a]]);var E=k;(0,n.ri)(E).mount("#app")}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,a){if(!n){var s=1/0;for(p=0;p<e.length;p++){n=e[p][0],i=e[p][1],a=e[p][2];for(var o=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(o=!1,a<s&&(s=a));if(o){e.splice(p--,1);var d=i();void 0!==d&&(t=d)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[n,i,a]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,s=n[0],o=n[1],l=n[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(i in o)r.o(o,i)&&(r.m[i]=o[i]);if(l)var p=l(r)}for(t&&t(n);d<s.length;d++)a=s[d],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(p)},n=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(605)}));n=r.O(n)})();
//# sourceMappingURL=app.f376d81b.js.map