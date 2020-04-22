<template>
  <div class="MainCard">
    <Arctail/>
    <div class="age">
      25
    </div>
    <div class="name">
      <span class="accenttext">지연</span>
      아
    </div>
    <div class="name2">
      <span class="accenttext">25</span>
      번째 생일
    </div>
    <div class="name3">
      축하해!!
    </div>
    <div class="underline"/>
    <div class="whitecutout"/>
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
    width:100%;
    height:100%;
    box-shadow: 0px 26px 71px 0px rgba(255, 255, 255, 0.2);
    left:10%;
    top:10%;
    background:white;
    overflow: hidden;
    .accenttext{
      margin-right:-10px;
      color:#6be0af;
    }
    .underline{
      height:10px;
      width:70px;
      background:#6be0af;
      position:absolute;
      top:120px;
      opacity: 0.4;
    }
    .whitecutout{
      width:25px;
      height:25px;
      position:absolute;
      border-radius: 50%;
      background: rgb(255, 238, 0);
      left:-12.5px;
      top:304px;
      z-index: 1;
    }
    .age{
      font-family: 'Raleway', sans-serif;
      font-size:160px;
      color:#6be0af;
      font-weight:bold;
      position: absolute;
      left:-18px;
      top:-60px;
      opacity: 0.1;
    }
    @mixin nametemplate{
      font-family: 'Do Hyeon', sans-serif;
      font-size:48px;
      position: absolute;
      color:rgb(100, 92, 105);
      animation-name:show;
      animation-timing-function: ease-out;
      animation-duration:.8s;
    }
    @keyframes show{
      from{
        opacity:0;
        margin-top:20px;
      }
      to{
        opacity: 1.0;
        margin-top:0px;
      }
    }
    .name{
      @include nametemplate();
      animation-delay: 0s;
      top:80px;
      left:24px;
      
    }
    .name2{
      @include nametemplate();
      animation-delay: 1s;
      top:130px;
      left:24px;
    } 
    .name3{
      @include nametemplate();
      animation-delay: 2s;
      top:190px;
      left:24px;
    }
    .MainCardBottom{
      height:35%;
      width:100%;
      position: absolute;
      bottom:0px;
      background:#6be0af;
    }
}
</style>