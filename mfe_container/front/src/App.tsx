import './App.css'
import { useNavigate } from 'react-router-dom'
import Button from './components/atoms/Butoton'
import Routing from './router'
import AppBody from './components/organisms/AppBody'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <AppBody />
      <div style={{ display: "flex", flexDirection: "column", border: "1px solid aqua" }}>
        <Button label="マイクロフロントエンド - shadow dom Containerへ -" onClick={() => navigate('/')} />
        <Button label="マイクロフロントエンド - shadow dom Reactへ -" onClick={() => navigate('/react-page')} />
        <Button label="マイクロフロントエンド - shadow dom React /sampleへ -" onClick={() => navigate('/react-page/sample')} />
        <Button label="マイクロフロントエンド - shadow dom Vueへ -" onClick={() => navigate('/vue-page')} />
        <Button label="マイクロフロントエンド - shadow dom Nuxtへ -" onClick={() => navigate('/nuxt-page')} />
        <Button label="マイクロフロントエンド - shadow dom Nuxt /homeへ -" onClick={() => navigate('/nuxt-page/home')} />
        <Button label="マイクロフロントエンド - iframe Reactへ -" onClick={() => navigate('/iframe/react')} />
        <Button label="マイクロフロントエンド - iframe React /sampleへ -" onClick={() => navigate('/iframe/react/sample')} />
        <Button label="マイクロフロントエンド - iframe React /sample#hogeへ -" onClick={() => navigate('/iframe/react/sample#hoge')} />
        <Button label="マイクロフロントエンド - iframe Reactへ 違うドメイン -" onClick={() => navigate('/iframe/react-3rd-domain')} />
        <Button label="マイクロフロントエンド - iframe Vueへ -" onClick={() => navigate('/iframe/vue')} />
        <Button label="マイクロフロントエンド - iframe Nuxtへ -" onClick={() => navigate('/iframe/nuxt')} />
        <Button label="マイクロフロントエンド - runtime Reactへ -" onClick={() => navigate('/runtime/react')} />
        <Button label="マイクロフロントエンド - runtime React /sampleへ -" onClick={() => navigate('/runtime/react/sample')} />
        <Button label="マイクロフロントエンド - runtime Vueへ -" onClick={() => navigate('/runtime/vue')} />
        <Button label="マイクロフロントエンド - runtime Nuxtへ -" onClick={() => navigate('/runtime/nuxt')} />
      </div>
      <Routing />
    </>
  )
}

export default App
