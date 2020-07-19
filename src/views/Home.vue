<template>
  <div>
    Home
    <el-button @click="test">xx</el-button>
    {{a}}
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      xx: 1
    }
  },
  beforeMount () {
    console.log(this.$el, this.$data)
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
