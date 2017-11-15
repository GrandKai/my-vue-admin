<template>
  <div id="app">

    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
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


    <el-menu background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="2-1">选项3</el-menu-item>
        <el-menu-item index="2-2">选项4</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title1">导航二</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="2-1">选项3</el-menu-item>
          <el-menu-item index="2-2-2">选项4</el-menu-item>

        </el-menu-item-group>

      </el-submenu>

      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>


    <router-view></router-view>
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    /*width: 200px;*/
    height: 100%;
    /*min-height: 400px;*/
  }
</style>

<script type="es6">
  export default {
    data() {
      return {
        isCollapse: false,
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleOpen: function (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose: function (key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect: function (key, keyPath) {
        console.log(key, keyPath)
      }

    },
    mouted() {

    }

  }
</script>
