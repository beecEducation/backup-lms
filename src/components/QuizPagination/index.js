import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.sass";

// Pages Status are [ACTIVE, COMPLETED, PENDING]
const QuizPagination = (props) => {
  const {
    currentQuestion,
    setCurrentQuestionNumber,
    questionLength,
    allQuestionBySectionID,
    submittedQuizData,
    nextQuestion,
    previousQuestion,
    setOccupancyChecked,
    flagArray,
    questionCount,
    renderQuestion,
    setSpfFirstValue,
    setSpfSecondValue,
    setSpfThirdValue,
    setSpfFourthValue,
    // submittedQuizDataForPagination
  } = props;
  const dispatch = useDispatch();
  const [pages, setPages] = useState([]);
  const [
    reRenderQuizPagination
  ] = useSelector((state) => {
    return [
      state.quiz.reRenderQuizPagination,
    ];
  });

  useEffect(() => {
    if(reRenderQuizPagination) {
    }
  }, [reRenderQuizPagination]);

  useEffect(() => {
    renderQuestion(questionCount+1)
    var temp = [];
    var isSubmitted = "";
    for (var i = 1; i <= questionLength; i++) {
      var status = "";
      const index = submittedQuizData.findIndex((object) => {
        return object?.questionId === allQuestionBySectionID[i - 1]?.id;
      });
      if (index !== -1) {
        if (submittedQuizData[index]?.answer === "Skip") {
          isSubmitted = "ACTIVE";
        } else {
          isSubmitted = "COMPLETED";
        }
      } else {
        isSubmitted = "PENDING";
      }
      var obj = {
        page: i,
        // status: (currentQuestion === i) ? "ACTIVE": "PENDING",
        status: isSubmitted,
        flag: flagArray[i-1] ? "red" : "", //set value red or blue for flag or default empty string
        isCurrent: currentQuestion === i ? "blue" : "",
      };
      temp.push(obj);
    }
    setPages(temp);
  }, [currentQuestion, questionLength, flagArray, reRenderQuizPagination]);

  return (
    <div className={"quiz-pagination"}>
      <div className={"pages"}>
        {pages.map((page) => {
          return (
            <div
              className={`page-item ${page.isCurrent} ${page.flag} ${
                page.status == "COMPLETED"
                  ? "active-filled"
                  : page.status == "ACTIVE"
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setOccupancyChecked(null);
                setCurrentQuestionNumber(page.page);
                setTimeout(() => {
                  window.location.href = `#question-${page.page}`;
                }, 200);
                setSpfFirstValue("");
                setSpfSecondValue("");
                setSpfThirdValue("");
                setSpfFourthValue("");
                const removeFill = Array.from(
                  document.querySelectorAll(".answer_sheet .fill")
                );
                if (removeFill.length > 0) {
                  removeFill.forEach((element) => {
                    element.classList.remove("fill");
                  });
                }
              }}
            >
              {page.page}
            </div>
          );
        })}
      </div>
      <div className={"page-number"}>
        <RiArrowLeftSLine onClick={() => previousQuestion()} />
        <span className={"count"}>
          {currentQuestion} of {questionLength}
        </span>
        <RiArrowRightSLine
          className={"active"}
          onClick={() => nextQuestion()}
        />
      </div>
    </div>
  );
};
export default QuizPagination;
