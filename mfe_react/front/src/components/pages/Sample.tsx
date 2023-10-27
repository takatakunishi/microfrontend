import Button from "../atoms/Button"
import { Link, useNavigate } from 'react-router-dom';
import TodoList from "../organisms/TodoList";
import StorageInput from "../molecules/StorageInput";
import ShowStorage from "../molecules/ShowStorage";

function Sample(props: { baseUrl: string, host: string }) {
  const navigate = useNavigate();
  const { baseUrl, host } = props
  function fetchData() {
    window.fetch("http://localhost:9000/test/health", {
      credentials: 'include'
    })
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      sample
      <TodoList />
      <Button {...{ label: "Homeへ戻る", onClick: () => navigate(`/${baseUrl}`) }} />
      <a href={`/${host}`} >aタグ homeへ</a>
      <a href={`/${host}`} target="_parent">aタグ(with _parent) homeへ</a>
      <a href={`/${host}/sample#hoge`} target="_parent">aタグ(with _parent) sample#hogeへ</a>
      <Link to={`/${baseUrl}`}>Link(React)タグ homeへ</Link>
      <StorageInput />
      <ShowStorage />
      <Button label='fetch(Cookie確認)' onClick={fetchData} />
    </div >
  )
}

export default Sample