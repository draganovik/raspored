import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import Button from 'bootstrap-vue/es/components/button'
import Modal from 'bootstrap-vue/es/components/modal'
import FormGroup from 'bootstrap-vue/es/components/form-group'
import FormRadio from 'bootstrap-vue/es/components/form-radio'
import FormSelect from 'bootstrap-vue/es/components/form-select'
import FormInput from 'bootstrap-vue/es/components/form-input'
import FormCheckbox from 'bootstrap-vue/es/components/form-checkbox'

Vue.use(Button)
Vue.use(Modal)
Vue.use(FormGroup)
Vue.use(FormRadio)
Vue.use(FormSelect)
Vue.use(FormInput)
Vue.use(FormCheckbox)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
