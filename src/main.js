import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import './styles/app.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router).use(VueAxios, axios).mount('#app')
