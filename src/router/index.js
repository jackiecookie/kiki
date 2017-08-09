import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home
      }]
    }
  ]
})
