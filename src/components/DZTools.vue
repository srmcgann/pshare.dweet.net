<template>
  <div class="DZTools">
    <div class="caption" v-html="caption"></div><br>
    <div
      ref="parentFolderDropTarget" 
      @click="goUp()"
      :title="'click to go up a directory'"
      v-if="this.state.loggedinUserLocation !== '/'"
      class="folderIcon fileDiv parentFolder"
    >
      <div class="specialIcon">
        drop items here to<br>
        move to parent directory
      </div>
    </div>
    <div class="descText">Drag one or more files to this <i>drop zone</i>.<br>
      <span style="float: left;">directory tools:</span><br>
      <button
      title="select files from your device to upload to this directory..."
      @click="selectFiles()"
      class="DZToolsButton uploadButton"
      >choose file(s)<br>to UPLOAD</button>
      <button
      title="create new folder"
      @click="createFolder()"
      class="DZToolsButton folderButton"
      >create<br>folder</button>
      <button
      title="create new folder and enter it"
      @click="createFolderAndGo()"
      class="DZToolsButton folderAndGoButton"
      >create and<br>enter folder</button>
      <button
      title="make everything in this directory PUBLIC"
      @click="toggleAll('public')"
      class="DZToolsButton pubAll"
      >set ALL to<br>PUBLIC</button>
      <button
      title="make everything in this directory PRIVATE"
      @click="toggleAll('private')"
      class="DZToolsButton privAll"
      >set ALL to<br>PRIVATE</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DZTools',
  props: ['state', 'caption'],
  data(){
    return {
      testData : "it works!"
    }
  },
  methods:{
    goUp(){
      this.state.goUp()
    },
    selectFiles(){
      let files = document.createElement('input')
      files.type = 'file'
      files.multiple = true
      files.name = 'fileInput'
      files.onchange = e => {
        let fileList = []
        Array.from(files.files).forEach((v,i) => {
          v.completed = false
          v.perc = 0
          v.idx = i
          fileList = [...fileList, v]
        })
        let error = false
        fileList.map((v, i)=>{
          if(error) return
          if(
            //(v.type == 'audio/mpeg' ||
            //v.type == 'audio/ogg' ||
            //v.type == 'audio/wav') &&
            v.size < 100000000
          ){
            let data = new FormData()
            data.append('user', this.state.loggedinUserName)
            data.append('passhash', this.state.loggedinUserHash)
            data.append('name', v.name)
            data.append('userID', this.state.loggedinUserID)
            data.append('location', this.state.loggedinUserLocation)
            data.append('description', '')
            data.append('file', v)
            let request = new XMLHttpRequest()
            request.open('POST', this.state.baseURL + '/upload.php')
            let tidx = i
            request.upload.addEventListener('progress', e => {
              let perc = (e.loaded / e.total)*100
              fileList[tidx].perc = perc
            })
            request.onreadystatechange = e => {
              if(e.status ==200 && e.readyState == 4){
              }
            }
            request.addEventListener('load', e=>{
              v.completed = true
              let finished = true
              fileList.map(q=>{
                if(!q.completed) finished = false
              })
              if(finished) {
                this.state.loadLoggedInUserData()
                this.finished = true
                this.draggingOver = false
                this.showProgress = false
              }
            })
            request.send(data)
          } else {
            this.showProgress = false
            this.finished = false
            error = true
            alert('a file was rejected due to incorrect type or filesize (max filesize = 100MB)')
          }
        })

      }
      files.click()
    },
    toggleAll(mode){
      let list = []
      this.state.loggedinUserFiles.map(v=>{
        list=[...list, +v.id]
      })
      let sendData = {
        user: this.state.loggedinUserName,
        passhash: this.state.loggedinUserHash,
        mode,
        list: JSON.stringify(list)
      }
      console.log(sendData)
      fetch(this.state.baseURL + '/bulkToggle.php', this.state.fetchObj(sendData))
      .then(json=>json.json()).then(data=>{
        console.log(data)
        if(data[0]){
          this.state.loggedinUserFiles.map(v=>{
            switch(mode){
              case 'public':
              v.private = false
              break
              case 'private':
              v.private = true
              break
            }
          })
        }else{
          console.log('error toggling!', data)
        }
      })      
    },
    createFolderAndGo(){
      window.location.href += '/' + this.createFolder()
    },
    createFolder(){
      let folderName = prompt('enter the name of the folder:', 'new folder name');
      if(!folderName) return
      let sendData = {
        user: this.state.loggedinUserName,
        passhash: this.state.loggedinUserHash,
        currentLocation: this.state.loggedinUserLocation,
        folderName: folderName
      }
      fetch(this.state.baseURL + '/createFolder.php', this.state.fetchObj(sendData))
      .then(json=>json.json()).then(data=>{
        if(data[0]){
          this.state.loggedinUserFiles.push(data[2])
          this.state.positionFilesAbsolutely(true) 
        }else{
          console.log('error creating folder!')
        }
      })
      return folderName
    }
  },
  mounted(){
    this.state.parentFolderDropTarget = this.$refs.parentFolderDropTarget
  }
}

</script>

<style scoped>
  .DZTools{
    padding: 5px;
    color: #fff;
    background:#0003;
    margin: 0;
    text-align: left;
    top:0;
    min-height: 95px;
    left: 0;
    max-width: calc(100% - 10px);
    margin-top: 5px;
    width: 100vw;
  }
  .parentFolder{
    width: 60px;
    height: 60px;
    cursor: pointer;
    min-height: unset;
    padding: unset;
    margin: 10px;
    position: absolute;
    left: 30px;
    margin-top: 10px;
  }
  .folderButton{
    background-image: url(https://jsbot.cantelope.org/uploads/2jP7OJ.png);
  }
  .folderAndGoButton{
    background-image: url(https://jsbot.cantelope.org/uploads/1UNwX4.png);
  }
  .privAll{
    background-image: url(https://jsbot.cantelope.org/uploads/pN2YW.png);
  }
  .pubAll{
    background-image: url(https://jsbot.cantelope.org/uploads/MVCJA.png);
  }
  .uploadButton{
    background-image: url(https://jsbot.cantelope.org/uploads/1nbpSH.png);
  }
  .caption{
    top: 5px;
    font-size: 1.3em;
    float: left;
    color: #afa;
  }
  .descText{
    margin-left: 120px;
    margin-top: -20px; 
  }
  .DZToolsButton{
    background-color: #4fc6;
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: 50px;
    border-radius: 10px;
    padding: 4px;
    color: #fff;
    border: 1px solid #4f88;
    text-shadow: 2px 2px 2px #000;
    margin: 5px;
    height: 60px;
    padding-top: 25px;
    cursor: pointer;
    min-width: 50px;
    display: inline-block;
  }
  .specialIcon{
    position: absolute;
    width: 65px;
    line-height: 1em;
    margin-top: -2px;
    font-size: 10px;
    padding: 8px;
    background: #0004;
    color: #fff;
    margin-left: -12px;
    text-shadow: 1px 1px 2px #000;
    border-radius: 5px;
  }
</style>
