/*
  API's used in this file
  1. listQuizSectionsByQuizId
  2. getUserQuiz
*/

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import "./style.sass";
import WithNavBar from "../../Layouts/WithNavBar";
import { Col, Container, Row } from "react-bootstrap";
import CustomFooter from "../../components/CustomFooter";
import StartTestRow from "../../components/StartTestRow";

const StartTest = () => {
  const dispatch = useDispatch();
  const [quizId, setQuizId] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [userQuizId, setUserQuizId] = useState(null);
  const [userQuizScore, setUserQuizScore] = useState(null);
  const [selectedQuizId, selectedQuizTemp, tempUserQuizScore, quizNeedsReload] = useSelector(
    (state) => {
      return [
        state.quiz.selectedQuizIdForSections,
        state.quiz.selectedQuiz,
        state.finishUserQuiz.quizFinishedData,
        state.helper.quizReloadRequired
      ];
    }
  );
  useEffect(() => {
    if (quizNeedsReload === false) {
      dispatch(Actions.quizNeedsReload(true))
    }
  }, [quizNeedsReload]);

  useEffect(() => {
    if (selectedQuizId) {
      setQuizId(selectedQuizId);
    }
  }, [selectedQuizId]);

  useEffect(() => {
    if (tempUserQuizScore) {
      setUserQuizScore(tempUserQuizScore);
    }
  }, [tempUserQuizScore]);

  useEffect(() => {
    if (selectedQuizTemp) {
      setUserQuizId(selectedQuizTemp.id);
      setSelectedQuiz(selectedQuizTemp);
    }
  }, [selectedQuizTemp]);

  useEffect(() => {
    if (quizId) {
      dispatch(Actions.dispatchListQuizSectionsByQuizId({ quizId: quizId }));
    }
  }, [quizId]);

  useEffect(() => {
    if (userQuizId) {
      dispatch(Actions.dispatchGetQuizScores(userQuizId));
    }
  }, [userQuizId]);

  return (
    <WithNavBar IsLoggedIn={true}>
      <Container className={"mt-5 start-test-div"}>
        <Row>
          <Col md={12}>
            <div className={"card"}>
              <div className={"card-heading"}>{selectedQuiz?.quiz?.title}</div>
              <div className={"card-body"} style={{ padding: "20px 40px" }}>
                {userQuizScore?.sections?.map((section, index) => {
                  return (
                    <StartTestRow
                      testType={"new"}
                      testTime={selectedQuiz?.quiz?.sections?.items?.[index]?.time}
                      testUnit={"min"}
                      testTitle={section.title}
                      testDescription={`${(userQuizScore?.userQuizAnswers?.items?.filter(x => x.sectionId === section?.id)).length} of ${selectedQuiz?.quiz?.sections?.items?.[index]?.questions?.items.length} questions complete`}
                      selectedQuiz={selectedQuiz}
                      selectedSectionId={section?.id}
                      userQuizScore={userQuizScore}
                      selectedSection={section}
                    />
                  );
                })}
                {/* <StartTestRow testType={"old"} testTime={60} testUnit={"min"} testTitle={"Reading"} testDescription={"0 of 40 questions complete"}/>
                                <StartTestRow testType={"old"} testTime={60} testUnit={"min"} testTitle={"Reading"} testDescription={"0 of 40 questions complete"}/>
                                <StartTestRow testType={"old"} testTime={60} testUnit={"min"} testTitle={"Reading"} testDescription={"0 of 40 questions complete"}/> */}
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

export default StartTest;
