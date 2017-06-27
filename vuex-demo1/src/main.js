// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import { increment } from './mutation/mutation-types'

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false}
    ]
  },
  /*
   ***********************
   类似于function
   更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
   唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法
   ***********************
   */
  mutations: {
    [increment] (state, payload) {
      state.count += payload.amount
    },
    decrement (state) {
      state.count--
    }
  },
  // 类似于computed
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

console.log(store.getters.doneTodos)
console.log(store.getters.doneTodosCount)
