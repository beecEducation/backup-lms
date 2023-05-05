import React from "react";

import './style.sass'

const RadioButtonWithoutSkip = ({ label, name, id, value, checked, onChange }) => {
    return (
        <div className="radioSelector">
            <input type="radio" name={name} id={id} value={value} checked={checked} onChange={onChange ? onChange : null} />
            <label className="radioSelectorInner d-flex justify-content-center align-items-center mb-0" htmlFor={id}>
                <span className="questionLabel">{label}</span>
            </label>
        </div>
    )
}

export default RadioButtonWithoutSkip