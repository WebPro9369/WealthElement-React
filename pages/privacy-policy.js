import React from 'react'
import PrivacyPolicyComponent from '../components/Privacy_Policy'
import Head from '../components/head'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
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
