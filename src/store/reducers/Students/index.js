import * as Actions from '../../actions/actions';

const initialState = {
    listStudentsByParent:[],
    listStudentsByFamily:[],
};

const course = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LIST_STUDENTS_BY_PARENTS:
            return {
                ...state,
                listStudentsByParent: action.data
            };
        case Actions.LIST_STUDENTS_BY_FAMILY:
            return {
                ...state,
                listStudentsByFamily: action.data
            };
        case Actions.SELECTED_STUDENT:
            return {
                ...state,
                selectedStudent: action.data
            };
        default:
            return state;
    }
};
export default course;
