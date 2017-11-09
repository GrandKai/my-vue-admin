/**
 * 公共 getters 状态
 * @type {{sidebar: (function(*): boolean)}}
 */
const getters = {
  // sidebar: state => state.sidebar.isCollapse,
  countG: state => {
    return state.count
  }
}

export default getters
