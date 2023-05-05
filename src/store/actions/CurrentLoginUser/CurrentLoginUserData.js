import * as Actions from '../index';
import * as TYPES from '../actions';

export const saveUserData = userSubmission => {
    return {
        type: TYPES.CURRENT_USER_ALL_DATA,
        data: userSubmission,
    };
};

export const submitUserData = (userData) => {
    return dispatch => {
        dispatch(Actions.saveUserData(userData))
    }
}