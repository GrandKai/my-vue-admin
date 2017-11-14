import { INCREMENT, INCREMENTX } from './mutation-types'
import { getOnlineCount } from '../../api/api'

// actions 中的函数名必须是小写，mutations 中的函数名都必须是大写，以便用来区分
// 1. 同步例子
export const increment = ({commit}) => {
  console.log('执行 actions.js 文件中的 increment 方法', INCREMENT)
  commit(INCREMENT)
}

// 2. 异步例子
export const incrementAsync = ({commit}) => {
  getOnlineCount((rlt) => {
    commit(INCREMENT)
  })
}

// 3. 带有参数例子
export const incrementx = ({commit}, x) => {
  console.log('执行 actions.js 文件中的 incrementx 方法', '入参x:' + x, INCREMENTX)
  commit(INCREMENTX, x)
}
