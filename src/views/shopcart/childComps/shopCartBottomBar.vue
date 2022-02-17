<template>
  <div class="bottom-bar">
    <div class="check-area">
      <check-button class="check-button" :isChecked="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>

    <div class="price">
      合计:{{ totalPrice }}
    </div>

    <div class="calculate" @click="showTotalPrice">
      去计算({{ shopNum1.length }})
    </div>
  </div>
</template>

<script>

import CheckButton from "components/content/checkButton/CheckButton";

import {mapGetters} from 'vuex'

export default {
  name:"shopCartBottomBar",

  components:{
    CheckButton
  },
  computed:{
    totalPrice() {

      return '￥' + this.cartList.filter((item) => {
        return item.checked
      }).reduce((preValue,item) => {

        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    ...mapGetters(['cartList','shopNum']),

    shopNum1() {
      return this.cartList.filter(item => {
        return item.checked
      })
    },

    isSelectAll() {
      return this.cartList.length === 0? false:
        !this.cartList.find(item => !item.checked)
    }

  },
  methods:{

    showTotalPrice() {
      if (this.isSelectAll) {
        this.$toast.ToastPluginShow('合计总价:' + this.totalPrice)
      } else {
        this.$toast.ToastPluginShow('请选择商品后再操作')
      }

    },

    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }

    }
  }
}
</script>


<style scoped>
.bottom-bar{
  position:relative;

  display:flex;
  /*由于列表里面减去40px这个里面bottom:40px不用设置*/
  z-index:30;
  height:40px;
  line-height:40px;
  background-color:#dfe2e3;

}

.bottom-bar .check-area{
  display:flex;
  margin-left:10px;
  align-items:center;

}

.bottom-bar .check-button{
  width:20px;
  height:20px;
  line-height:20px;
  margin-right:5px;
}

.price{
  margin-left:30px;
}

.calculate{
  width:80px;
  position:absolute;
  right:0px;
  background-color:red;
  color:white;
  text-align:center;
}
</style>
