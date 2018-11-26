import React from 'react'
import Home from '../components/Home'
import Head from '../components/head'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import '../styles/index.sass'

const HomePage = () => (
  <div className="home">
    <Head title="Wealth Element - Home" />
    <Header />
    <Home />
    <Footer />
  </div>
)

export default HomePage
