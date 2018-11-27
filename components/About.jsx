import React from 'react'
// import imgWarren from '/static/images/about_warren.png'

const AboutComponent = () => (
  <div className="about-page">
    <div className="about-section-1">
      <div className="about-sec1-main">
        <div className="about-sec1-main-text">
          <p className="we-text-yellow we-text-normal we-text-semibold">
            ABOUT US
          </p>
          <p className="we-text-extra-large we-text-darkgreen">
            We are on a mission
          </p>
          <p className="we-text-medium we-text-darkgreen we-text-normal-weight">
            To make it easy for everyone to achieve Permanent Financial Success.
          </p>
          <p className="we-text-normal we-text-darkgreen about-sec1-quote">
            <i>“To invest successfully over a lifetime does not require a stratospheric IQ, unusual business insights, or inside information. What’s needed is a sound intellectual framework for making decisions and the ability to keep emotions from corroding that framework.”</i>
          </p>
          <p className="we-text-normal we-text-darkgreen we-text-bold about-sec1-name">
            – Warren Buffett
          </p>
        </div>
        <div className="about-sec1-main-image">
          {/* <img src={imgWarren} width="100%" alt="" /> */}
          <img src="/static/images/about_warren.png" width="100%" alt="" />
        </div>
      </div>
      <div className="about-sec1-sub">
        <p className="we-text-medium we-text-darkgreen we-text-normal">
          We modeled Wealth Element after Warren Buffet’s recommended Framework for making investment decisions and use computer algorithms to help us keep emotions from corroding those decisions.
        </p>
      </div>
    </div>
    <div className="about-section-2">
      <p className="we-text-small-yellow">WHAT WE DO</p>
      <p className="we-text-large">Our Services</p>
      <p className="we-text-small">We provide online investment management services to individuals, families, and institutional clients (Partnerships, corporations, LLCs, Trusts, etc.).
        <br />Our services are designed to help our clients build, grow and preserve wealth by investing directly and intelligently in stocks.
      </p>
      <p className="we-text-small">
        We select investments and design portfolios using a combination of proprietary mathematical models and fundamental research. Our technology allows us to manage multiple accounts simultaneously and to keep objectivity when selecting investments for our clients.
      </p>
      <p className="we-text-small">
        We don't offer mutual funds, or exchange-traded funds.
      </p>
      <p className="we-text-small">
        As an Abbilon Client, you’ll own shares of the companies in your portfolios directly – not through a third party - so you can vote on issues affecting the companies you own.
        <br />We are an online investing solution built to provide effective investment management to everyone, regardless of income level or background.
      </p>
    </div>
    <div className="about-section-3">
      <div className="about-sec3-image">
        {/* <img src={imgWarren} width="100%" alt="" /> */}
        <img src="/static/images/about_warren.png" width="100%" alt="" />
      </div>
      <div className="about-sec3-text">
        <p className="we-text-small-yellow">
          OUR MANIFESTO
        </p>
        <p className="we-text-large we-text-darkgreen">
          Management
        </p>
        <p className="we-text-normal we-text-darkgreen">
          <b>ORIOSTO MEDRANO – Founder and Chief Executive Officer</b>
          <br />Oriosto (“Otto”) Medrano worked in Wall Street for over 20 years, primarily as legal and compliance consultant. He provided regulatory advice to large and small Hedge Funds, Asset Allocators, Insurance Companies and other types of investment management firms. He also worked as a regulator with the Securities and Exchange Commission, where he assisted in the inspection of large mutual fund companies and investment advisors. These positions give Otto an insider’s view of how different investment approaches and methods really work. They also helped him realized that the best investment advice and services are often reserved for the ultra-wealthy, leaving regular folks with mediocre or “average” solutions.
        </p>
        <p className="we-text-normal we-text-italic we-text-darkgreen">
          “Everyone should have an equal chance to build a better future for themselves. That’s way I’ve spent the last 8 years building Abbilon. To bring everyone an opportunity own those great engines of prosperity called stocks.”
        </p>
      </div>
    </div>
    <div className="about-section-4">
      <p className="we-text-small-yellow">
        Designed for Superior Returns
      </p>
      <p className="we-text-large">
        We’re Different
      </p>
      <p className="we-text-normal">
        Unlike other investment advisers, we invest directly individual company stocks, not mutual funds, ETFs or index funds. We believe having a business owner mindset and owning shares of good companies directly has three distinct advantages over owning Funds:
      </p>
      <p className="we-text-normal">
        1. <b>Higher Potential Returns.</b> When you invest in Funds or “asset allocation strategies” your returns are limited to market averages.  Choosing great companies and buying them opportunistically at cheap prices provides better protection against permanent loss and potential for higher returns.
      </p>
      <p className="we-text-normal">
        2. <b>Lower Taxes.</b> By investing directly in stocks, you only owe taxes when you sell at a profit. By owning Funds, you may be exposed to certain tax liabilities even if you don’t sell. Owning shares for the long-term is likely to result in much lower tax liabilities over your lifetime than owning funds.
      </p>
      <p className="we-text-normal">
        3. <b>Lower Risks.</b> Most investors fail to achieve adequate returns primarily because they make emotional driven decisions. Driven by common biases such as fear, greed or short-sightedness, we tend to buy high and sell low, the opposite of smart investing. That’s why we use software to help us identify undervalued securities and make rational decisions.
      </p>
      <p className="we-text-normal">
        4. <b>Client-Friendly Fee Structure.</b> Our interests are in line with client’s interests because, unlike other advisers, for any calendar year in which your performance is below the S&P 500 Index, we’ll waive the management fee.
      </p>
    </div>
    <div className="about-section-5">
      <p className="we-text-large we-text-darkgreen">
        Our Investment Philosophy
      </p>
      <p className="we-text-normal we-text-darkgreen">
        An investment philosophy is a set of beliefs and principles that guide investors’ decision-making process. At Abbilon, we belief the following beliefs and principles are the best way to produce superior risk-adjusted returns over the long term:
      </p>
      <p className="we-text-normal we-text-darkgreen">
        1. <b>Focus on Value.</b> We believe every business has a fundamental or “intrinsic” value which is not necessarily the same as its market price. Often, value and price differ significantly. We focus on value, buying only when price is significantly below our estimate of intrinsic value.
      </p>
      <p className="we-text-normal we-text-darkgreen">
        2. <b>Focus on the Long Term.</b> We invest for the long term. We make investment decisions based upon an assumption that we will hold the security forever. However, if the price gets significantly above intrinsic value, or a better opportunity arises, we would sell it.
      </p>
      <p className="we-text-normal we-text-darkgreen">
        3. <b>Focus on the best opportunities.</b> Risk management is made more effective by holding a limited number of positions and knowing them well.
      </p>
      <p className="we-text-normal we-text-darkgreen">
        4. <b>Focus on Proper Diversification.</b> Diversification is an effective risk reducing tool only when done properly. Owning between 10 and 30 companies in unrelated, uncorrelated industries is more effective than owning 100 to 500 companies in industries which are closely related.
      </p>
    </div>
  </div>
)

export default AboutComponent