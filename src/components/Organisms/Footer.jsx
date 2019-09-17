import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker,faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'


const Footer = () => {
  return ( 
    <>
      <footer className="section-footer p-section">
        <div className="footer-flex__container break-points">
          <div className="footer-flex__item">
            <h4 className="footer-flex__item-title">Promote</h4>
            <p className="footer-flex__item-text">Onec Consequat sapien ut cursus rhoncus. Nullam dui mi, vulputate ac metus semper quis luctus sed.</p>
          </div>
          <div className="footer-flex__item">
          <h4 className="footer-flex__item-title">Adress Info</h4>
          <p className="footer-flex__item-text"><i className="footer-flex__item-icon"><FontAwesomeIcon icon={faMapMarker}/></i>6d canal street TT 3356 Newyork.</p>
          <p className="footer-flex__item-text"><i className="footer-flex__item-icon"><FontAwesomeIcon icon={faPhone}/></i>+1(12) 123 456 789</p>
          <p className="footer-flex__item-text"><i className="footer-flex__item-icon"><FontAwesomeIcon icon={faEnvelope}/></i>info@example.com</p>
          </div>
          <div className="footer-flex__item">
          <h4 className="footer-flex__item-title">Quick Links</h4>
          <ul>
            <li><Link to="/" className="footer-flex__item-text footer-link">Register here</Link></li>
            <li><Link to="/" className="footer-flex__item-text footer-link">Business Team</Link></li>
            <li><Link to="/" className="footer-flex__item-text footer-link">Support helpline</Link></li>
            <li><Link to="/" className="footer-flex__item-text footer-link">Privacy Policy</Link></li>
          </ul>     
          </div>
          <div className="footer-flex__item">
            <h4 className="footer-flex__item-title">Subscribe Us</h4>
            <p className="footer-flex__item-text">Subcribe to our newsletter</p>
            <form action="" className="footer-form">
                <input type="text" name="" id="" placeholder="Enter your email here" className="footer-form__input"/>
                <input type="submit" value="Subscribe" className="footer-form__submit"/>
            </form>              
          </div>
        </div>
      </footer>
    </>
   );
}
 
export default Footer;