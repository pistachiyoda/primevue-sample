import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

createApp(App)
  .use(PrimeVue, {
    theme: 'none',
  })
  .component('Button', Button)
  .mount('#app')
