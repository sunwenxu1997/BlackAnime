<template>
  <div class="canzhuo">
    <span class="line">
      <i v-if="fu" class="iconfont iconlazhu" style="font-size:5rem;top:-15px;"></i>
      <i v-if="fu" class="iconfont iconkaoji" style="top:5px"></i>
      <i v-if="fu" class="iconfont iconmianbao" style="top:15px"></i>
      <i v-if="fu" class="iconfont iconicon--" style="top:5px"></i>
      <i v-if="!fu" class="iconfont iconbaozi"  style="top:30px;font-size:2rem;"></i>
       <i v-if="!fu" class="iconfont iconbaozi"  style="top:30px;font-size:2rem;"></i>
        <i v-if="!fu" class="iconfont iconbaozi"  style="top:30px;font-size:2rem;"></i>
          <i v-if="!fu" class="iconfont iconwan"  style="top:37px;font-size:2rem;margin-left:50px"></i>
            <i v-if="!fu" class="iconfont iconchahu"  style="top:10px;"></i>
    </span>
  </div>
</template>

<script>
export default {
  props:{
    fu:{default:true}
  }
};
</script>

<style lang="scss" scoped>
.canzhuo {
  width: 300px;
  height: 10px;
  background: black;
  position: relative;
  top: -50px;
  &::before,
  &::after {
    content: "";
    width: 10px;
    height: 50px;
    background: black;
    position: absolute;
    top: 0;
  }
  &::before {
    left: 20px;
  }
  &::after {
    right: 20px;
  }
  .line {
    position: relative;
    top: -60px;
    display: flex;
    i {
      font-size: 4rem;
      position: relative;
    }
  }
}
</style>