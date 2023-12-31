import React, { useContext } from 'react'
import { AboutContainer } from './style'
import { styleContext } from '../../context_providers/styleContext'
import Description from './Description'
import GridProgressBar from './Grid_Progress_Bar'
import Timeline from './Timeline'

function About() {
  const { secondaryColor } = useContext(styleContext)

  return (
    <>
      <AboutContainer $secondaryColor={secondaryColor}>
        <Description></Description>
        <GridProgressBar></GridProgressBar>
        <Timeline></Timeline>
      </AboutContainer>
    </>
  )
}

export default About