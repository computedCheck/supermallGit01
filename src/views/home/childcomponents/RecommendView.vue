<template>
  <div class="recommend">
    <div v-for="item in reclists" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"RecommendView",
  props:{
    reclists:{
      type:Array,
      default() {
        return []
      }

    }
  }
}
</script>
<style scoped>
.recommend{
  width:100%;
  display:flex;
  text-align:center;
  font-size:12px;
  padding:10px 0px 20px;
  border-bottom:10px solid #eee;
}

.recommend-item{
  flex:1;

}

.recommend-item img{
  width:70px;
  height:70px;
  margin-bottom:10px;
}
</style>
