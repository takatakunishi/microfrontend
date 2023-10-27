import { Route, Routes } from "react-router-dom";

const IFRAME_ROOT = {
  react: "react",
  react3rd: "react3rd",
  vue: "vue",
  nuxt: "nuxt"
} as const

const REMOTE: { [key in keyof typeof IFRAME_ROOT]: string } = {
  [IFRAME_ROOT.react]: "http://localhost/react-frame",
  [IFRAME_ROOT.react3rd]: "http://localhost:3151/react-frame",
  [IFRAME_ROOT.vue]: "http://localhost/vue",
  [IFRAME_ROOT.nuxt]: "http://localhost/nuxt-html",
} as const

function Iframe() {
  return (
    <div>
      <Routes>
        <Route path="/react/*" element={<Frame {...{ id: "react-frame", url: REMOTE.react, root: IFRAME_ROOT.react }} />} />
        <Route path="/react-3rd-domain/*" element={<Frame3rd {...{ id: "react-frame", url: REMOTE.react3rd, root: IFRAME_ROOT.react3rd }} />} />
        <Route path="/vue/*" element={<Frame {...{ id: "vue-frame", url: REMOTE.vue, root: IFRAME_ROOT.vue }} />} />
        <Route path="/nuxt/*" element={<Frame {...{ id: "nuxt-frame", url: REMOTE.nuxt, root: IFRAME_ROOT.nuxt }} />} />
      </Routes>
    </div>
  )
}

function Frame(props: { id: string, url: string, root: keyof typeof IFRAME_ROOT }) {
  const { id, root } = props
  const { pathname } = window.location
  const currentIframeURL = REMOTE[root] + pathname.replace("/iframe/" + root, "")
  return (
    <iframe id={id} src={currentIframeURL} style={{ width: "900px", height: "900px" }} ></iframe>
  )
}

function Frame3rd(props: { id: string, url: string, root: keyof typeof IFRAME_ROOT }) {
  const { url, id } = props
  return (
    <iframe id={id} src={url} style={{ width: "900px", height: "900px" }} ></iframe>
  )
}

export default Iframe