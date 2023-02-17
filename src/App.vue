<template>
  <Viewer v-if="state.viewerModalVisible" :state="state" :src="this.state.viewerSrc"/>
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
import Viewer from './components/Viewer'
import Register from './components/Register'
import Dropzone from './components/Dropzone'
export default {
  components: {
    Header,
    Main,
    Dropzone,
    Login,
    Viewer,
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
        loggedinUserHash: '',
        loadLoggedInUserData: null,
        loggedinUserBasicIcons: '',
        loggedinUserID: '',
        loggedinUserFiles: [],
        loggedinUserLocation: '',
        viewerSrc: '',
        decToAlpha: null,
        alphaToDec: null,
        view: null,
        setting: null,
        dropTarget: '/',
        fetchObj: null,
        getSuffix: null,
        showModal: null,
        closeModals: null,
        login: null,
        token: '',
        register: null,
        logout: null,
        loginModalVisible: false,
        registerModalVisible: false,
        settingsModalVisible: false,
        viewerModalVisible: false,
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
      this.state.loggedinUserLocation = ''
      this.state.loggedinUserFiles = []
      this.state.loggedin = false
      window.location.reload()
    },
    alphaToDec(val){
      let pow=0
      let res=0
      let cur, mul
      while(val!=''){
        cur=val[val.length-1]
        val=val.substring(0,val.length-1)
        mul=cur.charCodeAt(0)<58?cur:cur.charCodeAt(0)-(cur.charCodeAt(0)>96?87:29)
        res+=mul*(62**pow)
        pow++
      }
      return res
    },
    decToAlpha(n){
      let alphabet='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let ret='', r
      while(n){
        ret = alphabet[Math.round((n/62-(r=n/62|0))*62)|0] + ret
        n=r
      }
      return ret == '' ? '0' : ret
    },
    getAvatar(id){
      if(typeof this.state.userInfo[id] == 'undefined' || !this.state.userInfo[id].avatar){
        return this.state.defaultAvatar
      } else {
        this.state.userInfo[id].avatar = this.state.userInfo[id].avatar.replace(' ','')
        return this.state.userInfo[id].avatar
      }
    },
    setCookie(){
      let cookies = document.cookie
      cookies.split(';').map(v=>{
        document.cookie = v + '; expires=' + (new Date(0)).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      })
      document.cookie = 'loggedinUser=' + this.state.loggedinUserName + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'loggedinUserLocation=' + this.state.loggedinUserLocation + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
      document.cookie = 'basicIcons=' + this.state.loggedinUserBasicIcons + '; expires=' + (new Date((Date.now()+3153600000000))).toUTCString() + '; path=/; domain=' + this.state.rootDomain
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
        if(data[0]){
          this.state.loggedinUserFiles = [] //data[1]
          this.$nextTick(()=>{
            data[1].map(v=>{
              v.private = !!(+v.private)
            })
            this.state.loggedinUserFiles = data[1]
            let s = window.location.origin+'/'+this.decToAlpha(this.state.loggedinUserID)+this.state.loggedinUserLocation
            window.history.pushState(s, null, s)
          })
        }else{
          console.log('loadUserData[App.vue]',data)
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
        case 'viewer':
          this.state.viewerModalVisible = true
        break
      }
    },
    view(src){
      this.closeModals
      this.state.viewerSrc = src
      this.showModal('viewer')
    },
    settings(){
      this.closeModals()
      this.showModal('settings')
    },
    closeModals(){
      this.state.loginModalVisible = false
      this.state.registerModalVisible = false
      this.state.settingsModalVisible = false
      this.state.viewerModalVisible = false
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
      let location = decodeURIComponent(window.location.pathname)
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
          passhash,
          location
        }
        fetch(this.state.baseURL + '/cookieLogin.php',  this.state.fetchObj(sendData))
        .then(json=>json.json()).then(data=>{
          if(data[0]){
            console.log('cookieLogin.php[App.vue]',data)
            this.state.loggedin = true
            this.state.loggedinUser = data[1]
            this.state.token = data[1].passhash
            this.state.loggedinUserHash = data[1].passhash
            this.state.loggedinUserID = data[1].id
            this.state.loggedinUserAvatar = data[1].avatar
            this.state.loggedinUserBasicIcons = !!(+data[1].basicIcons)
            this.state.loggedinUserName = data[1].name
            this.state.loggedinUserLocation = data[1].currentLocation
            this.state.loggedinUserEmail = data[1].email
            this.state.admin = !!(+data[1].admin)
            this.state.setCookie()
            //window.location.reload
            this.state.loadLoggedInUserData()
            this.state.closeModals()
          }else{
            this.clearCookie()
          }
        })
      }
    }
  },
  mounted(){
    this.state.view = this.view
    this.state.login = this.login
    this.state.logout = this.logout
    this.state.register = this.register
    this.state.settings = this.settings
    this.state.fetchObj = this.fetchObj
    this.state.getSuffix = this.getSuffix
    this.state.setCookie = this.setCookie
    this.state.decToAlpha = this.decToAlpha
    this.state.alphaToDec = this.alphaToDec
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
/* Customize the label (the checkboxLabel) */
.checkboxLabel {
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: -2px;
  margin-left: 30px;
  margin-top: 3px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkboxLabel input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border: 1px solid #2468;
  background-color: #123;
}

/* On mouse-over, add a grey background color */
.checkboxLabel:hover input ~ .checkmark {
  background-color: #234;
}

/* When the checkbox is checked, add a blue background */
.checkboxLabel input:checked ~ .checkmark {
  background-color: #086;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkboxLabel input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkboxLabel .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
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
