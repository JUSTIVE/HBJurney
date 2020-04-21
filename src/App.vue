<template>
  <div id="app">
    <Pangea/>
  </div>
</template>

<script>
import Pangea from './components/Pangea.vue'

export default {
  name: 'App',
  components: {
    Pangea
  }
}
</script>

<style lang="scss">
body{
  width:100vw;
  height:100vh;
  margin:0px;
  top:0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width:100%;
  height:100%;
}
</style>
