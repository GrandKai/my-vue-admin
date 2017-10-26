import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bikes from '@/views/bikes'
import data from '@/views/data'
import home from '@/views/home'
import rider from '@/views/rider'
import status from '@/views/status'
import users from '@/views/users'

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
