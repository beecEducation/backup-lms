import * as Actions from '../../actions/actions';

const initialState = {
    listCartItems:[],
    couponResponse: {}
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CURRENT_USER_CART_DATA:
            return {
                ...state,
                listCartItems: action.data
            };
        case Actions.COUPON_RESULT:
            return {
                ...state,
                couponResponse: action.data
            };
        default:
            return state;
    }
};
export default cart;
