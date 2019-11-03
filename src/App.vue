<template>
  <div id="app">
    <div class="cover" v-if="cover">请翻转手机屏幕！</div>
    <router-view v-else />
    <p class="hint">版权所有 备案/许可证号：@2019-孙文旭[swx]</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cover: true
    };
  },
  created() {
    let _this = this;
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, resize, false);
    function resize(fals) {
      if (window.orientation == 0 || window.orientation == 180) {
        console.log("竖屏");
        _this.cover = true;
      } else {
        console.log("横屏");
        _this.cover = false;
      }
    }
    resize(true);
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  position: absolute;
}
.cover {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #909090;
  font-weight: bold;
  font-size: 20px;
}
.hint {
  width: 100%;
  text-align: center;
  color: white;
  position: fixed;
  bottom: 20px;
  z-index: 999;
  font-size: 15px;
  font-weight: bold;
}
</style>
