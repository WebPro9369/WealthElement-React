import React from 'react'
import { Icon, Input, Collapse } from 'antd'

const Panel = Collapse.Panel

const SupportComponent = () => (
  <div className="support-page">
    <p className="we-text-normal we-text-yellow">
      SITE SUPPORT
    </p>
    <div className="sup-search-container">
      <p className="we-text-extra-large we-text-darkgreen">
        We’re here to help!
      </p>
      <Input
        addonBefore={<Icon type="search" />}
        size="large"
        placeholder="Search"
      />
    </div>
    <div className="sup-documents-container">
      <p className="we-text-extra-large">
        Forms & Legal Documents
      </p>
      <div className="sup-documents-content">
        <p className="we-text-medium">
          Client Advisory Agreement.
        </p>
        <p className="we-text-normal">
          These are the terms that you agree to as an Abbilon client.
        </p>
      </div>
      <div className="sup-documents-content">
        <p className="we-text-medium">
          Form ADV Part 2A
        </p>
        <p className="we-text-normal">
          Provides detailed information about Abbilon’s business practices, fees, brokerage practices, and investment methodologies.
        </p>
      </div>
    </div>
    <div className="sup-faq-container">
      <p className="we-text-extra-large we-text-darkgreen sp-faq-title">
        FAQ
      </p>
      <Collapse>
        <Panel header="Getting Started" key="1">
          <p className="sp-faq-content-question">
            How do I open an account and start investing with Wealth Element?
          </p>
          <p>
            Simply click on the “Start with a Free Plan” or “Let’s Get Started” on the home page and follow the wizard. Takes less than 3 minutes. The Wizard will take you through three simple steps to open an account, so you can start investing with Abbilon:
          </p>
          <p>
            Step 1: Create an Investment Plan. When you click on “Start with a Free Plan” or “Let’s Get Started” we will ask you a few brief questions that will help us get to know you and your financial goals (If you don't know the exact answer to a question, that's ok – simply use your best estimate – you can change it later). After the last question, we will present you with a recommended portfolio of stocks that we believe can best help you achieve your financial goals.
          </p>
          <p>
            Step 2: Review Your Investment Plan. The investment plan page details what we would buy for you, the percentages we would buy it in, and the projected balance of your account based on certain assumptions (i.e., constant annual savings rate, income increases, and investment returns). Of course, we cannot guarantee investment results – your results may be significantly different. We show you projected performance to illustrate how much wealth you could build saving regularly and investing well. Take your time and explore this investment plan page.
          </p>
          <p>
            Step 3: Open an Account. Once you're comfortable with your investment plan, click on "open an account." We will ask you a few more questions about your financial profile. Then we will ask you to link your bank account and fund your Abbilon account. Please be sure to read the Client Agreement and Form ADV Part II disclosures before submitting your account application.
          </p>
          <p>
            Once your account is funded, we will begin implementing your investment plan.
          </p>
          <p className="sp-faq-content-question">
            How do I put money into my Abbilon account?
          </p>
          <p>
            You will need to link you checking or savings account to your Abbilon account. To link your account, we will ask you for your account number and bank routing number. You can obtain both from the bottom of your bank account checks.
          </p>
          <p className="sp-faq-content-question">
            Is there a minimum amount required to open an Abbilon account?
          </p>
          <p>
            No, you can start investing with any amount. But remember that the purpose for investing is to achieve your long-term financial goals, so we recommend investing at least 5% of your income each month. You should only invest money that you don’t expect to use in the short-term (i.e., less than two years).
          </p>
          <p className="sp-faq-content-question">
            How old must I be to open an Abbilon account?
          </p>
          <p>
            You must be at least 18 years old to open an account.
          </p>
        </Panel>
        <Panel header="My Account" key="2">
          <p className="sp-faq-content-question">
            What types of accounts does Abbilon currently support?
          </p>
          <p>
            Abbilon currently supports the following account types:
          </p>
          <ul>
            <li>Personal investment accounts (i.e. regular taxable brokerage accounts)</li>
            <li>Joint Accounts</li>
            <li>IRAs, Roth IRAs</li>
            <li>Trust Accounts</li>
            <li>Corporate Accounts (such as LPs, LLCs, and others)</li>
          </ul>
          <p className="sp-faq-content-question">
            Can I transfer my outside brokerage account into my Abbilon account?
          </p>
          <p>
            Yes, you can transfer your existing brokerage or investment account from an outside financial institution or broker-dealer in its entirety to your Abbilon Managed Account at Interactive Brokers.
          </p>
          <p>
            If you wish to transfer an outside account to your Abbilon account, please email us at support@abbilon.com. Write “Account Transfer Request” on the subject line, provide (a) your name, (b) the name of the institution where the account is held, and (c) the account number. We will help you transfer your outside account to Abbilon promptly and smoothly.
          </p>
          <p className="sp-faq-content-question">
            How do I deposit money in my Abbilon account?
          </p>
          <p>
            We currently offer two funding methods:
          </p>
          <p>
            ACH bank transfers: This option lets you move funds directly between a checking or savings account and your Abbilon account. Once you link your bank account electronically, we transfer your money electronically and allow you to make additional deposits at any time.
          </p>
          <p>
            In most cases, bank transfers will be deposited into your Abbilon account within two to three business days. Once you have linked a bank account to your Abbilon account, you will also be able to schedule monthly recurring deposits with Autoinvest. The amount you choose to autoinvest will be transfer on the 1st of each month from your bank account to your Abbilon account.
          </p>
          <p>
            Wire Transfers: This option lets you transfer funds from your bank account to your Abbilon account via wire transfer. To do so, you will need to initiate a wire transfer from your bank account to your Abbilon account. In most cases, the funds will be deposited in your account the next business day after the wire transfer is initiated.
          </p>
          <p>
            Your funds will be invested immediately thereafter. Please note that your bank may charge a fee for this service.
          </p>
          <p className="sp-faq-content-question">
            Is there a minimum amount required to open an Abbilon account?
          </p>
          <p>
            No, you can start investing with any amount. But remember the purpose for investing is to achieve long term financial goals. You should only invest money in your Abbilon account that you don’t expect to use in the short-term (i.e., less than two years).
          </p>
          <p className="sp-faq-content-question">
            How old must I be to open an Abbilon account?
          </p>
          <p>
            You must be at least 18 years old to open an Abbilon account.
          </p>
          <p className="sp-faq-content-question">
            Will I have to submit a copy of my government issued ID?
          </p>
          <p>
            In some instances, Abbilon may require additional information to verify your identity to open your account. If that's the case, we will ask you to send us a photo of your government issued identification.
          </p>
          <p className="sp-faq-content-question">
            Why does Abbilon need my social security number?
          </p>
          <p>
            The Patriot Act requires all financial institutions to obtain, verify, and record information that identifies each person opening an account. We also require your social security number to issue tax reporting forms to you at the end of each year.
          </p>
          <p className="sp-faq-content-question">
            Can I open multiple Abbilon accounts?
          </p>
          <p>
            Yes, you can open more than one account. Some people like to open dedicated accounts for each of their investment needs such as retirement or college education.
          </p>
        </Panel>
        <Panel header="Fees and Taxes" key="3">
        <p className="sp-faq-content-question">
            How much does Abbilon charge for its services?
          </p>
          <p>
            We charge a quarterly management fee of 0.25% of assets under management (“AuM”), or 1% annually. In years when your account performance does not beat the S&P 500 Index, we will reimburse your management fee.
          </p>
          <p>
            Your AuM is calculated based on the total market value of your account at the end of each quarter. As an example, an account with a balance of $10,000 at the end of the calendar quarter will be charged $25.00. Assuming the same balance each quarter, the account will be charged $100 for the year.
          </p>
          <p>
            The management fee covers our advisory and management service costs. It does not cover trading commissions or custody fees charged by third party service providers.
          </p>
          <p>
            Statements and confirms are defaulted to electronic delivery. You can request paper confirms and statements if you choose, but there may be a cost associated with such paper confirms or statements. Paper confirm and statement fees will also occur if there is a typo in your email address that causes these documents to be bounced back as undeliverable.
          </p>
          <p>
            To avoid charges or interruptions, remember to update your email address immediately by logging in and updating your profile.
          </p>
          <p className="sp-faq-content-question">
            Will I incur trading costs in addition to the management fee?
          </p>  
          <p>
            Yes, trading and commission costs are not included in the management fee. 
          </p>
          <p className="sp-faq-content-question">
            Will I have to pay taxes on my investments?
          </p>
          <p>
            Generally, you must pay taxes on any dividends received or capital gains realized on any investments. However, Abbilon does not provide tax advice. Any specific questions related to your taxes should be directed to a tax professional. For information on the amounts and types of taxes you may incur from your investments, go to <a href="http://www.irs.gov/pub/irs-pdf/p550.pdf" target="_blank">http://www.irs.gov/pub/irs-pdf/p550.pdf</a>
          </p>
          <p className="sp-faq-content-question">
            Which tax documents should I receive?
          </p>
          <p>
            You will receive one or more of the following tax documents electronically via e-mail or by logging in to your Abbilon account:
          </p>
          <ul>
            <li>
            1099-B: This form will summarize the proceeds of all your sale transactions from a given year (i.e., 2017). These values must be reported to the IRS when you file your taxes. If you did not sell any investments during the year, you will not receive a 1099-B.
            </li>
            <li>
              1099-DIV: You will receive this form if your investments paid dividends of $10 or more in a calendar year. If you received dividends under this amount, you will not receive this form.
            </li>
            <li>
              1099-INT: You will receive this form if you earned interest of $10 or more that was not previously displayed on the 1099-B. If you received interest under this amount, or if the interest was displayed on the 1099-B, you will not receive this form.
            </li>
            <li>
              1042S: If you are not a US citizen, and if you are subject to income withholding in the United States, you will receive this form to report your income that is subject to withholding.
            </li>
          </ul>
          <p>
            If your social security number is incorrectly displayed on your tax form, please email us at support@abbilon.com and let us know. We will give you directions on how to update your SSN and request a corrected form.
          </p>
          <p className="sp-faq-content-question">
            What is a Bank Transfer or ACH Reversal Fee?
          </p>
          <p>
            There is a $30.00 fee Interactive Brokers will charge clients if a transfer of funds is cancelled. This may occur when there are insufficient funds in your bank account, there is a duplicate transaction, the transaction is denied, or when the type of account is incorrect. Abbilon is not responsible for any ACH reversal fees incurred by the user.
          </p>
          <p className="sp-faq-content-question">
            I received an overdraft fee because of my Abbilon account. What should I do?
          </p>
          <p>
            Abbilon reminds all clients to always make sure that their bank account has the proper funds before committing a transfer to their Abbilon account. If, for any reason, transfers/investments made by you (or because of a setting which you configured in the account) are charged back due to insufficient funds or cause an overdraft on your checking account, Abbilon will not be responsible for any of these NSF or overdraft fees charged to you by your bank.
          </p>
          <p>
            In the event of an Interactive Brokers bank reversal, you will incur a $30 fee. Abbilon is not responsible for any ACH reversal fees incurred by the client.
          </p>
          <p className="sp-faq-content-question">
            Are there early withdrawal fees?
          </p>
          <p>
            No, there are no early, standard, or other withdrawal fees. It is always free to move money in and out of your Abbilon account.
          </p>
        </Panel>
        <Panel header="Money Transfers" key="4" >
          <p className="sp-faq-content-question">
            How can I add Funds to my Abbilon Managed Account?
          </p>
          <p>
            There are many ways to add funds to your Abbilon Managed Account at Interactive Brokers: 
          </p>
          <p>
            US Automated Clearing House (ACH) Transfer Initiated at IB - Recommended
          </p>
          <p>
            Description:  Initiation of an ACH transfer enables you to automatically deposit funds from a US bank to IB. You will be required to enter your bank's ABA number and your bank account number. If you do not know your bank's ABA number, you can enter the bank name and city and search for the correct ABA number. You will be required to verify each new instruction.
          </p>
          <p>
            Time to Arrive: 
          </p>
          <p>
            ACH requests of more than $25,000 will be received from your bank on the next business day and credited to your account after four business days under normal circumstances.
          </p>
          <p>
            ACH requests of $25,000 or less received by 11:00am ET will be credited to your account same day and available to trade after four business days under normal circumstances.
          </p>
          <p>
            ACH requests of $25,000 or less received after 11:00am ET will be received from your bank on the next business day and credited to your account after four business days under normal circumstances.
          </p>
          <p>
            Limitations: 
          </p>
          <p>
            ACH deposits are limited to $100,000 over seven business days. Same day ACH deposits are limited to $25,000.
          </p>
          <p>
            Only available for US currency deposits from an account held in your name at a US bank that allows ACH deposits. Funds may be withdrawn after the four-day credit hold.
          </p>
          <p>
            If funds are withdrawn to a bank other than the originating bank via ACH, a 44-business-day withdrawal hold period will be applied.
          </p>
          <p>
            ACH deposits require a security device which can be obtained through the Secure Login System
          </p>
          <p className="sp-faq-content-question">
            ACH Initiated at Your Bank
          </p>
          <p>
            Description: Electronic notification that we will match to your transfer when it arrives. You must contact your bank to initiate the transfer. Only available for US currency deposits from a US bank.
          </p>
          <p>
            Time to Arrive:  Same as ACH initiated at IB.
          </p>
          <p>
            Limitations: Only available for US currency deposits from an account held in your name at a US bank that allows ACH deposits. Funds may be withdrawn after the four-day credit hold.
          </p>
          <p className="sp-faq-content-question">
            Wire Transfers
          </p>
          <p>
            Description: Same day electronic movement of funds through the fed wire system. You must contact your bank to initiate a wire and to include your IB account name and number on the wire. Specific wire instructions and addresses will be displayed during the deposit notification process.
          </p>
          <p>
            Time to Arrive: From immediate to four business days, depending on your bank. Non-U.S. banks are generally at the longer end of the range. Credit to account is immediate upon arrival. IB applies a one-day holding period to GBP Faster Payments.
          </p>
          <p>
            Limitations:
          </p>
          <p>
            The Withdrawal Hold Period is three business days (you may withdraw funds after three business days). A wire cannot be internally transferred during the three-day hold period.
          </p>
          <p>
            If funding an account with ILS, it is important that you request your bank to send the funds via the Zahav system. Funds received via the Masav (Bank of Israel's Automated Clearing House) system will not be accepted and will be returned.
          </p>
          <p className="sp-faq-content-question">
            By Check (All checks including retirement plan checks)
          </p>
          <p>
            Description: 
            <br/>Deposit funds by mailing a check to IB. Follow the instructions below:
          </p>
          <ul className="sp-faq-content-list-style-decimal">
            <li>
              Make check payable to Interactive Brokers LLC
            </li>
            <li>
              Write your IB account number on the check.
            </li>
            <li>
              Sign and date your check.
            </li>
            <li>
              Mail your check to one of the addresses listed below. 
            </li>
          </ul>
          <p>
            If you are sending your check via overnight delivery service (FedEx, DHL, UPS, etc) 
          </p>
          <p>
            Interactive Brokers LLC
            <br />8 Greenwich Office Park
            <br />Attn: IBCD
            <br />Greenwich, Connecticut 06831-5149
            <br />United States 
          </p>
          <p>
            If you are sending your check via regular mail or US Postal Service (USPS) EXPRESS MAIL 
          </p>
          <p>
            Interactive Brokers LLC
            <br />P.O. Box 5235
            <br />Attn: IBCD
            <br />Greenwich, Connecticut 06831-0504
            <br />United States
          </p>
          <p>
            Take note that Interactive Brokers Canada customers cannot fund their accounts with cheques or bank drafts.
          </p>
          <p>
            Time to Arrive: Depends on the speed of the mail. Under normal circumstances we deposit funds to your account on the same business day of check arrival.
          </p>
          <p>
            Limitations: 
            <br/>
            USD Checks Only Bank, Bill Payment and Personal checks for US Dollars are accepted. Click here for a list of acceptable/unacceptable check types. Funds are credited to the account after a six-business day credit hold, with the exception of Bank Checks, which are credited immediately.
            <br/>
            HKD Checks Only personal checks are accepted. Funds are credited within one business day after we receive official confirmation from our bank that the funds have cleared. The Withdrawal Hold Period is three business days (you may withdraw funds after three business days).
          </p>
          <p className="sp-faq-content-question">
            Online Bill Payment
          </p>
          <p>
            Description: A check or electronic fund transfer that originates from an online payment service provided by your financial institution. For US checks, you add Interactive Brokers to your personal payee list and your bank mails a check for you. For electronic fund transfers, you select Interactive Brokers from your bank's list of merchants and your bank sends an electronic payment.
          </p>
          <p>
            Time to Arrive: Electronic fund transfers are credited to your account immediately. US checks will be credited to your account after six business days.
          </p>
          <p>
            Limitations: Electronic fund transfers: you may withdraw your funds after three business days. US checks: you may withdraw your funds after six business days.
          </p>
          <p className="sp-faq-content-question">
            Direct Deposit
          </p>
          <p>
            Description: Direct deposit is a convenient and easy way to fund your brokerage account.  To have your paycheck, pension, government agency or other recurring payment deposited into your account, provide your routing (ABA) number and account number to your employer, government agency, or third party.
          </p>
          <p>
            Time to Arrive: Depending on your processor, it may take a few payment cycles for your direct deposit to become effective.
          </p>
          <p>
            Limitations: Limited to your payroll, Social Security, pension, tax refund, or other recurring payments from a third party. Direct deposit is not currently available for IRA accounts.
          </p>
          <p className="sp-faq-content-question">
            Direct Rollover (IRA account only)
          </p>
          <p>
            Description: You may transfer assets from an existing 401K or other retirement plan into a Direct Rollover Account only. During the transaction process, you will be prompted to complete the information about your existing retirement plan which you must print, sign and send back to IB. IB will sign this form and forward it to your existing retirement plan to initiate the Direct Rollover.
          </p>
          <p>
            Time to Arrive: Depends on third-party administrator.
          </p>
          <p>
            Limitations: Only available in the US for IRAs.
          </p>
          <p className="sp-faq-content-question">
            Trustee-to-Trustee (IRA account only)
          </p>
          <p>
            Description: You may transfer assets from an IRA account held with another trustee/custodian to an IB IRA account. The assets are transferred directly trustee/custodian to trustee/custodian, with no distribution of assets to you. During the transaction process, you will be presented with an IRA Transfer In Authorization form, which you must print out, complete and return to IB. You can also download the PDF form here.
          </p>
          <p>
            Time to Arrive: Depends on third-party administrator.
          </p>
          <p>
            Limitations: Only available in the US for IRAs.
          </p>
          <p className="sp-faq-content-question">
            Late Rollover (IRA account only)
          </p>
          <p>
            Description: You may transfer assets from an existing 401K or other retirement plan into a Direct Rollover Account only. During the transaction process, you will be prompted to complete the information about your existing retirement plan which you must print, sign and send back to IB. IB will sign this form and forward it to your existing retirement plan to initiate the Direct Rollover.
            <br/>You are eligible to use a late rollover if you self-certify that you qualify for a waiver of the 60-day rollover requirement.
          </p>
          <p>
            Time to Arrive: Depends on third-party administrator.
          </p>
          <p>
            Limitations: Only available in the US for IRAs.
          </p>
          <p className="sp-faq-content-question">
            Employee/Employer SEP Contribution (IRA account only)
          </p>
          <p>
            Description: A SEP plan allows employers to contribute to traditional IRAs (SEP-IRAs) set up for employees. Both employees and employers can transfer funds to the account.
          </p>
          <p>
            Time to Arrive: Depends on third-party administrator.
          </p>
          <p>
            Limitations: Only available in the US for IRAs.
            <ul>
              <li>
                Limited to ACH, check, or wire.
              </li>
              <li>
                Employees limited to $5,500 ($6500 over 50)
              </li>
              <li>
                Employers limited to $54,000
              </li>
            </ul>
          </p>
          <p className="sp-faq-content-question">
            Recharacterization (IRA account only)
          </p>
          <p>
            Description: You may treat a regular contribution made to a Roth or Traditional IRA as having been made to the other type of IRA.
          </p>
          <p>
            Time to Arrive: Depends on third-party administrator.
          </p>
          <p>
            Limitations: 
            <ul>
              <li>
                Only available in the US for IRAs.
              </li>
              <li>
                Limited to ACH, check, or wire.
              </li>
            </ul>
          </p>
          <p className="sp-faq-content-question">
            Roth IRA Conversion (IRA account only)
          </p>
          <p>
            Description: An IRA conversion is a transfer of Traditional, Traditional Rollover or SEP IRA assets to a Roth IRA with the same custodian or as a trustee-to-trustee transfer or rollover. A conversion is subject to Form 1099-R reporting for the distribution from the non-Roth and Form 5498 for the contribution to the Roth IRA.
          </p>
          <p>
            Time to Arrive: Depends on third-party administrator.
          </p>
          <p>
            Limitations: Only available in the US for IRAs. Limited to check or wire.
          </p>
          <p className="sp-faq-content-question">
            Automatic Investing or Recurring Transactions
          </p>
          <p>
            You can schedule any deposit transaction except Direct Rollovers and Trustee-to-Trustee deposits to recur at monthly, quarterly or yearly intervals. During the deposit notification process, you will be given the opportunity to save your transaction as a recurring transaction. The bank information you enter for the transaction can be used for both recurring and non-recurring transactions. You set up recurring transactions on the Fund Transfers page in Account Management.
          </p>
        </Panel>
        <Panel header="Investment Strategies" key="5">
          <p className="sp-faq-content-question">
            What is Abbilon?
          </p>
          <p>
            Abbilon Investments is an online investment adviser. Our mission is to help individual investors achieve permanent financial success. We pursue this mission by facilitating automatic savings and putting those savings to work intelligently in stocks of great companies when they are cheap.
          </p>
          <p className="sp-faq-content-question">
            How is Abbilon different from other investment advisors?
          </p>
          <p>
            We are different from traditional investment advisers in two important ways:
          </p>
          <p>
            First, Superior Returns Over Time: Unlike other investment advisers, we recommend portfolios of individual company stocks, not mutual funds, ETFs or index funds (“Funds”). We believe owning shares of good companies directly has three distinct advantages over owning Funds:
          </p>
          <ul>
            <li>
              Higher Potential Returns. When you invest in Funds or “asset allocation strategies” your returns are limited to market averages such as the S&P 500 index. Historically, the S&P 500 index has returned annual compounded averages of about 10% - but average investors have historically earned much less. This is due primarily to bad investment decisions and high fees. By putting your money in individual company stocks using software, our goal is help you earn significantly higher than market average returns over time. For example, compounded over long periods, earning 15% instead of 10% can be the difference between simply enduring life and actually enjoying life.
            </li>
            <li>
              Lower Taxes. By investing directly in stocks, you incur tax liabilities only when you sell at a profit. By owning Funds, you may be exposed to certain tax liabilities even if you don’t sell. Additionally, when you sell your stocks at a gain, which can be upset by selling other stocks at a loss. With this trade-off, it is easier to harvest tax losses and pay much lower taxes over time.
            </li>
            <li>
              Lower Risks. The primary cause of individual investors failure is their own emotional overreaction to temporary events – buying too high or selling when markets decline. We use software to help us decide when to buy or sell securities. This minimizes the effects of human errors and emotional, short-sighted decisions. Additionally, by buying only companies we understand, and only when prices are below intrinsic value, we create a margin of safety that inherently reduces the risk of permanent loss.  
            </li>
          </ul>
          <p>
            Client-Friendly Fee Structure: We don’t charge a management fee unless you earn money. For any calendar year in which your performance is negative, we will waive or reimburse the management fee - we only get paid when you make money.
          </p>
          <p className="sp-faq-content-question">
            What is Abbilon’s investment philosophy?
          </p>
          <p>
            The following principles guide our investment strategies:
          </p>
          <ul className="sp-faq-content-list-style-decimal">
            <li>
              All financial assets have an Intrinsic Value (defined as the present value of all the cash the asset will produce in the future).
            </li>
            <li>
              We can estimate the Intrinsic Value of many assets, although certainly not all assets – within a reasonable degree of accuracy.
            </li>
            <li>
              Market price often differs from Intrinsic Value (sometimes significantly), but sooner or later price and value will match.
            </li>
            <li>
              If we can purchase stocks of different companies at prices significantly below Intrinsic Value (with a large margin of error for bad estimates, un-anticipated changes, etc), there is a strong probability that, as a group, those purchases will produce large profits over a long period of years.
            </li>
          </ul>
          <p className="sp-faq-content-question">
            What types of investments will I own in my Abbilon account?
          </p>
          <p>
            Your investments will consist primarily of stocks. Our investment objective is to generate superior returns on your money over the long run. We pursue this objective primarily by purchasing stocks of companies we believe have high fundamental quality, strong financial condition, and favorable long-term prospects. We try to mitigate potential loss of capital by purchasing stocks in a diverse group of companies – typically 12 to 25 companies – at prices significantly below what they are worth to a private owner.
          </p>
          <p>
            This strategy only works if you are patient and truly have a long-term investment goal.
          </p>
          <p className="sp-faq-content-question">
            Where will the money in my account be held?
          </p>
          <p>
            The custodian for the assets in your account will be Apex Clearing Corporation, a member SIPC and FINRA. We will not have the authority to withdraw or transfer your money. Only you can do that.
          </p>
          <p className="sp-faq-content-question">
            How does Abbilon execute trades for my account?
          </p>
          <p>
            We use Third Party Trade LLC, an introducing broker/dealer, member FINRA and SIPC. When executing trades on your behalf, we may combine your trades with similar trades in the same securities for other clients. This is known as an “aggregated” or “bunched” trade. We do this to facilitate the trading of securities and treat all clients fairly. The prices we obtain in bunched trades may be higher or lower than the prices obtain if trades were executed individually.
          </p>
          <p className="sp-faq-content-question">
            Does Abbilon receive payments or other benefits for executing trades?
          </p>
          <p>
            No. We do not get paid for executing trades with TPT or any other broker-dealer.
          </p>
          <p className="sp-faq-content-question">
            Does Abbilon sell, lend or share my personal private information to third parties?
          </p>
          <p>
            No. We do not, and will not, share your personal information such as name, address, social security or account holdings with anyone except as necessary to conduct securities transactions or if mandated by law.
          </p>
          <p className="sp-faq-content-question">
            Is Abbilon regulated by any Federal or State Agencies?
          </p>
          <p>
            Yes. Abbilon is registered with the U.S. Securities and Exchange Commission (“SEC”). Registration does not imply a certain level of skill or training, nor does it imply endorsement by the SEC.
          </p>
          <p>
            As a registered investment adviser, however, we have a fiduciary duty to act always in the best interest of our clients. We must comply with all the rules and regulations under the Investment Advisers Act of 1940, as amended. We must also file Form ADV with the SEC and disclose certain information about our business practices and activities. For more information, you can check our registration and filings at the SEC’s website at <a href="https://www.sec.gov/reportspubs/investor-publications/investor-brokershtm.html" target="_blank">https://www.sec.gov/reportspubs/investor-publications/investor-brokershtm.html</a>.
          </p>
        </Panel>
        <Panel header="Other" key="6">
          <p>
            For any other questions, please contact us at <a href="mailto:support@abbilon.com"><b>support@abbilon.com</b></a>
          </p>
        </Panel>
      </Collapse>
    </div>
  </div>
)

export default SupportComponent