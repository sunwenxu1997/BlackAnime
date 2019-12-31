<template>
  <div class="canzhuo">
    <span class="line">
      <i class="iconfont iconlazhu" style="font-size:5rem;top:-15px;"></i>
      <i class="iconfont iconkaoji" style="top:5px"></i>
      <i class="iconfont iconmianbao" style="top:15px"></i>
      <i class="iconfont iconicon--" style="top:5px"></i>
    </span>
  </div>
</template>

<script>
export default {};
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