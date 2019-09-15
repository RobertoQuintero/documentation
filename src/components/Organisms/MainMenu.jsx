import React,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Molecules/Logo'
import Navigation from '../Molecules/Navigation'

class MainMenu extends Component {
constructor(props){
  super(props)
  this.state ={show: ''}
  this.handleToggle = this.handleToggle.bind(this)
}
handleToggle =()=>{
this.state.show==='show'
  ? this.setState({show: ''})
  : this.setState({show: 'show'})
}
  render(){
    return ( 
      <div className="section-menu__container break-points">
        <header className={`section-menu `}>
          <Logo />
          <i className="section-menu__hamburguer" onClick={this.handleToggle}>
            <FontAwesomeIcon icon={faBars} />
          </i>
          <Navigation show={this.state.show}/>
        </header>
      </div>
     );
  }
}
 
export default MainMenu;