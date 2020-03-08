import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import mixin from './utils/mixin';

Vue.config.productionTip = false;
Vue.use(mixin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
