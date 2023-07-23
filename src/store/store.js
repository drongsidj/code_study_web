import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
    },
    mutations: {
        setLoginStatus(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        },
    },
    actions: {
        login({ commit }) {
            commit("setLoginStatus", true);
        },
    },
});

export default store;
