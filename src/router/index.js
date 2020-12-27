import Vue from 'vue'
import VueRouter from 'vue-router'
import CenterRouter from '../router/Center/center'

Vue.use(VueRouter)

const routes = [
  ...CenterRouter,
  
]

const router = new VueRouter({
  routes
})

export default router
