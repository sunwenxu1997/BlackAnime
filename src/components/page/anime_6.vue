<template>
  <div class="hold-bck">
    <!-- 进入页面 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <div class="jingzi">
        <ball id="ball" ref="ball" style="top:95px;"></ball>
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
    let jingzi_ball = _this.$refs["ball"];
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });
    my.add({
      translateX: _this.w / 2,
      duration: 2000
    })
      .add({
        complete: function() {
          son.chat = true;
          son.speakMsg = "我有这么帅么？🤣 那么多女孩子追求我";
        }
      })
      .add({
        duration: 3000,
        complete: function() {
          son.chat = false;
        }
      })
      .add({
        duration: 5000,
        complete: function() {
          son.chat = true;
          son.speakMsg = "别说，还确实挺帅的~~";
        }
      })
      .add({
        delay: 2000,
        duration: 3000,
        translateX: _this.w,
        begin: function() {
          _this.$anime({
            targets: "#ball",
            easing: "linear",
            translateX: 100,
            delay: 2000,
            duration: 1000,
            complete:function () {
                son.chat = false;
            }
          });
        },
        complete: function() {
            _this.$parent.playIndex = 7;
        }
      });
    let ball_jz = _this.$anime
      .timeline({
        targets: "#ball",
        easing: "linear"
      })
      .add({
        delay: 1000,
        translateX: [-100, 0]
      });
  }
};
</script>

<style lang="scss" scoped>
.jingzi {
  width: 70px;
  height: 150px;
  border: 5px solid black;
  position: absolute;
  right: 40%;
  top: -150px;
  background: white;
  transform: scaleX(-1);
  overflow: hidden;
}
#ball {
  transform: translateX(-100px);
}
</style>