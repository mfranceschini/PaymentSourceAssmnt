import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUserShield } from '@fortawesome/free-solid-svg-icons'
import './Form.css';
import InputComponent from "./components/Input";

function Form() {
  const [emailAddress, setEmailAddress] = useState('')
  const [securityNumber, setSecurityNumber] = useState('')
  const [taxPayer, setTaxPayer] = useState('')
  const [paymentAmount, setPaymentAmount] = useState('')
  const [formErrors, setFormErrors] = useState({
    email: undefined,
    ssn: undefined,
    taxpayer: undefined,
    amount: undefined
  })

  function validateEmail() {
    // Regular expression pattern for validating an email address
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if the email address is empty or doesn't match the email pattern
    if (emailAddress === '' || !emailAddress.match(emailPattern)) {
        // Set the formErrors state to indicate an error in the email field
        setFormErrors({...formErrors, email: true});
    } else {
        // Set the formErrors state to indicate no error in the email field
        setFormErrors({...formErrors, email: false});
    }
  }

  function validateSSN() {
      // Format the security number by inserting spaces
      setSecurityNumber(formatNumberWithSpaces(securityNumber));

      function formatNumberWithSpaces(number) {
          // Regular expression to insert spaces after every three digits
          const regex = /(\d{3})(?=\d)/g;
          return number.replace(regex, '$1 ');
      }

      // Check if the security number is empty or has an invalid length
      if (securityNumber === '' || (securityNumber.length < 9 && securityNumber.length > 11)) {
          // Set the formErrors state to indicate an error in the security number field
          setFormErrors({...formErrors, ssn: true});
      } else {
          // Set the formErrors state to indicate no error in the security number field
          setFormErrors({...formErrors, ssn: false});
      }
  }

  function validateTaxpayer() {
      // Check if the taxpayer field is empty or has a length of 0
      if (taxPayer === '' || taxPayer.length === 0) {
          // Set the formErrors state to indicate an error in the taxpayer field
          setFormErrors({...formErrors, taxpayer: true});
      } else {
          // Set the formErrors state to indicate no error in the taxpayer field
          setFormErrors({...formErrors, taxpayer: false});
      }
  }

  function validatePaymentAmount() {
      // Check if the payment amount is empty, less than 1, or greater than 50000
      if (paymentAmount === '' || paymentAmount < 1 || paymentAmount > 50000) {
          // Set the formErrors state to indicate an error in the payment amount field
          setFormErrors({...formErrors, amount: true});
      } else {
          // Set the formErrors state to indicate no error in the payment amount field
          setFormErrors({...formErrors, amount: false});
      }
  }


  return (
    <div className="Container">
      <div className='Form-Wrapper'>
        <div className='Form'>
          {/* Title and description of the form */}
          <div className='Form-Title'>
            <h1 className='Texts'>Taxpayer details</h1>
            <p className='Texts'>All fields are mandatory.</p>
          </div>
          <div className='Form-Input-Wrapper'>
            {/* Form input for Email Address */}
            <div className='Form-Input'>
              <span className='Form-Input-Title'>Email Address</span>
              <span className='Form-Input-Subtitle'>Where should we send your receipt?</span>
              <InputComponent placeholder={'Email Address'} onInput={setEmailAddress} onBlur={validateEmail} hasError={formErrors.email} errorMessage={'Invalid Email'}/>
            </div>
            {/* Form input for Social Security Number */}
            <div className='Form-Input'>
              <span className='Form-Input-Title'>Social Security Number</span>
              <InputComponent placeholder={'999 999 999'} value={securityNumber} onInput={setSecurityNumber} onBlur={validateSSN} hasError={formErrors.ssn} errorMessage={'Invalid SIN'}/>
            </div>
            {/* Form input for Name of Taxpayer */}
            <div className='Form-Input'>
              <span className='Form-Input-Title'>Name of Taxpayer</span>
              <InputComponent placeholder={'Full Name'} onInput={setTaxPayer} onBlur={validateTaxpayer} hasError={formErrors.taxpayer} errorMessage={'Required'}/>
            </div>
            {/* Form input for Payment Amount */}
            <div className='Form-Input'>
              <span className='Form-Input-Title'>Payment Amount</span>
              <InputComponent type="number" placeholder={'Payment Amount'} onInput={setPaymentAmount} onBlur={validatePaymentAmount} hasError={formErrors.amount} errorMessage={'Must be $1 - $50,000.'}/>
            </div>
            {/* Footer information of the form */}
            <div className='Form-Footer'>
              <span className='Form-Input-Subtitle'>Your information will be encrypted and will not be shared with anyone except the Canada Revenue Agency.</span>
              <div className='Terms-Wrapper'>
                <span className=''>By clicking the Continue Button,</span>
                <a href='https://paysimply.paymentsource.ca/terms-and-conditions' target='_blank' rel="noreferrer"> you agree to Payment Source's Terms.</a>
              </div>
            </div>
          </div>
        </div>
        {/* Render the AdditionalInfo component */}
        {AdditionalInfo()}
      </div>
      <div className='Form-Submit-Wrapper'>
        {/* Button to go back */}
        <a href='https://www.paysimply.ca/CRA/Details.aspx?t=1011' target='_blank' rel="noreferrer" className='Form-Submit-Button'>
          <span>Back</span>
        </a>
        {/* Button to continue */}
        <a href='https://www.paysimply.ca/CRA/Details.aspx?t=1011' target='_blank' rel="noreferrer" className='Form-Submit-Button'>
          <span>Continue</span>
        </a>
      </div>
    </div>
  )
}

function AdditionalInfo() {
  return (
    <div className='Form-Info'>
      {/* Main information section */}
      <div className="Main-Info">
        <h3>Payment Recipient</h3>
        <p>Canada Revenue Agency</p>
        <a href="https://www.canada.ca/en/revenue-agency/services/about-canada-revenue-agency-cra/pay-credit-card.html" target='_blank' rel="noreferrer">
          https://www.canada.ca</a>
      </div>
      {/* Main information section */}
      <div className="Main-Info">
        <h3>Individual Taxes</h3>
        <p>Individual (T1)</p>
        <p>Individual (T1) Tax amount owning</p>
      </div>
      {/* Secure site information */}
      <div className="Secure-Site">
        <FontAwesomeIcon icon={faLock} color="#005600" />
        <span>This is a secure site</span>
      </div>
      {/* Protect against fraud information */}
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