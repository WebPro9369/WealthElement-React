import React from 'react'
import AboutComponent from '../components/About'
import Head from '../components/head'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import '../styles/index.sass'

const AboutPage = () => (
  <div className="about">
    <Head title="Wealth Element - About Us" />
    <Header />
    <AboutComponent />
    <Footer />
  </div>
)

export default AboutPage
