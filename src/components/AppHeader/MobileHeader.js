// #region imports
import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'
// #endregion

const MobileHeader = ({ fixed }) => {
  return (
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
  )
}

export default MobileHeader
