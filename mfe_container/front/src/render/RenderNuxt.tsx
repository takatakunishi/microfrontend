import { useEffect } from "react";
const RenderNuxt = () => {
  const name = "nuxt"
  useEffect(() => {
    const element = document.getElementById(`micro-${name}`)
    customElements.get('nuxt-shadow') || customElements.define('nuxt-shadow', NuxtShadow)
    const shadow = document.createElement('nuxt-shadow')
    shadow.setAttribute("id", "nuxt-shadow")
    element?.appendChild(shadow)
  }, []);
  return (
    <div id={`micro-${name}`}>
      <h3 style={{ color: "red" }}>Nuxt.jsでランタイム統合をしようとするとコンポーネント内のJavaScriptが実行されない</h3>
    </div>);
}

class NuxtShadow extends HTMLElement {
  constructor() {
    super()
    const element = document.createElement('div')
    const host = "http://localhost/nuxt-html"
    const currentPath = window.location.pathname.replace("/nuxt-page", "")
    const sccriptId = `micro-frontend-script-nuxt-shadowdom`;
    const requestPath = host + currentPath
    fetch(requestPath).then(h => h.text()).then(data => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, "text/html");
      const html_nuxt_elements = html.body.querySelector("div")
      const html_nuxt_window_elements = [...html.body.querySelectorAll('script')];

      const nuxt_window_elements = [...html_nuxt_window_elements]
      nuxt_window_elements.flatMap((h_e, i) => {
        if (!(h_e.id === "") && document.getElementById(h_e.id)) return
        if (document.getElementById(`nuxt-shadowdom-${i}`)) return
        if (!(h_e.id === "")) {
          element.append(h_e)
        } else {
          const script = document.createElement("script");
          script.id = `nuxt-shadowdom-${i}`
          element.append(script)
        }
      })
      element?.appendChild(html_nuxt_elements!)
      const html_style_elements = html.head.querySelectorAll('style');
      for (let h_e of html_style_elements) {
        element?.appendChild(h_e)
      }

      renderMicroFrontend()
    }).then(() => {
      if (document.getElementById(sccriptId)) return
      const script = document.createElement("script");
      script.id = sccriptId;
      script.src = "http://localhost/_nuxt/nuxt/bundle.js";
      script.onload = () => {
        console.log("load nuxt shadowdom js")
      };
      element.appendChild(script)
    })
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.append(element)
    const renderMicroFrontend = () => {
      const customElement = document.createElement("nuxt-custom")
      element.appendChild(customElement)
    };
  }
}


export default RenderNuxt