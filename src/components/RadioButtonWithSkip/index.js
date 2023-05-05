import React from "react";

import './style.sass'

const RadioButtonWithSkip = ({ className, label, name, id, skipLabel, checked, onChange, disabled }) => {
    return (
        <div className={`radioSelector ${className ? className : ''}`}>
            <input type="radio" name={name} id={id} disabled={disabled} checked={checked} onChange={onChange ? onChange : null} />
            <label className="radioSelectorInner d-flex justify-content-center align-items-center mb-0" htmlFor={!disabled ? id : null}>
                {skipLabel ?
                    <span className="skipLabel">{label}</span> :
                    <span className="questionLabel">{label}</span>
                }
            </label>
        </div>
    )
}

export default RadioButtonWithSkip