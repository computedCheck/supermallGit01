import Toast from "./Toast";
const obj = {};
obj.install = function (vue) {
const toastConstructor = vue.extend(Toast)
const toast = new toastConstructor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  vue.prototype.$toast = toast
}
export default obj
