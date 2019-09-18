import React  from 'react'
import {NavLink} from 'react-router-dom'

const Navigation = (props) =>{

     const handleChangeClass=()=>{
        props.onClick()
      }

   return(
    <nav className={`section-menu__navigation ${props.show}`}>
      <ul className="section-menu__list">
        <li className="section-menu__item"><NavLink exact to="/" activeClassName="activo" onClick={()=>handleChangeClass()}>Home</NavLink></li>
        <li className="section-menu__item"><NavLink to="/about" activeClassName="activo" onClick={()=>handleChangeClass()}>About Us</NavLink></li>
        <li className="section-menu__item"><NavLink to="/portfolio" activeClassName="activo" onClick={()=>handleChangeClass()}>Portfolio</NavLink></li>
        <li className="section-menu__item"><NavLink to="/contact" activeClassName="activo" onClick={()=>handleChangeClass()}>Contact</NavLink></li>
        <li className="section-menu__item button-menu"><NavLink to="/register" activeClassName="activo" onClick={()=>handleChangeClass()}>Register Now</NavLink></li>
      </ul>
  </nav>
   )
}

export default Navigation