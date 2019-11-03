<template>
  <div class="hello">
    <audio ref="audio0" src="static/music/bck_wangzhe.mp3"  loop></audio>
    <audio ref="audio1" src="static/music/bck_menu.mp3"  loop></audio>
    <audio ref="audio2" src="static/music/bck_Tempo.mp3"  loop></audio>
    <anime0 v-if="playIndex == 0"></anime0>
    <anime1 v-if="playIndex == 1"></anime1>
    <anime2 v-if="playIndex == 2"></anime2>
  </div>
</template>

<script>
import anime_0 from "@/components/page/anime_0";
import anime_1 from "@/components/page/anime_1";
import anime_2 from "@/components/page/anime_2";
export default {
  name: "HelloWorld",
  components: {
    anime0: anime_0,
    anime1: anime_1,
    anime2: anime_2
  },
  data() {
    return {
      playIndex: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
