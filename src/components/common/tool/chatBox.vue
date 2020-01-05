<template>
  <div class="chatBox" :style="`top:${top+(-sayMsg.length/8)*15}px;left:${left}%;width:${sayMsg.length*25}px;`">
   <!-- 人物聊天框 -->
  {{sayMsg}}
  </div>
</template>

<script>
export default {
props:{
  top:Number,
  left:Number,
  sayMsg:String
}
}
</script>
<style lang="scss" scoped>
.chatBox{
    filter: drop-shadow(0 0 5px white);
    border-radius: 5px;
    background: white;
    padding: 0.5rem;
    position: absolute;
    top: -50px;
    left: 0;
    max-width: 150px !important;
    word-break: break-all;
    font-size: 15px;
    font-weight: bold;
    color: #292929;
    &::after{
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: -15px;
        background: white;
        left: 20px;
        clip-path: polygon(0 0,100% 0,50% 100%)
    }
}
</style>