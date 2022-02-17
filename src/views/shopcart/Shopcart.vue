<template>
  <div class="shopCart">
    <nav-bar class="nav-bar">
      <div slot="center" class="shopcenter">购物车({{ abc }})</div>
    </nav-bar>
    <shop-cart-list></shop-cart-list>
    <shop-cart-bottom-bar></shop-cart-bottom-bar>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import shopCartBottomBar from "./childComps/shopCartBottomBar";
import shopCartList from "./childComps/shopCartList";
import {mapGetters} from 'vuex'

export default {
  name:"shopcart",
  components:{
    NavBar,
    shopCartList,
    shopCartBottomBar
  },
  computed:{
    ...mapGetters({
      abc:'shopNum'
    })
  }
}
</script>

<style scoped>
.nav-bar{
  background-color:var(--color-tint);
}

.shopcenter{
  font-size:18px;
  color:#fff;
}

.shopCart{
  height:100vh;
}
</style>
