import React from 'react'
import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import ContactMap from './components/ContactMap'
import './contactus.css'

const ContactUs = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </>
  )
}

export default ContactUs