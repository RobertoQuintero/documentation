import React from 'react'

const ServicesItem = (props) => {
  return ( 
    <div className="services-item">
      <span className="services-item__number">{props.number}</span>
      <h3 className="services-item__title">{props.title}</h3>
      <p className="services-item__paragraph">{props.paragraph}</p>
    </div>
   );
}
 
export default ServicesItem;