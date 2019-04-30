import Vue from 'vue';
import App from './App.vue';
import VCalendar from 'v-calendar';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'v-calendar/lib/v-calendar.min.css';

Vue.use(VCalendar);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
