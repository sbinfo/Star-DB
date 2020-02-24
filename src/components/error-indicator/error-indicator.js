import React, { Component } from 'react';
import icon from './death-star.png'
import './error-indicator.css';

class ErrorIndicator extends Component {

    render() {
        return (
            <div className="error-indicator">
                <span>
                <img src={ icon } alt="error icon"/>
                </span>
                {/* <span className="boom">BOOM!</span> */}
                <span>
                    something has gone terribly wrong
                </span>
                <span>
                    (but we already sent droids to fix it)
                </span>
            </div>
        );
    }
}

export default ErrorIndicator;