import { Route, Routes } from "react-router-dom";
import RenderReact from "./render/RenderReact";
import RenderVue from "./render/RenderVue";
import RenderNuxt from "./render/RenderNuxt";
import Iframe from "./iframe";
import Sample from "./components/Test";
import Runtime from "./runtime";

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Sample />} />
      <Route path='/react-page/*' element={<RenderReact />} />
      <Route path='/vue-page/*' element={<RenderVue />} />
      <Route path='/nuxt-page/*' element={<RenderNuxt />} />
      <Route path='/iframe/*' element={<Iframe />} />
      <Route path="/runtime/*" element={<Runtime />} />
    </Routes>
  )
}

export default Routing