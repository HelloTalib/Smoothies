import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import AddSmoothie from './views/AddSmoothie'
import EditSmoothie from './views/EditSmoothie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/add-smoothie',
      name:'AddSmoothie',
      component:AddSmoothie
    },
    {
      path:'/edit-smoothie/:smoothie_slug',
      name:'EditSmoothie',
      component:EditSmoothie
    },
    {
      path: '/about',
      name: 'About',
      component:About
    }
  ]
})
