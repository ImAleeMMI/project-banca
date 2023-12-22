<template>
  <the-header :ownerName="user_old.ownerName"></the-header>
  <the-main
    :opportunityId="user_old.opportunityId"
    :assignorVatCode="user_old.assignorVatCode"
    :assignorName="user_old.assignorName"
    :assignorFiscalCode="user_old.assignorFiscalCode"
  >
    <template v-slot:main-content >
      <accordion-id  v-for="creditLine in creditLines " :key="creditLine" :creditLine="creditLine">
      </accordion-id>
    </template>
  </the-main>
  <the-footer></the-footer>
</template>

<script>
import store from "../../store/index.js"

import TheFooter from "../components/layout/TheFooter.vue";
import TheMain from "../components/ui/TheMain.vue";
import TheHeader from "../components/layout/TheHeader.vue";
import AccordionId from "../components/accordion/AccordionId.vue";


export default {
  name: "HomePage",

  components: {
    TheFooter,
    TheMain,
    TheHeader,
    AccordionId,
    
  },
  computed: {
    user_old() {
      return this.$store.state.user;
    },
    creditLines() {
      return this.$store.getters.getCreditLines;
    },
  },
  methods: {
    callApi() {
      this.$store.dispatch("callApi");
    },
    updateCreditLine(updatedCreditLine) {
      store.commit("updateCreditLine", updatedCreditLine);
    }
  },
  created() {
    this.callApi();
  },
  
};
</script>

<style lang="scss">
@import "../../styles/header.scss";
@import "../../styles/footer.scss";
@import "../../styles/main.scss";
@import "../../styles/accordion.scss";
</style>
