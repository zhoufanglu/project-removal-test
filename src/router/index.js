import Vue from 'vue'
import VueRouter from 'vue-router'

const login = () => import('@/views/login.vue')
const exports = () => import('@/views/experts/index.vue') //主体路由
const list = () => import('@/views/experts/modules/list.vue') //专家列表
const listDetail = () => import('@/views/experts/modules/list.vue') //专家列表详情
const entryConfig = () => import('@/views/experts/modules/entryConfig.vue') //专家录入配置
const entry = () => import('@/views/experts/modules/entry.vue') //专家录入

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {name: 'login'}
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/experts',
    name: 'experts',
    redirect: {path: '/experts/list'},
    meta: {
      requiresAuth: true,
      keepAlive: false
    },
    component: exports,
    children: [
      {
        path: '/experts/list',
        name: 'list',
        component: list,
        meta: {
          requiresAuth: true,
          keepAlive: false,
          isNeedOperate: false, //是否需要管理员
          cnName: '专家列表'
        },
      },
      {
        path: '/experts/entry',
        name: 'entry',
        component: entry,
        meta: {
          requiresAuth: true,
          keepAlive: false,
          cnName: '专家录入',
          isNeedOperate: true,
        },
      },
      {
        path: '/experts/listDetail',
        component: listDetail,
        name: 'listDetail',
        meta: {
          requiresAuth: true,
          keepAlive: false,
        },
      },
      {
        path: '/experts/entryConfig',
        name: 'entryConfig',
        component: entryConfig,
        meta: {
          requiresAuth: true,
          keepAlive: false,
          cnName: '配置页面',
          isNeedOperate: true,
        },
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
