<template>
  <Settings v-if="state.settingsModalVisible" :state="state"/>
  <Register v-if="state.registerModalVisible" :state="state"/>
  <Login v-if="state.loginModalVisible" :state="state"/>
  <Header :state="state"/>
  <div v-if="state.loggedin" v-for="i in 1" class="App">
    <Dropzone :state="state" :caption="'zone ' + i"/>
  </div>
  <Main v-else :state="state" />
</template>

<script>
import Header from './components/Header'
import Main from './components/Main'
import Settings from './components/Settings'
import Login from './components/Login'
import Register from './components/Register'
import Dropzone from './components/Dropzone'
export default {
  components: {
    Header,
    Main,
    Dropzone,
    Login,
    Settings,
    Register
  },
  name: 'App',
  data(){
    return {
      state: {
        baseURL: 'https://pshare.dweet.net',
        rootDomain: 'pshare.dweet.net',
        loggedin: false,
        assetsURL: 'https://assets.dweet.net/misc',
        fileViewerURL: 'https://pshare.dweet.net/viewer',
        admin: false,
        loggedinUserAvatar: '',
        loggedinUserEmail: '',
        loggedinUserName: '',
        loggedinUserID: '',
        loggedinUserFiles: [],
        loggedinUserHash: '',
        setting: null,
        dropTarget: '/',
        fetchObj: null,
        getSuffix: null,
        showModal: null,
        closeModals: null,
        login: null,
        token: '',
        loadLoggedInUserData: null,
        register: null,
        logout: null,
        loginModalVisible: false,
        registerModalVisible: false,
        settingsModalVisible: false,
        setCookie: null
      }
    }
  },
  methods:{
    login(){
      this.closeModals()
      this.showModal('login')
    },
    logout(){
      this.clearCookie()
      this.state.loggedinUserName = ''
      this.state.loggedinUserID = ''
      this.state.loggedinUserHash = ''
      this.state.loggedinUserFiles = []
      this.state.loggedin = false
      window.location.reload()
    },
    getSuffix(file){
    },
    setCookie(){
      let cookies = document.cookie
      cookies.split(';').map(v=>{
        document.cookie = v + '; expires=' + (new Date(0)).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      })
      document.cookie = 'loggedinUser=' + this.state.loggedinUserName + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'minimized=' + this.state.minimized + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'loggedinUserID=' + this.state.loggedinUserID + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'loggedinUserHash=' + this.state.loggedinUserHash + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'token=' + this.state.token + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
    },
    fetchObj(sendData){
      let fetchObj
      if(location.href.indexOf('8000')===-1){
        fetchObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sendData),
        }
      }else{
        fetchObj = {
          method: 'POST',
          body: JSON.stringify(sendData),
        }
      }
      return fetchObj
    },
    loadLoggedInUserData(){
      let sendData = {
        user: this.state.loggedinUserName,
        passhash: this.state.loggedinUserHash
      }
      fetch(this.state.baseURL + '/loadUserData.php', this.state.fetchObj(sendData))
      .then(json=>json.json()).then(data=>{
        console.log(data)
        if(data[0]){
          this.state.loggedinUserFiles = [] //data[1]
          this.$nextTick(()=>{
            this.state.loggedinUserFiles = data[1]
          })
        }else{
          console.log(data)
          alert('there was an error loading user data. consarnit!')
        }
      })
    },
    register(){
      this.closeModals()
      this.showModal('register')
    },
    showModal(modal){
      switch(modal){
        case 'login':
          this.state.loginModalVisible = true
        break
        case 'register':
          this.state.registerModalVisible = true
        break
        case 'settings':
          this.state.settingsModalVisible = true
        break
      }
    },
    settings(){
      this.closeModals()
      this.showModal('settings')
    },
    closeModals(){
      this.state.loginModalVisible = false
      this.state.registerModalVisible = false
      this.state.settingsModalVisible = false
    },
    clearCookie(){
      let cookies = document.cookie
      cookies.split(';').map(v=>{
        document.cookie = v + '; expires=' + (new Date(0)).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      })
    },
    checkCookie(){
      let parts = document.cookie.split(';')
      let user =''
      let passhash = ''
      let id = ''
      parts.map(v=>{
        v = v.trim()
        let pair = v.split('=')
        switch(pair[0]){
          case 'loggedinUser':
            user = pair[1]
          break
          case 'loggedinUserID':
            id = pair[1]
          break
          case 'loggedinUserHash':
            passhash = pair[1]
          break
        }
      })
      if(user && passhash && id){
        let sendData = {
          user,
          passhash
        }
        fetch(this.state.baseURL + '/cookieLogin.php',  this.state.fetchObj(sendData))
        .then(json=>json.json()).then(data=>{
          if(data[0]){
            this.state.loggedinUser = data[1]
            this.state.token = data[1].passhash
            this.state.loggedinUserHash = data[1].passhash
            this.state.loggedinUserID = data[1].id
            this.state.loggedinUserAvatar = data[1].avatar
            this.state.loggedinUserName = data[1].name
            this.state.loggedinUserEmail = data[1].email
            this.state.admin = !!(+data[1].admin)
            this.state.setCookie()
            this.state.loadLoggedInUserData()
            this.state.closeModals()
            this.state.loggedin = true
          }else{
            this.clearCookie()
          }
        })
      }
    }
  },
  mounted(){
    this.state.login = this.login
    this.state.logout = this.logout
    this.state.register = this.register
    this.state.settings = this.settings
    this.state.fetchObj = this.fetchObj
    this.state.getSuffix = this.getSuffix
    this.state.setCookie = this.setCookie
    this.state.showModals = this.showModals
    this.state.closeModals = this.closeModals
    this.state.loadLoggedInUserData = this.loadLoggedInUserData
    this.checkCookie()
  }
}
</script>

<style>
html, body{
  background: #000;
  font-family: courier;
  font-size: 16px;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: 0;
  line-height: 1.1em;
}
.basicTextInput:focus{
  outline: none;
}
.basicTextInput{
  background: #000a;
  border: none;
  color: #4f8;
  border-bottom: 1px solid #0fa;
  min-width: 400px;
}
.inputForm{
  width: 500px;
  position: absolute;
  left: calc(50% - 25px);
  top: calc(50% - 25px);
  transform: translate(-50%, -50%);
  display: inline-block;
  background: #3338;
  padding-bottom: 20px;
}
.float{
  z-index: 50;
  position: relative;
}
.button{
  background: #4fc;
  border-radius: 30px;
  border: none;
  margin: 5px;
  cursor: pointer;
  min-width: 80px;
  display: inline-block;
}
.button:focus{
  outline: none;
}
.cancelButton{
  background: #400;
  color: #f00;
}
.inputForm{

}
.App{
  width: 100vw;
}
</style>
