<template>
  <div class="MainCard">
    <div class="age">
      25
    </div>
    <div class="name">
      홍길동
    </div>
    <div class="MainCardBottom">
    </div>
  </div>
</template>

<script>
export default {
    name:"MainCard"
}
</script>

<style lang="scss" scoped>
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
      font-size:128px;
      color:var(--primary);
      font-weight:bold;
      position: absolute;
      left:-18px;
      top:-18px;
    }
    .name{
      font-weight:bold;
      font-size:48px;
      position: absolute;
      top:60px;
      left:24px;
      color:rgb(155, 60, 214);
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