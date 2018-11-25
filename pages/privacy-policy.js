import React from 'react'
import PrivacyPolicyComponent from '../components/privacy_policy'
import Head from '../components/head'
import Header from '../components/shared/header'
import Footer from '../components/shared/footer'
import '../styles/index.sass'

const PrivacyPolicyPage = () => (
  <div className="about">
    <Head title="Wealth Element - Privacy Policy" />
    <Header />
    <PrivacyPolicyComponent />
    <Footer />
  </div>
)

export default PrivacyPolicyPage
