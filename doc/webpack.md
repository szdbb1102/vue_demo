## require.context
1. 作用：
   1. 自动扫描指定目录下的所有文件
      1. 可配置
         1. 是否递归
         2. 文件正则
2. 语法
   1. 获取
      1. const context = require.context('./' , false,/\.vue$/)
      2. 返回一个函数
         1. 函数有当前所有匹配文件的name
            1. context.keys()获取
         2. 函数入参为任意一个文件name
            1. 执行返回该文件
   2. 使用
      1. context.keys().forEach(key=>{ console.log(context(key).default)})
