import React from 'react'
import ServicesItem from '../Molecules/ServicesItem'

const ServicesItemGrid = () => {

  return(
    <div className='services-item__grid'>
      <ServicesItem number='01' title='CONTENT MARKETING' paragraph='Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet.'/>
      <ServicesItem number='02' title='DISTRIBUTION CONTENT' paragraph='Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet.'/>
      <ServicesItem number='03' title='MEASUREMENT CONTENT' paragraph='Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet.'/>
      <ServicesItem number='04' title='EDITORIAL CONTENT' paragraph='Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet.'/>
      <ServicesItem number='05' title='CREATIVE CONTENT' paragraph='Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet.'/>
      <ServicesItem number='06' title='ANALYTICS CONTENT' paragraph='Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper dui turpis dolor sit amet.'/>
    </div>
  )
}

export default ServicesItemGrid