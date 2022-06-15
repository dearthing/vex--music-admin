import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from './router/index.js'
import store from './store/index.js'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import './permission.js'

const myApp = createApp(App)

myApp.use(router);
myApp.use(store)
myApp.use(Quasar, {
    plugins: {},
})

myApp.mount('#app')
