import Vue from 'vue';
import Router from 'vue-router';

import VueAxios from 'vue-axios';
import axios from 'axios';

import LoginComponent from './components/users/LoginComponent.vue';
import BidDueComponent from './components/opportunity/BidDueComponent.vue';
import AROComponent from './components/opportunity/AROComponent.vue';
import AboutComponent from './views/About.vue';

Vue.use(Router);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'about',
      path: '/about',
      component: AboutComponent
    },

    {
      name: 'login',
      path: '/login',
      component: LoginComponent
    },
    {
      name: 'bidDue',
      path: '/bidDue',
      component: BidDueComponent
    },
    {
      name: 'aro',
      path: '/aro',
      component: AROComponent
    },

  ]
});
