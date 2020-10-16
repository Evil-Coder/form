import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

Vue.use(Vuelidate)

Vue.config.productionTip = false
Vue.config.devtools = true

import './assets/fields.sass'
import './assets/radio.sass'
import './assets/checkbox.sass'
import './assets/select.sass'

new Vue({
  render: h => h(App),
}).$mount('#app')
