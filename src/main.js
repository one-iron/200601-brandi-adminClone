import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VCalendar from 'v-calendar';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import CKEditor from '@ckeditor/ckeditor5-vue';


Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(CKEditor);


Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
                 // ...other defaults
});


new Vue({
  router,
  store,
  vuetify,
  VCalendar,
  render: h => h(App)
}).$mount('#app')
