import * as Actions from '../index';
import * as TYPES from '../actions';
import { listQuestionsBySectionId } from '../../../api/queries'
import { API, graphqlOperation } from 'aws-amplify'

export const saveAllData = allQuestions => {
    return {
        type: TYPES.QUESTIONS_BY_SECTION_ID,
        data: allQuestions,
    };
};

export const questionList = (userData) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING
            });
            return API.graphql(graphqlOperation(listQuestionsBySectionId, { sectionId: userData.id })).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(Actions.saveAllData(result.data.listQuestionsBySectionId.items))
                return result
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            console.log("Error in question list is ", err);
        }
    }
}