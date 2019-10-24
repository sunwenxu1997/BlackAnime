<template>
  <div>
    <!-- 土地 -->
    <div class="land">
      <div
        class="stone"
        v-for="(i,index) in stoneNum"
        :key="index+'i'"
        :style="` clip-path: polygon(${$anime.random(0,10)}px 0px,${$anime.random(0,25)}px 0px, ${$anime.random(0,50)}px 10px,${$anime.random(0,45)}px 50px,${$anime.random(0,20)}px 50px,0px 30px);`"
      ></div>
      <div v-show="chongzi" class="chongzi" v-for="(c,index) in chongziNum" :key="index+'c'"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chongzi: { default: true }
  },
  data() {
    return {
      stoneNum: 0, //生成石块个数
      chongziNum: 8
    };
  },
  created() {
    let w = window.innerWidth;
    this.stoneNum = Math.floor(w / 100);
  },
  mounted() {
    this.getStoneLocation();
    this.getChongziLocation();
  },
  methods: {
    //获取石头位置
    getStoneLocation() {
      let w = window.innerWidth;
      let h = window.innerHeight / 2;
      let _this = this;
      _this.$anime({
        targets: ".stone",
        translateY: function(el, i, l) {
          return _this.$anime.random(0, h);
        },
        translateX: function(el, i, l) {
          return _this.$anime.random(0, w);
        },
        scale: function(el, i, l) {
          return _this.$anime.random(1, 4);
        },
        rotate: function(el, i, l) {
          return _this.$anime.random(0, 360);
        },
        background: function(el, i, l) {
          return `hsl(0, 0%, ${_this.$anime.random(5, 31)}%);`;
        },
        duration: 0
      });
    },
    //虫子位置
    getChongziLocation() {
      let w = window.innerWidth;
      let h = window.innerHeight / 2;
      let rotateC = [];
      let _this = this;
      let tl = _this.$anime
        .timeline({
          targets: ".chongzi"
        })
        .add({
          translateY: function(el, i, l) {
            return _this.$anime.random(0, h);
          },
          translateX: function(el, i, l) {
            return _this.$anime.random(0, w);
          },
          rotate: function(el, i, l) {
            rotateC[i] = _this.$anime.random(0, 360);
            return rotateC[i];
          },
          opacity: function(el, i, l) {
            return _this.$anime.random(0.5, 1);
          },
          duration: 0
        })
        .add({
          translateY: function(el, i, l) {
            if (rotateC[i] < 180) {
              return -h;
            } else {
              return h;
            }
          },
          translateX: function(el, i, l) {
            if (rotateC[i] < 90 || rotateC[i] > 270) {
              return -w;
            } else {
              return w;
            }
          },
          delay: function(el, i, l) {
            return i * 100;
          },
          duration: 18000,
          easing: "linear"
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.land {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: #292929;
  overflow: hidden;
  //   animation:  duration timing-function delay iteration-count direction fill-mode;
}
//碎石头
.stone {
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 99;
}
//虫子
.chongzi {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d3d1d1;
  position: absolute;
  &::before,
  &::after {
    content: "";
    width: 7px;
    height: 1px;
    position: absolute;
    left: -4px;
    background: #d3d1d1;
    transform-origin: 100% 0%;
  }
  &::before {
    top: 4px;
    transform: rotate(30deg);
  }
  &::after {
    bottom: 4px;
    transform: rotate(-30deg);
  }
}
</style>