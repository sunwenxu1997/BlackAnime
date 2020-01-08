<template>
  <div class="cover">
    <audio ref="mp3_1" src="static/music/24.mp3" preload></audio>
    <h2 class="text">医生，孩子有没有事啊？</h2>
    <h1 class="text">目前已经脱离生命危险，但是....</h1>
    <h2 class="text">但是什么？快说啊！</h2>
    <h1 class="text">但是您孩子的一条腿会留下后遗症，以后行动上会不太方便</h1>
    <h2 class="text">人没事就行，人没事就行</h2>
  </div>
</template>

<script>
export default {
  mounted() {
    let _this = this;
    _this.$refs.mp3_1.play()
    _this.$anime({
      targets: ".text",
      translateX: 100,
      opacity: [0, 1],
      delay: function(el, i, l) {
        return i * 2000;
      },
      duration: 1000
    });
    _this.$anime({
      duration: 13000,
      complete: function() {
        _this.$refs.mp3_1.pause()
        _this.$parent.playIndex = 25;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.cover {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  z-index: 9999;
  color: white;
  padding: 100px;
  .text {
    margin-bottom: 20px;
    opacity: 0;
  }
}
</style>