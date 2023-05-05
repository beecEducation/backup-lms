import * as Actions from '../index';
import * as TYPES from '../actions';
import { getQuestion } from '../../../api/queries'
import { API, graphqlOperation } from 'aws-amplify'


export const saveSingleQuestion = (userData) => {
    return {
        type: TYPES.GET_SINGLE_QUESTION,
        data: userData,
    };
}

export const saveSelectedAnswer = (userData) => {
    return {
        type: TYPES.REVIEW_SELECTED_ANSWER,
        data: userData,
    };
}

export const dispatchGetQuestion = (userData) => {
    return dispatch => {
        try {
            return API.graphql(graphqlOperation(getQuestion, {id: userData})).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                console.log("Get quesroin is ", result.data.getQuestion)
                dispatch(Actions.saveSingleQuestion(result.data.getQuestion))
                return result
            })
        } catch (err) {
            console.log("Error in dispatchListStudentsByParent is ", err);
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
        }
    }
}
