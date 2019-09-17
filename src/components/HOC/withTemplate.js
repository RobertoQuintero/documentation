import React,{Component} from 'react'
import BannerPages from '../Organisms/BannerPages'
import Banner from '../Organisms/Banner'
import Footer from '../Organisms/Footer'

const withTemplate = (page,WrappedComponent) => {
  return class WithTemplate extends Component{
    constructor(props){
      super(props)
      this.state={}
    }

    render(){
      return (
        <>
          {
            page === 'index'
            ? <Banner />
            : <BannerPages />
          }
          <WrappedComponent {...this.props}/>
          <Footer />
        </>
      )
    }
  }
}
 
export default withTemplate;