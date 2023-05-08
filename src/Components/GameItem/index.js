import './index.css'

const GameItem = props => {
  const {imageItems} = props
  const {thumbnailUrl} = imageItems

  return (
    <li>
      <button className="image-btn" type="button">
        <img className="image-item-styles" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default GameItem
