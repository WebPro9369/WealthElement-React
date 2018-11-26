import React from 'react'
import 'antd/dist/antd.css'
import SupportComponent from '../components/Support'
import Head from '../components/head'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import '../styles/index.sass'

const SupportPage = () => (
  <div className="about">
    <Head title="Wealth Element - Support" />
    <Header />
    <SupportComponent />
    <Footer />
  </div>
)

export default SupportPage
