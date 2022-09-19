import React from 'react'
import '../styles/aboutintro.css'
import js from '../../../images/js_icon.svg'
import css from '../../../images/css_icon.svg'
import drupal from '../../../images/drupal_logo.svg'
import html from '../../../images/html_icon.svg'
import mongodb_logo from '../../../images/mongodb_logo.svg'
import mysql_icon from '../../../images/mysql_icon.svg'
import nodejs_icon from '../../../images/nodejs_icon.svg'
import reactjs_logo from '../../../images/react js_logo.svg'
import php_logo from '../../../images/php_logo.png'

const images1 = [
    js,
    css,
    html,
    drupal
]

const images2 = [
    mongodb_logo,
    mysql_icon,
    nodejs_icon,
    reactjs_logo,
    php_logo
]


const AboutIntro = () => {
  return (
    <section className="tech">
        <div className="container">
            <div className="subtitle techs"> Technologies we utilize </div>
            <div className="tech__wrapper">
                {images1.map((item, index)=>{
                    return (
                        <div className="tech__item">
                            <img src={item} alt="img" />
                        </div>
                    )
                })}
            </div>
            <div className="tech__wrapper">
                {images2.map((item, index)=>{
                    return (
                        <div className="tech__item">
                            <img src={item} alt="img" />
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default AboutIntro