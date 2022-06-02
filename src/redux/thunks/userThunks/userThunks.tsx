import axios from "axios";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";
import { UserInfo, UserLogin, UserRegister } from "../../../types/types";
import { logInActionCreator } from "../../features/userSlice";
import { AppDispatch } from "../../store/store";

export const logInUserThunk =
  (loginInformation: UserLogin) => async (dispatch: AppDispatch) => {
    try {
      const route: string = `${process.env.REACT_APP_API_URL}user/login`;
      const {
        data: { token },
      } = await axios.post(route, loginInformation);

      localStorage.setItem("TokenKey", token);

      const userInfo: UserInfo = jwtDecode(token);

      dispatch(logInActionCreator(userInfo));
      toast.success("Log-In successfull");
    } catch (error) {
      toast.error("Wrong Username or Password");
    }
  };

export const signUpUserThunk =
  (formData: UserRegister) => async (dispatch: AppDispatch) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}user/register`,
        formData
      );

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
      toast.success("Sign-Up successfull");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
