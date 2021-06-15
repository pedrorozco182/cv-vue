<template>
  <v-container>
    <v-row>
      <v-col class="d-flex justify-center">
        <FaceImage />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <div
          class="textWelcome text-h3 text-md-h2"
          style="font-family: 'Caveat' !important"
        >
          Hello! I'm <b> PJ.</b>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <div
          class="text-caption text-md-overline textSubtitle"
          style="font-family: 'Press Start 2P' !important"
        >
          Developer | Musician | Dreamer
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <ListLinks/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FaceImage from "../components/home/FaceImage.vue";
import ListLinks from "../components/home/ListLinks.vue";
export default {
  name: "Home",

  components: {
    FaceImage,
    ListLinks
  },
  
};
</script>
<style>
.container {
  height: 100%;
  z-index: 10000;
}
.textWelcome {
  color: aliceblue;
  text-shadow: 2px 5px 5px #00000096;
  z-index: 10000;
}
.textSubtitle {
  color:rgb(0, 225, 255);
   text-shadow: 2px 2px 5px #000000a4;
z-index: 10000;
}
</style>
