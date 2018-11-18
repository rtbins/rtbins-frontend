import React from 'react'

type IProps = {
  workExperience: any
}

const WorkExperience: React.FunctionComponent<IProps> = ({
  workExperience,
}) => {
  return (
    <div>
      <h1>{workExperience.value}</h1>
    </div>
  )
}


export default WorkExperience
