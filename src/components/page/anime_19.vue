<template>
  <div class="hold-bck">
    <div class="hint">
      <h2>放学回去的路上...</h2>
    </div>
    <!-- 进入页面 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <div id="ludeng">
        <i class="iconfont iconludeng"></i>
      </div>

      <ball
        id="ball_g"
        ref="ball_g"
        :ball_w="50"
        :class="'ball_g'"
        :ball_h="50"
        :hudiejie="true"
        :toLeft="true"
      ></ball>
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
    let g = _this.$refs["ball_g"];
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });
    my.add({
      translateX: _this.w / 2.5,
      duration: 5000,
      begin: function() {
        son.chat = true;
        son.speakMsg = "今天一定要给她表白~~ ❤";
      }
    })
      .add({
        duration: 3000,
        complete: function() {
          g.chat = false;
          son.chat = true;
          son.speakMsg = "emm.. 其实我喜欢你很久了，希望.. ";
        }
      })
      .add({
        duration: 8000,
        complete: function() {
          g.chat = false;
          son.chat = true;
          son.speakMsg = "噢..    好吧 😥";
        }
      })
      .add({
        delay: 2000,
        duration: 3000,
        translateX: _this.w,
        complete: function() {
          _this.$parent.playIndex = 20;
        }
      });
    let girl = _this.$anime.timeline({
      targets: "#ball_g",
      easing: "linear"
    });
    girl.add({
      duration: 5000,
      complete: function() {
        son.chat = false;
        g.chat = true;
        g.speakMsg = "怎么了，小黑同学";
      }
    }).add({
      duration: 7000,
      complete: function() {
        son.chat = false;
        g.chat = true;
        g.speakMsg = "额，你回去先照照镜子吧，你是个好人 😂";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#ludeng {
  position: absolute;
  top: -280px;
  right: 40%;
  &::after,
  &::before {
    content: "";
    width: 40px;
    height: 225px;
    background: rgb(253, 253, 160);
    position: absolute;
    bottom: 0;
    clip-path: polygon(15px 0, 25px 0, 100% 100%, 0% 100%);
    animation: deng 0.5s ease 4 alternate;
  }
  &::before {
    left: 34px;
  }
  &::after {
    right: 34px;
  }
  i {
    color: rgb(82, 82, 82);
    font-size: 18rem;
  }
}
@keyframes deng {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.2;
  }
}
#ball_g {
  position: absolute;
  right: 45%;
}
.hint {
  font-size: 2.5rem;
  color: rgb(63, 63, 63);
  margin: 50px;
  animation: textMove 5s ease both 1;
}
@keyframes textMove {
  100% {
    opacity: 0;
    transform: translateX(500px);
  }
}
</style>