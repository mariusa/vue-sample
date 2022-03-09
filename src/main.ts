import { createApp } from 'vue'
import VueSidebarMenu from 'vue-sidebar-menu' // https://github.com/yaminncco/vue-sidebar-menu
import "./style.scss"
import "vue-sidebar-menu/src/scss/vue-sidebar-menu.scss" 
import App from './App.vue'

const routes = [
  { path: '/', component: App },
  { path: '/about', component: App },
]

import { createRouter, createWebHashHistory } from 'vue-router'
let router = createRouter({
    history: createWebHashHistory(),
    routes
})

let app = createApp(App)
app.use(router)
app.use(VueSidebarMenu)
app.mount('#app')
