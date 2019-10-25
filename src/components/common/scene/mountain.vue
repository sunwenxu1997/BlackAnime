<template>
  <div class="mountain" :style="`height:${h}px;width:${mountain_w}px`"></div>
</template>

<script>
export default {
    props:{
        mountain_w:Number
    },
  data() {
    return {
        h:window.innerHeight/1.5,
    };
  }
};
</script>

<style lang="scss" scoped>
.mountain {
  width: 500px;
  background: #353535;
  clip-path: polygon(50% 0, 100% 100%, 0% 100%);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.9;
  z-index: -1;
}
</style>