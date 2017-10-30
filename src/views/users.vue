<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4" class="side">

        <el-menu default-active="bikes" :router="true" class="el-menu-vertical-demo">
          <el-menu-item index="bikes">单车管理</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },

    methods: {},
    mounted () {

    }
  }
</script>
