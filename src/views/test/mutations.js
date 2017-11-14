import { INCREMENT, INCREMENTX } from './mutation-types'
// mutations 中的函数名都必须是大写，actions 中的函数名必须是小写，以便用来区分
export default {
  [INCREMENT] (state) {
    state.count ++
  },

  [INCREMENTX] (state, x) {
    state.count += x
  }
}
