import React from 'react'
import "./style.sass"
import {IoMdArrowDropdown} from "react-icons/io";
const CustomProgressbar = ({bgcolor,progress,height,labelMarginTop,scores}) => {

    return (
        <div className={"parent-div"} style={{height}}>
            <div className={"child-div"} style={{height,backgroundColor:bgcolor,width:`${progress}%`}}>
                <div className="progress-label" style={{marginTop:labelMarginTop}}>
                    <div className="label-text">Your total score</div>
                    <div className="label-score">{scores}</div>
                    <IoMdArrowDropdown className={"label-icon"} size={20}/>

                </div>
            </div>
        </div>
    )
}

export default CustomProgressbar;
