// Write your code here

import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="AppItem-Container">
      <img className="app-image" src={imageUrl} alt={appName} />

      <p className="app-item-title">{appName}</p>
    </li>
  )
}

export default AppItem
