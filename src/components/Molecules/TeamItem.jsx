import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const TeamItem = (props) => {
  return ( 
    <div className="section-team__item">
          <div className="section-team__item-container">
            <img src={props.image} alt="" className="section-team__item-image"/>
            <div className="section-item__hover">
              <h3 className="section-item__hover-name">{props.name}</h3>
              <p className="section-item__hover-ocupation">{props.ocupation}</p>
              <div className="section-item__social">
                <div className="section-item__social-icon">
                  <a href="/" className="section-item__social-link"><FontAwesomeIcon icon={faFacebookF}/></a>
                </div>
                <div className="section-item__social-icon">
                  <a href="/" className="section-item__social-link"><FontAwesomeIcon icon={faTwitter}/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
   );
}
 
export default TeamItem;