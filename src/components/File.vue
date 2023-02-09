<template>
  <div class="fileDiv">
    <div
      @click="load()"
      class="file"
      :ref="this.file.id"
      :title="`open ${file.name}`"
    >
      {{file.name}}
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
      document.body.remove(a)
      
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
          console.log(data)
        })
      }
    }
  },
  mounted(){
    let fileElement = this.$refs[this.file.id]
    //fileElement.style.left = this.file.X + 'px'
    //fileElement.style.top = this.file.Y + 'px'
    fileElement.onmouseover = () => {
      fileElement.style.background = '#0f0'
      fileElement.style.color = '#000';
      fileElement.style.cursor = 'pointer'
    }
    fileElement.onmouseleave = () => {
      fileElement.style.background = '#0000'
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
    background-color: #400;
    background-position: center center;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(https://jsbot.cantelope.org/uploads/XeGsK.png);
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
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(http://jsbot.cantelope.org/uploads/2c0FSr.png);
  }
  .fileDiv{
    padding: 2px;
    padding-top:20px;
    background: #000;
    margin: 3px;
    border-radius: 5px;
  }
  .file{
    padding: 5px;
    padding-top: 0px;
    display: inline-block;
    margin: 5px;
    vertical-align: top;
    align-self: flex-start;
    display: inline-block;
    word-break: break-all;
    font-size: 8px;
    color: #fff;
    border: 1px solid #4f84;
  }
</style>
