<template>
  <div class="overall">
    <div class="overall-after"></div>
    <div class="box">
      <!-- 进入页面 -->
      <div class="line">
        <ball id="ball"></ball>
        <immortal></immortal>
      </div>
      <land :chongzi="false"></land>
    </div>
    <div class="playBtn" @click="play()" ref="play" v-if="playShow">
      <div class="btn"></div>
    </div>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import immortal from "@/components/common/people/immortal";
import land from "@/components/common/scene/land";
export default {
  name: "anime_1",
  components: {
    ball: ball,
    immortal: immortal,
    land: land
  },
  data() {
    return {
      w: window.innerWidth,
      playShow:true
    };
  },
  mounted() {
    this.playAnime();
  },
  methods: {
    playAnime() {
      let _this = this;
      let tl = _this.$anime
        .timeline({
          autoplay: false,
          loop: 1,
          easing: "linear",
          duration: 1000
        })
        .add({
          targets: ".box",
          scale: [0.3, 1],
          begin: function() {
            _this.$anime({
              targets: ".overall-after",
              width: "100%",
              easing: "linear",
              duration: 500
            });
          }
        });
      _this.$refs["play"].onclick = tl.play; //开始
    },
    play(){
       this.playShow = false
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  position: absolute;
  width: 100%;
  height: 100%;
  .overall-after {
    width: 85%;
    height: 50%;
    background: #292929;
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
}
.playBtn {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid #f7f6f6;
  box-shadow: 0 0 5px #686767;
  cursor: pointer;
  position: absolute;
  left: calc(50% - 75px);
  top: calc(50% - 75px);
  opacity: 0.5;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    width: 60px;
    height: 60px;
    background: #dddddd;
    clip-path: polygon(0 0, 60px 30px, 0 60px);
    transform: translateX(10px);
  }
  &:hover {
    opacity: 1;
    box-shadow: 0 0 0px #686767;
  }
}
.box {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(0.3);
}
</style>