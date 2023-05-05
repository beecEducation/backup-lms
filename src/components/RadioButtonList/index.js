import React from "react";

import './style.sass'

const RadioButtonList = ({ label, name, id, checked, onChange }) => {
    return (
        <>
            <div className="RadioButtonList d-flex align-items-center">
                <input type="radio" name={name} id={id} checked={checked} onChange={onChange ? onChange : null} />
                <label className='radio-button-list d-flex justify-content-center align-items-center' htmlFor={id} >
                    <span className="radio-list-inner"></span>
                </label>
                {/* <label htmlFor={id} className="ms-2 questionPassage d-flex align-items-center">{label}</label> */}
                <label
                    htmlFor={id}
                    className="ms-2 questionPassage d-flex align-items-center"
                    dangerouslySetInnerHTML={{ __html: label }}
                />
            </div>
        </>
    )
}

export default RadioButtonList