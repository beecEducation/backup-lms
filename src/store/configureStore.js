import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import byQuestionID from './reducers/QuestionList/bySectionID'
import submitQuizAnswer from './reducers/QuizAnswer/UserQuizAnswer'
import currentUserAllData from './reducers/CurrentLoginUser/CurrentLoginUserData'
import userQuizAllDataByUserQuizID from './reducers/QuizAnswer/GetUserQuizAnswers'
import updateSelectedQuizAnswer from './reducers/QuizAnswer/UpdateUserQuizAnswer'
import startUserQuiz from './reducers/QuizStartAndFinish/QuizStart'
import finishUserQuiz from './reducers/QuizStartAndFinish/QuizFinish'
import auth from './reducers/Auth'
import courses from './reducers/Courses'
import students from './reducers/Students'
import cart from './reducers/Cart'
import transactions from './reducers/Transactions'
import quiz from './reducers/Quiz'
import helper from './reducers/helper/helper'
import review from './reducers/review';

const appReducer = combineReducers({
    byQuestionID,
    submitQuizAnswer,
    currentUserAllData,
    userQuizAllDataByUserQuizID,
    updateSelectedQuizAnswer,
    startUserQuiz,
    finishUserQuiz,
    auth,
    courses,
    students,
    cart,
    transactions,
    quiz,
    helper,
    review
})

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        localStorage.clear();
        state = undefined
    }
    return appReducer(state, action)
}

let composeEnhancers = compose;

function storeToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();


// if (__DEV__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }
const configureStore = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

configureStore.subscribe(() => {
    storeToLocalStorage(configureStore.getState())
})

export default configureStore;
