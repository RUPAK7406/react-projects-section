import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeBtnClass = isActive ? 'active-tab-btn' : ''

  const getTabId = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtnClass}`}
        onClick={getTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
