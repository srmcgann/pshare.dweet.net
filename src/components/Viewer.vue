<template>
    <button
      class="cancelButton button"
      id="viewerClose"
      @click="state.closeModals()"
    >close</button>
  <div class="viewer">
   <iframe :src="src" class="viewerFrame"></iframe>
  </div>
</template>

<script>

export default {
  name: 'Viewer',
  props: ['state', 'src'],
  data(){
    return {
    }
  },
  methods:{
  },
  mounted(){
  }
}

</script>

<style scoped>
  #viewerClose{
    position: absolute;
    right: 0;
    margin-right: 50px;
    margin-top: 50px;
  }
  .viewerFrame{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    border: none;
    height: 100vh;
  }
  #viewerClose{
    position: absolute;
    right: 0;
    z-index: 100;
    margin-right: 50px;
    margin-top: 50px;
  }
  .viewer{
    text-align: center;
    position: fixed;
    top: 0;
    padding: 20px;
    left: 0;
    color: #fff;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background: #011e;
  }
</style>
