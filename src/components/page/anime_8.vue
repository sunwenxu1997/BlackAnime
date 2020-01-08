<template>
  <div class="hold-bck">
    <audio ref="mp3_1" src="static/music/8_1.mp3" preload></audio>
    <audio ref="mp3_2" src="static/music/8_2.mp3" preload></audio>
    <audio ref="mp3_3" src="static/music/8_3.mp3" preload></audio>
    <audio ref="mp3_4" src="static/music/8_4.mp3" preload></audio>
    <audio ref="mp3_5" src="static/music/8_5.mp3" preload></audio>
    <!-- 跟爸妈说成绩好 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <div class="other">
        <div class="xiangce">
          <div class="dot"></div>
          <div class="dot" style="left:29px;bottom:-6px;transform: scale(0.7);"></div>
          <div class="dot" style="left:55px;bottom:-2px;transform: scale(0.9);"></div>
        </div>
        <i class="iconfont iconhuaping"></i>
        <i class="iconfont iconshujia" style="left:50px"></i>
        <i class="iconfont iconbingxiang" style="font-size:10rem;top:20px;left:200px;"></i>
      </div>
      <div class="parents">
        <ball
          id="ball-parents"
          ref="ball-dad"
          :toLeft="true"
          :class="'ball-dad'"
          :ball_w="70"
          :ball_h="70"
        ></ball>
        <ball
          id="ball-parents"
          ref="ball-mom"
          :ball_w="65"
          :class="'ball-mom'"
          :ball_h="65"
          :hudiejie="true"
          :toLeft="true"
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
    let mom = _this.$refs["ball-mom"];
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });
    my.add({
      translateX: _this.w / 2,
      duration: 1000,
      complete: function() {
        son.chat = true;
         _this.$refs.mp3_1.play()
        son.speakMsg = "爸妈,我成绩出来了";
      }
    }).add({
      duration: 6000,
      complete: function() {
        dad.chat = false;
        son.chat = true;
         _this.$refs.mp3_4.play()
        son.speakMsg = "还行，还行，正常发挥 😁";
      }
    });

    //父母时间线
    let parents = _this.$anime.timeline({
      targets: "#ball-parents",
      easing: "linear"
    });
    parents
      .add({
        duration: 3000,
        complete: function() {
          son.chat = false;
          dad.chat = true;
           _this.$refs.mp3_2.play()
          dad.speakMsg = "过来让老爸看看";
        }
      })
      .add({
        duration: 2000,
        complete: function() {
          dad.chat = true;
           _this.$refs.mp3_3.play()
          dad.speakMsg = "考得这么好 👍，老爸送你辆跑车吧";
        }
      })
      .add({
        duration: 4000,
        complete: function() {
          son.chat = false;
          dad.chat = false;
          mom.chat = true;
           _this.$refs.mp3_5.play()
          mom.speakMsg = "我们家儿子可真争气";
          _this.$anime({
            targets: "#ball-son",
            easing: "linear",
            delay: 2000,
            translateX: _this.w,
            duration: 3000,
            complete: function(anime) {
                _this.$parent.playIndex = 9;
            }
          });
        }
      });
  }
};
</script>

<style lang="scss" scoped>
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
}
.other {
  position: absolute;
  right: 40%;
  top: -180px;
  display: flex;
  i {
    color: rgb(87, 87, 87);
    font-size: 13rem;
    position: relative;
  }
  .xiangce {
    background: white;
    width: 100px;
    height: 60px;
    border: 5px solid black;
    position: absolute;
    right: 20%;
    top: -50px;
    .dot {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: black;
      position: absolute;
      bottom: 0;
      &::before,
      &::after {
        content: "";
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: white;
        position: absolute;
        top: 10px;
      }
      &::before {
        left: 10px;
      }
      &::after {
        right: 10px;
      }
    }
  }
}
</style>