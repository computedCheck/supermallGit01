<template>
  <div id="home">

    <nav-bar class="navbar">
      <div slot="center">购物街</div>
    </nav-bar>

    <tab-control :titles="['流行','新款','精选']" @tabClick="FTabClick" ref="tabControl1" class="tabTop"
                 :class="{tabShow:isTabShow}">

    </tab-control>

    <scroll class="contentHeight" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentscroll"
            @pullingUp="loadMore">
      <home-swiper ref="hSwiper" :banlists="banlists" @swiperLoaded="swiperLoaded"></home-swiper>

      <recommend-view :reclists="reclists"></recommend-view>

      <feature-view></feature-view>

      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="FTabClick" ref="tabControl2"></tab-control>

      <goods-list :goods="showGoods"></goods-list>


    </scroll>
    <back-top @click.native="backClick" v-show="isShow" class="back-top"></back-top>

  </div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from "components/content/tabcontrol/TabControl";
import BackTop from "components/content/backtop/BackTop";
import GoodsList from "components/content/goods/GoodsList";
import HomeSwiper from "./childcomponents/HomeSwiper";
import RecommendView from "./childcomponents/RecommendView";
import FeatureView from "./childcomponents/FeatureView";
import Scroll from "components/common/scroll/Scroll";
import {getHomeMultiData,getHomeGoods} from 'network/home';
import {BackTopMixin} from "../../common/minxin";

export default {
  name:"home",
  components:{
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banlists:[],
      reclists:[],
      goods:{
        'pop':{page:0,lists:[]},
        'new':{page:0,lists:[]},
        'sell':{page:0,lists:[]},
      },
      currentType:'pop',
      isShow:false,
      tabOffsetTop:0,
      isTabShow:false,
      saveY:0,
      itemListener:null
    }
  },
  created() {
    this.getHomeMultiData()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mixins:[BackTopMixin],
  methods:{
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        console.log(res);
        this.banlists = res.data.data.banner.list;
        this.reclists = res.data.data.recommend.list;
      })
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        console.log(res);
        this.goods[type].lists.push(...res.data.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      })


    },

    FTabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }

      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    contentscroll(position) {
      this.isTabShow = this.tabOffsetTop < (-position.y)
      this.demo(position)
    },
    swiperLoaded() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;

    },
    loadMore() {
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    }
  },
  computed:{
    showGoods() {
      return this.goods[this.currentType].lists
    },

  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {

    this.saveY = this.$refs.scroll.scroll.y

    this.$bus.$off('itemImageLoad',)

  }
}
</script>

<style scoped>

#home{
  height:100vh;
  position:relative;
}

.swiper{
  width:100%;
  height:300px;
}

#home .navbar{
  background:var(--color-tint);
}

.contentHeight{

  overflow:hidden;
  position:absolute;
  top:44px;
  bottom:49px;
  left:0;
  right:0;
}

.tabTop{
  position:relative;
  z-index:9;
  display:none;
}

.tabShow{
  display:flex;
}

.back-top{
  position:fixed;
  right:10px;
  bottom:60px;
}
</style>
