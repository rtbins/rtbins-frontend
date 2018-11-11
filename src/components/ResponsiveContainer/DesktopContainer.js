// #region imports
import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Responsive, Visibility } from 'semantic-ui-react'
import styles from './styles/desktopContainer.css'
import { MobileHeader, DesktopHeader } from '../AppHeader'
// #endregion

class DesktopContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fixed: false }
  }

  hideFixedMenu = () => {
    this.setState(() => {
      return { fixed: false }
    })
  }

  showFixedMenu = () => {
    this.setState(() => {
      return { fixed: true }
    })
  }

  render() {
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            vertical
            className={styles.segment_main}
          >
            <DesktopHeader fixed={fixed} />
          </Segment>
        </Visibility>
      </Responsive>
    )
  }
}

export default DesktopContainer
