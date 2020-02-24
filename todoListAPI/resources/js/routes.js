import home from './components/home.vue'
import login from './components/auth/login'
import register from './components/auth/register'

export default{
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            meta: {
                requiresAuth:true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                requiresVisitor:true,
            }
        },
        {
            path: '/register',
            name: 'register',
            component: register,
            meta: {
                requiresVisitor:true,
            }
        }
    ],
}