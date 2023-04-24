import { createApp } from 'vue'
import App from './App.vue'
import SuperAlert from './components/SuperAlert.vue';

import './assets/main.css'

createApp(App)
  .component('SuperAlert', SuperAlert)
  .mount('#app')
