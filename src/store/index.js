import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarOpen: false
  },
  mutations: {
    sideBarOpen(state, data) {
      state.sidebarOpen = data;
    },
    sideBarClosed(state, data) {
      state.sidebarOpen = data;
    }
  },
  actions: {},
  modules: {}
});
