import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './components/Organisms/MainMenu'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Portfolio from './components/Pages/Portfolio'
import NotFound from './components/Pages/NotFound'
import Register from './components/Pages/Register'

function App() {
  

  return (
    <>
      <Router>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={ Home}/>
          <Route path="/about" exact component={ About}/>
          <Route path="/portfolio" exact component={ Portfolio}/>
          <Route path="/register" exact component={ Register }/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
      
    </>
    
  )}
export default App;
