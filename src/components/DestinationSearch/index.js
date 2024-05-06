const destinationsListItem = props => {
  const {destinationsList} = props
  const {name, imgUrl, id} = destinationsList
  return (
    <div>
      <h1> {name} </h1>
      <p> Im jaynth </p>
    </div>
  )
}

export default destinationsListItem
