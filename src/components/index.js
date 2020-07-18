import Vue from 'vue'
const context = require.context('./', false, /\.vue$/)
context.keys().forEach(key => {
  const cur = context(key).default
  console.log(cur)
  Vue.component(cur.name, cur)
})
