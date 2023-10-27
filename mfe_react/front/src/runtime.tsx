import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index-runtime.css'

import { BrowserRouter } from 'react-router-dom';

window.renderRuntimeReact = () => {
  console.log("react-mfe runtime start")
  ReactDOM.createRoot(document.getElementById('react-runtime')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
}


