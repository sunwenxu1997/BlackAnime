<template>
  <div class="wait">
    <h2>两年之后...</h2>
  </div>
</template>

<script>
export default {
  mounted() {
      let _this = this;
    _this.$anime({
      targets: ".wait",
      easing: "linear",
      duration: 3000,
      complete: function(anime) {
        _this.$parent.playIndex = 28;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.wait {
  position: fixed;
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>