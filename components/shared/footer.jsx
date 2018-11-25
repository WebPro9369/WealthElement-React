import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer-links-wrapper">
      <Link href="/about"><a className="footer-link">About us</a></Link>
      <Link href="/contact"><a className="footer-link">Contact</a></Link>
      <Link href="/termsofuse"><a className="footer-link">Terms of Use</a></Link>
      <Link href="/privacy-policy"><a className="footer-link">Privacy Policy</a></Link>
      <Link href="/support"><a className="footer-link">Support</a></Link>
    </div>
    <div className="footer-text-wrapper">
      <p>Abbilon LLC, doing business as “Wealth Element” and “Abbilon Investments” (collectively, “Abbilon”), is a Registered Investment Adviser providing investment planning and asset management services online.  Abbilon's internet-based services are designed to assist clients in achieving discrete financial goals. They are not intended to provide comprehensive tax advice or financial planning with respect to every aspect of a client's financial situation and do not incorporate specific investments that clients hold elsewhere. Brokerage and custody services provided by unaffiliated third parties, including Interactive Brokers, LLC (“IBT”), a member NYSE, FINRA, and SIPC, regulated by the US Securities and Exchange Commission and the Commodity Futures Trading Commission. </p>
      <p>Investing in securities involves risks. There is always the potential of losing money when you invest in securities. Before opening an account, consider your investment objectives and all charges and expenses. Past performance does not guarantee future results, and the likelihood of investment outcomes are hypothetical in nature. Unless otherwise specified, all return figures shown in this website are for illustrative purposes only and are not actual customer or model returns. Actual returns will vary depending on personal and market circumstances. Not an offer, solicitation of an offer, or advice to buy or sell securities in jurisdictions where Abbilon is not registered. The information provided by Abbilon’s Blog is for educational purposes only and is not investment, legal or tax advice. For more details, see our Form ADV Part 2 and other legal disclosures..</p>
      <p>Investments: Not FDIC Insured • No Bank Guarantee. Copyrights 2018 © Abbilon, LLC. All rights reserved.</p>
    </div>
  </div>
)

export default Footer