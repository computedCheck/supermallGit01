<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-iconActive"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name:"TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'blue'
    }
  },
  data() {

    return {}
  },
  computed:{
    isActive() {

      return this.$route.path.indexOf(this.path) !== -1;

    },

    activeStyle() {

      return this.isActive? {color:this.activeColor}: {}
    }
  },
  methods:{
    itemClick() {

      console.log('itemClick');

      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
.tabbar-item{
  flex:1;
  text-align:center;
  height:49px;
  font-size:13.6px;
}

.tabbar-item img{
  width:25px;
  height:25px;
  margin-top:3px;
  vertical-align:middle;
  margin-bottom:2px;
}
</style>
