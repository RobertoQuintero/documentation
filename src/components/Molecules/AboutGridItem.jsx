import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../Atoms/Button'

const AboutGridItem = (props) => {

  return(
    <div className="about-grid__item">
      <span><i className="services-item__number item-icon"><FontAwesomeIcon icon={props.icon}/></i></span>
      <div className="about-item__right">
        <h3 className="services-item__title">{props.title}</h3>
        <p className="services-item__paragraph about-text">Sed ut perspiciatis unde omnis natus error dolor volup tatem ed accusantium doloremque laudantium, tota rem aperiam, eaqu ipsa quae ab illo quasi architi ecto beatae vita.</p>
        <Button />
      </div>
    </div>
  )
}

export default AboutGridItem