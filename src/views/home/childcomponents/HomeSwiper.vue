<template>
  <swiper ref="swiper" v-if="banlists.length">
    <swiper-item v-for="(item, index) in banlists" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoaded">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:"HomeSwiper",
  props:{
    banlists:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoaded:false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    startTimer() {
      this.$refs.swiper && this.$refs.swiper.startTimer()
    },
    stopTimer() {
      this.$refs.swiper && this.$refs.swiper.stopTimer()
    },
    imageLoaded() {
      if (!this.isLoaded) {
        this.$emit('swiperLoaded')
        this.isLoaded = true
      }
    }
  }
}
</script>

<style scoped>

</style>
