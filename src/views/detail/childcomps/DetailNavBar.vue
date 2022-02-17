<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="item.id" class="title-item" @click="titleClick(index)"
             :class="{active:index===currentIndex}">{{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
//把封装的导航栏组件拿过来
import NavBar from "components/common/navbar/NavBar";

export default {
  name:"DetailNavBar",
  data() {
    return {

      titles:['商品','参数','评论','推荐'],
      currentIndex:0,

    }
  },
  components:{
    NavBar
  },
  methods:{
    titleClick(index) {
      this.currentIndex = index

      this.$emit('titleClick',index)

    },
    backClick() {

      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display:flex;
  font-weight:500;
  color:black;
}

.title .title-item{
  flex:1;
  margin-left:20px;
  font-size:15px;
}

.active{
  color:var(--color-high-text);
}

.back img{
  margin-top:5px;
}
</style>
