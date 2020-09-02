export default {
  name: 'abs',
  abstract: true,
  // createElement用法 两个参数 标签名称+标签内包裹的内容
  // 好处在于标签名称可以动态拼
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
