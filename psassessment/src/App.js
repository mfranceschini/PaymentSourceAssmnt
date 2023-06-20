import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Header from './components/Header/Header'
import Form from './components/Form/Form'

function App() {
  const [showBanner, setShowBanner] = useState(true)

  return (
    <div className='App'>
      {Header()}

      {showBanner ? (
        <div className='Banner'>
          <div className='Banner-Texts'>
            <span>PaySimply accepts payments from CBSA. </span>
            <a href='http://paysrc.ca/cbsahs' target='_blank' rel="noreferrer">Learn more.</a>
          </div>
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

export default App;
