const getters = {
  countG: (state, getters, rootState, rootGetters) => {
    // console.log('---------------------------')
    // console.log('从 modules 获取值', state.count)
    // console.log('getters', getters)
    // console.log('rootState', rootState)
    // console.log('从 根节点 获取值', rootState.count)
    // console.log('rootGetters', rootGetters)
    // console.log('---------------------------')
    return state.count
  },
  myFunction: (state) => (id) => {
    return '自定义函数' + id
  }
}
export default getters
