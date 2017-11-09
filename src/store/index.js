import Vue from 'vue'
import Vuex from 'vuex'
import SideBar from './modules/SideBar'
import CountStore from '../views/test/store'
// import getters from './getters'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  // 子模块
  modules: {
    SideBar,
    CountStore
  }
  // getters
})

export default store
