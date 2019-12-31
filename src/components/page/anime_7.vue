<template>
  <div class="hold-bck">
    <!-- 进入页面 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <div class="people">
        <ball id="ball_1" ref="ball_1" :toLeft="true"></ball>
        <ball :toLeft="true" style="left:50px;"></ball>
        <ball :toLeft="true" :hudiejie="true" style="left:120px;"></ball>
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
        ball_1.speakMsg = "嘿，晚上出去玩吧！";
      }
    });
    ball2.add({
      duration: 6000,
      complete: function() {
        son.chat = false;
        ball_2.chat = true;
        ball_2.speakMsg = "记着开上你老爸的跑车，贼酷 🚘";
      }
    });
    my.add({
      translateX: _this.w / 2,
      duration: 2000
    })
      .add({
        duration: 2000,
        complete: function() {
          ball_1.chat = false;
          son.chat = true;
          son.speakMsg = "可以的，刚好我今晚有空";
        }
      })
      .add({
        duration: 4000,
        complete: function() {
          ball_2.chat = false;
          son.chat = true;
          son.speakMsg = "👌";
        }
      })
      .add({
        delay: 2000,
        duration: 3000,
        translateX: _this.w,
        complete: function() {
            _this.$parent.playIndex = 8;
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
</style>