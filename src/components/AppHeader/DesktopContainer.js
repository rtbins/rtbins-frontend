// #region imports
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Segment,
  Responsive,
  Visibility,
  Menu,
  Container,
  Button,
} from 'semantic-ui-react'
import styles from './styles/desktopContainer.css'
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
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size={fixed ? 'small' : 'large'}
              borderless
            >
              <Container>
                <Menu.Item as="a" header>
                  Rohit Gupta
                </Menu.Item>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Blog</Menu.Item>
                <Menu.Item as="a">Resume</Menu.Item>
                <Menu.Item as="a">Contact</Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
      </Responsive>
    )
  }
}

export default DesktopContainer
