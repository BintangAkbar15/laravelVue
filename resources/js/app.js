import './bootstrap';
import { createApp } from 'vue';
import counter from './counter/counter.vue';

const app = createApp();
app.component('counter', counter);
app.mount('#app');
