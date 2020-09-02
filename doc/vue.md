## tip
1. is属性
   1. 介绍： 任意标签 如果有is属性（string） 则渲染为该组件
      1. 例如： <xx is='el-button'> </xx> 渲染为button
   2. 意义 动态组件
      1. 个人认为 完全可以v-if 也许是因为写起来更简单？
2. render函数
   1. 默认有个参数h 或者叫做createElement
      1. 是个函数- 可以返回一个vnode
   2. 使用技巧
      1. 可以在render函数中访问this.$slots.default等 对vnode进行改造
   3. render函数最终要返回一个vnode
3. 抽象组件
   1. 特点 ： 不会实际渲染 例如 keep-alive router-view组件
   2. abstract:true
   3. 常见写法
      1. 使用render函数
         1. 访问slots  
         2. 改造数据