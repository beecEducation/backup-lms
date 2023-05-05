import React from "react";

import './style.sass'

const ButtonCTA = ({ lightBlue, darkBlue, purple, white, className, label, onClick,height,fontSize ,padding,width,marginTop}) => {
    return (
        <button
            className={`blueButtonCTA border-0 ${white ? 'whiteButton' : ''} ${purple ? 'purpleButton' : ''} ${lightBlue ? 'lightBlueButton' : ''} ${darkBlue ? 'darkBlueButton' : ''} ${className ? className : ''} `}
            onClick={onClick}
            style={{
                height:height?height:"40px",
                fontSize:fontSize?`${fontSize}`:"14px",
                padding:padding?padding:"",
                width:width?width:"",
                marginTop:marginTop?marginTop:""
            }}
        >
            {label}
        </button>
    )
}

export default ButtonCTA