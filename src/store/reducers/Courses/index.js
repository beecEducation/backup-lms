import * as Actions from '../../actions/actions';

const initialState = {
    listCourses:[]
};

const course = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SAVE_COURSES:
            return {
                ...state,
                listCourses: action.data
            };
        case Actions.SELECT_COURSE_FOR_CART:
            return {
                ...state,
                selectedCourseForCart: action.data
            };
        case Actions.SAVE_MY_COURSE:
            return {
                ...state,
                myCourses: action.data
            };
        default:
            return state;
    }
};
export default course;
