import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './components/Organisms/MainMenu'
import Home from './components/Pages/Home'
import About from './components/Pages/About'


function App() {
  return (
    <>
      <Router>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={ Home}/>
          <Route path="/about" exact component={ About}/>
        </Switch>
      </Router>
      
    </>
    
  )}

export default App;
