import * as Actions from '../index';
import * as TYPES from '../actions';
import { createUserQuiz } from '../../../api/mutations'
import { API, graphqlOperation } from 'aws-amplify'

export const Start = getData => {
    return {
        type: TYPES.USER_START_QUIZ,
        data: getData,
    };
};

export const quizStart = (userData) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING,
              });
            return API.graphql(graphqlOperation(createUserQuiz, { userId: userData.userId, quizId: userData.quizId })).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                const response = JSON.parse(result.data.createUserQuiz);
                if(response.statusCode === 200) {
                } else {
                }
                dispatch(Actions.Start(JSON.parse(result.data.createUserQuiz)))
                return result
            })
        } catch (err) {
            console.log("Error in quizStart is ", err);
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
        }
    }
}