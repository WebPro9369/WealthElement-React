import React from 'react'
import InsightsComponent from '../components/insights'
import Head from '../components/head'
import Header from '../components/shared/header'
import Footer from '../components/shared/footer'
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
