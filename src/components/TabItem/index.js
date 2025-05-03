// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTab(tabId)
  }
  const tabClass = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item-container">
      <button type="button" className={tabClass} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
