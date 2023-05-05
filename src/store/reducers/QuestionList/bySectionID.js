import * as Actions from '../../actions/actions';

const initialState = {
    questionListWithSectionID:[]
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case Actions.QUESTIONS_BY_SECTION_ID:
            return {
                ...state,
                questionListWithSectionID: action.data
            };
        default:
            return state;
    }
};
export default user;
