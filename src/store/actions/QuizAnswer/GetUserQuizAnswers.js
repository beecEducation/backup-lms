import * as Actions from '../index';
import * as TYPES from '../actions';
import { listUserQuizAnswers } from '../../../api/queries'
import { API, graphqlOperation } from 'aws-amplify'

export const showAllQuizAnswers = allData => {
    return {
        type: TYPES.QUIZ_ANSWERS_BY_USER_QUIZ_ID,
        data: allData,
    };
};

export const listQuizAnswers = (userData) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING,
              });
            return API.graphql(graphqlOperation(listUserQuizAnswers, { userQuizId: userData.id })).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(Actions.showAllQuizAnswers(result.data.listUserQuizAnswers.items))
                return result
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            console.log("Error in listQuizAnswers is ", err);
        }
    }
}