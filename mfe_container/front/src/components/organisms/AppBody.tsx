import { RecoilRoot } from 'recoil'
import reactLogo from '../../assets/react.svg'
import ShowStorage from '../molecules/ShowStorage'
import StorageInput from '../molecules/StorageInput'
import TodoList from './TodoList'
import viteLogo from '/vite.svg'
import { useState } from "react"

function AppBody() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Microfrontend Container</h1>
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
      <RecoilRoot >
        <TodoList />
      </RecoilRoot>
      <StorageInput />
      <ShowStorage />
    </>
  )
}

export default AppBody