<template>
  <div class="hold-bck">
    <div class="cover"></div>
    <!-- 火箭发射 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <div id="huojian">
        <i id="huojian_icon" class="iconfont iconhuojian"></i>
        <i id="huo" class="iconfont iconhuo"></i>
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
      translateX: _this.w / 3,
      duration: 1000
    })
      .add({
        duration: 1000,
        complete: function() {
          son.chat = true;
          son.speakMsg = "这么多年过去了，我终于能飞上宇宙，成为真正的宇航员了";
        }
      })
      .add({
        duration: 4000,
        complete: function() {
          son.chat = true;
          son.speakMsg = "Les't go!! 🚀";
        }
      })
      .add({
        delay: 2000,
        duration: 1000,
        translateX: _this.w / 2,
        opacity: 0,
        complete: function() {
          _this.$anime({
            delay: 1000,
            targets: "#huojian",
            translateY: -500,
            duration: 2000,
            easing: "linear",
            complete: function() {
              _this.$anime({
                targets: ".cover",
                easing: "linear",
                opacity: 1,
                duration: 1000,
                complete: function() {
                  _this.$parent.playIndex = 14;
                }
              });
            }
          });
          _this.$anime({
            targets: "#huojian_icon",
            translateX: [-5, 5],
            loop: true,
            duration: 100,
            direction: "alternate",
            easing: "linear"
          });
        }
      });
  }
};
</script>

<style lang="scss" scoped>
#huojian {
  position: absolute;
  right: 35%;
  top: -280px;
  i {
    display: inline-block;
    font-size: 300px;
  }
  #huo {
    font-size: 100px;
    position: absolute;
    left: 100px;
    bottom: 0;
    color: red;
    transform: scaleY(-1) translateY(-80px);
  }
}
.cover {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0;
  z-index: 9999;
}
</style>