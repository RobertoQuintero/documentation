import React from 'react'
import { Link} from 'react-router-dom'

const Button  = () => {

  return(
    <div className="button">
        <Link to="/" className="buttonLink">Read More</Link>
    </div>
  )
}

export default Button