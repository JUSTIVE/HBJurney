<template>
  <div class="Pangea">
      <MainCard/>
  </div>
</template>

<script>
import MainCard from "./MainCard.vue";
export default {
    name:"Pangea",
    components:{
        MainCard
    }
}
</script>

<style lang="scss">
.Pangea{
    width:100%;
    height:100%;
    background: linear-gradient(135deg, #8dec92 0%,#67cea3 100%);
}
</style>