import React from 'react'

const SectionTitle = (props) => {
  return ( 
    <div className="section-title">
      <h4 className="section-title__small">{props.small}</h4>
      <h2 className="section-title__big">{props.big}</h2>
    </div>
   );
}
 
export default SectionTitle;