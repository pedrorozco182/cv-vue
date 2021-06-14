<template>
  <div class="container_image" transition="scroll-y-transition">
    <v-img 
      class="image"
      contain
      :src="require('../../assets/pedroToon.jpg')"
      transition="scale-transition scroll-y-transition"
    />
  </div>
</template>

<script>
export default {
  name: "FaceImage",
  props: ["src"],
};
</script>

<style>
.container_image {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin-top: 20px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  object-fit: cover;

}
.image {
  border-radius: 50%;
  height: 200px;
  width: 200px;

  object-fit: cover;

}
</style>
