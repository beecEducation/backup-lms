import * as Actions from '../../actions/actions';

const initialState = {
    quizAnswersListData: []
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case Actions.QUIZ_ANSWERS_BY_USER_QUIZ_ID:
            return {
                ...state,
                quizAnswersListData: action.data
            };
        default:
            return state;
    }
};
export default user;
