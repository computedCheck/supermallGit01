<template>
  <div class="shop-cart-list">
    <scroll class="contentHeight" ref="scroll">
      <shop-cart-list-item v-for="(item,index) in cartList" :product="item" :key="index"></shop-cart-list-item>
    </scroll>
  </div>


</template>

<script>

import Scroll from "components/common/scroll/Scroll";
import shopCartListItem from "./shopCartListItem";
import {mapGetters} from 'vuex'

export default {
  name:"shopCartList",
  components:{
    Scroll,
    shopCartListItem
  },
  computed:{
    ...mapGetters(['cartList'])
  },

  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>

.shop-cart-list{
  width:100%;
  height:calc(100% - 44px - 49px - 40px);
}

.contentHeight{
  height:100%;
  overflow:hidden;
}
</style>
