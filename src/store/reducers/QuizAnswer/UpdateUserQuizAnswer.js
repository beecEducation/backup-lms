import * as Actions from '../../actions/actions';

const initialState = {
    updateSelectedQuizAnswers: []
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case Actions.UPDATE_QUIZ_ANSWERS:
            return {
                ...state,
                updateSelectedQuizAnswers: action.data
            };
        default:
            return state;
    }
};
export default user;
