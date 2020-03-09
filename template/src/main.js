import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
<%_ if (options.ui === 'element-ui') { _%>
import ElementUI from 'ElementUI';
<%_ } _%>
<%_ if (options.ui === 'iview') { _%>
import iView from 'iView';
<%_ } _%>
import mixin from './utils/mixin';

Vue.config.productionTip = false;
Vue.use(mixin);
<%_ if (options.ui === 'element-ui') { _%>
Vue.use(ElementUI);
<%_ } _%>
<%_ if (options.ui === 'iview') { _%>
Vue.use(iView);
<%_ } _%>

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
