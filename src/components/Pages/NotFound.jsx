import React from 'react'
import withTemplate from '../HOC/withTemplate'

const NotFound = () => {

  return(
    <section className="notfound">
      <h1>Error 404 Not found</h1>
    </section>
  )
}

export default withTemplate('',NotFound)