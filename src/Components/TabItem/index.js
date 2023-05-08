import './index.css'

const TabItem = props => {
  const {tabItems} = props
  const {displayText} = tabItems

  return (
    <li className="list-item">
      <button className="tab-button" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
