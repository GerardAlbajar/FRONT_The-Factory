import toast from "react-hot-toast";
import apiInterceptor from "../../../utils/apiInterceptor";
import { loadAstrosActionCreator } from "../../features/astroSlice";
import { AppDispatch } from "../../store/store";

export const loadAstrosThunk = () => async (dispatch: AppDispatch) => {
  try {
    const { data: astroPartData } = await apiInterceptor.get("/astroparts");

    toast.loading("Loading");

    const { data: astroData } = await apiInterceptor.get("/astros");

    const astrosData = [...astroPartData, ...astroData];

    dispatch(loadAstrosActionCreator(astrosData));

    toast.dismiss();
    toast.success("Astros loaded successful");
  } catch (error) {
    toast.dismiss();
    toast.error("Something went wrong");
  }
};
