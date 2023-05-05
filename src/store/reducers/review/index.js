import * as Actions from '../../actions/actions';

const initialState = {
    singleQuestion:{},
    selectedAnswer: null,
};

const course = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_SINGLE_QUESTION:
            return {
                ...state,
                singleQuestion: action.data
            };
        case Actions.REVIEW_SELECTED_ANSWER:
            return {
                ...state,
                selectedAnswer: action.data
            };
        default:
            return state;
    }
};
export default course;
