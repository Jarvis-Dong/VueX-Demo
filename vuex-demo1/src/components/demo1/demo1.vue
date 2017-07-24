<template>
  <div>
    <p>demo1</p>
    <p>{{ count }}</p>
    {{foo}}
    <button @click="increment">add</button>
    <button @click="decrement">minus</button>
    <my-component v-on:incrementInFather="incrementTotal" :foo.sync="bar"></my-component>
    <table>
      {{total}}
      {{propMessage}}
      <my-component v-on:incrementInFather="incrementTotal"></my-component>
      <tr is="my-component" v-on:incrementInFather="incrementTotal">
      </tr>
    </table>
    <currency-input v-model="price"></currency-input>
  </div>
</template>

<script type="text/ecmascript-6">
  var demoChild = {
    template: '<input type="text" v-model="bar">',
    data () {
      return {
        counter: 0,
        bar: 0
      }
    },
    methods: {
      increment () {
        this.counter += 1
        this.$emit('incrementInFather')
      }
    }

  }

  /* eslint-disable */

  var currencyInput = {
    template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
      >\
    </span>\
  ',
    /* eslint-enable */
    props: ['value'],
    methods: {
      // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
      updateValue: function (value) {
        var formattedValue = value
        // 删除两侧的空格符
          .trim()
          // 保留 2 小数位
          .slice(
            0,
            value.indexOf('.') === -1
              ? value.length
              : value.indexOf('.') + 3
          )
        // 如果值不统一，手动覆盖以保持一致
        if (formattedValue !== value) {
          this.$refs.input.value = formattedValue
        }
        // 通过 input 事件发出数值
        this.$emit('input', Number(formattedValue))
      }
    }
  }
  export default {
    /*
     ************************
     关于prop 的 命名：
     在则props对象下可以使用驼峰命名法，
     不过在父组件传值得时候要使用短划线分割，
     不要使用驼峰命名法！
     虽然都是work 的
     *************************
     */
    props: ['propMessage'],
    data () {
      return {
        message: 'hello',
        total: 0,
        foo: 0,
        price: 0,
        bar: 0
      }
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    components: {
      'my-component': demoChild,
      'currency-input': currencyInput
    },
    methods: {
      increment () {
        this.$store.commit('increment', {
          amount: 2
        })
      },
      decrement () {
        this.$store.commit('decrement')
      },
      incrementTotal () {
        this.total += 1
      }
    }
  }
</script>

<style lang="stylus">

</style>
