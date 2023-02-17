<template>
  <div class="headerTools">
    <div v-if="state.loggedin">
      <label :for="'basicIconsCheckbox'" class="checkboxLabel basicIcons" style="transform: scale(.75);" :title="'use/don\'t use basic icons\n(by default, gif thumbnails are animated for example\n but with many of them this can cause performance problems'">
        <input type="checkbox" id="basicIconsCheckbox" v-model="state.loggedinUserBasicIcons" @input="toggleBasicIcons()">
        <span class="checkmark" style=";border: 1px solid #fff8"></span>
      </label>
      <button
        class="button"
        @click="logout()"
      >logout</button><br>
      <button
        class="button"
        @click="settings()"
      >settings</button>
    </div>
    <div v-else>
      <button
        class="button"
        :class="{'float': state.registerModalVisible}"
        @click="login()"
      >login</button><br>
      <button
        class="button"
        :class="{'float': state.loginModalVisible}"
        @click="register()"
      >register</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  props: ['state'],
  data(){
    return {
      testData : "it works!"
    }
  },
  methods:{
    login(){
      this.state.login()
    },
    logout(){
      this.state.logout()
    },
    register(){
      this.state.register()
    },
    toggleBasicIcons(){
      let sendData = {
        user: this.state.loggedinUserName,
        passhash: this.state.loggedinUserHash,
        basicIcons: this.state.loggedinUserBasicIcons==false ? 1 : 0
      }
      fetch(this.state.baseURL + '/setBasicIcons.php', this.state.fetchObj(sendData))
      .then(json=>json.json()).then(data=>{
        console.log(data)
        //if(data[0]) this.file.private = !(+this.file.private)
      })
    },
    settings(){
      this.state.closeModals()
      this.state.settings()
    }
  },
  mounted(){
    //this.state.loginModalVisible = true
  }
}

</script>

<style scoped>
  .basicIcons{
    position: absolute;
    margin-left: -30px;
  }
  .headerTools{
    position: absolute;
    top:0;
    right: 0;
    padding: 5px;
    color: #fff;
  }
</style>
