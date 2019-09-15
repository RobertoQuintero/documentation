import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'


const Logo =()=>{
  return(
    <div className="section-menu__items">
        <h1 className="seftion-menu__logo">
          <a href="/" className="section-menu__logo-link">
            <span className="section-menu__logo-icon">
              <FontAwesomeIcon icon={faRocket} className="awasome-icon"/>
            </span>
            Promote
          </a>
        </h1>
      </div>
  )
}

export default Logo