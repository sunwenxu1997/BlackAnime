<template>
  <div class="hold-bck">
     <audio ref="mp3_1" src="static/music/1_1.mp3" preload></audio>
    <!-- 场景1 -->
    <div class="left">
      <p>投胎崖</p>
    </div>
    <div class="right">
      <cloud id="cloud" v-for="(c,index) in 20" :key="index + 'cloud'"></cloud>
      <ball id="ball" ref="ball"></ball>
    </div>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import cloud from "@/components/common/scene/cloud";
export default {
  name: "anime_1",
  components: {
    ball: ball,
    cloud: cloud
  },
  data() {
    return {
      h: window.innerHeight,
      w: window.innerWidth
    };
  },
  mounted() {
    let _this = this;
    //云
    _this.$anime({
      targets: "#cloud",
      translateY: function(el, i, l) {
        return _this.$anime.random(_this.h*1.3, _this.h * 1.5);
      },
      translateX: function(el, i, l) {
        return _this.$anime.random(_this.w / 5, _this.w);
      },
      rotate: 90,
      scale: function(el, i, l) {
        return _this.$anime.random(1, 6);
      },
      duration: 0,
      complete: function() {
        _this.$anime({
          targets: "#cloud",
          loop: true,
          translateY: -_this.h,
          easing: "linear",
          duration: 1000,
          delay: function(el, i, l) {
            return i * 100;
          }
        });
      }
    });
    this.$anime({
      targets: "#ball",
      rotate: 90,
      duration: 0,
      complete: function() {
         _this.$refs.mp3_1.play()
        _this.$refs.ball.chat = true;
        _this.$refs.ball.speakMsg = "啊~";
        _this.$anime({
          targets: "#ball",
          translateX: [0, 150],
          scaleY: [1, 0.9],
          easing: "easeInOutSine",
          direction: "alternate",
          loop: 8,
          complete: function() {
            _this.$anime({
              targets: "#ball",
              translateX: _this.h,
              easing: "easeInOutSine",
              complete:function () {
                 _this.$parent.playIndex = 2;
              }
            });
          }
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.left {
  width: 30%;
  height: 100%;
  background: #292929;
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 1.5rem;
    line-height: 3rem;
  }
}
.right {
  width: 70%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  #ball {
    transform: rotate(90deg);
    top: 40%;
    left: 20%;
  }
}
</style>