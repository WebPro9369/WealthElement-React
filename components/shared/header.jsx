import React from 'react'
import Link from 'next/link'
import { Button } from 'antd'

const Header = () => (
  <div className="header-wrapper">
    <div className="header-logo-wrapper">
      **LOGO**
    </div>
    <div className="header-links-wrapper">
      <Link href="/"><a className="header-link">Home</a></Link>
      <Link href="/insights"><a className="header-link">Insights</a></Link>
      <Link href="#"><a className="header-link">Log in</a></Link>
      <Button className="header-button-try">Try It Now</Button>
    </div>
  </div>
)

export default Header;