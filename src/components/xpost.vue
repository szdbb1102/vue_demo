<template>
  <div>
    <p>1</p>
    <slot
      name="top"
      xx='title'
    ></slot>
    <p>2</p>
    <slot></slot>
    <p>3</p>
    <slot name="bottom"></slot>
    <p>4</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xpost',
  components: {

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
