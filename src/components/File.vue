<template>
  <div class="fileDiv" ref="fileDiv">
    <div
      @click="load()"
      class="file"
      :ref="file.id"
      :title="`open ${file.name}\nin a new browser tab`"
    >
    <div class="fileName" v-html="file.name" :ref="'name_'+file.hash"></div>
    </div>
    <button @click="downloadFile()" :title="'download file'" class="downloadButton"></button>
    <button @click="deleteFile()" :title="'delete file'" class="deleteButton"></button>
  </div>
</template>

<script>

export default {
  name: 'File',
  props: ['state', 'file'],
  data(){
    return {
    }
  },
  methods:{
    load(){
      window.open(this.state.fileViewerURL + '/' + this.file.hash )
    },
    downloadFile(){
      let a = document.createElement('a')
      a.href = 'proxy.php?url=' + this.state.assetsURL + '/' + this.file.hash
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
            console.log('file deleted')
            this.state.loggedinUserFiles = this.state.loggedinUserFiles.filter(v=>{
              return v.id != this.file.id
            })
          }
        })
      }
    }
  },
  mounted(){
    if(this.file.type.indexOf('image')!==-1){
      let thumbEl = this.$refs.fileDiv
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
  .deleteButton{
    width: 20px;
    height: 20px;
    border: none;
    margin-top: -18px;
    margin-left: -20px;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    vertical-align: top;
    border-radius: 5px;
    background-color: #200;
    background-position: center center;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    background-image: url(https://jsbot.cantelope.org/uploads/XeGsK.png);
  }
  .fileName{
    background: #033;
    padding: 5px;
    margin: 5px;
    border-radius: 10px;
    word-break: space;
    max-width: 150px;
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
  .downloadButton{
    width: 20px;
    height: 20px;
    border: none;
    margin-top: -18px;
    margin-left: -60px;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    vertical-align: top;
    border-radius: 5px;
    background-color: #086;
    background-position: center center;
    background-size: 15px 15px;
    background-repeat: no-repeat;
    background-image: url(https://jsbot.cantelope.org/uploads/2c0FSr.png);
  }
  .fileDiv{
    padding: 0px;
    padding-top:20px;
    background: #000;
    display: inline-block;
    margin: 10px;
    align-self: flex-start;
    border-radius: 5px;
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
