import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')

window.renderVue = (containerId:string) => {
  createApp(App).mount(containerId)
}

// window.renderVue('#app')