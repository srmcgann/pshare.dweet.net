<template>
  <div @click="load()" class="file" :ref="this.file.id">
    {{file.name}}
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
      window.open(this.state.assetsURL + this.file.hash + '.' + this.file.name.split('.')[1].toUpperCase())
    }
  },
  mounted(){
    let fileElement = this.$refs[this.file.id]
    console.log(fileElement)
    fileElement.style.left = this.file.X + 'px'
    fileElement.style.top = this.file.Y + 'px'
    fileElement.onmouseover = () => {
      fileElement.style.background = '#0f0'
    }
    fileElement.onmouseleave = () => {
      fileElement.style.background = '#0000'
    }
  }
}

</script>

<style scoped>
  .file{
    padding: 10px;
    display: inline-block;
    margin: 5px;
    word-break: break-all;
    font-size: 8px;
    position: absolute;
    max-width: 50px;
    color: #fff;
    border: 1px solid #4f84;
  }
</style>
