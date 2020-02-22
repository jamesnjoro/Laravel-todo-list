import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from './components/home.vue'
import login from './components/auth/login'
import register from './components/auth/register'
Vue.component('mainView','./components/mainView')

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: {home,login,register},
    router,
});