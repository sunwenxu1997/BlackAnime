<template>
  <div class="splitText">
    <!-- 分割字符串工具 -->
    <span
      class="split-text"
      ref="split-text"
      v-for="(i,index) in textList"
      :key="index"
      :style="`font-size:${text_size}px;color:${text_color};background:${text_bck};${bold?'font-weight:bold':''};`"
      :class="i == null?'noText':''"
    >{{i}}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    text_size: Number,
    text_color: String,
    text_bck: String,
    bold: { default: false }
  },
  data() {
    return {
      textList: []
    };
  },
  created() {
    this.textCut(this.text);
  },
  mounted() {
    let _this = this;
    _this.$anime({
      targets: ".split-text",
      translateY: [-50, 0],
      opacity: [0, 1],
      delay: function(el, i, l) {
        return i * 100;
      },
      duration: 1000,
      complete: function() {
        for (let i = 0; i < _this.textList.length; i++) {
          _this.$anime({
            targets: _this.$refs['split-text'][i],
            translateX: -10,
            delay:i*50,
            loop: true,
            direction: "alternate",
            easing: "easeInOutSine"
          });
        }
      }
    });
  },
  methods: {
    textCut(str) {
      let strArr = str.split("");
      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/^[\s]*$/)) {
          strArr[i] = null;
        }
      }
      this.textList = strArr;
      console.log(this.textList);
    }
  }
};
</script>

<style lang="scss" scoped>
.splitText {
  position: absolute;
  top: 0;
  span {
    display: inline-block;
    padding: 0.5rem;
  }
  .noText {
    opacity: 0 !important;
  }
}
</style>