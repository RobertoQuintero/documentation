import React from 'react'
import SectionTitle from '../Molecules/SectionTitle'
import AboutGrid from '../Organisms/AboutGrid'
import withTemplate from '../HOC/withTemplate'

const About = () => {

  return(
    <>

    <section className="section-about break-points p-section">
      <SectionTitle small='How we work' big='HOW WE DEAL ABOUT BUSINESS' />
      <AboutGrid />
    </section>
    </>
  )
}

export default withTemplate('about',About) 