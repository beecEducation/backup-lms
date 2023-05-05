import React from "react";
import { FaCheck } from 'react-icons/fa'

import './style.sass'

const CheckboxGreen = ({ label, checked, onChange }) => {
    return (
        <div className="checkboxGreen">
            <label className='questionPassage d-flex align-items-center'>
                <input type="checkbox" checked={checked} onChange={onChange ? onChange : null} />
                <span className="checkbox-check-mark"><FaCheck size={'15px'} /></span>
                {label}
            </label>
        </div>
    )
}

export default CheckboxGreen