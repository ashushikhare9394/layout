// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        showContent,
        onToggleShowLeftNavbar,
        showLeftNavbar,
        onToggleShowRightNavbar,
        showRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="configuration-control-container">
          <div className="responsive-controls-container">
            <h1 className="heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="rightNavbar"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="rightNavbar" className="checkbox-navbar">
                  Right Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="content"
                  onChange={onChangeContent}
                  checked={showContent}
                />
                <label htmlFor="content" className="checkbox-navbar">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="checkbox-navbar">
                  Left Navbar Menu
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
