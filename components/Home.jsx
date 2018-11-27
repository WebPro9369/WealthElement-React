import React from 'react'
import Link from 'next/link'
import { Button } from 'antd'
// import imgMain from '/static/images/mainbackground.png'
// import imgTile1 from '/static/images/home_tile_1.png'
// import imgTile2 from '/static/images/home_tile_2.png'
// import imgTile3 from '/static/images/home_tile_3.png'

const Home = () => (
  <div className="home-main-wrapper">
    <div className="home-section-1">
      <div className="home-sec1-text-wrapper">
        <p className="home-sec1-text-large">Build Significant Wealth Investing in Stocks.</p>
        <p className="home-sec1-text-medium">Wealth Element is an online investing solution for people who refuse to settle for average returns. For people who want to take control of their lives and know it takes time, brains and effort to achieve it. If you are one of those people, …</p>
        <div className="home-sec1-button-wrapper">
          <Button className="we-button home-button"><Link href="/get-started"><a>Start with a Free Plan</a></Link></Button>
        </div>
        <p className="home-sec1-text-small">
          <a href="#">…or watch video</a>
        </p>
      </div>
      <div className="home-image-wrapper">
        {/* <img src={imgMain} width="100%" height="100%" alt=""/> */}
        <img src="/static/images/mainbackground.png" width="100%" height="100%" alt=""/>
      </div>
    </div>
    <div className="home-section-2">
      <div className="home-sec2-text-wrapper">
        <div>
          <p className="we-text-small-yellow">INVEST FOR SUCCESS</p>
          <p className="we-text-large">Discover What’s Possible</p>
          <p className="we-text-small">We believe everyone should have access to the same investment opportunities as the ultra-wealthy.  Discover why successful people prefer Active Investment strategies instead of Passive Strategies or index funds.</p>
        </div>
        <div>
          <p className="we-text-small-yellow">PUT YOUR MONEY TO WORK INTELLIGENTLY</p>
          <p className="we-text-large">Harness the Power of Systematic Investing</p>
          <p className="we-text-small">We combine modern technology and fundamental investment research to help you grow, preserve and manage your savings.</p>
          <p className="we-text-small">Computers perform certain things better than humans. Humans perform certain things better than computers. In investing, nothing beats the right combination of both.  We use proprietary software to identify possible investment opportunities based on quantitative models and human judgement to sort through those opportunities and select the best.</p>
          <p className="we-text-small home-sec2-text-link"><a href="#">More on our Investment Approach</a></p>
        </div>
      </div>
      <div className="home-sec2-image-wrapper">
        {/* Missing square */}
      </div>
    </div>
    <div className="home-section-3">
      <div className="home-sec3-main">
        <p className="we-text-small-yellow">Join the investing [R]evolution</p>
        <p className="we-text-large">Millions of Investors are now using <span className="span-unbreak">Robo-advisors.</span><br />You should too.</p>
        <p className="we-text-small">Building wealth has never been easier. You can get started in less than 5 minutes. Simply</p>
        <div className="home-flex-box">
          <div className="home-card-item">
            {/* <img src={imgTile1} width="100%" alt=""/> */}
            <img src='../static/images/home_tile_1.png' width="100%" alt=""/>
            <div className="home-card-text">
              <div className="home-card-number">1.</div>
              <p><b>Open an Account.</b> Open a brokerage account designating us as your investment adviser.</p>
            </div>
          </div>
          <div className="home-card-item">
          {/* <img src={imgTile2} width="100%" alt=""/> */}
          <img src='../static/images/home_tile_2.png' width="100%" alt=""/>
            <div className="home-card-text">
              <div className="home-card-number">2.</div>
              <p><b>Add Funds.</b> You can start with any amount, set up automatic deposit, and add funds anytime from your phone or computer. </p>
            </div>
          </div>
          <div className="home-card-item">
          {/* <img src={imgTile3} width="100%" alt=""/> */}
          <img src='../static/images/home_tile_3.png' width="100%" alt=""/>
            <div className="home-card-text">
              <div className="home-card-number">3.</div>
              <p><b>Let Us Do the Rest.</b> We’ll manage your money for you.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sec3-sub">
        <p className="we-text-small-yellow">Engineered to Change Lives</p>
        <p className="we-text-large">Frankly, Our Investment Solution is not for <br />Everyone.</p>
        <p className="we-text-small">We built Wealth Element for hard-working, ambitious people who simply don’t have the time or desire to read hundreds of financial reports each year in search of the best investment opportunities; People who want the best in life and are willing to be disciplined and patient in their pursuit.</p>
        <p className="we-text-small">If you’re one of those people, &nbsp;<a href="#"><b>Join Us</b></a>.</p>
        <p className="we-text-small">We’ll invest your money in a small group of great companies, selected on the basis of value and quality. Taking a long-term, business-owner approach, is the best way to achieve life-changing results. </p>
      </div>
      <div className="home-sec3-bottom">
        <p className="we-text-extra-large">Let Us Help You Build Real and <br />Permanent Wealth.</p>
        <Button className="we-button"><Link href="/get-started"><a>Get Started!</a></Link></Button>
      </div>
    </div>
  </div>
)

export default Home
