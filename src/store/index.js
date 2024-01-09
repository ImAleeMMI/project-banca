import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      user: {},
    };
  },
  mutations: {
    setUserData(state, response) {
      state.user = response;
    },
    updateCreditLine(state, updatedCreditLine) {
      state.user.creditLines = updatedCreditLine;
    },
  },
  actions: {
    async callApi(context) {
      const url = `https://dev-api-pricing.bancaprogetto.it/sessions/6376b2f2-3aaf-472a-83f2-8dbc2e4b2215`;
      try {
        const response = await axios.get(url);
        context.commit("setUserData", response.data);

        const pricingData = {
          sessionId: "6376b2f2-3aaf-472a-83f2-8dbc2e4b2215",
          creditLineId: "pro-soluto-parziale",
          gracePeriod: 0,
          commissionPercentage: 1,
          managementFeePercentage: 0.15,
          interestPercentage: null,
          hasCofaceBill: true,
          debtorRecoverCostUnitPrice: 70,
          debtorAssessmentCostUnitPrice: 50,
          saleCostWithoutRecoursePercentage: 0.2,
          saleCostWithRecoursePercentage: 30,
          cofaceCostPercentage: 0.1,
        };

        const postResponse = await axios.post(
          "https://dev-api-pricing.bancaprogetto.it/pricing-last-step/",
          pricingData
        );
        // context.commit("updateCreditLine", postResponse.data);
        console.log(postResponse.data)
      } catch (error) {
        console.error("Errore ", error);
      }
    },
  },
  getters: {
    getCreditLines(state) {
      return state.user.creditLines;
    },
  },
});

export default store;
