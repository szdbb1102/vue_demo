export default {
  name: 'abs',
  abstract: true,
  render (createElement) {
    return createElement(
      'h2', // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
