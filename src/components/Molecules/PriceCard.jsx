import React from 'react'
import Button from '../Atoms/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PriceCard = (props) => {
  return(
    <div className="section-price__flex-card">
      <div className="card-item__icon"><FontAwesomeIcon icon={props.icon} /></div>
      <h4 className="card-item__title">{props.title}</h4>
      <h5 className="card-item__price"><span className="align-top">$</span>{props.price}</h5>
      <p className="card-item__paragraph">We help you to grow up your business and solution for your impressive projects.</p>
      <Button />
    </div>
  )
}

export default PriceCard