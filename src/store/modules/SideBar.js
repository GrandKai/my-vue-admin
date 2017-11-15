// 定义 actions 常量
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

const SideBar = {
  state: {
    opened: false
  },
  mutations: {
    [TOGGLE_SIDEBAR]: (state) => {
      console.log('执行 mutations 修改 sidebar 状态', !state.opened)
      state.opened = !state.opened
    }
  },
  actions: {
    toggleSideBar: ({commit}) => {
      console.log('执行 actions toggleSideBar')
      commit(TOGGLE_SIDEBAR)
    }
  }
}
export default SideBar
