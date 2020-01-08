<template>
  <div class="hold-bck">
    <!-- 场景1 -->
    <div class="block_filter">
      <div class="left"></div>
      <div class="right">
        <cloud id="cloud" v-for="(c,index) in 20" :key="index + 'cloud'"></cloud>
        <ball id="ball" ref="ball"></ball>
      </div>
    </div>
    <div class="cover">
      <h2 class="text">还记得你曾经的梦想吗？</h2>
      <h1 class="text">你的梦想又是否实现了呢？</h1>
      <h2 class="text">即便世事总是那么不尽人意</h2>
      <h2 class="text">即便梦想已经快化为泡影</h2>
      <h1 class="text">即便.....</h1>
      <h2 class="text">活在当下，或为梦想，或为生活，或为家庭...</h2>
      <h1 class="text">致梦想🎈</h1>
      <h1 class="text" style="margin-top:150px;text-align:center;color:#5a5a5a">感谢观看</h1>
      <div class="people">
        <div class="p_box">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_1.png" alt />
        </div>
        <div class="p_box" style=" animation-delay: 0.5s">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_2.png" alt />
        </div>
        <div class="p_box">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_3.png" alt />
        </div>
        <div class="p_box" style=" animation-delay: 0.3s">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_4.png" alt />
        </div>
        <div class="p_box">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_5.png" alt />
        </div>
        <div class="p_box" style=" animation-delay: 0.2s">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_6.png" alt />
        </div>
        <div class="p_box">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_7.png" alt style=" transform: scale(1.2)" />
        </div>
        <div class="p_box" style=" animation-delay: 0.2s">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_8.png" alt />
        </div>
        <div class="p_box">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_9.png" alt />
        </div>
        <div class="p_box" style=" animation-delay: 0.5s">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_10.png" alt />
        </div>
        <div class="p_box">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_11.png" alt />
        </div>
        <div class="p_box" style=" animation-delay: 0.2s">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_12.png" alt />
        </div>
        <div class="p_box">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_13.png" alt style="top:-5px" />
        </div>
        <div class="p_box" style=" animation-delay: 0.3s">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_14.png" alt />
        </div>
        <div class="p_box">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_15.png" alt />
        </div>
        <div class="p_box" style=" animation-delay: 0.2s">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_16.png" alt />
        </div>
        <div class="p_box">
          <img class="g" src="@/assets/img/g_3.gif" alt />
          <img class="p" src="@/assets/img/p_17.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import cloud from "@/components/common/scene/cloud";
export default {
  name: "anime_1",
  components: {
    ball: ball,
    cloud: cloud
  },
  data() {
    return {
      h: window.innerHeight,
      w: window.innerWidth,
    };
  },
  mounted() {
    let _this = this;
    //云
    _this.$anime({
      targets: "#cloud",
      translateY: function(el, i, l) {
        return _this.$anime.random(_this.h * 1.3, _this.h * 1.5);
      },
      translateX: function(el, i, l) {
        return _this.$anime.random(_this.w / 5, _this.w);
      },
      rotate: 90,
      scale: function(el, i, l) {
        return _this.$anime.random(1, 6);
      },
      duration: 0,
      complete: function() {
        _this.$anime({
          targets: "#cloud",
          loop: true,
          translateY: -_this.h,
          easing: "linear",
          duration: 1000,
          delay: function(el, i, l) {
            return i * 100;
          }
        });
      }
    });
    this.$anime({
      targets: "#ball",
      rotate: 90,
      duration: 0,
      complete: function() {
        _this.$refs.ball.chat = true;
        _this.$refs.ball.speakMsg = "啊~";
        _this.$anime({
          targets: "#ball",
          translateX: [0, 150],
          scaleY: [1, 0.9],
          easing: "easeInOutSine",
          direction: "alternate",
          loop: true
        });
      }
    });
    _this.$anime({
      targets: ".block_filter",
      filter: "blur(8px)",
      easing: "linear",
      delay: 3000,
      duration: 3000,
      complete: function() {
        _this.$anime({
          targets: ".text",
          easing: "linear",
          translateX: 100,
          opacity: [0, 1],
          delay: function(el, i, l) {
            return i * 2000;
          },
          duration: 1000
        });
        _this.$anime({
          targets: ".cover",
          easing: "linear",
          opacity: 1,
          duration: 1000
        });
      }
    });
    _this.paths.forEach(function(path, index) {
      _this.$anime({
        targets: path.id,
        d: {
          value: path.d,
          duration: 1000,
          easing: "easeInOutQuad"
        },
        delay: 1000,
        endDelay: 1000,
        direction: "alternate",
        loop: true
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.block_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: scale(1.1);
  .left {
    width: 30%;
    height: 100%;
    background: #292929;
    position: absolute;
    left: 0;
    top: 0;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 1.5rem;
      line-height: 3rem;
    }
  }
  .right {
    width: 70%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    #ball {
      transform: rotate(90deg);
      top: 40%;
      left: 20%;
    }
  }
}
.cover {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  color: white;
  padding: 100px 0;
  box-sizing: border-box;
  opacity: 0;
  .text {
    margin-bottom: 20px;
    opacity: 0;
    text-shadow: 2px 2px 5px black;
  }
}
.people {
  z-index: 100;
  position: absolute;
  bottom: 50px;
  width: 100%;
  height: 50px;
  // background: red;
  display: flex;
  justify-content: center;

  .p_box {
    position: relative;
    width: 100px;
    animation: jump 0.2s ease infinite alternate;
    img {
      display: inline-block;
      width: 100%;
     
    }
    .p {
      width: 70px;
      z-index: 9;
      position: absolute;
      top: -13px;
      left: 12px;
    }
  }
}
@keyframes jump {
  100% {
    transform: translateY(-10px);
  }
}
</style>