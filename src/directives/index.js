import Vue from 'vue'
Vue.directive('xx', {
  bind (el, binding, vnode) {
    console.log(binding, binding.arg)
  }
})
