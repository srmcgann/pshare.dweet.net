(function(){"use strict";var e={966:function(e,t,r){var i=r(963),n=r(252);function s(e,t,r,i,s,a){const o=(0,n.up)("Dropzone"),l=(0,n.up)("Main");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(o,{state:s.state,caption:"zone 1"},null,8,["state"]),(0,n.Wm)(o,{state:s.state,caption:"zone 2"},null,8,["state"]),(0,n.Wm)(l)],64)}const a={class:"main"};function o(e,t,r,i,s,o){return(0,n.wg)(),(0,n.iD)("div",a," main component ")}var l={name:"Main",props:["state"],data(){return{testData:"it works!"}}},d=r(744);const p=(0,d.Z)(l,[["render",o],["__scopeId","data-v-494a82c8"]]);var f=p,g=r(577);const h=e=>((0,n.dD)("data-v-18410b6e"),e=e(),(0,n.Cn)(),e),c=["innerHTML"],u={key:0},m=h((()=>(0,n._)("p",null,[(0,n.Uk)("Drag one or more files to this "),(0,n._)("i",null,"drop zone"),(0,n.Uk)(".")],-1))),v=[m],w={key:1},D={key:0},O={key:1},L=["innerHTML"],y={class:"progressBar"};function U(e,t,r,i,s,a){return(0,n.wg)(),(0,n.iD)("div",{id:"dropzone",class:(0,g.C_)({dragOver:s.draggingOver,fileUploading:s.showProgress,finished:s.finished}),ref:"drop_zone",onDrop:t[0]||(t[0]=(...e)=>a.dropHandler&&a.dropHandler(...e)),onDragover:t[1]||(t[1]=(...e)=>a.dragOverHandler&&a.dragOverHandler(...e)),onDragleave:t[2]||(t[2]=(...e)=>a.dragLeaveHandler&&a.dragLeaveHandler(...e)),onMouseup:t[3]||(t[3]=(...t)=>e.mouseupHandler&&e.mouseupHandler(...t))},[(0,n._)("div",{class:"caption",innerHTML:r.caption},null,8,c),s.showProgress||s.finished?((0,n.wg)(),(0,n.iD)("div",w,[s.finished?((0,n.wg)(),(0,n.iD)("div",D," finished uploading "+(0,g.zw)(this.count)+" files ",1)):((0,n.wg)(),(0,n.iD)("div",O,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.fileList,((e,t)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("span",{class:"fileName",innerHTML:a.fileNameFormatted(e.name)},null,8,L),(0,n._)("div",y,[(0,n._)("div",{ref_for:!0,ref:"progress"+t,class:"innerProgress"},null,512)])])))),256))]))])):((0,n.wg)(),(0,n.iD)("div",u,v))],34)}var b={name:"Dropzone",props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,showUploadProgress:!1,filesUploading:[]}},methods:{fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){this.count=0,e.preventDefault(),e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,this.filesUploading=Array(this.count).fill().map((e=>({}))),[...e.dataTransfer.items].forEach(((e,t)=>{if("file"===e.kind){const r=e.getAsFile();console.log(`… file[${t}].name = ${r.name}`),this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,r];let i=this.fileList;Array.from(i).forEach(((e,t)=>{e.completed=!1,this.filesUploading[t].perc=0,this.filesUploading[t].fileName=e.name})),Array.from(i).forEach(((e,t)=>{if(e.size<1e8){let r=new FormData;r.append("name",e.name),r.append("userID",this.state.loggedinUserID),r.append("description",""),r.append("file",e);let n=new XMLHttpRequest;n.open("POST",this.state.baseURL+"/upload.php"),n.upload.addEventListener("progress",(r=>{let i=r.loaded/r.total*100;this.filesUploading[t].fileName=e.name,this.filesUploading[t].perc=i,this.$refs["progress"+t].style.width=`calc(${i+"%"})`})),n.addEventListener("load",(t=>{e.completed=!0;let r=!0;Array.from(i).forEach((e=>{e.completed||(r=!1)})),r&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),n.send(r)}else alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)"),this.showUploadProgress=!1}))}}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,this.filesUploading=Array(this.count).fill().map((e=>({}))),[...e.dataTransfer.files].forEach(((e,t)=>{console.log(`… file[${t}].name = ${e.name}`),this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let r=this.fileList;Array.from(r).forEach(((e,t)=>{e.completed=!1,this.filesUploading[t].perc=0,this.filesUploading[t].fileName=e.name})),Array.from(r).forEach(((e,t)=>{if(e.size<1e8){let i=new FormData;i.append("name",e.name),i.append("userID",this.state.loggedinUserID),i.append("description",""),i.append("file",e);let n=new XMLHttpRequest;n.open("POST",this.state.baseURL+"/upload.php"),n.upload.addEventListener("progress",(r=>{let i=r.loaded/r.total*100;this.filesUploading[t].fileName=e.name,this.filesUploading[t].perc=i})),n.addEventListener("load",(t=>{e.completed=!0;let i=!0;Array.from(r).forEach((e=>{e.completed||(i=!1)})),i&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),n.send(i)}else alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)"),this.showUploadProgress=!1}))})))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){this.showProgress||(this.finished=!1),this.draggingOver=!0,e.preventDefault(),e.stopPropagation()}},mounted(){window.onmousemove=()=>{this.draggingOver=!1}}};const H=(0,d.Z)(b,[["render",U],["__scopeId","data-v-18410b6e"]]);var P=H,z={components:{Main:f,Dropzone:P},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net"}}}};const k=(0,d.Z)(z,[["render",s]]);var E=k;(0,i.ri)(E).mount("#app")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,s){if(!i){var a=1/0;for(p=0;p<e.length;p++){i=e[p][0],n=e[p][1],s=e[p][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[l])}))?i.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(p--,1);var d=n();void 0!==d&&(t=d)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[i,n,s]}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,a=i[0],o=i[1],l=i[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var p=l(r)}for(t&&t(i);d<a.length;d++)s=a[d],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(p)},i=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(966)}));i=r.O(i)})();
//# sourceMappingURL=app.c834fe29.js.map