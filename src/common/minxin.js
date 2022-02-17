import BackTop from "components/content/backtop/BackTop"
import {POP,NEW,SELL} from "./const";
import {BACKTOP_DISTANCE} from "./const";
export const BackTopMixin = {
  data() {
    return {
      isShow:true,
 }
  },

  components:{
    BackTop
  },

  methods:{
    backClick() {

      this.$refs.scroll.scrollTo(0,0,300)
    },
    demo(position) {
      // 1.监听backTop的显示
      this.isShow = position.y < -BACKTOP_DISTANCE
    },
  },

}
export const tabControlMixin = {
  data:function () {
    return {
      currentType:POP
    }
  },
  methods:{
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}

