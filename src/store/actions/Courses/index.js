import * as Actions from '../index';
import * as TYPES from '../actions';
import { listPackages } from '../../../api/queries'
import { listUserPackages } from '../../../api/queries'
import { listStudentPackages } from '../../../api/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { sortByDate } from '../../../common';

export const selectedCourseForRegistration = (userData) => {
    return {
        type: TYPES.SELECT_COURSE_FOR_CART,
        data: userData,
    };
}

export const saveAllCourses = (userData) => {
    return {
        type: TYPES.SAVE_COURSES,
        data: userData,
    };
}

export const saveUserCourses = (userData) => {
    return {
        type: TYPES.SAVE_MY_COURSE,
        data: userData,
    };
}

export const listAllCourses = () => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING
            });
            return API.graphql({ query: listPackages, authMode: 'API_KEY' }).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(Actions.saveAllCourses(result.data.listPackages.items))
                return result
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            console.log("Error in dispatch is ", err);
        }
    }
}

export const dispatchMyCousesForParent = (userData) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING
            });
            return API.graphql(graphqlOperation(listUserPackages, userData)).then(async (result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                const courses = await sortByDate(result?.data?.listUserPackages?.items)
                dispatch(Actions.saveUserCourses(courses))
                return result
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            console.log("Error in dispatch is ", err);
        }
    }
}

export const dispatchMyCousesForStudent = (userData) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING
            });
            return API.graphql(graphqlOperation(listStudentPackages, userData)).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(Actions.saveUserCourses(result?.data?.listStudentPackages?.items))
                return result
            })
        } catch (err) {
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
            console.log("Error in dispatch is ", err);
        }
    }
}
