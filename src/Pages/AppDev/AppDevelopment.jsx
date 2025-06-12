import React from 'react'
import AppHero from './components/AppHero'
import AppServices from './components/AppServices'
import AppTechnologies from './components/AppTechnologies'
import AppPortfolio from './components/AppPortfolio'
import AppProcess from './components/AppProcess'
import AppFeatures from './components/AppFeatures'
import './appdevelopment.css'

const AppDevelopment = () => {
  return (
    <>
      <AppHero />
      <AppServices />
      <AppTechnologies />
      <AppFeatures />
      <AppPortfolio />
      <AppProcess />
    </>
  )
}

export default AppDevelopment