// @flow
// #region imports
import React from 'react'
// #endregion

type IProps = {
  fixed?: Boolean
}

const AppHeader = ({ fixed }: IProps) => {
  return <div>{fixed}</div>
}

export default AppHeader
