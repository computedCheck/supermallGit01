<template>

  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
import {debounce} from "common/utils";

export default {
  name:"Scroll",
  data() {
    return {
      /*保存better-scroll滚动的设置*/
      scroll:null,

    }
  },
  mounted() {

    this.scroll = new BScroll(this.$refs.wrapper,{

      /*   //要想滚动里面的组件能够点击必须设置*/
      click:true,//tab-control里面的分类才可以点击
      /*backtop默认是隐藏的只有滚动到一定高度才显示
       *所以要监听scroll滚动好的位置
       *
       * */
      /*scroll这个滚动既然是公共组件那么就要适应各个组件里面的属性变化
       *有的组件下面 probeType属性是需要的要监听实时位置变化
       * 有的组件下面不需要这个 probeType属性
       * 你现在把probeType属性写到scroll封装组件里面那所有引用它的组件都要监听
       *
       * */
      //这个要不要由外界动态传值决定
      probeType:this.probeType,
      /*并不是所有用到better-scroll里面的组件页面都需要上拉加载功能
       *  pullUpLoad:true 后面不能写true or false这些固定的值
       * 而是应该由不同的组件外界传入决定上拉加载要不要
       *
       * */

      /*做上拉加载功能，首先第一步就是你的页面要滚动到底部才做上拉加载
       * 那什么时候滚动到底部
       * 就是在better-scroll框架里面设置 pullUpLoad:true属性就是上拉加载允许
       * 滚动到底部
       * */

      pullUpLoad:this.pullUpLoad
    })

    this.scroll.on('scroll',(position) => {

      this.$emit('scroll',position)
    })
    if (this.pullUpLoad) {

      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')

      })

    }


  },

  props:{

    probeType:{
      type:Number,
      default:0
    },

    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },

  created() {
    const refresh = debounce(this.refresh,5000)
    this.$bus.$on('itemImageLoad',() => {

      refresh()

    })
  },
  methods:{
    scrollTo(x,y,time = 300) {
      this.scroll.scrollTo(x,y,time = 300)

    },
    finishPullUp() {

      this.scroll.finishPullUp()
    },
    refresh() {


      this.scroll.refresh()

    },


  },

}
</script>

<style scoped>

</style>
