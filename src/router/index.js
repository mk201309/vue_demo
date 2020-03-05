import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: 'index'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/index',    // name: 'Layout',
    component: () => import(/* webpackChunkName: "index" */ '@/components/layout'),
    children: [
      {
        path: '',
        component: () => import('@/components/page/Facilisis.vue'),
        name: 'Index',
      }
    ]
  },
  {
    path: '/primary',
    // name: 'Primary',
    component: () => import(/* webpackChunkName: "primary" */ '@/components/layout'),
    children: [
      {
        path: '',
        component: () => import('@/components/page/Primary.vue'),
        name: 'Primary',
      }
    ]
  },
  {
    path: '/todolist',
    // name: 'TodoList',
    component: () => import(/* webpackChunkName: "todolist" */ '@/components/layout'),
    children: [
      {
        path: '',
        component: () => import('@/components/page/TodoList.vue'),
        name: 'TodoList',
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
