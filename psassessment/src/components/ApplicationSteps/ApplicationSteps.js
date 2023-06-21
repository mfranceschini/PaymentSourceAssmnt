import React, { useState } from "react";
import './ApplicationSteps.css'

function ApplicationSteps() {
    // State variable to store the current step
    const [currentStep] = useState(2)
    
    // Array of step titles
    const StepsTitles = ['Tax Type', 'Details', 'Payment Option', 'Review', 'Make Payment', 'Confirmation']

    return (
        <div className="Steps-Wrapper">
            {/* Map over the step titles and render each step item */}
            {StepsTitles.map((title, index) => (
                <div key={index} className={`Steps-Item ${index === 0 ? 'First' : index + 1 === StepsTitles.length ? "Last" : ''} ${currentStep === index + 1 ? 'Active': ''} ${currentStep > index + 1 ? 'Previous' : ''}`}>
                    <span>{title}</span>
                    {/* Render a separator if it's not the last step */}
                    {index + 1 < StepsTitles.length ? <div className={`Separator ${currentStep === index + 1 ? 'Active': ''} ${currentStep > index + 1 ? 'Previous' : ''}`}/> : null}
                </div>
            ))}
        </div>
    )
}

export default ApplicationSteps