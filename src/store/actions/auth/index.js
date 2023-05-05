import * as Actions from "../index";
import * as TYPES from "../actions";
import { getUser } from "../../../api/queries";
import { API, graphqlOperation } from "aws-amplify";
// import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import {
  addUserFromSignup,
  signup,
  updateProfile,
  updateUser,
} from "../../../api/mutations";
import { GraphQLQuery, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

export const authCurrentUser = (userSubmission) => {
  return {
    type: TYPES.AUTH_CURRENT_USER,
    data: userSubmission,
  };
};
export const saveUserDetails = (userSubmission) => {
  return {
    type: TYPES.AUTH_SAVE_USER_DETAILS,
    data: userSubmission,
  };
};

export const submitLoginUser = (userData) => {
  return (dispatch) => {
    dispatch(Actions.authCurrentUser(userData));
  };
};

export const getUserDetails = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(graphqlOperation(getUser, userData)).then(
        (result) => {
          dispatch({
            type: TYPES.UI_STOP_LOADING,
          });
          dispatch(Actions.saveUserDetails(result.data.getUser));
          return result.data.getUser;
        }
      );
    } catch (err) {
      console.log("Error in getting user details is ", err);
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
    }
  };
};
export const dispatchUpdateUser = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(
        graphqlOperation(updateProfile, {
          input: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            school: userData.school,
            phone: userData.phone,
            address: userData.address,
          },
          userType: userData.userType,
        })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        // dispatch(Actions.saveUserDetails(result.data.getUser))
      });
    } catch (err) {
      console.log("Error in getting user details is ", err);
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
    }
  };
};

export const dispatchCreateUser = (userData, parent, mode) => {
  return (dispatch) => {
    try {
      if (parent == null) {
        return API.graphql({
          query: signup,
          variables: { input: userData, mode: mode },
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
        }).then((result) => {
          return result?.data?.signup;
        });
      } else {
        return API.graphql({
          query: signup,
          variables: { input: userData, parent: parent, mode: mode },
          authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
        }).then((result) => {
          return result?.data?.signup;
        });
      }
    } catch (err) {
      console.log("Error in getting user details is ", err);
    }
  };
};

export const checkUserEmail = (email, mode) => {
  return (dispatch) => {
    try {
      return API.graphql({
        query: signup,
        variables: { mode: mode, email: email, input: null, parent: null },
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      }).then((result) => {
        console.log("Result is ", result);
        return result?.data?.signup;
      });
    } catch (err) {
      console.log("Error in getting user details is ", err);
    }
  };
};

export const dispatchUpdateUserStatus = (userData) => {
  return (dispatch) => {
    try {
      dispatch({
        type: TYPES.UI_START_LOADING,
      });
      return API.graphql(
        graphqlOperation(updateUser, {
          input: userData
        })
      ).then((result) => {
        dispatch({
          type: TYPES.UI_STOP_LOADING,
        });
        console.log("Result in updating profile", result)
        return result
        // dispatch(Actions.saveUserDetails(result.data.getUser))
      });
    } catch (err) {
      console.log("Error in getting user details is ", err);
      dispatch({
        type: TYPES.UI_STOP_LOADING,
      });
    }
  };
};
