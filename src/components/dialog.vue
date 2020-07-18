<template>
  <el-dialog
    :visible.sync="show"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <!--其他代码不变-->
  </el-dialog>
</template>

<script>
export default {
  name: 'xx-dialog',
  components: {

  },
  props: {
    visible: Boolean
  },
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
</style>
