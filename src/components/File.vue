<template>
  <div
    class="fileDiv"
    :class="{'folderIcon': file.type=='folder', 'basicIcon': file.type!='folder' && state.loggedinUserBasicIcons}"
    ref="fileDiv"
  >
    <div class="fileButtons">
      <label :for="'privateCheckbox' + file.id" :key="'cblabel'+file.id" class="checkboxLabel" style="margin:2px;display:unset;transform: scale(.75);" :title="'toggle public visibility of this '+(+file.folder?'folder':'file')+`\n[`+file.name+' is currently '+(file.private==false?'PUBLIC':'PRIVATE')+']'">
        <input type="checkbox" :key="'cbkey'+file.id" :id="'privateCheckbox' + file.id" v-model="file.private" @input="togglePublic()">
        <span class="checkmark" :class="{'warning': file.private==false}" style=";border: 1px solid #fff8"></span>
      </label>
      <button @click="renameFile()" :title="'rename'" class="fileButton renameButton"></button>
      <button v-if="file.type != 'folder'" @click="downloadFile()" :title="'download file'" class="fileButton downloadButton"></button>
      <button @click="deleteFile()" :title="'delete file'" class="fileButton deleteButton"></button>
    </div>
    <div
      @click="copyLink()"
      class="file"
      :ref="file.id"
      :title="`copy link to -> ${file.name}`"
    >
    </div>
    <div
      @click="load()"
      class="file"
      :ref="file.id"
      :title="`open ${file.name}`"
    >
    <div class="fileName" v-html="file.name" :ref="'name_'+file.hash"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'File',
  props: ['state', 'file'],
  data(){
    return {
      posX: null,
      posY: null,
      dragging: false
    }
  },
  methods:{
    togglePublic(){
      let sendData = {
        user: this.state.loggedinUserName,
        passhash: this.state.loggedinUserHash,
        fileID: this.file.id,
        private: this.file.private==false ? 1 : 0
      }
      fetch(this.state.baseURL + '/setPrivate.php', this.state.fetchObj(sendData))
      .then(json=>json.json()).then(data=>{
        //if(data[0]) this.file.private = !(+this.file.private)
      })
    },
    viewableAsset(){
      return this.file.type.indexOf('image') !== -1 ||
             this.file.type.indexOf('video') !== -1 ||
             this.file.type.indexOf('audio') !== -1
    },
    load(){
      if(this.viewableAsset()){
        this.state.view(this.state.fileViewerURL + '/?url=' + this.file.hash)
      } else {
        if(this.file.type == 'folder'){
          window.location.href+=this.file.name+'/'
        } else {
          this.downloadFile()
        }
      }
    },
    renameFile(){
      let newName = prompt('enter a new name', this.file.name)
      if(this.file.name != newName && newName){
        let sendData = {
          user: this.state.loggedinUserName,
          passhash: this.state.loggedinUserHash,
          fileID: this.file.id,
          newName
        }
        fetch(this.state.baseURL + '/renameFile.php', this.state.fetchObj(sendData))
        .then(json=>json.json()).then(data=>{
          console.log('renameFile.php[File.vue]',data)
          if(data[0]) this.file.name = newName
        }) 
      }
    },
    downloadFile(){
      let a = document.createElement('a')
      a.href = '/proxy.php?url=' + this.state.assetsURL + '/' + this.file.hash
      a.download = this.file.name
      a.style.position = 'absolute'
      a.style.visible = 'hidden'
      a.target = "_blank"
      document.body.appendChild(a)
      a.click()
      a.remove()
      
    },
    deleteFile(){
      if(confirm("are you sure?\n\ndeleting this file ("+this.file.name+") cannot be undone!")){
        let sendData = {
          user: this.state.loggedinUserName,
          passhash: this.state.loggedinUserHash,
          fileID: this.file.id
        }
        fetch(this.state.baseURL + '/deleteFile.php', this.state.fetchObj(sendData))
        .then(json=>json.json()).then(data=>{
          if(data[0]){
            this.state.loggedinUserFiles = this.state.loggedinUserFiles.filter(v=>{
              return v.id != this.file.id
            })
          }
        })
      }
    }
  },
  mounted(){
    let thumbEl = this.$refs.fileDiv
    thumbEl.onmousedown=e=>{
      console.log('mousedown (file id = ' + this.file.id + '): ', e)
      thumbEl.style.position = 'absolute'
      let rect = thumbEl.getBoundingClientRect()
      this.posX = rect.left - e.pageX
      this.posY = rect.top - e.pageY - 50
      this.dragging = true
    } 
    window.onmouseup = thumbEl.onmouseup=e=>{
      console.log('mouseup (file id = ' + this.file.id + '): ', e)
      thumbEl.style.position = 'unset'
      this.dragging=false
    }
    thumbEl.ondragend=e=>{
      e.stopPropagation()
      e.preventDefault()
      thumbEl.style.position = 'unset'
    }
    thumbEl.onmousemove=e=>{
      if(this.dragging){
        thumbEl.style.left = this.posX + e.pageX + 'px'
        thumbEl.style.top = this.posY + e.pageY - 100 + 'px'
      }
    }
    thumbEl.ondrag=e=>{
      e.stopPropagation()
      e.preventDefault()
    }
    if(this.file.type.indexOf('image')!==-1){
      thumbEl.style.backgroundSize = 'cover'
      thumbEl.style.repeat = 'no-repeat'
      thumbEl.style.position = 'center center'
      thumbEl.style.backgroundImage = `url(${this.state.assetsURL + '/' + this.file.hash})`
    }
    let fileElement = this.$refs['name_'+this.file.hash]
    //fileElement.style.left = this.file.X + 'px'
    //fileElement.style.top = this.file.Y + 'px'
    fileElement.onmouseover = () => {
      fileElement.style.background = '#0f0'
      fileElement.style.color = '#000';
      fileElement.style.cursor = 'pointer'
    }
    fileElement.onmouseleave = () => {
      fileElement.style.background = '#033'
      fileElement.style.color = '#fff'
      fileElement.style.cursor = 'default'
    }
  }
}

</script>

<style scoped>
  .folderIcon{
    width: 125px;
    height: 85px;
    border: none;
    background-color: #2000!important;
    background-position: center center!important;
    background-size: contain!important;
    background-repeat: no-repeat!important;
    background-image: url(https://jsbot.cantelope.org/uploads/2jP7OJ.png)!important;
  }
  .basicIcon{
    background-repeat: no-repeat!important;
    background-position: center center!important;
    background-size: 50px!important;
    background-image: url(https://jsbot.cantelope.org/uploads/2bceZU.png)!important;
  }
  .notBasicIcons{
  }
  .fileButton{
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
    margin: 2px;
    display: inline-block;
    border-radius: 5px;
    background-position: center center;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }
  .privateCheckbox{
  }
  .renameButton{
    background-color: #8fca;
    background-image: url(https://jsbot.cantelope.org/uploads/11tQv3.png);
  }
  .downloadButton{
    background-color: #086;
    background-image: url(https://jsbot.cantelope.org/uploads/2c0FSr.png);
  }
  .deleteButton{
    background-color: #200;
    background-image: url(https://jsbot.cantelope.org/uploads/XeGsK.png);
  }
  .fileName{
    background: #033;
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
    white-space: break-spaces;
    max-width: 85px;
    min-width: 85px;
    padding-left: 10px;
    padding-right: 10px;
    line-height: 1;
  }
  .thumb{
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .fileButtons{
    text-align: center;;
    margin-top: -15px;
  }
  .fileDiv{
    padding: 0px;
    padding-top:20px;
    background: #000;
    display: inline-block;
    max-width: 125px;
    margin: 10px;
    align-self: flex-start;
    border-radius: 5px;
  }
  .warning{
    background: #400!important;
  }
  .file{
    padding: 0px;
    padding-top: 0px;
    display: inline-block;
    margin: 5px;
    min-width:70px;
    vertical-align: top;
    display: inline-block;
    font-size: 10px;
    color: #fff;
  }
</style>
