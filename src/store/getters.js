/**
 * 公共 getters 状态
 * @type {{sidebar: (function(*): boolean)}}
 */
const getters = {
  // sidebar: (state, getters, rootState, rootGetters) => {}
  sidebar: (state, getters, rootState, rootGetters) => {
    console.log('first param', state)
    console.log('second param', getters)
    console.log('third param', rootState)
    console.log('fouth param', rootGetters)
    return state.SideBar
  }
}

export default getters
