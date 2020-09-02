<template>
  <div>
    <xpost>
      <template v-slot:top='scope'>
        {{scope.xx}}
      </template>
      8989
    </xpost>
  </div>
</template>

<script>
import xpost from '@/components/xpost'
export default {
  name: 'test',
  components: {
    xpost
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
