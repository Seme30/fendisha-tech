import React from 'react'
import './home.css'

import Counter from './components/UI/Counter';
import Hero from './components/UI/Hero'
import Services from './components/UI/Services';
import About from './components/UI/About';
import Testimonials from './components/UI/Testimonials';
import NewsLetter from './components/UI/NewsLetter';

const Home = (theme) => {
  return (
    <>
      <Hero theme = {theme}/>
      <Counter/>
      <Services />
      <About/>
      <Testimonials/>
      <NewsLetter />
    </>
  )
}

export default Home