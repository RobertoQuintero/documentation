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
const images = [g1,g2,g3,g4,g5,g6,g7,g8]

const openLightbox=(e)=>{
  e.preventDefault()
  let lightboxElement = document.createElement('div')
  lightboxElement.innerHTML = `
  <div class="lightbox-overlay">
    <figure class="lightbox-container">
      <div class="close-modal">✖</div>
      <img src="${e.target.src}" class="ligthbox-image">
      <figcaption>
        <p class="lightbox-description">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
      </figcaption>
    </figure>
  </div>
`
document.body.appendChild(lightboxElement)
closeModal(lightboxElement)
}
const closeModal = modalElement =>{
  let closeModal = modalElement.querySelector('.close-modal')

  closeModal.addEventListener('click', e=>{
      document.body.removeChild(modalElement)
  })
}

const lightboxItems = images.map(image=>(<LightboxItem key={image.toString()} image={image} openLightbox={(e)=>openLightbox(e)}/>))
  return ( 
   <>
    <section className="section-portfolio p-section break-points">
      <SectionTitle small='our recent works' big='OUR PORTFOLIO'/>
      <div className="section-portfolio__lightbox">
        <div className="section-portfolio__lightbox-grid">
         {lightboxItems}
        </div>
      </div>
    </section>
      <Price />
    </>
   );
}
 
export default withTemplate('',Portfolio)