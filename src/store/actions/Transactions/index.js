import * as Actions from '../index';
import * as TYPES from '../actions';
import { listUserTransactions } from '../../../api/queries'
import { API, graphqlOperation } from 'aws-amplify'

export const saveListTransactions = (userData) => {
    return {
        type: TYPES.LIST_TRANSACTIONS,
        data: userData,
    };
}

export const dispatchListTransactions = (userData) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING,
              });
            return API.graphql(graphqlOperation(listUserTransactions, userData)).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(Actions.saveListTransactions(result.data.listUserTransactions.items))
                return result
            })
        } catch (err) {
            console.log("Error in dispatch is ", err);
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
        }
    }
}