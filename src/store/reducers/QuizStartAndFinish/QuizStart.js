import * as Actions from '../../actions/actions';

const initialState = {
    quizStartedData: []
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case Actions.USER_START_QUIZ:
            return {
                ...state,
                quizStartedData: action.data
            };
        default:
            return state;
    }
};
export default user;
