import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import "./style.sass";
import WithNavBar from "../../Layouts/WithNavBar";
import CustomTopbar from "../../components/CustomTopbar";
import CustomMenubar from "../../components/CustomMenubar";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsCheckCircleFill,
  BsQuestionCircleFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import CustomFooter from "../../components/CustomFooter";
import CustomMeter from "../../components/CustomMeter";
import { Text, View } from "@aws-amplify/ui-react";
import { FaCircle } from "react-icons/fa";
import ManChart from "../../components/ManChart";

const ScoreOverview = () => {
  const dispatch = useDispatch();
  const [quizFinish, setQuizFinish] = useState({});
  const [quizId, setQuizId] = useState({});
  const [quizFinishedState, quizFinishedId] = useSelector((state) => {
    return [
      state.finishUserQuiz.quizFinishedData,
      state.finishUserQuiz.quizFinishedId,
    ];
  });

  // save started quiz data to usestate
  useEffect(() => {
    if (quizFinishedState) {
      console.log("QUIZ FINISH STATE IS ", quizFinishedState);
      setQuizFinish(quizFinishedState);
    }
  }, [quizFinishedState]);

  useEffect(() => {
    if (quizFinishedId) {
      setQuizId(quizFinishedId);
    }
  }, [quizFinishedId]);

  useEffect(() => {
    if (quizId) {
      dispatch(Actions.dispatchGetQuizScores(quizId));
    }
  }, [quizId]);
  return (
    <WithNavBar IsLoggedIn={true}>
      <CustomTopbar
        name={quizFinish?.quiz?.alias ? quizFinish?.quiz?.alias : quizFinish?.quiz?.title}
        finishedAt={quizFinish?.finishedAt}
        quizType={quizFinish?.quiz?.type}
      />
      <CustomMenubar active={"overview"} quizType={quizFinish?.quiz?.type} />
      <Container className={"mt-5 score-overview-div"}>
        <Row>
          <Col md={12}>
            <div className={"card"}>
              <div className={"card-heading"}>
                <span style={{ paddingRight: "10px" }}>Total Score</span>{" "}
                <BsQuestionCircleFill />
              </div>
              <div className={"card-body"}>
                <Row>
                  <Col md={6} className={"card-col right-border"}>
                    <Text>
                      Your Total Score <BsQuestionCircleFill />
                    </Text>
                    <CustomMeter
                      score={quizFinish?.score?.converted}
                      percentage={quizFinish?.score?.percentile}
                      min_score={400}
                      max_score={1600}
                      title={`Your Score range : ${quizFinish?.score?.range}`}
                    />
                  </Col>
                  <Col md={6} className={"card-col"}>
                    <Text>
                      You are in{" "}
                      <span className={"icon"} style={{ marginRight: "5px" }}>
                        <span className={"circle-icon"}>
                          {quizFinish?.score?.percentile}
                          <sup>th</sup>
                        </span>
                      </span>
                      percentile <BsQuestionCircleFill />
                    </Text>
                    <ManChart
                      score={Math.round(quizFinish?.score?.percentile / 10)}
                      key={"manchart"}
                    />
                  </Col>
                </Row>
              </div>
            </div>

            <div className={"card mt-5"}>
              <div className={"card-heading"}>
                <span style={{ paddingRight: "10px" }}>Section Scores</span>{" "}
                <BsQuestionCircleFill />
                <span className={"heading-right"}>
                  Score Key <BsThreeDotsVertical size={25} />
                </span>
              </div>
              <div className={"card-body"}>
                <Row>
                  {quizFinish?.score?.sections?.map((section, index) => {
                    return (
                      <>
                        {section?.type === "SECTION" && (
                          <Col md={6} className={"card-col right-border"}>
                            <Text>
                              {section?.title}
                              <BsQuestionCircleFill />
                            </Text>
                            <CustomMeter
                              key={index}
                              score={section?.converted}
                              percentage={section?.percentile}
                              min_score={200}
                              max_score={800}
                              title={"Your Score"}
                            />
                            <div className={"description"}>
                              <div className={"item"}>
                                <span className={"icon"}>
                                  <BsCheckCircleFill
                                    size={20}
                                    color={"#88B466"}
                                  />
                                </span>
                                <span className={"text"}>
                                  Your score shows that you’re on track to be
                                  ready for college
                                </span>
                              </div>
                              <div className={"item"}>
                                <span className={"icon"}>
                                  <FaCircle size={20} color={"#10A0DE1A"} />
                                </span>
                                <span className={"text"}>
                                  Your Score Range{" "}
                                  <strong style={{ color: "black" }}>
                                  {section?.range}
                                  </strong>
                                </span>
                              </div>
                              <div className={"item"}>
                                <span className={"icon"}>
                                  <span className={"circle-icon"}>
                                    {section?.percentile}
                                    <sup>th</sup>
                                  </span>
                                </span>
                                <span className={"text"}>
                                  You are in the{" "}
                                  <strong style={{ color: "black" }}>
                                    {section?.percentile}th
                                  </strong>{" "}
                                  percentile
                                </span>
                              </div>
                            </div>
                          </Col>
                        )}
                      </>
                    );
                  })}
                  {/* 
                  <Col md={6} className={"card-col"}>
                    <Text>
                      Your Math Score <BsQuestionCircleFill />
                    </Text>
                    <CustomMeter
                      score={480}
                      percentage={70}
                      min_score={200}
                      max_score={800}
                      title={"Your Score"}
                    />
                    <div className={"description"}>
                      <div className={"item"}>
                        <span className={"icon"}>
                          <BsCheckCircleFill size={20} color={"#88B466"} />
                        </span>
                        <span className={"text"}>
                          Your score shows that you’re on track to be ready for
                          college
                        </span>
                      </div>
                      <div className={"item"}>
                        <span className={"icon"}>
                          <FaCircle size={20} color={"#10A0DE1A"} />
                        </span>
                        <span className={"text"}>
                          Your Score Range{" "}
                          <strong style={{ color: "black" }}>460-520</strong>
                        </span>
                      </div>
                      <div className={"item"}>
                        <span className={"icon"}>
                          <span className={"circle-icon"}>
                            51<sup>th</sup>
                          </span>
                        </span>
                        <span className={"text"}>
                          You are in the{" "}
                          <strong style={{ color: "black" }}>51th</strong>{" "}
                          percentile
                        </span>
                      </div>
                    </div>
                  </Col> */}
                </Row>
              </div>
            </div>
          </Col>
          {/* <DashboardSidebar /> */}
        </Row>
      </Container>
      <CustomFooter />
    </WithNavBar>
  );
};

export default ScoreOverview;
