import {
  ADD_COUNT,
  ADD_CART
} from "./mutation-types";

export default {
  addCart(context,payload) {
    return new Promise(((resolve,reject) => {
      let oldProduct = null;
      for (let item of context.state.cartList) {
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      }
      ;
      if (oldProduct) {

        context.commit(ADD_COUNT,oldProduct)
        resolve('当前商品数量是:' + oldProduct.count + '件')
      } else {

        context.commit(ADD_CART,payload)
        payload.count = 1
        resolve('添加商品成功')
      }

    }))

  }
}
