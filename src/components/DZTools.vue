<template>
  <div class="DZTools">
    <span style="float: left;">tools:</span>
    <button
      title="create new folder"
      @click="createFolder()"
      class="DZToolsButton folderButton"
    >create<br>folder</button>
  </div>
</template>

<script>

export default {
  name: 'DZTools',
  props: ['state'],
  data(){
    return {
      testData : "it works!"
    }
  },
  methods:{
    createFolder(){
      let folderName = prompt('enter the name of the folder:');
      if(!folderName) return
      let sendData = {
        user: this.state.loggedinUserName,
        passhash: this.state.loggedinUserHash,
        currentLocation: this.state.loggedinUserLocation,
        folderName: folderName
      }
      console.log(sendData)
      fetch(this.state.baseURL + '/createFolder.php', this.state.fetchObj(sendData))
      .then(json=>json.json()).then(data=>{
        console.log(data)
        if(data[0]){
          this.state.loggedinUserFiles.push(data[2])          
        }else{
          console.log('error creating folder!')
        }
      })
    }
  }
}

</script>

<style scoped>
  .DZTools{
    padding: 5px;
    color: #fff;
    background:#0003;
    margin: 0;
    text-align: center;
    top:0;
    left: 0;
    max-width: calc(100% - 10px);
    margin-top: 5px;
    width: 100vw;
  }
  .folderButton{
    background-image: url(http://jsbot.cantelope.org/uploads/2jP7OJ.png);
  }
  .DZToolsButton{
    background-color: #4fc6;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 30px;
    border-radius: 10px;
    padding: 0px;
    color: #fff;
    border: 1px solid #4f88;
    text-shadow: 2px 2px 2px #000;
    margin: 5px;
    height: 35px;
    cursor: pointer;
    min-width: 50px;
    display: inline-block;
  }
</style>
