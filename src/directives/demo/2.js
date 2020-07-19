import Vue from 'vue'
import cmp from '@/base/loading/index.vue'
const Loading = Vue.extend(cmp)
Vue.directive('xxloading', {
  bind (el, binding, vnode) {
    const instance = new Loading({
      el: document.createElement('div')
    })
    el.appendChild(instance.$el)
    el.instance = instance
    instance.visible = binding.value
  },
  update (el, binding) {
    if (binding.oldValue !== binding.value) {
      el.instance.visible = binding.value
    }
  },
  unbind (el, binding) {
    console.log('unbind')
    const mask = el.instance.$el
    el.removeChild(mask)
    el.instance.$destroy()
    el.instance = undefined
  }
})
