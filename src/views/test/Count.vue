<template>
    <div>
      <p>get count from computed: {{countC}}</p>
      <p>get count from modules import getters: {{countG}}</p>
      <p>get count from modules import getters: {{myFunction(11)}}</p>
      <button @click="add">add+1</button>
      <button @click="increment">+1</button>
      <button @click="incrementx(2)">+2</button>
      <button @click="incrementAsync">异步</button>
      <button @click="sub">sub</button>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import store from './store'
  export default {
    data () {
      return {}
    },

    computed: {
      ...mapGetters(['countG', 'myFunction']),
      countC: () => store.state.count
    },
    methods: {
      ...mapActions(['increment', 'incrementx', 'incrementAsync', 'add']),
      sub () {
        this.$store.dispatch('incrementx', 3)
      }
    },

    /*
    * getters 中必须是一个个纯函数，调它被用的时候会传入一个 state 的引用
    * 1. 函数中的计算只依赖于入参，而非其它的隐藏的信息，比如像 this，如果需要使用其它的隐藏的属性，则应该考虑直接使用计算属性 computed properties
    * 2. 函数内不可以出发事件，或者其它形式的输入等函数副作用
    * 实际上 getters 中的函数相当于计算属性，值会自动缓存的，只有发生变化时，才会重新计算
    * 通过 getters 函数来读取处理值，有个好处是实现 getter 函数在不同组件中的共享
    * （把 getters 导出，多个组件共用同一个 getter 函数，当发生变化之后，所有组件中的值在更新时只需要计算一次）
    **/
    mounted () {
//      console.log('1 直接导入 store 文件直接获取：get state direct from store:', store.state)
//      console.log('3 实际工作中通过 getters 获取')
      console.log('2 通过在 main.js 中注册的全局store获取：get state from this.$store.state.CountStore', this.$store.state.CountStore.getters)
    }
  }
</script>
