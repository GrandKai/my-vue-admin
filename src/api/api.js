import axios from 'axios'
import { Notification } from 'element-ui'
import router from '../router'

const baseUrl = 'https://wx.duyoucai.com/api'

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  let message = ''
  switch (error.response.status) {
    case 401:
      message = '授权失败'
      router.push({path: '/login'})
      break
  }
  Notification({
    title: '错误',
    type: 'error',
    message: message
  })
  return Promise.reject(error)
})
