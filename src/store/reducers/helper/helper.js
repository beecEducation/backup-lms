import * as Actions from '../../actions/actions';

const initialState = {
  isLoading: false,
  quizReloadRequired: true,
  hsptReloadRequired: true
};
const helper = (state = initialState, action) => {
    switch (action.type) {
        case Actions.UI_START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case Actions.UI_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case Actions.QUIZ_NEEDS_RELOAD:
            return {
                ...state,
                quizReloadRequired: action.data
            };
        case Actions.HSPT_NEEDS_RELOAD:
            return {
                ...state,
                hsptReloadRequired: action.data
            }; 
        default:
            return state;
    }
};
export default helper;
