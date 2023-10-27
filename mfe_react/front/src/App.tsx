import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Sample from './components/pages/Sample'
import { RecoilRoot } from 'recoil'
import Root from './components/pages/Root'
export const PATH = {
  custom: "react-page",
  iframe: "react-frame",
  host: "iframe/react",
  runtime: "runtime/react"
} as const

const RELATIVE_PATH = {
  home: "/",
  sample: "/sample"
} as const

function App(): JSX.Element {

  return (
    <div>
      <RecoilRoot>
        <Routes>
          <Route path={PATH.custom + RELATIVE_PATH.home} element={<Home baseUrl={PATH.custom} host={PATH.custom} />} />
          <Route path={PATH.custom + RELATIVE_PATH.sample} element={<Sample baseUrl={PATH.custom} host={PATH.custom} />} />
          <Route path={PATH.iframe + RELATIVE_PATH.home} element={<Home baseUrl={PATH.iframe} host={PATH.host} />} />
          <Route path={PATH.iframe + RELATIVE_PATH.sample} element={<Sample baseUrl={PATH.iframe} host={PATH.host} />} />
          <Route path={PATH.runtime + RELATIVE_PATH.home} element={<Home baseUrl={PATH.runtime} host={PATH.runtime} />} />
          <Route path={PATH.runtime + RELATIVE_PATH.sample} element={<Sample baseUrl={PATH.runtime} host={PATH.runtime} />} />
          <Route path='/*' element={<Root />} />
        </Routes>
      </RecoilRoot>
    </div>
  )
}

export default App
