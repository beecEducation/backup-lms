import * as Actions from "../index";
import * as TYPES from "../actions";
import {
  getUserQuizForStartedAt,
  listUserQuizAnswers,
  listUserQuizzesByUserId,
  listUserQuizzesByUserPackageId,
} from "../../../api/queries";
import { listQuizSectionsByQuizId } from "../../../api/queries";
import { listQuestionsBySectionId } from "../../../api/queries";

import { API, graphqlOperation } from "aws-amplify";
import {
  createUserQuizAnswer,
  updateUserQuiz,
  updateUserQuizAnswer,
  updateUserQuizSection,
} from "../../../api/mutations";
import { sortByDate, sortByOrderId } from "../../../common";

export const saveListUserQuizzes = (userData) => {
  return {
    type: TYPES.LIST_USER_QUIZZES,
    data: userData,
  };
};

export const saveQuizSections = (userData) => {
  return {
    type: TYPES.LIST_QUIZ_SECTIONS,
    data: userData,
  };
};

export const saveSelectedQuizIdForSections = (userData) => {
  return {
    type: TYPES.SELECTED_QUIZ_ID_FOR_SECTIONS,
    data: userData,
  };
};

export const saveSelectedQuiz = (userData) => {
  return {
    type: TYPES.SELECTED_QUIZ,
    data: userData,
  };
};

export const saveQuestionsBySectionID = (allQuestions) => {
  return {
    type: TYPES.LIST_QUESTIONS_BY_SECTION_ID,
    data: allQuestions,
  };
};

export const saveStartedQuiz = (userData) => {
  return {
    type: TYPES.SAVE_STARTED_QUIZ,
    data: userData,
  };
};

export const reRenderQuizPagination = (userData) => {
  return {
    type: TYPES.RE_RENDER_QUIZ_PAGINATION,
    data: userData,
  };
};

export const reRenderPassagePara = (userData) => {
  return {
    type: TYPES.RE_RENDER_QUIZ_PARA,
    data: userData,
  };
};

export const saveGetUserQuizForStartedAt = (userData) => {
  return {
    type: TYPES.GET_USER_QUIZ_FOR_STARTED_AT,
    data: userData,
  };
};

export const dispatchListUserQuizzesByUserId = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(
        graphqlOperation(listUserQuizzesByUserId, { userId: userData.userId })
      ).then(async (result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        const quizzes = await sortByDate(
          result?.data?.listUserQuizzesByUserId?.items
        );
        dispatch(Actions.saveListUserQuizzes(quizzes));
        return quizzes;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in dispatchListUserQuizzesByUserId is ", err);
    }
  };
};

export const dispatchListQuizSectionsByQuizId = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(
        graphqlOperation(listQuizSectionsByQuizId, { quizId: userData.quizId })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        dispatch(
          Actions.saveQuizSections(
            result?.data?.listQuizSectionsByQuizId?.items
          )
        );
        return result;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in dispatchListQuizSectionsByQuizId is ", err);
    }
  };
};

export const dispatchListQuestionsBySectionId = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(
        graphqlOperation(listQuestionsBySectionId, { sectionId: userData.id })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        dispatch(
          Actions.saveQuestionsBySectionID(
            result.data.listQuestionsBySectionId.items
          )
        );
        return result;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in question list is ", err);
    }
  };
};

export const dispatchUpdateUserQuiz = (userData) => {
  return (dispatch) => {
    try {
      // dispatch({
      //   type: TYPES.UI_START_LOADING,
      // });
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
          dispatch(Actions.saveStartedQuiz(parsed?.body?.data));
        } else {
          console.log("Error in getting quiz finish");
        }
        return result;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in quizFinish is ", err);
    }
  };
};

export const dispatchUpdateUserQuizSection = (userData) => {
  return (dispatch) => {
    try {
      return API.graphql(
        graphqlOperation(updateUserQuizSection, userData)
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        return result;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in quizFinish is ", err);
    }
  };
};

export const saveListQuizAnswer = (allData) => {
  return {
    type: TYPES.LIST_USER_QUIZ_ANSWERS,
    data: allData,
  };
};

export const dispatchListUserQuizAnswers = (userData) => {
  return (dispatch) => {
    try {
      // dispatch({
      //   type: TYPES.UI_START_LOADING,
      // });
      return API.graphql(
        graphqlOperation(listUserQuizAnswers, { userQuizId: userData.id, limit: 500 })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        dispatch(
          Actions.saveListQuizAnswer(result?.data.listUserQuizAnswers.items)
        );
        return result;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in listQuizAnswers is ", err);
    }
  };
};

export const saveListQuizByPackageId = (allData) => {
  return {
    type: TYPES.LIST_USER_QUIZ_BY_PACKAGE_ID,
    data: allData,
  };
};

export const dispatchListUserQuizzesByUserPackageId = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(
        graphqlOperation(listUserQuizzesByUserPackageId, {
          userPackageId: userData.id,
        })
      ).then(async (result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        await Promise.all(result.data.listUserQuizzesByUserPackageId.items.map(async (item) => {
          var temp = [];
          if(item?.status === "FINISHED") {
            item?.score?.sections?.map((section) => {
              temp.push(JSON.parse(section));
            });
            const sort = await sortByOrderId(temp)
            item.score.sections = sort;            
          } else {
            const sort = await sortByOrderId(item?.quiz?.sections?.items)
            item.quiz.sections.items = sort;
          }
        }))
        dispatch(
          Actions.saveListQuizByPackageId(
            result.data.listUserQuizzesByUserPackageId.items
          )
        );
        return result;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in listQuizAnswers is ", err);
    }
  };
};

export const dispatchCreateUserQuizAnswer = (userData) => {
  return (dispatch) => {
    try {
      // dispatch({
      //   type: TYPES.UI_START_LOADING,
      // });
      return API.graphql(
        graphqlOperation(createUserQuizAnswer, { input: userData })
      ).then((result) => {
        // dispatch({
        //   type: TYPES.UI_STOP_LOADING,
        // });
        dispatch(
          Actions.dispatchListUserQuizAnswers({
            id: result.data.createUserQuizAnswer.userQuizId,
          })
        );
        // dispatch(Actions.saveListQuizAnswer(result.data.createUserQuizAnswer.items))
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

export const dispatchUpdateUserQuizAnswer = (userData) => {
  return (dispatch) => {
    try {
      // dispatch({
      //   type: TYPES.UI_START_LOADING,
      // });
      return API.graphql(
        graphqlOperation(updateUserQuizAnswer, { input: userData })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        dispatch(
          Actions.dispatchListUserQuizAnswers({
            id: result.data.updateUserQuizAnswer.userQuizId,
          })
        );
        // dispatch(Actions.saveListQuizAnswer(result.data.updateUserQuizAnswer.items))
        return result;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in submitQuizAnswerUpdate is ", err);
    }
  };
};

export const dispatchGetUserQuizForStartedAt = (userData) => {
  return (dispatch) => {
    try {
      return API.graphql(
        graphqlOperation(getUserQuizForStartedAt, { id: userData.id })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        dispatch(
          Actions.saveGetUserQuizForStartedAt(result?.data?.getUserQuiz)
        );
        // dispatch(Actions.saveListQuizAnswer(result.data.updateUserQuizAnswer.items))
        return result;
      });
    } catch (err) {
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
      console.log("Error in submitQuizAnswerUpdate is ", err);
    }
  };
};
