import React from 'react'
import { Button, Radio } from 'antd'

const RadioGroup = Radio.Group

const GetStartedComponent = () => (
  <div className="get-started-page">
    <p className="we-text-normal we-text-yellow">
      STEP 1 OUT OF 12
    </p>
    <p className="we-text-large we-text-darkgreen">
      Welcome to Wealth Element. 
      <br/>We will ask you a set of questions to get you started.
    </p>
    <p className="we-text-normal we-text-darkgreen">
      Let's start by figuring out your investment goals. Which of the following goals would you like us to help you achieve?
    </p>
    <div className="gs-radio-wrapper">
      <RadioGroup className="gs-radio-group">
        <Radio className="gs-radio-item" value={1}><span className="we-text-normal we-text-darkgreen">Financial Indepedence</span></Radio>
        <Radio className="gs-radio-item" value={2}><span className="we-text-normal we-text-darkgreen">Comfortable Retirement</span></Radio>
        <Radio className="gs-radio-item" value={3}><span className="we-text-normal we-text-darkgreen">Current Income</span></Radio>
        <Radio className="gs-radio-item" value={4}><span className="we-text-normal we-text-darkgreen">Wealth Preservation</span></Radio>
      </RadioGroup>
    </div>
    <div className="gs-buttons-wrapper">
      <Button className="we-button we-button-reversed">Back</Button>
      <Button className="we-button">Continue</Button>
    </div>
  </div>
)

export default GetStartedComponent