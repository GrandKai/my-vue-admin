<template>
    <!--<div class="app-wrapper" :class="{hideSidebar:opened}">-->
    <div class="app-wrapper" :class="{hideSidebar:opened}">
      <nav-bar></nav-bar>
      <div>
        <side-bar class="sidebar-container"></side-bar>
        <app-main class="main-container"></app-main>
      </div>
    </div>
</template>

<script>
  import { NavBar, SideBar, AppMain } from '@/views/layout'

  export default {
    name: 'layout',
    // 父子组件（涉及到数据传递）
    components: {
      SideBar,
      NavBar,
      AppMain
    },
    data () {
      return {}
    },
    computed: {
      opened () {
        return this.$store.state.SideBar.opened
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    /*&.hideSidebar {
      .sidebar-wrapper {
        transform: translate(-140px, 0);
        .sidebar-container {
          transform: translate(132px, 0);
        }
        &:hover {
          transform: translate(0, 0);
          .sidebar-container {
            transform: translate(0, 0);
          }
        }
      }
      .main-container {
        margin-left: 40px;
      }
    }*/
    .sidebar-container {
      float: left;
      width: 10%;
      margin-top: -1px;
      /*width: 180px;*/
      position: fixed;
      /*top: 0;*/
      /*bottom: 0;*/
      /*left: 0;*/
      /*z-index: 1001;*/
      /*overflow: hidden;*/
      /*!*transition: all .28s ease-out;*!*/
      /*!*transition: all 2s ease-out;*!*/
      /*transition: all 2s ease-out;*/
    }
    .main-container {
      float: left;
      width: 90%;
      /*height: 100%;*/
      /*width: 100%;*/
      /*transition: all .28s ease-out;
      transition: all 2s ease-out;*/
      margin-left: 10%;
    }
  }
</style>
