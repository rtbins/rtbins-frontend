import React from 'react'

type IProps = {
  education: any
}

const Education: React.FunctionComponent<IProps> = ({ education }) => {
  return (
    <div>
      <h1>{education.value}</h1>
    </div>
  )
}

export default Education
