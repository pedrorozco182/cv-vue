<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      class="d-flex justify-center align-center"
      dark
      flat
    >
      <router-link to="/">Home</router-link>

      <router-link to="/about">About Me</router-link>
    </v-app-bar>

    <v-main class="secondary">
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
</style>
