import React from 'react'
import SectionTitle from '../Molecules/SectionTitle'
import BannerPages from '../Organisms/BannerPages'
import AboutGrid from '../Organisms/AboutGrid'

const About = () => {

  return(
    <>
    <BannerPages />
    <section className="section-about break-points p-section">
      <SectionTitle small='How we work' big='HOW WE DEAL ABOUT BUSINESS' />
      <AboutGrid />
    </section>
    </>
  )
}

export default About