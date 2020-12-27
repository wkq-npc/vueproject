import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from "./routes/center"
import Msg from "./routes/message"
import course from "./routes/Course"
import BuyCourse from "../views/buyCourse/buyCourse.vue"
import Location from "../views/location.vue"
import search from "../views/Search.vue"
import LogReg from "./routes/logreg"
Vue.use(VueRouter)

const routes = [
  ...course,
  ...Center,
  ...Msg,
  ...LogReg,
  {
    path:"/location",
    component:Location
  },
  {
    path:"/search",
    component:search
  },
    // 去支付
    {
      path: '/buy',
      component: BuyCourse
    },
  {
    path:"/",
    redirect:"/course"
  }
]
const router = new VueRouter({
  mode: "history",
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  let toarr=['/center']
  if (toarr.includes(to.path) && !localStorage.getItem("jwt")) {
    // 登录去
    router.push({ path: "/login", query: { toUrl: to.fullPath } });
} else {
    // 不用登录
    next();
}
})
export default router
