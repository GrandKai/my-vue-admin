<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4" class="side">

        <el-menu default-active="users" :router="true" class="el-menu-vertical-demo">
          <el-menu-item index="users">用户管理</el-menu-item>
          <el-menu-item index="bikes">单车管理</el-menu-item>
          <el-menu-item index="rider">行程管理</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .side {
    padding: 10px;
  }
</style>
<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {
      ElCol,
      ElRow},
    data () {
      return {}
    },

    methods: {},
    mounted () {

    }
  }
</script>
