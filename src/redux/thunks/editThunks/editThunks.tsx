import toast from "react-hot-toast";
import apiInterceptor from "../../../utils/apiInterceptor";
import { loadEditAstroActionCreator } from "../../features/editSlice";
import { AppDispatch } from "../../store/store";

export const loadEditAstroThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const { data: astroDetailData } = await apiInterceptor.get(
        `/astros/${id}`
      );

      dispatch(loadEditAstroActionCreator(astroDetailData));
    } catch {
      toast.error("Something went wrong");
    }
  };
