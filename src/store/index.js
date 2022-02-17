import Vue from "vue";
import vuex from "vuex"
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(vuex)
const store = new vuex.Store({
  state:{
    cartList:[]
  },
  mutations,
  getters,
  actions,
  modules:{}
})


export default store
