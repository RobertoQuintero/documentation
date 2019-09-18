import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const ClientItem = (props) => {

    return(
      <div className="section-client__flex-item">
        <div className="section-client__flex-image">
          <img src={props.image} alt="" className="section-client__flex-image-source"/>
        </div>
        <div className="section-client__paragraph-container">
          <p className="section-client__flex-paragraph"><span className="symbol"><FontAwesomeIcon icon={faQuoteLeft}/></span>Onec consequat sapien utleo dolor rhoncus. Nullam dui mi, vulputater act metus semper. Vestibulum sed dolor.</p>
          <p className="section-client__flex-paragraph"><span className="section-client__flex-name">{props.name} - </span>Customer</p>
        </div>
      </div>
    )
}

export default ClientItem