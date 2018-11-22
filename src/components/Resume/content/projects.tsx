import React from 'react'

type IProps = {
  projects: any
}

const Projects: React.FunctionComponent<IProps> = ({ projects }) => {
  return (
    <div>
      <h1>{projects.value}</h1>
    </div>
  )
}

export default Projects
