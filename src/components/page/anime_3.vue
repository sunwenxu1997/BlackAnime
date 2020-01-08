<template>
  <div class="hold-bck">
    <audio ref="mp3_1" src="static/music/3_1.mp3" preload></audio>
    <audio ref="mp3_2" src="static/music/3_2.mp3" preload></audio>
    <audio ref="mp3_3" src="static/music/3_3.mp3" preload></audio>
    <audio ref="mp3_4" src="static/music/3_4.mp3" preload></audio>
    <i id="diaodeng" class="iconfont icondiaodeng"></i>
    <!-- 吃饭 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <immortal id="ball_people" ref="ball_people" :maozi_show="false"></immortal>
      <div class="parents">
        <canzhuo></canzhuo>
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
      translateY:0,
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
          son.speakMsg = "哇哦 😱，这么多好吃的~~";
        }
      })
      .add({
        duration: 5000,
        complete: function() {
          people.chat = false;
          son.chat = true;
           _this.$refs.mp3_4.play()
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
          people.chat = true;
           _this.$refs.mp3_1.play()
          people.speakMsg = "少爷，快到这边来就餐吧！";
        }
      })
      .add({
        duration: 5000,
        complete: function() {
          son.chat = false;
          people.chat = true;
           _this.$refs.mp3_3.play()
          people.speakMsg = "这都是老爷让我给您准备的";
          _this.$anime({
            targets: "#ball-son",
            easing: "linear",
            delay: 4000,
            translateX: _this.w,
            duration: 3000,
            complete: function(anime) {
              _this.$parent.playIndex = 4;
            }
          });
        }
      });
  }
};
</script>

<style lang="scss" scoped>
#diaodeng {
  position: absolute;
  left: 45%;
  top: -25px;
  font-size: 10rem;
  transform-origin: 50% 0;
  animation: huangdong 2s linear infinite alternate;
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
</style>