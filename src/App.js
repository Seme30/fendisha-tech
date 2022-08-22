import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

import Header from './Header/Header'
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
import WebDevelopment from './Pages/WebDev/WebDevelopment';



function App() {

  const [theme, setTheme] = useState('')

  const toggleTheme = ()=>{
    theme === ''? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{
    document.body.className = theme
  }, [theme])

  return (
    <Router>
      <Header theme ={theme} toggleTheme = {toggleTheme}/>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/webdevelopment' element={<WebDevelopment/>}>
            
          </Route>
        </Routes>        
      <Footer/>
    </Router>
  );
}

export default App;
