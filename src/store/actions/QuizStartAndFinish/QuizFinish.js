import * as Actions from "../index";
import * as TYPES from "../actions";
import { updateUserQuiz } from "../../../api/mutations";
import { getUserQuiz } from "../../../api/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { sortByOrderId } from "../../../common";

export const finish = (getData) => {
  return {
    type: TYPES.USER_FINISH_QUIZ,
    data: getData,
  };
};

export const saveFinishedQuizId = (getData) => {
  return {
    type: TYPES.USER_FINISH_QUIZ_ID,
    data: getData,
  };
};

export const saveCurrentSectionId = (getData) => {
  return {
    type: TYPES.SELECTED_SECTION_ID,
    data: getData,
  };
};

export const quizFinish = (userData) => {
  // const navigate = useNavigate()
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(
        graphqlOperation(updateUserQuiz, {
          id: userData.id,
          userId: userData.userId,
          status: userData.status,
        })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        const parsed = JSON.parse(result.data.updateUserQuiz);
        if (parsed.statusCode === 200) {
          dispatch(Actions.saveFinishedQuizId(userData.id));
          dispatch(Actions.finish(parsed?.body?.data));
        } else {
          console.log("Error in getting quiz finish");
        }
        return result;
      });
    } catch (err) {
      console.log("Error in quizFinish is ", err);
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
    }
  };
};

export const dispatchGetQuizScores = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(graphqlOperation(getUserQuiz, { id: userData })).then(
        async (result) => {
          dispatch({
            type: TYPES.UI_STOP_LOADING,
          });
          if(result?.data?.getUserQuiz?.score) {
            var temp = [];
            result?.data?.getUserQuiz?.score?.sections?.map((item) => {
              temp.push(JSON.parse(item));
            });
            const sorted = await sortByOrderId(temp);
            result.data.getUserQuiz.score.sections = sorted;
          }
          
          dispatch(Actions.finish(result?.data?.getUserQuiz));
          return result;
        }
      );
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in dispatchGetQuizScores is ", err);
    }
  };
};
