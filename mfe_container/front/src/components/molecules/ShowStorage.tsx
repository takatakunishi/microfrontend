import { useState } from "react";
import { getLocalStorageData } from "../../util/storage";

function ShowStorage() {
  const [text, setText] = useState("")
  function handleReadStorage() {
    const data = getLocalStorageData('test')
    setText(data ?? "")
  }
  return (
    <div>
      <p>ローカルストレージのデータ → {text} ⇦</p>
      <button onClick={handleReadStorage}>ローカルストレージを読み出し</button>
    </div>
  )
}

export default ShowStorage