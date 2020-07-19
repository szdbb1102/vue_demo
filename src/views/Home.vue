<template>
  <div>
    Home
    <div v-xxloading='show'></div>
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
      show: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = false
    }, 3000)
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
