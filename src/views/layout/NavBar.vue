<template>
  <div>
    <el-menu
      :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
      background-color="#545c64" text-color="#fff"
      active-text-color="#ffd04b" :router="true">
      <el-menu-item index="/data">处理中心</el-menu-item>
      <el-menu-item index="data">我的工作台</el-menu-item>

      <button @click="toggleSideBar">折叠</button>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      toggleSideBar (key, keyPath) {
        console.log(key, keyPath)
        this.$store.dispatch('toggleSideBar')
      }
    },
    mouted () {

    }

  }
</script>
