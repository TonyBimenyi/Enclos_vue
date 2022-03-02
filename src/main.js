import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000'
    // axios.defaults.baseURL = 'http://192.168.43.106:8000'

createApp(App).use(store).use(router).mount('#app')