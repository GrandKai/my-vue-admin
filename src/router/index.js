import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import data from '@/views/data'
import home from '@/views/home'
import status from '@/views/status'
import users from '@/views/users'
import rider from '@/views/rider'
import bikes from '@/views/bikes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/data',
      name: 'data',
      component: data,
      children: [
        {
          path: '/users',
          name: 'users',
          component: users
        },
        {
          path: '/bikes',
          name: 'bikes',
          component: bikes
        },
        {
          path: '/rider',
          name: 'rider',
          component: rider
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/status',
      name: 'status',
      component: status
    }
  ]
})
