
import Vue from 'vue';
import VueRouter from 'vue-router';
import Routes from './routes.js';
import App from './App.vue';
import Chart from 'chart.js';
import './bootstrap';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import 'font-awesome/css/font-awesome.css';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VeeValidate);

require('bootstrap/dist/css/bootstrap.min.css');


const router = new VueRouter(Routes);
window.Vue = require('vue');

const app = new Vue({
    router,
    render: h =>h(App),
}).$mount('#app');
