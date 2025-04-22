import { SocialAPI } from "../../api/api";

const GET_PROFILE = "GET_PROFILE";
const GET_STATUS = "GET_STATUS";


const initState = {
  profile: {},
  userStatus: "",
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case GET_STATUS:
      return {
        ...state,
        userStatus: action.payload,
      };
    default:
      return state;
  }
};

const getProfileAC = (data) => ({ type: GET_PROFILE, payload: data });
const getStatusAC = (status) => ({ type: GET_STATUS, payload: status });

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    SocialAPI.getProfile(userId).then((res) =>
      dispatch(getProfileAC(res.data))
    );
  };
};

export const getStatusThunk = (userId) => {
  return (dispatch) => {
    SocialAPI.getStatus(userId).then((res) => dispatch(getStatusAC(res.data)));
  };
};

export const changeStatusThunk = (newStatus, userId) => {
  return (dispatch) => {
    SocialAPI.changeStatus(newStatus).then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(getStatusThunk(userId));
      }
    });
  };
};

export default profileReducer;
