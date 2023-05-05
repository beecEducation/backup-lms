import * as Actions from '../../actions/actions';

const initialState = {
    saveAllDataofLoggedinUser: []
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CURRENT_USER_ALL_DATA:
            return {
                ...state,
                saveAllDataofLoggedinUser: action.data
            };
        default:
            return state;
    }
};
export default user;
