import React from 'react'
import '../styles/appintro.css'
import phone1 from '../images/MobilePhone.svg'


const AppIntro = () => {
  return (
    <section className="section app_section">
    <div className="container">
    <h2 className="highlight app__title"> Mobile App Development</h2>
      <div className="app__wrapper">
        <div className="app__img">
            <img src={phone1} alt="" />
        </div>
        <div className="app__content">
            <h6 className="subtitle">Mobile App</h6>
            <p className="description app__content-des">
              We create websites that automatically attract any business's
              target audience We have been providing businesses with
              user-centric designs that are both simple and appealing for years.
              Our designers team work hard to deliver websites that have top
              notch user-experience and can create amazing websites that are not
              only visually appealing but also easy to use for both website
              owner and visitors.
            </p>
          </div>
      </div>
    </div>
  </section>
  )
}

export default AppIntro