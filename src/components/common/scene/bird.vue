<template>
  <div class="bird">
      <!-- 鸟 -->
      <div class="before" :style="`animation-delay: ${fly}s`"></div>
       <div class="after" :style="`animation-delay: ${fly}s`"></div>
  </div>
</template>

<script>
export default {
    props:{
        fly:Number
    }
};
</script>

<style lang="scss" scoped>
.bird {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #292929;
  position: absolute;
  right: -20px;
  top: 0;
  filter: blur(1px);
  .before,
  .after {
    width: 15px;
    height: 10px;
    border: 2px solid #292929;;
    border-bottom: none;
    border-left: none;
    border-right: none;
    position: absolute;
    border-radius: 50%;
    top: -2px;
  }
  .before {
    left: -11px;
    transform-origin: 100% 100%;
    transform: rotate(15deg);
    animation: bird-l 1s ease infinite alternate;
  }
  .after {
    right: -11px;
    transform-origin: 0% 100%;
    animation: bird-r 1s ease infinite alternate;
    transform: rotate(-15deg);
  }
}
@keyframes bird-l {
  100% {
    transform: rotate(-50deg);
  }
}
@keyframes bird-r {
  100% {
    transform: rotate(50deg);
  }
}
</style>