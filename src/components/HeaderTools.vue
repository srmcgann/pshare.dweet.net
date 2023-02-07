<template>
  <div class="headerTools">
    <div v-if="state.loggedin">
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
  .headerTools{
    position: absolute;
    top:0;
    right: 0;
    padding: 5px;
    color: #fff;
  }
</style>
