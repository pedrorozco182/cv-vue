<template>
  <div >
   <a v-for="link in importantLinks" :key="link" :href="link.href" target="_blank" > <v-btn  icon color="white" text>
      <v-icon>  {{ link.icon }}</v-icon>
    </v-btn>
    </a>
  </div>
</template>

<script>
export default {
  name: "ListLinks",
  data: () => ({
    importantLinks: [
      {
        text: "Documentation",
        href: "https://twitter.com/pedrorozco182",
        icon: "mdi-twitter",
      },
      {
        text: "Chat",
        href: "https://www.linkedin.com/in/pjcode",
        icon: "mdi-linkedin",
      },
      {
        text: "Made with Vuetify",
        href: "https://github.com/pedrorozco182",
        icon: "mdi-github",
      },
      {
        text: "Twitter",
        href: "mailto:pedrorozco182@gmail.com",
        icon: "mdi-gmail",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  margin-top: 40px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3cb8ff;
}
</style>
