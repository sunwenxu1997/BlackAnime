<template>
  <div class="hold-bck">
    <audio ref="mp3_1" src="static/music/7_1.mp3" preload></audio>
    <audio ref="mp3_2" src="static/music/7_2.mp3" preload></audio>
    <audio ref="mp3_3" src="static/music/7_3.mp3" preload></audio>
    <audio ref="mp3_4" src="static/music/7_4.mp3" preload></audio>
    <!-- 朋友对话 -->
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
        _this.$refs.mp3_1.play()
        ball_1.speakMsg = "嘿小老弟，晚上出去玩耍吧！";
      }
    });
    ball2.add({
      duration: 6000,
      complete: function() {
        son.chat = false;
        ball_2.chat = true;
        _this.$refs.mp3_3.play()
        ball_2.speakMsg = "记着开上你老爸的跑车，贼炫酷呢 🚘";
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
          _this.$refs.mp3_2.play()
          son.speakMsg = "可以的，刚好我今晚有空";
        }
      })
      .add({
        duration: 4000,
        complete: function() {
          ball_2.chat = false;
          son.chat = true;
          _this.$refs.mp3_4.play()
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