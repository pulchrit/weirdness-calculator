import React from 'react';
import '../css/Button.css';

const Button = ({ buttonName, buttonClassName, buttonType, buttonEvent, buttonEventArg, buttonContent, buttonDisabled }) => {

    // If there is no event handler for this button, pass null to the onClick handler, so we
    // don't get an error. If there IS an event handler render it (along with its argument) 
    // inside an fat arrow function. 
    const onClickContent = !buttonEvent ? null : (event) => buttonEvent(buttonEventArg);


    return (
        <button 
            className={buttonClassName}
            type={buttonType}
            onClick={onClickContent}
            disabled={buttonDisabled}
        >
            {buttonContent}
        </button>
    );
}

export default Button;