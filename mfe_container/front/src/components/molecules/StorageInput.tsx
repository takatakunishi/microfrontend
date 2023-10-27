import { useState } from "react";
import { setLocalStorageData } from "../../util/storage";

function StorageInput() {
  const [text, setText] = useState("")
  function handleSave() {
    setLocalStorageData('test', text)
    setText('')
  }
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSave}>ローカルストレージに保存</button>
    </div>
  )
}

export default StorageInput