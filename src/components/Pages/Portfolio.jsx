import React from 'react'
import withTemplate from '../HOC/withTemplate'
import SectionTitle from '../Molecules/SectionTitle'
import LightboxItem from '../Atoms/LightboxItem'
import g1 from '../../img/8-g1.jpg'
import g2 from '../../img/9-g2.jpg'
import g3 from '../../img/10-g3.jpg'
import g4 from '../../img/11-g4.jpg'
import g5 from '../../img/12-g5.jpg'
import g6 from '../../img/13-g6.jpg'
import g7 from '../../img/14-g7.jpg'
import g8 from '../../img/15-g8.jpg'
import Price from '../Organisms/Price'

const Portfolio = () => {

  return ( 
   <>
    <section className="section-portfolio p-section break-points">
      <SectionTitle small='our recent works' big='OUR PORTFOLIO'/>
      <div className="section-portfolio__lightbox">
        <div className="section-portfolio__lightbox-grid">
          <LightboxItem image={g1} />
          <LightboxItem image={g2} />
          <LightboxItem image={g3} />
          <LightboxItem image={g4} />
          <LightboxItem image={g5} />
          <LightboxItem image={g6} />
          <LightboxItem image={g7} />
          <LightboxItem image={g8} />
        </div>
      </div>
    </section>
      <Price />
    </>
   );
}
 
export default withTemplate('',Portfolio)