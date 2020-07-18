<template>
  <div>
    <el-dialog :visible.sync='show'></el-dialog>
    <el-button @click="show=!show">xx</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      show: false
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
</style>
