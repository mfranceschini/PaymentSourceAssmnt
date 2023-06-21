import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCircleExclamation, faDollarSign } from '@fortawesome/free-solid-svg-icons'

export default function InputComponent({placeholder, onInput, onBlur, hasError, errorMessage, type='text', value}) {
    return (
        <>
            {/* Wrapper div for the input component */}
            <div className='Input-Wrapper'>
                {/* Render a payment icon if the input is 'Payment Amount' */}
                {placeholder === 'Payment Amount' ? 
                    <div className='Input-Payment-Icon'><FontAwesomeIcon icon={faDollarSign}/></div>
                : null}
                {/* Input element */}
                <input 
                    type={type} 
                    value={value} 
                    placeholder={placeholder} 
                    onInput={e => onInput(e.target.value)} 
                    onBlur={onBlur} 
                    required 
                    // Add appropriate class names based on the hasError and placeholder values
                    className={`${hasError === false ? 'Input-Success' : hasError === true ? 'Input-Error' : undefined} ${placeholder === 'Payment Amount' ? 'Input-Payment' : undefined} `} 
                />
                {/* Render an error or success icon if hasError is defined */}
                {hasError !== undefined ? 
                    <FontAwesomeIcon 
                        icon={hasError ? faCircleExclamation : faCheck} 
                        className='Input-Icon' 
                        color={hasError ? 'red' : 'green'} 
                    /> 
                    : null}
            </div>
            {/* Render the error message if hasError is true */}
            {hasError ? <span className="Input-Error-Message">{errorMessage}</span> : null}
        </>
      )
}
