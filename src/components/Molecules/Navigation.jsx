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
        <li className="section-menu__item"><NavLink to="/formulario" activeClassName="activo">Services</NavLink></li>
        <li className="section-menu__item"><NavLink to="/users" activeClassName="activo">Portfolio</NavLink></li>
        <li className="section-menu__item"><NavLink to="/users" activeClassName="activo">Contact</NavLink></li>
        <li className="section-menu__item button-menu"><NavLink to="/users" activeClassName="activo">Register Now</NavLink></li>
      </ul>
  </nav>
   )
}

export default Navigation