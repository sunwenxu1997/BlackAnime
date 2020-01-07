<template>
  <div class="hold-bck">
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
      duration: 1000,
      easing: "steps(10)"
    })
      .add({
        duration: 5000,
        complete: function() {
          dad.chat = false;
          son.chat = true;
          son.speakMsg = "之前的一场意外留下的";
        }
      })
      .add({
        duration: 10000,
        complete: function() {
          dad.chat = false;
          son.chat = true;
          son.speakMsg = "因为我小时候的梦想就是要做一名宇航员";
        }
      })
      .add({
        duration: 16000,
        complete: function() {
          dad.chat = false;
          son.chat = true;
          son.speakMsg = "好的，谢谢 😥";
        }
      })
      .add({
        duration: 1000,
        complete: function() {
          _this.$anime({
            targets: "#ball-son",
            easing: "steps(10)",
            translateX: _this.w,
            duration: 3000,
            complete: function(anime) {
              _this.$parent.playIndex = 27;
            }
          });
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
          son.chat = false;
          dad.chat = true;
          dad.speakMsg = "你各项要求都达标了，但是你这腿...";
        }
      })
      .add({
        duration: 8000,
        complete: function() {
          son.chat = false;
          dad.chat = true;
          dad.speakMsg = "你为什么要当宇航员呢？";
        }
      })
      .add({
        duration: 13000,
        complete: function() {
          son.chat = false;
          dad.chat = true;
          dad.speakMsg =
            "你很优秀，但是我们有严格的规定，所以说我不能给你通过，抱歉";
        }
      });
  }
};
</script>

<style lang="scss" scoped>
#ball-qiang {
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
  //   background: white;
}
</style>