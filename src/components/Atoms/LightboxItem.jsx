import React from 'react'

const LightboxItem = (props) => {

const handleClick=(e)=>{
  props.openLightbox(e)
}
  return ( 
    <div className="section-portfolio__lightbox-item">
      <a href="/" onClick={(e)=>handleClick(e)} className="whiteLabel"><img src={props.image} alt="" className="section-portfolio__lightbox-image"/></a>
    </div>
   );
}
 
export default LightboxItem;