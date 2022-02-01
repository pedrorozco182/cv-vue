<template>
  <v-container>
    <v-row style="">
      <v-col class="d-flex justify-center">
        <FaceImage />
        <div
          class="textWelcome text-h3 text-md-h2"
          style="font-family: 'Caveat' !important"
        >
          <span id="glads_text" class="typingEffect">Hello! I am PJ.</span>
        </div>

        <div
          class="text-sm-caption text-md-overline textSubtitle"
          style="font-family: 'Press Start 2P' !important"
        >
          Developer | Musician | Dreamer
        </div>
        <ListLinks />
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
    ListLinks,
  },
};
</script>
<style>
.container {
  height: 100%;
  z-index: 10000;
}
.textWelcome {
  padding-top: 20px;
  color: aliceblue;
  text-shadow: 2px 5px 5px #00000096;
  z-index: 1;
  margin-top: 20px 0;
  width: 18ch;
}
.textSubtitle {
  color: rgb(0, 225, 255);
  text-shadow: 2px 2px 5px #000000a4;
  z-index: 10000;
  font-size: 10px;
  padding: 20px 0;
}
.col {
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 70px;
}
.row {
  height: 100%;
}
.typingEffect {
  display: block;
  font-family: monospace;
  white-space: nowrap;
  border-inline-end: 4px solid;
  width: 0;
  animation: 3s typing 2s steps(16) infinite alternate,
    blink 0.3s infinite step-end alternate;
  overflow: hidden;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 16ch;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
