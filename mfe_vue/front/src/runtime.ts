import { createApp } from 'vue'
import App from './App.vue'
import './style-runtime.css'
import router from './route'
import { key, store } from './store'

window.renderRuntimeVue = () => {
  console.log("vue-mfe runtime start")
  const app = createApp(App)
  app.use(router)
  app.use(store, key);
  app.mount("#vue-runtime")
}
