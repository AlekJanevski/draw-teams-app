import Vue from 'vue'
import App from './App.vue'
import 'vue-loaders/dist/vue-loaders.css';
import VueLoaders from 'vue-loaders';
import './index.css'

Vue.config.productionTip = false

Vue.use(VueLoaders);

new Vue({
  render: h => h(App),
}).$mount('#app')
