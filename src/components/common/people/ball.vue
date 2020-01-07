<template>
  <div class="ball" :style="`width:${ball_w}px;height:${ball_h}px`">
    <div class="eye" :class="toLeft?'toLeft-eye':'eye'"></div>
    <i
      class="iconfont iconfuzhuang-hudiejie"
      id="hudie"
      v-if="hudiejie"
      :style="toLeft?'right: -10px; transform: rotate(45deg);':'left: -10px; transform: rotate(-45deg);'"
    ></i>
    <i id="maozi" class="iconfont iconboshimao" v-if="maozi"></i>
    <i id="qiang" class="iconfont iconshuiqiang" v-if="qiang"></i>
    <i id="yusan" class="iconfont icon73" v-if="yusan"></i>
    <div id="guaizhang" v-if="guaizhang"></div>
    <chatBox :top="-60" :sayMsg="speakMsg" v-if="chat"></chatBox>
  </div>
</template>

<script>
import chatBox from "@/components/common/tool/chatBox";
export default {
  components: {
    chatBox: chatBox
  },
  props: {
    ball_w: Number,
    ball_h: Number,
    hudiejie: { default: false },
    toLeft: { default: false },
    maozi: { default: false },
    qiang:{default:false},
    yusan:{default:false},
    guaizhang:{default:false}
  },
  data() {
    return {
      speakMsg: "",
      chat: false
    };
  },
  mounted() {
    this.$anime({
      targets: ".eye",
      scaleY: 0,
      loop: true,
      delay: 1500,
      duration: 100
    });
  }
};
</script>

<style lang="scss" scoped>
.ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: black;
  position: absolute;
  z-index: 55;
  top: -50px;
  .eye {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    position: absolute;
    right: 10px;
    top: 13px;
  }
  .toLeft-eye {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 10px;
    top: 13px;
  }
  #hudie {
    display: inline-block;
    font-size: 3rem;
    color: white;
    font-weight: bold;
    position: absolute;
    top: -10px;
  }
  #maozi {
    position: relative;
    top: -30px;
    left: 0px;
    font-size: 50px;
    color: rgb(73, 73, 73);
  }
  #qiang{
    font-size: 100px;
    position: absolute;
    left: -10px;
    top: -30px;
    z-index: 10;
    color: rgb(85, 85, 85);
    transform: rotate(90deg)
  }
  #yusan{
    display: inline-block;
    font-size: 5rem;
    color: #e4e4e488;
    position: relative;
    top: -40px;
    left: -15px;;
    transform: scaleX(-1)
  }
  #guaizhang{
    width: 10px;
    height: 15px;
    border: 4px solid white;
    border-top-color: black;
    position: absolute;
    bottom: 15px;
    left: 18px;
    &::after{
      content: '';
      width: 5px;
      height: 20px;
      background: white;
      position: absolute;
      bottom: -20px;
      left: -2px;
    }
  }
}
</style>