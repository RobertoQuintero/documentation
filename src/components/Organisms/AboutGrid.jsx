import React from 'react'
import { faBullseye,faLightbulb, faQuestionCircle, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import AboutGridSection from '../Molecules/AboutGridSection'
import AboutOne from '../../img/2-about.jpg'
import AboutTwo from '../../img/3-about.png'

const AboutGrid = () => {

  return(
    <>
      <AboutGridSection principal={AboutOne} order='' imageFirst={faBullseye} titleFirst='WE WORK FAST' imageSecond={faLightbulb} titleSecond='CREATIVE IDEAS'/>
      <AboutGridSection principal={AboutTwo} order='1' imageFirst={faQuestionCircle} titleFirst='FURTHER SUPPORT' imageSecond={faBullhorn} titleSecond='WORKING ON RESULT'/>
    </>
  )
}

export default AboutGrid