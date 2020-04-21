<template>
  <div class="MainCard">
    <Arctail/>
    <div class="age">
      25
    </div>
    <div class="name">
      최지연
    </div>
    <div class="MainCardBottom">
    </div>
  </div>
</template>

<script>
import Arctail from "./MainCard/Arctail.vue"
export default {
    name:"MainCard",
    components:{
      Arctail
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Raleway:wght@700&display=swap');
.MainCard{
  
    position: absolute;
    width:80%;
    height:60%;
    border-radius:var(--global-radius);
    box-shadow: 0px 26px 71px 0px rgba(0,0,0,0.2);
    left:10%;
    top:20%;
    background:white;
    overflow: hidden;
    .age{
      font-family: 'Raleway', sans-serif;
      font-size:160px;
      color:var(--primary);
      font-weight:bold;
      position: absolute;
      left:-18px;
      top:-60px;
    }
    .name{
      font-family: 'Do Hyeon', sans-serif;
      // font-weight:bold;
      font-size:48px;
      position: absolute;
      top:60px;
      left:24px;
      color:rgb(100, 92, 105);
    }
    .MainCardBottom{
      height:35%;
      width:100%;
      border-radius:15px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      position: absolute;
      bottom:0px;
      background:var(--primary);
    }
}
</style>