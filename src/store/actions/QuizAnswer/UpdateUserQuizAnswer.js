import * as Actions from "../index";
import * as TYPES from "../actions";
import { updateUserQuizAnswer } from "../../../api/mutations";
import { API, graphqlOperation } from "aws-amplify";

export const updateQuizAnswer = (userSubmission) => {
  return {
    type: TYPES.UPDATE_QUIZ_ANSWERS,
    data: userSubmission,
  };
};

export const submitQuizAnswerUpdate = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(
        graphqlOperation(updateUserQuizAnswer, { input: userData })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        dispatch(
          Actions.updateQuizAnswer(result.data.updateUserQuizAnswer.items)
        );
        return result;
      });
    } catch (err) {
      console.log("Error in submitQuizAnswerUpdate is ", err);
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
    }
  };
};
