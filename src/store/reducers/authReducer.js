import { SocialAPI } from "../../api/api";

const SET_LOGIN = "SET_LOGIN";

const initState = {
  userId: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        userId: action.payload,
      };

    default:
      return state;
  }
};

const setLoginAC = (data) => ({ type: SET_LOGIN, payload: data });

export const setLoginThunk = (email, password) => {
  return (dispatch) => {
    SocialAPI.setLogin(email, password).then((res) =>
      dispatch(setLoginAC(res.data.data.userId))
    );
  };
};

export default authReducer;
