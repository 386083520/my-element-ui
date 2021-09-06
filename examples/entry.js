import Vue from 'vue';
import entry from './app';
import Element from '../src/index.js';
import VueRouter from 'vue-router';
import MainFooter from './components/footer';
import MainHeader from './components/header';
import demoBlock from './components/demo-block';
import routes from './route.config'

import '../packages/theme-chalk/src/index.scss';
import './assets/styles/common.css';

Vue.use(Element);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
});

new Vue({ // eslint-disable-line
    ...entry,
    router
}).$mount('#app');
