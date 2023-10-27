import { Link } from "react-router-dom";
import { PATH } from "../../App";

function NavigationLinks() {
  const links = Object.values(PATH)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {links.map(l => {
        return <Link to={`/${l}`} key={l}>Linkタグ `{l}`へ</Link>
      })}
    </div>
  )
}

export default NavigationLinks