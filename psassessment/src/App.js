import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function App() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <div className='App'>
      {Header()}

      {showBanner ? (
        <div className='Banner'>
          <span>PaySimply accepts payments from CBSA. Learn more .</span>
          <button className='Banner-CloseButton' onClick={() => setShowBanner(false)}>
            <FontAwesomeIcon icon={faXmark} color='#f0f0f0' />
          </button>
        </div>
      ) : null}

      {/* Steps here!!! TODO */}

      {Form()}

    </div>
  );
}

function Form() {
  return (
    <div>
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
                <a href='https://paysimply.paymentsource.ca/terms-and-conditions'> you agree to Payment Source's Terms.</a>
              </div>
            </div>
          </div>
        </div>
        <div className='Form-Info'></div>
      </div>
      <div className='Form-Submit-Wrapper'>
        <a href='https://www.paysimply.ca/CRA/Details.aspx?t=1011' className='Form-Submit-Button'>
          <span>Back</span>
        </a>
        <a href='https://www.paysimply.ca/CRA/Details.aspx?t=1011' className='Form-Submit-Button'>
          <span>Continue</span>
        </a>
      </div>
      </div>
  )
}

function Header() {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div className='Header'>
      <img className='Img-logo' src='https://www.paysimply.ca/images/logos/PaySimply-Lg.png' alt='Logo'></img>
      <div className='Navigation-Links'>
        <div className='Search-Wrapper'>
          <input className='Searchbox' placeholder='Search for a bill...'/>
          <a className='SearchButton' href='https://www.paysimply.ca/Partner/Default.aspx/search/q/aaaa'>
            <FontAwesomeIcon icon={faMagnifyingGlass} color='#2b4e7b' />
          </a>
        </div>
        <a className='NavButton' href='https://www.paysimply.ca/PaymentStatus/Default.aspx' target='_blank' rel="noreferrer">Payment Status</a>
        <a className='NavButton' href='https://www.paysimply.ca/About/Default.aspx' target='_blank' rel="noreferrer">About</a>
        <a className='NavButton' href='https://help.paymentsource.net/paysimply/en/categories' target='_blank' rel="noreferrer">Help</a>
        <div className='Dropdown-Wrapper'>
          <button className='LanguageButton Dropdown-Icon' onClick={() => setShowDropdown(!showDropdown)}>Language</button>
          {showDropdown ? (
            <div className='Dropdown'>
              <a className={`Dropdown-Item ${!window.location.href.includes('French') ? 'Dropdown-Item-Active' : ''}`} href='https://www.paysimply.ca/CRA/Details.aspx?t=1011'>English</a>
              <a className='Dropdown-Item' href='https://www.paysimply.ca/CRA/Details.aspx?t=1011&site=French'>Français</a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App;
