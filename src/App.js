import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import MainMenu from './components/Organisms/MainMenu'
import Banner from './components/Organisms/Banner'


function App() {
  return (
    <>
      <Router>
        <MainMenu />
      </Router>
      <Banner />
    </>
    
  )}

export default App;
