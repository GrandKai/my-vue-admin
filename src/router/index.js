import Vue from 'vue'
import Router from 'vue-router'
import data from '@/views/data'
import home from '@/views/home'
import status from '@/views/status'
import users from '@/views/users'
import bikes from '@/views/bikes'
import login from '@/views/login'
import index from '@/views/index'
import radar from '@/views/charts/radar'
import Layout from '@/views/layout/Layout'
import Count from '@/views/test/Count'
// import SideBar from '@/views/layout/SideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'layout',
      component: Layout
    },
    {
      path: '/count',
      name: 'count',
      component: Count
    },
    {
      path: '/test',
      name: 'index',
      component: index,
      children: [
        {
          path: '/data',
          name: 'data',
          component: data,
          children: [
            {
              path: '/users',
              name: 'users',
              component: users,
              children: [
                {
                  path: '/bikes',
                  name: 'bikes',
                  component: bikes,
                  children: [
                    {
                      path: '/radar',
                      name: 'radar',
                      component: radar
                    }
                  ]
                }
              ]
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
    }

  ]
})
