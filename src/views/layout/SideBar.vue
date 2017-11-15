<template>
  <div>
    <el-menu background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             class="el-menu-vertical-demo" :collapse="sidebar.opened">

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
        </template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
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

  </div>
</template>
<style>
  /*.el-menu-vertical-demo:not(.el-menu--collapse) {*/
  .el-menu-vertical-demo {
    /*width: 200px;*/
    height: 100%;
    /*min-height: 400px;*/
  }
</style>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data: () => ({
      activeIndex: '1',
      activeIndex2: '1'
    }),
    computed: {
      ...mapGetters(['sidebar'])
    }
  }
</script>
