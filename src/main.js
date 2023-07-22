import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import {
  ButtonPlugin,
  ModalPlugin,
  FormGroupPlugin,
  FormRadioPlugin,
  FormSelectPlugin,
  FormInputPlugin,
  FormCheckboxPlugin
} from 'bootstrap-vue'

Vue.use(ButtonPlugin)
Vue.use(ModalPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormRadioPlugin)
Vue.use(FormSelectPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormCheckboxPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
