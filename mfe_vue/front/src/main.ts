import App from './App.ce.vue'
import router from './route'
import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance, Component } from 'vue'
import HelloWorld from './components/pages/HelloWorld.ce.vue'

// pluginを利用するためにdefineCustomElementを書き換える
const defineCustomElement = (component: Component, { plugins = [] } = {}) =>
  VueDefineCustomElement({
    setup() {
      // @ts-ignore
      const app = createApp()

      // install plugins
      plugins.forEach(plugin => app.use(plugin));

      const inst = getCurrentInstance()
      // @ts-ignore
      Object.assign(inst.appContext, app._context);
      // @ts-ignore
      Object.assign(inst.provides, app._context.provides);
    },
    render: () => h(component),
  })

class VueCustom extends HTMLElement {
  constructor() {
    super()
    const MyVueElement = defineCustomElement(HelloWorld)
    customElements.get('my-vue-element') || customElements.define('my-vue-element', MyVueElement)
    // @ts-ignore
    const AppElement = defineCustomElement(App, { plugins: [router] })
    customElements.get('vue-custom-root') || customElements.define('vue-custom-root', AppElement)

    const element = document.createElement('vue-custom-root')
    element.setAttribute("id", "vue-custom-root")
    element.setAttribute('part', 'wrapper')
    this.append(element)
    let root = this.attachShadow({ mode: 'open' })
    root.append(element)
  }
}
const makeVueCustom = () => {
  console.log('vue-mfe shadowdom start')
  customElements.get('vue-custom') || customElements.define('vue-custom', VueCustom)
}
makeVueCustom()
