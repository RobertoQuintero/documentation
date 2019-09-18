import React from 'react'
import withTemplate from '../HOC/withTemplate'
import SectionTitle from '../Molecules/SectionTitle'

const Contact = () => {
  return ( 
    <section className="section-contact p-section break-points">
      <SectionTitle small='Contact Us' big='BUSINESS GROWTH CONTACT US'/>
      <div className="section-contact__flex">
        <div className="section-contact__flex-map">
        <iframe title="myFrame" className="section-contact__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6350041.310790406!2d30.68773492426509!3d39.0014851732576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2sTurkey!5e0!3m2!1sen!2sin!4v1522753415269"/>
        </div>
        <div className="section-contact__flex-form">
          <h2 className="contact-form__title">Contact form</h2>
          <form action="" className="contact-form__box">
            <input className="contact-form__box-item" type="text" name="" id=""placeholder="Your Name"/>
            <input className="contact-form__box-item" type="text" name="" id=""placeholder="Your Email"/>
            <input className="contact-form__box-item" type="text" name="" id=""placeholder="Phone Number"/>
            <textarea className="contact-form__box-item" name="" id="" cols="30" rows="5" placeholder="Your Message Here..."></textarea>
            <input type="submit" value="Submit " className="contact-form__box-item contact-form__submit"/>
          </form>
        </div>
      </div>
    </section>
   );
}
 
export default withTemplate('',Contact)