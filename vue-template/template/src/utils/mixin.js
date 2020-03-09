import Cookies from 'Cookies';
import moment from 'moment';

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          Cookies,
          moment,
        };
      },
    });
  },
};
