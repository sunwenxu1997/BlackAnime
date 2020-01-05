<template>
  <div class="ball">
    <i  class="iconfont icongouxiao1"></i>
    <chatBox :top="-60" :sayMsg="speakMsg" v-if="chat"></chatBox>
  </div>
</template>

<script>
import chatBox from "@/components/common/tool/chatBox";
export default {
  components: {
    chatBox: chatBox
  },
  data() {
    return {
      speakMsg: "",
      chat: false
    };
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
.ball{
    i{
        font-size: 2.5rem;
    }
}
</style>