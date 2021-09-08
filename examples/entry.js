import Vue from 'vue';
import hljs from 'highlight.js';
import entry from './app';
import Element from '../src/index.js';
import VueRouter from 'vue-router';
import MainFooter from './components/footer';
import MainHeader from './components/header';
import demoBlock from './components/demo-block';
import routes from './route.config'
import 'highlight.js/styles/atelier-seaside-light.css'

import '../packages/theme-chalk/src/index.scss';
import './demo-styles/index.scss';
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
router.afterEach(route => {
    Vue.nextTick(() => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)');
        Array.prototype.forEach.call(blocks, hljs.highlightBlock);
    });
})

new Vue({ // eslint-disable-line
    ...entry,
    router
}).$mount('#app');
