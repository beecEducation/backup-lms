/*
  API's used
*/

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import "./style.sass";
import WithNavBar from "../../Layouts/WithNavBar";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import CustomFooter from "../../components/CustomFooter";
import DashboardCard from "../../components/DashboardCard";
import { Text, View } from "@aws-amplify/ui-react";
import ButtonCTA from "../../components/ButtonCTA";
import QuestionTime from "../../components/QuestionTime";
import { Images } from "../../components";
import { FaChevronRight } from "react-icons/fa";
import CustomProgressbar from "../../components/CustomProgressbar";
import DashboardSidebar from "../../components/DashboardSidebar";
import { useNavigate } from "react-router-dom";
import Moment from "react-moment";

const PackageQuizzes = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [listUserQuizzes, setListUserQuizzes] = useState([]);
  const [currentUser, quizzesTemp] = useSelector((state) => {
    return [state.auth.cognito, state.quiz.listUserQuizzesByPackageId];
  });

  // useEffect(() => {
  //   if (currentUser) {
  //     dispatch(
  //       Actions.dispatchListUserQuizzesByUserId({ userId: currentUser.sub })
  //     );
  //   }
  // }, [currentUser]);

  useEffect(() => {
    if (quizzesTemp) {
      setListUserQuizzes(quizzesTemp);
    }
  }, [quizzesTemp]);

  const saveQuizIdForSections = (quizId) => {
    dispatch(Actions.saveSelectedQuizIdForSections(quizId));
    navigate("/start_test");
  };

  return (
    <WithNavBar IsLoggedIn={true}>
      <Container className={"mt-5 dashboard-revised-div"}>
        <Row>
          <Col md={12}>
            {listUserQuizzes.length > 0 ? (
              <>
                {listUserQuizzes.map((quiz, index) => {
                  return (
                    <>
                      {quiz.status === "PENDING" ? (
                        <>
                          <DashboardCard
                            padding={"20px"}
                            marginTop={index != 0 ? "40px" : "0px"}
                            height={"250px"}
                          >
                            <div className={"custom-card-header"}>
                              <View className={"header-left"}>
                                <Text className={"header-title"}>
                                  {/* {quiz?.quiz.title} */}
                                  {quiz?.quiz?.alias
                                    ? quiz?.quiz?.alias
                                    : quiz?.quiz?.title}
                                </Text>
                                <Text className={"header-text"}>
                                  Status: Not Taken{" "}
                                  <span className={"header-subtext"}>
                                    | Expires{" "}
                                    <Moment format="MMM DD, YYYY">
                                      {quiz?.expiresAt}
                                    </Moment>
                                  </span>
                                </Text>
                              </View>
                              <div className={"header-right"}>
                                <ButtonCTA
                                  className={"header-button"}
                                  fontSize={"11px"}
                                  label={"Complete Exam"}
                                  purple
                                  onClick={() => {
                                    saveQuizIdForSections(quiz.quiz.id);
                                    dispatch(Actions.saveSelectedQuiz(quiz));
                                  }}
                                />
                              </div>
                            </div>
                            <div className={"custom-card-body"}>
                              <div className={"row"}>
                                {quiz?.quiz?.sections?.items?.map(
                                  (item, index) => {
                                    return (
                                      <div className={"col-lg-3 col-md-6"}>
                                        <QuestionTime
                                          borderRight={true}
                                          label={item?.title}
                                          time1={item?.time}
                                          time2={item?.questions?.items?.length}
                                          text1={"min"}
                                          text2={"questions"}
                                        />
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </DashboardCard>
                        </>
                      ) : (
                        <>
                          {quiz.status === "FINISHED" ? (
                            <DashboardCard
                              padding={"20px"}
                              height={"250px"}
                              marginTop={index != 0 ? "40px" : "0px"}
                            >
                              <div className={"custom-card-header"}>
                                <View className={"header-left"}>
                                  <Text className={"header-title"}>
                                    {quiz?.quiz?.alias
                                      ? quiz?.quiz?.alias
                                      : quiz?.quiz?.title}
                                  </Text>
                                  <Text className={"header-text"}>
                                    Status: Completed{" "}
                                    <span className={"header-subtext"}>
                                      | Taken{" "}
                                      <Moment format="MMM DD, YYYY">
                                        {quiz?.finishedAt}
                                      </Moment>
                                    </span>
                                  </Text>
                                </View>
                                <div className={"header-right"}>
                                  <ButtonCTA
                                    className={"header-button"}
                                    fontSize={"11px"}
                                    label={"View More Details"}
                                    purple
                                    onClick={() => {
                                      dispatch(
                                        Actions.saveFinishedQuizId(quiz.id)
                                      );
                                      navigate("/dashboard");
                                    }}
                                  />
                                </div>
                              </div>
                              <div className={"custom-card-body"}>
                                <div className={"row mt-2"}>
                                  <div className={"col-md-9 mt-1"}>
                                    <div className="">
                                      <h1 className="card_heading">
                                        Your Total Score
                                      </h1>
                                      <p className="score_content">
                                        <span className="top_scores">
                                          {quiz?.score?.converted}
                                        </span>
                                        <span className="top_total_score ms-3">
                                          {quiz?.quiz?.type === "HSPT"? "200-800" : "400 to 1600"}
                                        </span>
                                      </p>
                                    </div>
                                    <div className="align-items-center d-flex justify-content-between mt-4 progress_bar_area">
                                      <span className="me-2">{quiz?.quiz?.type === "HSPT"? "200" : "400"}</span>
                                      <CustomProgressbar
                                        height={"15px"}
                                        scores={quiz?.quiz?.type === "HSPT" ? `${quiz?.score?.converted}`: `${quiz?.score?.percentile}`}
                                        labelMarginTop={"-45px"}
                                        progress={quiz?.quiz?.type === "HSPT" ? `${quiz?.score?.percentile}`: `${quiz?.score?.percentile}`}
                                      />
                                      <span className="ms-2">{quiz?.quiz?.type === "HSPT"? "800" : "1600"}</span>
                                    </div>
                                  </div>
                                  <div className={"col-md-3 mt-1"}>
                                    <div className={`box-content`}>
                                      {quiz?.score?.sections?.map(
                                        (section, index) => {
                                          return (
                                            <>
                                              {section?.type === "SECTION" && (
                                                <div>
                                                  <Text className={"box-text"}>
                                                    {section?.title}
                                                  </Text>
                                                  <View
                                                    className={"box-scores"}
                                                  >
                                                    <Text
                                                      className={"box-score"}
                                                    >
                                                      {section?.converted}
                                                    </Text>
                                                    <Text
                                                      className={"sub-score"}
                                                    >
                                                      200 to 800
                                                    </Text>
                                                  </View>
                                                </div>
                                              )}
                                            </>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DashboardCard>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                      {quiz.status === "STARTED" && (
                        <>
                          <DashboardCard
                            padding={"20px"}
                            marginTop={index != 0 ? "40px" : "0px"}
                            height={"250px"}
                          >
                            <div className={"custom-card-header"}>
                              <View className={"header-left"}>
                                <Text className={"header-title"}>
                                  {quiz?.quiz?.alias
                                    ? quiz?.quiz?.alias
                                    : quiz?.quiz?.title}
                                </Text>
                                <Text className={"header-text"}>
                                  Status: Started{" "}
                                  <span className={"header-subtext"}>
                                    | Expires{" "}
                                    <Moment format="MMM DD, YYYY">
                                      {quiz?.expiresAt}
                                    </Moment>
                                  </span>
                                </Text>
                              </View>
                              <div className={"header-right"}>
                                <ButtonCTA
                                  className={"header-button"}
                                  fontSize={"11px"}
                                  label={"Complete Exam"}
                                  purple
                                  onClick={() => {
                                    saveQuizIdForSections(quiz.quiz.id);
                                    dispatch(Actions.saveSelectedQuiz(quiz));
                                  }}
                                />
                              </div>
                            </div>
                            <div className={"custom-card-body"}>
                              <div className={"row"}>
                                {quiz?.quiz?.sections?.items?.map(
                                  (item, index) => {
                                    return (
                                      <div className={"col-lg-3 col-md-6"}>
                                        <QuestionTime
                                          borderRight={true}
                                          label={item?.title}
                                          time1={item?.time}
                                          time2={item?.questions?.items?.length}
                                          text1={"min"}
                                          text2={"questions"}
                                        />
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </DashboardCard>
                        </>
                      )}
                    </>
                  );
                })}
              </>
            ) : (
              <>
                <div className="text-center p-5 emptyCart">
                  {/* <img src={Images.cartEmpty} alt="" className="img-fluid mb-4" /> */}
                  <h4 className="heading-4">No Packages Found</h4>
                  <h5 className="heading-5 my-4">
                    Purchase any package to view it
                  </h5>
                  <a
                    role="button"
                    className="blue-button col"
                    onClick={() => navigate("/courses")}
                  >
                    Find a Course
                  </a>
                </div>
              </>
            )}
          </Col>
          {/* <DashboardSidebar /> */}
        </Row>
      </Container>
      <CustomFooter />
    </WithNavBar>
  );
};

export default PackageQuizzes;
