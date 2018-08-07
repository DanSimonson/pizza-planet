import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }

})

/* global guard
router.beforeEach((to, from, next) => {
  //alert('navigation triggered');
  //next();
  //console.log(to)
  if(to.path === "/menu") {
    next();
  }else{
    next(false)
  }
})*/

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
