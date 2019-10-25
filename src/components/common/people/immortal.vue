<template>
    <div class="immortal">
      <!-- 神仙 -->
      <div class="maozi"></div>
      <div id="eye" class="eye-l"></div>
      <div id="eye" class="eye-r"></div>
      <div class="zui"></div>
      <div class="huzi"></div>
      <chatBox :top="-80" :sayMsg="speakMsg" v-if="chat"></chatBox>
    </div>
</template>

<script>
import chatBox from "@/components/common/tool/chatBox";
export default {
  components: {
    chatBox: chatBox
  },
  data(){
    return{
      speakMsg:'哈哈哈',
      chat:false
    }
  },
  mounted() {
    this.$anime({
      targets: "#eye",
      scaleY: 0,
      loop: true,
      delay: 1500,
      duration: 100
    });
    this.$anime({
      targets: ".maozi",
      translateY: -5,
      loop: true,
      easing: "easeInOutSine",
      direction: "alternate",
      duration: 500
    });
  }
};
</script>

<style lang="scss" scoped>
.immortal {
  width: 50px;
  height: 100px;
  background: black;
  position: absolute;
  top: -100px;
  right: 30%;
  .maozi {
    width: 100%;
    height: 4px;
    background: gold;
    position: absolute;
    top: -10px;
    box-shadow: 0 0 5px gold;
  }
  #eye {
    width: 10px;
    height: 10px;
    background: white;
    position: absolute;
    top: 15px;
  }
  .eye-l {
    left: 10px;
  }
  .eye-r {
    right: 10px;
  }
  .zui {
    width: 5px;
    height: 5px;
    position: absolute;
    left: calc(50% - 2.5px);
    bottom: 50px;
    background: white;
  }
  .huzi {
    width: 20px;
    height: 40px;
    background: white;
    position: absolute;
    bottom: 5px;
    left: calc(50% - 10px);
    clip-path: polygon(0px 0px, 20px 0px, 10px 40px);
  }
}
</style>