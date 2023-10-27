import HelloWorldVue from "src/components/pages/HelloWorld.vue"
import Home from "src/components/pages/Home.vue"
import * as VueRouter from "vue-router"

export const ROOT = {
  runtime: "/runtime/vue"
} as const

const routes: VueRouter.RouteRecordRaw[] = [
  { path: `${ROOT.runtime}`, component: Home },
  { path: `${ROOT.runtime}/about`, component: HelloWorldVue },
  { path: `/:pathMatch(.*)*`, component: Home },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

export default router