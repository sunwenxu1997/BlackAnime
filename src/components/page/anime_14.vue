<template>
  <div class="overall">
    <audio ref="mp3_1" src="static/music/0_1.mp3" preload></audio>
    <audio ref="mp3_2" src="static/music/0_2.mp3" preload></audio>
    <audio ref="mp3_3" src="static/music/0_3.mp3" preload></audio>
    <div class="cover">
      <h2>梦醒了</h2>
    </div>
    <splitText
      id="title"
      :text="title"
      :text_bck="'white'"
      :text_color="'#464545'"
      :text_size="40"
      :bold="true"
    ></splitText>
    <splitText
      id="msg"
      :text="msg"
      :text_bck="'white'"
      :text_color="'#464545'"
      :text_size="15"
      :bold="true"
    ></splitText>
    <sun></sun>
    <bird id="bird" v-for="(b,index) in 10" :key="index + 'b'" :fly="$anime.random(0,0.8)"></bird>
    <cloud id="cloud" v-for="(c,index) in 8" :key="index + 'cloud'"></cloud>
    <div class="overall-after">
      <div class="pubu">
        <div class="langhua" ref="langhua" v-for="(l,index) in 50" :key="index + 'l'"></div>
        <chatBox :sayMsg="'我是瀑布'" :left="60" :top="-50"></chatBox>
      </div>
    </div>
    <div class="box">
      <!-- 进入页面 -->
      <div class="line">
        <ball id="ball" ref="ball"></ball>
        <immortal ref="immortal"></immortal>
      </div>
      <mountain
        v-for="(i,indexm) in mountainList"
        :key="indexm"
        :mountain_w="i.mw"
        :style="` transform: translateX(${i.mx}px) scaleY(${i.my});`"
      ></mountain>
      <land :chongzi="false" :stone="false"></land>
    </div>
  </div>
</template>

<script>
import ball from "@/components/common/people/ball";
import bird from "@/components/common/scene/bird";
import immortal from "@/components/common/people/immortal";
import land from "@/components/common/scene/land";
import cloud from "@/components/common/scene/cloud";
import sun from "@/components/common/scene/sun";
import mountain from "@/components/common/scene/mountain";
import splitText from "@/components/common/tool/splitText";
import chatBox from "@/components/common/tool/chatBox";
export default {
  name: "anime_1",
  components: {
    ball: ball,
    immortal: immortal,
    land: land,
    mountain: mountain,
    bird: bird,
    cloud: cloud,
    sun: sun,
    splitText: splitText,
    chatBox: chatBox
  },
  data() {
    return {
      w: window.innerWidth,
      h: window.innerHeight / 2,
      playShow: true,
      mountainList: [],
      title: "",
      msg: ""
    };
  },
  created() {
    let _this = this;
    for (let i = 0; i < 8; i++) {
      let obj = {
        mw: _this.$anime.random(500, _this.w),
        mx: _this.$anime.random(-_this.w * 2, _this.w / 2.5),
        my: _this.$anime.random(1, 2)
      };
      _this.mountainList.push(obj);
    }
  },
  mounted() {
     this.$parent.$refs.audio1.pause();
    this.$parent.$refs.audio0.play();
    this.$parent.$refs.audio0.volume = 0.3;
    let _this = this;
    _this.$anime({
      targets: ".cover",
      delay:1000,
      duration: 1000,
      easing:'linear',
      opacity: 0,
    });
    _this.playAnime();
    //飞鸟动画
    _this.$anime({
      targets: "#bird",
      translateY: function(el, i, l) {
        return _this.$anime.random(0, _this.h / 2);
      },
      translateX: function(el, i, l) {
        return _this.$anime.random(-_this.w / 2, -_this.w);
      },
      scale: function(el, i, l) {
        return (i * Math.random()) / 10;
      },
      delay: function(el, i, l) {
        return i * 1000;
      },
      easing: "easeInOutSine",
      duration: 20000
    });
    //浪花动画
    _this.$anime({
      targets: ".langhua",
      translateY: function(el, i, l) {
        return _this.$anime.random(0, 20);
      },
      translateX: function(el, i, l) {
        return _this.$anime.random(-50, _this.w / 6);
      },
      scale: function(el, i, l) {
        return _this.$anime.random(1, 5);
      },
      duration: 0,
      complete: function() {
        for (let i = 0; i < 50; i++) {
          _this.$anime({
            targets: _this.$refs["langhua"][i],
            scale: _this.$anime.random(1, 5),
            duration: _this.$anime.random(500, 1000),
            loop: true,
            direction: "alternate",
            easing: "easeInOutSine"
          });
        }
      }
    });

    //云
    _this.$anime({
      targets: "#cloud",
      translateY: function(el, i, l) {
        return _this.$anime.random(0, _this.h / 2);
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
          duration: 30000
        });
      }
    });
  },
  methods: {
    playAnime() {
      let _this = this;
      let tl = _this.$anime
        .timeline({
          autoplay: true,
          loop: 1,
          easing: "linear",
          duration: 1000,
          delay: 5000
        })
        .add({
          targets: ".box",
          scale: [0.3, 1],
          begin: function() {
            _this.$anime({
              targets: ".overall-after",
              width: "100%",
              easing: "linear",
              duration: 500,
              delay: 5000
            });
            _this.$anime({
              targets: ["#bird", ".pubu", "#title", "#msg"],
              opacity: 0,
              easing: "linear",
              duration: 500,
              delay: 5000
            });
          },
          complete: function(anime) {
            let moveLine = _this.$anime.timeline({
              loop: 1
            });
            let immortal = _this.$refs["immortal"];
            let ball = _this.$refs["ball"];
            moveLine
              .add({
                targets: "#ball",
                translateX: _this.w / 2 - 50,
                easing: "linear",
                duration: 3000,
                complete: function(anime) {
                  immortal.chat = true;
                  _this.$refs.mp3_1.play()
                  immortal.speakMsg = "你好少年,你的梦想是什么";
                }
              })
              .add({
                duration: 1500,
                complete: function() {
                  immortal.chat = false;
                  ball.chat = true;
                  _this.$refs.mp3_2.play()
                  ball.speakMsg = "做一名宇航员";
                }
              })
              .add({
                duration: 1500,
                complete: function() {
                  immortal.chat = true;
                  ball.chat = false;
                  _this.$refs.mp3_3.play()
                  immortal.speakMsg = "OK!";
                }
              })
              .add({
                delay: 1000,
                targets: "#ball",
                duration: 2000,
                easing: "linear",
                translateX: _this.w,
                complete: function(anime) {
                   _this.$parent.$refs.audio0.pause();
                  _this.$parent.$refs.audio1.play();
                  _this.$parent.$refs.audio1.volume = 0.2;
                  _this.$parent.playIndex = 15;
                }
              });
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(-150deg, white 0%, #999898 100%);
  .overall-after {
    width: 85%;
    height: 50%;
    background: #292929;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 2;
    .pubu {
      width: 15%;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background: #008cff;
      &::before {
        content: "";
        width: 70%;
        height: 60%;
        position: absolute;
        z-index: 5;
        bottom: 0;
        left: 20%;
        background: #292929;
        clip-path: polygon(
          30% 0,
          80% 20%,
          100% 80%,
          100% 100%,
          0% 100%,
          0% 50%
        );
      }
      .langhua {
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        opacity: 0.8;
        position: absolute;
        bottom: 0;
        z-index: 9;
        filter: blur(1px);
      }
    }
  }

  #title {
    margin-top: 10%;
    z-index: 999;
  }
  #msg {
    margin-top: 5%;
    z-index: 55;
  }
}
.playBtn {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 10px solid white;
  box-shadow: 0 0 5px #686767;
  cursor: pointer;
  position: absolute;
  left: calc(50% - 75px);
  top: calc(50% - 75px);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .btn {
    width: 60px;
    height: 60px;
    background: white;
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
.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: black;
  z-index: 9999;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>