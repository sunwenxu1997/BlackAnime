<template>
  <div class="hold-bck">
    <!-- 朋友对话 -->
    <div class="cover"></div>
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <div class="zhuozi"></div>
      <div class="heiban">
        <p>a² + b² = c²</p>
      </div>
      <div class="people">
        <ball id="ball_1" ref="ball_1" :toLeft="true"></ball>
        <ball :toLeft="true" style="left:50px;"></ball>
        <ball :toLeft="true" style="left:120px;"></ball>
        <ball id="ball_2" ref="ball_2" :toLeft="true" style="left:160px;"></ball>
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
    let ball_1 = _this.$refs["ball_1"];
    let ball_2 = _this.$refs["ball_2"];
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });
    let ball1 = _this.$anime.timeline({
      targets: "#ball_1",
      easing: "linear"
    });
    let ball2 = _this.$anime.timeline({
      targets: "#ball_2",
      easing: "linear"
    });
    ball1.add({
      duration: 2000,
      complete: function() {
        ball_1.chat = true;
        ball_1.speakMsg = "起立，老师好~~";
      }
    });
    ball2.add({
      duration: 6000,
      complete: function() {
        son.chat = false;
        ball_2.chat = true;
        ball_2.speakMsg = "老师，今天讲什么啊";
      }
    });
    my.add({
      translateX: _this.w / 3,
      easing: "steps(10)",
      duration: 2000
    })
      .add({
        duration: 2000,
        complete: function() {
          ball_1.chat = false;
          son.chat = true;
          son.speakMsg = "同学们好";
        }
      })
      .add({
        duration: 4000,
        complete: function() {
          ball_2.chat = false;
          son.chat = true;
          son.speakMsg = "今天讲勾股定理";
        }
      })
      .add({
        delay: 2000,
        duration: 3000,
        // translateX: _this.w,
        complete: function() {
          _this.$anime({
            targets: ".cover",
            easing: "linear",
            opacity: 1,
            duration: 1000,
            complete: function() {
             _this.$parent.playIndex = 29;
            }
          });
          
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.people {
  position: absolute;
  right: 40%;
}
.zhuozi {
  position: absolute;
  left: calc(35% + 30px);
  width: 30px;
  height: 40px;
  top: -40px;
  background: black;
  z-index: 8;
}
.heiban {
  position: absolute;
  left: 28%;
  top: -110px;
  width: 180px;
  height: 80px;
  background: rgb(51, 51, 51);
  color: white;
  text-align: center;
  p {
    margin-top: 20px;
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