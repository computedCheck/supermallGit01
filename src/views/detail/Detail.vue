<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="DetailScrollClick" ref="detailNavBar"></detail-nav-bar>
    <scroll class="DetailContent" ref="scroll" @scroll="detailNavSwitch" :probe-type="3">
      <detail-swiper :swiperData="swiperData"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo" ref="paramInfo"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="commentInfo"></detail-comment-info>
      <goods-list :goods="recommend" ref="recommendInfo"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick()" v-show="isShow">
      <img src="~assets/img/common/top.png" alt="">
    </back-top>
  </div>
</template>

<script>
import DetailSwiper from "./childcomps/DetailSwiper";
import DetailBaseInfo from "./childcomps/DetailBaseInfo";
import DetailShopInfo from "./childcomps/DetailShopInfo";
import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";
import DetailParamInfo from "./childcomps/DetailParamInfo";
import DetailCommentInfo from "./childcomps/DetailCommentInfo";
import DetailNavBar from "./childcomps/DetailNavBar";
import DetailBottomBar from "./childcomps/DetailBottomBar";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "../../components/content/backtop/BackTop";
import GoodsList from "components/content/goods/GoodsList";
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail"
import {debounce} from "../../common/utils";
import {BackTopMixin} from "../../common/minxin";
import {BACKTOP_DISTANCE} from "../../common/const";
import {mapActions} from 'vuex'

export default {
  name:"Detail",
  components:{
    DetailNavBar,
    DetailBottomBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      detail:['de','ta','il'],
      iid:null,
      swiperData:[],
      res:null,
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
      themeTopYS:[],
      getThemeTopY:null,
      currentIndex:0,
    }
  },
  mixins:[BackTopMixin],
  created() {
    this.iid = this.$route.params.id
    this.getDetail()
    this.getRecommend()
    this.getThemeTopY = debounce(() => {
      this.themeTopYS.push(0)
      this.themeTopYS.push(this.$refs.paramInfo.$el.offsetTop)
      this.themeTopYS.push(this.$refs.commentInfo.$el.offsetTop)
      this.themeTopYS.push(this.$refs.recommendInfo.$el.offsetTop)
      this.themeTopYS.push(Number.MAX_VALUE)
    },100)
  },
  mounted() {
    this.detail1 = () => {
      console.log("detail里面mounted方法");
    }
  },
  updated() {
  },
  methods:{
    ...mapActions(['addCart']),
    getDetail() {
      getDetail(this.iid).then(res => {

        console.log(res);
        this.res = res
        this.swiperData = res.data.result.itemInfo.topImages
        console.log(this.swiperData);

        const date = this.res.data.result
        this.goods = new Goods(date.itemInfo,date.columns,date.shopInfo.services)

        this.shop = new Shop(date.shopInfo)

        this.detailInfo = date.detailInfo

        this.paramInfo = new GoodsParam(date.itemParams.info,date.itemParams.rule)

        if (date.rate.list) {

          this.commentInfo = date.rate.list[0]

        }

})
    },
    getRecommend() {
      getRecommend().then(res => {
        console.log(res);
        this.recommend = res.data.data.list
      })
    },
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },

    DetailScrollClick(index) {
 this.$refs.scroll.scrollTo(0,-this.themeTopYS[index],100)

    },

    detailNavSwitch(position) {

      const positionY = -(position.y)

      let length = this.themeTopYS.length

      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTopYS[i]
          && positionY < this.themeTopYS[i + 1])) {
          this.currentIndex = i
          this.$refs.detailNavBar.currentIndex = this.currentIndex
        }
      }
    },

    addToCart() {
      const product = {}
      product.image = this.swiperData[0];
      product.comment = this.goods.desc;
      product.title = this.goods.title;
      product.price = this.goods.realPrice;
      product.image = this.swiperData[0];
      product.count = this.goods.count;
      product.iid = this.iid
      this.addCart(product).then(result => {
        this.$toast.ToastPluginShow(result,1000)
      })


    }

  }
}
</script>

<style scoped>

#detail{
  position:relative;
  z-index:10;

  background-color:#fff;

  height:100vh;
}

.DetailContent{
  height:calc(100vh - 44px - 49px);
}

.detail-nav{
  position:relative;
  z-index:12;
  background-color:#fff;
}
</style>
