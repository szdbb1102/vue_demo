## 最新语法
1. 本质
   1. 父组件留空子
      1. 由子组件自定义
2. 使用 需要两边搭配
   1. 父组件定义slot标签
      1. 可以绑定name
         1. name默认是default
   2. 子组件使用 需要绑定在template标签上 v-slot:name='scope'
      1. name对应具体的slot
      2. scope为父组件向slot暴露的数据
         1. 使用方法 
            1. 父组件<slot name="top" xx='title'></slot>
            2. 子组件 <template v-slot:top='scope'>{{scope.xx}}</template>
               1. 也可以简写 #top='scope'
               2. 也可以动态写（vue2.6.0）
                  1. v-slot:[dynamicSlotName]
         2. 旧语法
            1. 子组件slot-scope='scope'
               1. 也可以解构 slot-scope='{scope}'