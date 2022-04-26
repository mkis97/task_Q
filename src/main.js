import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import './styles/app.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const application = createApp(App)

application.config.globalProperties.$filters = {
    capitalize(val) {
        if (val) {
            return val.charAt(0).toUpperCase() + val.slice(1)
        } else {
            return ''
        }
    }
}

application.use(router).use(VueAxios, axios).mount('#app')

