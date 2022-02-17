<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <tab-bar></tab-bar>
    <icon></icon>
    <svg-icon></svg-icon>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar";

import Icon from "./components/content/Icon/Icon";
import SvgIcon from 'components/content/Icon/svg.vue'

export default {
  name:'app',
  components:{
    TabBar,
    Icon,
    SvgIcon
  }
}
</script>
<style>
@import "assets/css/base.css";
</style>
