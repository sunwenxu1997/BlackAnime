<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, resize, false);
    function resize(fals) {
      if (window.orientation == 0 || window.orientation == 180) {
        console.log("竖屏");
      } else {
        console.log("横屏");
      }
    }
    resize(true);
  }
};
</script>

<style>
</style>
