<template>
  <div class="hold-bck">
    <!-- 进入页面 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
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
        <i class="iconfont iconhouse" id="loufang"></i>
        <i class="iconfont iconzihangche" id="paoche"></i>
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
      translateY: [-_this.h, 0],
      duration: 500,
      endDelay: 1000
    })
      .add({
        translateX: _this.w / 2,
        duration: 1000
      })
      .add({
        duration: 5000,
        complete: function() {
          dad.chat = false;
          son.chat = true;
          son.speakMsg = "你们是我爸妈么?!";
        }
      });

    //父母时间线
    let parents = _this.$anime.timeline({
      targets: "#ball-parents",
      easing: "linear"
    });
    parents
      .add({
        duration: 1000,
        complete: function() {
          dad.chat = true;
          dad.speakMsg = "儿子，快到爸爸这来！";
        }
      })
      .add({
        duration: 2000,
        complete: function() {
          dad.chat = false;
          mom.chat = true;
          mom.speakMsg = "老公,儿子长得像你。真黑~~ 😄";
        }
      })
      .add({
        duration: 2000,
        complete: function() {
          dad.chat = true;
          mom.chat = false;
          dad.speakMsg = "黑黑更健康，知道啥！";
        }
      })
      .add({
        duration: 5000,
        complete: function() {
          son.chat = false;
          dad.chat = false;
          mom.chat = true;
          mom.speakMsg = "肯定了，傻孩子";
        }
      })
      .add({
        duration: 2000,
        complete: function() {
          son.chat = false;
          dad.chat = true;
          mom.chat = false;
          dad.speakMsg = "走，老爸骑车带着你去兜风 🚲";
          _this.$anime({
            targets: "#ball-son",
            easing: "linear",
            delay: 2000,
            translateX: _this.w,
            duration: 3000,
            complete: function(anime) {
              _this.$parent.playIndex = 17;
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
  #loufang {
    position: absolute;
    top: -17rem;
    font-size: 18rem;
    color: rgb(27, 27, 27);
    transform: translateX(20rem);
  }
  #paoche {
    position: absolute;
    top: -4rem;
    font-size: 4rem;
    color: rgb(0, 0, 0);
    transform: translateX(30rem);
    z-index: 2;
  }
}
</style>