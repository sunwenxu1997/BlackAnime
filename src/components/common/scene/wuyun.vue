<template>
  <div class="cloud">
      <!-- 云 -->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cloud{
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    background: #464646;
    opacity: 0.8;
    border-radius: 50%;
    opacity: 0.9;
    // filter: blur(5px);
    &::before,&::after{
        content: '';
        position: absolute;
        background: #464646;
        border-radius: 50%;
        bottom: 0;
    }
    &::before{
        width: 20px;
        height: 20px;
        left: -10px;
    }
    &::after{
         width: 25px;
        height: 25px;
        right: -10px;
    }
}
</style>