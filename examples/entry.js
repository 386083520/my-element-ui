import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import MainFooter from './components/footer';
import MainHeader from './components/header';
import routes from './route.config'
import './assets/styles/common.css';

Vue.use(VueRouter);
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
