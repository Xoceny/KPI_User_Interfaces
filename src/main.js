import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/main.css'
import Axios from 'axios'
import store from './store/store.js'

const app = createApp(App)
app.use(router, store)
app.mount('#app')
