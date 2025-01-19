import './assets/main.css';
import route from './Routers';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.use(route);

app.mount('#app');
