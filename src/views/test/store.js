import getters from './getters'
import mutations from './mutations'
import { increment, incrementAsync, incrementx } from './actions'
export default {
  state: {
    count: 1
  },
  mutations,
  getters,
  actions: {
    increment,
    incrementAsync,
    incrementx,
    add ({commit}) {
      console.log('执行 store 中 actions 中 add 的方法')
      commit('INCREMENT')
    }
  }
}
