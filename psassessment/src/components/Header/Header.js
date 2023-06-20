import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

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
  
  export default Header;