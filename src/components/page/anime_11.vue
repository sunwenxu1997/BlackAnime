<template>
  <div class="hold-bck">
    <audio ref="mp3_1" src="static/music/11_1.mp3" preload></audio>
    <audio ref="mp3_2" src="static/music/11_2.mp3" preload></audio>
    <div class="hint">宇航员面试处</div>
    <!-- 面试处 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <ball id="ball-qiang" :toLeft="true" :ball_w="70" :ball_h="70" :qiang="true"></ball>
      <div class="parents">
        <div class="zhuozi"></div>
        <ball
          id="ball-parents"
          ref="ball-dad"
          :toLeft="true"
          :class="'ball-dad'"
          :ball_w="70"
          :ball_h="70"
        ></ball>
      </div>
    </div>
    <land></land>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import land from "@/components/common/scene/land";
export default {
  name: "anime_1",
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
    let dad = _this.$refs["ball-dad"];
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });
    my.add({
      translateX: _this.w / 2,
      duration: 1000
    }).add({
      duration: 5000,
      complete: function() {
        dad.chat = false;
        son.chat = true;
         _this.$refs.mp3_2.play()
        son.speakMsg = "谢谢，我一定会继续努力的！";
      }
    });

    //父母时间线
    let parents = _this.$anime.timeline({
      targets: "#ball-parents",
      easing: "linear"
    });
    parents
      .add({
        duration: 2000,
        complete: function() {
           _this.$refs.mp3_1.play()
          son.chat = false;
          dad.chat = true;
          dad.speakMsg = "你各项要求都达标了，可以成为一名宇航员了";
        }
      })
      .add({
        duration: 6000,
        complete: function() {
          son.chat = false;
          dad.chat = false;
          _this.$anime({
            targets: "#ball-son",
            easing: "linear",
            translateX: _this.w,
            duration: 3000,
            complete: function(anime) {
              _this.$parent.playIndex = 12;
            }
          });
        }
      });
  }
};
</script>

<style lang="scss" scoped>
#ball-qiang{
    top: -70px;
    left: 20%;
}
.parents {
  height: 50px;
  background: red;
  position: absolute;
  right: 35%;
  display: flex;
  justify-content: flex-end;
  
  #ball-parents {
    top: -70px;
  }
  .ball-mom {
    top: -65px !important;
    transform: translateX(70px) !important;
  }
}
.zhuozi {
  width: 50px;
  height: 50px;
  background: black;
  position: relative;
  top: -50px;
  left: -90px;
}
.hint {
  border: 3px solid black;
  padding: 10px;
  color: rgb(22, 22, 22);
  position: absolute;
  top: 200px;
  right: 35%;
  display: inline-block;
  font-weight: bold;
   background: white;
}
</style>