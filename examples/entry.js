import Vue from 'vue';
import entry from './app.vue';
console.log('gsdentry', entry)
new Vue({ // eslint-disable-line
    ...entry
}).$mount('#app');
