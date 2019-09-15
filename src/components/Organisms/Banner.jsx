import React from 'react'
import BannerImg from '../../img/1-banner.png'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Banner = () => {
  const bannerStyle={
    backgroundImage: `url(${BannerImg})`
  }
  return ( 
    <>
      <section className="section-banner" style={bannerStyle}>
        <div className="section-banner__container break-points">
          <div className="section-banner__text">
            <h2 className="section-banner__title">Best Marketing Platform To Really Grow Your Business</h2>
            <div className="button">
              <Router>
                <Link to="/">Read More</Link>
              </Router>
            </div>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default Banner;