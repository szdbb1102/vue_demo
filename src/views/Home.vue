<template>
  <div>
    <div :is="cname"></div>
    <el-input
      @hook:updated="test"
      v-model="xx"
    ></el-input>
    <el-button @click="toggle">xx</el-button>
  </div>
</template>

<script>
import Loading from '@/base/loading/index.js'
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      xx: '1',
      show: false,
      cname: 'el-button'
    }
  },
  mounted () {
    const loading = Loading({ text: '正在加载。。。' })
    // 三秒钟后关闭
    setTimeout(() => {
      loading.close()
    }, 3000)
    // 通过hook监听组件销毁钩子函数，并取消监听事件
    this.$on('hook:updated', () => { console.log('update') })
    this.$once('hook:beforeDestroy', () => {
      console.log('des')
    })
  },
  methods: {
    test () { console.log('test') },
    toggle () {
      this.cname = this.cname === 'el-button' ? 'el-input' : 'el-button'
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
