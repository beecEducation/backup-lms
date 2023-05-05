import React from "react";

import './style.sass'

const ToggleButtonGreen = ({ label, checked, onChange }) => {
    return (
        <div className="ToggleButtonGreen d-flex align-items-center">
            <input type="checkbox" name="slider" id="slider" checked={checked} onChange={onChange ? onChange : null} />
            <label className='toggle-radio-slider' htmlFor="slider">
                <span className="toggle-radio-button"></span>
            </label>
            <label htmlFor="slider" className="ms-2 questionPassage d-flex align-items-center">{label}</label>
        </div>
    )
}

export default ToggleButtonGreen