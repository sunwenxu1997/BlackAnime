<template>
  <div class="hold-bck">
    <audio ref="mp3_1" src="static/music/21_1.mp3" preload></audio>
    <audio ref="mp3_2" src="static/music/21_2.mp3" preload></audio>
    <audio ref="mp3_3" src="static/music/21_3.mp3" preload></audio>
    <!-- 进入页面 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <div class="people">
          <dog id="ball_1" ref="ball_1"></dog>
      </div>
    </div>
    <land></land>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import dog from "@/components/common/people/dog";
import land from "@/components/common/scene/land";
export default {
  name: "anime_3",
  components: {
    dog: dog,
    ball:ball,
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
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });
    let ball1 = _this.$anime.timeline({
      targets: "#ball_1",
      easing: "linear"
    });
    ball1.add({
      duration: 2000,
      complete: function() {
        _this.$refs.mp3_1.play()
        ball_1.chat = true;
        ball_1.speakMsg = "汪汪~ ";
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
          son.speakMsg = "知道了，知道了，今晚带你出去玩";
        }
      })
      .add({
        duration: 3000,
        complete: function() {
          son.chat = true;
          _this.$refs.mp3_3.play()
          son.speakMsg = "哎，你这只单身狗 🙃";
        }
      })
      .add({
        delay: 2000,
        duration: 3000,
        translateX: _this.w,
        complete: function() {
            _this.$parent.playIndex = 22
            ;
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.people {
  position: absolute;
  right: 40%;
  #ball_1{
      position: absolute;
      top: -2.3rem;
  }
}
</style>