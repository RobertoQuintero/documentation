import React from 'react'

const LightboxItem = (props) => {

  const handleClick=(e)=>{
    e.preventDefault()
    let lightboxElement = document.createElement('div')
    lightboxElement.innerHTML = `
    <div class="lightbox-overlay">
      <figure class="lightbox-container">
        <div class="close-modal">✖</div>
        <img src="${props.image}" class="ligthbox-image">
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
  return ( 
    <div className="section-portfolio__lightbox-item">
      <a href="/" onClick={(e)=>handleClick(e)} className="whiteLabel"><img src={props.image} alt="" className="section-portfolio__lightbox-image"/></a>
    </div>
   );
}
 
export default LightboxItem;