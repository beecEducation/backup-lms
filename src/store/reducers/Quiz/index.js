import * as Actions from '../../actions/actions';

const initialState = {
    listUserQuizzes:[],
    listQuestionsBySectionId: [],
    startedQuiz: {},
    selectedQuiz: {},
    listUserQuizAnswers: [],
    listUserQuizzesByPackageId: [],
    reRenderQuizPagination: "",
    getUserQuizForStartedAt: {}
};

const course = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LIST_USER_QUIZZES:
            return {
                ...state,
                listUserQuizzes: action.data
            };
        case Actions.SELECTED_QUIZ_ID_FOR_SECTIONS:
            return {
                ...state,
                selectedQuizIdForSections: action.data
            };
        case Actions.LIST_QUIZ_SECTIONS:
            return {
                ...state,
                quizSections: action.data
            };
        case Actions.LIST_QUESTIONS_BY_SECTION_ID:
            return {
                ...state,
                listQuestionsBySectionId: action.data
            };
        case Actions.SAVE_STARTED_QUIZ:
            return {
                ...state,
                startedQuiz: action.data
            };
        case Actions.SELECTED_QUIZ:
            return {
                ...state,
                selectedQuiz: action.data
            };
        case Actions.LIST_USER_QUIZ_ANSWERS:
            return {
                ...state,
                listUserQuizAnswers: action.data
            };
        case Actions.LIST_USER_QUIZ_BY_PACKAGE_ID:
            return {
                ...state,
                listUserQuizzesByPackageId: action.data
            };
        case Actions.RE_RENDER_QUIZ_PAGINATION:
            return {
                ...state,
                reRenderQuizPagination: action.data
            };
        case Actions.RE_RENDER_QUIZ_PARA:
            return {
                ...state,
                reRenderQuizPara: action.data
            };
        case Actions.GET_USER_QUIZ_FOR_STARTED_AT:
            return {
                ...state,
                getUserQuizForStartedAt: action.data
            };
        default:
            return state;
    }
};
export default course;
