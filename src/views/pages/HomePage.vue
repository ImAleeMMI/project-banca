<template>
  <the-header></the-header>
  <the-main>
    <api-call />
  </the-main>
  <the-footer></the-footer>
</template>

<script>
import ApiCall from "../components/ApiCall.vue";
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
import TheMain from "./TheMain.vue";

export default {
  name: "HomePage",

  components: {
    ApiCall,
    TheHeader,
    TheFooter,
    TheMain,
  },
};
</script>

<style lang="scss">
@import "../../styles/app.scss";
@import "../../styles/header.scss";
@import "../../styles/footer.scss";
@import "../../styles/main.scss";
</style>
