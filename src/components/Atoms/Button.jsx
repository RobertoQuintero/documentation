import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Button  = () => {

  return(
    <div className="button">
      <Router>
        <Link to="/" className="buttonLink">Read More</Link>
      </Router>
    </div>
  )
}

export default Button