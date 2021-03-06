// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import router from './router';
import 'font-awesome/css/font-awesome.css';  
import './theme/default.styl';
import VeeValidate from 'vee-validate';
import Truncate from 'lodash.truncate';
import { store } from './store';
import firebase from 'firebase';
import { config } from './firebaseConfig';
import axios from 'axios';
import { axiosRequestConfig } from './configs';
import ws from './WebServices';

import jQuery from 'jQuery';

window.jQuery = jQuery;

Vue.prototype.$axios = axios.create(axiosRequestConfig);
Vue.prototype.$ws = ws;

Vue.config.productionTip = false;
// Helpers
// Global filters
Vue.filter('truncate', Truncate);
Vue.use(VeeValidate, { fieldsBagName: 'formFields' });
Vue.use(Vuetify, {
  // theme: {
  //   primary: colors.indigo.base, // #E53935
  //   secondary: colors.indigo.lighten4, // #FFCDD2
  //   accent: colors.indigo.base // #3F51B5
  // },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {
      },
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: '',
    }
  }
});
// Bootstrap application components

axios.interceptors.request.use(function (config) {
  // assume your access token is stored in local storage
  // (it should really be somewhere more secure but I digress for simplicity)
  let token = localStorage.getItem('access_token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${userToken}`
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created () {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/login');
      }
    });
  },
  template: '<App/>',
});
