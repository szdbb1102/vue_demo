export default {
  name: 'abs',
  abstract: true,
  render () {
    console.log(this.$slots)
    const vnode = this.$slots.default[0]
    return vnode
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
