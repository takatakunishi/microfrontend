import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import style from './index.css?inline' // cssを埋め込む

import { BrowserRouter } from 'react-router-dom';

class ReactCustom extends HTMLElement {
  constructor() {
    super()

    const element = document.createElement('div')
    element.textContent = 'hello'
    element.setAttribute("id", "root")
    element.setAttribute('part', 'wrapper')
    const styleElm = document.createElement('style')
    styleElm.textContent = style
    this.append(element)
    let root = this.attachShadow({ mode: 'open' })
    root.appendChild(styleElm)
    root.append(element)
    ReactDOM.createRoot(element).render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
    )
  }
}

const makeReactCustom = () => {
  console.log("mfe-react webcmponents run")
  customElements.get('react-custom') || customElements.define('react-custom', ReactCustom)
}

makeReactCustom()