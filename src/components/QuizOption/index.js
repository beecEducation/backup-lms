import React, { useState } from "react";
import "./style.sass";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const QuizOption = ({
  label,
  value,
  name,
  checked,
  changeChecked,
  saveQuizAnswer,
  backgroundColor, 
  disabled
}) => {
  return (
    <div className={"quiz-option"}>
      <label htmlFor={"option-" + label}>
        <span
          className={`option-label ${
            checked === label ? "OccupancyChecked" : ""
          }`}
          dangerouslySetInnerHTML={{ __html: label }}
          style={{ background: typeof(backgroundColor) === "undefined" ? "" : "aqua", color: typeof(backgroundColor) === "undefined" ? "" : "black"}}
        ></span>
        {value?.includes("<math") ? (
          <>
          {console.log("Inside maths")}
            <MathJaxContext>
            <MathJax>
              <span
                className={"option-text"}
                dangerouslySetInnerHTML={{ __html: value }}
              ></span>
            </MathJax>
          </MathJaxContext>
          </>
        
        ) : (
          <span
            className={"option-text"}
            dangerouslySetInnerHTML={{ __html: value }}
          ></span>
        )}
        {/* <span
          className={"option-text"}
          dangerouslySetInnerHTML={{ __html: value }}
        ></span> */}
      </label>
      <input
        id={"option-" + label}
        onClick={() => {
          changeChecked(label);
          saveQuizAnswer(label);
        }}
        className={"d-none"}
        name={name}
        type={"radio"}
        disabled={disabled}
      />
    </div>
  );
};

export default QuizOption;
