<template>
  <div class="hold-bck">
    <!-- 进入页面 -->
    <div class="line">
      <ball id="ball-son" ref="ball-son"></ball>
      <div id="school">
        <i class="iconfont iconrenshixuexiao"></i>
        <div class="name">USA SCHOOL</div>
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
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });
    my.add({
      translateX: _this.w / 3,
      duration: 1000
    })
      .add({
        duration: 1000,
        complete: function() {
          son.chat = true;
          son.speakMsg = "老爸给我安排这么好的学校，让我情何以堪啊~~";
        }
      })
      .add({
        duration: 4000,
        complete: function() {
          son.chat = true;
          son.speakMsg = "不管了，为了我的梦想，加油！！👍";
        }
      })
      .add({
        delay: 2000,
        duration: 3000,
        translateX: _this.w,
        complete: function() {
            _this.$parent.playIndex = 5;
        }
      });
  }
};
</script>

<style lang="scss" scoped>
#school {
  position: absolute;
  top: -460px;
  right: 10%;
  i {
    font-size: 30rem;
  }
  .name {
    width: 160px;
    height: 50px;
    position: absolute;
    top: 120px;
    left: 160px;
    border: 3px solid black;
    background: black;
    color: white;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
    font-size: 17px;
  }
}
</style>