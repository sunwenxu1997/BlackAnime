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
    <anime11 v-if="playIndex == 11"></anime11>
    <anime12 v-if="playIndex == 12"></anime12>
    <anime13 v-if="playIndex == 13"></anime13>
    <anime14 v-if="playIndex == 14"></anime14>
    <anime15 v-if="playIndex == 15"></anime15>
    <anime16 v-if="playIndex == 16"></anime16>
    <anime17 v-if="playIndex == 17"></anime17>
    <anime18 v-if="playIndex == 18"></anime18>
    <anime19 v-if="playIndex == 19"></anime19>
    <anime20 v-if="playIndex == 20"></anime20>
    <anime21 v-if="playIndex == 21"></anime21>
    <anime22 v-if="playIndex == 22"></anime22>
    <anime23 v-if="playIndex == 23"></anime23>
    <anime24 v-if="playIndex == 24"></anime24>
    <anime25 v-if="playIndex == 25"></anime25>
    <anime26 v-if="playIndex == 26"></anime26>
    <anime27 v-if="playIndex == 27"></anime27>
    <anime28 v-if="playIndex == 28"></anime28>
    <anime29 v-if="playIndex == 29"></anime29>
    <anime30 v-if="playIndex == 30"></anime30>
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
import anime_11 from "@/components/page/anime_11";
import anime_12 from "@/components/page/anime_12";
import anime_13 from "@/components/page/anime_13";
import anime_14 from "@/components/page/anime_14";
import anime_15 from "@/components/page/anime_15";
import anime_16 from "@/components/page/anime_16";
import anime_17 from "@/components/page/anime_17";
import anime_18 from "@/components/page/anime_18";
import anime_19 from "@/components/page/anime_19";
import anime_20 from "@/components/page/anime_20";
import anime_21 from "@/components/page/anime_21";
import anime_22 from "@/components/page/anime_22";
import anime_23 from "@/components/page/anime_23";
import anime_24 from "@/components/page/anime_24";
import anime_25 from "@/components/page/anime_25";
import anime_26 from "@/components/page/anime_26";
import anime_27 from "@/components/page/anime_27";
import anime_28 from "@/components/page/anime_28";
import anime_29 from "@/components/page/anime_29";
import anime_30 from "@/components/page/anime_30";
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
    anime11: anime_11,
    anime12: anime_12,
    anime13: anime_13,
    anime14: anime_14,
    anime15: anime_15,
    anime16: anime_16,
    anime17: anime_17,
    anime18: anime_18,
    anime19: anime_19,
    anime20: anime_20,
    anime21: anime_21,
    anime22: anime_22,
    anime23: anime_23,
    anime24: anime_24,
    anime25: anime_25,
    anime26: anime_26,
    anime27: anime_27,
    anime28: anime_28,
    anime29: anime_29,
    anime30: anime_30,
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
