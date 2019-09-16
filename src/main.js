import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import FlashMessage from '@smartweb/vue-flash-message'
Vue.use(FlashMessage)
Vue.use(BootstrapVue)

import VeeValidate, {
  Validator
} from 'vee-validate'
import pt_BR from 'vee-validate/dist/locale/pt_BR'

Vue.use(VeeValidate)
Validator.localize('pt_BR', pt_BR)

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'




new Vue({
  el: '#app',
  render: h => h(App)
})
