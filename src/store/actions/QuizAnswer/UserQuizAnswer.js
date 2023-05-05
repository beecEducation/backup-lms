import * as Actions from "../index";
import * as TYPES from "../actions";
import { createUserQuizAnswer } from "../../../api/mutations";
import { API, graphqlOperation } from "aws-amplify";

export const createQuizAnswer = (userSubmission) => {
  return {
    type: TYPES.QUESTION_SELECTED_ANSWERS,
    data: userSubmission,
  };
};

export const submitQuizAnswer = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(
        graphqlOperation(createUserQuizAnswer, { input: userData })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        dispatch(
          Actions.createQuizAnswer(result.data.createUserQuizAnswer.items)
        );
        return result;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in submitQuizAnswer is ", err);
    }
  };
};
