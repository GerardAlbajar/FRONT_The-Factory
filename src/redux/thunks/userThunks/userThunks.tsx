import axios from "axios";
import jwtDecode from "jwt-decode";
import { UserInfo, UserLogin, UserRegister } from "../../../types/types";
import { logInActionCreator } from "../../features/userSlice";
import { AppDispatch } from "../../store/store";

export const logInUserThunk =
  (loginInformation: UserLogin) => async (dispatch: AppDispatch) => {
    const route: string = `${process.env.REACT_APP_API_URL}user/login`;
    const {
      data: { token },
    } = await axios.post(route, loginInformation);

    localStorage.setItem("TokenKey", token);

    const userInfo: UserInfo = jwtDecode(token);

    dispatch(logInActionCreator(userInfo));
  };

export const signUpUserThunk =
  (formData: UserRegister) => async (dispatch: AppDispatch) => {
    await axios.post(`${process.env.REACT_APP_API_URL}user/register`, formData);

    const newUser = {
      username: formData.username,
      password: formData.password,
    };

    const route = `${process.env.REACT_APP_API_URL}user/login`;
    const {
      data: { token },
    } = await axios.post(route, newUser);
    localStorage.setItem("TokenKey", token);
    const userInfo: UserInfo = jwtDecode(token);

    dispatch(logInActionCreator(userInfo));
  };
