import * as Actions from '../index';
import * as TYPES from '../actions';
import { listStudentsByFamily, listStudentsByParent } from '../../../api/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { addUser } from '../../../graphql/mutations';
import { removeUser } from '../../../api/mutations';

export const selectedCourseForRegistration = (userData) => {
    return {
        type: TYPES.SELECT_COURSE_FOR_CART,
        data: userData,
    };
}

export const saveListStudentsByParent = (userData) => {
    return {
        type: TYPES.LIST_STUDENTS_BY_PARENTS,
        data: userData,
    };
}
export const saveListStudentsByFamiy = (userData) => {
    return {
        type: TYPES.LIST_STUDENTS_BY_FAMILY,
        data: userData,
    };
}

export const saveStudent = (userData) => {
    return {
        type: TYPES.SELECTED_STUDENT,
        data: userData,
    };
}

export const dispatchListStudentsByParent = (userData) => {
    return dispatch => {
        try {
            return API.graphql(graphqlOperation(listStudentsByParent, userData)).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(Actions.saveListStudentsByParent(result.data.listStudentsByParent.items))
                return result
            })
        } catch (err) {
            console.log("Error in dispatchListStudentsByParent is ", err);
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
        }
    }
}
export const dispatchListStudentsByFamiy = (userData) => {
    return dispatch => {
        try {
            return API.graphql(graphqlOperation(listStudentsByFamily, userData)).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(Actions.saveListStudentsByParent(result.data.listStudentsByFamily.items))
                return result.data.listStudentsByFamily.items
            })
        } catch (err) {
            console.log("Error in dispatchListStudentsByParent is ", err);
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
        }
    }
}

export const createStudent = (userData) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING,
              });
            return API.graphql(graphqlOperation(addUser, { input: userData, mode: "STUDENT" })).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                const student = JSON.parse(result.data.addUser);
                dispatch(Actions.saveStudent(student.body.data))
                dispatch(dispatchListStudentsByParent({
                    parentId: userData.parentId,
                    sortDirection: "DESC",
                }))
                return result
            })
        } catch (err) {
            console.log("Error in createStudent is ", err);
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
        }
    }
}
export const deleteUser = (userData) => {
    return dispatch => {
        try {
            dispatch({
                type: TYPES.UI_START_LOADING,
              });
            return API.graphql(graphqlOperation(removeUser, {userId: userData.userId})).then((result) => {
                dispatch({
                    type: TYPES.UI_STOP_LOADING
                });
                dispatch(dispatchListStudentsByParent({
                    parentId: userData.parentId,
                    sortDirection: "DESC",
                }))
                return result
            })
        } catch (err) {
            console.log("Error in deleteUser is ", err);
            dispatch({
                type: TYPES.UI_STOP_LOADING
            });
        }
    }
}