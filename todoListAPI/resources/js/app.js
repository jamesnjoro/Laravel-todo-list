import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)



import routes from './routes'
import storeData from './store/index'
Vue.component('mainView','./components/mainView')

const router = new VueRouter(
    routes
);


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!storeData.getters.loggedIn){
        next({
          name: 'login',
        })
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (storeData.getters.loggedIn){
        next({
          name: 'home',
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
  })

const app = new Vue({
    el: '#app',
    router,
    store:storeData,
});