import React from 'react'
import GraphIntro from './components/GraphIntro'
import GraphicsServices from './components/GraphicsServices'
import GraphicsPortfolio from './components/GraphicsPortfolio'
import GraphicsProcess from './components/GraphicsProcess'
import './graphics.css'

const Graphics = () => {
  return (
    <>
      <GraphIntro />
      <GraphicsServices />
      <GraphicsPortfolio />
      <GraphicsProcess />
    </>
  )
}

export default Graphics