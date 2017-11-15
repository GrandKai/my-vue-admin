<template>
    <div class="app-wrapper" :class="{hideSidebar:opened}">
      <div class="sidebar-wrapper">
        <side-bar class="sidebar-container"></side-bar>
      </div>
      <div class="main-container">
        <nav-bar></nav-bar>
        <app-main></app-main>
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
    &.hideSidebar {
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
    }
    .sidebar-wrapper {
      width: 180px;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
      /*transition: all .28s ease-out;*/
      /*transition: all 2s ease-out;*/
      transition: all 2s ease-out;
    }
    .sidebar-container {
      /*transition: all .28s ease-out;*/
      transition: all 2s ease-out;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -17px;
      overflow-y: scroll;
    }
    .main-container {
      min-height: 100%;
      /*transition: all .28s ease-out;*/
      transition: all 2s ease-out;
      margin-left: 180px;
    }
  }
</style>
