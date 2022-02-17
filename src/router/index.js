import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home');
const Profile = () => import('../views/profile/Profile');
const Sort = () => import('../views/sort/Sort');
const ShopCart = () => import('../views/shopcart/Shopcart');
const Category = () => import('../views/category/Category');

const Detail = () => import('../views/detail/Detail');
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    //指定默认页面
    {
      path:'',
      redirect:'/home'
    },
    //首页路由
    {
      path:'/home',
      component:Home
    },
    //分类页路由
    {
      path:'/sort',
      component:Sort
    },
    {
      path:'/category',
      component:Category
    },
    //购物车页路由
    {
      path:'/shopcart',
      component:ShopCart
    },
    //主页路由
    {
      path:'/profile',
      component:Profile
    },
    //详情页路由
    {
      path:'/detail:id',
      component:Detail
    },

  ],
  mode:'history'
})
//3.导出router
export default router
