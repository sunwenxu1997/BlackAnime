<template>
  <div class="hello">
    <audio ref="audio0" src="static/music/bck_wangzhe.mp3" loop></audio>
    <audio ref="audio1" src="static/music/bck_menu.mp3" loop></audio>
    <audio ref="audio2" src="static/music/bck_Tempo.mp3" loop></audio>
    <anime0 v-if="playIndex == 0"></anime0>
    <anime1 v-if="playIndex == 1"></anime1>
    <anime2 v-if="playIndex == 2"></anime2>
    <anime3 v-if="playIndex == 3"></anime3>
    <anime4 v-if="playIndex == 4"></anime4>
    <anime5 v-if="playIndex == 5"></anime5>
    <anime6 v-if="playIndex == 6"></anime6>
    <anime7 v-if="playIndex == 7"></anime7>
    <anime8 v-if="playIndex == 8"></anime8>
    <anime9 v-if="playIndex == 9"></anime9>
    <anime10 v-if="playIndex == 10"></anime10>
  </div>
</template>

<script>
import anime_0 from "@/components/page/anime_0";
import anime_1 from "@/components/page/anime_1";
import anime_2 from "@/components/page/anime_2";
import anime_3 from "@/components/page/anime_3";
import anime_4 from "@/components/page/anime_4";
import anime_5 from "@/components/page/anime_5";
import anime_6 from "@/components/page/anime_6";
import anime_7 from "@/components/page/anime_7";
import anime_8 from "@/components/page/anime_8";
import anime_9 from "@/components/page/anime_9";
import anime_10 from "@/components/page/anime_10";
export default {
  name: "HelloWorld",
  components: {
    anime0: anime_0,
    anime1: anime_1,
    anime2: anime_2,
    anime3: anime_3,
    anime4: anime_4,
    anime5: anime_5,
    anime6: anime_6,
    anime7: anime_7,
    anime8: anime_8,
    anime9: anime_9,
    anime10: anime_10,
  },
  data() {
    return {
      playIndex: 10
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
