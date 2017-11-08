import Vue from 'vue'
import Vuex from 'vuex'
import SideBar from './SideBar'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 1
  },
  // 子模块
  modules: {
    SideBar
  }
})

export default store
