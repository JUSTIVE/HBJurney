<template>
  <div class="Pangea">
      <carousel>
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
import {Carousel,Slide} from 'vue-carousel';
export default {
    name:"Pangea",
    components:{
        MainCard,
        Carousel,
        Slide
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
</style>