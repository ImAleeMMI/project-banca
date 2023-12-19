<template>
  <the-header :ownerName="user_old.ownerName"></the-header>
  <the-main
    :opportunityId="user_old.opportunityId"
    :assignorVatCode="user_old.assignorVatCode"
    :assignorName="user_old.assignorName"
    :assignorFiscalCode="user_old.assignorFiscalCode"
  >
    <template v-slot:main-content>
      <accordion-id>
        
      </accordion-id>
    </template>
  </the-main>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from "../components/layout/TheFooter.vue";
import TheMain from "../components/ui/TheMain.vue";
import TheHeader from "../components/layout/TheHeader.vue";
import AccordionId from "../components/accordion/AccordionId.vue";


// import { computed } from 'vue';

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
  },
  methods: {
    callApi() {
      this.$store.dispatch("callApi");
    },
  },
  created() {
    this.callApi();
  },
  // provide() {
  //   return{
  //     creditLineId: computed(() => {
  //       if(this.$store.state.user){
  //         return this.$store.state.user.creditLines[0].id
  //       } else {
  //         return 'attaccati'
  //       }

  //       }),
  //     // creditLineType: this.user?.creditLines[0].type,
  //     // creditLineDebtorType: this.user?.creditLines[0].debtorType,
  //     // creditLineAmountSum: this.user?.reditLines[0].amountSum,
  //     // creditLinePartialWithoutRecoursePercentage: this.user?.creditLines[0],
  //   }
  // },
};
</script>

<style lang="scss">
@import "../../styles/header.scss";
@import "../../styles/footer.scss";
@import "../../styles/main.scss";
@import "../../styles/accordion.scss";
</style>
