import * as Actions from '../../actions/actions';

const initialState = {
    quizFinishedData: [],
    quizFinishedId: ""
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case Actions.USER_FINISH_QUIZ:
            return {
                ...state,
                quizFinishedData: action.data
            };
        case Actions.USER_FINISH_QUIZ_ID:
            return {
                ...state,
                quizFinishedId: action.data
            };
        case Actions.SELECTED_SECTION_ID:
            return {
                ...state,
                listQuestionsBySectionId: action.data
            };
        default:
            return state;
    }
};
export default user;
