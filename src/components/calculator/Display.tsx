export const Display = (props:{mainDisplay: string, subDisplay: string}) => {
  return (
    <>
      <p className="sub-display">{props.subDisplay}</p>
      <p className="main-display">{props.mainDisplay}</p>
    </>
  )
}