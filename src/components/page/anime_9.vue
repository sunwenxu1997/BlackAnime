<template>
  <div class="hold-bck">
    <!-- 过红绿灯 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <div id="hl_deng">
        <span class="h"></span>
        <span class="l"></span>
      </div>
    </div>
    <land></land>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import land from "@/components/common/scene/land";
export default {
  name: "anime_3",
  components: {
    ball: ball,
    land: land
  },
  data() {
    return {
      h: window.innerHeight,
      w: window.innerWidth
    };
  },
  mounted() {
    let _this = this;
    let son = _this.$refs["ball-son"];
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });

    my.add({
      translateX: _this.w / 5,
      duration: 2000,
      complete: function() {
        _this.$anime({
          delay: 1000,
          targets: "#hl_deng .h",
          opacity: 0.3
        });
        _this.$anime({
          delay: 1000,
          targets: "#hl_deng .l",
          opacity: 1
        });
      }
    }).add({
      delay: 2000,
      duration: 3000,
      translateX: _this.w,
      complete: function() {
        _this.$parent.playIndex = 10;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#hl_deng {
  width: 70px;
  height: 120px;
  background: #3a3a3a;
  position: absolute;
  left: 20%;
  top: -200px;
  text-align: center;
  padding-top: 20px;
  &::before {
    content: "";
    width: 20px;
    height: 100px;
    background: #3a3a3a;
    position: absolute;
    left: calc(50% - 10px);
    bottom: -100px;
  }
  span {
    display: block;
    margin-bottom: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: red;
    position: relative;
    left: 20px;
  }
  .h {
    background: red;
  }
  .l {
    background: #28eb28;
    opacity: 0.3;
  }
}
</style>