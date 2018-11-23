import React from 'react'
import Home from '../components/home'
import Head from '../components/head'
import Header from '../components/shared/header'
import Footer from '../components/shared/footer'
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
