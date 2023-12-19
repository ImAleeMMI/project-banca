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
    }
  },
  actions: {
    async callApi(context) {

      const url = `https://dev-api-pricing.bancaprogetto.it/sessions/6376b2f2-3aaf-472a-83f2-8dbc2e4b2215`;
      const response = await axios.get(url);
      context.commit("setUserData", response.data);
      // fetch(url, {
      //   method: "GET",
      //   headers: {
      //     Accept: "application/json",
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((response) => {
      //     JSON.stringify(response);
      //     console.log(response);
          
        }
  },
  getters: {
    getCreditLines(state) {
      return state.user.creditLines
    }
  }
});

export default store;
