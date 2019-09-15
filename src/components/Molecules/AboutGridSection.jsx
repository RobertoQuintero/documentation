import React from 'react'

import AboutGridItem from '../Molecules/AboutGridItem'

const AboutGridSection = (props) => {
  const flexOrder = {
    order : props.order
  }

  return(

    <div className="about-grid__container">
      <div className="about-grid__image" style={flexOrder}>
        <img src={props.principal} alt="about"/>
      </div>
      <div className="about-grid__items">
          <AboutGridItem icon={props.imageFirst} title={props.titleFirst}/>
          <AboutGridItem icon={props.imageSecond} title={props.titleSecond}/>
      </div>
    </div>
  )
}

export default AboutGridSection