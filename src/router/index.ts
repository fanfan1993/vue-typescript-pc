import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../layout/Layout.vue';
import Index from '../layout/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
      path: '/login',
      name: 'login',
      meta: { title: '系统登录' },
      component: () => import(/* webpackChunkName: "home" */ '@/views/login/index.vue')
    },
    {
      path: '/',
      component: Layout,
      redirect: { path: '/login'},
      children: [
        {
          path: '/home',
          name: 'home',
          meta: { title: '首页', icon: 'fa fa-home' },
          component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
        },
        {
          path: '/bookTable',
          name:'bookTable',
          meta: { title: '图书', icon: 'fa fa-home' },
          component: () => import(/* webpackChunkName: "bookTable" */ '@/views/DataManage/bookTable.vue')
        },
        {
          path: '/tableData',
          name:'tableData',
          meta: { title: '图表', icon: 'fa fa-home' },
          component: () => import(/* webpackChunkName: "tableData" */ '@/views/DataManage/TableData.vue')
        },
        {
          path: '/chartsData',
          name:'chartsData',
          meta: { title: '图表chart', icon: 'fa fa-home' },
          component: () => import(/* webpackChunkName: "chartsData" */ '@/views/DataManage/ChartsData.vue')
        },
        
      ]
    },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to: any, from: any, next: any) => {
  let isLogin = localStorage.getItem('token') ? true : false;
    if (to.path == '/login' || to.path == '/password') {
        next()
    } else {
        isLogin ? next() : next('/login')
    }
  //to and from are Route Object,next() must be called to resolve the hook}
})

export default router
