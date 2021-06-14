<template>
  <div>
    <ul class="ul_link">
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
          >router</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
          >vuex</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
          target="_blank"
          rel="noopener"
          >unit-jest</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListLinks"
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
