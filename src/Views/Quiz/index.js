import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import { useNavigate } from "react-router-dom";
import "./style.sass";
import { Button, Col, Container, Modal, Nav, Row } from "react-bootstrap";
import QuizNavbar from "../../components/QuizNavbar";
import { Images, SPFoptions } from "../../components";
import QuizPagination from "../../components/QuizPagination";
import { TbFlag, TbMath } from "react-icons/tb";
import { IoCalculatorOutline, IoDocumentOutline } from "react-icons/io5";
import { TiThMenuOutline } from "react-icons/ti";
import QuizOption from "../../components/QuizOption";
import { toast } from "react-toastify";
import Countdown, { zeroPad } from "react-countdown";
import ReactTooltip from "react-tooltip";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(true);

  const [user, setUser] = useState({});
  const [allQuestionBySectionID, setAllQuestionBySectionID] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [occupancyChecked, setOccupancyChecked] = useState(null);
  const [answerSubmission, setAnswerSubmission] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [submittedQuizData, setSubmittedQuizData] = useState([]);
  const [quizDuration, setQuizDuration] = useState(0);
  const [tempHours, setTempHours] = useState(0);
  const [tempMinutes, setTempMinutes] = useState(0);
  const [tempSeconds, setTempSeconds] = useState(0);
  const [previousAnswerTime, setPreviousAnswerTime] = useState(0);
  const [flagArray, setFlagArray] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [userQuizScore, setUserQuizScore] = useState(null);
  const [selectedQuizSectionId, setSelectedQuizSectionId] = useState(null);
  const [isAllAnswersSubmitted, setIsAllAnswersSubmitted] = useState(false);
  const [selectedSection, setSelectedSection] = useState({});
  const [totalAnswerSubmittedBySection, setTotalAnswerSubmittedBySection] =
    useState(0);
  const [spfAnswer, setSpfAnswer] = useState("");
  const [spfFirstValue, setSpfFirstValue] = useState("");
  const [spfSecondValue, setSpfSecondValue] = useState("");
  const [spfThirdValue, setSpfThirdValue] = useState("");
  const [spfFourthValue, setSpfFourthValue] = useState("");
  const [passageCallback, setPassageCallback] = useState("");
  const [sectionStartedAt, setSectionStartedAt] = useState(null);
  const [sectionTime, setSectionTime] = useState(0);
  const [submittedQuizDataForPagination, setSubmittedQuizDataForPagination] =
    useState([]);
  const [tempTimer, setTempTimer] = useState(0);

  const [
    currentUser,
    allQuestionListTemp,
    selectedQuizTemp,
    submittedQuizDataTemp,
    tempSelectedSectionId,
    tempUserQuizScore,
    tempGetUserQuizForStartedAt,
    quizReloadRequired,
  ] = useSelector((state) => {
    return [
      state.auth.cognito,
      state.quiz.listQuestionsBySectionId,
      state.quiz.selectedQuiz,
      state.quiz.listUserQuizAnswers,
      state.finishUserQuiz.listQuestionsBySectionId,
      state.finishUserQuiz.quizFinishedData,
      state.quiz.getUserQuizForStartedAt,
      state.helper.quizReloadRequired,
    ];
  });

  useEffect(() => {
    if (quizReloadRequired === true) {
      setTimeout(() => {
        dispatch(Actions.quizNeedsReload(false));
        window.location.href = "/new_quiz";
      }, 2000);
    }
  }, [quizReloadRequired]);

  useEffect(() => {
    if (tempSelectedSectionId) {
      const questionData = {
        id: tempSelectedSectionId,
      };
      setSelectedQuizSectionId(tempSelectedSectionId);
      dispatch(Actions.dispatchListQuestionsBySectionId(questionData));
      let obj = selectedQuizTemp?.quiz?.sections?.items?.find(
        (o) => o.id === tempSelectedSectionId
      );
      dispatch(
        Actions.dispatchGetUserQuizForStartedAt({ id: selectedQuizTemp?.id })
      );
      setSelectedSection(obj);
      setSectionTime(obj.time);
    }
  }, [tempSelectedSectionId]);

  useEffect(() => {
    if (tempGetUserQuizForStartedAt && tempSelectedSectionId) {
      let obj = tempGetUserQuizForStartedAt?.sections?.find(
        (o) => o.id === tempSelectedSectionId
      );
      setSectionStartedAt(obj?.startedAt);
    }
  }, [tempGetUserQuizForStartedAt, tempSelectedSectionId]);

  useEffect(() => {
    if (sectionStartedAt && sectionTime > 0) {
      setQuizDuration(
        new Date(sectionStartedAt).getTime() + sectionTime * 60000
      );
      setPreviousAnswerTime(Date.now() + 120 * 60 * 1000);
    }
  }, [sectionStartedAt, sectionTime]);

  useEffect(() => {
    if (quizDuration) {
      setTempTimer(new Date(quizDuration).getTime());
      console.log("Quiz duration is ", quizDuration);
    }
  }, [quizDuration]);

  useEffect(() => {
    if (tempUserQuizScore) {
      setUserQuizScore(tempUserQuizScore);
    }
  }, [tempUserQuizScore]);

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    if (flagArray) {
    }
  }, [flagArray]);

  useEffect(() => {}, [questionCount]);
  useEffect(() => {
    // dispatch(Actions.reRenderQuizPagination(new Date().getTime().toString()));
  }, [submittedQuizDataForPagination]);

  useEffect(() => {
    if (currentQuestionNumber) {
      console.log(
        "Current question is ",
        allQuestionBySectionID[currentQuestionNumber - 1]
      );
      const index = submittedQuizData.findIndex((object) => {
        return (
          object.questionId ===
          allQuestionBySectionID[currentQuestionNumber - 1]?.id
        );
      });
      if (index !== -1) {
        setOccupancyChecked(submittedQuizData[index]?.answer);
        if (
          allQuestionBySectionID[currentQuestionNumber - 1]?.answer
            ?.answerType === "SPR"
        ) {
          setSpfFirstValue(submittedQuizData[index]?.answer?.charAt(0));
          setSpfSecondValue(submittedQuizData[index]?.answer?.charAt(1));
          setSpfThirdValue(submittedQuizData[index]?.answer?.charAt(2));
          setSpfFourthValue(submittedQuizData[index]?.answer?.charAt(3));
        }
      }
    }
    setPassageCallback(new Date().getTime());
    setTimeout(() => {
      var doc = [];
      doc = document.getElementsByClassName("line-ref");
      var inputList = Array.prototype.slice.call(doc);
      inputList?.map((item) => {
        try {
          var result = item.innerText.substring(6, item.innerText.length - 1);
          const getLine = document.getElementById(
            `${result}_start`
          ).nextSibling;
          item.innerHTML = `<a data-tip="${getLine.textContent}" onclick="onLineRefClicked('${result}_start_highlight')" href="#${result}_start">line</a>`;
          document.getElementById(
            `${result}_start`
          ).innerHTML = `<span id="${result}_start_highlight">${getLine.textContent}</span>`;
          document.getElementById(`${result}_start`).nextSibling.remove();
        } catch (err) {
          console.log("Error in line ref", err);
        }
      });
      ReactTooltip.rebuild();
    }, 800);
  }, [currentQuestionNumber]);

  useEffect(() => {
    if (selectedQuizTemp) {
      setSelectedQuiz(selectedQuizTemp);
      console.log("Selected quiz temp ".selectedQuizTemp);
      // setQuizDuration(Date.now() + selectedQuizTemp?.quiz?.time * 60000);
      // setPreviousAnswerTime(Date.now() + selectedQuizTemp?.quiz?.time * 60000);
      dispatch(
        Actions.dispatchListUserQuizAnswers({ id: selectedQuizTemp.id })
      );
    }
  }, [selectedQuizTemp]);

  useEffect(() => {
    if (submittedQuizDataTemp) {
      if (submittedQuizDataTemp.length > 0) {
        // setCurrentQuestionNumber(submittedQuizDataTemp.length);
      }
      const filterSubmittedAnswersForSection = submittedQuizDataTemp.filter(
        (x) => x.sectionId === selectedQuizSectionId
      );
      setTotalAnswerSubmittedBySection(filterSubmittedAnswersForSection.length);
      if (
        filterSubmittedAnswersForSection.length ===
        allQuestionBySectionID.length
      ) {
        setIsAllAnswersSubmitted(true);
      } else {
        setIsAllAnswersSubmitted(false);
      }
      // var temp = []
      // submittedQuizDataTemp.map((item) => {
      //   temp.push({
      //     questionId: item.questionId,
      //     answer: item.answer
      //   })
      // });
      // setSubmittedQuizDataForPagination(temp);
      setSubmittedQuizData(submittedQuizDataTemp);
      dispatch(Actions.reRenderQuizPagination(new Date().getTime().toString()));
    }
  }, [submittedQuizDataTemp]);

  useEffect(() => {
    if (allQuestionListTemp) {
      setAllQuestionBySectionID(allQuestionListTemp);
      if (allQuestionListTemp.length > 0) {
        setFlagArray(Array(allQuestionListTemp?.length - 1)?.fill(false));
      }
    }
  }, [allQuestionListTemp]);

  // user selected quiz answer all data
  const saveQuizAnswer = (currentAnswer) => {
    setAnswerSubmission({
      answer: currentAnswer,
      questionId: allQuestionBySectionID[currentQuestionNumber - 1].id,
      userId: user.username,
      userQuizId: selectedQuizTemp?.id,
      quizId: allQuestionBySectionID[currentQuestionNumber - 1].quizId,
      time: 60,
      sectionId: selectedQuizSectionId,
    });
  };

  // user selected quiz answer all data
  const saveQuizAnswerForSPF = () => {
    const ans =
      "" + spfFirstValue + spfSecondValue + spfThirdValue + spfFourthValue;
    setAnswerSubmission({
      answer: ans,
      questionId: allQuestionBySectionID[currentQuestionNumber - 1].id,
      userId: user.username,
      userQuizId: selectedQuizTemp?.id,
      quizId: allQuestionBySectionID[currentQuestionNumber - 1].quizId,
      time: 60,
      sectionId: selectedQuizSectionId,
    });
  };

  // answer: "A"
  // questionId: "fb9894a0-8a45-11ec-a9d6-0322e5b5b29e"
  // quizId: "8ed011d9-86be-4c95-bc6c-427c079552c6"
  // time: 60
  // userId: "67ee807c-2570-460c-950e-516d83f63d35"
  // userQuizId: "abba7a82-ae69-4115-aeaa-123468a0d0bb"

  // Button Actions
  const nextQuestion = () => {
    dispatch(Actions.reRenderQuizPagination(new Date().getTime().toString()));
    if (currentQuestionNumber <= allQuestionBySectionID.length) {
      if (occupancyChecked !== "" && occupancyChecked !== null) {
        const questionId = allQuestionBySectionID[currentQuestionNumber - 1].id;
        const index = submittedQuizData.findIndex((object) => {
          return object?.questionId === questionId;
        });
        var answerSubmissionPayload = {
          answer: occupancyChecked,
          questionId: questionId,
          userId: user.username,
          userQuizId: selectedQuizTemp?.id,
          quizId: allQuestionBySectionID[currentQuestionNumber - 1].quizId,
          time: 60,
          sectionId: selectedQuizSectionId,
        };
        if (index !== -1) {
          let listItems = [...submittedQuizData];
          let currentItem = { ...submittedQuizData[currentQuestionNumber - 1] };
          currentItem.answer = answerSubmissionPayload.answer;
          listItems[currentQuestionNumber - 1] = currentItem;
          //====================================SUBMISSION FOR PAGINATION====================================
          // const paginationSubmmitedAnswerIndex = submittedQuizDataForPagination.findIndex((object) => {
          //   return object?.questionId === questionId;
          // });
          // if(paginationSubmmitedAnswerIndex !== -1){
          //   var tempPaginationAnswer = submittedQuizDataForPagination;
          //   tempPaginationAnswer[paginationSubmmitedAnswerIndex].answer = answerSubmissionPayload.answer;
          //   setSubmittedQuizDataForPagination(tempPaginationAnswer);
          // }
          // dispatch(Actions.reRenderQuizPagination(new Date().getTime().toString()));
          //====================================SUBMISSION FOR PAGINATION====================================
          // setSubmittedQuizData(listItems);
          dispatch(
            Actions.dispatchUpdateUserQuizAnswer(answerSubmissionPayload)
          );
        } else {
          var payload = answerSubmissionPayload;
          payload.time = Math.round(
            (Date.now() +
              selectedQuizTemp?.quiz?.time * 60000 -
              previousAnswerTime) /
              1000
          );
          setPreviousAnswerTime(
            Date.now() + selectedQuizTemp?.quiz?.time * 60000
          );
          // setSubmittedQuizData([...submittedQuizData, payload]);
          //====================================SUBMISSION FOR PAGINATION====================================
          // const paginationSubmmitedAnswerIndex = submittedQuizDataForPagination.findIndex((object) => {
          //   return object?.questionId === questionId;
          // });
          // if(paginationSubmmitedAnswerIndex === -1){
          //   var tempPaginationAnswer = submittedQuizDataForPagination;
          //   tempPaginationAnswer.push({
          //     questionId: questionId,
          //     answer: answerSubmissionPayload.answer
          //   })
          //   setSubmittedQuizDataForPagination(tempPaginationAnswer);
          // }
          // dispatch(Actions.reRenderQuizPagination(new Date().getTime().toString()));
          //====================================SUBMISSION FOR PAGINATION====================================
          dispatch(Actions.dispatchCreateUserQuizAnswer(payload));
        }
        if (currentQuestionNumber < allQuestionBySectionID.length) {
          setTimeout(() => {
            window.location.href = `#question-${currentQuestionNumber + 1}`;
          }, 200);
          setCurrentQuestionNumber(currentQuestionNumber + 1);
          setOccupancyChecked(null);
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
        }
      }
    } else {
      dispatch(Actions.reRenderQuizPagination(new Date().getTime().toString()));
    }
  };

  const previousQuestion = () => {
    if (currentQuestionNumber > 1) {
      window.location.href = `#question-${currentQuestionNumber - 1}`;
      setCurrentQuestionNumber(currentQuestionNumber - 1);
    }
  };

  const skipQuestion = () => {
    if (currentQuestionNumber <= allQuestionBySectionID.length) {
      const questionId = allQuestionBySectionID[currentQuestionNumber - 1].id;
      const index = submittedQuizData.findIndex((object) => {
        return object?.questionId === questionId;
      });
      var answerSubmissionPayload = {
        answer: "Skip",
        questionId: questionId,
        userId: user.username,
        userQuizId: selectedQuizTemp?.id,
        quizId: allQuestionBySectionID[currentQuestionNumber - 1].quizId,
        time: 60,
        sectionId: selectedQuizSectionId,
      };
      if (index !== -1) {
        let listItems = [...submittedQuizData];
        let currentItem = { ...submittedQuizData[currentQuestionNumber - 1] };
        currentItem.answer = answerSubmissionPayload.answer;
        listItems[currentQuestionNumber - 1] = currentItem;
        // setSubmittedQuizData(listItems);
        //====================================SUBMISSION FOR PAGINATION====================================
        // const paginationSubmmitedAnswerIndex = submittedQuizDataForPagination.findIndex((object) => {
        //   return object?.questionId === questionId;
        // });
        // if(paginationSubmmitedAnswerIndex !== -1){
        //   var tempPaginationAnswer = submittedQuizDataForPagination;
        //   tempPaginationAnswer[paginationSubmmitedAnswerIndex].answer = answerSubmissionPayload.answer;
        //   setSubmittedQuizDataForPagination(tempPaginationAnswer);
        // }
        //====================================SUBMISSION FOR PAGINATION====================================
        dispatch(Actions.dispatchUpdateUserQuizAnswer(answerSubmissionPayload));
      } else {
        var payload = answerSubmissionPayload;
        //====================================SUBMISSION FOR PAGINATION====================================
        //  const paginationSubmmitedAnswerIndex = submittedQuizDataForPagination.findIndex((object) => {
        //   return object?.questionId === answerSubmissionPayload.questionId;
        // });
        // if(paginationSubmmitedAnswerIndex === -1){
        //   var tempPaginationAnswer = submittedQuizDataForPagination;
        //   tempPaginationAnswer.push({
        //     questionId: answerSubmissionPayload.questionId,
        //     answer: "Skip"
        //   })
        //   setSubmittedQuizDataForPagination(tempPaginationAnswer);
        // }
        //====================================SUBMISSION FOR PAGINATION====================================
        payload.time = Math.round(
          (Date.now() +
            selectedQuizTemp?.quiz?.time * 60000 -
            previousAnswerTime) /
            1000
        );
        setPreviousAnswerTime(
          Date.now() + selectedQuizTemp?.quiz?.time * 60000
        );
        // setSubmittedQuizData([...submittedQuizData, payload]);
        dispatch(Actions.dispatchCreateUserQuizAnswer(payload));
      }
      if (currentQuestionNumber < allQuestionBySectionID.length) {
        setCurrentQuestionNumber(currentQuestionNumber + 1);
        window.location.href = `#question-${currentQuestionNumber + 1}`;
        setOccupancyChecked(null);
      }
    }
  };

  const flagQuestion = () => {
    dispatch(Actions.reRenderQuizPagination(new Date().getTime().toString()));
    // 1. Make a shallow copy of the array
    let temp_state = [...flagArray];
    // 2. Make a shallow copy of the element you want to mutate
    let temp_element = { ...temp_state[currentQuestionNumber - 1] };
    // 3. Update the property you're interested in
    temp_element = !temp_state[currentQuestionNumber - 1];

    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    temp_state[currentQuestionNumber - 1] = temp_element;

    // 5. Set the state to our new copy
    setFlagArray(temp_state);
    // skipQuestion();
    setQuestionCount(questionCount + 1);
  };

  // finish quiz function
  const finishQuiz = () => {
    const userData = {
      id: tempSelectedSectionId,
      quizId: userQuizScore?.quizId,
      userQuizId: userQuizScore?.id,
      userId: userQuizScore?.userId,
      status: "FINISHED",
    };
    dispatch(Actions.dispatchUpdateUserQuizSection(userData)).then(
      (response) => {
        // const parsed = JSON.parse(response?.data?.updateUserQuiz);
        // if (parsed.statusCode === 200) {
        dispatch(Actions.saveListQuizAnswer([]));
        // navigate("/dashboard");
        dispatch(Actions.dispatchGetQuizScores(userQuizScore?.id)).then(
          (userScoreResponse) => {
            const totalSections =
              userScoreResponse?.data?.getUserQuiz?.sections?.length;
            var finishedSections = 0;
            userScoreResponse?.data?.getUserQuiz?.sections.map((item) => {
              if (item.status === "FINISHED") {
                finishedSections++;
              }
            });
            if (totalSections === finishedSections) {
              const updateQuizPayload = {
                id: userQuizScore?.id,
                userId: userQuizScore?.userId,
                status: "FINISHED",
              };
              dispatch(Actions.dispatchUpdateUserQuiz(updateQuizPayload)).then(
                (response) => {
                  navigate("/dashboard");
                }
              );
            } else {
              navigate("/start_test");
            }
          }
        );
        // } else {
        //   toast.error(parsed?.body?.message, {
        //     position: "top-center",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   });
        // }
      }
    );
  };

  const changeOccupancyChecked = (val) => {
    setOccupancyChecked(val);
  };

  const countdownTimer = ({ hours, minutes, seconds }) => {
    setTempHours(hours);
    setTempMinutes(minutes);
    setTempSeconds(seconds);
    return (
      <p className="questionLabel mb-0">
        {zeroPad(tempHours)}:{zeroPad(tempMinutes)}:{zeroPad(tempSeconds)}
      </p>
    );
  };

  const renderQuestion = (count) => {
    setQuestionCount(count);
  };

  useEffect(() => {
    const ans =
      "" + spfFirstValue + spfSecondValue + spfThirdValue + spfFourthValue;
    setSpfAnswer(ans);
    setOccupancyChecked(ans);
    // setAnswerSubmission({
    //   answer: ans,
    //   questionId: allQuestionBySectionID[currentQuestionNumber - 1].id,
    //   userId: user.sub,
    //   userQuizId: selectedQuizTemp?.id,
    //   quizId: allQuestionBySectionID[currentQuestionNumber - 1].quizId,
    //   time: 60,
    //   sectionId: selectedQuizSectionId,
    // });
  }, [spfFirstValue, spfSecondValue, spfThirdValue, spfFourthValue]);

  return (
    <div className={"quiz-view"}>
      {/*<QuizNavbar />*/}
      <div className={"quiz-topbar"}>
        <div className={"first-item"}>
          {selectedQuiz?.quiz?.alias
            ? selectedQuiz?.quiz?.alias
            : selectedQuiz?.quiz?.title}{" "}
          - {selectedSection?.title} Section{" "}
          {selectedSection?.questions?.items?.length} Questions
        </div>
        <div className={"last-item"}>
          {/* {submittedQuizData.length === allQuestionBySectionID.length && ( */}
          {allQuestionBySectionID.length === totalAnswerSubmittedBySection && (
            <Button
              className={"done-btn"}
              onClick={() => {
                finishQuiz();
              }}
            >
              Done
            </Button>
          )}
          <img
            onClick={() => {
              let element = document.querySelector(".question-div");
              element.requestFullscreen();
            }}
            src={Images.expandImage}
          />
        </div>
      </div>
      <div className={"container"} style={{ maxHeight: "90vh" }}>
        <QuizPagination
          currentQuestion={currentQuestionNumber ? currentQuestionNumber : 0}
          setCurrentQuestionNumber={setCurrentQuestionNumber}
          questionLength={
            allQuestionBySectionID ? allQuestionBySectionID.length : 0
          }
          allQuestionBySectionID={allQuestionBySectionID}
          submittedQuizData={submittedQuizData}
          nextQuestion={nextQuestion}
          previousQuestion={previousQuestion}
          setOccupancyChecked={setOccupancyChecked}
          flagArray={flagArray}
          questionCount={questionCount}
          renderQuestion={renderQuestion}
          setSpfFirstValue={setSpfFirstValue}
          setSpfSecondValue={setSpfSecondValue}
          setSpfThirdValue={setSpfThirdValue}
          setSpfFourthValue={setSpfFourthValue}
          submittedQuizDataForPagination={submittedQuizDataForPagination}
        />
        <div className={"row menu-bar"}>
          <div className={"col-md-5"}>
            {/* <div className="tool-bar">
              <div className={"tool-item"}>
                <TbMath className="tool-icon" />
                <p className="tool-text">Reference</p>
              </div>
              <div className={"tool-item"}>
                <IoCalculatorOutline className="tool-icon" />
                <p className="tool-text">Calculator</p>
              </div>
              <div className={"tool-item"}>
                <IoDocumentOutline className="tool-icon" />
                <p className="tool-text">Notes</p>
              </div>
              <div className={"tool-item"}>
                <TiThMenuOutline className="tool-icon" />
                <p className="tool-text">Line Foucus</p>
              </div>
            </div> */}
          </div>
          <div className={"col-md-2"}>
            {quizDuration > 0 && (
              <div className={"timer"}>
                <div className={"time"}>
                  {" "}
                  <Countdown
                    date={quizDuration}
                    renderer={countdownTimer}
                    key={tempTimer}
                  />
                </div>
                <div className={"label"}>Time Left</div>
              </div>
            )}
          </div>
          <div className={"col-md-5"}>
            <div className={"left-menu"}>
              <button
                className={"skip-btn"}
                onClick={() => {
                  setOccupancyChecked("Skip");
                  skipQuestion();
                }}
              >
                Skip
              </button>
              {typeof currentQuestionNumber !== "undefined" &&
                currentQuestionNumber !== 1 && (
                  <button
                    className={"pre-btn"}
                    onClick={() => previousQuestion()}
                  >
                    Previous
                  </button>
                )}
              {(isAllAnswersSubmitted === false ||
                currentQuestionNumber !== allQuestionBySectionID?.length) && (
                <button className={"next-btn"} onClick={() => nextQuestion()}>
                  Next
                </button>
              )}
              <div
                onClick={() => {
                  flagQuestion();
                }}
                className={"flag-question"}
              >
                <TbFlag className={"flag-icon"} />
                <span className={"flag-label"} data-tip="hello world">
                  Flag Question
                </span>
              </div>
            </div>
          </div>
        </div>
        <Row className={"question-div"}>
          <Col md={6} className={"scenario"}>
            {/* <div className={"title"}> */}
            {/* Questions 1–4 are based on the following passage. */}
            {/* </div> */}
            {allQuestionBySectionID[currentQuestionNumber - 1]?.passage
              ?.direction == null &&
            allQuestionBySectionID[currentQuestionNumber - 1]?.passage
              ?.attribution == null &&
            allQuestionBySectionID[currentQuestionNumber - 1]?.passage?.body ==
              null ? (
              <>
                <div className={"question mt-5"}>
                  <div className={"question-no"}>{currentQuestionNumber}.</div>
                  {allQuestionBySectionID[
                    currentQuestionNumber - 1
                  ]?.title.includes("<math") ? (
                    <>
                    {console.log("Hello maths")}
                      <MathJaxContext>
                        <MathJax>
                          <div
                            className={"question-description"}
                            dangerouslySetInnerHTML={{
                              __html:
                                allQuestionBySectionID[
                                  currentQuestionNumber - 1
                                ]?.title,
                            }}
                          ></div>
                        </MathJax>
                      </MathJaxContext>
                    </>
                  ) : (
                    <div
                      className={"question-description"}
                      dangerouslySetInnerHTML={{
                        __html:
                          allQuestionBySectionID[currentQuestionNumber - 1]
                            ?.title,
                      }}
                    ></div>
                  )}
                </div>
              </>
            ) : (
              <>
                {allQuestionBySectionID[currentQuestionNumber - 1]?.passage
                  ?.direction ? (
                  <>
                    <div
                      className={"title"}
                      dangerouslySetInnerHTML={{
                        __html:
                          allQuestionBySectionID[currentQuestionNumber - 1]
                            ?.passage?.direction,
                      }}
                    />
                  </>
                ) : null}

                {allQuestionBySectionID[currentQuestionNumber - 1]?.passage
                  ?.attribution ? (
                  <div
                    className={"description"}
                    dangerouslySetInnerHTML={{
                      __html:
                        allQuestionBySectionID[currentQuestionNumber - 1]
                          ?.passage?.attribution,
                    }}
                  />
                ) : null}
                {allQuestionBySectionID[currentQuestionNumber - 1]?.passage
                  ?.body ? (
                  <div
                    className={"description"}
                    key={passageCallback}
                    dangerouslySetInnerHTML={{
                      __html:
                        allQuestionBySectionID[currentQuestionNumber - 1]
                          ?.passage?.body,
                    }}
                  />
                ) : null}
              </>
            )}
          </Col>
          <Col md={6} className={"question_side"}>
            {(allQuestionBySectionID[currentQuestionNumber - 1]?.passage
              ?.direction != null ||
              allQuestionBySectionID[currentQuestionNumber - 1]?.passage
                ?.attribution != null ||
              allQuestionBySectionID[currentQuestionNumber - 1]?.passage
                ?.body != null) && (
              <>
                <div className={"question"}>
                  <div className={"question-no"}>{currentQuestionNumber}.</div>
                  {allQuestionBySectionID[
                    currentQuestionNumber - 1
                  ]?.title.includes("<math") ? (
                    <>
                      <MathJaxContext>
                        <MathJax>
                          <div
                            className={"question-description"}
                            dangerouslySetInnerHTML={{
                              __html:
                                allQuestionBySectionID[
                                  currentQuestionNumber - 1
                                ]?.title,
                            }}
                          ></div>
                        </MathJax>
                      </MathJaxContext>
                    </>
                  ) : (
                    <div
                      className={"question-description"}
                      dangerouslySetInnerHTML={{
                        __html:
                          allQuestionBySectionID[currentQuestionNumber - 1]
                            ?.title,
                      }}
                    ></div>
                  )}

                  {/* <div
                    className={"question-description"}
                    dangerouslySetInnerHTML={{
                      __html:
                        allQuestionBySectionID[currentQuestionNumber - 1]
                          ?.title,
                    }}
                  ></div> */}
                </div>
              </>
            )}

            <div className={"options"}>
              {allQuestionBySectionID[currentQuestionNumber - 1]?.answer
                ?.answerType === "SINGLE_CORRECT" ? (
                <>
                  <QuizOption
                    name={"question_option"}
                    label={"A"}
                    value={
                      allQuestionBySectionID[currentQuestionNumber - 1]?.answer
                        .choices[0]
                    }
                    changeChecked={changeOccupancyChecked}
                    saveQuizAnswer={saveQuizAnswer}
                    checked={occupancyChecked}
                  />
                  <QuizOption
                    name={"question_option"}
                    label={"B"}
                    value={
                      allQuestionBySectionID[currentQuestionNumber - 1]?.answer
                        .choices[1]
                    }
                    changeChecked={changeOccupancyChecked}
                    saveQuizAnswer={saveQuizAnswer}
                    checked={occupancyChecked}
                  />
                  <QuizOption
                    name={"question_option"}
                    label={"C"}
                    value={
                      allQuestionBySectionID[currentQuestionNumber - 1]?.answer
                        .choices[2]
                    }
                    changeChecked={changeOccupancyChecked}
                    saveQuizAnswer={saveQuizAnswer}
                    checked={occupancyChecked}
                  />
                  {allQuestionBySectionID[currentQuestionNumber - 1]?.answer
                    .choices[3] !== "" && (
                    <QuizOption
                      name={"question_option"}
                      label={"D"}
                      value={
                        allQuestionBySectionID[currentQuestionNumber - 1]
                          ?.answer.choices[3]
                      }
                      changeChecked={changeOccupancyChecked}
                      saveQuizAnswer={saveQuizAnswer}
                      checked={occupancyChecked}
                    />
                  )}
                </>
              ) : allQuestionBySectionID[currentQuestionNumber - 1]?.answer
                  ?.answerType === "SPR" ? (
                <>
                  <SPFoptions
                    spfFirstValue={spfFirstValue}
                    spfSecondValue={spfSecondValue}
                    spfThirdValue={spfThirdValue}
                    spfFourthValue={spfFourthValue}
                    setSpfFirstValue={setSpfFirstValue}
                    setSpfSecondValue={setSpfSecondValue}
                    setSpfThirdValue={setSpfThirdValue}
                    setSpfFourthValue={setSpfFourthValue}
                    saveQuizAnswerForSPF={saveQuizAnswerForSPF}
                  />
                </>
              ) : null}
            </div>
          </Col>
        </Row>
      </div>

      <Modal
        show={modalShow}
        size="md"
        className={"quiz-modal"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <Modal.Title
            className={"quiz-modal-heading"}
            id="contained-modal-title-vcenter"
          >
            {selectedSection?.title} Test Directions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p
            className={"quiz-modal-body"}
            dangerouslySetInnerHTML={{
              __html: selectedSection?.description,
            }}
          ></p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#49A250", borderColor: "#49A250" }}
            onClick={() => setModalShow(false)}
          >
            Let’s do it!
          </Button>
        </Modal.Footer>
      </Modal>
      <ReactTooltip />
    </div>
  );
};

export default Quiz;
