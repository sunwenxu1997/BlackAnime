<template>
  <div class="hold-bck">
    <div class="mubu">
      <h2>xxx学校毕业典礼</h2>
    </div>
    <!-- 毕业 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son" :maozi="true"></ball>
      <immortal id="ball_people" ref="ball_people" :maozi_show="false"></immortal>
      <ball
        id="ball_g"
        ref="ball_g"
        :ball_w="50"
        :class="'ball_g'"
        :ball_h="50"
        :maozi="true"
        :hudiejie="true"
        :toLeft="true"
      ></ball>
      <div class="huatong">
        <i class="iconfont iconhuatong"></i>
      </div>
    </div>
    <land></land>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import immortal from "@/components/common/people/immortal";
import land from "@/components/common/scene/land";
export default {
  name: "anime_3",
  components: {
    ball: ball,
    land: land,
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
    let g = _this.$refs['ball_g']
    let people = _this.$refs["ball_people"];
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });
    my.add({
        translateX: _this.w / 2,
        duration: 2000
      })
      .add({
        duration: 4000,
        complete: function() {
          people.chat = false;
          son.chat = true;
          son.speakMsg = "谢谢老师";
        }
      })
      .add({
        duration: 5000,
        complete: function() {
          people.chat = false;
           g.chat = false;
          son.chat = true;
          son.speakMsg = "❤❤❤❤";
        }
      });

    // 仆人时间线
    let peopleTime = _this.$anime.timeline({
      targets: "#ball_people",
      easing: "linear"
    });
    peopleTime .add({
        duration: 3000,
        complete: function() {
          people.chat = true;
          people.speakMsg = "恭喜啊,博士毕业了 🎉";
        }
      })
      .add({
        duration:5000,
        complete: function() {
          son.chat = false;
          people.chat = false;
          g.chat = true
          g.speakMsg = "咱们终于可以谈婚事了";
          _this.$anime({
            targets: "#ball-son",
            easing: "linear",
            delay: 4000,
            translateX: _this.w,
            duration: 3000,
            complete: function(anime) {
            //   _this.$parent.playIndex = 4;
            }
          });
        }
      });
  }
};
</script>

<style lang="scss" scoped>
#ball_g{
    position: absolute;
    right: 25%;
}
.mubu{
  width: 700px;
  height: 400px;
  background: #8b8b8b;
  position: absolute;
  top: 0;
  left: calc(50% - 350px);
  h2{
    color: white;
    text-align: center;
    margin-top: 150px;
  }
}
.huatong{
  width: 5px;
  height: 100px;
  background: rgb(43, 42, 42);
  position: absolute;
  right: 35%;
  top: -100px;
  i{
    font-size: 35px;
    position: absolute;
    top: -20px;
    left: -15px;
  }
}
</style>