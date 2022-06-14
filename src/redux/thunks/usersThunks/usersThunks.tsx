import toast from "react-hot-toast";
import { IUser } from "../../../types/types";
import apiInterceptor from "../../../utils/apiInterceptor";
import {
  loadedOffActionCreator,
  loadedOnActionCreator,
} from "../../features/uiSlice";
import { loadUsersActionCreator } from "../../features/usersSlice";
import { AppDispatch } from "../../store/store";

export const loadUsersThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadedOnActionCreator());
    const { data: usersData } = await apiInterceptor.get("/users");

    const usersFilter = usersData.filter(
      (user: IUser) => user.inventory.perfect.length > 0
    );

    dispatch(loadUsersActionCreator(usersFilter));
    dispatch(loadedOffActionCreator());
  } catch {
    toast.error("Something went wrong");
    dispatch(loadedOffActionCreator());
  }
};
