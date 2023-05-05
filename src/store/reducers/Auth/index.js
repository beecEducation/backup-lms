import * as Actions from '../../actions/actions';

const initialState = {
    user: {}
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case Actions.AUTH_CURRENT_USER:
            return {
                ...state,
                cognito: action.data
            };
        case Actions.AUTH_SAVE_USER_DETAILS:
            return {
                ...state,
                user: action.data
            };
        default:
            return state;
    }
};
export default user;
