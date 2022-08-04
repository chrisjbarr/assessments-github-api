import App from './App.vue';
import { createApp } from 'vue';
import { VueQueryPlugin } from 'vue-query';

const app = createApp(App);

app.use(VueQueryPlugin);
app.mount('#app');
