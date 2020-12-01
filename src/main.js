import Vue from 'vue';
import VueMeta from 'vue-meta';
import App from './App.vue';
import PortalVue from 'portal-vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(PortalVue);
Vue.use(VueMeta);
new Vue({
  metaInfo: {
    titleTemplate: title => (title ? `${title} - SKCL` : 'SKCL')
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
