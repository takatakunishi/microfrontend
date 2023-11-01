import { Route, Routes, useBeforeUnload, useNavigate } from 'react-router-dom'
import Home from './components/pages/Home'
import Sample from './components/pages/Sample'
import { RecoilRoot } from 'recoil'
import Root from './components/pages/Root'
import { useEffect } from 'react'
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
  useBeforeUnload((e) => console.log('called useBeforeUnload', { e }))
  const navigate = useNavigate()
  function handleNav(event: CustomEvent<{ to: any }>) {
    console.log('handleNav receive', { event })
    navigate(event.detail.to, { replace: true })
  }

  const hackNavigation = () => {
    console.log('add hackNavigation')
    window.addEventListener('react-app-nav', handleNav as any);
  }
  useBeforeUnload(() => {
    console.log('remove hackNavigation')
    window.removeEventListener('react-app-nav', handleNav as any)
  })
  useEffect(() => {
    hackNavigation()
  }, [])
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
