<template>
  <div class="hold-bck">
    <audio ref="mp3_1" src="static/music/17_1.mp3" preload></audio>
    <audio ref="mp3_2" src="static/music/17_2.mp3" preload></audio>
    <audio ref="mp3_3" src="static/music/17_3.mp3" preload></audio>
    <audio ref="mp3_4" src="static/music/17_4.mp3" preload></audio>
    <div class="deng">
      <i id="diaodeng" class="iconfont icondengpao"></i>
    </div>
    <!-- 吃饭 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <ball
        id="ball_people"
        ref="ball_people"
        :toLeft="true"
        :class="'ball-dad'"
        :ball_w="70"
        :ball_h="70"
      ></ball>
      <div class="parents">
        <canzhuo :fu="false"></canzhuo>
      </div>
    </div>
    <land></land>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import immortal from "@/components/common/people/immortal";
import land from "@/components/common/scene/land";
import canzhuo from "@/components/common/scene/canzhuo";
export default {
  name: "anime_3",
  components: {
    ball: ball,
    land: land,
    canzhuo: canzhuo,
    immortal: immortal
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
    let people = _this.$refs["ball_people"];
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });
    my.add({
      translateY: 0,
      duration: 500,
      endDelay: 1000
    })
      .add({
        translateX: _this.w / 3,
        duration: 1000
      })
      .add({
        duration: 1000,
        complete: function() {
          people.chat = false;
          son.chat = true;
          _this.$refs.mp3_2.play()
          son.speakMsg = "哇哦 😱，我最爱吃的包子！";
        }
      })
      .add({
        duration: 5000,
        complete: function() {
          _this.$refs.mp3_4.play()
          people.chat = false;
          son.chat = true;
          son.speakMsg = "真香 😜";
        }
      });

    //仆人时间线
    let peopleTime = _this.$anime.timeline({
      targets: "#ball_people",
      easing: "linear"
    });
    peopleTime
      .add({
        duration: 1000,
        complete: function() {
          _this.$refs.mp3_1.play()
          people.chat = true;
          people.speakMsg = "儿子，吃饭了";
        }
      })
      .add({
        duration: 5000,
        complete: function() {
          son.chat = false;
          people.chat = true;
          _this.$refs.mp3_3.play()
          people.speakMsg = "这都是你妈给你做的";
          _this.$anime({
            targets: "#ball-son",
            easing: "linear",
            delay: 4000,
            translateX: _this.w,
            duration: 3000,
            complete: function(anime) {
                _this.$parent.playIndex = 18;
            }
          });
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.deng {
    width: 1px;
    height: 150px;
    background: black;
  position: absolute;
  left: 50%;
  top: 0rem;
  transform-origin: 50% 0;
   animation: huangdong 2s linear infinite alternate;
  i {
      position: absolute;
      bottom: -2rem;
      left: -1rem;
      display: inline-block;
    font-size: 2rem;
    transform: scaleY(-1);
  }
}
@keyframes huangdong {
  0% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(5deg);
  }
}
.parents {
  height: 50px;
  background: red;
  position: absolute;
  right: 40%;
  display: flex;
  justify-content: flex-end;
  #ball-parents {
    top: -70px;
  }
  .ball-mom {
    top: -65px !important;
    transform: translateX(70px) !important;
  }
  #loufang {
    position: absolute;
    top: -18rem;
    font-size: 18rem;
    color: rgb(27, 27, 27);
    transform: translateX(20rem);
  }
  #paoche {
    position: absolute;
    top: -7.3rem;
    font-size: 10rem;
    color: rgb(0, 0, 0);
    transform: translateX(30rem) scaleX(-1);
    z-index: 2;
  }
}
#ball_people {
  position: absolute;
  right: 30%;
  top: -70px;
}
</style>