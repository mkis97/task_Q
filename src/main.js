import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import './styles/app.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import store from "@/store/index"

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

application.config.globalProperties.$mixins = {
    getUser(usersArray, userId) {
        if (!usersArray.length || !userId) return ''
        return usersArray.find(user => user.id === userId)?.name
    },

    acronym(str) {
        let res = ''
        let arr = str.split(' ')
        res = arr.map(i => i.charAt(0)).join('')
        return res
    }
}

application.directive('focus', {
    mounted(el) {
        el.querySelector('input').focus()
    }
})

application.use(router).use(VueAxios, axios).use(VueToast).use(store).mount('#app')

