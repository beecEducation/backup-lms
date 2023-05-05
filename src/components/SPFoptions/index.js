import React from "react";
import "./style.sass";

function SPFoptions(props) {
  const {
    spfFirstValue,
    spfSecondValue,
    spfThirdValue,
    spfFourthValue,
    setSpfFirstValue,
    setSpfSecondValue,
    setSpfThirdValue,
    setSpfFourthValue,
    saveQuizAnswerForSPF,
  } = props;
  const spfFirstValueHandler = (e) => {
    setSpfFirstValue(e);
    var removeFill = document.querySelector(".firstCell.fill");
    if (removeFill !== null) {
      removeFill.classList.remove("fill");
    }
    var getField = document.getElementsByClassName(`firstCell_${e}`);
    if (getField.length > 0) {
      getField[0].classList.add("fill");
    }
  };
  const spfSecondValueHandler = (e) => {
    setSpfSecondValue(e);
    var removeFill = document.querySelector(".secondCell.fill");
    if (removeFill !== null) {
      removeFill.classList.remove("fill");
    }
    var getField = document.getElementsByClassName(`secondCell_${e}`);
    if (getField.length > 0) {
      getField[0].classList.add("fill");
    }
  };
  const spfThirdValueHandler = (e) => {
    setSpfThirdValue(e);
    var removeFill = document.querySelector(".thirdCell.fill");
    if (removeFill !== null) {
      removeFill.classList.remove("fill");
    }
    var getField = document.getElementsByClassName(`thirdCell_${e}`);
    if (getField.length > 0) {
      getField[0].classList.add("fill");
    }
  };
  const spfFourthValueHandler = (e) => {
    setSpfFourthValue(e);
    var removeFill = document.querySelector(".fourthCell.fill");
    if (removeFill !== null) {
      removeFill.classList.remove("fill");
    }
    var getField = document.getElementsByClassName(`fourthCell_${e}`);
    if (getField.length > 0) {
      getField[0].classList.add("fill");
    }
  };
  return (
    <div className="sat_grid_in">
      <table className="main_table">
        <thead className="input_area">
          <tr>
            <th>
              <input
                type="text"
                name="first_input"
                id="first_input"
                maxLength={1}
                onFocus={(e) => e.target.select}
                value={spfFirstValue}
                onChange={(e) => {
                  if (
                    e.target.value === "" ||
                    e.target.value == "." ||
                    (e.target.value >= 1 && e.target.value <= 9)
                  ) {
                    setSpfFirstValue(e.target.value);
                    saveQuizAnswerForSPF(e.target.value);
                    var removeFill = document.querySelector(".firstCell.fill");
                    if (removeFill !== null) {
                      removeFill.classList.remove("fill");
                    }
                    var getField = document.getElementsByClassName(
                      `firstCell_${e.target.value}`
                    );
                    if (getField.length > 0) {
                      getField[0].classList.add("fill");
                    }
                    if (e.target.value.length == 1) {
                      document.getElementById("second_input").focus();
                    } else {
                      document.getElementById("first_input").focus();
                    }
                  }
                }}
              />
            </th>
            <th>
              <input
                type="text"
                name="second_input"
                id="second_input"
                maxLength={1}
                onFocus={(e) => e.target.select}
                value={spfSecondValue}
                onChange={(e) => {
                  if (
                    e.target.value === "" ||
                    e.target.value == "." ||
                    e.target.value == "/" ||
                    (e.target.value >= 0 && e.target.value <= 9)
                  ) {
                    setSpfSecondValue(e.target.value);
                    saveQuizAnswerForSPF(e.target.value);
                    var removeFill = document.querySelector(".secondCell.fill");
                    if (removeFill !== null) {
                      removeFill.classList.remove("fill");
                    }
                    var getField = document.getElementsByClassName(
                      `secondCell_${e.target.value}`
                    );
                    if (getField.length > 0) {
                      getField[0].classList.add("fill");
                    }
                    if (e.target.value.length == 1) {
                      document.getElementById("third_input").focus();
                    } else {
                      document.getElementById("first_input").focus();
                    }
                  }
                }}
              />
            </th>
            <th>
              <input
                type="text"
                name="third_input"
                id="third_input"
                maxLength={1}
                value={spfThirdValue}
                onFocus={(e) => e.target.select}
                onChange={(e) => {
                  if (
                    e.target.value === "" ||
                    e.target.value == "." ||
                    e.target.value == "/" ||
                    (e.target.value >= 0 && e.target.value <= 9)
                  ) {
                    setSpfThirdValue(e.target.value);
                    saveQuizAnswerForSPF(e.target.value);
                    var removeFill = document.querySelector(".thirdCell.fill");
                    if (removeFill !== null) {
                      removeFill.classList.remove("fill");
                    }
                    var getField = document.getElementsByClassName(
                      `thirdCell_${e.target.value}`
                    );
                    if (getField.length > 0) {
                      getField[0].classList.add("fill");
                    }
                    if (e.target.value.length == 1) {
                      document.getElementById("fourth_input").focus();
                    } else {
                      document.getElementById("second_input").focus();
                    }
                  }
                }}
              />
            </th>
            <th>
              <input
                type="text"
                name="fourth_input"
                id="fourth_input"
                maxLength={1}
                value={spfFourthValue}
                onFocus={(e) => e.target.select}
                onChange={(e) => {
                  if (
                    e.target.value === "" ||
                    e.target.value == "." ||
                    (e.target.value >= 0 && e.target.value <= 9)
                  ) {
                    setSpfFourthValue(e.target.value);
                    saveQuizAnswerForSPF(e.target.value);
                    var removeFill = document.querySelector(".fourthCell.fill");
                    if (removeFill !== null) {
                      removeFill.classList.remove("fill");
                    }
                    var getField = document.getElementsByClassName(
                      `fourthCell_${e.target.value}`
                    );
                    if (getField.length > 0) {
                      getField[0].classList.add("fill");
                    }
                    if (e.target.value.length == 1) {
                      document.getElementById("fourth_input").focus();
                    } else {
                      document.getElementById("third_input").focus();
                    }
                  }
                }}
              />
            </th>
          </tr>
        </thead>
        <tbody className="answer_sheet">
          <tr>
            <td>
              <p className="border-0"></p>
            </td>
            <td>
              <p
                className="secondCell secondCell_/"
                onClick={() => {
                  spfSecondValueHandler("/");
                }}
              >
                /
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_/"
                onClick={() => {
                  spfThirdValueHandler("/");
                }}
              >
                /
              </p>
            </td>
            <td>
              <p className="border-0"></p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_."
                onClick={() => {
                  spfFirstValueHandler(".");
                }}
              >
                .
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_."
                onClick={() => {
                  spfSecondValueHandler(".");
                }}
              >
                .
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_."
                onClick={() => {
                  spfThirdValueHandler(".");
                }}
              >
                .
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_."
                onClick={() => {
                  spfFourthValueHandler(".");
                }}
              >
                .
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="border-0"></p>
            </td>
            <td>
              <p
                className="secondCell secondCell_0"
                onClick={() => {
                  spfSecondValueHandler("0");
                }}
              >
                0
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_0"
                onClick={() => {
                  spfThirdValueHandler("0");
                }}
              >
                0
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_0"
                onClick={() => {
                  spfFourthValueHandler("0");
                }}
              >
                0
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_1"
                onClick={() => {
                  spfFirstValueHandler("1");
                }}
              >
                1
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_1"
                onClick={() => {
                  spfSecondValueHandler("1");
                }}
              >
                1
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_1"
                onClick={() => {
                  spfThirdValueHandler("1");
                }}
              >
                1
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_1"
                onClick={() => {
                  spfFourthValueHandler("1");
                }}
              >
                1
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_2"
                onClick={() => {
                  spfFirstValueHandler("2");
                }}
              >
                2
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_2"
                onClick={() => {
                  spfSecondValueHandler("2");
                }}
              >
                2
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_2"
                onClick={() => {
                  spfThirdValueHandler("2");
                }}
              >
                2
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_2"
                onClick={() => {
                  spfFourthValueHandler("2");
                }}
              >
                2
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_3"
                onClick={() => {
                  spfFirstValueHandler("3");
                }}
              >
                3
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_3"
                onClick={() => {
                  spfSecondValueHandler("3");
                }}
              >
                3
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_3"
                onClick={() => {
                  spfThirdValueHandler("3");
                }}
              >
                3
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_3"
                onClick={() => {
                  spfFourthValueHandler("3");
                }}
              >
                3
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_4"
                onClick={() => {
                  spfFirstValueHandler("4");
                }}
              >
                4
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_4"
                onClick={() => {
                  spfSecondValueHandler("4");
                }}
              >
                4
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_4"
                onClick={() => {
                  spfThirdValueHandler("4");
                }}
              >
                4
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_4"
                onClick={() => {
                  spfFourthValueHandler("4");
                }}
              >
                4
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_5"
                onClick={() => {
                  spfFirstValueHandler("5");
                }}
              >
                5
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_5"
                onClick={() => {
                  spfSecondValueHandler("5");
                }}
              >
                5
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_5"
                onClick={() => {
                  spfThirdValueHandler("5");
                }}
              >
                5
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_5"
                onClick={() => {
                  spfFourthValueHandler("5");
                }}
              >
                5
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_6"
                onClick={() => {
                  spfFirstValueHandler("6");
                }}
              >
                6
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_6"
                onClick={() => {
                  spfSecondValueHandler("6");
                }}
              >
                6
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_6"
                onClick={() => {
                  spfThirdValueHandler("6");
                }}
              >
                6
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_6"
                onClick={() => {
                  spfFourthValueHandler("6");
                }}
              >
                6
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_7"
                onClick={() => {
                  spfFirstValueHandler("7");
                }}
              >
                7
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_7"
                onClick={() => {
                  spfSecondValueHandler("7");
                }}
              >
                7
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_7"
                onClick={() => {
                  spfThirdValueHandler("7");
                }}
              >
                7
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_7"
                onClick={() => {
                  spfFourthValueHandler("7");
                }}
              >
                7
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_8"
                onClick={() => {
                  spfFirstValueHandler("8");
                }}
              >
                8
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_8"
                onClick={() => {
                  spfSecondValueHandler("8");
                }}
              >
                8
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_8"
                onClick={() => {
                  spfThirdValueHandler("8");
                }}
              >
                8
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_8"
                onClick={() => {
                  spfFourthValueHandler("8");
                }}
              >
                8
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p
                className="firstCell firstCell_9"
                onClick={() => {
                  spfFirstValueHandler("9");
                }}
              >
                9
              </p>
            </td>
            <td>
              <p
                className="secondCell secondCell_9"
                onClick={() => {
                  spfSecondValueHandler("9");
                }}
              >
                9
              </p>
            </td>
            <td>
              <p
                className="thirdCell thirdCell_9"
                onClick={() => {
                  spfThirdValueHandler("9");
                }}
              >
                9
              </p>
            </td>
            <td>
              <p
                className="fourthCell fourthCell_9"
                onClick={() => {
                  spfFourthValueHandler("9");
                }}
              >
                9
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SPFoptions;
