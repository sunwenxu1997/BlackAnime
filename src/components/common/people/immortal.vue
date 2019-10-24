<template>
  <div class="immortal">
    <!-- 神仙 -->
    <div id="eye" class="eye-l"></div>
    <div id="eye" class="eye-r"></div>
    <div class="zui"></div>
    <div class="huzi"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$anime({
      targets: "#eye",
      scaleY: 0,
      loop: true,
      delay: 1500,
      duration: 100
    });
  }
};
</script>

<style lang="scss" scoped>
.immortal {
  width: 50px;
  height: 100px;
  background: black;
  position: absolute;
  top: -100px;
  right: 30%;
  #eye {
    width: 10px;
    height: 10px;
    background: white;
    position: absolute;
    top: 15px;
  }
  .eye-l {
    left: 10px;
  }
  .eye-r {
    right: 10px;
  }
  .zui{
      width: 20px;
      height: 2px;
      position: absolute;
      left: calc(50% - 10px);
      bottom: 50px;
      background: white;
  }
  .huzi{
      width: 20px;
      height: 40px;
      background: white;
      position: absolute;
      bottom: 5px;
      left: calc(50% - 10px);
      clip-path: polygon(0px 0px,20px 0px,10px 40px);
  }
}
</style>