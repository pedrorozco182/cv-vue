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
          Hello! I'M <b> Pedro Orozco.</b>
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
  </v-container>
</template>

<script>
import FaceImage from "../components/home/FaceImage.vue";

export default {
  name: "Home",

  components: {
    FaceImage,
  },
  data: () => ({
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
  }),
};
</script>
<style>
.container {
  height: 100%;
}
.textWelcome {
  color: aliceblue;
  text-shadow: 2px 5px 5px #00000096;
  
}
.textSubtitle {
  color:rgb(0, 225, 255);
   text-shadow: 2px 2px 5px #000000a4;

}
</style>
