import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import style from '../../App.css?inline'
import Button from '../atoms/Button'
import { useNavigate } from 'react-router-dom'

function Home(props: { baseUrl: string, host: string }): JSX.Element {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const { baseUrl, host } = props

  return (
    <div>
      <style>{style}</style>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React rewtire2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button label="マイクロフロントエンド - sampleへ -" onClick={() => navigate(`/${baseUrl}/sample`)} />
      <a href={`/${host}/sample`} target="_parent">aタグ homeへ</a>
    </div>
  )
}

export default Home
