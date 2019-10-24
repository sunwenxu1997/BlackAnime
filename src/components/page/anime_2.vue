<template>
  <div>
    <!-- 进入页面 -->
    <ball id="ball"></ball>
    <land></land>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import land from "@/components/common/scene/land";
export default {
  name: "anime_1",
  components: {
    ball: ball,
    land: land
  },
  mounted() {
    let _this = this;
    let w = window.innerWidth
    this.$anime({
      targets: "#ball",
      translateX: w,
      easing:'linear',
      duration: 5000,
      complete: function(anime) {
        // _this.$parent.playIndex = 2;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>