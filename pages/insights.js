import React from 'react'
import InsightsComponent from '../components/Insights'
import Head from '../components/head'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import '../styles/index.sass'

const InsightsPage = () => (
  <div className="about">
    <Head title="Wealth Element - Insights" />
    <Header />
    <InsightsComponent />
    <Footer />
  </div>
)

export default InsightsPage
