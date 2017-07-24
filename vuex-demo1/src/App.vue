<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-header></v-header>
    <input type="text" v-model="parentMsg">
    <hr>
    <router-view :propMessage='parentMsg'></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default {
    name: 'app',
    data () {
      return {
        parentMsg: ''
      }
    },
    components: {
      'v-header': header
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
