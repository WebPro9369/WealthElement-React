import React from 'react'
import Link from 'next/link'
import { Button } from 'antd'
import imgMain from '../static/images/mainbackground.png'
import imgTile1 from '../static/images/home_tile_1.png'
import imgTile2 from '../static/images/home_tile_2.png'
import imgTile3 from '../static/images/home_tile_3.png'

const Home = () => (
  <div className="home-main-wrapper">
    <div className="home-section-1">
      <div className="home-sec1-text-wrapper">
        <p className="home-sec1-text-large">Build Significant Wealth Investing in Stocks.</p>
        <p className="home-sec1-text-medium">Wealth Element is an online investing solution for people who refuse to settle for average returns. For people who want to take control of their lives and know it takes time, brains and effort to achieve it. If you are one of those people, …</p>
        <Button className="home-sec1-button">Start with a Free Plan</Button>
        <div className="home-sec1-text-small">
          <a href="#">…or watch video</a>
        </div>
      </div>
      <div className="home-image-wrapper">
        <img src={imgMain} width="100%" alt=""/>
      </div>
    </div>
    <div className="home-section-2">
      <div className="home-sec2-text-wrapper">
        <div>
          <p className="home-text-yellow">INVEST FOR SUCCESS</p>
          <p className="home-text-large">Discover What’s Possible</p>
          <p className="home-text-small">We believe everyone should have access to the same investment opportunities as the ultra-wealthy.  Discover why successful people prefer Active Investment strategies instead of Passive Strategies or index funds.</p>
        </div>
        <div>
          <p className="home-text-yellow">PUT YOUR MONEY TO WORK INTELLIGENTLY</p>
          <p className="home-text-large">Harness the Power of Systematic Investing</p>
          <p className="home-text-small">We combine modern technology and fundamental investment research to help you grow, preserve and manage your savings.</p>
          <p className="home-text-small">Computers perform certain things better than humans. Humans perform certain things better than computers. In investing, nothing beats the right combination of both.  We use proprietary software to identify possible investment opportunities based on quantitative models and human judgement to sort through those opportunities and select the best.</p>
          <p className="home-text-small home-sec2-text-link"><a href="#">More on our Investment Approach</a></p>
        </div>
      </div>
      <div className="home-sec2-image-wrapper">
        {/* Missing square */}
      </div>
    </div>
    <div className="home-section-3">
      <div >
        <p>Join the investing [R]evolution</p>
        <p>Millions of Investors are now using Robo-advisors. You should too.</p>
        <p>Building wealth has never been easier. You can get started in less than 5 minutes. Simply</p>
        <div>
          <div>
            <img src={imgTile1} alt=""/>
            <p>Open an Account. Open a brokerage account designating us as your investment adviser.</p>
          </div>
          <div>
            <img src={imgTile2} alt=""/>
            <p>Add Funds. You can start with any amount, set up automatic deposit, and add funds anytime from your phone or computer. </p>
          </div>
          <div>
            <img src={imgTile3} alt=""/>
            <p>Let Us Do the Rest. We’ll manage your money for you.</p>
          </div>
        </div>
      </div>
      <div>
        <p>Engineered to Change Lives</p>
        <p>Frankly, Our Investment Solution is not for Everyone.</p>
        <p>We built Wealth Element for hard-working, ambitious people who simply don’t have the time or desire to read hundreds of financial reports each year in search of the best investment opportunities; People who want the best in life and are willing to be disciplined and patient in their pursuit.</p>
        <p>If you’re one of those people, Join Us.</p>
        <p>We’ll invest your money in a small group of great companies, selected on the basis of value and quality. Taking a long-term, business-owner approach, is the best way to achieve life-changing results. </p>
      </div>
      <div>
        <p>Let Us Help You Build Real and Permanent Wealth.</p>
        <Button>Get Started!</Button>
      </div>
    </div>
  </div>
)

export default Home
