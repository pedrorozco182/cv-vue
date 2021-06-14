<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <FaceImage />
    <ListLinks/>
  </div>
</template>

<script>
// @ is an alias to /src
import FaceImage from "@/components/home/FaceImage.vue";
import ListLinks from "@/components/home/ListLinks.vue";
export default {
  name: "Home",
  components: {
    FaceImage,
    ListLinks
  },
};
</script>

<style >
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  flex-direction: column;
  
}

</style>