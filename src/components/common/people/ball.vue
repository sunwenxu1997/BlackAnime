<template>
    <div class="ball" :style="`width:${ball_w}px;height:${ball_h}px`">
      <div class="eye"></div>
      <i class="iconfont iconfuzhuang-hudiejie" id="hudie" v-if="hudiejie"></i>
    </div>
</template>

<script>
export default {
  props: {
    ball_w: Number,
    ball_h: Number,
    hudiejie: {default: false}
  },
  mounted() {
    this.$anime({
      targets: ".eye",
      scaleY: 0,
      loop: true,
      delay: 1500,
      duration: 100
    });
  }
};
</script>

<style lang="scss" scoped>
.ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: black;
  position:absolute;
  top: calc(50% - 50px);
  .eye {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    position: absolute;
    right: 10px;
    top: 13px;
  }
  #hudie{
      display: inline-block;
    font-size: 2rem;
    color: rgb(247, 18, 208);
    font-weight: bold;
    transform: rotate(-45deg);
    position: absolute;
    left: -5px;
    top: -5px;
  }
}
</style>