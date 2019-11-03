<template>
  <div class="ball" :style="`width:${ball_w}px;height:${ball_h}px`">
    <div class="eye" :class="toLeft?'toLeft-eye':'eye'"></div>
    <i
      class="iconfont iconfuzhuang-hudiejie"
      id="hudie"
      v-if="hudiejie"
      :style="toLeft?'right: -10px; transform: rotate(45deg);':'left: -10px; transform: rotate(-45deg);'"
    ></i>
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
    toLeft: { default: false }
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
}
</style>