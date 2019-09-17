import React from 'react'
import withTemplate from '../HOC/withTemplate'
import Services from '../Organisms/Services'

const Home = () =>{

  return(
    <>
      <Services />
    </>
  )
}
export default withTemplate('index',Home)