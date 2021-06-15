<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="secondary"
      class="d-flex justify-center align-center"
      dark
      flat
    >
      <router-link to="/">Home</router-link>

      <router-link to="/about">About Me</router-link>
    </v-app-bar> -->

    <v-main class="secondary background">
      <div class="borrador"></div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},

  data: () => ({
    //
  }),
};
</script>
<style >
a {
  font-weight: bold;
  color: white !important;
  margin: 10px;
  text-decoration: none;
}
.background {
  background-image: url("./assets/backgroundMusic.jpg");
  background-color: black;

  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
.borrador {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(43, 43, 43, 0.884);
}
</style>
