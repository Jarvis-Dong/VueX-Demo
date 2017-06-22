import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import demo1 from '../components/demo1/demo1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/demo1',
      component: demo1
    }
  ]
})
