function Button(props: { label: string, onClick: () => void }) {
  return (
    <button onClick={props.onClick}>
      <text>{props.label}</text>
    </button>
  )
}

export default Button