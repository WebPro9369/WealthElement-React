import React from 'react'
import Link from 'next/link'
import { Button, List, Popover } from 'antd'
import PopMenu from './PopMenu'

const Header = () => (
  <div className="header-wrapper">
    <div className="header-logo-wrapper">
      **LOGO**
    </div>
    <div className="header-links-wrapper">
      <Link href="/"><a className="header-link">Home</a></Link>
      <Link href="/insights"><a className="header-link">Insights</a></Link>
      <Link href="#"><a className="header-link">Log in</a></Link>
      <Button className="header-button-try we-button">Try It Now</Button>
    </div>
    <div className="header-popover-wrapper">
      <PopMenu
        dataSource={[{
          text: 'Home',
          link: '/'
         }, {
           text: 'Insights',
           link: '/insights'
         }, {
           text: 'Log In',
           link: '#'
        }, {
          text: 'Try it Now',
          link: '#'
        }]}
      />
    </div>
  </div>
)

export default Header;