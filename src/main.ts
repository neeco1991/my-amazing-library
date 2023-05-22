import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// @ts-ignore
import OpenLayersMap from 'vue3-openlayers';
import 'vue3-openlayers/dist/vue3-openlayers.css';

const app = createApp(App);
app.use(OpenLayersMap);

app.mount('#app');
