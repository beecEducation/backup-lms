import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
import { Text, View } from "@aws-amplify/ui-react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Images } from "../index";
import "./style.sass";
import { useNavigate } from "react-router-dom";

const StartTestRow = ({
  quizId,
  testType,
  testTime,
  testUnit,
  testTitle,
  testDescription,
  selectedQuiz,
  selectedSectionId,
  userQuizScore,
  selectedSection,
}) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div className={"start-test-row"}>
      <div className={"card-row"}>
        <div className={"card-col-2"}>
          <div className={"test-time-div"}>
            <View className={"test-time"}>
              <Text>{testTime}</Text>
              <Text style={{ marginTop: "-6px" }}>{testUnit}</Text>
            </View>
          </div>
          <View>
            <Text className={"test-name"}>{testTitle}</Text>
            <Text className={"test-description"}>{testDescription}</Text>
          </View>
        </div>

        {testType == "new" ? (
          <div className={"card-col"}>
            <View
              className={"menu start-test"}
              onClick={() => {
                dispatch(Actions.saveFinishedQuizId(quizId));
                dispatch(Actions.saveCurrentSectionId(selectedSectionId));
                if(selectedSection?.status === "PENDING") {
                  var updateUserQuizSection = {
                    id: selectedSectionId,
                    quizId: userQuizScore?.quizId,
                    userQuizId: userQuizScore?.id,
                    userId: userQuizScore?.userId,
                    status: "STARTED",
                  };
                  dispatch(
                    Actions.dispatchUpdateUserQuizSection(updateUserQuizSection)
                  );
                }
                if (selectedQuiz?.status == "PENDING") {
                  var userData = {
                    id: selectedQuiz.id,
                    userId: selectedQuiz.userId,
                    status: "STARTED",
                  };
                  dispatch(Actions.dispatchUpdateUserQuiz(userData));
                }
                if (selectedSection?.status !== "FINISHED") {
                  navigate("/new_quiz");
                }
              }}
            >
              {selectedSection?.status == "PENDING" ||
              selectedSection?.status == "STARTED" ? (
                <>
                  <Text>
                    <AiOutlineArrowRight />
                  </Text>
                  <Text>
                    {selectedSection?.status === "PENDING"
                      ? "Start"
                      : "Continue"}
                  </Text>
                </>
              ) : null}

              {selectedSection?.status == "FINISHED" ? (
                <>
                  {/* <Text>
                    <AiOutlineArrowRight />
                  </Text> */}
                  <Text>
                    Done
                  </Text>
                </>
              ) : null}
            </View>
            {/* <View className={"menu reset-test"}>
                            <Text><img src={Images.reset}/></Text>
                            <Text>Reset</Text>
                        </View> */}
          </div>
        ) : (
          <div className={"card-col"}>
            <View className={"menu view-result"}>
              <Text>
                <AiOutlineArrowRight />
              </Text>
              <Text>View Results</Text>
            </View>
            <View className={"menu show-paper"}>
              <Text>
                <img src={Images.paper} />
              </Text>
              <Text>Score Paper</Text>
            </View>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartTestRow;
