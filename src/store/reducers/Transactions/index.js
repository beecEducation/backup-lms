import * as Actions from '../../actions/actions';

const initialState = {
    listTransactions:[]
};

const course = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LIST_TRANSACTIONS:
            return {
                ...state,
                listTransactions: action.data
            };
        default:
            return state;
    }
};
export default course;
