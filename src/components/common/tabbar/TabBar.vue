<template>
  <div id="tabBar" class="tabBar">
    <slot>
      <tab-bar-item path="/home" activeColor="deeppink">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-iconActive">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deeppink">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-iconActive">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="deeppink">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-iconActive">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-iconActive">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </slot>
  </div>
</template>
<script>
import TabBarItem from "./TabBarItem";

export default {
  name:"TabBar",
  components:{
    TabBarItem,
  },
}
</script>

<style scoped>
#tabBar{
  width:100%;
  display:flex;
  background:#dbdbdb;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  box-shadow:0px -1px 1px rgba(100, 100, 100, .1);
}
</style>
