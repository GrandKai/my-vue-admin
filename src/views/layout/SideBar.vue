<template>
  <div>
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

  </div>
</template>

<script type='es6'>
    export default {
//        data() {
//            return {
//              isCollapse: true,
//              activeIndex: '1',
//              activeIndex2: '1'
//            }
//        },
        data: () => ({
            isCollapse: true,
            activeIndex: '1',
            activeIndex2: '1'
        }),
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          }

        },
        mouted() {

        }

    }
</script>
