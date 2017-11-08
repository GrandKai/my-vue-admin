// 定义 actions 常量
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

const SideBar = {
  state: {
    sidebar: {
      isCollapse: false
    }
  },
  mutations: {
    [TOGGLE_SIDEBAR]: (state) => {
      return !state.isCollapse.isCollapse
    }
  },
  actions: {
    toggleSideBar: ({dispatch}) => {
      dispatch([TOGGLE_SIDEBAR])
    }
  }
}
export default SideBar
