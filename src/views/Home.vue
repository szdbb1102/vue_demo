<template>
  <div>
    <div :is="cname"></div>
    <el-button @click="toggle">xx</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      show: false,
      cname: 'el-button'
    }
  },
  methods: {
    toggle () {
      this.cname = this.cname === 'el-button' ? 'el-input' : 'el-button'
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
