import { createStore } from "vuex";

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
    callApi(context) {
      const BaseUrl = `https://dev-api-pricing.bancaprogetto.it/sessions/6376b2f2-3aaf-472a-83f2-8dbc2e4b2215`;
      fetch(BaseUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          JSON.stringify(response);
          console.log(response);
          context.commit("setUserData", response);
        });
    },
  },
  getters: {
    userData(state) {
      return state.user.creditLines
    }
  }
});

export default store;
