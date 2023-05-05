import * as Actions from '../index';
import * as TYPES from '../actions';
import { listUserCartItems } from '../../../api/queries'
import { createCartItem, createFreePackage } from '../../../api/mutations'
import { deleteCartItem } from '../../../graphql/mutations';
import { checkout } from '../../../graphql/mutations';
import { verifyCoupon } from '../../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify'
import { toast } from 'react-toastify';

export const saveCartData = userSubmission => {
    return {
        type: TYPES.CURRENT_USER_CART_DATA,
        data: userSubmission,
    };
};

export const saveCouponResult = userSubmission => {
    return {
        type: TYPES.COUPON_RESULT,
        data: userSubmission,
    };
};

export const dispatchCartItems = (userData) => {
    return dispatch => {
        dispatch({
            type: TYPES.UI_START_LOADING
        });
        try {
            return API.graphql(graphqlOperation(listUserCartItems, { userId: userData })).then((result) => {
                dispatch(Actions.saveCartData(result.data.listUserCartItems.items))
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                return result
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            toast.error("Error in dispatch is ", err);
        }
    }
}
export const dispatchAddToCart = (userData, userID) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING
            });
            return API.graphql(graphqlOperation(createCartItem, { input: userData })).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(Actions.dispatchCartItems(userID));
                toast.success('Item added to cart');
                return result
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            toast.error("Error in dispatch is ", err);
        }
    }
}

export const dispatchDeleteCartItem = (userData, userID) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING
            });
            return API.graphql(graphqlOperation(deleteCartItem, { input: userData })).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(Actions.dispatchCartItems(userID));
                toast.success('Item deleted successfully');
                return result
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            toast.error("Error in dispatch is ", err);
        }
    }
}
export const dispatchVerifyCoupon = (userData, userID) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING
            });
            return API.graphql(graphqlOperation(verifyCoupon, { input: userData })).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                const parsed = JSON.parse(result.data.verifyCoupon)
                if(parsed.statusCode === 200){
                    dispatch(Actions.saveCouponResult(parsed.body.data));
                    toast.success('Coupon verified successfully');
                } else{
                    toast.error(parsed.body.message);
                }
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            toast.error("Error in dispatch is ", err);
        }
    }
}

export const dispatchCheckout = (userData, userID) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING
            });
            return API.graphql(graphqlOperation(checkout, { input: userData })).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                const parsed = JSON.parse(result.data.checkout)
                if(parsed.statusCode === 200){
                    dispatch(saveCartData([]));
                    dispatch(saveCouponResult({}));
                    localStorage.setItem('checkStats', 'afterCheckout')
                    window.open(parsed.body.data.checkoutPageUrl, "_self");
                    return result
                } else{
                    toast.error(parsed.body.message);
                }
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            toast.error("Error in dispatch is ", err);
        }
    }
}
export const dispatchCreateFreePackage = (userData, userID) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING
            });
            return API.graphql(graphqlOperation(createFreePackage, userData)).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                console.log("Result] is ", result)
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            toast.error("Error in dispatch is ", err);
        }
    }
}