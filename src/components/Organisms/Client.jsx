import React from 'react'
import SectionTitle from '../Molecules/SectionTitle'
import ClientItem from '../Molecules/ClientItem'
import test1 from '../../img/17-test1.jpg'
import test2 from '../../img/18-test2.jpg'

const Client = () => {

    return(
      <section className="section-client break-points">
        <SectionTitle small='Testimonial' big='WHAT OUR CLIENT SAY' className="section-client__top-text"/>
        <div className="section-client__flex">
          <ClientItem image={test1} name='JHONSON'/>
          <ClientItem image={test2} name='WALKNER'/>
        </div>
      </section>
    )
}

export default Client