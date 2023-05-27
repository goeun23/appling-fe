import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'preline'

import * as VueRouter from 'vue-router'

import Admin from './views/admin.vue' 
//const About = { template: '<div>About</div>' }


const routes = [
    { path: '/', component: Admin }, 
    { path: '/admin', component: Admin },
   // { path: '/about', component: About },
  ]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.mount('#app')
