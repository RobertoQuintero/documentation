import React from 'react'
import SectionTitle from '../Molecules/SectionTitle'
import {faUser,faFemale,faFileVideo} from '@fortawesome/free-solid-svg-icons'
import PriceCard from '../Molecules/PriceCard'

const Price =()=>{

    return(
      <article className="section-price p-section">
        <SectionTitle small='Exclusive prices' big='WE PROVIDE BEST PRICE'/>
        <div className="section-price__flex">
          <PriceCard icon={faUser} title='BASIC' price='199'/>
          <PriceCard icon={faFemale} title='STANDARD' price='199'/>
          <PriceCard icon={faFileVideo} title='PREMIUM' price='399'/>
        </div>
      </article>
    )
}

export default Price