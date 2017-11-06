<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      v-on:select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" :router="true">
      <el-menu-item index="/data">处理中心</el-menu-item>
      <el-menu-item index="data">我的工作台</el-menu-item>

      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false,
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    mouted () {

    }

  }
</script>
