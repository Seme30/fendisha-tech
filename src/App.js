import React, {useState, useEffect} from 'react'
import './App.css';

import Header from './components/Header/Header'
import Counter from './components/UI/Counter';
import Hero from './components/UI/Hero'
import Services from './components/UI/Services';
import About from './components/UI/About';
import Testimonials from './components/UI/Testimonials';
import NewsLetter from './components/UI/NewsLetter';
import Footer from './components/Footer/Footer';


function App() {

  const [theme, setTheme] = useState('')

  const toggleTheme = ()=>{
    theme === ''? setTheme('light-theme') : setTheme('')
  }

  useEffect(()=>{
    document.body.className = theme
  }, [theme])



  return (
    <>
      <Header theme ={theme} toggleTheme = {toggleTheme}/>
      <Hero theme = {theme}/>
      <Counter/>
      <Services />
      <About/>
      <Testimonials/>
      <NewsLetter />
      <Footer/>
    </>
  );
}

export default App;
