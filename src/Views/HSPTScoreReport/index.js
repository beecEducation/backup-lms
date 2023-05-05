import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import * as Actions from "../../store/actions";
import * as TYPES from "../../store/actions/actions.js";

import "fontawesome-4.7/css/font-awesome.min.css";
import "./style.scss";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.darkColor && "#f2f2f2"};
    padding: 25px;
  }
`;

const HSPTScoreReport = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [quizId, setQuizId] = useState("");
  const [quizFinish, setQuizFinish] = useState({});
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizFinishedState, quizFinishedId, hsptReloadRequired] = useSelector((state) => {
    return [
      state.finishUserQuiz.quizFinishedData,
      state.finishUserQuiz.quizFinishedId,
      state.helper.hsptReloadRequired
    ];
  });

  
  useEffect(() => {
    if (hsptReloadRequired === true) {
      setTimeout(() => {
        dispatch(Actions.hsptNeedsReload(false))
        window.location.href = '/hspt'
      }, 2000)
    }
  }, [hsptReloadRequired]);

  useEffect(() => {
    if (quizFinishedState) {
      console.log("Finish state is ", quizFinishedState);
      if (quizFinishedState?.subScores) {
        var temp = [];
        quizFinishedState?.subScores.map((subScore, index) => {});
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
    // dispatch({ type: TYPES.UI_START_LOADING });
  }, [quizFinishedState]);

  useEffect(() => {
    if (quizFinishedId) {
      setQuizId(quizFinishedId);
    }
    // dispatch({ type: TYPES.UI_START_LOADING });
  }, [quizFinishedId]);

  useEffect(() => {
    if (quizId !== "") {
      dispatch(Actions.dispatchGetQuizScores(quizId));
    }
    // dispatch({ type: TYPES.UI_START_LOADING });
  }, [quizId]);
  return (
    <React.Fragment>
      <GlobalStyle darkColor />
      <div className="hspt_report">
        <section className="placement-heading-section">
          <div className="container">
            <div className="row">
              <div className=" coll col-lg-1 col-md-1 col-sm-12 placement-logo-part">
                <img
                  className="main-company-logo"
                  src="https://score-report.ghrixlabs.com/images/beec_logo.png"
                  alt="beec-logo"
                />
              </div>
              <div className="coll col-lg-11 col-md-11 col-sm-12 placement-heading-part">
                <div className="placement-heading-part-inner">
                  <div className="placement-heading-part-left">
                    <h2>Beyond Education Consulting</h2>
                    <h1>HSPT Score Report</h1>
                  </div>
                  <div className="placement-heading-part-right">
                    <h2>Performance Profile</h2>
                    <p>Report by - Toal Grp | Sort: Alpha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="abrahm-scholastic-section">
          <div className="container">
            <div className="row">
              <div className="coll col-lg-6 col-md-6 col-sm-12 abrahm-col-left">
                <div className="abrahm-col-left-inner">
                  <div className="student-basic-detail">
                    <h3 className="text-capitalize">{quizFinish?.user?.firtName} {quizFinish?.user?.lastName}</h3>
                    <ul>
                      {/* <li>
                        <div className="cs-left">
                          <span className="student-birthdate">Birth Date</span>
                        </div>
                        <div className="cs-right">
                          <span className="cs-colon">: </span>
                          <span className="write-name">December 30, 2007</span>
                        </div>
                      </li>

                      <li>
                        <div className="cs-left">
                          <span className="student-gender">Gender</span>
                        </div>
                        <div className="cs-right">
                          <span className="cs-colon">: </span>
                          <span className="write-gender">Girl</span>
                        </div>
                      </li> */}
                      <li>
                        <div className="cs-left">
                          <span className="student-elem">Elem</span>
                        </div>
                        <div className="cs-right">
                          <span className="cs-colon">: </span>
                          <span className="write-name">020</span>
                        </div>
                      </li>
                      <li>
                        <div className="cs-left">
                          <span className="student-Ocode">Optional Code</span>
                        </div>
                        <div className="cs-right">
                          <span className="cs-colon">: </span>
                          <span className="write-Occode">192699</span>
                        </div>
                      </li>
                      <li>
                        <div className="cs-left">
                          <span className="student-choices">Choices/Other</span>
                        </div>
                        <div className="cs-right">
                          <span className="cs-colon">: </span>
                          <span className="write-choices"></span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="coll col-lg-6 col-md-6 col-sm-12 scholastic-col-right">
                <div className="scholastic-col-right-inner">
                  <div className="school-choices">
                    <h3>Carondelet High School</h3>
                    <ul>
                      <li>
                        <div className="cs-left">
                          <span className="student-grade">Grade</span>
                        </div>
                        <div className="cs-right">
                          <span className="cs-colon">: </span>
                          <span className="write-grade">08</span>
                        </div>
                      </li>
                      <li>
                        <div className="cs-left">
                          <span className="student-section">Section</span>
                        </div>
                        <div className="cs-right">
                          <span className="cs-colon">: </span>
                          <span className="write-section">01</span>
                        </div>
                      </li>
                      <li>
                        <div className="cs-left">
                          <span className="student-testform">Test Form</span>
                        </div>
                        <div className="cs-right">
                          <span className="cs-colon">: </span>
                          <span className="write-testform">02 J</span>
                        </div>
                      </li>
                      <li>
                        <div className="cs-left">
                          <span className="student-testdate">Test Date</span>
                        </div>
                        <div className="cs-right">
                          <span className="cs-colon">: </span>
                          <span className="write-testdate">12/14/2021</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="student-subtest-score">
          <div className="container">
            <div className="row">
              <div className="coll col-lg-6 col-md-6 col-sm-12 student-subtest-score-left">
                <div className="student-subtest-score-left-inner">
                  <div className="table-responsive">
                    <table
                      id="student-percentiles-table"
                      className="custom-table1"
                    >
                      <thead>
                        <tr>
                          <th colSpan="2">Subtests/Totals</th>
                          <th colSpan="2">Scores</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="sub-names">
                          <td></td>
                          <td>SS</td>
                          <td>Percentile</td>
                        </tr>
                        <tr className="cs-coginative">
                          <td className="color-blue color-blue-italic">
                            Cognitive Skills
                          </td>
                          <td></td>
                          <td></td>
                        </tr>

                        {quizFinishedState?.score?.sections?.map((item) => {
                          return (
                            <>
                              {(item?.title === "Verbal" ||
                                item?.title === "Quantitative") &&
                                item.type === "TEST" && (
                                  <tr className="cs-Verbal">
                                    <td>
                                      {item?.title} Skills{" "}
                                      {item?.title === "Verbal"
                                        ? "(VB)"
                                        : item?.title === "Quantitative"
                                        ? "(QT)"
                                        : ""}
                                    </td>
                                    <td className="mean-value">
                                      {item?.converted}
                                    </td>
                                    <td className="mean-percentile">
                                      {item?.percentile}
                                    </td>
                                  </tr>
                                )}
                            </>
                          );
                        })}
                        {/* <tr className="cs-Quantitative">
                          <td>Quantitative Skills (QT)</td>
                          <td className="mean-value">544.5</td>
                          <td className="mean-percentile">58</td>
                        </tr> */}
                        {quizFinishedState?.score?.sections?.map((item) => {
                          return (
                            <>
                              {item?.title === "Cognitive" &&
                                item.type === "SECTION" && (
                                  <tr className="cs-Cognitive">
                                    <td>Total Cognitive Skills (TCS)</td>
                                    <td className="mean-value">
                                      {item?.converted}
                                    </td>
                                    <td className="mean-percentile">
                                      {item?.percentile}
                                    </td>
                                  </tr>
                                )}
                            </>
                          );
                        })}
                        <tr className="cs-basic">
                          <td className="color-blue color-blue-italic">
                            Basic Skills
                          </td>
                          <td></td>
                          <td></td>
                        </tr>
                        {quizFinishedState?.score?.sections?.map((item) => {
                          return (
                            <>
                              {(item?.title === "Reading" ||
                                item?.title === "Mathematics" ||
                                item?.title === "Language") &&
                                item.type === "TEST" && (
                                  <tr className="cs-Reading">
                                    <td>
                                      {item?.title}{" "}
                                      {item?.title === "Reading"
                                        ? "(RD)"
                                        : item?.title === "Mathematics"
                                        ? "(MT)"
                                        : item?.title === "Language"
                                        ? "(LN)"
                                        : ""}
                                    </td>
                                    <td className="mean-value">
                                      {item?.converted}
                                    </td>
                                    <td className="mean-percentile">
                                      {item?.percentile}
                                    </td>
                                  </tr>
                                )}
                            </>
                          );
                        })}
                        {/* <tr className="cs-Mathematics">
                          <td>Mathematics (MT)</td>
                          <td className="mean-value">581</td>
                          <td className="mean-percentile">64</td>
                        </tr>
                        <tr className="cs-Language">
                          <td>Language (LN)</td>
                          <td className="mean-value">581</td>
                          <td className="mean-percentile">64</td>
                        </tr> */}
                        {quizFinishedState?.score?.sections?.map((item) => {
                          return (
                            <>
                              {item?.title === "Basic" &&
                                item.type === "SECTION" && (
                                  <tr className="cs-TotalSkills">
                                    <td>Total Basic Skills (TBS)</td>
                                    <td className="mean-value">
                                      {item?.converted}
                                    </td>
                                    <td className="mean-percentile">
                                      {item?.percentile}
                                    </td>
                                  </tr>
                                )}
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="coll col-lg-6 col-md-6 col-sm-12 student-subtest-score-right">
                <div className="student-subtest-score-right-inner">
                  <div className="total-graph-heading">
                    <div className="total-graph-heading-left">
                      <p className="graph-title">Performance Ratings</p>
                    </div>
                    <div className="total-graph-heading-right">
                      <p className="graph-title-right">
                        National Percentile Scale
                      </p>
                    </div>
                  </div>
                  <div className="wrapper wrapper-chart">
                    <canvas id="myChart" height="360"></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="student-performance-text">
          <div className="container">
            <div className="row">
              <div className="coll col-lg-12 col-md-12 col-sm-12">
                <p>
                  The student's performance is shown at the left by various
                  normative scores. National percentile ranks compare this
                  student's performance to students in the same grade of the
                  national normative group. For example, an NP of 65 would mean
                  that the student's test score exceeded 65 percent of students'
                  scores in a national normative population.
                </p>
                <p>
                  The student's national percentile scores are also illustrated
                  in the graph by a band of marks which show the range in which
                  the student's actual score likely falls. For most uses,
                  performance may be judged by noting the rating column in which
                  a band occurs. The High, Average, and Low ratings represent
                  the highest 10%, middle one-third, and lowest 10%
                  respectively. Above Average represents the upper one-third
                  (excluding the highest 10%) while Below Average represents the
                  lower one-third (excluding the lowest 10%). Performance in
                  specific skills areas of each subtest is reported below by the
                  number of items correctly answered and a performance rating.
                  The ratings are norm-referenced and have the same meaning a
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="performance-table">
          <div className="container">
            <div className="row">
              {quizFinishedState?.score?.sections?.map((item) => {
                return (
                  <>
                    {item?.type === "TEST" && (
                      <div className="coll col-sm-12 col-md-4 col-lg-4 col-xl-4 performance-table-col1">
                        <div className="performance-table-col-inner performance-table-col1-inner">
                          <div className="table-responsive">
                            <table className="student-custom-table student-custom-table1 student-performance-table">
                              <thead>
                                <tr>
                                  <th>Specific Skills</th>
                                  <th># Items</th>
                                  <th># Att</th>
                                  <th># Right</th>
                                  <th className="rotate">
                                    <span>Low</span>
                                  </th>
                                  <th className="rotate">
                                    <span>
                                      <i className="fa fa-minus"></i>Avg
                                    </span>
                                  </th>
                                  <th className="rotate">
                                    <span>Avg</span>
                                  </th>
                                  <th className="rotate">
                                    <span>
                                      <i className="fa fa-plus"></i>Avg
                                    </span>
                                  </th>
                                  <th className="rotate">
                                    <span>High</span>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="skills-headings">
                                  <td className="heading-bold">
                                    ****{item?.title}****
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                {/* red orange-red orange green dark-green */}
                                {/* <tr className="skill-names">
                                  <td>Comprehension</td>
                                  <td className="num-items">40</td>
                                  <td>40</td>
                                  <td className="num-right">20</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr> */}
                                {item?.tags?.map((tag) => {
                                  return (
                                    <>
                                      <tr className="skill-names">
                                        <td>{tag.title}</td>
                                        <td className="num-items">
                                          {tag?.count}
                                        </td>
                                        <td>{tag?.count - tag?.skip}</td>
                                        <td className="num-right">
                                          {tag?.correct}
                                        </td>
                                        <td className="line-graph-wrap">
                                          <div className="line-graph-left-1">
                                            <div className={(((tag?.correct/tag?.count)*100) >=0 && (((tag?.correct/tag?.count)*100) <=19)) ? "line-graph red": "line-graph"}></div>
                                          </div>
                                        </td>
                                        <td className="line-graph-wrap">
                                          <div className="line-graph-left-2">
                                            <div className={(((tag?.correct/tag?.count)*100) >=20 && (((tag?.correct/tag?.count)*100) <=39)) ? "line-graph orange-red": "line-graph"}></div>
                                          </div>
                                        </td>
                                        <td className="line-graph-wrap">
                                          <div className="line-graph-center">
                                            <div className={(((tag?.correct/tag?.count)*100) >=40 && (((tag?.correct/tag?.count)*100) <=59)) ? "line-graph orange": "line-graph"}></div>
                                          </div>
                                        </td>
                                        <td className="line-graph-wrap">
                                          <div className="line-graph-right-1">
                                            <div className={(((tag?.correct/tag?.count)*100) >=60 && (((tag?.correct/tag?.count)*100) <=79)) ? "line-graph green": "line-graph"}></div>
                                          </div>
                                        </td>
                                        <td className="line-graph-wrap">
                                          <div className="line-graph-right-2">
                                            <div className={(((tag?.correct/tag?.count)*100) >=80 && (((tag?.correct/tag?.count)*100) <=100)) ? "line-graph dark-green": "line-graph"}></div>
                                          </div>
                                        </td>
                                      </tr>
                                      {tag?.decendants?.map((sub) => {
                                        return (
                                          <>
                                            <tr className="skill-names">
                                              <td className="cs-sub-child">
                                                -{sub?.title}
                                              </td>
                                              <td className="num-items">
                                                {sub?.count}
                                              </td>
                                              <td>{sub?.count - sub?.skip}</td>
                                              <td className="num-right">
                                                {sub?.correct}
                                              </td>
                                              <td className="line-graph-wrap">
                                                <div className="line-graph-left-1">
                                                  <div className={(((sub?.correct/sub?.count)*100) >=0 && (((sub?.correct/sub?.count)*100) <=19)) ? "line-graph red": "line-graph"}></div>
                                                </div>
                                              </td>
                                              <td className="line-graph-wrap">
                                                <div className="line-graph-left-2">
                                                  <div className={(((sub?.correct/sub?.count)*100) >=20 && (((sub?.correct/sub?.count)*100) <=39)) ? "line-graph orange-red": "line-graph"}></div>
                                                </div>
                                              </td>
                                              <td className="line-graph-wrap">
                                                <div className="line-graph-center">
                                                  <div className={(((sub?.correct/sub?.count)*100) >=40 && (((sub?.correct/sub?.count)*100) <=59)) ? "line-graph orange": "line-graph"}></div>
                                                </div>
                                              </td>
                                              <td className="line-graph-wrap">
                                                <div className="line-graph-right-1">
                                                  <div className={(((sub?.correct/sub?.count)*100) >=60 && (((sub?.correct/sub?.count)*100) <=79)) ? "line-graph green": "line-graph"}></div>
                                                </div>
                                              </td>
                                              <td className="line-graph-wrap">
                                                <div className="line-graph-right-2">
                                                  <div className={(((sub?.correct/sub?.count)*100) >=80 && (((sub?.correct/sub?.count)*100) <=100)) ? "line-graph dark-green": "line-graph"}></div>
                                                </div>
                                              </td>
                                            </tr>
                                          </>
                                        );
                                      })}
                                    </>
                                  );
                                })}
                                {/* <tr className="skill-names">
                                  <td className="cs-sub-child">
                                    -Ideas & Details
                                  </td>
                                  <td className="num-items">16</td>
                                  <td>16</td>
                                  <td className="num-right">8</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Details/Events
                                  </td>
                                  <td className="num-items">7</td>
                                  <td>7</td>
                                  <td className="num-right">3</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Main Idea/Title
                                  </td>
                                  <td className="num-items">3</td>
                                  <td>3</td>
                                  <td className="num-right">1</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Cause/Effect
                                  </td>
                                  <td className="num-items">2</td>
                                  <td>2</td>
                                  <td className="num-right">1</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Conclusions/Infer
                                  </td>
                                  <td className="num-items">4 </td>
                                  <td>4</td>
                                  <td className="num-right">3</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-child">
                                    -Craft & Structure
                                  </td>
                                  <td className="num-items">5</td>
                                  <td>5</td>
                                  <td className="num-right">4</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Vocab in Context
                                  </td>
                                  <td className="num-items">5</td>
                                  <td>5 </td>
                                  <td className="num-right">4</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Purpose/Qualify
                                  </td>
                                  <td className="num-items">0</td>
                                  <td>0</td>
                                  <td className="num-right">0</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-child">
                                    -Integration of Ideas
                                  </td>
                                  <td className="num-items">10</td>
                                  <td>10</td>
                                  <td className="num-right">4</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Reason/Prediction
                                  </td>
                                  <td className="num-items">8</td>
                                  <td>8</td>
                                  <td className="num-right">2</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Compare/Contrast
                                  </td>
                                  <td className="num-items">2</td>
                                  <td>2</td>
                                  <td className="num-right">2</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td>Literary Text</td>
                                  <td className="num-items">9</td>
                                  <td>9</td>
                                  <td className="num-right">4</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-child">
                                    -Literary Elements
                                  </td>
                                  <td className="num-items">8</td>
                                  <td>8</td>
                                  <td className="num-right">3</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Details & Meaning
                                  </td>
                                  <td className="num-items">4</td>
                                  <td>4</td>
                                  <td className="num-right">2</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Character Traits
                                  </td>
                                  <td className="num-items">0</td>
                                  <td>0</td>
                                  <td className="num-right">0</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Plot/theme/Setting
                                  </td>
                                  <td className="num-items">2</td>
                                  <td>2</td>
                                  <td className="num-right">1</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Pt. of View/Style
                                  </td>
                                  <td className="num-items">2</td>
                                  <td>2</td>
                                  <td className="num-right">0</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-child">
                                    -Literary Techniques
                                  </td>
                                  <td className="num-items">1</td>
                                  <td>1 </td>
                                  <td className="num-right">1</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Irony/Pers./Meta.
                                  </td>
                                  <td className="num-items">0</td>
                                  <td>0</td>
                                  <td className="num-right">0</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td className="cs-sub-childs">
                                    Imagery/Symbol
                                  </td>
                                  <td className="num-items">1</td>
                                  <td>1</td>
                                  <td className="num-right">1</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr>
                                <tr className="skill-names">
                                  <td>Vocabulary</td>
                                  <td className="num-items">22</td>
                                  <td>22</td>
                                  <td className="num-right">13</td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-left-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-center">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-1">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                  <td className="line-graph-wrap">
                                    <div className="line-graph-right-2">
                                      <div className="line-graph"></div>
                                    </div>
                                  </td>
                                </tr> */}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                );
              })}

              {/* <div className="coll col-sm-12 col-md-4 col-lg-4 col-xl-4 performance-table-col2">
                <div className="performance-table-col-inner performance-table-col2-inner">
                  <div className="table-responsive">
                    <table className="student-custom-table student-custom-table1 student-performance-table">
                      <thead>
                        <tr>
                          <th>Specific Skills</th>
                          <th># Items</th>
                          <th># Att</th>
                          <th># Right</th>
                          <th className="rotate">
                            <span>Low</span>
                          </th>
                          <th className="rotate">
                            <span>
                              <i className="fa fa-minus"></i>Avg
                            </span>
                          </th>
                          <th className="rotate">
                            <span>Avg</span>
                          </th>
                          <th className="rotate">
                            <span>
                              <i className="fa fa-plus"></i>Avg
                            </span>
                          </th>
                          <th className="rotate">
                            <span>High</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="skills-headings">
                          <td className="heading-bold">****LANGUAGE****</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="skill-names">
                          <td>Punctuation</td>
                          <td className="num-items">5</td>
                          <td>5</td>
                          <td className="num-right">2</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Capitalization</td>
                          <td className="num-items">2</td>
                          <td>2</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Incorrect Usage</td>
                          <td className="num-items">18</td>
                          <td>18</td>
                          <td className="num-right">2</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">-Noun/Pronoun</td>
                          <td className="num-items">7</td>
                          <td>7</td>
                          <td className="num-right">1</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Verb/Adverb/Adjective
                          </td>
                          <td className="num-items">8</td>
                          <td>8</td>
                          <td className="num-right">1</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Other Parts of Speech
                          </td>
                          <td className="num-items">3</td>
                          <td>3</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Correct Usage</td>
                          <td className="num-items">12</td>
                          <td>12</td>
                          <td className="num-right">4</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Spelling</td>
                          <td className="num-items">10</td>
                          <td>10</td>
                          <td className="num-right">4</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Composition</td>
                          <td className="num-items">13</td>
                          <td>13</td>
                          <td className="num-right">4</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skills-headings">
                          <td className="heading-bold">
                            ****QUANTITATIVE SKILLS****
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="skill-names">
                          <td>Sequence</td>
                          <td className="num-items">18</td>
                          <td>18</td>
                          <td className="num-right">8</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Reasoning</td>
                          <td className="num-items">17</td>
                          <td>17</td>
                          <td className="num-right">4</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Geometric Comparison</td>
                          <td className="num-items">9</td>
                          <td>9</td>
                          <td className="num-right">6</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Non-Geo. Comparison</td>
                          <td className="num-items">8</td>
                          <td>8</td>
                          <td className="num-right">4</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skills-headings">
                          <td className="heading-bold">
                            ****VERBAL SKILLS****
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="skill-names">
                          <td>Analogy</td>
                          <td className="num-items">10</td>
                          <td>10</td>
                          <td className="num-right">5</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Logic</td>
                          <td className="num-items">10</td>
                          <td>10</td>
                          <td className="num-right">6</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Verbal Classification</td>
                          <td className="num-items">16</td>
                          <td>16</td>
                          <td className="num-right">9</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Synonyms</td>
                          <td className="num-items">15</td>
                          <td>15</td>
                          <td className="num-right">9</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Antonyms</td>
                          <td className="num-items">9</td>
                          <td>9</td>
                          <td className="num-right">6</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="coll col-sm-12 col-md-4 col-lg-4 col-xl-4 performance-table-col3">
                <div className="performance-table-col-inner performance-table-col3-inner">
                  <div className="table-responsive">
                    <table className="student-custom-table student-custom-table1 student-performance-table">
                      <thead>
                        <tr>
                          <th>Specific Skills</th>
                          <th># Items</th>
                          <th># Att</th>
                          <th># Right</th>
                          <th className="rotate">
                            <span>Low</span>
                          </th>
                          <th className="rotate">
                            <span>
                              <i className="fa fa-minus"></i>Avg
                            </span>
                          </th>
                          <th className="rotate">
                            <span>Avg</span>
                          </th>
                          <th className="rotate">
                            <span>
                              <i className="fa fa-plus"></i>Avg
                            </span>
                          </th>
                          <th className="rotate">
                            <span>High</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="skills-headings">
                          <td className="heading-bold">****MATHEMATICS****</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className="skill-names">
                          <td>Numbers & Numerations</td>
                          <td className="num-items">31</td>
                          <td>31</td>
                          <td className="num-right">16</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Procedural Operations
                          </td>
                          <td className="num-items">8</td>
                          <td>8</td>
                          <td className="num-right">5</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Root/Exponent/Place Value
                          </td>
                          <td className="num-items">6</td>
                          <td>6</td>
                          <td className="num-right">4</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">-Ratio/Proportion</td>
                          <td className="num-items">4</td>
                          <td>4</td>
                          <td className="num-right">2</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Property/Factor/Mult
                          </td>
                          <td className="num-items">4</td>
                          <td>4</td>
                          <td className="num-right">2</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">-Word Problems</td>
                          <td className="num-items">8</td>
                          <td>8</td>
                          <td className="num-right">1</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Measurements</td>
                          <td className="num-items">8</td>
                          <td>8</td>
                          <td className="num-right">2</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Wt./Length/Dry/Liquid
                          </td>
                          <td className="num-items">4</td>
                          <td>4</td>
                          <td className="num-right">1</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">-Time/Temperature</td>
                          <td className="num-items">2</td>
                          <td>2</td>
                          <td className="num-right">1</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Metric/Monetary Conv.
                          </td>
                          <td className="num-items">1</td>
                          <td>1</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Geometry</td>
                          <td className="num-items">9</td>
                          <td>9</td>
                          <td className="num-right">5</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">-Points/Lines/Angles</td>
                          <td className="num-items">3</td>
                          <td>3</td>
                          <td className="num-right">2</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">-Plane/Cubic Figures</td>
                          <td className="num-items">0</td>
                          <td>0</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Perimeter/Area/Volume
                          </td>
                          <td className="num-items">5</td>
                          <td>5</td>
                          <td className="num-right">3</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Diameter/Rad./Circum.
                          </td>
                          <td className="num-items">1</td>
                          <td>1</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Congruent/Sym/Pythag.
                          </td>
                          <td className="num-items">0</td>
                          <td>0</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Algebra</td>
                          <td className="num-items">12</td>
                          <td>12</td>
                          <td className="num-right">4</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">-Equality/Inequality</td>
                          <td className="num-items">6</td>
                          <td>6</td>
                          <td className="num-right">3</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Functions/Coordinates
                          </td>
                          <td className="num-items">6</td>
                          <td>6</td>
                          <td className="num-right">1</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td>Statistics & Probability</td>
                          <td className="num-items">2</td>
                          <td>2</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">-Mean/Med/Mode/Range</td>
                          <td className="num-items">1</td>
                          <td>1</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">
                            -Probability Concepts
                          </td>
                          <td className="num-items">0</td>
                          <td>0</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="skill-names">
                          <td className="cs-sub-child">-Data/Graphs/Tables</td>
                          <td className="num-items">1</td>
                          <td>1</td>
                          <td className="num-right">0</td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-left-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-center">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-1">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                          <td className="line-graph-wrap">
                            <div className="line-graph-right-2">
                              <div className="line-graph"></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HSPTScoreReport;
