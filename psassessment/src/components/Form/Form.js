import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserShield } from '@fortawesome/free-solid-svg-icons'
import './Form.css';

function Form() {
    return (
      <div className="Container">
        <div className='Form-Wrapper'>
          <div className='Form'>
            <div className='Form-Title'>
              <h1 className='Texts'>Taxpayer details</h1>
              <p className='Texts'>All fields are mandatory.</p>
            </div>
            <div className='Form-Input-Wrapper'>
              <div className='Form-Input'>
                <span className='Form-Input-Title'>Email Address</span>
                <span className='Form-Input-Subtitle'>Where should we send your receipt?</span>
                <input placeholder='Email Address'/>
              </div>
              <div className='Form-Input'>
                <span className='Form-Input-Title'>Social Scurity Number</span>
                <span className='Form-Input-Subtitle'>999 999 999</span>
                <input placeholder='999 999 999'/>
              </div>
              <div className='Form-Input'>
                <span className='Form-Input-Title'>Name of Taxpayer</span>
                <input placeholder='Full Name'/>
              </div>
              <div className='Form-Input'>
                <span className='Form-Input-Title'>Payment Amount</span>
                <input placeholder='Payment Amount' type='number'/>
              </div>
              <div className='Form-Footer'>
                <span className='Form-Input-Subtitle'>Your information will be encrypted and will not be shared with anyone except the Canada Revenue Agency.</span>
                <div className='Terms-Wrapper'>
                  <span className=''>By clicking the Continue Button,</span>
                  <a href='https://paysimply.paymentsource.ca/terms-and-conditions' target='_blank' rel="noreferrer"> you agree to Payment Source's Terms.</a>
                </div>
              </div>
            </div>
          </div>
          {FormInfo()}
        </div>
        <div className='Form-Submit-Wrapper'>
          <a href='https://www.paysimply.ca/CRA/Details.aspx?t=1011' target='_blank' rel="noreferrer" className='Form-Submit-Button'>
            <span>Back</span>
          </a>
          <a href='https://www.paysimply.ca/CRA/Details.aspx?t=1011' target='_blank' rel="noreferrer" className='Form-Submit-Button'>
            <span>Continue</span>
          </a>
        </div>
      </div>
    )
  }

  function FormInfo() {
    return (
      <div className='Form-Info'>
        <div className="Main-Info">
          <h3>Payment Recipient</h3>
          <p>Canada Revenue Agency</p>
          <a href="https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/pay-credit-card.html" target='_blank' rel="noreferrer">
            https://www.canada.ca</a>
        </div>
        <div className="Main-Info">
          <h3>Individual Taxes</h3>
          <p>Individual (T1)</p>
          <p>Individual (T1) Tax amount owning</p>
        </div>
        <div className="Secure-Site">
          <FontAwesomeIcon icon={faLock} color="#005600" />
          <span>This is a secure site</span>
        </div>
        <div className="Protect-Wrapper">
          <div className="Protect-Wrapper-Title">
            <FontAwesomeIcon icon={faUserShield} />
            <span> Protect yourself against fraud.</span>
          </div>
          <a href="https://www.canada.ca/en/revenue-agency/corporate/security/protect-yourself-against-fraud.html" target='_blank' rel="noreferrer">
            <span>Visit the CRA site for more information.</span>
          </a>
        </div>
      </div>
    )
  }
  
  export default Form;