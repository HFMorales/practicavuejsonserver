import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'


import router from './router'

// import BootstrapVue from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// createApp(App).use(BootstrapVue)
// createApp(App).use(IconsPlugin)

createApp(App).use(router).mount('#app')
