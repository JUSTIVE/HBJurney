<template>
  <div class="Pangea">
      <carousel 
      :navigationEnabled=false
      :perPage=1
      :paginationEnabled=false
      :scrollPerPage=true>
          <slide>
              <MainCard/>
          </slide>
          <slide>
              <MainCard/>
          </slide>
          <slide>
              <MainCard/>
          </slide>
          <slide>
              <MainCard/>
          </slide>
      </carousel>
      
  </div>
</template>

<script>
import MainCard from "./MainCard.vue";

export default {
    name:"Pangea",
    components:{
        MainCard,
    }
}
</script>

<style lang="scss">
.Pangea{
    width:100%;
    height:100%;
    background: linear-gradient(135deg, #8dec92 0%,#67cea3 100%);
    background:#ffd8d9;
}
.VueCarousel-slide{
    height:100vh!important;
}
.VueCarousel-wrapper{
    height:100%;
}
</style>