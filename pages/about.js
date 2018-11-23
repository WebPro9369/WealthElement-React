import React from 'react'
import AboutComponent from '../components/about'
import Head from '../components/head'
import Header from '../components/shared/header'
import Footer from '../components/shared/footer'
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
