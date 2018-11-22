import React from 'react'
import Home from '../components/home.jsx'
import Head from '../components/head.jsx'
import Nav from '../components/nav.jsx'
import '../styles/general.sass'

const HomePage = () => (
  <div className="home">
    <Head title="Home" />
    <Nav />
    <Home />
  </div>
)

export default HomePage
