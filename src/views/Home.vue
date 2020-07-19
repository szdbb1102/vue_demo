<template>
  <div>
    Home
    <el-button v-xx.a='a' @click="test">xx</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      a: { b: 1 },
      xx: 1
    }
  },
  beforeMount () {
    console.log(1)
  },
  mounted () {
    console.log(2)
  },
  updated () {
    console.log('update')
  },
  methods: {
    test () {
      this.$destroy()
      console.log(this.$data)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
