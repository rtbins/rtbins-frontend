import React from 'react'

type IProps = {
  mission: any
}

const Mission: React.FunctionComponent<IProps> = ({ mission }) => {
  return (
    <div>
      <h1>{mission.value}</h1>
    </div>
  )
}

export default Mission
