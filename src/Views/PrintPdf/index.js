import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import * as TYPES from "../../store/actions/actions.js";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import { FaCheckCircle } from "react-icons/fa";
import Moment from "react-moment";
import "./style.sass";
import { useNavigate } from "react-router-dom";

function PrintPdf() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [quizId, setQuizId] = useState("");
  const [quizFinish, setQuizFinish] = useState({});
  const [subScores, setSubScores] = useState([]);
  const [isSubscoreIsAnalysisInScience, setIsSubscoreIsAnalysisInScience] =
    useState(false);
  const [isSubscoreIsAnalysisInHistory, setIsSubscoreIsAnalysisInHistory] =
    useState(false);
  const [indexOfSubscore, setIndexOfSubscore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinishedState, quizFinishedId] = useSelector((state) => {
    return [
      state.finishUserQuiz.quizFinishedData,
      state.finishUserQuiz.quizFinishedId,
    ];
  });
  useEffect(() => {
    if (quizFinishedState) {
      if (quizFinishedState?.subScores) {
        var temp = [];
        quizFinishedState?.subScores.map((subScore, index) => {
          if (JSON.parse(subScore)?.title === "Analysis in Science") {
            setIsSubscoreIsAnalysisInScience(true);
            setIndexOfSubscore(index);
          }
          if (
            JSON.parse(subScore)?.title == "Analysis in History/Social Studies"
          ) {
            setIsSubscoreIsAnalysisInHistory(true);
            setIndexOfSubscore(index);
          }
          temp.push(JSON.parse(subScore));
        });
        setSubScores(temp);
      }

      if (quizFinishedState?.userAnswer) {
        var temp = [];
        quizFinishedState?.userAnswer.map((userAnswer, index) => {
          temp.push(JSON.parse(userAnswer));
        });
        setUserAnswers(temp);
      }
      setQuizFinish(quizFinishedState);
    }
    dispatch({ type: TYPES.UI_START_LOADING });
  }, [quizFinishedState]);

  useEffect(() => {
    if (quizFinishedId) {
      setQuizId(quizFinishedId);
    }
    dispatch({ type: TYPES.UI_START_LOADING });
  }, [quizFinishedId]);

  useEffect(() => {
    if (quizId !== "") {
      dispatch(Actions.dispatchGetQuizScores(quizId));
    }
    dispatch({ type: TYPES.UI_START_LOADING });
  }, [quizId]);

  useEffect(() => {
    const fetchData = async () => {
      var element = document.getElementById('printPDF');
      var opt = {
        margin: 0.5,
        filename: 'score-report.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 5 },
        jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().from(element).set(opt).save();
      setTimeout(() => {
        navigate('/dashboard')
      }, 3000);
    }
    setTimeout(() => {
      fetchData()
        .catch(console.error);
    }, 3000);
  }, []);

  return (
    <React.Fragment>
      <div id="printPDF" className="container-fluid print_pdf_page">
        <div className="row">
          <div className="col-md-12">
            <div className="total-score-div">
              <p className="heading">Your total score</p>
              <div className="d-flex align-items-center">
                <div className="total-score">
                  {quizFinish?.score?.converted}
                </div>
                <div className="score-range">
                  400-
                  <br />
                  1600
                </div>
              </div>
              <div className="row">
                <div className="col-4 flex-column">
                  <div className="position">65th</div>
                  <div className="position-desc">
                    Nationally Representative Sample Percentile
                  </div>
                </div>
                <div className="col-4 flex-column">
                  <div className="position">
                    {quizFinish?.score?.percentile}th
                  </div>
                  <div className="position-desc">SAT User Percentile</div>
                </div>
              </div>
            </div>
            <div className="section-score-div">
              <p className="heading">Section Scores</p>
              {quizFinish?.score?.sections?.map((section) => {
                return (
                  <>
                    {section?.type === "SECTION" && (
                      <div className="row">
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <div className="small-score">
                              {section?.converted}
                            </div>
                            <div className="small-score-range">200-800</div>
                          </div>
                          <div className="small-score-desc">
                            Your {section?.title} score
                          </div>
                        </div>

                        <div className="col-5">
                          <div className="d-flex flex-column">
                            <div className="d-flex flex-row">
                              <div className="small-position">65th</div>
                              <div className="small-position-desc">
                                Nationally Representative Sample Percentile
                              </div>
                            </div>
                            <div className="d-flex flex-row">
                              <div className="small-position">
                                {section?.percentile}th
                              </div>
                              <div className="small-position-desc">
                                SAT User Percentile
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-3 d-flex justify-content-center align-items-center flex-column">
                          {/* <i className="fa-solid fa-circle-check check-icon"></i> */}
                          <FaCheckCircle className="check-icon" />
                          <p className="text-center benchmark-desc">
                            You have met the benchmark
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </div>

            <div className="test-score-div">
              <p className="heading">Test Scores</p>
              <div className="row">
                {quizFinish?.score?.sections?.map((section) => {
                  return (
                    <>
                      {section?.type === "TEST" && section?.isTestScore && (
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <div className="small-score">
                              {section?.converted}{" "}
                            </div>
                            <div className="small-score-range">10-40</div>
                          </div>
                          <div className="small-score-desc">
                            {section?.title}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>

            <div className="cross-test-score-div">
              <p className="heading">
                Cross Test Scores <span className="sub-heading">10-40</span>
              </p>
              <div className="row">
                {subScores?.map((subScore) => {
                  return (
                    <>
                      {subScore?.tagType === "CROSS-TEST" && (
                        <div className="col-4">
                          <div className="d-flex align-items-center">
                            <div className="small-score">
                              {subScore?.converted}
                            </div>
                          </div>
                          <div className="small-score-desc">
                            {subScore?.title}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
                {/* {isSubscoreIsAnalysisInScience ? (
                  <>
                    <div className="col-4">
                      <div className="d-flex align-items-center">
                        <div className="small-score">
                          {subScores[indexOfSubscore]?.converted}
                        </div>
                      </div>
                      <div className="small-score-desc">Analysis in Science</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-4">
                      <div className="d-flex align-items-center">
                        <div className="small-score">
                          {subScores[indexOfSubscore]?.converted}
                        </div>
                      </div>
                      <div className="small-score-desc">
                        Analysis in History / Social studies
                      </div>
                    </div>
                  </>
                )} */}
              </div>
            </div>

            <div className="sub-score-div">
              <p className="heading">
                SubScores <span className="sub-heading">1-15</span>
              </p>
              <div className="row">
                {subScores?.map((subScore) => {
                  return (
                    <>
                      {subScore?.tagType === "SUBSCORE" && (
                        <div className="col-3 mt-3">
                          <div className="d-flex align-items-center">
                            <div className="small-score">
                              {subScore?.converted}
                            </div>
                          </div>
                          <div className="small-score-desc">
                            {subScore?.title}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="profile-detail-div">
              <div className="profile-item">
                <p className="label">Student Name</p>
                <p className="value">
                  {quizFinish?.user?.firstName} {quizFinish?.user?.lastName}
                </p>
              </div>
              <div className="profile-item">
                <p className="label">Student ID</p>
                <p className="value">{quizFinish?.user?.id.slice(0, 6)}</p>
              </div>
              <div className="profile-item">
                <p className="label">Test Date</p>
                <p className="value">
                  <Moment format="MMM DD, YYYY">{quizFinish?.startedAt}</Moment>
                </p>
              </div>
              <div className="profile-item">
                <p className="label">Test Name</p>
                <p className="value">{quizFinish?.quiz?.title}</p>
              </div>
            </div>

            <div className="faq-div">
              <div className="faq-item">
                <p className="question">Am I on Track for College?</p>
                <p className="answer">
                  Look for the green or yellow symbols next to your section
                  scores. They let you know if your scores are at or above the
                  benchmark scores. Benchmarks show college readiness. If yip
                  see green, you're on track to be ready for college when you
                  graduate.
                </p>
              </div>

              <div className="faq-item">
                <p className="question">Benchmark scores:</p>
                <p className="answer bold">
                  Evidence-Based Reading and Writing; 480 Math: 530
                </p>
              </div>

              <div className="faq-item">
                <p className="question">How Do My Scores Compare?</p>
                <p className="answer">
                  A percentile shows how you scored, compared to other students.
                  It's a number between 1 and 99 and represents the percentage
                  of students whose scores are equal to or below yours. For
                  example, if your Math percentile is 57, that means 57% of test
                  takers have Math scores equal to or below yours. The
                  Nationally Representative Sample Percentile compares your
                  score to the scores of typical U.S. students. SATe User
                  Percentile compares your score to the scores of students who
                  typically take the test.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="student-response-div">
          <div className="heading">Student Responses and Correct Answers</div>
          <div className="row">
            {quizFinish?.score?.sections?.map((section) => {
              return (
                <>
                  {section?.type === "TEST" && (
                    <>
                      {userAnswers
                        .filter((x) => x.sectionId === section?.id)
                        .sort((a, b) => {
                          return a.orderId - b.orderId;
                        }).length > 0 && (
                          <div className="col-3">
                            <div className="response-item">
                              <p>{section?.title}</p>
                              <table className="response-table">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th className="th-bold">Std</th>
                                    <th className="th-italic">Cor</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {userAnswers
                                    .filter((x) => x.sectionId === section?.id)
                                    .sort((a, b) => {
                                      return a.orderId - b.orderId;
                                    })
                                    ?.map((section, index) => {
                                      return (
                                        <tr>
                                          <td>{section?.orderId}</td>
                                          <td>
                                            {section?.answer?.toUpperCase()}
                                          </td>
                                          <td>
                                            {section?.correct === "TRUE"
                                              ? "✓"
                                              : section?.correctAnswer?.toUpperCase()}
                                          </td>
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                    </>
                  )}
                </>
              );
            })}
          </div>
        </div>
        {/* <div className="row mt-4">
          <div className="col-8">
            <p className="heading">Performance Indicator</p>
          </div>
          <div className="col-4">
            <p className="text-bold text-end">Andaury corando#2</p>
          </div>
          <div className="col-8">
            <p className="text-bold">Andaury corando-ID#2</p>
          </div>
          <div className="col-4">
            <p className="small-heading text-end">Question Category Analysis</p>
          </div>
          <div className="col-12">
            <p className="test-label">
              Test Name: <strong className="test-value">SAT practice #1</strong>
            </p>
            <p className="test-label">
              Test Date: <strong className="test-value">Apr 01,2022</strong>
            </p>
          </div>
        </div> */}
        {/* {(isSubscoreIsAnalysisInScience || isSubscoreIsAnalysisInHistory) && ( */}
        <div className="cross-test-category">
          <table className="cross-category-table table border-light">
            <thead>
              <tr>
                <th>Cross-Test Categories</th>
                <th>Correct</th>
                <th>Correct</th>
                <th>Incorrect</th>
                <th>Omitted</th>
                <th>Incorrect and Omitted Questions</th>
              </tr>
            </thead>
            <tbody>
              {isSubscoreIsAnalysisInScience && (
                <tr>
                  <td>Analysis in History/Social Studies</td>
                  <td>
                    {(
                      (JSON.parse(quizFinish?.subScores[indexOfSubscore])
                        ?.correct /
                        JSON.parse(quizFinish?.subScores[indexOfSubscore])
                          ?.count) *
                      100
                    ).toFixed(0)}
                    %
                  </td>
                  <td>
                    {
                      JSON.parse(quizFinish?.subScores[indexOfSubscore])
                        ?.correct
                    }
                  </td>
                  <td>
                    {
                      JSON.parse(quizFinish?.subScores[indexOfSubscore])
                        ?.incorrects.length
                    }
                  </td>
                  <td>
                    {JSON.parse(quizFinish?.subScores[indexOfSubscore])?.skip}
                  </td>
                  <td>
                    {JSON.parse(quizFinish?.subScores[indexOfSubscore])
                      ?.incorrects?.sort((a, b) => {
                        return a - b;
                      })
                      ?.map((item) => (
                        <>{item}, </>
                      ))}
                  </td>
                </tr>
              )}
              {isSubscoreIsAnalysisInHistory && (
                <tr>
                  <td>Analysis in Science</td>
                  <td>
                    {
                      JSON.parse(quizFinish?.subScores[indexOfSubscore])
                        ?.correct
                    }
                    %
                  </td>
                  <td>
                    {
                      JSON.parse(quizFinish?.subScores[indexOfSubscore])
                        ?.correct
                    }
                  </td>
                  <td>
                    {
                      JSON.parse(quizFinish?.subScores[indexOfSubscore])
                        ?.incorrects.length
                    }
                  </td>
                  <td>
                    {JSON.parse(quizFinish?.subScores[indexOfSubscore])?.skip}
                  </td>
                  <td>
                    {JSON.parse(quizFinish?.subScores[indexOfSubscore])
                      ?.incorrects?.sort((a, b) => {
                        return a - b;
                      })
                      ?.map((item) => (
                        <>{item}, </>
                      ))}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* )} */}
        <div className="skill-analysis">
          <table className="skill-analysis-table">
            <thead>
              <tr>
                <th>Skill Analysis</th>
                <th>Correct</th>
                <th>Correct</th>
                <th>Incorrect</th>
                <th>Omitted</th>
                <th>Incorrect and Omitted Questions</th>
              </tr>
            </thead>
            <tbody>
              {quizFinish?.score?.sections?.map((section, index) => {
                return (
                  <>
                    {section?.type === "TEST" && (
                      <>
                        <tr colSpan="6" className="text-bolder">
                          <td className="text-bolder">{section?.title}</td>
                        </tr>
                        {section?.tags?.map((item, index) => {
                          return (
                            <>
                              <tr>
                                <td colSpan="6" className="bg-gray">
                                  {item?.title}
                                </td>
                              </tr>
                              {item?.decendants?.map(
                                (subSection, subSectionIndex) => {
                                  return (
                                    <tr>
                                      <td>{subSection?.title}</td>
                                      <td>
                                        {(
                                          (subSection?.correct /
                                            subSection?.count) *
                                          100
                                        ).toFixed(0)}
                                        %
                                      </td>
                                      <td>{subSection?.correct}</td>
                                      <td>
                                        {subSection?.count -
                                          subSection?.correct}
                                      </td>
                                      <td>{subSection?.skip}</td>
                                      <td>
                                        {subSection?.incorrects
                                          ?.sort((a, b) => {
                                            return a.orderId - b.orderId;
                                          })
                                          ?.map((subScore) => (
                                            <>{subScore}, </>
                                          ))}
                                      </td>
                                    </tr>
                                  );
                                }
                              )}
                            </>
                          );
                        })}
                      </>
                    )}
                  </>
                );
              })}

              {/* {quizFinish?.tagResult?.map((item, index) => {
                return (
                  <>
                    <tr>
                      <td colSpan="6" className="text-bolder">
                        {JSON.parse(item)?.title}
                      </td>
                    </tr>
                    {JSON.parse(item)?.decendants?.map(
                      (subSection, subSectionIndex) => {
                        return (
                          <tr className="bg-gray">
                            <td>{subSection?.title}</td>
                            <td>
                              {(
                                (subSection?.correct / subSection?.count) *
                                100
                              ).toFixed(0)}
                              %
                            </td>
                            <td>{subSection?.correct}</td>
                            <td>{subSection?.count - subSection?.correct}</td>
                            <td>{subSection?.skip}</td>
                            <td>
                              {subSection?.incorrects
                                ?.sort((a, b) => {
                                  return a.orderId - b.orderId;
                                })
                                ?.map((subScore) => (
                                  <>{subScore}, </>
                                ))}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}
export default PrintPdf;
