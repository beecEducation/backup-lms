import * as Actions from '../../actions/actions';

const initialState = {
    questionSelectedAnswers: []
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case Actions.QUESTION_SELECTED_ANSWERS:
            return {
                ...state,
                questionSelectedAnswers: action.data
            };
        default:
            return state;
    }
};
export default user;
