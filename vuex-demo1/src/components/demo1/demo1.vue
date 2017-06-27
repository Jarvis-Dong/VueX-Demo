<template>
  <div>
    <p>demo1</p>

    <p>{{ count }}</p>
    <button @click="increment">add</button>
    <button @click="decrement">minus</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {}
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment', {
          amount: 2
        })
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>

<style lang="stylus">

</style>
