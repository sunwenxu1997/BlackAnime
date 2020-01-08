<template>
  <div class="hold-bck">
    <audio ref="mp3_1" src="static/music/yusheng.mp3" preload></audio>
    <audio ref="mp3_2" src="static/music/23.mp3" preload></audio>
    <div class="cover"></div>
    <cloud id="cloud" v-for="(c,index) in 50" :key="index + 'cloud'"></cloud>
    <div id="yudi" class="yudi" v-for="(c,index) in 200" :key="index + 'yudi'"></div>
    <!-- 过红绿灯 -->
    <div class="line">
      <ball id="ball-son" :yusan="yushanshow" ref="ball-son"></ball>
      <div id="hl_deng">
        <span class="h"></span>
        <span class="l"></span>
      </div>
      <i id="huoche" class="iconfont iconhuoche"></i>
    </div>
    <land></land>
  </div>
</template>

<script>
import cloud from "@/components/common/scene/wuyun";
import ball from "@/components/common/people/ball";
import land from "@/components/common/scene/land";
export default {
  name: "anime_3",
  components: {
    ball: ball,
    land: land,
    cloud: cloud
  },
  data() {
    return {
      h: window.innerHeight,
      w: window.innerWidth,
      yushanshow: true
    };
  },
  mounted() {
    let _this = this;
     _this.$refs.mp3_1.play()
    //乌云
    _this.$anime({
      targets: "#cloud",
      translateY: function(el, i, l) {
        return _this.$anime.random(0, 50);
      },
      translateX: function(el, i, l) {
        return _this.$anime.random(0, _this.w);
      },
      scale: function(el, i, l) {
        return _this.$anime.random(1, 3);
      },
      duration: 0,
      complete: function() {
        _this.$anime({
          targets: "#cloud",
          translateX: function(el, i, l) {
            return _this.$anime.random(-_this.w / 2, _this.w / 2);
          },
          easing: "linear",
          duration: 300000
        });
      }
    });
    //雨滴
    _this.$anime({
      targets: "#yudi",
      translateY: function(el, i, l) {
        return _this.$anime.random(0, 100);
      },
      translateX: function(el, i, l) {
        return _this.$anime.random(0, _this.w);
      },
      scale: function(el, i, l) {
        return _this.$anime.random(1, 3);
      },
      duration: 0,
      complete: function() {
        let yudi = document.querySelectorAll(".yudi");
        for (let index = 0; index < yudi.length; index++) {
          _this.$anime({
            targets: yudi[index],
            translateY: _this.h,
            easing: "easeInOutSine",
            duration: _this.$anime.random(500, 1000),
            loop: true
          });
        }
      }
    });

    let son = _this.$refs["ball-son"];
    let my = _this.$anime.timeline({
      targets: "#ball-son",
      easing: "linear"
    });

    my.add({
      translateX: _this.w / 5,
      duration: 2000,
      complete: function() {
        _this.$anime({
          delay: 1000,
          targets: "#hl_deng .h",
          opacity: 0.3
        });
        _this.$anime({
          delay: 1000,
          targets: "#hl_deng .l",
          opacity: 1
        });
      }
    }).add({
      delay: 2000,
      duration: 1000,
      translateX: _this.w / 2,
     
    });
    _this.$anime({
      targets: "#huoche",
      translateX: -_this.w / 2 - 100,
      delay: 5000,
      duration: 200,
      easing: "linear",
      complete: function() {
        _this.yushanshow = false;
        _this.$refs.mp3_2.play()
        _this.$anime({
          targets: "#ball-son",
          translateX: _this.w / 2 - 100,
          rotate: -45,
          duration: 500
        });
      }
    });
    let cover = _this.$anime.timeline({
      targets: ".cover",
      easing: "linear"
    });

    cover.add({
      duration: 6000,
      complete: function() {
        _this.$anime({
          targets: ".cover",
          easing: "linear",
          loop: 3,
          opacity: 1,
          direction: "alternate",
          duration: 1000,
          complete:function () {
            _this.$refs.mp3_1.pause();
            _this.$parent.playIndex = 24;
          }
        });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#hl_deng {
  width: 70px;
  height: 120px;
  background: #3a3a3a;
  position: absolute;
  left: 20%;
  top: -200px;
  text-align: center;
  padding-top: 20px;
  &::before {
    content: "";
    width: 20px;
    height: 100px;
    background: #3a3a3a;
    position: absolute;
    left: calc(50% - 10px);
    bottom: -100px;
  }
  span {
    display: block;
    margin-bottom: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: red;
    position: relative;
    left: 20px;
  }
  .h {
    background: red;
  }
  .l {
    background: #28eb28;
    opacity: 0.3;
  }
}
#yudi {
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 5px;
  background: white;
}
#huoche {
  display: inline-block;
  position: absolute;
  right: -15rem;
  font-size: 10rem;
  top: -10rem;
}
.cover {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0;
  z-index: 9999;
}
</style>