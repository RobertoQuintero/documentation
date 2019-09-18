import React from 'react'
import withTemplate from '../HOC/withTemplate'
import {Link} from 'react-router-dom'
import Client from '../Organisms/Client'


const Register = () => {
  return ( 
    <>
      <section className="section-register">
        <div className="section-register__container p-section break-points">
          <div className="section-register__text">
            <h2 className="section-register__text-title">THE BEST BUSINESS COMPANY.</h2>
            <p className="section-register__text-paragraph">Sed ut perspiciatis unde omnis natus error dolor volup tatem ed accus antium dolor emque laudantium, totam rem aperiam, eaqu ipsa quae ab illo quasi architi ecto beatae vitae dicta sunt dolor ipsum.</p>
            <div className="section-register__text-buttons">
              <Link href="/contact" className="section-register__text-button">Work With Us</Link>
              <Link href="/contact" className="section-register__text-button">Projects</Link>
            </div>
          </div>
          <div className="section-register__container-form">
            <h2 className="section-register__container-title">Register Here</h2>
            <form action="" className="section-register__form">
              <input type="text" className="section-register__form-input" placeholder="Your Name"/>
              <input type="text" className="section-register__form-input" placeholder="Your Email"/>
              <input type="text" className="section-register__form-input" placeholder="Contact Number"/>
              <input type="text" className="section-register__form-input" placeholder="Business type"/>
              <input type="submit" value="Get registered" className="section-register__form-input section-register__submit"/>
            </form>
            <p className="section-register__container-conditions">By registering, you agree to our <span className="conditions">Terms & Conditions.</span></p>
          </div>
        </div>
      </section>
      <Client />
    </>
   );
}
 
export default withTemplate('',Register);