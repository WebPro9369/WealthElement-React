import React from 'react'
import GetStartedComponent from '../components/GetStarted'
import Head from '../components/head'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import '../styles/index.sass'

const GetStartedPage = () => (
  <div className="about">
    <Head title="Wealth Element - Get Started" />
    <Header />
    <GetStartedComponent />
    <Footer />
  </div>
)

export default GetStartedPage
