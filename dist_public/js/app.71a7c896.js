(function(){"use strict";var e={95:function(e,i,t){var r=t(963),s=t(252);const n={class:"App"};function a(e,i,t,r,a,o){const l=(0,s.up)("Dropzone"),d=(0,s.up)("Main");return(0,s.wg)(),(0,s.iD)(s.HY,null,[((0,s.wg)(),(0,s.iD)(s.HY,null,(0,s.Ko)(2,(e=>(0,s._)("div",n,[(0,s.Wm)(l,{state:a.state,caption:"zone "+e},null,8,["state","caption"])]))),64)),(0,s.Wm)(d)],64)}const o={class:"main"};function l(e,i,t,r,n,a){return(0,s.wg)(),(0,s.iD)("div",o," main component ")}var d={name:"Main",props:["state"],data(){return{testData:"it works!"}}},p=t(744);const f=(0,p.Z)(d,[["render",l],["__scopeId","data-v-494a82c8"]]);var h=f,g=t(577);const c=e=>((0,s.dD)("data-v-6f0aa14c"),e=e(),(0,s.Cn)(),e),u=["innerHTML"],v={key:0},m=c((()=>(0,s._)("p",null,[(0,s.Uk)("Drag one or more files to this "),(0,s._)("i",null,"drop zone"),(0,s.Uk)(".")],-1))),w=[m],D={key:1},L={key:0},O={key:1},y=["innerHTML"];function P(e,i,t,r,n,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,g.C_)(["dropzone",{dragOver:n.draggingOver,fileUploading:n.showProgress,finished:n.finished}]),ref:"drop_zone",onDrop:i[0]||(i[0]=(...e)=>a.dropHandler&&a.dropHandler(...e)),onDragover:i[1]||(i[1]=(...e)=>a.dragOverHandler&&a.dragOverHandler(...e)),onDragleave:i[2]||(i[2]=(...e)=>a.dragLeaveHandler&&a.dragLeaveHandler(...e)),onMouseup:i[3]||(i[3]=(...i)=>e.mouseupHandler&&e.mouseupHandler(...i))},[(0,s._)("div",{class:"caption",innerHTML:t.caption},null,8,u),n.showProgress||n.finished?((0,s.wg)(),(0,s.iD)("div",D,[n.finished?((0,s.wg)(),(0,s.iD)("div",L," finished uploading "+(0,g.zw)(this.count)+" files ",1)):((0,s.wg)(),(0,s.iD)("div",O,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.fileList,((e,i)=>((0,s.wg)(),(0,s.iD)("div",{key:i},[(0,s._)("span",{class:"fileName",innerHTML:a.fileNameFormatted(e.name)},null,8,y),((0,s.wg)(),(0,s.iD)("div",{class:"progressBar",key:"outer_"+i},[((0,s.wg)(),(0,s.iD)("div",{style:(0,g.j5)(a.setWidth(e.perc)),class:"innerProgress",key:"inner_"+i},null,4))]))])))),128))]))])):((0,s.wg)(),(0,s.iD)("div",v,w))],34)}var U={name:"Dropzone",props:["state","caption"],data(){return{testData:"it works!",draggingOver:!1,showProgress:!1,fileList:[],count:0,finished:!1,showUploadProgress:!1,filesUploading:[]}},methods:{setWidth(e){return console.log(e),`width: calc(${e}%)`},fileNameFormatted(e){return e.length<=30?e:e.substring(0,20)+"..."+e.substring(e.length-6)},dropHandler(e){let i=!1;e.preventDefault(),this.showProgress||(this.count=0,this.filesUploading=[],e.dataTransfer.items?(this.fileList=[],this.count=[...e.dataTransfer.items].length,this.filesUploading=Array(this.count).fill().map((e=>({}))),[...e.dataTransfer.items].forEach(((e,t)=>{if("file"===e.kind){const r=e.getAsFile();console.log(`… file[${t}].name = ${r.name}`),this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,r];let s=this.fileList;Array.from(s).forEach(((e,i)=>{e.completed=!1,this.fileList[i].perc=this.filesUploading[i].perc=0,this.filesUploading[i].fileName=e.name})),Array.from(s).forEach(((e,t)=>{if(!i)if(e.size<1e8){let i=new FormData;i.append("name",e.name),i.append("userID",this.state.loggedinUserID),i.append("description",""),i.append("file",e);let r=new XMLHttpRequest;r.open("POST",this.state.baseURL+"/upload.php"),r.upload.addEventListener("progress",(i=>{let r=i.loaded/i.total*100;this.filesUploading[t].fileName=e.name,this.fileList[t].perc=this.filesUploading[t].perc=r})),r.addEventListener("load",(i=>{e.completed=!0;let t=!0;Array.from(s).forEach((e=>{e.completed||(t=!1)})),t&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),r.send(i)}else this.showProgress=!1,this.finished=!1,this.draggingOver=!1,i=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}}))):(this.fileList=[],this.count=[...e.dataTransfer.files].length,this.filesUploading=Array(this.count).fill().map((e=>({}))),[...e.dataTransfer.files].forEach(((e,t)=>{if(i)return;this.showProgress=!0,this.draggingOver=!1,this.fileList=[...this.fileList,e];let r=this.fileList;Array.from(r).forEach(((e,i)=>{e.completed=!1,this.fileList[i].perc=this.filesUploading[i].perc=0,this.filesUploading[i].fileName=e.name})),Array.from(r).forEach(((e,t)=>{if(e.size<1e8){let i=new FormData;i.append("name",e.name),i.append("userID",this.state.loggedinUserID),i.append("description",""),i.append("file",e);let s=new XMLHttpRequest;s.open("POST",this.state.baseURL+"/upload.php"),s.upload.addEventListener("progress",(i=>{i.loaded,i.total;this.filesUploading[t].fileName=e.name,this.fileList[t].perc=this.filesUploading[t].perc=0})),s.addEventListener("load",(i=>{e.completed=!0;let t=!0;Array.from(r).forEach((e=>{e.completed||(t=!1)})),t&&(this.finished=!0,this.draggingOver=!1,this.showProgress=!1)})),s.send(i)}else this.showProgress=!1,this.draggingOver=!1,this.showProgress=!1,i=!0,alert("a file was rejected due to incorrect type or filesize (max filesize = 100MB)")}))}))))},dragLeaveHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},mouseUpHandler(e){this.draggingOver=!1,e.preventDefault(),e.stopPropagation()},dragOverHandler(e){e.preventDefault(),e.stopPropagation(),this.showProgress||(this.showProgress||(this.finished=!1),this.draggingOver=!0)}},mounted(){console.log(this.$refs),window.onmousemove=()=>{this.draggingOver=!1}}};const H=(0,p.Z)(U,[["render",P],["__scopeId","data-v-6f0aa14c"]]);var b=H,k={components:{Main:h,Dropzone:b},name:"App",data(){return{state:{baseURL:"https://pshare.dweet.net"}}}};const z=(0,p.Z)(k,[["render",a]]);var E=z;(0,r.ri)(E).mount("#app")}},i={};function t(r){var s=i[r];if(void 0!==s)return s.exports;var n=i[r]={exports:{}};return e[r](n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(i,r,s,n){if(!r){var a=1/0;for(p=0;p<e.length;p++){r=e[p][0],s=e[p][1],n=e[p][2];for(var o=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(o=!1,n<a&&(a=n));if(o){e.splice(p--,1);var d=s();void 0!==d&&(i=d)}}return i}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[r,s,n]}}(),function(){t.d=function(e,i){for(var r in i)t.o(i,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){var e={143:0};t.O.j=function(i){return 0===e[i]};var i=function(i,r){var s,n,a=r[0],o=r[1],l=r[2],d=0;if(a.some((function(i){return 0!==e[i]}))){for(s in o)t.o(o,s)&&(t.m[s]=o[s]);if(l)var p=l(t)}for(i&&i(r);d<a.length;d++)n=a[d],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(p)},r=self["webpackChunkpshare"]=self["webpackChunkpshare"]||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(95)}));r=t.O(r)})();
//# sourceMappingURL=app.71a7c896.js.map