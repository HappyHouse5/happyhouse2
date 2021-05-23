import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    member: '',
  },
  getters: {
    getMember(state) {
      return state.member;
    }
  },
  mutations: {
    login(state, payload) {
      state.member = payload;
      console.log("state.member: " + state.member);
    },
    logout(state) {
      state.member = '';
    }
  },
  actions: {
    login: function(context, payload) {
      console.log(context);
      context.commit("login", payload);
    }
  },
  modules: {},
});
