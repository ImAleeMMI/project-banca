<template>
  <div>
    <router-link to="/">Page Not found</router-link>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LayoutDefault",

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>

<style lang="scss">
$color: #f4f4f4;
body {
  #app {
    background-color: $color;
  }
}
</style>
