import * as TYPES from "../actions";

export const uiStartLoading = () => {
  return {
    type: TYPES.UI_START_LOADING,
  };
};

export const uiStopLoading = () => {
  return {
    type: TYPES.UI_STOP_LOADING,
  };
};
export const quizNeedsReload = (userData) => {
  return {
    type: TYPES.QUIZ_NEEDS_RELOAD,
    data: userData,
  };
};
export const hsptNeedsReload = (userData) => {
  return {
    type: TYPES.HSPT_NEEDS_RELOAD,
    data: userData
  };
};
