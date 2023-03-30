import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue';
import LoginPage from './views/LoginPage.vue'


const routes = [
    {
        path:       '/',
        component:  Home
    },{
        path:       '/login',
        component:  LoginPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;