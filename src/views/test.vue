<template>
  <div>
    <abs>
      <xpost>
        <template v-slot:top='scope'>
          {{scope.xx}}
        </template>
        8989
      </xpost>
      <xpost>
        <template v-slot:top='scope'>
          {{scope.xx}}
        </template>
        8989
      </xpost>
    </abs>
  </div>
</template>

<script>
import xpost from '@/components/xpost'
import abs from '@/components/abs'
export default {
  name: 'test',
  components: {
    xpost, abs
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
