import React from 'react'
import SectionTitle from '../Molecules/SectionTitle'
import ServicesItemGrid from '../Organisms/ServicesItemGrid'

const Services = () => {

  return(
    
    <section className="section-services break-points p-section">
      <SectionTitle small='Exclusive Services' big='WE PROVIDE AWESOME SERVICES'/>
      <ServicesItemGrid />
    </section>
    
  )
}

export default Services