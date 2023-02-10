<template>
  <div class="header">
    <div
      v-if="state.loggedin"
      v-html="headerText()"
    ></div>
    <HeaderTools :state="state"/>
  </div>
</template>

<script>
import HeaderTools from './HeaderTools'

export default {
  name: 'Header',
  components: {
    HeaderTools
  },
  props: ['state'],
  data(){
    return {
    }
  },
  methods:{
    headerText(){
      if(this.state.loggedin){
        return 'welcome, ' + this.state.loggedinUserName +
        `<br>current directory: ${this.state.loggedinUserLocation}`
      } else {
        return 'pshare'
      }
    }
  }
}

</script>

<style scoped>
  .header{
    padding: 20px;
    color: #fff;
    height: 30px;
    background: linear-gradient(#000, #4f82);
    border: 1px solid #4f84;
  }
</style>
