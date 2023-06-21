import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Header() {
  // State variable to toggle the visibility of the dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    // Header container
    <div className='Header'>
      {/* Logo */}
      <img className='Img-logo' src='https://www.paysimply.ca/images/logos/PaySimply-Lg.png' alt='Logo'></img>
      <div className='Navigation-Links'>
        {/* Search box */}
        <div className='Search-Wrapper'>
          <input className='Searchbox' placeholder='Search for a bill...'/>
          {/* Search button */}
          <a className='SearchButton' href='https://www.paysimply.ca/Partner/Default.aspx/search/q/aaaa'>
            <FontAwesomeIcon icon={faMagnifyingGlass} color='#2b4e7b' />
          </a>
        </div>
        {/* Payment status link */}
        <a className='NavButton' href='https://www.paysimply.ca/PaymentStatus/Default.aspx' target='_blank' rel="noreferrer">
          <span>Payment Status</span>
        </a>
        {/* About link */}
        <a className='NavButton' href='https://www.paysimply.ca/About/Default.aspx' target='_blank' rel="noreferrer">
          <span>About</span>
        </a>
        {/* Help link */}
        <a className='NavButton' href='https://help.paymentsource.net/paysimply/en/categories' target='_blank' rel="noreferrer">
          <span>Help</span>
        </a>
        {/* Language dropdown */}
        <div className='Dropdown-Wrapper'>
          {/* Language button with dropdown icon */}
          <button className='LanguageButton Dropdown-Icon' onClick={() => setShowDropdown(!showDropdown)}>
            <span>Language</span>
          </button>
          {/* Dropdown menu */}
          {showDropdown ? (
            <div className='Dropdown'>
              {/* English language option */}
              <a className={`Dropdown-Item ${!window.location.href.includes('French') ? 'Dropdown-Item-Active' : ''}`} href='https://www.paysimply.ca/CRA/Details.aspx?t=1011'>English</a>
              {/* French language option */}
              <a className='Dropdown-Item' href='https://www.paysimply.ca/CRA/Details.aspx?t=1011&site=French'>Français</a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

  
  export default Header;