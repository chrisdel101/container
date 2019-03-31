import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuetify)

const Home  = {
  template: '<div>Home</div>'
}

const Order = {
  template: '<div>Login</div>'
}

const About = {
  template: '<div>About</div>'
}

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/order', component: Order },
    { path: '/about', component: About }
  ]
})




Vue.config.productionTip = false

new Vue({
    router
}).$mount('#app')
