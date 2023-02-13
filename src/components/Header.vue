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
        let s = '<button onclick="window.location.href=\'/\'" style="min-width:25px" class="button">top</button><button onclick="l=window.location.href.split(\'/\');l.pop();l.pop();l=l.join(\'/\');window.location.href=l+\'/\'" style="min-width:25px" class="button">up</button>'
        return 'welcome, ' + this.state.loggedinUserName + '<br>' + (this.state.loggedinUserLocation=='/'?'':s) +
        `<span style="background: #000;color:#fff;border: 1px solid #4f84;font-size: 14px;">:${this.state.loggedinUserLocation}$</span>`
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
